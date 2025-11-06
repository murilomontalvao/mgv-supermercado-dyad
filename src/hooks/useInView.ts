import { useState, useEffect, useRef } from 'react';

interface InViewOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number;
  triggerOnce?: boolean;
}

export function useInView(options: InViewOptions = {}) {
  const [inView, setInView] = useState(false);
  const ref = useRef<any>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (options.triggerOnce && ref.current) {
            observer.unobserve(ref.current);
          }
        } else {
          if (!options.triggerOnce) {
            setInView(false);
          }
        }
      },
      {
        root: options.root,
        rootMargin: options.rootMargin,
        threshold: options.threshold,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options.root, options.rootMargin, options.threshold, options.triggerOnce]);

  return { ref, inView };
}