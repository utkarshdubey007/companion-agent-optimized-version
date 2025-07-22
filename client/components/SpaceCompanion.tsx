import React from "react";
import { motion } from "framer-motion";

interface SpaceCompanionProps {
  companionImage: string;
  className?: string;
  size?: number;
}

// Sparkle component for background stars
const SpaceSparkle = ({ index }: { index: number }) => {
  const sparkleDelay = index * 0.3;
  const sparkleX = Math.random() * 100;
  const sparkleY = Math.random() * 100;

  return (
    <motion.div
      className="absolute w-1 h-1 bg-white rounded-full"
      style={{
        left: `${sparkleX}%`,
        top: `${sparkleY}%`,
        boxShadow: "0 0 6px rgba(255, 255, 255, 0.8)",
      }}
      animate={{
        opacity: [0.2, 1, 0.2],
        scale: [0.5, 1.2, 0.5],
      }}
      transition={{
        duration: 2 + Math.random() * 2,
        delay: sparkleDelay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
};

// Large stars that twinkle
const SpaceStar = ({ index }: { index: number }) => {
  const starDelay = index * 0.8;
  const starX = Math.random() * 100;
  const starY = Math.random() * 100;
  const starSize = Math.random() * 3 + 2;

  return (
    <motion.div
      className="absolute bg-yellow-200 rounded-full"
      style={{
        left: `${starX}%`,
        top: `${starY}%`,
        width: `${starSize}px`,
        height: `${starSize}px`,
        boxShadow: `0 0 ${starSize * 3}px rgba(255, 255, 255, 0.6)`,
      }}
      animate={{
        opacity: [0.4, 1, 0.4],
        scale: [0.8, 1.3, 0.8],
      }}
      transition={{
        duration: 3 + Math.random() * 2,
        delay: starDelay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
};

// Speech bubble with sad emoji
const SpeechBubble = () => {
  return (
    <motion.div
      className="absolute -top-16 -right-4 bg-white rounded-full p-3 shadow-lg"
      style={{
        clipPath: "polygon(20px 100%, 0 80%, 100% 0, 100% 80%)",
      }}
      animate={{
        y: [0, -5, 0],
        scale: [0.9, 1, 0.9],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <div className="text-2xl">😟</div>
      {/* Speech bubble tail */}
      <div
        className="absolute bg-white w-4 h-4 rotate-45"
        style={{
          left: "20px",
          bottom: "-6px",
        }}
      />
    </motion.div>
  );
};

// Golden portal component
const GoldenPortal = ({ size }: { size: number }) => {
  return (
    <>
      {/* Main portal glow */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: `radial-gradient(circle at center, 
            rgba(255, 215, 0, 0.9) 0%, 
            rgba(255, 165, 0, 0.7) 25%, 
            rgba(255, 140, 0, 0.5) 50%, 
            rgba(139, 69, 19, 0.3) 75%, 
            transparent 100%)`,
          boxShadow: `
            0 0 40px rgba(255, 215, 0, 0.8),
            0 0 80px rgba(255, 165, 0, 0.6),
            0 0 120px rgba(255, 140, 0, 0.4),
            inset 0 0 40px rgba(255, 215, 0, 0.3)
          `,
        }}
        animate={{
          boxShadow: [
            "0 0 40px rgba(255, 215, 0, 0.8), 0 0 80px rgba(255, 165, 0, 0.6), 0 0 120px rgba(255, 140, 0, 0.4), inset 0 0 40px rgba(255, 215, 0, 0.3)",
            "0 0 60px rgba(255, 215, 0, 1), 0 0 120px rgba(255, 165, 0, 0.8), 0 0 180px rgba(255, 140, 0, 0.6), inset 0 0 60px rgba(255, 215, 0, 0.5)",
            "0 0 40px rgba(255, 215, 0, 0.8), 0 0 80px rgba(255, 165, 0, 0.6), 0 0 120px rgba(255, 140, 0, 0.4), inset 0 0 40px rgba(255, 215, 0, 0.3)",
          ],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Portal energy rings */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute inset-0 rounded-full border-2 border-yellow-300"
          style={{
            borderColor: `rgba(255, 215, 0, ${0.3 + i * 0.2})`,
          }}
          animate={{
            scale: [0.7 + i * 0.1, 1.3 + i * 0.1, 0.7 + i * 0.1],
            opacity: [0.2, 0.6, 0.2],
            rotate: [0, 360],
          }}
          transition={{
            duration: 6 + i * 2,
            delay: i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Arch effect for portal */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: `conic-gradient(from 0deg at center, 
            rgba(255, 215, 0, 0.4) 0deg, 
            transparent 90deg, 
            transparent 270deg, 
            rgba(255, 215, 0, 0.4) 360deg)`,
        }}
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </>
  );
};

export const SpaceCompanion: React.FC<SpaceCompanionProps> = ({
  companionImage,
  className = "",
  size = 200,
}) => {
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
        {/* Background sparkles */}
        {[...Array(50)].map((_, i) => (
          <SpaceSparkle key={`sparkle-${i}`} index={i} />
        ))}

        {/* Background stars */}
        {[...Array(20)].map((_, i) => (
          <SpaceStar key={`star-${i}`} index={i} />
        ))}

        {/* Ambient space glow */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at 30% 40%, 
              rgba(138, 43, 226, 0.1) 0%, 
              transparent 50%),
              radial-gradient(circle at 70% 20%, 
              rgba(75, 0, 130, 0.1) 0%, 
              transparent 50%),
              radial-gradient(circle at 50% 80%, 
              rgba(25, 25, 112, 0.1) 0%, 
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

      {/* Main portal and companion container */}
      <div
        className="relative z-10"
        style={{ width: `${size}px`, height: `${size}px` }}
      >
        {/* Golden portal */}
        <GoldenPortal size={size} />

        {/* AI Companion character */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          style={{
            width: `${size * 0.5}px`,
            height: `${size * 0.5}px`,
          }}
          animate={{
            y: [0, -8, 0],
            rotate: [0, 1, 0, -1, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <motion.img
            src={companionImage}
            alt="AI Companion"
            className="w-full h-full object-contain"
            style={{
              filter: "drop-shadow(0 0 20px rgba(255, 215, 0, 0.5))",
            }}
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Speech bubble */}
          <SpeechBubble />
        </motion.div>

        {/* Portal sparkles that orbit around */}
        {[...Array(8)].map((_, i) => {
          const angle = (i * 360) / 8;
          const radius = size * 0.4;
          const x = Math.cos((angle * Math.PI) / 180) * radius;
          const y = Math.sin((angle * Math.PI) / 180) * radius;

          return (
            <motion.div
              key={`portal-sparkle-${i}`}
              className="absolute w-2 h-2 bg-yellow-300 rounded-full"
              style={{
                left: "50%",
                top: "50%",
                transform: `translate(${x}px, ${y}px)`,
                boxShadow: "0 0 8px rgba(255, 215, 0, 0.8)",
              }}
              animate={{
                scale: [0.5, 1.2, 0.5],
                opacity: [0.4, 1, 0.4],
                rotate: [0, 360],
              }}
              transition={{
                duration: 3,
                delay: i * 0.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SpaceCompanion;
