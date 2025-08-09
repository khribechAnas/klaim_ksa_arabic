export function FirstBentoSkeleton() {
  return (
    <div className="flex flex-1 w-full h-full min-h-[8rem] rounded-xl overflow-hidden relative group">
      {/* Overlay pattern */}
      {/* <div className="absolute inset-0 opacity-10 [mask-image:radial-gradient(ellipse_at_center,white,transparent)] dark:bg-dot-white/[0.2] bg-dot-black/[0.2]"></div> */}

      {/* Background decorative elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Floating circles */}
        <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-muted/10 backdrop-blur-sm animate-float-slow"></div>
        <div className="absolute bottom-6 right-10 w-16 h-16 rounded-full bg-muted/10 backdrop-blur-sm animate-float-slow animation-delay-1000"></div>
        <div className="absolute top-1/3 right-6 w-8 h-8 rounded-full bg-muted/10 backdrop-blur-sm animate-float-slow animation-delay-2000"></div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-foreground/[0.05] bg-[length:20px_20px] opacity-10"></div>

        {/* Abstract graph lines */}
        <svg
          className="absolute bottom-0 left-0 w-full h-24 opacity-20"
          viewBox="0 0 100 20"
        >
          <path
            d="M0,10 C20,5 40,15 60,10 C80,5 100,10 100,10"
            stroke="currentColor"
            className="text-muted-foreground"
            fill="none"
            strokeWidth="0.5"
          />
          <path
            d="M0,15 C30,10 50,20 70,15 C90,10 100,15 100,15"
            stroke="currentColor"
            className="text-muted-foreground"
            fill="none"
            strokeWidth="0.5"
          />
        </svg>
      </div>

      {/* Content wrapper */}
      <div className="w-full h-full flex items-center justify-center p-6 z-10">
        <div className="relative w-full max-w-sm">
          {/* Cards stack */}
          <div className="relative mx-auto w-52 h-36 z-20 flex items-center justify-center transition-all duration-300 ease-in-out group-hover:scale-105">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className={`w-36 h-24 rounded-lg shadow-lg absolute border border-border/20 backdrop-blur-md transition-all duration-300 ease-in-out ${
                  i === 0
                    ? "bg-gradient-to-br from-blue-400/90 to-purple-400/90 group-hover:shadow-xl"
                    : i === 1
                    ? "bg-gradient-to-br from-green-400/90 to-emerald-300/90 -rotate-6 group-hover:-rotate-7 group-hover:shadow-xl"
                    : "bg-gradient-to-br from-amber-300/90 to-orange-400/90 rotate-6 group-hover:rotate-7 group-hover:shadow-xl"
                }`}
                style={{
                  transform: `translateY(${i * 6}px) rotate(${
                    i === 1 ? -6 : i === 2 ? 6 : 0
                  }deg)`,
                  zIndex: 20 - i,
                  transition: "all 0.3s ease-in-out",
                }}
              >
                <div className="absolute top-3 left-3 h-3 w-8 rounded-md bg-amber-200/80"></div>
                <div className="absolute bottom-3 left-3 w-7 h-2 rounded-full bg-white/40"></div>
                <div className="absolute bottom-7 left-3 w-5 h-2 rounded-full bg-white/40"></div>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white/30 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-white/60"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Sparkles/stars animation */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1.5 h-1.5 bg-white rounded-full animate-twinkle"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${i * 0.5}s`,
                  opacity: Math.random() * 0.7 + 0.3,
                }}
              ></div>
            ))}
          </div>

          {/* Safety shield icon in the background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-52 h-52 z-0 opacity-10 transition-opacity duration-300 ease-in-out group-hover:opacity-15">
            <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
              <path
                d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                fill="currentColor"
                stroke="currentColor"
                className="text-muted-foreground"
                strokeWidth="0.5"
              />
            </svg>
          </div>

          {/* Labels */}
          <div className="absolute top-3 left-3 bg-background/80 backdrop-blur-sm px-2 py-1 rounded-lg border border-border z-40 transition-all duration-200 ease-in-out group-hover:bg-background/90 group-hover:translate-y-0.5">
            <div className="text-xs font-semibold text-primary">
              Financial Stability
            </div>
          </div>
          <div className="absolute bottom-3 right-3 bg-background/80 backdrop-blur-sm px-2 py-1 rounded-lg border border-border z-40 transition-all duration-200 ease-in-out group-hover:bg-background/90 group-hover:translate-y-0.5">
            <div className="text-xs font-semibold text-green-600">
              Solid Foundation
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
