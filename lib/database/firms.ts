import { slugifyTerm } from "@/lib/glossary/slugify";

import type { Firm, FirmGroup, FirmGroupKey } from "./types";
import { FIRM_GROUP_ORDER } from "./types";

const rawFirmNames = [
  "01 Advisors",
  "01 Ventures",
  "010118 Management, L.P.",
  "012factory",
  "01Booster Inc.",
  "01Labs",
  "01Vc Advisor Ltd",
  "021 Capital",
  "1",
  "1",
  "1 Main Capital Management, Llc",
  "1 North Wealth Services, Llc",
  "1 Roundtable Partners Llc",
  "1 Seed Partners Llc",
  "1.5° Ventures",
  "1Billion Partners",
  "1confirmation",
  "1Ep Management Llc",
  "1Flourish Capital",
  "2",
  "2",
  "2.5 Ventures",
  "2A Investimentos",
  "2b AHEAD Ventures",
  "2B-Community Impact Investment",
  "2B.VC",
  "2be.lu",
  "2C INVEST",
  "2F CAPITAL Ltd",
  "2Gether-International",
  "3",
  "3",
  "3 Boomerang Capital, Lp",
  "3 Day Startup | WHU Founders Bootcamp",
  "3 Factor Indexing, Llc",
  "3 P Global Consortium",
  "3 Rivers Capital, LLC",
  "3(38) Investment Fiduciaries",
  "301 INC",
  "301 Ventures",
  "303 Capital Partners, LLC",
  "4",
  "4",
  "4 Friends Investment GmbH",
  "4 Ventures",
  "4-Horn Investments",
  "4.0 Schools",
  "40/86 Advisors, Inc.",
  "400 Capital Management LLC",
  "401K Generation",
  "408 Ventures",
  "412 Venture Fund LP",
  "5",
  "5",
  "50 Partners",
  "50 Partners Impact",
  "50 South Capital",
  "50 South Capital Advisors, Llc",
  "500 Emerging Europe",
  "500 Global",
  "500 Kimchi Management Company Llc",
  "500 Latin America (500 LatAm)",
  "500 Southeast Asia",
  "6",
  "6",
  "6 Degrees Capital",
  "6 Dimensions Capital",
  "613 Lab",
  "618 Ventures",
  "645 Ventures",
  "6529 Capital Llc",
  "68 King William Street, London, United Kingdom, Ec4N 7Hr",
  "683 Capital Management, Llc",
  "6G Capital",
  "7",
  "7",
  "7 Gate Ventures",
  "7 Street Ventures",
  "705 Cambridge",
  "70V",
  "724 Asset Management, Llc",
  "724 Capital, Llc",
  "747 Capital",
  "757 Accelerate",
  "757 Angels",
  "8",
  "8",
  "8 Billion Acts of Innovation - Where Artificial Intelligence (AI) Meets Human Creativity",
  "8 Dimension Ventures",
  "8 Knots Management, Llc",
  "8 Miles LLP",
  "8 Rivers",
  "8-Bit Capital",
  "800 Ventures",
  "801 West Capital Management",
  "805 AgTech Ventures, LLC",
  "9",
  "9",
  "9 Capital Management",
  "906 Capital, LLC",
  "909brokers.com",
  "91 Ventures",
  "917 Family Office AG",
  "92 CAPITAL",
  "971 Capital",
  "98 Sparks",
  "9823 Capital, Lp",
  "10",
  "10 Branch, LLC",
  "10 Bridge Capital",
  "10 East Partners Llc",
  "10 Point Capital",
  "10,000 Days Capital Management Llc",
  "100+ Accelerator",
  "1004 Partners",
  "100K Venture",
  "100Unicorns",
  "100X Entrepreneur Fund Advisory, Llc",
  "A",
  "A",
  "A ANTHONY CORPORATE LIMITED",
  "A Fin Management Llc",
  "A Plus Finance",
  "A Smarter Way To Invest, Inc.",
  "A-6684",
  "A-Force Ventures",
  "A-Grade Management Llc",
  "A-Level Capital",
  "A-Venture",
  "B",
  "B",
  "B & Capital",
  "B Capital",
  "B Capital Group",
  "B Corp Fund",
  "B Current Impact Investment Inc.",
  "B Dash Ventures Inc.",
  "B Heroes",
  "B Ventures",
  "B-29 Investments, LP",
  "C",
  "C",
  "C Advisory: International Tax | Fund Structuring | Angel Investing",
  "C Cubed Capital Partners, Llc",
  "C Squared Fund",
  "C Ventures",
  "C Worldwide Asset Management Fondsmaeglerselskab A/S",
  "C-Bridge Capital Investment Management, Ltd.",
  "C-Iii Investment Management Llc",
  "C-Quadrat Investment Group",
  "C. Deilmann GmbH & Co. KG",
] as const;

type FirmRecord = Firm & { order: number };

const slugCounts = new Map<string, number>();

const processedFirms: FirmRecord[] = rawFirmNames
  .map((rawName, index) => {
    const name = rawName.trim();
    if (!name) {
      return null;
    }

    const baseSlug = createBaseSlug(name, index);
    const count = slugCounts.get(baseSlug) ?? 0;
    const nextCount = count + 1;
    slugCounts.set(baseSlug, nextCount);

    const slug = nextCount === 1 ? baseSlug : `${baseSlug}-${nextCount}`;

    return {
      name,
      slug,
      groupKey: getGroupKey(name),
      order: index,
    };
  })
  .filter((firm): firm is FirmRecord => Boolean(firm));

export const firms: Firm[] = processedFirms
  .sort((a, b) => {
    const comparison = a.name.localeCompare(b.name, undefined, {
      sensitivity: "base",
    });

    if (comparison !== 0) {
      return comparison;
    }

    return a.order - b.order;
  })
  .map((record) => ({
    name: record.name,
    slug: record.slug,
    groupKey: record.groupKey,
  }));

const slugSet = new Set(firms.map((firm) => firm.slug));
if (slugSet.size !== firms.length) {
  throw new Error("Duplicate slugs detected in firm dataset.");
}

export const firmCount = firms.length;

const firmsBySlug = new Map(firms.map((firm) => [firm.slug, firm]));

export function findFirmBySlug(slug: string) {
  return firmsBySlug.get(slug);
}

export function buildFirmGroups(): FirmGroup[] {
  const buckets = FIRM_GROUP_ORDER.reduce<Record<FirmGroupKey, Firm[]>>(
    (acc, key) => {
      acc[key] = [];
      return acc;
    },
    {} as Record<FirmGroupKey, Firm[]>,
  );

  firms.forEach((firm) => {
    buckets[firm.groupKey].push(firm);
  });

  return FIRM_GROUP_ORDER.map((key) => ({
    key,
    firms: buckets[key],
  })).filter((group) => group.firms.length > 0);
}

function createBaseSlug(name: string, index: number) {
  const base = slugifyTerm(name);
  if (base) {
    return base;
  }

  const fallback = name
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-{2,}/g, "-");

  return fallback || `firm-${index + 1}`;
}

function getGroupKey(name: string): FirmGroupKey {
  const trimmed = name.trim();
  if (!trimmed) {
    return "#";
  }

  const firstChar = trimmed.charAt(0);

  if (/^[0-9]$/.test(firstChar)) {
    return "0-9";
  }

  if (/^[a-zA-Z]$/.test(firstChar)) {
    return firstChar.toUpperCase() as FirmGroupKey;
  }

  return "#";
}
