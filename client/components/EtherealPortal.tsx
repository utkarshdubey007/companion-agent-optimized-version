import React from "react";
import { motion } from "framer-motion";

interface EtherealPortalProps {
  children?: React.ReactNode;
  className?: string;
  animated?: boolean;
}

// Floating magical particles
const FloatingParticle = ({ index }: { index: number }) => {
  const positions = [
    { x: 15, y: 12 }, { x: 85, y: 18 }, { x: 25, y: 85 }, { x: 75, y: 80 },
    { x: 8, y: 45 }, { x: 92, y: 35 }, { x: 35, y: 8 }, { x: 65, y: 90 },
    { x: 5, y: 65 }, { x: 95, y: 55 }, { x: 45, y: 5 }, { x: 55, y: 95 },
    { x: 20, y: 25 }, { x: 80, y: 75 }, { x: 30, y: 70 }, { x: 70, y: 30 },
    { x: 12, y: 88 }, { x: 88, y: 12 }, { x: 40, y: 40 }, { x: 60, y: 60 },
    { x: 18, y: 58 }, { x: 82, y: 42 }, { x: 38, y: 78 }, { x: 62, y: 22 },
    { x: 28, y: 48 }, { x: 72, y: 52 }, { x: 48, y: 28 }, { x: 52, y: 72 }
  ];
  
  const pos = positions[index % positions.length];
  const size = Math.random() * 2.5 + 1;
  const isLarge = size > 2;
  const delay = index * 0.3;
  
  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        left: `${pos.x}%`,
        top: `${pos.y}%`,
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: isLarge ? "#FFD700" : "#FFA500",
        boxShadow: `0 0 ${size * 4}px rgba(255, 215, 0, 0.8), 0 0 ${size * 8}px rgba(255, 165, 0, 0.4)`,
      }}
      animate={{
        opacity: [0.4, 1, 0.4],
        scale: [0.6, 1.2, 0.6],
        y: [0, -8, 0],
      }}
      transition={{
        duration: 4 + Math.random() * 2,
        delay: delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
};

// Ethereal dust particles
const EtherealDust = ({ index }: { index: number }) => {
  const x = Math.random() * 100;
  const y = Math.random() * 100;
  const size = Math.random() * 1.5 + 0.5;
  
  return (
    <motion.div
      className="absolute rounded-full opacity-60"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: "#FFE5B4",
        boxShadow: `0 0 ${size * 3}px rgba(255, 229, 180, 0.6)`,
        filter: "blur(0.5px)",
      }}
      animate={{
        y: [0, -30, -60],
        opacity: [0, 0.6, 0],
        scale: [0.5, 1, 0.3],
      }}
      transition={{
        duration: 8 + Math.random() * 4,
        delay: index * 0.1,
        repeat: Infinity,
        ease: "easeOut",
      }}
    />
  );
};

export const EtherealPortal: React.FC<EtherealPortalProps> = ({
  children,
  className = "",
  animated = true,
}) => {
  // Portal dimensions - 35% width, 55% height as specified
  const portalWidth = "35vw";
  const portalHeight = "55vh";
  const minWidth = "280px";
  const minHeight = "400px";

  return (
    <div className={`relative w-full h-screen overflow-hidden ${className}`}>
      {/* Deep purple-black starry background */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 25% 20%, rgba(75, 0, 130, 0.3) 0%, transparent 60%),
            radial-gradient(circle at 75% 80%, rgba(138, 43, 226, 0.2) 0%, transparent 60%),
            radial-gradient(circle at 50% 50%, rgba(25, 25, 112, 0.1) 0%, transparent 70%),
            linear-gradient(180deg, 
              #0f0520 0%, 
              #1a0b2e 25%, 
              #2d1b69 50%, 
              #1a0b2e 75%, 
              #0f0520 100%
            )
          `,
        }}
      >
        {/* Floating particle stars */}
        {[...Array(28)].map((_, i) => (
          <FloatingParticle key={`particle-${i}`} index={i} />
        ))}
        
        {/* Ethereal dust particles */}
        {[...Array(35)].map((_, i) => (
          <EtherealDust key={`dust-${i}`} index={i} />
        ))}

        {/* Ambient magical glow */}
        {animated && (
          <motion.div
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(ellipse at center, 
                  rgba(255, 215, 0, 0.03) 0%, 
                  rgba(255, 165, 0, 0.02) 40%, 
                  transparent 70%
                )
              `,
            }}
            animate={{
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        )}
      </div>

      {/* Main ethereal portal */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="relative"
          style={{
            width: `max(${portalWidth}, ${minWidth})`,
            height: `max(${portalHeight}, ${minHeight})`,
          }}
          animate={animated ? {
            scale: [1, 1.01, 1],
          } : {}}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Portal glow base */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(ellipse at center top, 
                  rgba(255, 215, 0, 0.8) 0%, 
                  rgba(255, 165, 0, 0.6) 15%, 
                  rgba(255, 140, 0, 0.4) 35%, 
                  rgba(218, 165, 32, 0.2) 60%, 
                  rgba(138, 43, 226, 0.1) 80%, 
                  transparent 100%
                )
              `,
              clipPath: `ellipse(50% 85% at center 15%)`,
              filter: "blur(2px)",
            }}
            animate={animated ? {
              opacity: [0.7, 1, 0.7],
            } : {}}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Main portal arch with yellow outline */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(ellipse at center top, 
                  rgba(255, 255, 255, 0.1) 0%, 
                  rgba(255, 215, 0, 0.3) 10%, 
                  rgba(255, 165, 0, 0.2) 25%, 
                  rgba(255, 140, 0, 0.1) 45%, 
                  rgba(138, 43, 226, 0.05) 65%, 
                  transparent 85%
                )
              `,
              clipPath: `ellipse(50% 85% at center 15%)`,
              border: "2px solid transparent",
              backgroundClip: "padding-box",
            }}
            animate={animated ? {
              boxShadow: [
                "inset 0 0 0 2px rgba(255, 215, 0, 0.9), 0 0 30px rgba(255, 215, 0, 0.6), 0 0 60px rgba(255, 165, 0, 0.4), 0 0 120px rgba(255, 140, 0, 0.2)",
                "inset 0 0 0 2px rgba(255, 255, 255, 1), 0 0 50px rgba(255, 215, 0, 0.8), 0 0 100px rgba(255, 165, 0, 0.6), 0 0 200px rgba(255, 140, 0, 0.3)",
                "inset 0 0 0 2px rgba(255, 215, 0, 0.9), 0 0 30px rgba(255, 215, 0, 0.6), 0 0 60px rgba(255, 165, 0, 0.4), 0 0 120px rgba(255, 140, 0, 0.2)",
              ],
            } : {
              boxShadow: "inset 0 0 0 2px rgba(255, 215, 0, 0.9), 0 0 30px rgba(255, 215, 0, 0.6), 0 0 60px rgba(255, 165, 0, 0.4), 0 0 120px rgba(255, 140, 0, 0.2)",
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Soft inner glow */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(ellipse at center top, 
                  rgba(255, 255, 255, 0.2) 0%, 
                  rgba(255, 215, 0, 0.15) 20%, 
                  rgba(255, 165, 0, 0.1) 40%, 
                  transparent 70%
                )
              `,
              clipPath: `ellipse(47% 82% at center 15%)`,
            }}
            animate={animated ? {
              opacity: [0.6, 0.9, 0.6],
            } : {}}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Fading bottom effect - seamless integration */}
          <motion.div
            className="absolute bottom-0 left-0 right-0"
            style={{
              height: "25%",
              background: `
                linear-gradient(to bottom, 
                  rgba(255, 215, 0, 0.1) 0%, 
                  rgba(255, 165, 0, 0.05) 30%, 
                  rgba(138, 43, 226, 0.02) 60%, 
                  transparent 100%
                )
              `,
              filter: "blur(3px)",
            }}
            animate={animated ? {
              opacity: [0.8, 1, 0.8],
            } : {}}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Particle effects around portal perimeter */}
          {animated && [...Array(12)].map((_, i) => {
            const angle = (i * 360) / 12;
            const radiusX = 55; // % of width
            const radiusY = 45; // % of height
            const x = 50 + Math.cos((angle * Math.PI) / 180) * radiusX;
            const y = 15 + Math.sin((angle * Math.PI) / 180) * radiusY;

            return (
              <motion.div
                key={`portal-particle-${i}`}
                className="absolute w-1 h-1 bg-yellow-300 rounded-full"
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  boxShadow: "0 0 8px rgba(255, 215, 0, 0.9)",
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

          {/* Content area - positioned in the center of the portal */}
          <div
            className="absolute flex items-center justify-center"
            style={{
              left: "12.5%",
              top: "20%",
              width: "75%",
              height: "60%",
            }}
          >
            {children}
          </div>
        </motion.div>
      </div>

      {/* Additional atmospheric effects */}
      {animated && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
              radial-gradient(circle at 50% 50%, 
                transparent 0%, 
                rgba(255, 215, 0, 0.02) 50%, 
                transparent 100%
              )
            `,
          }}
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [0.9, 1.1, 0.9],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      )}
    </div>
  );
};

export default EtherealPortal;
