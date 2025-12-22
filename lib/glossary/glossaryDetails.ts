import type {
  GlossaryDetail,
  GlossarySidebarHighlight,
} from "./types";
import { slugifyTerm } from "./slugify";

export const glossaryDetails: Record<string, GlossaryDetail> = {
  "2-and-20-fee-structure": {
    title: "2 and 20 Fee Structure",
    sections: [
      {
        heading: "What is the 2 and 20 Fee Structure?",
        paragraphs: [
          "The 2 and 20 fee structure is a compensation framework commonly used in hedge funds and private equity, where managers charge a 2% management fee and a 20% performance fee.",
          "This approach aligns the interests of asset managers with investors by providing a steady income through management fees while incentivizing strong performance through performance fees. For example, if a fund manages $100 million and earns a 10% return, the manager collects a $2 million management fee and $2 million from performance.",
        ],
      },
      {
        heading: "The Role of the 2 and 20 Fee Structure in Alternative Investments",
        paragraphs: [
          "The 2 and 20 fee structure is pivotal in alternative investments due to its dual capability: generating income and promoting high returns. It offers managers a consistent revenue stream while motivating them to outperform market benchmarks.",
          "In private equity, this structure supports long-term investment strategies, allowing managers to focus on value creation without immediate pressure. In hedge funds, it encourages risk-managed approaches that aim for alpha generation.",
        ],
      },
      {
        heading: "Advantages and Criticisms of the 2 and 20 Fee Structure",
        paragraphs: [
          "One advantage is that it aligns managers’ incentives with investors by tying compensation to fund performance. This can lead to aggressive growth strategies that benefit both parties.",
          "However, the model faces criticism for potentially encouraging excessive risk-taking to achieve high returns. Additionally, the fixed management fee can be seen as unreasonably high, particularly in underperforming years.",
        ],
      },
      {
        heading: "Evolution and Alternatives to the 2 and 20 Fee Structure",
        paragraphs: [
          "Over time, market dynamics and investor demands have led to variations of the 2 and 20 structure, such as hurdle rates and clawback provisions, which add additional layers of performance-based incentives or investor protections.",
          "Some funds have shifted towards lower base fees coupled with higher performance incentives, or even fee structures based solely on returns, to better align interests and adapt to evolving market conditions.",
        ],
      },
    ],
    faqs: [
      {
        question: "How does the 2% management fee work?",
        answer: [
          "The 2% management fee is calculated on the total assets under management (AUM) and is collected annually. This fee covers operational expenses and provides a stable income stream for the fund manager.",
        ],
      },
      {
        question: "What happens if the fund underperforms?",
        answer: [
          "If a fund underperforms, the manager still receives the management fee but may not earn a performance fee. Some funds have \"high-water marks\" ensuring performance fees are only paid on profits exceeding previous peaks.",
        ],
      },
      {
        question: "Are there any alternatives to the 2 and 20 structure?",
        answer: [
          "Yes, some funds use variations like 1 and 10 or 1.5 and 15, or even fee structures with hurdle rates, which require achieving a minimum return before performance fees are applied.",
        ],
      },
      {
        question: "Why do investors agree to the 2 and 20 structure?",
        answer: [
          "Investors opt for the 2 and 20 structure as it aligns the manager’s incentives with their own, potentially leading to higher returns. The performance fee motivates managers to exceed market expectations.",
        ],
      },
    ],
    conclusion: {
      heading: "Conclusion",
      paragraphs: [
        "The 2 and 20 fee structure remains a cornerstone in alternative investments, offering both steady income and performance incentives for fund managers.",
        "Despite its criticisms, it continues to evolve, reflecting a balance between rewarding high performance and addressing investor concerns.",
      ],
    },
  },
};

const highlightedTermsSource: Array<Omit<GlossarySidebarHighlight, "slug">> = [
  {
    term: "Carried Interest",
    hint: "How managers capture performance upside.",
  },
  {
    term: "Hurdle Rate",
    hint: "Preferred return LPs expect before carry.",
  },
  {
    term: "Due Diligence",
    hint: "Structured review of managers, data, and processes.",
  },
  {
    term: "Drawdown",
    hint: "Capital call against committed funds.",
  },
  {
    term: "General Partner (GP)",
    hint: "The manager operating the fund and strategy.",
  },
  {
    term: "Limited Partner (LP)",
    hint: "Institutional investor providing capital.",
  },
  {
    term: "Subscription Line of Credit",
    hint: "Short-term leverage to time capital calls.",
  },
  {
    term: "Target Company",
    hint: "The business or asset being acquired.",
  },
];

export const highlightedGlossaryTerms: GlossarySidebarHighlight[] =
  highlightedTermsSource.map((item) => ({
    ...item,
    slug: slugifyTerm(item.term),
  }));
