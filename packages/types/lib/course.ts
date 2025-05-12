import { IconName } from "./icon";

export enum CourseDifficulty {
  Beginner = "Beginner",
  Intermediate = "Intermediate",
  Advanced = "Advanced",
}

export interface Course {
  id: string;
  title: string;
  description: string;
  icon: IconName;
  difficulty: CourseDifficulty;
}
