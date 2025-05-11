"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

export const AnimatedGradient = ({
  containerClassName,
  className,
  children,
  gradientColor1 = "from-gray-800",
  gradientColor2 = "to-gray-900",
  gradientColor3 = "via-gray-700",
  duration = 10000,
  size = "50%",
  blur = "80px",
  shouldAnimate = true,
}: {
  containerClassName?: string;
  className?: string;
  children?: React.ReactNode;
  gradientColor1?: string;
  gradientColor2?: string;
  gradientColor3?: string;
  duration?: number;
  size?: string;
  blur?: string;
  shouldAnimate?: boolean;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!shouldAnimate || !containerRef.current) return;
    
    const handleMouseMove = (event: MouseEvent) => {
      const container = containerRef.current;
      if (!container) return;
      
      const rect = container.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      
      // Normalize positions as percentage of container dimensions
      const normalizedX = (x / rect.width) * 100;
      const normalizedY = (y / rect.height) * 100;
      
      setCursorPosition({ x: normalizedX, y: normalizedY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [shouldAnimate]);

  return (
    <div
      ref={containerRef}
      className={cn("relative overflow-hidden", containerClassName)}
    >
      <div
        className={cn(
          "absolute inset-0 z-0 transition-all",
          "bg-gradient-to-r",
          gradientColor1,
          gradientColor2,
          gradientColor3
        )}
        style={{
          backgroundSize: size,
          filter: `blur(${blur})`,
          backgroundPosition: shouldAnimate 
            ? `${cursorPosition.x}% ${cursorPosition.y}%`
            : "center center",
          transition: shouldAnimate 
            ? "none" 
            : `background-position ${duration}ms cubic-bezier(0.4, 0, 0.2, 1)`,
        }}
      />
      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  );
};