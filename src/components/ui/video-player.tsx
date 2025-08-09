"use client";

import { cn } from "@/lib/utils";
import { useRef } from "react";

interface VideoPlayerProps {
  src: string;
  className?: string;
}

export function VideoPlayer({ src, className }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className="relative">
      <div className="relative size-full shadow-xl rounded-xl overflow-hidden">
        <video
          ref={videoRef}
          src={src}
          autoPlay
          muted
          loop
          playsInline
          className={cn("w-full aspect-video object-cover", className)}
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
