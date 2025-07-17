import { useState, useEffect } from "react";

export function CompanionCharacter() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Animate in after a short delay
    setTimeout(() => setIsVisible(true), 300);
  }, []);

  return (
    <div
      className={`fixed left-4 bottom-20 z-20 transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
      }`}
      style={{
        animation: isVisible
          ? "companionFloat 4s ease-in-out infinite"
          : "none",
      }}
    >
      {/* Companion Character - Blue creature */}
      <div className="relative">
        <svg
          width="120"
          height="140"
          viewBox="0 0 120 140"
          className="drop-shadow-lg"
        >
          {/* Main body */}
          <ellipse
            cx="60"
            cy="90"
            rx="45"
            ry="40"
            fill="#4F7CFF"
            className="animate-pulse"
          />

          {/* Head */}
          <ellipse cx="60" cy="55" rx="35" ry="30" fill="#6B8EFF" />

          {/* Left ear */}
          <ellipse
            cx="40"
            cy="30"
            rx="12"
            ry="25"
            fill="#4F7CFF"
            transform="rotate(-20 40 30)"
          />

          {/* Right ear */}
          <ellipse
            cx="80"
            cy="30"
            rx="12"
            ry="25"
            fill="#4F7CFF"
            transform="rotate(20 80 30)"
          />

          {/* Inner ears */}
          <ellipse
            cx="40"
            cy="33"
            rx="6"
            ry="15"
            fill="#8BA7FF"
            transform="rotate(-20 40 33)"
          />
          <ellipse
            cx="80"
            cy="33"
            rx="6"
            ry="15"
            fill="#8BA7FF"
            transform="rotate(20 80 33)"
          />

          {/* Eyes */}
          <circle cx="48" cy="50" r="8" fill="white" />
          <circle cx="72" cy="50" r="8" fill="white" />
          <circle cx="48" cy="50" r="5" fill="#2D3748" />
          <circle cx="72" cy="50" r="5" fill="#2D3748" />

          {/* Eye shine */}
          <circle cx="50" cy="48" r="2" fill="white" opacity="0.8" />
          <circle cx="74" cy="48" r="2" fill="white" opacity="0.8" />

          {/* Nose */}
          <ellipse cx="60" cy="62" rx="3" ry="2" fill="#3D5CFF" />

          {/* Mouth */}
          <path
            d="M 54 68 Q 60 72 66 68"
            stroke="#3D5CFF"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />

          {/* Arms */}
          <ellipse cx="25" cy="75" rx="12" ry="20" fill="#4F7CFF" />
          <ellipse cx="95" cy="75" rx="12" ry="20" fill="#4F7CFF" />

          {/* Legs */}
          <ellipse cx="45" cy="115" rx="10" ry="18" fill="#4F7CFF" />
          <ellipse cx="75" cy="115" rx="10" ry="18" fill="#4F7CFF" />

          {/* Decorative spots */}
          <circle cx="35" cy="85" r="4" fill="#6B8EFF" opacity="0.7" />
          <circle cx="85" cy="70" r="3" fill="#8BA7FF" opacity="0.6" />
          <circle cx="60" cy="100" r="5" fill="#8BA7FF" opacity="0.5" />
        </svg>

        {/* Floating sparkles around companion */}
        <div className="absolute -top-2 -right-2 animate-bounce">
          <span className="text-yellow-300 text-lg">✨</span>
        </div>
        <div className="absolute top-1/2 -left-3 animate-pulse">
          <span className="text-blue-300 text-sm">💫</span>
        </div>
        <div className="absolute bottom-4 -right-4 animate-ping">
          <span className="text-purple-300 text-xs">⭐</span>
        </div>
      </div>
    </div>
  );
}
