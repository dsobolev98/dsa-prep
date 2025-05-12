import { semanticColors } from "../../styles";
import { cn } from "ui";
import { Difficulty } from "types";

interface LevelLabelProps {
  level: Difficulty;
  className?: string;
}

export const LevelLabel = ({ level, className }: LevelLabelProps) => {
  const colors = semanticColors.labels[level];

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md px-2 py-1 text-xs font-medium",
        className,
      )}
      style={{
        backgroundColor: colors.background,
        color: colors.text,
        borderColor: colors.border,
        borderWidth: "1px",
      }}
    >
      {level.charAt(0).toUpperCase() + level.slice(1)}
    </span>
  );
};
