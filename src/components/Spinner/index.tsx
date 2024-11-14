import React from "react";
import { FadeLoader } from "react-spinners";

type SpinnerProps = {
  size?: "small" | "medium" | "large";
  color?: string;
  className?: string;
};

const sizeMapping = {
  small: { height: 10, width: 3 },
  medium: { height: 15, width: 5 },
  large: { height: 20, width: 7 },
};

export const Spinner: React.FC<SpinnerProps> = ({
  size = "medium",
  color = "#4A90E2",
  className = "",
}) => {
  const { height, width } = sizeMapping[size];

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <FadeLoader
        color={color}
        height={height}
        width={width}
        radius={2}
        margin={2}
      />
    </div>
  );
};
