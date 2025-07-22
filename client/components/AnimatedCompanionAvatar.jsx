import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Character-specific hover animations (same as in CompanionSelector)
const CharacterHoverAnimations = ({ companion, isHovered }) => {
  const { name, color } = companion;

  if (!isHovered) return null;

  // Cody - Red fox coder (Digital glitch effect)
  if (name === "Cody") {
    return (
      <motion.div className="absolute inset-0 pointer-events-none">
        {/* Digital matrix effect */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-xs text-green-400 font-mono opacity-70"
            style={{
              left: `${Math.random() * 80}%`,
              top: `${Math.random() * 80}%`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              y: [0, -20],
            }}
            transition={{
              duration: 0.8,
              delay: i * 0.1,
              repeat: Infinity,
              repeatDelay: 1,
            }}
          >
            {["01", "10", "11", "00"][Math.floor(Math.random() * 4)]}
          </motion.div>
        ))}
      </motion.div>
    );
  }

  // Doma - Speedy lizard (Dash effect)
  if (name === "Doma") {
    return (
      <motion.div className="absolute inset-0 pointer-events-none">
        {/* Dash streak effect */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background: `linear-gradient(90deg, transparent, ${color}60, transparent)`,
          }}
          animate={{
            x: [-20, 20, -20],
            opacity: [0, 1, 0],
            scaleX: [0.5, 2, 0.5],
          }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            repeatDelay: 0.4,
            ease: "easeInOut",
          }}
        />
        {/* Speed lines */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-0.5 rounded-full"
            style={{
              backgroundColor: color,
              left: "10%",
              top: `${30 + i * 15}%`,
            }}
            animate={{
              x: [0, 15, 0],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 0.4,
              delay: i * 0.1,
              repeat: Infinity,
              repeatDelay: 0.6,
            }}
          />
        ))}
      </motion.div>
    );
  }

  // Letsgo - Energetic bunny (Bounce effect)
  if (name === "Letsgo") {
    return (
      <motion.div className="absolute inset-0 pointer-events-none">
        {/* Main bounce indicator */}
        <motion.div
          className="absolute inset-0 rounded-full border-2"
          style={{
            borderColor: color,
          }}
          animate={{
            scale: [1, 1.3, 1],
            y: [0, -2, 0],
            borderWidth: ["2px", "3px", "2px"],
          }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
        {/* Bounce trail particles */}
        {[...Array(2)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 h-0.5 rounded-full"
            style={{
              backgroundColor: color,
              left: "50%",
              top: "50%",
              boxShadow: `0 0 4px ${color}`,
            }}
            animate={{
              y: [0, -8, -12],
              x: [(i - 1) * 2, (i - 1) * 4],
              scale: [1, 0.5, 0],
              opacity: [0.8, 0.4, 0],
            }}
            transition={{
              duration: 0.8,
              delay: i * 0.1,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
        ))}
      </motion.div>
    );
  }

  // Rooty - Wise bear (Tool particles)
  if (name === "Rooty") {
    return (
      <motion.div className="absolute inset-0 pointer-events-none">
        {["⚙️", "🔧"].map((tool, i) => (
          <motion.div
            key={i}
            className="absolute text-xs"
            style={{
              left: `${30 + i * 25}%`,
              top: `${30 + i * 25}%`,
              fontSize: "8px",
            }}
            animate={{
              rotate: [0, 360],
              y: [0, -5, 0],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 2,
              delay: i * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {tool}
          </motion.div>
        ))}
      </motion.div>
    );
  }

  // Rushmore - Clumsy cat chef (Cooking smoke)
  if (name === "Rushmore") {
    return (
      <motion.div className="absolute inset-0 pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gray-300 rounded-full opacity-40"
            style={{
              left: `${50 + i * 5}%`,
              top: `${40 + i * 5}%`,
            }}
            animate={{
              y: [0, -15],
              x: [0, (Math.random() - 0.5) * 8],
              scale: [0.5, 1, 0],
              opacity: [0.4, 0.2, 0],
            }}
            transition={{
              duration: 1.5,
              delay: i * 0.2,
              repeat: Infinity,
              repeatDelay: 1,
            }}
          />
        ))}
      </motion.div>
    );
  }

  // Uni - Space explorer (Floating stars)
  if (name === "Uni") {
    return (
      <motion.div className="absolute inset-0 pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-white"
            style={{
              left: `${30 + i * 15}%`,
              top: `${35 + i * 10}%`,
              fontSize: "6px",
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
              rotate: [0, 180],
            }}
            transition={{
              duration: 2,
              delay: i * 0.2,
              repeat: Infinity,
              repeatDelay: 1,
            }}
          >
            ⭐
          </motion.div>
        ))}
      </motion.div>
    );
  }

  return null;
};

export function AnimatedCompanionAvatar({ 
  companion, 
  size = 40, 
  className = "",
  showAnimations = true 
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  // Trigger entrance animation when companion changes
  useEffect(() => {
    if (companion) {
      setShouldAnimate(true);
      const timer = setTimeout(() => setShouldAnimate(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [companion?.id]);

  if (!companion) {
    return (
      <div 
        className={`w-10 h-10 rounded-full bg-emerald-300 flex items-center justify-center ${className}`}
        style={{ width: size, height: size }}
      >
        <span className="text-white text-lg">🤖</span>
      </div>
    );
  }

  return (
    <motion.div
      className={`relative ${className}`}
      style={{ width: size, height: size }}
      onMouseEnter={() => showAnimations && setIsHovered(true)}
      onMouseLeave={() => showAnimations && setIsHovered(false)}
      layoutId={`chat-companion-${companion.id}`}
    >
      {/* Floating animation container */}
      <motion.div
        animate={{
          y: companion.name === "Letsgo" && (isHovered || shouldAnimate)
            ? [0, -5, 0] // Enhanced bounce for Letsgo
            : [0, -2, 0],
          rotate: companion.name === "Rushmore" && (isHovered || shouldAnimate)
            ? [0, 2, -2, 0] // Wobble for clumsy cat
            : [0, 1, 0, -1, 0],
        }}
        transition={{
          duration: companion.name === "Letsgo" && (isHovered || shouldAnimate) ? 0.6 : 2.5,
          repeat: Infinity,
          ease: companion.name === "Letsgo" && (isHovered || shouldAnimate) 
            ? "easeOut" 
            : "easeInOut",
        }}
      >
        {/* Outer magical aura - scaled down for chat */}
        <motion.div
          className="absolute inset-0 rounded-full blur-sm"
          style={{
            backgroundColor: companion.color,
            width: size + 20,
            height: size + 20,
            left: -10,
            top: -10,
          }}
          animate={{
            scale: shouldAnimate ? [1, 1.4, 1] : [1, 1.1, 1],
            opacity: shouldAnimate ? [0.4, 0.7, 0.4] : [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: shouldAnimate ? 1.5 : 3,
            repeat: Infinity,
          }}
        />

        {/* Glowing border ring - scaled down for chat */}
        <motion.div
          className="absolute inset-0 rounded-full border-2"
          style={{
            borderColor: companion.color,
            boxShadow: shouldAnimate || isHovered
              ? `0 0 15px ${companion.color}, 0 0 30px ${companion.color}60`
              : `0 0 8px ${companion.color}`,
            width: size,
            height: size,
          }}
          animate={{
            borderWidth: shouldAnimate || isHovered 
              ? ["2px", "3px", "2px"] 
              : ["1px", "2px", "1px"],
            boxShadow: shouldAnimate || isHovered
              ? [
                  `0 0 15px ${companion.color}, 0 0 30px ${companion.color}60`,
                  `0 0 20px ${companion.color}, 0 0 40px ${companion.color}80`,
                  `0 0 15px ${companion.color}, 0 0 30px ${companion.color}60`,
                ]
              : [
                  `0 0 8px ${companion.color}`,
                  `0 0 12px ${companion.color}40`,
                  `0 0 8px ${companion.color}`,
                ],
            scale: shouldAnimate ? [1, 1.2, 1] : [1, 1.05, 1],
          }}
          transition={{
            duration: shouldAnimate ? 1.2 : 2.5,
            repeat: Infinity,
          }}
        />

        {/* Companion avatar */}
        <motion.div
          className="rounded-full overflow-hidden relative border-2 border-emerald-300 shadow-lg"
          style={{
            backgroundColor: companion.color,
            boxShadow: shouldAnimate
              ? `0 8px 25px ${companion.color}80`
              : `0 4px 15px ${companion.color}60`,
            width: size,
            height: size,
          }}
          initial={{ scale: 0, rotate: -180 }}
          animate={{
            scale: shouldAnimate ? [0, 1.2, 1] : [1],
            rotate: shouldAnimate ? [-180, 0] : [0],
          }}
          transition={{
            duration: shouldAnimate ? 1.2 : 0,
            ease: "backOut",
          }}
        >
          <motion.img
            key={companion.id} // Force re-render on companion change
            src={companion.image}
            alt={companion.name}
            className="w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />

          {/* Character-specific hover animations */}
          {showAnimations && (
            <CharacterHoverAnimations
              companion={companion}
              isHovered={isHovered || shouldAnimate}
            />
          )}
        </motion.div>

        {/* Selection celebration particles */}
        <AnimatePresence>
          {shouldAnimate && (
            <motion.div
              className="absolute inset-0 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full"
                  style={{
                    left: "50%",
                    top: "50%",
                    boxShadow: `0 0 8px ${companion.color}`,
                  }}
                  initial={{
                    scale: 0,
                    x: 0,
                    y: 0,
                    opacity: 1,
                  }}
                  animate={{
                    scale: [0, 1.5, 0],
                    x: Math.cos((i * 45 * Math.PI) / 180) * 30,
                    y: Math.sin((i * 45 * Math.PI) / 180) * 30,
                    opacity: [1, 0.8, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    delay: 0.2 + i * 0.1,
                    ease: "easeOut",
                  }}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}
