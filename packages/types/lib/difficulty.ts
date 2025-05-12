/**
 * Represents difficulty levels for problems
 */
export enum Difficulty {
  BEGINNER = "beginner",
  INTERMEDIATE = "intermediate",
  ADVANCED = "advanced",
  EXPERT = "expert",
}

export type DifficultyLevel = keyof typeof Difficulty;
