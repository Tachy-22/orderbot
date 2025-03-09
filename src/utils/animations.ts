"use client";

import { useEffect, useRef, useState } from "react";

export const useInView = (options = {}, once = true) => {
  const ref = useRef<HTMLElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        if (once && element) {
          observer.unobserve(element);
        }
      } else if (!once) {
        setIsInView(false);
      }
    }, options);

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [options, once]);

  return { ref, isInView };
};
