import React from "react";
import { motion } from "framer-motion";

interface ExactPortalMatchProps {
  children?: React.ReactNode;
  className?: string;
}

// Exact particle positions as shown in the reference image
const EXACT_PARTICLES = [
  // Top row particles
  { x: 15, y: 8, size: 2.2, type: 'circle', glow: true },
  { x: 35, y: 12, size: 1.5, type: 'circle', glow: false },
  { x: 55, y: 6, size: 1.8, type: 'circle', glow: false },
  { x: 75, y: 10, size: 2.5, type: 'circle', glow: true },
  { x: 85, y: 14, size: 1.2, type: 'circle', glow: false },
  
  // Upper-middle particles  
  { x: 8, y: 25, size: 1.6, type: 'circle', glow: false },
  { x: 25, y: 28, size: 1.9, type: 'circle', glow: false },
  { x: 45, y: 22, size: 1.3, type: 'circle', glow: false },
  { x: 65, y: 26, size: 2.1, type: 'circle', glow: true },
  { x: 88, y: 30, size: 1.4, type: 'circle', glow: false },
  { x: 92, y: 24, size: 1.7, type: 'circle', glow: false },
  
  // Portal area particles (inside and around the arch)
  { x: 20, y: 42, size: 1.5, type: 'circle', glow: false },
  { x: 30, y: 45, size: 1.2, type: 'circle', glow: false },
  { x: 40, y: 38, size: 1.8, type: 'circle', glow: false },
  { x: 50, y: 48, size: 1.4, type: 'circle', glow: false },
  { x: 60, y: 41, size: 1.6, type: 'circle', glow: false },
  { x: 70, y: 46, size: 1.3, type: 'circle', glow: false },
  { x: 80, y: 39, size: 1.9, type: 'circle', glow: false },
  
  // Lower-middle particles
  { x: 12, y: 58, size: 1.7, type: 'circle', glow: false },
  { x: 28, y: 62, size: 1.4, type: 'circle', glow: false },
  { x: 42, y: 65, size: 1.8, type: 'circle', glow: false },
  { x: 58, y: 59, size: 1.5, type: 'circle', glow: false },
  { x: 72, y: 63, size: 2.0, type: 'circle', glow: true },
  { x: 85, y: 56, size: 1.3, type: 'circle', glow: false },
  
  // Bottom particles
  { x: 18, y: 78, size: 1.6, type: 'circle', glow: false },
  { x: 32, y: 82, size: 1.9, type: 'circle', glow: false },
  { x: 48, y: 85, size: 1.4, type: 'circle', glow: false },
  { x: 62, y: 79, size: 1.7, type: 'circle', glow: false },
  { x: 78, y: 83, size: 2.2, type: 'circle', glow: true },
  { x: 88, y: 76, size: 1.5, type: 'circle', glow: false },
  
  // Edge particles
  { x: 5, y: 45, size: 1.8, type: 'circle', glow: false },
  { x: 95, y: 52, size: 1.6, type: 'circle', glow: false },
  { x: 3, y: 68, size: 1.4, type: 'circle', glow: false },
  { x: 97, y: 71, size: 1.9, type: 'circle', glow: false },
];

// Exact star positions as shown in the reference image
const EXACT_STARS = [
  // Top-left bright star
  { x: 22, y: 35, size: 15, brightness: 1.0, rotation: 45 },
  // Bottom-right bright star  
  { x: 78, y: 72, size: 12, brightness: 0.9, rotation: 0 },
];

// Individual particle component with exact animation
const ExactParticle = ({ particle, index }: { particle: any; index: number }) => {
  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        left: `${particle.x}%`,
        top: `${particle.y}%`,
        width: `${particle.size}px`,
        height: `${particle.size}px`,
        backgroundColor: particle.glow ? "#FFD700" : "#FFA500",
        boxShadow: particle.glow 
          ? `0 0 ${particle.size * 4}px rgba(255, 215, 0, 0.9), 0 0 ${particle.size * 8}px rgba(255, 215, 0, 0.4)`
          : `0 0 ${particle.size * 2}px rgba(255, 165, 0, 0.6)`,
      }}
      animate={{
        opacity: [0.4, 1, 0.4],
        scale: [0.8, 1.2, 0.8],
      }}
      transition={{
        duration: 3 + (index % 3),
        delay: index * 0.1,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
};

// Four-pointed star component (exactly as shown in reference)
const ExactStar = ({ star, index }: { star: any; index: number }) => {
  return (
    <motion.div
      className="absolute"
      style={{
        left: `${star.x}%`,
        top: `${star.y}%`,
        transform: "translate(-50%, -50%)",
      }}
      animate={{
        rotate: 360,
        scale: [0.9, 1.1, 0.9],
        opacity: [0.8, 1, 0.8],
      }}
      transition={{
        rotate: { duration: 20, repeat: Infinity, ease: "linear" },
        scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        opacity: { duration: 3, repeat: Infinity, ease: "easeInOut" },
      }}
    >
      {/* Four-pointed star shape */}
      <div className="relative" style={{ width: `${star.size}px`, height: `${star.size}px` }}>
        {/* Vertical ray */}
        <div
          className="absolute bg-yellow-300"
          style={{
            width: "2px",
            height: `${star.size}px`,
            left: "50%",
            top: "0",
            transform: "translateX(-50%)",
            boxShadow: `0 0 ${star.size}px rgba(255, 215, 0, ${star.brightness}), 0 0 ${star.size * 2}px rgba(255, 215, 0, ${star.brightness * 0.5})`,
          }}
        />
        {/* Horizontal ray */}
        <div
          className="absolute bg-yellow-300"
          style={{
            width: `${star.size}px`,
            height: "2px",
            left: "0",
            top: "50%",
            transform: "translateY(-50%)",
            boxShadow: `0 0 ${star.size}px rgba(255, 215, 0, ${star.brightness}), 0 0 ${star.size * 2}px rgba(255, 215, 0, ${star.brightness * 0.5})`,
          }}
        />
        {/* Center bright point */}
        <div
          className="absolute bg-yellow-100 rounded-full"
          style={{
            width: "4px",
            height: "4px",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            boxShadow: `0 0 ${star.size / 2}px rgba(255, 255, 255, 1), 0 0 ${star.size}px rgba(255, 215, 0, ${star.brightness})`,
          }}
        />
      </div>
    </motion.div>
  );
};

export const ExactPortalMatch: React.FC<ExactPortalMatchProps> = ({
  children,
  className = "",
}) => {
  return (
    <div className={`relative w-full h-screen overflow-hidden ${className}`}>
      {/* Exact background matching reference image */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 25% 20%, rgba(75, 0, 130, 0.4) 0%, transparent 60%),
            radial-gradient(circle at 75% 80%, rgba(138, 43, 226, 0.3) 0%, transparent 60%),
            linear-gradient(180deg, 
              #0f0520 0%, 
              #1a0b2e 20%, 
              #2d1b69 40%, 
              #1f0f3d 60%, 
              #1a0b2e 80%, 
              #0f0520 100%
            )
          `,
        }}
      >
        {/* Render exact particles */}
        {EXACT_PARTICLES.map((particle, index) => (
          <ExactParticle key={`particle-${index}`} particle={particle} index={index} />
        ))}

        {/* Render exact stars */}
        {EXACT_STARS.map((star, index) => (
          <ExactStar key={`star-${index}`} star={star} index={index} />
        ))}
      </div>

      {/* Exact portal arch matching reference */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="relative"
          style={{
            width: "35vw",
            height: "55vh",
            minWidth: "280px",
            minHeight: "400px",
          }}
        >
          {/* Portal main glow - exact match */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(ellipse at center top, 
                  rgba(255, 215, 0, 0.9) 0%, 
                  rgba(255, 165, 0, 0.7) 12%, 
                  rgba(255, 140, 0, 0.5) 28%, 
                  rgba(218, 165, 32, 0.3) 45%, 
                  rgba(138, 43, 226, 0.15) 65%, 
                  rgba(75, 0, 130, 0.05) 80%, 
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

          {/* Portal border - exact golden outline */}
          <motion.div
            className="absolute inset-0"
            style={{
              clipPath: `ellipse(50% 85% at center 15%)`,
            }}
            animate={{
              boxShadow: [
                "inset 0 0 0 3px rgba(255, 215, 0, 0.95), 0 0 40px rgba(255, 215, 0, 0.7), 0 0 80px rgba(255, 165, 0, 0.4), 0 0 120px rgba(255, 140, 0, 0.2)",
                "inset 0 0 0 3px rgba(255, 255, 255, 1), 0 0 60px rgba(255, 215, 0, 0.9), 0 0 120px rgba(255, 165, 0, 0.6), 0 0 180px rgba(255, 140, 0, 0.3)",
                "inset 0 0 0 3px rgba(255, 215, 0, 0.95), 0 0 40px rgba(255, 215, 0, 0.7), 0 0 80px rgba(255, 165, 0, 0.4), 0 0 120px rgba(255, 140, 0, 0.2)",
              ],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Inner portal glow */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(ellipse at center top, 
                  rgba(255, 255, 255, 0.15) 0%, 
                  rgba(255, 215, 0, 0.2) 15%, 
                  rgba(255, 165, 0, 0.1) 35%, 
                  transparent 60%
                )
              `,
              clipPath: `ellipse(47% 82% at center 15%)`,
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

          {/* Bottom fade effect - seamless blend */}
          <motion.div
            className="absolute bottom-0 left-0 right-0"
            style={{
              height: "30%",
              background: `
                linear-gradient(to bottom, 
                  rgba(255, 215, 0, 0.12) 0%, 
                  rgba(255, 165, 0, 0.08) 25%, 
                  rgba(138, 43, 226, 0.04) 50%, 
                  rgba(75, 0, 130, 0.02) 75%, 
                  transparent 100%
                )
              `,
              filter: "blur(2px)",
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
        </motion.div>
      </div>
    </div>
  );
};

export default ExactPortalMatch;
