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
  {
    title: string;
    excerpt: string;
    image: string;
    body: string;
  }
> = {
  large: {
    title: "text-2xl font-semibold md:text-3xl",
    excerpt: "text-base leading-relaxed md:text-lg",
    image: "aspect-[4/3]",
    body: "gap-4 p-6 md:gap-6 md:p-8",
  },
  small: {
    title: "text-xl font-semibold md:text-2xl",
    excerpt: "text-sm leading-relaxed md:text-base",
    image: "aspect-[4/3]",
    body: "gap-4 p-5",
  },
  grid: {
    title: "text-xl font-semibold md:text-2xl",
    excerpt: "text-sm leading-relaxed md:text-base",
    image: "aspect-[4/3]",
    body: "gap-4 p-5",
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
  tone = "light",
}: PostCardProps) {
  const classes = variantClasses[variant];
  const meta = [post.category, post.readingTime].filter(Boolean).join(" • ");
  const resolvedHref = hrefOverride ?? DEFAULT_INSIGHT_DETAIL_PATH;
  const toneStyles: Record<
    CardTone,
    {
      card: string;
      meta: string;
      title: string;
      excerpt: string;
      footer: string;
      image: string;
    }
  > = {
    light: {
      card:
        "border border-border bg-card text-foreground shadow-none transition duration-200 hover:-translate-y-1 hover:border-foreground/25 hover:shadow-[0_20px_40px_rgba(15,23,42,0.08)] focus-visible:ring-ring/30",
      meta: "text-muted-foreground",
      title: "text-foreground",
      excerpt: "text-muted-foreground",
      footer: "text-muted-foreground",
      image: "bg-muted",
    },
    dark: {
      card:
        "border border-white/15 bg-[#050608] text-white transition duration-200 hover:-translate-y-1 hover:border-white/30 hover:bg-white/5 focus-visible:ring-white/30",
      meta: "text-white/60",
      title: "text-white",
      excerpt: "text-white/80",
      footer: "text-white/60",
      image: "bg-gradient-to-br from-white/10 via-white/5 to-transparent",
    },
  };
  const toneStyle = toneStyles[tone] ?? toneStyles.light;

  // --- Normalize image (supports string OR {src, alt}) ---
  type PostWithCover = Post & {
    coverImage?: { src: string; alt: string } | string;
    image?: { src: string; alt: string } | string;
  };
  const extendedPost = post as PostWithCover;
  const imageRaw = extendedPost.image ?? extendedPost.coverImage ?? "";
  const imageSrc =
    typeof imageRaw === "string" ? imageRaw : imageRaw?.src ?? "";
  const imageAlt =
    typeof imageRaw === "string" ? post.title : imageRaw?.alt ?? post.title;

  return (
    <Link
      href={resolvedHref}
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-2xl focus-visible:outline-none focus-visible:ring-2",
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
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="object-cover transition duration-300 ease-out group-hover:scale-[1.02]"
            priority={variant === "large"}
          />
        ) : (
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(15,23,42,0.08),_transparent)]" />
        )}
      </div>

      <div className={cn("flex flex-1 flex-col", classes.body)}>
        <div
          className={cn(
            "flex flex-wrap items-center gap-2 text-sm",
            toneStyle.meta
          )}
        >
          {meta}
        </div>

        <h3
          className={cn(
            classes.title,
            "leading-tight tracking-tight",
            toneStyle.title
          )}
        >
          {post.title}
        </h3>

        <p className={cn(classes.excerpt, toneStyle.excerpt)}>{post.excerpt}</p>

        <div className={cn("mt-auto pt-4 text-sm", toneStyle.footer)}>
          <span>{formatDate(post.date)}</span>
          {post.author ? <span className="ml-2">• {post.author}</span> : null}
        </div>
      </div>
    </Link>
  );
}
