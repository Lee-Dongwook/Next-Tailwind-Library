"use client";

import { useState, useEffect } from "react";

export const useDebounce = <T>(value: T, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value));
    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
};
