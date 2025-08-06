export const FourthBentoSkeleton = () => {
  return (
    <div className="flex flex-1 w-full h-full min-h-[8rem] rounded-xl overflow-hidden relative group">
      {/* Overlay pattern */}
      {/* <div className="absolute inset-0 opacity-10 [mask-image:radial-gradient(ellipse_at_center,white,transparent)] dark:bg-dot-white/[0.2] bg-dot-black/[0.2]"></div> */}

      {/* Content wrapper */}
      <div className="w-full h-full flex items-center justify-center p-6 z-10">
        {/* Conceptual illustration of predictable cash flow */}
        <div className="relative w-full max-w-sm">
          {/* Central calendar element */}
          <div className="relative z-20 bg-white/30 dark:bg-gray-800/30 backdrop-blur-md rounded-xl border border-white/40 dark:border-gray-600/40 shadow-xl mx-auto w-40 h-40 flex flex-col overflow-hidden transform transition-transform duration-300 ease-in-out group-hover:scale-105">
            {/* Calendar header */}
            <div className="bg-white/80 dark:bg-gray-800/80 p-1 text-center border-b border-white/20 dark:border-gray-600/20">
              <div className="text-xs font-bold text-primary">JUNE</div>
            </div>

            {/* Calendar grid */}
            <div className="flex-1 grid grid-cols-5 grid-rows-4 gap-px bg-white/20 dark:bg-gray-800/20 p-1">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className={`flex items-center justify-center text-[8px] font-medium rounded-sm ${
                    i < 14
                      ? "bg-white/60 dark:bg-gray-700/60 text-gray-800 dark:text-gray-200"
                      : i === 14
                      ? "bg-green-400/90 text-white font-bold"
                      : "bg-white/20 dark:bg-gray-800/20 text-white/70 dark:text-gray-400"
                  }`}
                >
                  {i + 1}
                </div>
              ))}
            </div>
          </div>

          {/* Flowing cash streams with enhanced animations */}
          <div className="absolute top-1/2 left-1/2 w-full h-24 -translate-x-1/2 -translate-y-1/2 -rotate-12 z-10 transition-all duration-500 ease-in-out group-hover:scale-110">
            {/* Left to right money flow (past) - with enhanced animations */}
            <div className="absolute left-0 h-4 w-full">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute h-8 w-8 rounded-full bg-green-300 shadow-lg flex items-center justify-center"
                  style={{
                    left: `${i * 20}%`,
                    top: `-${i * 5}px`,
                    opacity: 0.8 - i * 0.1,
                    transform: `scale(${1 - i * 0.1})`,
                    zIndex: 20 - i,
                  }}
                >
                  <div className="text-green-800 font-bold text-xs">$</div>
                </div>
              ))}
            </div>

            {/* Left to right money flow (future) */}
            <div className="absolute left-0 bottom-0 h-4 w-full">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  style={{
                    right: `${i * 20}%`,
                    bottom: `-${i * 5}px`,
                    opacity: 0.7 - i * 0.1,
                    transform: `scale(${1 - i * 0.1})`,
                    zIndex: 20 - i,
                  }}
                  className="absolute h-8 w-8 rounded-full bg-blue-300 shadow-lg flex items-center justify-center"
                >
                  <div className="text-blue-800 font-bold text-xs">$</div>
                </div>
              ))}
            </div>
          </div>

          {/* Line graph with enhanced animations */}
          <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 flex items-center justify-center z-0 transition-all duration-300 ease-in-out group-hover:scale-105">
            <svg className="w-full h-20" viewBox="0 0 100 40">
              {/* Grid lines */}
              <line
                x1="0"
                y1="20"
                x2="100"
                y2="20"
                stroke="rgba(255,255,255,0.3)"
                strokeWidth="0.5"
                strokeDasharray="2,2"
              />
              <line
                x1="0"
                y1="10"
                x2="100"
                y2="10"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="0.5"
                strokeDasharray="2,2"
              />
              <line
                x1="0"
                y1="30"
                x2="100"
                y2="30"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="0.5"
                strokeDasharray="2,2"
              />

              {/* Smooth flow line */}
              <path
                d="M0,25 C10,23 20,18 30,18 C40,18 45,22 50,22 C55,22 60,18 70,18 C80,18 90,22 100,20"
                fill="none"
                stroke="rgba(255,255,255,0.9)"
                strokeWidth="2"
                strokeLinecap="round"
              />

              {/* Future projection (dashed) */}
              <path
                d="M70,18 C80,18 90,16 100,15"
                fill="none"
                stroke="rgba(74,222,128,0.9)"
                strokeWidth="2"
                strokeDasharray="3,2"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Text labels with subtle animations */}
          <div className="absolute top-3 left-4 bg-background/80 backdrop-blur-sm px-2 py-1 rounded-lg border border-border z-30 transition-all duration-200 ease-in-out group-hover:bg-background/90 group-hover:translate-y-0.5">
            <div className="text-xs font-semibold text-primary">
              Predictable
            </div>
          </div>
          <div className="absolute bottom-3 right-4 bg-background/80 backdrop-blur-sm px-2 py-1 rounded-lg border border-border z-30 transition-all duration-200 ease-in-out group-hover:bg-background/90 group-hover:translate-y-0.5">
            <div className="text-xs font-semibold text-green-600">
              On time, every time
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
