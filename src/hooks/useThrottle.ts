/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useRef, useCallback } from "react";

export const useThrottle = (
  callback: (...args: any[]) => void,
  limit: number
) => {
  const lastCall = useRef<number>(0);

  return useCallback(
    (...args: any[]) => {
      const now = Date.now();
      if (now - lastCall.current >= limit) {
        lastCall.current = now;
        callback(...args);
      }
    },
    [callback, limit]
  );
};
