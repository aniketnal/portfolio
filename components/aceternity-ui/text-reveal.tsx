"use client";

import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type TextRevealProps = {
  text: string;
  className?: string;
  once?: boolean;
};

export function TextReveal({ text, className, once = true }: TextRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once });
  
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };
  
  const child = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={cn("", className)}
      variants={container}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <span className="sr-only">{text}</span>
      <span aria-hidden>
        {words.map((word, idx) => (
          <span key={idx} className="inline-block mr-[0.25em] whitespace-nowrap">
            <motion.span className="inline-block" variants={child}>
              {word}
            </motion.span>
          </span>
        ))}
      </span>
    </motion.div>
  );
}