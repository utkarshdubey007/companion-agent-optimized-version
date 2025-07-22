import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export const companions = [
  {
    id: 1,
    name: "Cody",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fae5429317afa463b8668d5872bee2cf9%2Ff0fe601417514f438f5ace1c12450f30?format=webp&width=800",
    color: "#FF6B6B",
    description: "Red fox coder who loves programming adventures!",
    type: "Red fox coder",
    traits: ["Digital", "Smart", "Innovative"],
  },
  {
    id: 2,
    name: "Doma",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fae5429317afa463b8668d5872bee2cf9%2F2f140743f61a4813a678c882959815ff?format=webp&width=800",
    color: "#4ECDC4",
    description: "Speedy lizard who races through adventures!",
    type: "Speedy lizard",
    traits: ["Fast", "Agile", "Adventurous"],
  },
  {
    id: 3,
    name: "Letsgo",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fae5429317afa463b8668d5872bee2cf9%2Fb739432197b34209a365cd0320ed09a4?format=webp&width=800",
    color: "#45B7D1",
    description: "Energetic bunny leader, creative and helpful!",
    type: "Energetic bunny",
    traits: ["Leader", "Creative", "Helpful"],
  },
  {
    id: 4,
    name: "Rooty",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fae5429317afa463b8668d5872bee2cf9%2Ff22c539957df4cf1b810be45844442be?format=webp&width=800",
    color: "#F39C12",
    description: "Wise and gentle bear with magical tools!",
    type: "Wise gentle bear",
    traits: ["Wise", "Gentle", "Crafty"],
  },
  {
    id: 5,
    name: "Rushmore",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fae5429317afa463b8668d5872bee2cf9%2Fd477fa3ace324c9aafc5275df782584f?format=webp&width=800",
    color: "#3498DB",
    description: "Clumsy house cat chef, always cooking up fun!",
    type: "Clumsy house cat chef",
    traits: ["Funny", "Clumsy", "Creative"],
  },
  {
    id: 6,
    name: "Uni",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fae5429317afa463b8668d5872bee2cf9%2F408758d5b0f24a8ab1fe3ac5b8489720?format=webp&width=800",
    color: "#E91E63",
    description: "Space explorer, curious and empathetic!",
    type: "Space explorer",
    traits: ["Curious", "Empathetic", "Mysterious"],
  },
];

// Character-specific hover animations
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
            x: [-80, 80, -80],
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
            className="absolute w-8 h-0.5 rounded-full"
            style={{
              backgroundColor: color,
              left: "10%",
              top: `${30 + i * 15}%`,
            }}
            animate={{
              x: [0, 60, 0],
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
            y: [0, -8, 0],
            borderWidth: ["2px", "4px", "2px"],
          }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
        {/* Bounce trail particles */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              backgroundColor: color,
              left: "50%",
              top: "50%",
              boxShadow: `0 0 8px ${color}`,
            }}
            animate={{
              y: [0, -20, -35],
              x: [(i - 2) * 5, (i - 2) * 10],
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
        {["⚙️", "🔧", "⚡", "🛠️"].map((tool, i) => (
          <motion.div
            key={i}
            className="absolute text-xs"
            style={{
              left: `${20 + i * 15}%`,
              top: `${20 + i * 15}%`,
            }}
            animate={{
              rotate: [0, 360],
              y: [0, -10, 0],
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
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-gray-300 rounded-full opacity-40"
            style={{
              left: `${40 + i * 5}%`,
              top: `${30 + i * 5}%`,
            }}
            animate={{
              y: [0, -40],
              x: [0, (Math.random() - 0.5) * 20],
              scale: [0.5, 1.5, 0],
              opacity: [0.4, 0.2, 0],
            }}
            transition={{
              duration: 2,
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
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-white"
            style={{
              left: `${20 + i * 12}%`,
              top: `${25 + i * 10}%`,
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

const CompanionOrb = ({
  companion,
  index,
  onSelect,
  isHovered,
  onHover,
  totalCompanions,
  selectedCompanion,
}) => {
  const angle = ((index * 360) / totalCompanions) * (Math.PI / 180);
  const radius = 200;
  const x = Math.cos(angle) * radius;
  const y = Math.sin(angle) * radius;

  const isSelected = selectedCompanion?.id === companion.id;
  const hasSelection = selectedCompanion !== null;

  return (
    <motion.div
      className="absolute cursor-pointer"
      initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
      animate={{
        opacity: hasSelection ? (isSelected ? 1 : 0) : 1,
        scale: isSelected ? 1 : hasSelection ? 0.8 : 1,
        x: isSelected ? 0 : x,
        y: isSelected ? 0 : y,
        zIndex: isSelected ? 70 : 20,
      }}
      whileHover={
        !hasSelection
          ? {
              scale: 1.2,
              y: y - 15,
            }
          : {}
      }
      transition={{
        duration: hasSelection ? 1.2 : 0.8,
        delay: hasSelection ? 0 : index * 0.15,
        type: "spring",
        stiffness: 200,
        damping: 20,
      }}
      onMouseEnter={() => !hasSelection && onHover(companion.id)}
      onMouseLeave={() => !hasSelection && onHover(null)}
      onClick={() => !hasSelection && onSelect(companion)}
      style={{
        // When selected, position absolutely to center within the ring
        position: isSelected ? "absolute" : "absolute",
        top: isSelected ? "50%" : "auto",
        left: isSelected ? "50%" : "auto",
        transform: isSelected ? "translate(-50%, -50%)" : "none",
      }}
    >
      {/* Floating animation container */}
      <motion.div
        layoutId={`companion-${companion.id}`}
        animate={{
          y:
            companion.name === "Letsgo" && isHovered === companion.id
              ? [0, -15, 0] // Enhanced bounce for Letsgo
              : [0, -12, 0],
          rotate:
            companion.name === "Rushmore" && isHovered === companion.id
              ? [0, 5, -5, 0] // Wobble for clumsy cat
              : [0, 3, 0, -3, 0],
        }}
        transition={{
          duration:
            companion.name === "Letsgo" && isHovered === companion.id ? 0.6 : 4,
          repeat: Infinity,
          delay: index * 0.7,
          ease:
            companion.name === "Letsgo" && isHovered === companion.id
              ? "easeOut"
              : "easeInOut",
        }}
      >
        {/* Outer magical aura */}
        <motion.div
          className="absolute inset-0 rounded-full blur-lg"
          style={{
            backgroundColor: companion.color,
            width: isSelected ? "200px" : "120px",
            height: isSelected ? "200px" : "120px",
            left: isSelected ? "-60px" : "-20px",
            top: isSelected ? "-60px" : "-20px",
          }}
          animate={{
            scale: isSelected ? [1, 1.4, 1] : [1, 1.2, 1],
            opacity: isSelected ? [0.4, 0.7, 0.4] : [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: isSelected ? 1.5 : 2.5,
            repeat: Infinity,
            delay: index * 0.3,
          }}
        />

        {/* Glowing border ring */}
        <motion.div
          className="absolute inset-0 rounded-full border-4"
          style={{
            borderColor: companion.color,
            boxShadow: isSelected
              ? `0 0 60px ${companion.color}, 0 0 120px ${companion.color}60`
              : `0 0 30px ${companion.color}`,
            width: isSelected ? "120px" : "80px",
            height: isSelected ? "120px" : "80px",
            left: isSelected ? "-20px" : "0px",
            top: isSelected ? "-20px" : "0px",
          }}
          animate={{
            borderWidth: isSelected
              ? ["4px", "6px", "4px"]
              : ["2px", "4px", "2px"],
            boxShadow: isSelected
              ? [
                  `0 0 60px ${companion.color}, 0 0 120px ${companion.color}60`,
                  `0 0 80px ${companion.color}, 0 0 160px ${companion.color}80`,
                  `0 0 60px ${companion.color}, 0 0 120px ${companion.color}60`,
                ]
              : isHovered === companion.id
                ? `0 0 40px ${companion.color}, 0 0 80px ${companion.color}40`
                : `0 0 20px ${companion.color}`,
            scale: isSelected ? [1, 1.1, 1] : [1, 1.05, 1],
          }}
          transition={{
            duration: isSelected ? 1.2 : 2,
            repeat: Infinity,
          }}
        />

        {/* Companion avatar - only the image, no symbolic overlays */}
        <motion.div
          className="rounded-full overflow-hidden relative"
          layoutId={isSelected ? `companion-avatar-${companion.id}` : undefined}
          style={{
            backgroundColor: companion.color,
            boxShadow: isSelected
              ? `0 12px 48px ${companion.color}80`
              : `0 8px 32px ${companion.color}60`,
            width: isSelected ? "180px" : "80px",
            height: isSelected ? "180px" : "80px",
            maxWidth: isSelected ? "180px" : "80px",
            maxHeight: isSelected ? "180px" : "80px",
          }}
          animate={{
            scale: isSelected ? [0.8, 1.1, 1] : [1],
          }}
          transition={{
            duration: isSelected ? 1.5 : 0,
            delay: isSelected ? 0.3 : 0,
            ease: "easeOut",
          }}
        >
          <img
            src={companion.image}
            alt={companion.name}
            className="w-full h-full object-cover"
          />

          {/* Character-specific hover animations */}
          <CharacterHoverAnimations
            companion={companion}
            isHovered={isHovered === companion.id}
          />
        </motion.div>

        {/* Name label - only show when not selected (selected name appears above) */}
        {!hasSelection && (
          <motion.div
            className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{ delay: index * 0.1 + 0.8 }}
          >
            <div
              className="text-white font-bold drop-shadow-lg text-sm"
              style={{
                textShadow: `0 0 10px ${companion.color}`,
              }}
            >
              {companion.name}
            </div>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};

const CompanionSelector = ({ onSelect, onClose }) => {
  const [hoveredCompanion, setHoveredCompanion] = useState(null);
  const [isClosing, setIsClosing] = useState(false);
  const [selectedCompanion, setSelectedCompanion] = useState(null);

  const handleSelect = (companion) => {
    // Set selected companion for animation
    setSelectedCompanion(companion);

    // After showing selection animation, close and complete selection
    setTimeout(() => {
      setIsClosing(true);
      setTimeout(() => {
        onSelect?.(companion);
      }, 300);
    }, 2000); // 2 seconds to show the selection animation and label
  };

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose?.();
    }, 300);
  };

  // Handle ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-[9999]"
        initial={{ opacity: 0 }}
        animate={{ opacity: isClosing ? 0 : 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        onClick={handleClose}
        style={{
          backdropFilter: "blur(4px)",
          WebkitBackdropFilter: "blur(4px)",
        }}
      >
        {/* Magical nebula background */}
        <motion.div
          className="absolute inset-0 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: isClosing ? 0 : 1 }}
          transition={{ duration: 1 }}
        >
          {/* Animated gradient background */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(circle at 30% 40%, 
                rgba(147, 51, 234, 0.5) 0%, 
                rgba(59, 130, 246, 0.4) 25%, 
                rgba(16, 185, 129, 0.3) 50%, 
                rgba(245, 158, 11, 0.2) 75%,
                rgba(0, 0, 0, 0.9) 100%)`,
            }}
            animate={{
              background: [
                `radial-gradient(circle at 30% 40%, rgba(147, 51, 234, 0.5) 0%, rgba(59, 130, 246, 0.4) 25%, rgba(16, 185, 129, 0.3) 50%, rgba(245, 158, 11, 0.2) 75%, rgba(0, 0, 0, 0.9) 100%)`,
                `radial-gradient(circle at 70% 60%, rgba(59, 130, 246, 0.5) 0%, rgba(16, 185, 129, 0.4) 25%, rgba(245, 158, 11, 0.3) 50%, rgba(147, 51, 234, 0.2) 75%, rgba(0, 0, 0, 0.9) 100%)`,
                `radial-gradient(circle at 50% 20%, rgba(16, 185, 129, 0.5) 0%, rgba(245, 158, 11, 0.4) 25%, rgba(147, 51, 234, 0.3) 50%, rgba(59, 130, 246, 0.2) 75%, rgba(0, 0, 0, 0.9) 100%)`,
                `radial-gradient(circle at 30% 40%, rgba(147, 51, 234, 0.5) 0%, rgba(59, 130, 246, 0.4) 25%, rgba(16, 185, 129, 0.3) 50%, rgba(245, 158, 11, 0.2) 75%, rgba(0, 0, 0, 0.9) 100%)`,
              ],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* Twinkling stars */}
          {[...Array(60)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
              }}
              transition={{
                duration: 2 + Math.random() * 3,
                delay: Math.random() * 2,
                repeat: Infinity,
                repeatDelay: Math.random() * 5,
              }}
            />
          ))}
        </motion.div>

        {/* Main selector container */}
        <motion.div
          className="relative w-[700px] h-[700px] flex items-center justify-center z-[50]"
          initial={{ scale: 0, opacity: 0, rotate: -180 }}
          animate={{
            scale: isClosing ? 0.5 : 1,
            opacity: isClosing ? 0 : 1,
            rotate: isClosing ? 180 : 0,
          }}
          exit={{ scale: 0, opacity: 0, rotate: 180 }}
          transition={{
            duration: isClosing ? 0.5 : 1.2,
            type: "spring",
            stiffness: 150,
            damping: 25,
          }}
          onClick={(e) => e.stopPropagation()}
          style={{
            isolation: "isolate",
          }}
        >
          {/* Outer orbit rings */}
          <motion.div
            className="absolute w-[500px] h-[500px] border border-dashed border-white border-opacity-10 rounded-full z-[5]"
            animate={{ rotate: 360 }}
            transition={{
              duration: 60,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          <motion.div
            className="absolute w-[450px] h-[450px] border border-white border-opacity-5 rounded-full z-[5]"
            animate={{ rotate: -360 }}
            transition={{
              duration: 50,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* Center ring for selected companion */}
          <AnimatePresence>
            {selectedCompanion && (
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[60]"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {/* Center ring with pulsing glow */}
                <motion.div
                  className="w-[220px] h-[220px] rounded-full border-4 flex items-center justify-center relative"
                  style={{
                    borderColor: selectedCompanion.color,
                    background: `radial-gradient(circle, ${selectedCompanion.color}20 0%, transparent 70%)`,
                    boxShadow: `0 0 60px ${selectedCompanion.color}40, inset 0 0 60px ${selectedCompanion.color}20`,
                  }}
                  animate={{
                    borderWidth: ["4px", "8px", "4px"],
                    boxShadow: [
                      `0 0 60px ${selectedCompanion.color}40, inset 0 0 60px ${selectedCompanion.color}20`,
                      `0 0 100px ${selectedCompanion.color}60, inset 0 0 80px ${selectedCompanion.color}30`,
                      `0 0 60px ${selectedCompanion.color}40, inset 0 0 60px ${selectedCompanion.color}20`,
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  {/* Particle aura inside ring */}
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 rounded-full"
                      style={{
                        backgroundColor: selectedCompanion.color,
                        boxShadow: `0 0 6px ${selectedCompanion.color}`,
                      }}
                      animate={{
                        x: Math.cos((i * 45 * Math.PI) / 180) * 90,
                        y: Math.sin((i * 45 * Math.PI) / 180) * 90,
                        scale: [0, 1, 0],
                        opacity: [0, 0.8, 0],
                      }}
                      transition={{
                        duration: 3,
                        delay: i * 0.2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  ))}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Companion orbs */}
          {companions.map((companion, index) => (
            <CompanionOrb
              key={companion.id}
              companion={companion}
              index={index}
              totalCompanions={companions.length}
              onSelect={handleSelect}
              isHovered={hoveredCompanion}
              onHover={setHoveredCompanion}
              selectedCompanion={selectedCompanion}
            />
          ))}

          {/* Selected companion label - appears above the centered companion */}
          <AnimatePresence>
            {selectedCompanion && (
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[90]"
                initial={{ opacity: 0, scale: 0, y: 50 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: -120, // Position above the companion image
                }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{
                  delay: 1, // Delay to let the companion zoom in first
                  duration: 0.8,
                  type: "spring",
                  stiffness: 200,
                }}
              >
                <div className="text-center">
                  <motion.div
                    className="text-white font-bold text-2xl mb-2"
                    style={{
                      textShadow: `0 0 20px ${selectedCompanion.color}, 0 0 40px ${selectedCompanion.color}`,
                      filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.5))",
                    }}
                    animate={{
                      textShadow: [
                        `0 0 20px ${selectedCompanion.color}, 0 0 40px ${selectedCompanion.color}`,
                        `0 0 30px ${selectedCompanion.color}, 0 0 60px ${selectedCompanion.color}`,
                        `0 0 20px ${selectedCompanion.color}, 0 0 40px ${selectedCompanion.color}`,
                      ],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    {selectedCompanion.name}
                  </motion.div>
                  <motion.div
                    className="text-white text-sm opacity-90"
                    style={{
                      textShadow: "0 0 10px rgba(255,255,255,0.8)",
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.9 }}
                    transition={{ delay: 1.3 }}
                  >
                    You have selected {selectedCompanion.name}!
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Selection sparkles effect */}
          <AnimatePresence>
            {selectedCompanion && (
              <motion.div
                className="absolute inset-0 pointer-events-none z-[85]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-white rounded-full"
                    style={{
                      left: "50%",
                      top: "50%",
                      boxShadow: `0 0 15px ${selectedCompanion.color}`,
                    }}
                    initial={{
                      scale: 0,
                      x: 0,
                      y: 0,
                      opacity: 1,
                    }}
                    animate={{
                      scale: [0, 1.5, 0],
                      x: Math.cos((i * 30 * Math.PI) / 180) * 150,
                      y: Math.sin((i * 30 * Math.PI) / 180) * 150,
                      opacity: [1, 0.8, 0],
                    }}
                    transition={{
                      duration: 2,
                      delay: 0.5 + i * 0.1,
                      ease: "easeOut",
                    }}
                  />
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Center crystal orb (cancel button) - hide when companion is selected */}
          <AnimatePresence>
            {!selectedCompanion && (
              <motion.button
                className="absolute w-24 h-24 bg-gradient-to-br from-purple-400 via-pink-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl z-[80]"
                onClick={handleClose}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{
                  delay: 1.5,
                  duration: 0.5,
                  type: "spring",
                }}
                style={{
                  zIndex: 80,
                }}
              >
                <motion.div
                  animate={{
                    rotate: [0, 360],
                    boxShadow: [
                      "0 0 30px rgba(147, 51, 234, 0.6)",
                      "0 0 50px rgba(236, 72, 153, 0.8)",
                      "0 0 30px rgba(147, 51, 234, 0.6)",
                    ],
                  }}
                  transition={{
                    rotate: {
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear",
                    },
                    boxShadow: {
                      duration: 2,
                      repeat: Infinity,
                    },
                  }}
                >
                  <X className="w-10 h-10 text-white drop-shadow-lg" />
                </motion.div>
              </motion.button>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CompanionSelector;
