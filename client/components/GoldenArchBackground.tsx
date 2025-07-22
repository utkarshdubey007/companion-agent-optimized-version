import React from "react";
import { motion } from "framer-motion";

interface GoldenArchBackgroundProps {
  children?: React.ReactNode;
  className?: string;
  intensity?: "low" | "medium" | "high";
}

// Floating golden particle stars
const ParticleStar = ({ index }: { index: number }) => {
  const positions = [
    { x: 15, y: 20 },
    { x: 85, y: 25 },
    { x: 25, y: 75 },
    { x: 75, y: 80 },
    { x: 10, y: 50 },
    { x: 90, y: 45 },
    { x: 35, y: 15 },
    { x: 65, y: 85 },
    { x: 5, y: 30 },
    { x: 95, y: 70 },
    { x: 50, y: 10 },
    { x: 45, y: 90 },
    { x: 20, y: 40 },
    { x: 80, y: 35 },
    { x: 30, y: 60 },
    { x: 70, y: 55 },
    { x: 12, y: 65 },
    { x: 88, y: 15 },
    { x: 40, y: 85 },
    { x: 60, y: 25 },
  ];

  const pos = positions[index % positions.length];
  const size = Math.random() * 2 + 1;
  const delay = index * 0.5;

  return (
    <motion.div
      className="absolute bg-yellow-300 rounded-full"
      style={{
        left: `${pos.x}%`,
        top: `${pos.y}%`,
        width: `${size}px`,
        height: `${size}px`,
        boxShadow: `0 0 ${size * 4}px rgba(255, 215, 0, 0.8), 0 0 ${size * 8}px rgba(255, 215, 0, 0.4)`,
      }}
      animate={{
        opacity: [0.3, 1, 0.3],
        scale: [0.5, 1.2, 0.5],
        y: [0, -5, 0],
      }}
      transition={{
        duration: 3 + Math.random() * 2,
        delay: delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
};

// Glowing dust particles
const GlowingDust = ({ index }: { index: number }) => {
  const x = Math.random() * 100;
  const y = Math.random() * 100;
  const size = Math.random() * 1 + 0.5;

  return (
    <motion.div
      className="absolute bg-yellow-200 rounded-full opacity-60"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: `${size}px`,
        height: `${size}px`,
        boxShadow: `0 0 ${size * 3}px rgba(255, 215, 0, 0.6)`,
        filter: "blur(0.5px)",
      }}
      animate={{
        y: [0, -20, -40],
        opacity: [0, 0.6, 0],
        scale: [0.5, 1, 0.3],
      }}
      transition={{
        duration: 6 + Math.random() * 4,
        delay: index * 0.2,
        repeat: Infinity,
        ease: "easeOut",
      }}
    />
  );
};

// Bright starburst effect
const Starburst = ({
  position,
  size = 60,
}: {
  position: "top-left" | "bottom-right";
  size?: number;
}) => {
  const positionStyles = {
    "top-left": { top: "15%", left: "15%" },
    "bottom-right": { bottom: "15%", right: "15%" },
  };

  return (
    <motion.div
      className="absolute"
      style={positionStyles[position]}
      animate={{
        rotate: 360,
        scale: [0.8, 1.2, 0.8],
      }}
      transition={{
        rotate: { duration: 20, repeat: Infinity, ease: "linear" },
        scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
      }}
    >
      {/* Main starburst shape */}
      <div
        className="relative"
        style={{ width: `${size}px`, height: `${size}px` }}
      >
        {/* Four main rays */}
        {[0, 45, 90, 135].map((rotation, i) => (
          <motion.div
            key={i}
            className="absolute bg-yellow-300"
            style={{
              width: `${size}px`,
              height: "2px",
              left: "50%",
              top: "50%",
              transformOrigin: "0 50%",
              transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
              boxShadow: `0 0 20px rgba(255, 215, 0, 0.8), 0 0 40px rgba(255, 215, 0, 0.4)`,
            }}
            animate={{
              opacity: [0.6, 1, 0.6],
              scaleX: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 2,
              delay: i * 0.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Center bright point */}
        <motion.div
          className="absolute bg-yellow-100 rounded-full"
          style={{
            width: "8px",
            height: "8px",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            boxShadow: `0 0 20px rgba(255, 255, 255, 1), 0 0 40px rgba(255, 215, 0, 0.8)`,
          }}
          animate={{
            scale: [0.8, 1.4, 0.8],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </motion.div>
  );
};

export const GoldenArchBackground: React.FC<GoldenArchBackgroundProps> = ({
  children,
  className = "",
  intensity = "medium",
}) => {
  const particleCount =
    intensity === "low" ? 15 : intensity === "medium" ? 25 : 35;
  const dustCount = intensity === "low" ? 20 : intensity === "medium" ? 30 : 40;

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      {/* Deep purple-black background with vignette */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at center, transparent 0%, rgba(0, 0, 0, 0.3) 70%),
            radial-gradient(ellipse at 20% 30%, rgba(75, 0, 130, 0.2) 0%, transparent 60%),
            radial-gradient(ellipse at 80% 70%, rgba(138, 43, 226, 0.15) 0%, transparent 60%),
            linear-gradient(135deg, 
              #1a0d26 0%, 
              #2d1b4e 20%, 
              #0f051a 40%, 
              #1a0d26 60%, 
              #2d1b4e 80%, 
              #0f051a 100%
            )
          `,
        }}
      >
        {/* Floating particle stars */}
        {[...Array(particleCount)].map((_, i) => (
          <ParticleStar key={`particle-${i}`} index={i} />
        ))}

        {/* Glowing dust particles */}
        {[...Array(dustCount)].map((_, i) => (
          <GlowingDust key={`dust-${i}`} index={i} />
        ))}

        {/* Bright starbursts */}
        <Starburst position="top-left" size={80} />
        <Starburst position="bottom-right" size={70} />

        {/* Ambient golden glow */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse at center, 
                rgba(255, 215, 0, 0.05) 0%, 
                rgba(255, 215, 0, 0.02) 40%, 
                transparent 70%
              )
            `,
          }}
          animate={{
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Golden arched rectangular border */}
      <div className="absolute inset-0 flex items-center justify-center p-8">
        <motion.div
          className="relative w-full h-full max-w-4xl max-h-[600px]"
          style={{
            background: `
              linear-gradient(180deg, 
                rgba(255, 215, 0, 0.15) 0%, 
                rgba(255, 215, 0, 0.05) 50%, 
                rgba(255, 215, 0, 0.15) 100%
              )
            `,
            borderRadius: "80px 80px 20px 20px",
            border: "2px solid transparent",
            backgroundClip: "padding-box",
            boxShadow: `
              inset 0 0 0 2px rgba(255, 215, 0, 0.8),
              0 0 40px rgba(255, 215, 0, 0.6),
              0 0 80px rgba(255, 215, 0, 0.3),
              0 0 120px rgba(255, 215, 0, 0.1)
            `,
          }}
          animate={{
            boxShadow: [
              "inset 0 0 0 2px rgba(255, 215, 0, 0.8), 0 0 40px rgba(255, 215, 0, 0.6), 0 0 80px rgba(255, 215, 0, 0.3), 0 0 120px rgba(255, 215, 0, 0.1)",
              "inset 0 0 0 2px rgba(255, 255, 255, 0.9), 0 0 60px rgba(255, 215, 0, 0.8), 0 0 120px rgba(255, 215, 0, 0.5), 0 0 180px rgba(255, 215, 0, 0.2)",
              "inset 0 0 0 2px rgba(255, 215, 0, 0.8), 0 0 40px rgba(255, 215, 0, 0.6), 0 0 80px rgba(255, 215, 0, 0.3), 0 0 120px rgba(255, 215, 0, 0.1)",
            ],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Inner glow effect */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(ellipse at center, 
                  rgba(255, 215, 0, 0.1) 0%, 
                  rgba(255, 215, 0, 0.05) 30%, 
                  transparent 70%
                )
              `,
              borderRadius: "80px 80px 20px 20px",
            }}
            animate={{
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Bloom effect on corners */}
          <motion.div
            className="absolute -top-4 -left-4 w-8 h-8 bg-yellow-300 rounded-full opacity-60"
            style={{
              boxShadow: "0 0 40px rgba(255, 215, 0, 0.8)",
              filter: "blur(8px)",
            }}
            animate={{
              scale: [0.8, 1.2, 0.8],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.div
            className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-300 rounded-full opacity-60"
            style={{
              boxShadow: "0 0 40px rgba(255, 215, 0, 0.8)",
              filter: "blur(8px)",
            }}
            animate={{
              scale: [0.8, 1.2, 0.8],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 2,
              delay: 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Content area */}
          <div className="relative w-full h-full p-8 flex items-center justify-center">
            {children}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default GoldenArchBackground;
