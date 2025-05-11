"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type TypingTextProps = {
  text: string;
  className?: string;
  cursorClassName?: string;
};

export function TypingText({ 
  text, 
  className = "", 
  cursorClassName = "" 
}: TypingTextProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 80); // Adjust typing speed
      
      return () => clearTimeout(timeout);
    } else {
      setIsComplete(true);
    }
  }, [currentIndex, text]);

  return (
    <div className="relative inline-block">
      <span className={className}>{displayedText}</span>
      <motion.span
        className={`inline-block w-0.5 h-6 bg-primary ml-1 ${cursorClassName}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: isComplete ? [1, 0] : 1 }}
        transition={{ 
          duration: 0.8,
          repeat: isComplete ? Infinity : 0,
          repeatType: "reverse"
        }}
      />
    </div>
  );
}