"use client";

import { useState, useEffect, useRef } from "react";

type UseIntersectionObserverOptions = {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
};

export const useIntersectionObserver = (
  callback: (entry: IntersectionObserverEntry) => void,
  options?: UseIntersectionObserverOptions
) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<Element | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
        callback(entry);
      },
      { ...options }
    );

    observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [callback, options]);

  return { ref, isIntersecting };
};
