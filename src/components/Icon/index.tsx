import React from "react";
import { twMerge } from "tailwind-merge";

type IconProps = {
  name: "check" | "close" | "menu";
  className?: string;
};

export const Icon = ({ name, className }: IconProps) => {
  const icons = {
    check: <svg></svg>,
    close: <svg></svg>,
    menu: <svg></svg>,
  };

  return (
    <span className={twMerge("inline-block", className)}>{icons[name]}</span>
  );
};
