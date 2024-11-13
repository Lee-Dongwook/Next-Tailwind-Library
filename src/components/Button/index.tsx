import React from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = {
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "danger";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
};

export const Button = ({
  type = "button",
  variant = "primary",
  size = "medium",
  disabled = false,
  children,
  onClick,
}: ButtonProps) => {
  const baseStyles = "rounded-full focus:outline-none focus:ring-2 transition";

  const variantStyles = {
    primary: "bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-300",
    secondary: "bg-gray-500 text-white hover:bg-gray-600 focus:ring-gray-300",
    danger: "bg-red-500 text-white hover:bg-red-600 focus:ring-red-300",
  };

  const sizeStyles = {
    small: "px-3 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-5 py-3 text-lg",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={twMerge(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        disabled && "opacity-50 cursor-not-allowed"
      )}
    >
      {children}
    </button>
  );
};
