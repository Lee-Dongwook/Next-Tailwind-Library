import React from "react";
import { twMerge } from "tailwind-merge";

type DividerProps = {
  className?: string;
};

export const Divider = ({ className }: DividerProps) => {
  return <div className={twMerge("border-t border-gray-300", className)} />;
};
