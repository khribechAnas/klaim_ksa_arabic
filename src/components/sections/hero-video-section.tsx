"use client";

import { useState, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";

export function HeroVideoSection({ src }: { src: string }) {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="relative px-6 mt-10">
      <div className="relative size-full shadow-xl rounded-2xl overflow-hidden">
        <video
          ref={videoRef}
          src={src || "/Klaim_HeroBanner.mp4"}
          autoPlay
          muted
          loop
          playsInline
          className="w-full aspect-video object-cover"
        >
          Your browser does not support the video tag.
        </video>

        {/* Unmute Button */}
        <button
          onClick={toggleMute}
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 transition-all duration-200 backdrop-blur-sm border border-white/20 hover:scale-105 active:scale-95"
          aria-label={isMuted ? "Unmute video" : "Mute video"}
        >
          {isMuted ? (
            <VolumeX className="w-5 h-5" />
          ) : (
            <Volume2 className="w-5 h-5" />
          )}
        </button>
      </div>
    </div>
  );
}
