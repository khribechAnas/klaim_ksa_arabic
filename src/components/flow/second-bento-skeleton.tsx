export const SecondBentoSkeleton = () => {
  return (
    <div className="flex flex-1 w-full h-full min-h-[8rem] rounded-xl overflow-hidden relative group">
      {/* Overlay pattern */}
      {/* <div className="absolute inset-0 opacity-10 [mask-image:radial-gradient(ellipse_at_center,white,transparent)] dark:bg-dot-white/[0.2] bg-dot-black/[0.2]"></div> */}

      {/* Content wrapper */}
      <div className="w-full h-full flex items-center justify-center p-6 z-10">
        <div className="relative w-full max-w-sm">
          {/* Main clock face with hover animation */}
          <div className="relative mx-auto w-32 h-32 rounded-full bg-white/30 dark:bg-gray-800/30 backdrop-blur-md border-4 border-white/40 dark:border-gray-600/40 shadow-lg flex items-center justify-center z-20 transition-all duration-300 ease-in-out group-hover:shadow-xl group-hover:scale-105">
            {/* Clock markers */}
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-3 bg-gray-800 dark:bg-white/70 rounded-full"
                style={{
                  transform: `rotate(${i * 30}deg) translateY(-11.5px)`,
                  transformOrigin: "bottom center",
                  left: "50%",
                  bottom: "50%",
                }}
              />
            ))}

            {/* Clock hands with hover animation */}
            <div
              className="w-1.5 h-10 bg-gray-800 dark:bg-white absolute bottom-1/2 left-1/2 -translate-x-1/2 origin-bottom rounded-full shadow-md transition-transform duration-500 ease-in-out"
              style={{ transform: "rotate(-30deg) translateY(-2px)" }}
            />
            <div
              className="w-1 h-7 bg-blue-400 absolute bottom-1/2 left-1/2 -translate-x-1/2 origin-bottom rounded-full shadow-sm transition-transform duration-700 ease-in-out group-hover:rotate-[155deg]"
              style={{ transform: "rotate(145deg) translateY(-2px)" }}
            />

            {/* Center dot */}
            <div className="w-3 h-3 rounded-full bg-gray-800 dark:bg-white/90 absolute" />
          </div>

          {/* Fast forward circular arrow with hover animation */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44 z-10 transition-all duration-300 ease-in-out group-hover:rotate-12">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <defs>
                <linearGradient
                  id="fastForwardGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="rgba(255,255,255,0.8)" />
                  <stop offset="100%" stopColor="rgba(74,222,128,0.9)" />
                </linearGradient>
              </defs>
              <path
                d="M85,50 A35,35 0 1,1 50,15"
                fill="none"
                stroke="url(#fastForwardGradient)"
                strokeWidth="4"
                strokeLinecap="round"
                strokeDasharray="5,3"
              />
              {/* Arrow head */}
              <path
                d="M48,8 L50,15 L57,12"
                fill="none"
                stroke="rgba(74,222,128,0.9)"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Tasks flying away with enhanced hover animation */}
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-background/80 backdrop-blur-sm border border-border rounded-md p-1.5 shadow-lg flex items-center transition-all duration-500 ease-in-out group-hover:translate-x-8"
              style={
                {
                  transform: `rotate(${i * 15 - 25}deg) translate(${
                    80 + i * 15
                  }px, ${i % 2 === 0 ? -20 - i * 5 : 20 + i * 5}px) scale(${
                    1 - i * 0.15
                  })`,
                  opacity: 0.9 - i * 0.2,
                  zIndex: 15 - i,
                  width: `${Math.max(60 - i * 10, 40)}px`,
                  "--hover-distance": `${100 + i * 30}px`,
                  "--hover-rotation": `${
                    i * 15 - 25 + (i % 2 === 0 ? -5 : 5)
                  }deg`,
                } as React.CSSProperties
              }
            >
              <div
                className="w-3 h-3 rounded-sm mr-1.5"
                style={{
                  backgroundColor:
                    i === 0
                      ? "#4ADE80"
                      : i === 1
                      ? "#3B82F6"
                      : i === 2
                      ? "#EC4899"
                      : "#A855F7",
                }}
              ></div>
              <div className="flex-1 h-1.5 rounded-full bg-muted-foreground/30"></div>
            </div>
          ))}

          {/* Labels */}
          <div className="absolute top-3 left-3 bg-background/80 backdrop-blur-sm px-2 py-1 rounded-lg border border-border z-30 transition-all duration-200 ease-in-out group-hover:bg-background/90 group-hover:translate-y-0.5">
            <div className="text-xs font-semibold text-primary">Save time</div>
          </div>
          <div className="absolute bottom-3 right-3 bg-background/80 backdrop-blur-sm px-2 py-1 rounded-lg border border-border z-30 transition-all duration-200 ease-in-out group-hover:bg-background/90 group-hover:translate-y-0.5">
            <div className="text-xs font-semibold text-green-600">
              Focus on growth
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
