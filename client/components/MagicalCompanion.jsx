import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Magical particle effects component
const MagicalParticles = ({ color = "#FFD700", count = 8, mode = "idle" }) => {
  const getParticleAnimation = () => {
    switch (mode) {
      case "thinking":
        return {
          animate: {
            y: [0, -40, -60],
            x: [0, Math.random() * 20 - 10],
            scale: [0, 1, 0],
            opacity: [0, 0.8, 0],
          },
          transition: {
            duration: 2,
            repeat: Infinity,
            repeatDelay: 0.5,
            ease: "easeOut",
          },
        };
      case "speaking":
        return {
          animate: {
            scale: [0, 1.5, 0],
            opacity: [0, 1, 0],
            rotate: [0, 180],
          },
          transition: {
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          },
        };
      default: // idle
        return {
          animate: {
            y: [0, -10, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [0.8, 1.2, 0.8],
          },
          transition: {
            duration: 3,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut",
          },
        };
    }
  };

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {[...Array(count)].map((_, i) => {
        const angle = (i * 360) / count;
        const radius = mode === "thinking" ? 25 : 20;
        const x = Math.cos((angle * Math.PI) / 180) * radius;
        const y = Math.sin((angle * Math.PI) / 180) * radius;

        return (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              backgroundColor: color,
              boxShadow: `0 0 6px ${color}`,
              left: "50%",
              top: "50%",
              transform: `translate(${x}px, ${y}px)`,
            }}
            {...getParticleAnimation()}
          />
        );
      })}
    </div>
  );
};

// Thought bubbles for thinking mode
const ThoughtBubbles = ({ companionColor }) => {
  const thoughtEmojis = ["💭", "✨", "🌟", "💡", "🎨", "🔮"];
  
  return (
    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 pointer-events-none">
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${i * 15 - 15}px`,
            top: `${-i * 10}px`,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 0.9, 0],
            y: [0, -20, -40],
          }}
          transition={{
            duration: 2.5,
            delay: i * 0.3,
            repeat: Infinity,
            repeatDelay: 1,
            ease: "easeOut",
          }}
        >
          <div
            className="w-6 h-6 rounded-full flex items-center justify-center text-xs"
            style={{
              backgroundColor: `${companionColor}20`,
              border: `1px solid ${companionColor}40`,
            }}
          >
            {thoughtEmojis[Math.floor(Math.random() * thoughtEmojis.length)]}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

// Ambient background effects
const AmbientEffects = ({ mode }) => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
      {/* Floating ambient particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-0.5 h-0.5 bg-white rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100],
            x: [0, Math.random() * 40 - 20],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            delay: Math.random() * 5,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
      
      {/* Gentle light rays */}
      <motion.div
        className="absolute inset-0 bg-gradient-radial from-yellow-200 via-transparent to-transparent"
        animate={{
          opacity: mode === "speaking" ? [0.1, 0.3, 0.1] : [0.05, 0.15, 0.05],
          scale: [0.8, 1.2, 0.8],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

// Main magical companion component
export const MagicalCompanion = ({
  mode = "idle", // "idle", "thinking", "speaking"
  imageUrl,
  size = 80,
  companionColor = "#FFD700",
  className = "",
  onAnimationComplete,
  miniMode = false,
}) => {
  const [blinkState, setBlinkState] = useState(false);
  const [currentMode, setCurrentMode] = useState(mode);
  const containerRef = useRef(null);

  // Blinking animation for idle mode
  useEffect(() => {
    if (currentMode === "idle") {
      const blinkInterval = setInterval(() => {
        setBlinkState(true);
        setTimeout(() => setBlinkState(false), 150);
      }, 3000 + Math.random() * 2000);

      return () => clearInterval(blinkInterval);
    }
  }, [currentMode]);

  // Handle mode changes
  useEffect(() => {
    setCurrentMode(mode);
  }, [mode]);

  const getCompanionAnimation = () => {
    switch (currentMode) {
      case "thinking":
        return {
          y: [0, -5, 0],
          rotate: [-2, 2, -2],
          scale: [1, 1.05, 1],
        };
      case "speaking":
        return {
          scale: [1, 1.1, 1],
          y: [0, -3, 0],
        };
      default: // idle
        return {
          y: [0, -8, 0],
          rotate: [0, 1, 0, -1, 0],
        };
    }
  };

  const getTransition = () => {
    switch (currentMode) {
      case "thinking":
        return {
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        };
      case "speaking":
        return {
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        };
      default: // idle
        return {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        };
    }
  };

  const sizeStyle = miniMode ? 
    { width: "40px", height: "40px" } : 
    { width: `${size}px`, height: `${size}px` };

  return (
    <motion.div
      ref={containerRef}
      className={`relative ${className}`}
      style={sizeStyle}
      initial={miniMode ? { scale: 0, opacity: 0 } : false}
      animate={miniMode ? { scale: 1, opacity: 1 } : false}
      exit={miniMode ? { scale: 0, opacity: 0 } : false}
      transition={miniMode ? { 
        type: "spring", 
        stiffness: 500, 
        damping: 25,
        duration: 0.6 
      } : undefined}
      onAnimationComplete={onAnimationComplete}
    >
      {/* Ambient background effects */}
      {!miniMode && <AmbientEffects mode={currentMode} />}

      {/* Magical aura */}
      <motion.div
        className="absolute inset-0 rounded-full blur-sm"
        style={{
          background: `radial-gradient(circle, ${companionColor}40 0%, transparent 70%)`,
        }}
        animate={{
          scale: currentMode === "speaking" ? [1, 1.3, 1] : [1, 1.1, 1],
          opacity: currentMode === "thinking" ? [0.3, 0.6, 0.3] : [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: currentMode === "speaking" ? 1.5 : 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Thinking bubbles */}
      {currentMode === "thinking" && !miniMode && (
        <ThoughtBubbles companionColor={companionColor} />
      )}

      {/* Main companion container */}
      <motion.div
        className="relative w-full h-full"
        animate={getCompanionAnimation()}
        transition={getTransition()}
      >
        {/* Glowing ring */}
        <motion.div
          className="absolute inset-0 rounded-full border-2"
          style={{
            borderColor: companionColor,
            boxShadow: `0 0 20px ${companionColor}60`,
          }}
          animate={{
            borderWidth: ["2px", "3px", "2px"],
            boxShadow: [
              `0 0 20px ${companionColor}60`,
              `0 0 30px ${companionColor}80`,
              `0 0 20px ${companionColor}60`,
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Companion image */}
        <motion.div
          className="w-full h-full rounded-full overflow-hidden relative"
          style={{
            backgroundColor: companionColor,
            boxShadow: `0 4px 20px ${companionColor}40`,
          }}
        >
          <img
            src={imageUrl}
            alt="Magical Companion"
            className="w-full h-full object-cover"
            style={{
              filter: blinkState ? "brightness(0.8)" : "brightness(1)",
              transition: "filter 0.15s ease",
            }}
          />

          {/* Speaking mouth animation overlay */}
          {currentMode === "speaking" && (
            <motion.div
              className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-3 h-1 bg-white rounded-full opacity-70"
              animate={{
                scaleX: [1, 1.5, 1],
                scaleY: [1, 0.5, 1],
              }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          )}

          {/* Eye blink overlay */}
          {blinkState && (
            <div className="absolute inset-0 bg-black opacity-20 rounded-full" />
          )}
        </motion.div>

        {/* Magical particles */}
        <MagicalParticles 
          color={companionColor} 
          count={miniMode ? 4 : 8} 
          mode={currentMode} 
        />

        {/* Speaking mode sparkle burst */}
        {currentMode === "speaking" && (
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-yellow-300 rounded-full"
                style={{
                  left: "50%",
                  top: "50%",
                  boxShadow: "0 0 6px #FFD700",
                }}
                animate={{
                  x: Math.cos((i * 60 * Math.PI) / 180) * 40,
                  y: Math.sin((i * 60 * Math.PI) / 180) * 40,
                  scale: [0, 1.5, 0],
                  opacity: [1, 0.8, 0],
                }}
                transition={{
                  duration: 1,
                  delay: i * 0.1,
                  repeat: Infinity,
                  repeatDelay: 1.5,
                  ease: "easeOut",
                }}
              />
            ))}
          </motion.div>
        )}
      </motion.div>

      {/* Rainbow burst for speaking mode */}
      {currentMode === "speaking" && !miniMode && (
        <motion.div
          className="absolute -inset-4 pointer-events-none"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
        >
          <motion.div
            className="w-full h-full rounded-full"
            style={{
              background: `conic-gradient(from 0deg, 
                ${companionColor}60 0deg, 
                #FF6B6B60 60deg, 
                #4ECDC460 120deg, 
                #45B7D160 180deg, 
                #96CEB460 240deg, 
                #FECA5760 300deg, 
                ${companionColor}60 360deg)`,
              filter: "blur(8px)",
            }}
            animate={{
              rotate: 360,
              scale: [1, 1.2, 1],
            }}
            transition={{
              rotate: {
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              },
              scale: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          />
        </motion.div>
      )}
    </motion.div>
  );
};

// Enhanced companion wrapper that handles mode transitions
export const EnhancedMagicalCompanion = ({
  mode = "idle",
  imageUrl = "https://cdn.builder.io/api/v1/image/assets%2Fae5429317afa463b8668d5872bee2cf9%2F81f9377e132c48c0926c8ead2f63132b?format=webp&width=800",
  size = 80,
  companionColor = "#FFD700",
  className = "",
  isAITyping = false,
  showMiniCompanion = false,
  miniCompanionPosition = { x: 0, y: 0 },
  onModeChange,
}) => {
  const [currentMode, setCurrentMode] = useState(mode);
  const [showMain, setShowMain] = useState(true);

  useEffect(() => {
    if (mode === "speaking") {
      // Transition to speaking mode
      setCurrentMode("speaking");
      
      // After a brief moment, hide main and show mini
      setTimeout(() => {
        setShowMain(false);
      }, 800);
    } else {
      // Return to idle or thinking
      setCurrentMode(mode);
      setShowMain(true);
    }
  }, [mode]);

  return (
    <div className="relative">
      {/* Main large companion */}
      <AnimatePresence>
        {showMain && (
          <motion.div
            initial={false}
            exit={{
              scale: 0,
              opacity: 0,
              filter: "blur(4px)",
            }}
            transition={{
              duration: 0.6,
              ease: "easeIn",
            }}
          >
            <MagicalCompanion
              mode={currentMode}
              imageUrl={imageUrl}
              size={size}
              companionColor={companionColor}
              className={className}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mini companion for speaking mode */}
      <AnimatePresence>
        {showMiniCompanion && !showMain && (
          <motion.div
            className="fixed z-50 pointer-events-none"
            style={{
              left: miniCompanionPosition.x,
              top: miniCompanionPosition.y,
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ 
              scale: 0, 
              opacity: 0,
              transition: { duration: 0.3 }
            }}
            onAnimationComplete={() => {
              // Return main companion after mini disappears
              if (!showMiniCompanion) {
                setTimeout(() => {
                  setShowMain(true);
                  setCurrentMode("idle");
                }, 300);
              }
            }}
          >
            <MagicalCompanion
              mode="speaking"
              imageUrl={imageUrl}
              size={40}
              companionColor={companionColor}
              miniMode={true}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MagicalCompanion;
