import { Course, CourseDifficulty } from "types";

export const dataStructureOptions: Course[] = [
  {
    id: "arrays",
    title: "Arrays",
    description:
      "Learn about the most fundamental data structure in programming.",
    icon: "array",
    difficulty: CourseDifficulty.Beginner,
  },
  {
    id: "linked-lists",
    title: "Linked Lists",
    description: "Understand how linked lists work and when to use them.",
    icon: "linked-list",
    difficulty: CourseDifficulty.Intermediate,
  },
  {
    id: "stacks",
    title: "Stacks",
    description: "Explore the LIFO (Last-In-First-Out) data structure.",
    icon: "array",
    difficulty: CourseDifficulty.Beginner,
  },
  {
    id: "queues",
    title: "Queues",
    description: "Learn about the FIFO (First-In-First-Out) data structure.",
    icon: "array",
    difficulty: CourseDifficulty.Beginner,
  },
  {
    id: "hash-tables",
    title: "Hash Tables",
    description: "Understand how to implement efficient key-value storage.",
    icon: "array",
    difficulty: CourseDifficulty.Intermediate,
  },
  {
    id: "binary-trees",
    title: "Binary Trees",
    description: "Explore tree structures and their applications.",
    icon: "tree",
    difficulty: CourseDifficulty.Intermediate,
  },
  {
    id: "binary-search-trees",
    title: "Binary Search Trees",
    description: "Learn about ordered tree data structures.",
    icon: "tree",
    difficulty: CourseDifficulty.Intermediate,
  },
  {
    id: "heaps",
    title: "Heaps",
    description: "Understand priority queues and heap implementations.",
    icon: "tree",
    difficulty: CourseDifficulty.Advanced,
  },
  {
    id: "graphs",
    title: "Graphs",
    description:
      "Explore the most versatile data structure in computer science.",
    icon: "graph",
    difficulty: CourseDifficulty.Advanced,
  },
];
