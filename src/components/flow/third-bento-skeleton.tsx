export const ThirdBentoSkeleton = () => {
  return (
    <div className="flex flex-1 w-full h-full min-h-[8rem] rounded-xl overflow-hidden relative group">
      {/* Overlay pattern */}
      <div className="absolute inset-0 opacity-10 [mask-image:radial-gradient(ellipse_at_center,white,transparent)] bg-dot-foreground/[0.2]"></div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Background pattern - financial grid */}
        <div className="absolute inset-0 bg-grid-foreground/[0.03] bg-[length:30px_30px] opacity-40"></div>

        {/* Floating elements */}
        <div className="absolute top-6 left-8 w-14 h-14 rounded-full bg-muted/10 backdrop-blur-sm animate-float-slow"></div>
        <div className="absolute bottom-10 right-12 w-20 h-20 rounded-full bg-muted/10 backdrop-blur-sm animate-float-slow animation-delay-2000"></div>

        {/* Abstract wave patterns */}
        <svg
          className="absolute inset-x-0 top-0 w-full h-16 opacity-20"
          viewBox="0 0 100 20"
        >
          <path
            d="M0,10 C10,12 20,8 30,10 C40,12 50,8 60,10 C70,12 80,8 90,10 C100,12 110,8 120,10"
            stroke="currentColor"
            className="text-muted-foreground"
            fill="none"
            strokeWidth="0.5"
          />
        </svg>
        <svg
          className="absolute inset-x-0 bottom-0 w-full h-16 opacity-20"
          viewBox="0 0 100 20"
        >
          <path
            d="M0,10 C10,8 20,12 30,10 C40,8 50,12 60,10 C70,8 80,12 90,10 C100,8 110,12 120,10"
            stroke="currentColor"
            className="text-muted-foreground"
            fill="none"
            strokeWidth="0.5"
          />
        </svg>
      </div>

      {/* Main content wrapper */}
      <div className="w-full h-full flex items-center justify-center p-6 z-10">
        <div className="relative w-full max-w-sm">
          {/* Cash Flow Management Illustration */}
          <div className="relative mx-auto w-40 h-40 z-20 transition-all duration-500 ease-in-out group-hover:scale-105">
            
            {/* Central cash flow hub */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-green-400/60 to-blue-500/60 backdrop-blur-md shadow-lg flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-white/10 dark:bg-gray-800/10 animate-pulse"></div>
              
              {/* Dollar sign in center */}
              <div className="relative w-12 h-12 flex items-center justify-center">
                <div className="text-2xl font-bold text-white/90">$</div>
                <div className="absolute inset-0 rounded-full bg-green-300/20 animate-ping"></div>
              </div>
            </div>

            {/* Automated workflow rings */}
            <div className="absolute inset-0 rounded-full border-2 border-green-300/30 animate-spin-slow"></div>
            <div className="absolute inset-4 rounded-full border-2 border-blue-300/30 animate-spin-slow-reverse"></div>
            <div className="absolute inset-8 rounded-full border-2 border-purple-300/30 animate-spin-slow"></div>

            {/* Process nodes around the circle */}
            {[
              { icon: "📊", label: "Reports", color: "green" },
              { icon: "⚡", label: "Auto", color: "blue" },
              { icon: "📈", label: "Growth", color: "purple" },
              { icon: "🔄", label: "Sync", color: "green" },
              { icon: "📱", label: "Mobile", color: "blue" },
              { icon: "🎯", label: "Focus", color: "purple" }
            ].map((item, i) => {
              const angle = i * 60 * (Math.PI / 180);
              const radius = 70;
              const x = 50 + radius * Math.cos(angle);
              const y = 50 + radius * Math.sin(angle);
              
              return (
                <div
                  key={i}
                  className="absolute w-8 h-8 flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2"
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                  }}
                >
                  {/* Node background */}
                  <div className={`w-8 h-8 rounded-full bg-${item.color}-400/80 backdrop-blur-sm shadow-lg flex items-center justify-center text-xs animate-pulse`}>
                    {item.icon}
                  </div>
                  
                  {/* Connecting line */}
                  <div 
                    className="absolute w-0.5 h-8 bg-gradient-to-b from-green-300/50 to-blue-300/50 rounded-full"
                    style={{
                      transform: `rotate(${angle * (180 / Math.PI)}deg)`,
                      transformOrigin: "center 0",
                      top: "50%",
                      left: "50%",
                    }}
                  />
                </div>
              );
            })}
          </div>

          {/* Time savings visualization */}
          <div className="absolute inset-0 z-10">
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 200 200"
            >
              <defs>
                <linearGradient
                  id="timeGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="rgba(34,197,94,0.8)" />
                  <stop offset="100%" stopColor="rgba(59,130,246,0.3)" />
                </linearGradient>
              </defs>

              {/* Clock face representing time savings */}
              <circle
                cx="100"
                cy="100"
                r="80"
                fill="none"
                stroke="rgba(34,197,94,0.1)"
                strokeWidth="2"
              />
              
              {/* Clock hands showing time moving faster */}
              <line
                x1="100"
                y1="100"
                x2="100"
                y2="40"
                stroke="rgba(34,197,94,0.6)"
                strokeWidth="3"
                strokeLinecap="round"
                className="animate-spin-slow"
              />
              <line
                x1="100"
                y1="100"
                x2="140"
                y2="100"
                stroke="rgba(59,130,246,0.6)"
                strokeWidth="2"
                strokeLinecap="round"
                className="animate-spin-slow-reverse"
              />
              
              {/* Clock center */}
              <circle
                cx="100"
                cy="100"
                r="4"
                fill="rgba(34,197,94,0.8)"
              />
            </svg>
          </div>

          {/* Floating efficiency indicators */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-green-400 rounded-full animate-twinkle"
                style={{
                  top: `${20 + Math.random() * 60}%`,
                  left: `${20 + Math.random() * 60}%`,
                  animationDelay: `${i * 0.3}s`,
                  opacity: Math.random() * 0.7 + 0.3,
                }}
              ></div>
            ))}
          </div>

          {/* Efficiency arrows */}
          <div className="absolute inset-0 z-5">
            {[...Array(4)].map((_, i) => {
              const angle = i * 90 * (Math.PI / 180);
              return (
                <div
                  key={i}
                  className="absolute w-6 h-6 flex items-center justify-center"
                  style={{
                    transform: `rotate(${angle * (180 / Math.PI)}deg) translateY(-60px)`,
                    transformOrigin: "center calc(100% + 60px)",
                    top: "50%",
                    left: "50%",
                  }}
                >
                  <div className="text-green-400 text-lg animate-pulse">→</div>
                </div>
              );
            })}
          </div>

          {/* Labels */}
          <div className="absolute top-3 left-3 bg-background/80 backdrop-blur-sm px-2 py-1 rounded-lg border border-border z-40 transition-all duration-200 ease-in-out group-hover:bg-background/90 group-hover:translate-y-0.5">
            <div className="text-xs font-semibold text-green-600">
              Automated
            </div>
          </div>
          <div className="absolute bottom-3 right-3 bg-background/80 backdrop-blur-sm px-2 py-1 rounded-lg border border-border z-40 transition-all duration-200 ease-in-out group-hover:bg-background/90 group-hover:translate-y-0.5">
            <div className="text-xs font-semibold text-blue-600">
              Time Saved
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
