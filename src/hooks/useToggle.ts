"use client";

import { useState, useCallback } from "react";

export const useToggle = (initialValue: boolean = true) => {
  const [value, setValue] = useState(initialValue);

  const toggleValue = useCallback(
    () => setValue((prevValue) => !prevValue),
    []
  );

  return [value, toggleValue] as const;
};
