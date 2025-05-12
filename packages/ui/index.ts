import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export * from "./components";
export * from "./styles";
export * from "./icons";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
