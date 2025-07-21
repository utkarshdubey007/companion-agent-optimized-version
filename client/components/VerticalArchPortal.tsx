import React from "react";
import { motion } from "framer-motion";

interface VerticalArchPortalProps {
  children?: React.ReactNode;
  className?: string;
}

// Golden sparkling particles
const GoldenSparkle = ({ index }: { index: number }) => {
  const sparklePositions = [
    { x: 12, y: 8 }, { x: 88, y: 12 }, { x: 15, y: 85 }, { x: 85, y: 88 },
    { x: 5, y: 45 }, { x: 95, y: 40 }, { x: 25, y: 15 }, { x: 75, y: 82 },
    { x: 8, y: 65 }, { x: 92, y: 25 }, { x: 35, y: 5 }, { x: 65, y: 95 },
    { x: 18, y: 30 }, { x: 82, y: 70 }, { x: 28, y: 75 }, { x: 72, y: 20 },
    { x: 45, y: 12 }, { x: 55, y: 88 }, { x: 38, y: 35 }, { x: 62, y: 65 },
    { x: 20, y: 55 }, { x: 80, y: 35 }, { x: 42, y: 78 }, { x: 58, y: 22 },
    { x: 15, y: 50 }, { x: 85, y: 55 }, { x: 30, y: 25 }, { x: 70, y: 75 }
  ];
  
  const pos = sparklePositions[index % sparklePositions.length];
  const size = Math.random() * 3 + 1;
  const isLarge = size > 2.5;
  
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
                  rgba(255, 215, 0, 0.3) 0%, 
                  rgba(255, 165, 0, 0.2) 30%, 
                  rgba(255, 140, 0, 0.1) 60%, 
                  transparent 100%
                )
              `,
              borderRadius: "50% 50% 12px 12px",
              filter: "blur(8px)",
              transform: "scale(1.2)",
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

          {/* Thick glowing border - outer layer */}
          <motion.div
            className="absolute inset-0"
            style={{
              borderRadius: "50% 50% 12px 12px",
              border: "8px solid transparent",
              background: `
                linear-gradient(45deg, 
                  rgba(255, 215, 0, 0.9) 0%, 
                  rgba(255, 165, 0, 0.8) 25%, 
                  rgba(255, 140, 0, 0.7) 50%, 
                  rgba(255, 165, 0, 0.8) 75%, 
                  rgba(255, 215, 0, 0.9) 100%
                )
              `,
              backgroundClip: "padding-box",
            }}
            animate={{
              boxShadow: [
                "inset 0 0 0 8px rgba(255, 215, 0, 0.9), 0 0 50px rgba(255, 215, 0, 0.8), 0 0 100px rgba(255, 165, 0, 0.5), 0 0 150px rgba(255, 140, 0, 0.3)",
                "inset 0 0 0 8px rgba(255, 255, 255, 1), 0 0 80px rgba(255, 215, 0, 1), 0 0 160px rgba(255, 165, 0, 0.7), 0 0 240px rgba(255, 140, 0, 0.4)",
                "inset 0 0 0 8px rgba(255, 215, 0, 0.9), 0 0 50px rgba(255, 215, 0, 0.8), 0 0 100px rgba(255, 165, 0, 0.5), 0 0 150px rgba(255, 140, 0, 0.3)",
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
            className="absolute"
            style={{
              top: "12px",
              left: "12px",
              right: "12px",
              bottom: "12px",
              borderRadius: "50% 50% 8px 8px",
              border: "4px solid transparent",
              background: `
                linear-gradient(135deg, 
                  rgba(255, 215, 0, 0.6) 0%, 
                  rgba(255, 190, 0, 0.4) 50%, 
                  rgba(255, 215, 0, 0.6) 100%
                )
              `,
              backgroundClip: "padding-box",
            }}
            animate={{
              boxShadow: [
                "inset 0 0 0 4px rgba(255, 215, 0, 0.7), 0 0 30px rgba(255, 215, 0, 0.5)",
                "inset 0 0 0 4px rgba(255, 255, 255, 0.9), 0 0 50px rgba(255, 215, 0, 0.7)",
                "inset 0 0 0 4px rgba(255, 215, 0, 0.7), 0 0 30px rgba(255, 215, 0, 0.5)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Dark center area for content */}
          <motion.div
            className="absolute"
            style={{
              top: "20px",
              left: "20px",
              right: "20px",
              bottom: "20px",
              borderRadius: "50% 50% 4px 4px",
              background: `
                radial-gradient(ellipse at center, 
                  rgba(0, 0, 0, 0.95) 0%, 
                  rgba(10, 6, 18, 0.98) 40%, 
                  rgba(0, 0, 0, 1) 100%
                )
              `,
            }}
          />

          {/* Subtle inner glow */}
          <motion.div
            className="absolute"
            style={{
              top: "24px",
              left: "24px",
              right: "24px",
              bottom: "24px",
              borderRadius: "50% 50% 2px 2px",
              background: `
                radial-gradient(ellipse at center top, 
                  rgba(255, 215, 0, 0.08) 0%, 
                  rgba(255, 165, 0, 0.04) 30%, 
                  transparent 70%
                )
              `,
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

          {/* Content area */}
          <div
            className="absolute flex items-center justify-center"
            style={{
              top: "30px",
              left: "30px",
              right: "30px",
              bottom: "30px",
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
