export const FIRM_GROUP_ORDER = [
  "#",
  "0-9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
] as const;

export type FirmGroupKey = (typeof FIRM_GROUP_ORDER)[number];

export type Firm = {
  name: string;
  slug: string;
  groupKey: FirmGroupKey;
};

export type FirmGroup = {
  key: FirmGroupKey;
  firms: Firm[];
};
