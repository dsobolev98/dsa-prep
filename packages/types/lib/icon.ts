export const ICON_NAMES = [
  "array",
  "graph",
  "linked-list",
  "search",
  "sort",
  "tree",
] as const;

export type IconName = (typeof ICON_NAMES)[number];
