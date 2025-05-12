import { Difficulty } from "./difficulty";
import { Tag } from "./tags";

/**
 * Represents a coding problem
 */
export interface Problem {
  id: string;
  title: string;
  description: string;
  difficulty: Difficulty;
  tags: Tag[];
  hints?: string[];
  solutionUrl?: string;
  timeComplexity?: string;
  spaceComplexity?: string;
  createdAt: Date;
  updatedAt: Date;
}

export type ProblemInput = Omit<Problem, "id" | "createdAt" | "updatedAt">;
