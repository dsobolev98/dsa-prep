/**
 * Tags for categorizing problems
 */
export enum Tag {
  ARRAYS = "arrays",
  STRINGS = "strings",
  LINKED_LISTS = "linked-lists",
  STACKS = "stacks",
  QUEUES = "queues",
  TREES = "trees",
  GRAPHS = "graphs",
  SORTING = "sorting",
  SEARCHING = "searching",
  DYNAMIC_PROGRAMMING = "dynamic-programming",
  GREEDY = "greedy",
  RECURSION = "recursion",
  HASHING = "hashing",
  BACKTRACKING = "backtracking",
  BIT_MANIPULATION = "bit-manipulation",
  MATH = "math",
}

export type ProblemTag = keyof typeof Tag;
