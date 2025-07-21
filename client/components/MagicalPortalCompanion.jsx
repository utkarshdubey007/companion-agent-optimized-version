import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Magical particle system for different states
const MagicalParticles = ({ state, portalRef }) => {
  const getParticleConfig = () => {
    switch (state) {
      case "idle":
        return {
          count: 8,
          color: "#FFD700",
          type: "shimmer",
          animation: {
            y: [0, -20, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [0.5, 1, 0.5],
          },
          transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
        };
      case "thinking":
        return {
          count: 12,
          color: "#9333EA",
          type: "stars",
          animation: {
            y: [0, -40, -80],
            x: [0, Math.random() * 40 - 20],
            opacity: [0, 1, 0],
            rotate: [0, 360],
          },
          transition: { duration: 2, repeat: Infinity, ease: "easeOut" },
        };
      case "talking":
        return {
          count: 16,
          color: "#FF6B9D",
          type: "soundWaves",
          animation: {
            scale: [0, 1.5, 0],
            opacity: [0, 0.8, 0],
            x: [0, Math.random() * 60 - 30],
          },
          transition: { duration: 1, repeat: Infinity, ease: "easeOut" },
        };
      case "reacting":
        return {
          count: 10,
          color: "#00D4FF",
          type: "hearts",
          animation: {
            y: [0, -50],
            scale: [0.5, 1.2, 0],
            opacity: [0, 1, 0],
          },
          transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
        };
      default:
        return { count: 0 };
    }
  };

  const config = getParticleConfig();
  if (config.count === 0) return null;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {[...Array(config.count)].map((_, i) => {
        const angle = (i * 360) / config.count;
        const radius = state === "thinking" ? 60 : 40;
        const x = Math.cos((angle * Math.PI) / 180) * radius;
        const y = Math.sin((angle * Math.PI) / 180) * radius;

        return (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: "50%",
              top: "50%",
              transform: `translate(${x}px, ${y}px)`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={config.animation}
            transition={{
              ...config.transition,
              delay: i * 0.1,
            }}
          >
            {config.type === "stars" && (
              <div
                className="w-2 h-2 rounded-full"
                style={{
                  backgroundColor: config.color,
                  boxShadow: `0 0 10px ${config.color}`,
                }}
              />
            )}
            {config.type === "shimmer" && (
              <div
                className="w-1 h-1 rounded-full"
                style={{
                  backgroundColor: config.color,
                  boxShadow: `0 0 8px ${config.color}`,
                }}
              />
            )}
            {config.type === "soundWaves" && (
              <div
                className="w-3 h-1 rounded-full"
                style={{
                  backgroundColor: config.color,
                  opacity: 0.6,
                }}
              />
            )}
            {config.type === "hearts" && (
              <div className="text-red-400 text-sm">💙</div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
};

// Floating emotion bubbles
const EmotionBubbles = ({ emotions, isVisible }) => {
  if (!isVisible || !emotions.length) return null;

  return (
    <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 pointer-events-none">
      {emotions.map((emotion, i) => (
        <motion.div
          key={i}
          className="absolute text-2xl"
          style={{
            left: `${i * 30 - emotions.length * 15}px`,
            top: `${-i * 10}px`,
          }}
          initial={{ scale: 0, opacity: 0, y: 20 }}
          animate={{
            scale: [0, 1.2, 1],
            opacity: [0, 1, 0.8],
            y: [20, -10, -30],
          }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{
            duration: 3,
            delay: i * 0.2,
            ease: "easeOut",
          }}
        >
          {emotion}
        </motion.div>
      ))}
    </div>
  );
};

// Sleep Z's animation
const SleepZzz = ({ isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 pointer-events-none">
      {["Z", "z", "z"].map((z, i) => (
        <motion.div
          key={i}
          className="absolute text-white font-bold opacity-60"
          style={{
            fontSize: `${20 - i * 4}px`,
            left: `${i * 15}px`,
            top: `${-i * 8}px`,
          }}
          animate={{
            y: [0, -20, -40],
            opacity: [0, 0.8, 0],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 3,
            delay: i * 0.3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {z}
        </motion.div>
      ))}
    </div>
  );
};

// Interactive sparkles on click
const InteractiveSparkles = ({ sparkles, onSparkleComplete }) => {
  return (
    <AnimatePresence>
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          className="absolute pointer-events-none"
          style={{
            left: sparkle.x,
            top: sparkle.y,
            zIndex: 100,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: [0, 1.5, 0],
            opacity: [0, 1, 0],
            rotate: [0, 180],
          }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{
            duration: 1.5,
            ease: "easeOut",
          }}
          onAnimationComplete={() => onSparkleComplete(sparkle.id)}
        >
          <div className="relative">
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
                  x: Math.cos((i * 60 * Math.PI) / 180) * 20,
                  y: Math.sin((i * 60 * Math.PI) / 180) * 20,
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 1.5,
                  delay: i * 0.1,
                  ease: "easeOut",
                }}
              />
            ))}
          </div>
        </motion.div>
      ))}
    </AnimatePresence>
  );
};

// Main magical companion component
export const MagicalPortalCompanion = ({
  state = "idle", // "idle", "thinking", "talking", "reacting"
  emotions = [],
  onInteraction,
  className = "",
  size = 160,
}) => {
  const [sparkles, setSparkles] = useState([]);
  const [companionExpression, setCompanionExpression] = useState("neutral");
  const [eyePosition, setEyePosition] = useState({ x: 0, y: 0 });
  const portalRef = useRef(null);
  const companionRef = useRef(null);

  // Random expressions for delight
  useEffect(() => {
    const expressions = ["happy", "wink", "surprised", "neutral"];
    const interval = setInterval(() => {
      if (state === "idle" && Math.random() > 0.7) {
        const randomExpression =
          expressions[Math.floor(Math.random() * expressions.length)];
        setCompanionExpression(randomExpression);
        setTimeout(() => setCompanionExpression("neutral"), 2000);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [state]);

  // Interactive sparkles on click
  const handleClick = (e) => {
    const rect = portalRef.current?.getBoundingClientRect();
    if (rect) {
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const newSparkle = {
        id: Date.now() + Math.random(),
        x: x - 10,
        y: y - 10,
      };
      setSparkles((prev) => [...prev, newSparkle]);
      onInteraction?.({ type: "sparkle", position: { x, y } });
    }
  };

  const removeSparkle = (sparkleId) => {
    setSparkles((prev) => prev.filter((s) => s.id !== sparkleId));
  };

  // Get companion animations based on state
  const getCompanionAnimation = () => {
    switch (state) {
      case "thinking":
        return {
          y: [-10, -25, -10],
          rotate: [-2, 2, -2],
          scale: [1, 1.05, 1],
        };
      case "talking":
        return {
          scale: [1, 1.1, 1.05, 1.1, 1],
          y: [0, -5, 0],
        };
      case "reacting":
        return {
          scale: [1, 1.2, 0.95, 1.1, 1],
          rotate: [0, -5, 5, 0],
        };
      default: // idle
        return {
          y: [0, -8, 0],
          scale: [1, 1.02, 1],
        };
    }
  };

  const getCompanionTransition = () => {
    switch (state) {
      case "thinking":
        return { duration: 2, repeat: Infinity, ease: "easeInOut" };
      case "talking":
        return { duration: 0.6, repeat: Infinity, ease: "easeInOut" };
      case "reacting":
        return { duration: 1.5, ease: "easeInOut" };
      default:
        return { duration: 4, repeat: Infinity, ease: "easeInOut" };
    }
  };

  // Eye expressions
  const getEyeStyle = () => {
    switch (companionExpression) {
      case "happy":
        return { transform: "scaleY(0.5)", borderRadius: "50%" };
      case "wink":
        return { transform: "scaleX(0.3)" };
      case "surprised":
        return { transform: "scale(1.3)" };
      default:
        return {};
    }
  };

  const getMouthStyle = () => {
    switch (state) {
      case "talking":
        return { transform: "scaleY(1.5)" };
      case "reacting":
        if (emotions.includes("😂"))
          return { borderRadius: "50% 50% 50% 50% / 20% 20% 80% 80%" };
        if (emotions.includes("😢")) return { transform: "scaleY(0.3)" };
        return {};
      default:
        return companionExpression === "happy"
          ? { borderRadius: "50% 50% 50% 50% / 20% 20% 80% 80%" }
          : {};
    }
  };

  return (
    <div
      className={`relative ${className}`}
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      {/* Magical portal background */}
      <motion.div
        ref={portalRef}
        className="absolute inset-0 rounded-full cursor-pointer overflow-hidden"
        onClick={handleClick}
        style={{
          background: `radial-gradient(circle at center, 
            rgba(255, 215, 0, 0.8) 0%, 
            rgba(255, 140, 0, 0.6) 30%, 
            rgba(147, 51, 234, 0.4) 60%, 
            rgba(0, 0, 0, 0.8) 100%)`,
          boxShadow: `0 0 40px rgba(255, 215, 0, 0.6), 
                      inset 0 0 60px rgba(255, 215, 0, 0.3)`,
        }}
        animate={{
          boxShadow: [
            "0 0 40px rgba(255, 215, 0, 0.6), inset 0 0 60px rgba(255, 215, 0, 0.3)",
            "0 0 60px rgba(255, 215, 0, 0.8), inset 0 0 80px rgba(255, 215, 0, 0.5)",
            "0 0 40px rgba(255, 215, 0, 0.6), inset 0 0 60px rgba(255, 215, 0, 0.3)",
          ],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Portal energy rings */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute inset-0 rounded-full border-2 border-yellow-300 opacity-30"
            animate={{
              scale: [0.8 + i * 0.1, 1.2 + i * 0.1, 0.8 + i * 0.1],
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{
              duration: 4,
              delay: i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Magical particles system */}
        <MagicalParticles state={state} portalRef={portalRef} />

        {/* Sleep Z's */}
        <SleepZzz isVisible={state === "idle"} />

        {/* Emotion bubbles */}
        <EmotionBubbles emotions={emotions} isVisible={state === "reacting"} />

        {/* The magical companion blob */}
        <motion.div
          ref={companionRef}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          animate={getCompanionAnimation()}
          transition={getCompanionTransition()}
          style={{
            width: `${size * 0.6}px`,
            height: `${size * 0.6}px`,
          }}
        >
          {/* Companion body */}
          <motion.div
            className="relative w-full h-full rounded-full"
            style={{
              background: `radial-gradient(circle at 30% 30%, 
                rgba(255, 182, 193, 1) 0%, 
                rgba(255, 105, 180, 0.9) 40%, 
                rgba(219, 112, 147, 0.8) 100%)`,
              boxShadow: `0 8px 32px rgba(255, 105, 180, 0.4),
                          inset 0 0 20px rgba(255, 255, 255, 0.3)`,
            }}
            animate={{
              background:
                state === "talking"
                  ? [
                      "radial-gradient(circle at 30% 30%, rgba(255, 182, 193, 1) 0%, rgba(255, 105, 180, 0.9) 40%, rgba(219, 112, 147, 0.8) 100%)",
                      "radial-gradient(circle at 30% 30%, rgba(255, 220, 220, 1) 0%, rgba(255, 150, 200, 0.9) 40%, rgba(255, 120, 180, 0.8) 100%)",
                      "radial-gradient(circle at 30% 30%, rgba(255, 182, 193, 1) 0%, rgba(255, 105, 180, 0.9) 40%, rgba(219, 112, 147, 0.8) 100%)",
                    ]
                  : "radial-gradient(circle at 30% 30%, rgba(255, 182, 193, 1) 0%, rgba(255, 105, 180, 0.9) 40%, rgba(219, 112, 147, 0.8) 100%)",
            }}
            transition={{
              duration: 0.5,
              repeat: state === "talking" ? Infinity : 0,
            }}
          >
            {/* Left eye */}
            <motion.div
              className="absolute bg-white rounded-full"
              style={{
                width: "18%",
                height: "18%",
                left: "25%",
                top: "35%",
                ...getEyeStyle(),
              }}
              animate={
                state === "thinking" ? { y: [-2, -4, -2], x: [-1, 1, -1] } : {}
              }
              transition={{ duration: 2, repeat: Infinity }}
            >
              <motion.div
                className="absolute bg-black rounded-full"
                style={{
                  width: "60%",
                  height: "60%",
                  left: "50%",
                  top: "50%",
                  transform: `translate(-50%, -50%) translate(${eyePosition.x}px, ${eyePosition.y}px)`,
                }}
                animate={
                  companionExpression === "wink" ? { scaleX: [1, 0, 1] } : {}
                }
                transition={{ duration: 0.5 }}
              />
            </motion.div>

            {/* Right eye */}
            <motion.div
              className="absolute bg-white rounded-full"
              style={{
                width: "18%",
                height: "18%",
                right: "25%",
                top: "35%",
                ...getEyeStyle(),
              }}
              animate={
                state === "thinking" ? { y: [-2, -4, -2], x: [1, -1, 1] } : {}
              }
              transition={{ duration: 2, repeat: Infinity }}
            >
              <motion.div
                className="absolute bg-black rounded-full"
                style={{
                  width: "60%",
                  height: "60%",
                  left: "50%",
                  top: "50%",
                  transform: `translate(-50%, -50%) translate(${eyePosition.x}px, ${eyePosition.y}px)`,
                }}
              />
            </motion.div>

            {/* Mouth */}
            <motion.div
              className="absolute bg-red-400 rounded-full"
              style={{
                width: "12%",
                height: "8%",
                left: "50%",
                top: "65%",
                transform: "translateX(-50%)",
                ...getMouthStyle(),
              }}
              animate={
                state === "talking"
                  ? {
                      scaleY: [1, 1.5, 1, 1.8, 1],
                      scaleX: [1, 0.8, 1.2, 0.9, 1],
                    }
                  : {}
              }
              transition={{
                duration: 0.6,
                repeat: state === "talking" ? Infinity : 0,
              }}
            />

            {/* Blush spots */}
            <div
              className="absolute bg-pink-300 rounded-full opacity-60"
              style={{
                width: "8%",
                height: "6%",
                left: "15%",
                top: "50%",
              }}
            />
            <div
              className="absolute bg-pink-300 rounded-full opacity-60"
              style={{
                width: "8%",
                height: "6%",
                right: "15%",
                top: "50%",
              }}
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Interactive sparkles */}
      <InteractiveSparkles
        sparkles={sparkles}
        onSparkleComplete={removeSparkle}
      />
    </div>
  );
};

export default MagicalPortalCompanion;
