import { useEffect, useRef, useState } from 'react';

export const useScrollAnimation = (threshold = 0.1, rootMargin = '0px 0px -100px 0px') => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once visible, stop observing to prevent re-triggering
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, rootMargin]);

  return [ref, isVisible];
};

// Enhanced scroll animation hook for multiple elements
export const useScrollAnimationMultiple = (threshold = 0.1, rootMargin = '0px 0px -50px 0px') => {
  const [visibleElements, setVisibleElements] = useState(new Set());
  const refs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = refs.current.indexOf(entry.target);
            if (index !== -1) {
              setVisibleElements(prev => new Set([...prev, index]));
            }
          }
        });
      },
      {
        threshold,
        rootMargin
      }
    );

    refs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      refs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [threshold, rootMargin]);

  const setRef = (index) => (element) => {
    refs.current[index] = element;
  };

  const isVisible = (index) => visibleElements.has(index);

  return [setRef, isVisible];
};