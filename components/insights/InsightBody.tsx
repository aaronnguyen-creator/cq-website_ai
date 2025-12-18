import type { ProcessedContentBlock } from "@/lib/insights/types";

type InsightBodyProps = {
  blocks: ProcessedContentBlock[];
};

export function InsightBody({ blocks }: InsightBodyProps) {
  return (
    <article className="space-y-8 text-base leading-7 text-[#1F2933]">
      {blocks.map((block, index) => {
        if (block.type === "h2") {
          return (
            <h2
              key={`${block.text}-${index}`}
              id={block.id}
              className="pt-10 text-3xl font-heading font-semibold text-[#0B0F14]"
            >
              {block.text}
            </h2>
          );
        }

        if (block.type === "h3") {
          return (
            <h3
              key={`${block.text}-${index}`}
              id={block.id}
              className="pt-6 text-2xl font-heading font-semibold text-[#111827]"
            >
              {block.text}
            </h3>
          );
        }

        if (block.type === "p") {
          return (
            <p key={`${block.text.slice(0, 12)}-${index}`} className="text-lg">
              {block.text}
            </p>
          );
        }

        if (block.type === "ul") {
          return (
            <ul
              key={`ul-${index}`}
              className="ml-6 list-disc space-y-2 text-lg marker:text-[#0B0F14]"
            >
              {block.items.map((item, i) => (
                <li key={`${item}-${i}`}>{item}</li>
              ))}
            </ul>
          );
        }

        if (block.type === "ol") {
          return (
            <ol
              key={`ol-${index}`}
              className="ml-6 list-decimal space-y-2 text-lg marker:text-[#0B0F14]"
            >
              {block.items.map((item, i) => (
                <li key={`${item}-${i}`}>{item}</li>
              ))}
            </ol>
          );
        }

        if (block.type === "quote") {
          return (
            <blockquote
              key={`quote-${index}`}
              className="border-l-4 border-[#0B0F14]/30 pl-4 italic text-[#0F172A]"
            >
              “{block.text}”
            </blockquote>
          );
        }

        return null;
      })}
    </article>
  );
}
