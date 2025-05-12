/**
 * User roles in the system
 */
export enum UserRole {
  USER = "user",
  ADMIN = "admin",
}

/**
 * Represents a user in the system
 */
export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  createdAt: Date;
  updatedAt: Date;
}

export type UserInput = Omit<User, "id" | "createdAt" | "updatedAt">;
