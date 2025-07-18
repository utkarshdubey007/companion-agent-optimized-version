import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles } from "lucide-react";

const companions = [
  {
    id: 1,
    name: "Coral",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fae5429317afa463b8668d5872bee2cf9%2Ff0fe601417514f438f5ace1c12450f30?format=webp&width=800",
    color: "#FF6B6B",
    description: "Warm and caring, loves to give hugs!",
    element: "🌺",
  },
  {
    id: 2,
    name: "Aqua",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fae5429317afa463b8668d5872bee2cf9%2F2f140743f61a4813a678c882959815ff?format=webp&width=800",
    color: "#4ECDC4",
    description: "Calm and wise, loves ocean adventures!",
    element: "🌊",
  },
  {
    id: 3,
    name: "Sage",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fae5429317afa463b8668d5872bee2cf9%2Fb739432197b34209a365cd0320ed09a4?format=webp&width=800",
    color: "#45B7D1",
    description: "Curious and clever, loves to explore!",
    element: "🌿",
  },
  {
    id: 4,
    name: "Sunny",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fae5429317afa463b8668d5872bee2cf9%2Ff22c539957df4cf1b810be45844442be?format=webp&width=800",
    color: "#F39C12",
    description: "Cheerful and bright, spreads joy everywhere!",
    element: "☀️",
  },
  {
    id: 5,
    name: "Sky",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fae5429317afa463b8668d5872bee2cf9%2Fd477fa3ace324c9aafc5275df782584f?format=webp&width=800",
    color: "#3498DB",
    description: "Dreamy and imaginative, loves to fly!",
    element: "☁️",
  },
  {
    id: 6,
    name: "Rose",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fae5429317afa463b8668d5872bee2cf9%2F408758d5b0f24a8ab1fe3ac5b8489720?format=webp&width=800",
    color: "#E91E63",
    description: "Sweet and gentle, loves magical flowers!",
    element: "🌸",
  },
];

const MagicalParticle = ({ delay = 0, color = "#ffffff" }) => (
  <motion.div
    className="absolute w-1 h-1 bg-white rounded-full opacity-80"
    style={{
      backgroundColor: color,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
    }}
    initial={{ opacity: 0, scale: 0 }}
    animate={{
      opacity: [0, 1, 0],
      scale: [0, 2, 0],
      y: [0, -100],
    }}
    transition={{
      duration: 4,
      delay,
      repeat: Infinity,
      repeatDelay: Math.random() * 3,
      ease: "easeOut",
    }}
  />
);

const SparkleTrail = ({ isHovered, color }) => (
  <AnimatePresence>
    {isHovered && (
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              backgroundColor: color,
              boxShadow: `0 0 6px ${color}`,
              left: `${30 + i * 5}%`,
              top: `${30 + i * 5}%`,
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
              x: [0, (Math.random() - 0.5) * 60],
              y: [0, (Math.random() - 0.5) * 60],
              rotate: [0, 360],
            }}
            transition={{
              duration: 1.5,
              delay: i * 0.1,
              repeat: Infinity,
              repeatDelay: 1,
              ease: "easeOut",
            }}
          />
        ))}
      </motion.div>
    )}
  </AnimatePresence>
);

const CompanionOrb = ({
  companion,
  index,
  isSelected,
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

  const isOtherSelected =
    selectedCompanion && selectedCompanion.id !== companion.id;

  return (
    <motion.div
      className="absolute cursor-pointer"
      initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
      animate={{
        opacity: isOtherSelected ? 0.2 : 1,
        scale: isSelected ? 2.5 : isOtherSelected ? 0.6 : 1,
        x: isSelected ? 0 : x,
        y: isSelected ? 0 : y,
        zIndex: isSelected ? 50 : 10,
        rotate: isSelected ? [0, 360] : 0,
      }}
      whileHover={{
        scale: isSelected ? 2.5 : isOtherSelected ? 0.6 : 1.2,
        y: isSelected ? 0 : isOtherSelected ? y : y - 15,
      }}
      transition={{
        duration: isSelected ? 1.5 : 0.8,
        delay: isSelected ? 0 : index * 0.15,
        type: "spring",
        stiffness: 200,
        damping: 20,
      }}
      onMouseEnter={() => !selectedCompanion && onHover(companion.id)}
      onMouseLeave={() => onHover(null)}
      onClick={() => !selectedCompanion && onSelect(companion)}
    >
      {/* Floating animation container */}
      <motion.div
        animate={{
          y: isSelected ? [0, -20, 0] : [0, -12, 0],
          rotate: [0, 3, 0, -3, 0],
        }}
        transition={{
          duration: isSelected ? 2 : 4,
          repeat: Infinity,
          delay: index * 0.7,
          ease: "easeInOut",
        }}
      >
        {/* Outer magical aura */}
        <motion.div
          className="absolute inset-0 rounded-full blur-lg"
          style={{
            backgroundColor: companion.color,
            width: "120px",
            height: "120px",
            left: "-20px",
            top: "-20px",
          }}
          animate={{
            scale: isSelected ? [1, 1.5, 1] : [1, 1.2, 1],
            opacity: isSelected ? [0.4, 0.8, 0.4] : [0.2, 0.4, 0.2],
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
            boxShadow: `0 0 30px ${companion.color}`,
            width: "80px",
            height: "80px",
          }}
          animate={{
            borderWidth: isSelected
              ? ["4px", "6px", "4px"]
              : ["2px", "4px", "2px"],
            boxShadow:
              isHovered === companion.id || isSelected
                ? `0 0 40px ${companion.color}, 0 0 80px ${companion.color}40`
                : `0 0 20px ${companion.color}`,
            scale: isSelected ? [1, 1.1, 1] : [1, 1.05, 1],
          }}
          transition={{
            duration: isSelected ? 1 : 2,
            repeat: Infinity,
          }}
        />

        {/* Companion avatar */}
        <motion.div
          className="w-20 h-20 rounded-full overflow-hidden relative"
          style={{
            backgroundColor: companion.color,
            boxShadow: `0 8px 32px ${companion.color}60`,
          }}
        >
          <img
            src={companion.image}
            alt={companion.name}
            className="w-full h-full object-cover"
          />

          {/* Element overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.span
              className="text-2xl filter drop-shadow-lg"
              animate={{
                scale: isSelected ? [1, 1.5, 1] : [1, 1.2, 1],
                rotate: [0, 10, 0, -10, 0],
              }}
              transition={{
                duration: isSelected ? 1.5 : 3,
                repeat: Infinity,
                delay: index * 0.4,
              }}
            >
              {companion.element}
            </motion.span>
          </div>

          {/* Sparkle effects */}
          <SparkleTrail
            isHovered={isHovered === companion.id || isSelected}
            color={companion.color}
          />

          {/* Selection glow burst */}
          {isSelected && (
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                background: `radial-gradient(circle, ${companion.color}40, transparent)`,
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: [0, 3, 0],
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatDelay: 0.5,
              }}
            />
          )}
        </motion.div>

        {/* Name label */}
        <motion.div
          className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{
            opacity: isOtherSelected ? 0.3 : 1,
            y: 0,
            scale: isSelected ? 1.2 : 1,
          }}
          transition={{ delay: index * 0.1 + 0.8 }}
        >
          <div
            className="text-white font-bold drop-shadow-lg"
            style={{
              fontSize: isSelected ? "18px" : "14px",
              textShadow: isSelected ? `0 0 10px ${companion.color}` : "none",
            }}
          >
            {companion.name}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const PortalRing = ({ isVisible, color }) => (
  <AnimatePresence>
    {isVisible && (
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Outer portal ring */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border-4 border-dashed"
          style={{
            borderColor: color,
            boxShadow: `0 0 60px ${color}`,
          }}
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            rotate: {
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            },
            scale: {
              duration: 2,
              repeat: Infinity,
            },
          }}
        />

        {/* Portal energy particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              backgroundColor: color,
              boxShadow: `0 0 10px ${color}`,
              top: "50%",
              left: "50%",
            }}
            animate={{
              x: [0, Math.cos((i * 18 * Math.PI) / 180) * 150],
              y: [0, Math.sin((i * 18 * Math.PI) / 180) * 150],
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              delay: i * 0.1,
              repeat: Infinity,
              repeatDelay: 1,
              ease: "easeOut",
            }}
          />
        ))}
      </motion.div>
    )}
  </AnimatePresence>
);

const CompanionSelector = ({ onSelect, onClose }) => {
  const [selectedCompanion, setSelectedCompanion] = useState(null);
  const [hoveredCompanion, setHoveredCompanion] = useState(null);
  const [showMessage, setShowMessage] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleSelect = (companion) => {
    setSelectedCompanion(companion);
    setShowMessage(true);

    // Auto-close after selection animation
    setTimeout(() => {
      setIsClosing(true);
      setTimeout(() => {
        onSelect?.(companion);
      }, 500);
    }, 1500);
  };

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setSelectedCompanion(null);
      setShowMessage(false);
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
        className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: isClosing ? 0 : 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        onClick={handleClose}
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

          {/* Floating magical particles */}
          {[...Array(40)].map((_, i) => (
            <MagicalParticle
              key={i}
              delay={i * 0.1}
              color={companions[i % companions.length].color}
            />
          ))}

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
          className="relative w-[700px] h-[700px] flex items-center justify-center"
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
        >
          {/* Magical title */}
          <motion.div
            className="absolute -top-36 left-1/2 transform -translate-x-1/2 text-center z-10"
            initial={{ opacity: 0, y: -50 }}
            animate={{
              opacity: isClosing ? 0 : 1,
              y: isClosing ? -30 : 0,
            }}
            transition={{
              delay: isClosing ? 0 : 0.3,
              duration: 0.8,
            }}
          >
            <motion.h2
              className="text-6xl font-bold text-white mb-4 drop-shadow-2xl"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, duration: 0.6, type: "spring" }}
            >
              <motion.span
                animate={{
                  textShadow: [
                    "0 0 30px #ffffff",
                    "0 0 60px #9333EA",
                    "0 0 60px #4ECDC4",
                    "0 0 30px #ffffff",
                  ],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                ✨ Choose Your Magical Companion ✨
              </motion.span>
            </motion.h2>
            <motion.p
              className="text-xl text-white opacity-90 font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              Select a friend to join your enchanted journey!
            </motion.p>
          </motion.div>

          {/* Outer orbit rings */}
          <motion.div
            className="absolute w-[500px] h-[500px] border-2 border-dashed border-white border-opacity-20 rounded-full"
            animate={{ rotate: 360 }}
            transition={{
              duration: 50,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          <motion.div
            className="absolute w-[450px] h-[450px] border border-white border-opacity-10 rounded-full"
            animate={{ rotate: -360 }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* Portal effects for selected companion */}
          <PortalRing
            isVisible={selectedCompanion !== null}
            color={selectedCompanion?.color || "#ffffff"}
          />

          {/* Companion orbs */}
          {companions.map((companion, index) => (
            <CompanionOrb
              key={companion.id}
              companion={companion}
              index={index}
              totalCompanions={companions.length}
              isSelected={selectedCompanion?.id === companion.id}
              selectedCompanion={selectedCompanion}
              onSelect={handleSelect}
              isHovered={hoveredCompanion}
              onHover={setHoveredCompanion}
            />
          ))}

          {/* Center crystal orb (cancel button) */}
          <AnimatePresence>
            {!selectedCompanion && (
              <motion.button
                className="absolute w-24 h-24 bg-gradient-to-br from-purple-400 via-pink-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl border-2 border-white border-opacity-30"
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

          {/* Success message */}
          <AnimatePresence>
            {showMessage && selectedCompanion && (
              <motion.div
                className="absolute -bottom-40 left-1/2 transform -translate-x-1/2 text-center"
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -30, scale: 0.8 }}
                transition={{ duration: 0.8 }}
              >
                <motion.div
                  className="bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-30"
                  animate={{
                    boxShadow: [
                      `0 0 30px ${selectedCompanion.color}40`,
                      `0 0 60px ${selectedCompanion.color}60`,
                      `0 0 30px ${selectedCompanion.color}40`,
                    ],
                  }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <motion.h3
                    className="text-4xl font-bold text-white mb-3"
                    animate={{
                      textShadow: [
                        `0 0 20px ${selectedCompanion.color}`,
                        `0 0 40px ${selectedCompanion.color}`,
                        `0 0 20px ${selectedCompanion.color}`,
                      ],
                    }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    ✨ You chose {selectedCompanion.name}! ✨
                  </motion.h3>
                  <motion.p
                    className="text-xl text-white opacity-90 mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {selectedCompanion.description}
                  </motion.p>
                  <motion.p
                    className="text-2xl text-white font-semibold"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    Let the magic begin! 🌟
                  </motion.p>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CompanionSelector;
