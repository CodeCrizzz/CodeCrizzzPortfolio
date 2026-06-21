"use client";

import { useEffect, useState } from "react";

interface TypingTextProps {
  text: string;
}

export default function TypingText({ text }: TypingTextProps) {
  const [displayedText, setDisplayedText] = useState("");
  
  useEffect(() => {
    let currentIndex = 0;
    let typingTimer: NodeJS.Timeout;
    let resetTimer: NodeJS.Timeout;

    const startTyping = () => {
      if (currentIndex < text.length) {
        setDisplayedText(text.substring(0, currentIndex + 1));
        currentIndex++;
        typingTimer = setTimeout(startTyping, 100);
      } else {
        resetTimer = setTimeout(resetAndRepeat, 3000);
      }
    };

    const resetAndRepeat = () => {
      setDisplayedText("");
      currentIndex = 0;
      startTyping();
    };

    startTyping();

    return () => {
      clearTimeout(typingTimer);
      clearTimeout(resetTimer);
    };
  }, [text]);

  return (
    <span className="min-h-[1.2em] inline-block text-blue-600 font-extrabold relative">
      {displayedText}
      <span className="ml-[5px] text-gray-800 animate-[blink_0.8s_infinite]">|</span>
    </span>
  );
}
