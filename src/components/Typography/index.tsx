import React from "react";
import { twMerge } from "tailwind-merge";

type TextProps = {
  children: React.ReactNode;
  variant?: "body" | "caption" | "label";
  className?: string;
};

export const Text = ({ children, variant = "body", className }: TextProps) => {
  const styles = {
    body: "text-base text-gray-700",
    caption: "text-sm text-gray-500",
    label: "text-xs text-gray-400",
  };

  return <p className={twMerge(styles[variant], className)}>{children}</p>;
};
