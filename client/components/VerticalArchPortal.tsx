import React from "react";
import { motion } from "framer-motion";

interface VerticalArchPortalProps {
  children?: React.ReactNode;
  className?: string;
}

// Golden sparkling particles positioned exactly like in reference image
const GoldenSparkle = ({ index }: { index: number }) => {
  const sparklePositions = [
    // Top row particles
    { x: 12, y: 8, size: 2.5, glow: true }, { x: 28, y: 6, size: 1.4, glow: false },
    { x: 52, y: 4, size: 1.8, glow: false }, { x: 68, y: 8, size: 2.2, glow: true },
    { x: 88, y: 12, size: 1.6, glow: false },

    // Upper sides and middle area
    { x: 6, y: 18, size: 1.3, glow: false }, { x: 94, y: 20, size: 1.7, glow: false },
    { x: 18, y: 25, size: 1.2, glow: false }, { x: 82, y: 28, size: 1.6, glow: false },
    { x: 8, y: 32, size: 1.9, glow: false }, { x: 92, y: 35, size: 1.5, glow: false },

    // Around portal area
    { x: 15, y: 45, size: 1.4, glow: false }, { x: 85, y: 48, size: 1.8, glow: false },
    { x: 22, y: 55, size: 1.3, glow: false }, { x: 78, y: 58, size: 2.0, glow: true },
    { x: 4, y: 50, size: 1.2, glow: false }, { x: 96, y: 45, size: 1.5, glow: false },

    // Lower area particles
    { x: 12, y: 68, size: 1.7, glow: false }, { x: 88, y: 72, size: 1.5, glow: false },
    { x: 25, y: 78, size: 1.6, glow: false }, { x: 75, y: 82, size: 1.9, glow: false },
    { x: 38, y: 88, size: 1.4, glow: false }, { x: 62, y: 85, size: 1.7, glow: false },
    { x: 2, y: 75, size: 1.8, glow: false }, { x: 98, y: 65, size: 1.3, glow: false },

    // Scattered particles
    { x: 35, y: 35, size: 1.0, glow: false }, { x: 65, y: 42, size: 1.1, glow: false },
    { x: 45, y: 55, size: 1.2, glow: false }, { x: 55, y: 38, size: 1.0, glow: false }
  ];

  const pos = sparklePositions[index % sparklePositions.length];
  const size = pos.size;
  const isLarge = pos.glow;
  
  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        left: `${pos.x}%`,
        top: `${pos.y}%`,
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: isLarge ? "#FFD700" : "#FFA500",
        boxShadow: isLarge 
          ? `0 0 ${size * 4}px rgba(255, 215, 0, 0.9), 0 0 ${size * 8}px rgba(255, 215, 0, 0.5)`
          : `0 0 ${size * 3}px rgba(255, 165, 0, 0.7)`,
      }}
      animate={{
        opacity: [0.3, 1, 0.3],
        scale: [0.5, 1.3, 0.5],
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

// Floating golden star particles
const FloatingStarParticle = ({ index }: { index: number }) => {
  const x = Math.random() * 100;
  const y = Math.random() * 100;
  const size = Math.random() * 2 + 0.8;
  
  return (
    <motion.div
      className="absolute rounded-full opacity-70"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: "#FFE5B4",
        boxShadow: `0 0 ${size * 4}px rgba(255, 229, 180, 0.6)`,
        filter: "blur(0.5px)",
      }}
      animate={{
        y: [0, -20, -40],
        opacity: [0, 0.7, 0],
        scale: [0.3, 1, 0.3],
      }}
      transition={{
        duration: 8 + Math.random() * 4,
        delay: index * 0.15,
        repeat: Infinity,
        ease: "easeOut",
      }}
    />
  );
};

export const VerticalArchPortal: React.FC<VerticalArchPortalProps> = ({
  children,
  className = "",
}) => {
  return (
    <div className={`relative w-full h-screen overflow-hidden ${className}`}>
      {/* Deep dark purple/black background */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 20% 30%, rgba(75, 0, 130, 0.4) 0%, transparent 70%),
            radial-gradient(circle at 80% 70%, rgba(138, 43, 226, 0.3) 0%, transparent 70%),
            linear-gradient(180deg, 
              #0a0612 0%, 
              #1a0d26 20%, 
              #2d1b4e 40%, 
              #1f0f3d 60%, 
              #1a0d26 80%, 
              #0a0612 100%
            )
          `,
        }}
      >
        {/* Golden sparkling particles */}
        {[...Array(28)].map((_, i) => (
          <GoldenSparkle key={`sparkle-${i}`} index={i} />
        ))}

        {/* Floating star particles */}
        {[...Array(40)].map((_, i) => (
          <FloatingStarParticle key={`star-particle-${i}`} index={i} />
        ))}

        {/* Large star bursts outside portal (like in reference) */}
        <motion.div
          className="absolute"
          style={{ left: "20%", top: "25%" }}
          animate={{
            rotate: 360,
            scale: [0.8, 1.2, 0.8],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            opacity: { duration: 3, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <div className="relative w-4 h-4">
            <div className="absolute w-4 h-0.5 bg-yellow-300 left-0 top-1/2 transform -translate-y-1/2"
                 style={{ boxShadow: "0 0 12px rgba(255, 215, 0, 1)" }} />
            <div className="absolute w-0.5 h-4 bg-yellow-300 left-1/2 top-0 transform -translate-x-1/2"
                 style={{ boxShadow: "0 0 12px rgba(255, 215, 0, 1)" }} />
            <div className="absolute w-2 h-2 bg-yellow-100 rounded-full left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
                 style={{ boxShadow: "0 0 8px rgba(255, 255, 255, 1)" }} />
          </div>
        </motion.div>

        <motion.div
          className="absolute"
          style={{ right: "22%", bottom: "28%" }}
          animate={{
            rotate: -360,
            scale: [0.9, 1.1, 0.9],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            scale: { duration: 3.5, repeat: Infinity, ease: "easeInOut" },
            opacity: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <div className="relative w-3 h-3">
            <div className="absolute w-3 h-0.5 bg-yellow-300 left-0 top-1/2 transform -translate-y-1/2"
                 style={{ boxShadow: "0 0 10px rgba(255, 215, 0, 0.9)" }} />
            <div className="absolute w-0.5 h-3 bg-yellow-300 left-1/2 top-0 transform -translate-x-1/2"
                 style={{ boxShadow: "0 0 10px rgba(255, 215, 0, 0.9)" }} />
            <div className="absolute w-1.5 h-1.5 bg-yellow-100 rounded-full left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
                 style={{ boxShadow: "0 0 6px rgba(255, 255, 255, 0.9)" }} />
          </div>
        </motion.div>

        {/* Ambient magical glow */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse at center, 
                rgba(255, 215, 0, 0.04) 0%, 
                rgba(255, 165, 0, 0.02) 50%, 
                transparent 80%
              )
            `,
          }}
          animate={{
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Main vertical arch portal */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="relative"
          style={{
            width: "320px",
            height: "480px",
          }}
          animate={{
            scale: [1, 1.005, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Outer ambient glow */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(ellipse at center,
                  rgba(255, 215, 0, 0.4) 0%,
                  rgba(255, 165, 0, 0.3) 30%,
                  rgba(255, 140, 0, 0.15) 60%,
                  transparent 100%
                )
              `,
              clipPath: `ellipse(50% 85% at center 15%)`,
              filter: "blur(12px)",
              transform: "scale(1.3)",
            }}
            animate={{
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Main portal arch with smooth curves and fading bottom */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(ellipse at center top,
                  rgba(255, 215, 0, 0.95) 0%,
                  rgba(255, 165, 0, 0.8) 15%,
                  rgba(255, 140, 0, 0.6) 35%,
                  rgba(218, 165, 32, 0.4) 55%,
                  rgba(138, 43, 226, 0.2) 75%,
                  rgba(75, 0, 130, 0.1) 85%,
                  transparent 100%
                )
              `,
              clipPath: `ellipse(50% 85% at center 15%)`,
              filter: "blur(1px)",
            }}
            animate={{
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Thick glowing border */}
          <motion.div
            className="absolute inset-0"
            style={{
              clipPath: `ellipse(50% 85% at center 15%)`,
            }}
            animate={{
              boxShadow: [
                "inset 0 0 0 6px rgba(255, 215, 0, 0.95), 0 0 50px rgba(255, 215, 0, 0.8), 0 0 100px rgba(255, 165, 0, 0.5), 0 0 150px rgba(255, 140, 0, 0.3)",
                "inset 0 0 0 6px rgba(255, 255, 255, 1), 0 0 80px rgba(255, 215, 0, 1), 0 0 160px rgba(255, 165, 0, 0.7), 0 0 240px rgba(255, 140, 0, 0.4)",
                "inset 0 0 0 6px rgba(255, 215, 0, 0.95), 0 0 50px rgba(255, 215, 0, 0.8), 0 0 100px rgba(255, 165, 0, 0.5), 0 0 150px rgba(255, 140, 0, 0.3)",
              ],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Inner glowing border */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(ellipse at center top,
                  rgba(255, 255, 255, 0.2) 0%,
                  rgba(255, 215, 0, 0.3) 12%,
                  rgba(255, 165, 0, 0.2) 25%,
                  rgba(255, 140, 0, 0.1) 40%,
                  transparent 70%
                )
              `,
              clipPath: `ellipse(47% 82% at center 15%)`,
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

          {/* Dark center area for content */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(ellipse at center top,
                  rgba(0, 0, 0, 0.98) 0%,
                  rgba(10, 6, 18, 0.99) 30%,
                  rgba(0, 0, 0, 1) 60%,
                  transparent 100%
                )
              `,
              clipPath: `ellipse(44% 79% at center 15%)`,
            }}
          />

          {/* Bottom fading effect - seamless blend */}
          <motion.div
            className="absolute bottom-0 left-0 right-0"
            style={{
              height: "35%",
              background: `
                linear-gradient(to bottom,
                  rgba(255, 215, 0, 0.1) 0%,
                  rgba(255, 165, 0, 0.06) 20%,
                  rgba(138, 43, 226, 0.03) 40%,
                  rgba(75, 0, 130, 0.02) 60%,
                  transparent 100%
                )
              `,
              filter: "blur(6px)",
            }}
            animate={{
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Subtle inner glow */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(ellipse at center top,
                  rgba(255, 215, 0, 0.08) 0%,
                  rgba(255, 165, 0, 0.04) 25%,
                  transparent 60%
                )
              `,
              clipPath: `ellipse(42% 76% at center 15%)`,
            }}
            animate={{
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Particles outside the outer ring */}
          {[...Array(16)].map((_, i) => {
            const angle = (i * 360) / 16;
            const radius = 55; // % distance from center
            const x = 50 + Math.cos((angle * Math.PI) / 180) * radius;
            const y = 15 + Math.sin((angle * Math.PI) / 180) * radius * 0.8; // Elliptical

            return (
              <motion.div
                key={`outer-particle-${i}`}
                className="absolute w-1.5 h-1.5 bg-yellow-300 rounded-full"
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  boxShadow: "0 0 8px rgba(255, 215, 0, 0.9), 0 0 16px rgba(255, 215, 0, 0.5)",
                }}
                animate={{
                  scale: [0.4, 1.3, 0.4],
                  opacity: [0.3, 1, 0.3],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 4 + (i % 3),
                  delay: i * 0.3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            );
          })}

          {/* Content area */}
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: "15%",
              top: "20%",
              width: "70%",
              height: "60%",
            }}
          >
            {children}
          </div>

          {/* Magical depth effect - corner glows */}
          <motion.div
            className="absolute -top-2 -left-2 w-6 h-6 bg-yellow-300 rounded-full opacity-50"
            style={{
              boxShadow: "0 0 30px rgba(255, 215, 0, 0.8)",
              filter: "blur(4px)",
            }}
            animate={{
              scale: [0.8, 1.3, 0.8],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          <motion.div
            className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-300 rounded-full opacity-50"
            style={{
              boxShadow: "0 0 30px rgba(255, 215, 0, 0.8)",
              filter: "blur(4px)",
            }}
            animate={{
              scale: [0.8, 1.3, 0.8],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 2,
              delay: 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default VerticalArchPortal;
