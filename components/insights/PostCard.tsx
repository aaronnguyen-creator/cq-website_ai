import Image from "next/image";
import Link from "next/link";
import type { Post } from "@/lib/insights/types";
import { cn } from "@/lib/utils";

type PostCardVariant = "large" | "small" | "grid";
type CardTone = "dark" | "light";

export const DEFAULT_INSIGHT_DETAIL_PATH =
  "/insights/allocator-digital-workflows";

type PostCardProps = {
  post: Post;
  variant?: PostCardVariant;
  className?: string;
  hrefOverride?: string;
  tone?: CardTone;
};

const variantClasses: Record<
  PostCardVariant,
  { title: string; excerpt: string; image: string; body: string }
> = {
  large: {
    title: "text-2xl font-semibold",
    excerpt: "text-base",
    image: "h-60 sm:h-72",
    body: "gap-4 p-6",
  },
  small: {
    title: "text-xl font-semibold",
    excerpt: "text-sm",
    image: "h-48",
    body: "gap-3 p-5",
  },
  grid: {
    title: "text-xl font-semibold",
    excerpt: "text-sm",
    image: "h-48",
    body: "gap-3 p-5",
  },
};

function formatDate(dateInput: string) {
  try {
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }).format(new Date(dateInput));
  } catch {
    return dateInput;
  }
}

export function PostCard({
  post,
  variant = "grid",
  className,
  hrefOverride,
  tone = "dark",
}: PostCardProps) {
  const classes = variantClasses[variant];
  const meta = [post.category, post.readingTime].filter(Boolean).join(" • ");
  const resolvedHref = hrefOverride ?? DEFAULT_INSIGHT_DETAIL_PATH;
  const toneStyles: Record<
    CardTone,
    {
      card: string;
      meta: string;
      excerpt: string;
      footer: string;
      image: string;
    }
  > = {
    dark: {
      card:
        "border border-white/10 bg-gradient-to-b from-white/5 to-transparent text-white hover:border-white/30 hover:bg-white/5 focus-visible:ring-white/40",
      meta: "text-white/60",
      excerpt: "text-white/70",
      footer: "text-white/60",
      image: "bg-gradient-to-br from-white/10 via-white/5 to-transparent",
    },
    light: {
      card:
        "border border-black/10 bg-white text-[#0B0F14] hover:border-black/20 hover:shadow-[0_25px_60px_rgba(15,23,42,0.08)] focus-visible:ring-[#0B0F14]/20",
      meta: "text-[#6B7280]",
      excerpt: "text-[#4B5563]",
      footer: "text-[#6B7280]",
      image: "bg-gradient-to-br from-[#f4f6fb] via-white to-transparent",
    },
  };
  const toneStyle = toneStyles[tone];

  return (
    <Link
      href={resolvedHref}
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-2xl transition focus-visible:outline-none focus-visible:ring-2",
        toneStyle.card,
        className
      )}
      aria-label={post.title}
    >
      <div
        className={cn(
          "relative w-full overflow-hidden",
          toneStyle.image,
          classes.image
        )}
      >
        {post.image ? (
          <Image
            src={post.image.src}
            alt={post.image.alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="object-cover transition duration-300 group-hover:scale-[1.02]"
            priority={variant === "large"}
          />
        ) : (
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.15),_transparent)]" />
        )}
      </div>
      <div className={cn("flex flex-1 flex-col", classes.body)}>
        <div
          className={cn(
            "flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.3em]",
            toneStyle.meta
          )}
        >
          {meta}
        </div>
        <h3 className={cn(classes.title, "leading-snug")}>{post.title}</h3>
        <p className={cn(classes.excerpt, toneStyle.excerpt)}>
          {post.excerpt}
        </p>
        <div className={cn("mt-auto pt-3 text-sm", toneStyle.footer)}>
          <span>{formatDate(post.date)}</span>
          {post.author ? <span className="ml-2">• {post.author}</span> : null}
        </div>
      </div>
    </Link>
  );
}
