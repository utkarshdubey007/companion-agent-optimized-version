import React from "react";
import { motion } from "framer-motion";

interface ArchPortalProps {
  companionImage?: string;
  showCompanion?: boolean;
  className?: string;
  size?: "sm" | "md" | "lg";
}

// Floating golden particles around the portal
const GoldenParticle = ({ index, delay }: { index: number; delay: number }) => {
  const positions = [
    { x: -40, y: -60 }, { x: 40, y: -60 }, { x: -60, y: -20 }, { x: 60, y: -20 },
    { x: -50, y: 20 }, { x: 50, y: 20 }, { x: -30, y: 60 }, { x: 30, y: 60 },
    { x: -70, y: -40 }, { x: 70, y: -40 }, { x: -80, y: 0 }, { x: 80, y: 0 }
  ];
  
  const pos = positions[index % positions.length];
  
  return (
    <motion.div
      className="absolute w-1 h-1 bg-yellow-300 rounded-full"
      style={{
        left: "50%",
        top: "50%",
        transform: `translate(${pos.x}px, ${pos.y}px)`,
        boxShadow: "0 0 8px rgba(255, 215, 0, 0.9), 0 0 16px rgba(255, 215, 0, 0.6)",
      }}
      animate={{
        scale: [0.4, 1.2, 0.4],
        opacity: [0.3, 1, 0.3],
        y: [0, -10, 0],
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

// Twinkling stars scattered around
const TwinklingStar = ({ index }: { index: number }) => {
  const starPositions = [
    { x: 15, y: 10 }, { x: 85, y: 15 }, { x: 10, y: 85 }, { x: 90, y: 80 },
    { x: 25, y: 25 }, { x: 75, y: 30 }, { x: 30, y: 75 }, { x: 70, y: 70 },
    { x: 5, y: 50 }, { x: 95, y: 45 }, { x: 50, y: 5 }, { x: 45, y: 95 }
  ];
  
  const pos = starPositions[index % starPositions.length];
  const size = Math.random() * 2 + 1;
  
  return (
    <motion.div
      className="absolute bg-yellow-200 rounded-full"
      style={{
        left: `${pos.x}%`,
        top: `${pos.y}%`,
        width: `${size}px`,
        height: `${size}px`,
        boxShadow: `0 0 ${size * 4}px rgba(255, 255, 255, 0.8)`,
      }}
      animate={{
        opacity: [0.2, 1, 0.2],
        scale: [0.5, 1.3, 0.5],
      }}
      transition={{
        duration: 2 + Math.random() * 3,
        delay: index * 0.3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
};

// Shimmering magical sparkles
const MagicalSparkle = ({ index, portalSize }: { index: number; portalSize: { width: number; height: number } }) => {
  const angle = (index * 360) / 16;
  const radiusX = portalSize.width * 0.7;
  const radiusY = portalSize.height * 0.6;
  const x = Math.cos((angle * Math.PI) / 180) * radiusX;
  const y = Math.sin((angle * Math.PI) / 180) * radiusY;

  return (
    <motion.div
      className="absolute"
      style={{
        left: "50%",
        top: "50%",
        transform: `translate(${x}px, ${y}px)`,
      }}
      animate={{
        rotate: [0, 360],
        scale: [0.8, 1.2, 0.8],
      }}
      transition={{
        duration: 4,
        delay: index * 0.2,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      <div
        className="w-2 h-2 bg-yellow-300 rounded-full"
        style={{
          boxShadow: "0 0 6px rgba(255, 215, 0, 0.9)",
          filter: "blur(0.5px)",
        }}
      />
    </motion.div>
  );
};

export const ArchPortal: React.FC<ArchPortalProps> = ({
  companionImage,
  showCompanion = false,
  className = "",
  size = "md",
}) => {
  // Size configurations
  const sizeConfig = {
    sm: { width: 180, height: 220 },
    md: { width: 240, height: 300 },
    lg: { width: 320, height: 400 },
  };

  const { width, height } = sizeConfig[size];

  return (
    <div className={`relative flex items-center justify-center min-h-screen ${className}`}>
      {/* Deep violet night sky background */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 30% 20%, rgba(75, 0, 130, 0.4) 0%, transparent 50%),
            radial-gradient(circle at 70% 80%, rgba(138, 43, 226, 0.3) 0%, transparent 50%),
            linear-gradient(180deg, 
              #2d1b69 0%, 
              #1a0e33 25%, 
              #0f051a 50%, 
              #1a0e33 75%, 
              #2d1b69 100%
            )
          `,
        }}
      >
        {/* Twinkling stars in the background */}
        {[...Array(12)].map((_, i) => (
          <TwinklingStar key={`star-${i}`} index={i} />
        ))}

        {/* Ambient magical glow */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at 50% 50%, 
                rgba(255, 215, 0, 0.05) 0%, 
                transparent 60%
              )
            `,
          }}
          animate={{
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Main arch portal container */}
      <div
        className="relative z-10"
        style={{ width: `${width}px`, height: `${height}px` }}
      >
        {/* Main arch-shaped portal */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse at center bottom, 
                rgba(255, 215, 0, 0.95) 0%, 
                rgba(255, 190, 0, 0.8) 15%, 
                rgba(255, 165, 0, 0.6) 35%, 
                rgba(255, 140, 0, 0.4) 60%, 
                rgba(218, 165, 32, 0.2) 80%, 
                transparent 100%
              )
            `,
            clipPath: `ellipse(${width/2}px ${height*0.8}px at center ${height*0.8}px)`,
            boxShadow: `
              0 0 40px rgba(255, 215, 0, 0.8),
              0 0 80px rgba(255, 190, 0, 0.6),
              0 0 120px rgba(255, 165, 0, 0.4),
              0 0 160px rgba(255, 140, 0, 0.2)
            `,
          }}
          animate={{
            boxShadow: [
              "0 0 40px rgba(255, 215, 0, 0.8), 0 0 80px rgba(255, 190, 0, 0.6), 0 0 120px rgba(255, 165, 0, 0.4), 0 0 160px rgba(255, 140, 0, 0.2)",
              "0 0 60px rgba(255, 215, 0, 1), 0 0 120px rgba(255, 190, 0, 0.8), 0 0 180px rgba(255, 165, 0, 0.6), 0 0 240px rgba(255, 140, 0, 0.4)",
              "0 0 40px rgba(255, 215, 0, 0.8), 0 0 80px rgba(255, 190, 0, 0.6), 0 0 120px rgba(255, 165, 0, 0.4), 0 0 160px rgba(255, 140, 0, 0.2)",
            ],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Inner arch glow */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse at center bottom, 
                rgba(255, 255, 255, 0.3) 0%, 
                rgba(255, 215, 0, 0.4) 20%, 
                transparent 50%
              )
            `,
            clipPath: `ellipse(${width/2 - 10}px ${height*0.8 - 10}px at center ${height*0.8}px)`,
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

        {/* Golden particles orbiting the portal */}
        {[...Array(12)].map((_, i) => (
          <GoldenParticle key={`particle-${i}`} index={i} delay={i * 0.3} />
        ))}

        {/* Magical sparkles around the arch */}
        {[...Array(16)].map((_, i) => (
          <MagicalSparkle key={`sparkle-${i}`} index={i} portalSize={{ width, height }} />
        ))}

        {/* Light rays emanating from the portal */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: `
              conic-gradient(from 0deg at center ${height*0.8}px, 
                transparent 0deg, 
                rgba(255, 215, 0, 0.1) 30deg, 
                transparent 60deg, 
                rgba(255, 215, 0, 0.08) 90deg, 
                transparent 120deg, 
                rgba(255, 215, 0, 0.1) 150deg, 
                transparent 180deg,
                rgba(255, 215, 0, 0.08) 210deg, 
                transparent 240deg, 
                rgba(255, 215, 0, 0.1) 270deg, 
                transparent 300deg, 
                rgba(255, 215, 0, 0.08) 330deg, 
                transparent 360deg
              )
            `,
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

        {/* Portal edge highlight */}
        <motion.div
          className="absolute inset-0"
          style={{
            border: "2px solid rgba(255, 215, 0, 0.6)",
            clipPath: `ellipse(${width/2}px ${height*0.8}px at center ${height*0.8}px)`,
          }}
          animate={{
            borderColor: [
              "rgba(255, 215, 0, 0.6)",
              "rgba(255, 255, 255, 0.8)",
              "rgba(255, 215, 0, 0.6)",
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Companion character (if enabled) */}
        {showCompanion && companionImage && (
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            style={{
              width: `${width * 0.4}px`,
              height: `${width * 0.4}px`,
            }}
            animate={{
              y: [0, -8, 0],
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <img
              src={companionImage}
              alt="Magical Companion"
              className="w-full h-full object-contain"
              style={{
                filter: "drop-shadow(0 0 20px rgba(255, 215, 0, 0.7))",
              }}
            />
          </motion.div>
        )}

        {/* Gentle pulsing aura around the entire portal */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse at center, 
                transparent 0%, 
                rgba(255, 215, 0, 0.1) 70%, 
                transparent 100%
              )
            `,
            transform: "scale(1.5)",
          }}
          animate={{
            opacity: [0.3, 0.7, 0.3],
            scale: [1.4, 1.6, 1.4],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </div>
  );
};

export default ArchPortal;
