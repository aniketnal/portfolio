"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  cardClassName?: string;
}

export function AnimatedCard({
  children,
  className,
  containerClassName,
  cardClassName,
}: AnimatedCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => {
        setHovering(false);
        x.set(0);
        y.set(0);
      }}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className={cn(
        "relative group/card transition-all duration-100 ease-out will-change-transform",
        containerClassName
      )}
    >
      <div
        style={{
          transform: "translateZ(200px)",
          transformStyle: "preserve-3d",
        }}
        className={cn("relative z-10", cardClassName)}
      >
        {children}
      </div>
      <motion.div
        style={{
          rotateX,
          rotateY,
        }}
        animate={{
          scale: hovering ? 1.065 : 1,
          opacity: hovering ? 1 : 0.5,
        }}
        transition={{
          duration: 0.1,
        }}
        className={cn(
          "absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/5 to-primary/0 rounded-3xl",
          className
        )}
      />
    </motion.div>
  );
}