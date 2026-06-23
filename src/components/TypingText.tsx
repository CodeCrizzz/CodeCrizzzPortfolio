"use client";

import { useEffect, useState } from "react";

// Interface for the props of the TypingText component
interface TypingTextProps {
  text: string;
}

// A function component that is used to type the text in the component
export default function TypingText({ text }: TypingTextProps) {
  const [displayedText, setDisplayedText] = useState("");
  
  // useEffect to type the text in the component
  useEffect(() => {
    let currentIndex = 0;
    let typingTimer: NodeJS.Timeout;
    let resetTimer: NodeJS.Timeout;

    // Function to start typing 
    const startTyping = () => {
      if (currentIndex < text.length) {
        setDisplayedText(text.substring(0, currentIndex + 1));
        currentIndex++;
        typingTimer = setTimeout(startTyping, 100);
      } else {
        resetTimer = setTimeout(resetAndRepeat, 3000);
      }
    };

    // Function to reset and repeat typing 
    const resetAndRepeat = () => {
      setDisplayedText("");
      currentIndex = 0;
      startTyping();
    };

    startTyping();

    // Cleanup function to clear the timers when the component unmounts or dependencies change
    return () => {
      clearTimeout(typingTimer);
      clearTimeout(resetTimer);
    };
  }, [text]);

  // Return the component with the typing animation
  return (
    <span className="min-h-[1.2em] inline-block text-blue-600 font-extrabold relative">
      {displayedText}
      <span className="ml-[5px] text-gray-800 animate-[blink_0.8s_infinite]">|</span>
    </span>
  );
}
