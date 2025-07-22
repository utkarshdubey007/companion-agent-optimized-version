import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface MagicalCompanionPortalProps {
  companionImage: string;
  state?: "idle" | "thinking" | "speaking";
  expression?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
}

// Sparkle particle component
const FloatingSparkle = ({
  index,
  portalBounds,
}: {
  index: number;
  portalBounds: { width: number; height: number };
}) => {
  const angle = (index * 360) / 12;
  const radiusX = portalBounds.width * 0.6;
  const radiusY = portalBounds.height * 0.6;
  const x = Math.cos((angle * Math.PI) / 180) * radiusX;
  const y = Math.sin((angle * Math.PI) / 180) * radiusY;

  return (
    <motion.div
      className="absolute w-1 h-1 bg-yellow-300 rounded-full"
      style={{
        left: "50%",
        top: "50%",
        transform: `translate(${x}px, ${y}px)`,
        boxShadow: "0 0 8px rgba(255, 215, 0, 0.8)",
      }}
      animate={{
        scale: [0.5, 1.2, 0.5],
        opacity: [0.3, 1, 0.3],
        rotate: [0, 360],
      }}
      transition={{
        duration: 3 + Math.random() * 2,
        delay: index * 0.2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
};

// Background magical particles
const MagicalParticles = ({
  count,
  state,
}: {
  count: number;
  state: string;
}) => {
  const getParticleColor = () => {
    switch (state) {
      case "thinking":
        return "#9333EA";
      case "speaking":
        return "#FF6B9D";
      default:
        return "#FFD700";
    }
  };

  return (
    <>
      {[...Array(count)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-0.5 h-0.5 rounded-full"
          style={{
            backgroundColor: getParticleColor(),
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            boxShadow: `0 0 4px ${getParticleColor()}`,
          }}
          animate={{
            y: [0, -50, -100],
            opacity: [0, 1, 0],
            scale: [0.5, 1, 0.3],
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            delay: i * 0.1,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      ))}
    </>
  );
};

// Sound wave particles for speaking state
const SoundWaves = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
          animate={{
            scale: [0, 2, 0],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 1.5,
            delay: i * 0.2,
            repeat: Infinity,
            ease: "easeOut",
          }}
        >
          <div
            className="w-4 h-1 bg-pink-400 rounded-full opacity-60"
            style={{
              transform: `rotate(${i * 60}deg) translateX(40px)`,
            }}
          />
        </motion.div>
      ))}
    </div>
  );
};

// Thinking stars that swirl around
const ThinkingStars = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-purple-400 rounded-full"
          style={{
            left: "50%",
            top: "30%",
            boxShadow: "0 0 8px rgba(147, 51, 234, 0.8)",
          }}
          animate={{
            rotate: [0, 360],
            x: [0, Math.cos((i * 45 * Math.PI) / 180) * 60],
            y: [0, Math.sin((i * 45 * Math.PI) / 180) * 60, -20],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3,
            delay: i * 0.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

// Expression bubble component
const ExpressionBubble = ({
  expression,
  state,
}: {
  expression: string;
  state: string;
}) => {
  return (
    <motion.div
      className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-2 shadow-lg"
      style={{
        fontSize: "20px",
      }}
      animate={{
        y: [0, -5, 0],
        scale: state === "speaking" ? [0.9, 1.1, 0.9] : [0.95, 1, 0.95],
      }}
      transition={{
        duration: state === "speaking" ? 0.8 : 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {expression}
      {/* Speech bubble tail */}
      <div
        className="absolute bg-white w-3 h-3 rotate-45"
        style={{
          left: "50%",
          bottom: "-6px",
          transform: "translateX(-50%) rotate(45deg)",
        }}
      />
    </motion.div>
  );
};

export const MagicalCompanionPortal: React.FC<MagicalCompanionPortalProps> = ({
  companionImage,
  state = "idle",
  expression = "😟",
  className = "",
  size = "md",
}) => {
  const [currentExpression, setCurrentExpression] = useState(expression);

  // Auto-change expressions in idle state
  useEffect(() => {
    if (state === "idle") {
      const expressions = ["😟", "😊", "🤔", "😌"];
      const interval = setInterval(() => {
        setCurrentExpression(
          expressions[Math.floor(Math.random() * expressions.length)],
        );
      }, 4000);
      return () => clearInterval(interval);
    } else {
      setCurrentExpression(expression);
    }
  }, [state, expression]);

  // Size configurations
  const sizeConfig = {
    sm: { width: 120, height: 160, companion: 60 },
    md: { width: 150, height: 200, companion: 75 },
    lg: { width: 200, height: 260, companion: 100 },
  };

  const { width, height, companion } = sizeConfig[size];

  // Animation variants for different states
  const getCompanionAnimation = () => {
    switch (state) {
      case "thinking":
        return {
          y: [-10, -30, -10],
          scale: [1, 1.05, 1],
          rotate: [-1, 1, -1],
        };
      case "speaking":
        return {
          scale: [1, 1.08, 1.02, 1.08, 1],
          y: [0, -3, 0],
        };
      default: // idle
        return {
          y: [0, -8, 0],
          scale: [1, 1.02, 1],
        };
    }
  };

  const getCompanionTransition = () => {
    switch (state) {
      case "thinking":
        return { duration: 2.5, repeat: Infinity, ease: "easeInOut" };
      case "speaking":
        return { duration: 0.8, repeat: Infinity, ease: "easeInOut" };
      default:
        return { duration: 4, repeat: Infinity, ease: "easeInOut" };
    }
  };

  return (
    <div
      className={`relative flex items-center justify-center min-h-screen ${className}`}
    >
      {/* Space background */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at center, 
            #1a1a2e 0%, 
            #16213e 30%, 
            #0f172a 60%, 
            #020617 100%)`,
        }}
      >
        {/* Background magical particles */}
        <MagicalParticles count={20} state={state} />

        {/* Ambient space glow */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at 30% 40%, 
              rgba(138, 43, 226, 0.1) 0%, 
              transparent 50%),
              radial-gradient(circle at 70% 20%, 
              rgba(75, 0, 130, 0.1) 0%, 
              transparent 50%)`,
          }}
          animate={{
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Main portal container */}
      <div
        className="relative z-10"
        style={{ width: `${width}px`, height: `${height}px` }}
      >
        {/* Vertical magical portal */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background: `radial-gradient(ellipse at center, 
              rgba(255, 215, 0, 0.9) 0%, 
              rgba(255, 165, 0, 0.7) 20%, 
              rgba(255, 140, 0, 0.5) 40%, 
              rgba(139, 69, 19, 0.3) 70%, 
              transparent 100%)`,
            borderRadius: "50%",
            transform: `scaleY(${height / width})`,
            boxShadow: `
              0 0 40px rgba(255, 215, 0, 0.8),
              0 0 80px rgba(255, 165, 0, 0.6),
              0 0 120px rgba(255, 140, 0, 0.4),
              inset 0 0 40px rgba(255, 215, 0, 0.3)
            `,
          }}
          animate={{
            boxShadow:
              state === "speaking"
                ? [
                    "0 0 40px rgba(255, 215, 0, 0.8), 0 0 80px rgba(255, 165, 0, 0.6), 0 0 120px rgba(255, 140, 0, 0.4), inset 0 0 40px rgba(255, 215, 0, 0.3)",
                    "0 0 80px rgba(255, 215, 0, 1), 0 0 160px rgba(255, 165, 0, 0.8), 0 0 240px rgba(255, 140, 0, 0.6), inset 0 0 80px rgba(255, 215, 0, 0.5)",
                    "0 0 40px rgba(255, 215, 0, 0.8), 0 0 80px rgba(255, 165, 0, 0.6), 0 0 120px rgba(255, 140, 0, 0.4), inset 0 0 40px rgba(255, 215, 0, 0.3)",
                  ]
                : [
                    "0 0 40px rgba(255, 215, 0, 0.8), 0 0 80px rgba(255, 165, 0, 0.6), 0 0 120px rgba(255, 140, 0, 0.4), inset 0 0 40px rgba(255, 215, 0, 0.3)",
                    "0 0 60px rgba(255, 215, 0, 1), 0 0 120px rgba(255, 165, 0, 0.8), 0 0 180px rgba(255, 140, 0, 0.6), inset 0 0 60px rgba(255, 215, 0, 0.5)",
                    "0 0 40px rgba(255, 215, 0, 0.8), 0 0 80px rgba(255, 165, 0, 0.6), 0 0 120px rgba(255, 140, 0, 0.4), inset 0 0 40px rgba(255, 215, 0, 0.3)",
                  ],
          }}
          transition={{
            duration: state === "speaking" ? 1 : 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Portal energy rings */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute inset-0 border-2 border-yellow-300"
            style={{
              borderRadius: "50%",
              transform: `scaleY(${height / width})`,
              borderColor: `rgba(255, 215, 0, ${0.3 + i * 0.2})`,
            }}
            animate={{
              scale: [0.8 + i * 0.1, 1.4 + i * 0.1, 0.8 + i * 0.1],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 4 + i * 1,
              delay: i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Floating sparkles around portal */}
        {[...Array(12)].map((_, i) => (
          <FloatingSparkle key={i} index={i} portalBounds={{ width, height }} />
        ))}

        {/* State-based effects */}
        <AnimatePresence>
          {state === "thinking" && <ThinkingStars />}
          {state === "speaking" && <SoundWaves />}
        </AnimatePresence>

        {/* AI Companion character */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          style={{
            width: `${companion}px`,
            height: `${companion}px`,
          }}
          animate={getCompanionAnimation()}
          transition={getCompanionTransition()}
        >
          <motion.img
            src={companionImage}
            alt="AI Companion"
            className="w-full h-full object-contain"
            style={{
              filter: `drop-shadow(0 0 20px rgba(255, 215, 0, ${state === "speaking" ? 0.8 : 0.5}))`,
            }}
            animate={{
              filter:
                state === "speaking"
                  ? [
                      "drop-shadow(0 0 20px rgba(255, 215, 0, 0.8))",
                      "drop-shadow(0 0 40px rgba(255, 215, 0, 1))",
                      "drop-shadow(0 0 20px rgba(255, 215, 0, 0.8))",
                    ]
                  : undefined,
            }}
            transition={{
              duration: 0.8,
              repeat: state === "speaking" ? Infinity : 0,
            }}
          />

          {/* Expression bubble */}
          <ExpressionBubble expression={currentExpression} state={state} />
        </motion.div>

        {/* Custom glow ring pulse effect */}
        <motion.div
          className="absolute inset-0 rounded-full border border-yellow-300"
          style={{
            transform: `scaleY(${height / width})`,
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </div>
  );
};

export default MagicalCompanionPortal;
