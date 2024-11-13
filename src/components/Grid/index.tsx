import React from "react";
import { twMerge } from "tailwind-merge";

type GridProps = {
  children: React.ReactNode;
  className?: string;
  rows?: number;
  columns?: number;
  gap?: string;
};

export const Grid = ({
  children,
  className,
  rows,
  columns,
  gap,
}: GridProps) => {
  return (
    <div
      className={twMerge(
        `grid grid-rows-${rows} grid-cols-${columns} gap-${gap}`,
        className
      )}
    >
      {children}
    </div>
  );
};
