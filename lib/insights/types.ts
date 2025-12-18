export type PostImage = {
  src: string;
  alt: string;
};

export type Post = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author?: string;
  readingTime?: string;
  category?: string;
  tags?: string[];
  image?: PostImage;
  content: string;
  contentBlocks: ContentBlock[];
};

export type FeaturedConfig = {
  primaryId: string;
  secondaryIds: [string, string];
};

export type ContentBlock =
  | { type: "h2" | "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "quote"; text: string };

export type ProcessedContentBlock = ContentBlock & { id?: string };
