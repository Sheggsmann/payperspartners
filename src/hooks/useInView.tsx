import { useEffect, useRef, useState } from "react";

export const useInView = (options = {}) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          // Once animated, we can disconnect to prevent re-triggering
          observer.disconnect();
        }
      },
      {
        threshold: 0.1, // Trigger when 30% of element is visible
        rootMargin: "50px", // Trigger 50px before element enters viewport
        ...options,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [options]);

  return { ref, isInView };
};
