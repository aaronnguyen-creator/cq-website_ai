import Image from "next/image";
import Link from "next/link";
import type { Post } from "@/lib/insights/types";

type InsightHeroProps = {
  post: Post;
};

export function InsightHero({ post }: InsightHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-white py-20 text-[#0B0F14]">
      <div className="absolute inset-0">
        {post.image ? (
          <Image
            src={post.image.src}
            alt={post.image.alt}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-r from-gray-200 to-gray-100" />
        )}
        <div className="absolute inset-0 bg-white/85 backdrop-blur-[2px]" />
      </div>
      <div className="relative mx-auto flex w-full max-w-5xl flex-col gap-6 px-4 text-center sm:text-left">
        <div className="flex justify-center sm:justify-start">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-semibold text-[#0B0F14] transition hover:text-[#1F2937] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B0F14]/20"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 4 6 8l4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Back to Insights
          </Link>
        </div>
        <div className="text-sm font-semibold uppercase tracking-[0.4em] text-[#6B7280]">
          {post.category}
        </div>
        <h1 className="text-4xl font-heading font-semibold leading-tight sm:text-5xl">
          {post.title}
        </h1>
        <p className="text-lg text-[#374151] sm:text-xl">{post.excerpt}</p>
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-[#4B5563] sm:justify-start">
          <span>{post.author}</span>
          <span className="h-1 w-1 rounded-full bg-[#9CA3AF]" />
          <span>{post.readingTime}</span>
          <span className="h-1 w-1 rounded-full bg-[#9CA3AF]" />
          <span>
            {new Intl.DateTimeFormat("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            }).format(new Date(post.date))}
          </span>
        </div>
      </div>
    </section>
  );
}
