import React from "react";
import { motion } from "framer-motion";

// Enhanced magical floating shapes with more Pixar-like elements
export const EnhancedMagicalBackground = () => {
  // Magical stardust particles
  const generateStardust = () => {
    return [...Array(25)].map((_, i) => ({
      id: i,
      size: Math.random() * 3 + 1,
      x: Math.random() * 100,
      y: Math.random() * 100,
      color: ["#FFD700", "#FF6B9D", "#9333EA", "#00D4FF", "#32CD32"][Math.floor(Math.random() * 5)],
      duration: Math.random() * 10 + 15,
      delay: Math.random() * 5,
    }));
  };

  // Floating magical orbs
  const generateMagicalOrbs = () => {
    return [...Array(8)].map((_, i) => ({
      id: i,
      size: Math.random() * 20 + 10,
      x: Math.random() * 90 + 5,
      y: Math.random() * 90 + 5,
      color: ["rgba(255, 215, 0, 0.3)", "rgba(255, 107, 157, 0.3)", "rgba(147, 51, 234, 0.3)", "rgba(0, 212, 255, 0.3)"][Math.floor(Math.random() * 4)],
      duration: Math.random() * 8 + 12,
      delay: Math.random() * 3,
    }));
  };

  // Shooting stars
  const generateShootingStars = () => {
    return [...Array(5)].map((_, i) => ({
      id: i,
      startX: Math.random() * 50,
      startY: Math.random() * 50,
      endX: Math.random() * 50 + 50,
      endY: Math.random() * 50 + 50,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 10 + 5,
    }));
  };

  const stardust = generateStardust();
  const magicalOrbs = generateMagicalOrbs();
  const shootingStars = generateShootingStars();

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Ambient magical glow */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 25% 25%, 
            rgba(147, 51, 234, 0.1) 0%, 
            transparent 50%),
            radial-gradient(circle at 75% 75%, 
            rgba(255, 107, 157, 0.1) 0%, 
            transparent 50%),
            radial-gradient(circle at 50% 10%, 
            rgba(0, 212, 255, 0.05) 0%, 
            transparent 50%)`,
        }}
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Stardust particles */}
      {stardust.map((particle) => (
        <motion.div
          key={`stardust-${particle.id}`}
          className="absolute rounded-full"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
            boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [0, -100, -200],
            x: [0, Math.sin(particle.id) * 50],
            opacity: [0, 1, 0],
            scale: [0.5, 1, 0.3],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Magical floating orbs */}
      {magicalOrbs.map((orb) => (
        <motion.div
          key={`orb-${orb.id}`}
          className="absolute rounded-full"
          style={{
            width: `${orb.size}px`,
            height: `${orb.size}px`,
            background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
            left: `${orb.x}%`,
            top: `${orb.y}%`,
            filter: "blur(1px)",
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.sin(orb.id * 0.5) * 20, 0],
            scale: [0.8, 1.2, 0.8],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: orb.duration,
            delay: orb.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Shooting stars */}
      {shootingStars.map((star) => (
        <motion.div
          key={`shooting-star-${star.id}`}
          className="absolute"
          style={{
            left: `${star.startX}%`,
            top: `${star.startY}%`,
          }}
          animate={{
            x: [`0%`, `${star.endX - star.startX}vw`],
            y: [`0%`, `${star.endY - star.startY}vh`],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            repeatDelay: 15,
            ease: "easeOut",
          }}
        >
          <div
            className="relative"
            style={{
              width: "2px",
              height: "2px",
              backgroundColor: "#FFD700",
              boxShadow: "0 0 6px #FFD700",
            }}
          >
            {/* Star trail */}
            <motion.div
              className="absolute left-0 top-0 bg-gradient-to-r from-yellow-300 to-transparent"
              style={{
                width: "30px",
                height: "1px",
                transformOrigin: "left center",
              }}
              animate={{
                scaleX: [0, 1, 0],
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: star.duration,
                ease: "easeOut",
              }}
            />
          </div>
        </motion.div>
      ))}

      {/* Magical sparkle clusters */}
      {[...Array(6)].map((_, clusterIndex) => (
        <motion.div
          key={`cluster-${clusterIndex}`}
          className="absolute"
          style={{
            left: `${Math.random() * 80 + 10}%`,
            top: `${Math.random() * 80 + 10}%`,
          }}
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...Array(4)].map((_, sparkleIndex) => (
            <motion.div
              key={`sparkle-${sparkleIndex}`}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${Math.cos((sparkleIndex * 90 * Math.PI) / 180) * 20}px`,
                top: `${Math.sin((sparkleIndex * 90 * Math.PI) / 180) * 20}px`,
                boxShadow: "0 0 4px #FFD700",
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                delay: sparkleIndex * 0.2 + clusterIndex * 0.5,
                repeat: Infinity,
                repeatDelay: 3,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>
      ))}

      {/* Gentle light rays */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `conic-gradient(from 0deg at 50% 50%, 
            transparent 0deg, 
            rgba(255, 215, 0, 0.03) 45deg, 
            transparent 90deg, 
            rgba(255, 107, 157, 0.03) 135deg, 
            transparent 180deg, 
            rgba(147, 51, 234, 0.03) 225deg, 
            transparent 270deg, 
            rgba(0, 212, 255, 0.03) 315deg, 
            transparent 360deg)`,
        }}
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Floating magical symbols */}
      {["✨", "⭐", "🌟", "💫", "🔮"].map((symbol, index) => (
        <motion.div
          key={`symbol-${index}`}
          className="absolute text-lg opacity-60"
          style={{
            left: `${Math.random() * 90 + 5}%`,
            top: `${Math.random() * 90 + 5}%`,
            color: ["#FFD700", "#FF6B9D", "#9333EA", "#00D4FF", "#32CD32"][index],
            filter: `drop-shadow(0 0 8px ${["#FFD700", "#FF6B9D", "#9333EA", "#00D4FF", "#32CD32"][index]})`,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
            scale: [0.8, 1.1, 0.8],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 6 + index,
            delay: index * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {symbol}
        </motion.div>
      ))}
    </div>
  );
};

export default EnhancedMagicalBackground;
