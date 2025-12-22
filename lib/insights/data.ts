import type { ContentBlock, FeaturedConfig, Post } from "./types";

const baseBlocks = (text: string): ContentBlock[] => [
  { type: "h2", text: "Overview" },
  { type: "p", text },
];

export const insightsPosts: Post[] = [
  {
    id: "insight-01",
    slug: "allocator-digital-workflows",
    title: "Digital diligence workflows every allocator should standardize",
    excerpt:
      "Five repeatable workflows investment teams use to shorten diligence cycles without sacrificing rigor.",
    content:
      "An in-depth playbook covering the most reliable digital diligence workflows allocators run every week.",
    date: "2024-05-01",
    author: "Maya Sharma",
    readingTime: "6 min read",
    category: "Diligence",
    tags: ["workflow", "process", "playbook"],
    image: { src: "/images/insights/digital-diligence.png", alt: "Investors reviewing data" },
    contentBlocks: [
      { type: "h2", text: "Standardize your intake" },
      {
        type: "p",
        text: "Every allocator already has a mental model for evaluating new deals. Document it and create a single intake workflow that mirrors the questions your committee expects answered.",
      },
      { type: "h3", text: "Mandate templates" },
      {
        type: "p",
        text: "Publish short digital forms that collect mandate fit, geographic focus, and target fund metrics. It removes back-and-forth emails and ensures every analyst captures the same data.",
      },
      {
        type: "ul",
        items: [
          "Link each template to your CRM fields so updates sync instantly.",
          "Auto-tag briefings with the diligence stage to keep dashboards trustworthy.",
          "Add a confidence field so reviewers know how vetted each answer is.",
        ],
      },
      { type: "h3", text: "Routing signals" },
      {
        type: "p",
        text: "Use two routing rules: one for risk/compliance concerns and another for mandate clashes. Digital workflows shine when the system routes edge cases to the right specialists in minutes.",
      },
      { type: "h2", text: "Shorten review cycles" },
      {
        type: "p",
        text: "Most time is lost waiting for context. Bundle context with each task, include must-read files, and set expectations on what a ‘complete’ response contains.",
      },
      {
        type: "ol",
        items: [
          "Kickoff briefs summarize why the manager is relevant.",
          "Data room packets organize docs in the same structure every time.",
          "Async comments capture clarifications before the live review.",
        ],
      },
      {
        type: "quote",
        text: "Workflows do not slow creative thinking. They remove the friction so subject-matter experts can spend time on evaluation, not collection.",
      },
      { type: "h2", text: "Keep decision logs" },
      {
        type: "p",
        text: "Finalize every diligence sprint with a short decision memo. Add links to models, include the rationale, and document who signed off. When the next audit arrives, you already have the story.",
      },
{ type: "h3", text: "Assign owners" },
{
  type: "p",
  text: "Give every intake step a single owner and service-level expectation. When someone is responsible for triage, nothing sits for more than a day and sponsors always know where the work is queued.",
},
{
  type: "p",
  text: "Pair those owners with automated reminders. If a task is idle for more than 48 hours, have the system post context in your shared diligence channel so the right leader can re-prioritize.",
},
{ type: "h2", text: "Orchestrate collaboration" },
{
  type: "p",
  text: "Diligence rarely happens sequentially, so orchestrate collaboration with shared checklists and live read-outs. Open every review with the checklist, note blockers in-line, and agree on the handoff date for the next reviewer.",
},
{ type: "h3", text: "Async briefings" },
{
  type: "p",
  text: "Record two-minute video summaries after each working session, pin them at the top of the room, and tag anyone who needs to react. Live meetings can stay focused on decisions instead of catching up absent stakeholders.",
},
{ type: "h3", text: "Decision packets" },
{
  type: "p",
  text: "When you hit the final review, generate a packet that includes the diligence scorecard, manager quotes, legal commentary, and a punch list of remaining items. The committee can approve with confidence because the context travels with the decision.",
},
{
  type: "p",
  text: "After the vote, archive each packet so future diligence sprints can reference precedent. It reduces variance between reviewers and creates a living playbook new analysts can follow.",
},
{ type: "h2", text: "Measure and improve" },
{
  type: "p",
  text: "Treat these workflows like products. Instrument each step with completion times, satisfaction scores from reviewers, and the average number of revisions per memo. Review the data monthly and update the checklist when a bottleneck shows up twice.",
},
    ],
  },
  {
    id: "insight-02",
    slug: "personalized-manager-sourcing",
    title: "Personalized manager sourcing with mandates and data signals",
    excerpt:
      "How allocator teams combine mandates with behavioral data to surface higher-fit managers.",
    content:
      "A data-driven approach to sourcing that layers proprietary signals on top of mandate criteria.",
    date: "2024-04-18",
    author: "Evan Cole",
    readingTime: "8 min read",
    category: "Manager Discovery",
    tags: ["mandates", "signals"],
    image: { src: "/images/insights/Mandates.png", alt: "Analytics dashboard" },
    contentBlocks: [
      { type: "h2", text: "Design mandates that learn" },
      {
        type: "p",
        text: "Mandates cannot stay static. Pair them with trailing performance, fee preferences, and structure tolerance. When you see a pattern of approved deviations, update the template and notify coverage teams.",
      },
      { type: "h3", text: "Signal ladders" },
      {
        type: "p",
        text: "Stack signals by confidence: internal data, third-party benchmarks, and behavioral intent. Weight each ladder so sourcing can prioritize the best combination of fit and intent.",
      },
      {
        type: "ul",
        items: [
          "Engagement data: deck downloads, diligence workspace logins, or chatbot queries.",
          "Market context: peers raising in adjacent strategies or notable exits.",
          "Investor references: sentiment data or opt-in testimonials.",
        ],
      },
      { type: "h2", text: "Activate scoring" },
      {
        type: "p",
        text: "Give every manager a living score. Include mandate match, freshness of data, and relationship depth. Sales and diligence can align on what ‘priority’ actually means.",
      },
      { type: "h3", text: "Partner workflows" },
      {
        type: "p",
        text: "Once a manager crosses a threshold, trigger a workflow to capture updated deck, co-invest data, and references. Automations keep sourcing predictable.",
      },
      { type: "h2", text: "Measure conversion" },
      {
        type: "p",
        text: "Track how many sourced managers progress to diligence and eventual allocation. That feedback loop shows which signals correlate with wins.",
      },
    ],
  },
  {
    id: "insight-03",
    slug: "portfolio-collaboration-metrics",
    title: "Metrics that show your portfolio collaboration is working",
    excerpt:
      "A framework for measuring allocator <> manager engagement across deal rooms and messaging.",
    content:
      "Collaboration metrics that help investor relations teams prioritize support.",
    date: "2024-03-28",
    author: "Priya Gupta",
    readingTime: "5 min read",
    category: "Collaboration",
    tags: ["analytics", "relationships"],
    image: { src: "/images/insights/metrics.jpg", alt: "Team collaboration" },
    contentBlocks: [
      { type: "h2", text: "Define shared outcomes" },
      {
        type: "p",
        text: "Managers and allocators both want speed and clarity. Translate that into measurable actions aligned to each diligence stage.",
      },
      { type: "h3", text: "Engagement stack" },
      {
        type: "p",
        text: "Layer platform logins, document reads, and Q&A replies. Triangulate who actually interacts with the data room.",
      },
      {
        type: "ul",
        items: [
          "Active collaborators per room",
          "Average response time to clarifications",
          "Files most referenced before committee",
        ],
      },
      { type: "h2", text: "Health scoring" },
      {
        type: "p",
        text: "Benchmark healthy rooms with these metrics so you can intervene earlier when a process slows down.",
      },
      { type: "h3", text: "Signal thresholds" },
      {
        type: "p",
        text: "Flag rooms with declining views or unanswered tasks. Automatically ping the manager sponsor with context so they can re-engage stakeholders.",
      },
      { type: "quote", text: "Collaboration needs telemetry. When you can show what great looks like, everyone leans into the process." },
    ],
  },
  {
    id: "insight-04",
    slug: "ai-dataroom-readiness",
    title: "Is your data room AI-ready?",
    excerpt:
      "Checklist for structuring files, access, and metadata so AI copilots can accelerate reviews.",
    content: "A practical checklist for ensuring AI copilots understand your data room context.",
    date: "2024-03-15",
    author: "Jordan Ruiz",
    readingTime: "4 min read",
    category: "AI Workflows",
    tags: ["data rooms", "security"],
    image: { src: "/images/insights/ai-dataroom.jpg", alt: "Data room view" },
    contentBlocks: baseBlocks(
      "Give every file a consistent naming convention, ensure OCR quality on scans, and use permissions that match diligence stages so AI copilots can cite the right source."
    ),
  },
  {
    id: "insight-05",
    slug: "allocator-briefings",
    title: "Allocator briefings: how to prep for manager onsites in half the time",
    excerpt:
      "Template for briefing packs that combine market data, manager notes, and diligence tasks.",
    content: "A briefing template used by modern allocator teams.",
    date: "2024-02-27",
    author: "Alana Reid",
    readingTime: "7 min read",
    category: "Meetings",
    tags: ["briefings", "ops"],
    image: { src: "/images/insights/allocator briefings.jpg", alt: "Meeting preparation" },
    contentBlocks: baseBlocks(
      "Bundle macro notes, deal history, and outstanding diligence questions into a single packet so the onsite conversation focuses on decisions, not discovery."
    ),
  },
  {
    id: "insight-06",
    slug: "control-towers-for-investments",
    title: "Control towers for investment teams",
    excerpt:
      "What modern control towers track across relationships, docs, and mandate fulfillment.",
    content: "A snapshot of the dashboards leadership teams rely on.",
    date: "2024-02-12",
    author: "Zoe Francis",
    readingTime: "9 min read",
    category: "Strategy",
    tags: ["governance", "visibility"],
    image: { src: "/images/insights/investment-teams.jpg", alt: "Portfolio control tower" },
    contentBlocks: baseBlocks(
      "Bring opportunity pipelines, diligence workloads, and LP communications into a single live workspace so executives can unblock teams faster."
    ),
  },
  {
    id: "insight-07",
    slug: "playbooks-for-community-updates",
    title: "Community updates allocators actually read",
    excerpt:
      "Email playbooks for sharing quarterly positioning, manager adds, and risk themes.",
    content: "A messaging cadence that keeps community updates relevant.",
    date: "2024-01-29",
    author: "Maya Sharma",
    readingTime: "4 min read",
    category: "Communications",
    tags: ["community", "investor-relations"],
    image: { src: "/images/insights/mock-7.png", alt: "Newsletter planning" },
    contentBlocks: baseBlocks(
      "Segment recipients by mandate interest, highlight the two metrics that moved, and keep CTAs action-oriented so they know exactly how to respond."
    ),
  },
  {
    id: "insight-08",
    slug: "signals-from-95k-managers",
    title: "Signals the top 5% of 95K managers send before raising",
    excerpt:
      "Decoded behaviors that forecast manager readiness months before a formal raise.",
    content: "Behavioral signals to watch months ahead of a raise.",
    date: "2024-01-12",
    author: "Evan Cole",
    readingTime: "6 min read",
    category: "Manager Discovery",
    tags: ["signals", "predictive"],
    image: { src: "/images/insights/mock-8.png", alt: "Signal visualization" },
    contentBlocks: baseBlocks(
      "Look for operating partner hires, outbound references, and sudden data room refreshes—those are leading indicators a fund is preparing to market."
    ),
  },
  {
    id: "insight-09",
    slug: "indexing-alt-data",
    title: "How allocators index alternative data for faster diligence",
    excerpt:
      "Approaches to tagging private benchmark data, transcripts, and manager decks.",
    content: "Indexing tactics for unstructured data.",
    date: "2023-12-18",
    author: "Priya Gupta",
    readingTime: "5 min read",
    category: "Data",
    tags: ["indexing", "data-engineering"],
    image: { src: "/images/insights/mock-9.png", alt: "Data indexing graphs" },
    contentBlocks: baseBlocks(
      "Use semantic tagging and OCR transcripts to make every diligence answer searchable for future mandates."
    ),
  },
  {
    id: "insight-10",
    slug: "allocator-ai-briefing-bots",
    title: "Allocator AI briefing bots: what good looks like",
    excerpt:
      "A rubric for evaluating AI copilots built for allocations and manager conversations.",
    content: "Evaluation rubric for allocator-specific AI copilots.",
    date: "2023-12-01",
    author: "Jordan Ruiz",
    readingTime: "8 min read",
    category: "AI Workflows",
    tags: ["copilots", "evaluation"],
    image: { src: "/images/insights/mock-10.png", alt: "AI assistant UI" },
    contentBlocks: baseBlocks(
      "Score copilots on sourcing accuracy, privacy controls, and transparency so stakeholders trust the recommendations."
    ),
  },
  {
    id: "insight-11",
    slug: "compliance-ready-insight-sharing",
    title: "Compliance-ready insight sharing",
    excerpt:
      "How to keep investment memos and AI responses audit-ready without slowing teams down.",
    content: "Governance controls for insight sharing.",
    date: "2023-11-20",
    author: "Zoe Francis",
    readingTime: "6 min read",
    category: "Compliance",
    tags: ["audit", "ops"],
    image: { src: "/images/insights/mock-11.png", alt: "Secure document sharing" },
    contentBlocks: baseBlocks(
      "Centralize memos, apply retention policies, and log every AI-generated answer so compliance teams have a full audit trail."
    ),
  },
  {
    id: "insight-12",
    slug: "allocator-os",
    title: "The allocator operating system playbook",
    excerpt:
      "A multi-phase roadmap for teams unifying sourcing, diligence, and LP communications.",
    content: "A phased roadmap for modern allocator stacks.",
    date: "2023-11-05",
    author: "Alana Reid",
    readingTime: "10 min read",
    category: "Strategy",
    tags: ["operating-model"],
    image: { src: "/images/insights/mock-12.png", alt: "Operating system workflow" },
    contentBlocks: baseBlocks(
      "Adopt shared taxonomies, centralize source data, and align KPIs so investment, IR, and ops stay synchronized."
    ),
  },
];

export const featuredInsights: FeaturedConfig = {
  primaryId: "insight-01",
  secondaryIds: ["insight-02", "insight-04"],
};
