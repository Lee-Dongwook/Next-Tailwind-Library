import React from "react";
import { twMerge } from "tailwind-merge";

type InputProps = {
  placeholder?: string;
  className?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input = ({
  placeholder,
  className,
  value,
  onChange,
}: InputProps) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={twMerge(
        "border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-400 focus:outline-none",
        className
      )}
    />
  );
};
