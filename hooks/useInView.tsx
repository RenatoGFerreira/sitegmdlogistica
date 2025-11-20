// useInView.ts
import { useState, useEffect, useRef, RefObject } from "react";

interface UseInViewOptions extends IntersectionObserverInit {
  root?: Element | Document | null; 
  threshold?: number | number[]; 
}

export const useInView = (options: UseInViewOptions = {}): [RefObject<HTMLElement>, boolean] => {

  const ref = useRef<HTMLElement>(null);
  
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
        return;
    }
    const element = ref.current;
    if (!element) {
        return;
    }

    const observer = new IntersectionObserver(([entry]: IntersectionObserverEntry[]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(element);
      }
    }, options);

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [JSON.stringify(options)]); 

  return [ref, isVisible];
};