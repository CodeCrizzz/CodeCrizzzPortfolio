"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";

interface TiltImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function TiltImage({ src, alt, className = "" }: TiltImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [transformStyle, setTransformStyle] = useState("");

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { offsetWidth: width, offsetHeight: height } = containerRef.current;
    
    // We use getBoundingClientRect to get accurate position relative to viewport
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const xMove = (x / width - 0.5) * 20;
    const yMove = (y / height - 0.5) * 20;
    
    setTransformStyle(`perspective(500px) rotateY(${xMove}deg) rotateX(${-yMove}deg) scale(1.1)`);
  };

  const handleMouseLeave = () => {
    setTransformStyle("rotate(0deg) scale(1)");
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`shrink-0 w-[250px] h-[250px] md:w-[250px] md:h-[250px] sm:w-[220px] sm:h-[220px] rounded-2xl overflow-hidden border-[4px] border-slate-100 shadow-[0_4px_12px_rgba(0,0,0,0.08)] transition-transform duration-300 ease-out hover:scale-105 ${className}`}
      style={{ transform: transformStyle || undefined }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 220px, 250px"
        priority
      />
    </div>
  );
}
