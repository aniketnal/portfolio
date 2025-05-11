"use client";

import { cn } from "@/lib/utils";
import { useRef, useState, useEffect } from "react";

interface SpotlightProps {
  children: React.ReactNode;
  className?: string;
  spotlightClassName?: string;
}

export function Spotlight({
  children,
  className = "",
  spotlightClassName = "",
}: SpotlightProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mousePositionRef = useRef({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const updateSpotlightPosition = (clientX: number, clientY: number) => {
    if (!containerRef.current) return;
    
    const containerRect = containerRef.current.getBoundingClientRect();
    const relativeX = clientX - containerRect.left;
    const relativeY = clientY - containerRect.top;
    
    setPosition({
      x: relativeX,
      y: relativeY,
    });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement> | MouseEvent) => {
    mousePositionRef.current = { x: e.clientX, y: e.clientY };
    
    if (isHovering) {
      updateSpotlightPosition(e.clientX, e.clientY);
    }
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsHovering(true);
    updateSpotlightPosition(e.clientX, e.clientY);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  useEffect(() => {
    const handleMouseMoveGlobal = (e: MouseEvent) => {
      mousePositionRef.current = { x: e.clientX, y: e.clientY };
      
      if (isHovering) {
        updateSpotlightPosition(e.clientX, e.clientY);
      }
    };

    window.addEventListener("mousemove", handleMouseMoveGlobal);
    return () => {
      window.removeEventListener("mousemove", handleMouseMoveGlobal);
    };
  }, [isHovering]);

  return (
    <div
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      className={cn(
        "relative overflow-hidden bg-background z-0",
        className
      )}
    >
      {children}
      <div
        className={cn(
          "pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300",
          isHovering ? "opacity-100" : "opacity-0",
          spotlightClassName
        )}
        style={{
          background: isHovering
            ? `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(120,120,255,0.075), transparent 40%)`
            : "",
        }}
      />
    </div>
  );
}