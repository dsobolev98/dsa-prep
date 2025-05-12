import { Course, CourseDifficulty } from "types";

export const algorithmOptions: Course[] = [
  {
    id: "sorting",
    title: "Sorting Algorithms",
    description: "Compare different ways to sort data efficiently.",
    icon: "sort",
    difficulty: CourseDifficulty.Beginner,
  },
  {
    id: "searching",
    title: "Searching Algorithms",
    description: "Learn how to find elements in different data structures.",
    icon: "search",
    difficulty: CourseDifficulty.Beginner,
  },
  {
    id: "recursion",
    title: "Recursion",
    description:
      "Master the technique of solving problems by breaking them down.",
    icon: "array",
    difficulty: CourseDifficulty.Beginner,
  },
  {
    id: "dynamic-programming",
    title: "Dynamic Programming",
    description:
      "Learn to optimize recursive algorithms using memoization and tabulation.",
    icon: "array",
    difficulty: CourseDifficulty.Advanced,
  },
  {
    id: "greedy-algorithms",
    title: "Greedy Algorithms",
    description: "Understand how to make locally optimal choices at each step.",
    icon: "array",
    difficulty: CourseDifficulty.Intermediate,
  },
  {
    id: "graph-traversal",
    title: "Graph Traversal",
    description: "Discover methods to visit all nodes in a graph.",
    icon: "graph",
    difficulty: CourseDifficulty.Advanced,
  },
  {
    id: "shortest-path",
    title: "Shortest Path Algorithms",
    description:
      "Learn Dijkstra's and other algorithms for finding shortest paths.",
    icon: "graph",
    difficulty: CourseDifficulty.Advanced,
  },
  {
    id: "backtracking",
    title: "Backtracking",
    description:
      "Explore techniques for solving constraint satisfaction problems.",
    icon: "array",
    difficulty: CourseDifficulty.Advanced,
  },
  {
    id: "string-algorithms",
    title: "String Algorithms",
    description:
      "Learn pattern matching and other string processing techniques.",
    icon: "array",
    difficulty: CourseDifficulty.Intermediate,
  },
];
