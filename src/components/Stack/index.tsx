import React from "react";
import { twMerge } from "tailwind-merge";

type StackProps = {
  children: React.ReactNode;
  className?: string;
  direction?: "vertical" | "horizontal";
  spacing?: number;
};

export const Stack: React.FC<StackProps> = ({
  children,
  className,
  direction = "vertical",
  spacing = 4,
}) => {
  return (
    <div
      className={twMerge(
        `flex ${
          direction === "vertical" ? "flex-col" : "flex-row"
        } gap-${spacing}`,
        className
      )}
    >
      {children}
    </div>
  );
};
