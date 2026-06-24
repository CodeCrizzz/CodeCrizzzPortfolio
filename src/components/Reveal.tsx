"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

// Interface for the props of the Reveal component
interface RevealProps {
  children: ReactNode;
  className?: string;
}

// A function component that is used to reveal the children of the component when the user scrolls to the component 
export default function Reveal({ children, className = "" }: RevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // useEffect to observe the component and check if it is in the viewport 
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    // useRef to store the reference to the component
    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    // Cleanup function to disconnect the observer when the component unmounts or dependencies change
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  // Return the component with the reveal animation
  return (
    <div
      ref={ref}
      className={`transition-[opacity,transform] duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[30px]"
      } ${className}`}
    >
      {children}
    </div>
  );
}
