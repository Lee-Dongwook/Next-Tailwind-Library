import React from "react";
import { twMerge } from "tailwind-merge";

type AvatarProps = {
  src: string;
  alt: string;
  size?: "small" | "medium" | "large";
  className?: string;
};

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt,
  size = "medium",
  className,
}) => {
  const sizes = {
    small: "w-8 h-8",
    medium: "w-12 h-12",
    large: "w-16 h-16",
  };

  return (
    <img
      src={src}
      alt={alt}
      className={twMerge("rounded-full", sizes[size], className)}
    />
  );
};
