import React from "react";
import { twMerge } from "tailwind-merge";

type FlexboxWrapperProps = {
  children: React.ReactNode;
  className?: string;
  direction?: "row" | "column";
  align?: "start" | "center" | "end";
  justify?: "start" | "center" | "end" | "between" | "around";
};

export const FlexboxWrapper = ({
  children,
  className,
  direction = "row",
  align = "center",
  justify = "center",
}: FlexboxWrapperProps) => {
  return (
    <div
      className={twMerge(
        `flex flex-${direction} items-${align} justify-${justify}`,
        className
      )}
    >
      {children}
    </div>
  );
};
