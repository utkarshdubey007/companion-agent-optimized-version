import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const companions = [
  {
    id: 1,
    name: "Coral",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fae5429317afa463b8668d5872bee2cf9%2F35220f9f55544852b19a81d8a56b8220?format=webp&width=800",
    color: "#FF6B6B",
    description: "Warm and caring, loves to give hugs!",
  },
  {
    id: 2,
    name: "Aqua",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fae5429317afa463b8668d5872bee2cf9%2F7472980b08d046459e557bbc6990c7cc?format=webp&width=800",
    color: "#4ECDC4",
    description: "Calm and wise, loves ocean adventures!",
  },
  {
    id: 3,
    name: "Sage",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fae5429317afa463b8668d5872bee2cf9%2F210198687221480a987ca5ac689a2bea?format=webp&width=800",
    color: "#45B7D1",
    description: "Curious and clever, loves to explore!",
  },
  {
    id: 4,
    name: "Sunny",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fae5429317afa463b8668d5872bee2cf9%2F49bf6cb669044cec87b405ab6fd50f52?format=webp&width=800",
    color: "#F39C12",
    description: "Cheerful and bright, spreads joy everywhere!",
  },
  {
    id: 5,
    name: "Sky",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fae5429317afa463b8668d5872bee2cf9%2F4f45c0ea499b45568107c6d6167d121f?format=webp&width=800",
    color: "#3498DB",
    description: "Dreamy and imaginative, loves to fly!",
  },
  {
    id: 6,
    name: "Rose",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fae5429317afa463b8668d5872bee2cf9%2F44dd8103edd046d8afa8f4b2ff627a5a?format=webp&width=800",
    color: "#E91E63",
    description: "Sweet and gentle, loves magical flowers!",
  },
];

const MagicalParticle = ({ delay = 0 }) => (
  <motion.div
    className="absolute w-1 h-1 bg-white rounded-full"
    initial={{ opacity: 0, scale: 0 }}
    animate={{
      opacity: [0, 1, 0],
      scale: [0, 1, 0],
      x: [0, Math.random() * 100 - 50],
      y: [0, Math.random() * 100 - 50],
    }}
    transition={{
      duration: 2,
      delay,
      repeat: Infinity,
      repeatDelay: Math.random() * 2,
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
            className="absolute w-2 h-2 rounded-full"
            style={{
              backgroundColor: color,
              boxShadow: `0 0 10px ${color}`,
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
              x: [0, (Math.random() - 0.5) * 60],
              y: [0, (Math.random() - 0.5) * 60],
            }}
            transition={{
              duration: 1,
              delay: i * 0.1,
              repeat: Infinity,
              repeatDelay: 0.5,
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
}) => {
  const angle = index * 60 * (Math.PI / 180);
  const radius = 140;
  const x = Math.cos(angle) * radius;
  const y = Math.sin(angle) * radius;

  return (
    <motion.div
      className="absolute cursor-pointer"
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: 1,
        scale: 1,
        x: isSelected ? 0 : x,
        y: isSelected ? 0 : y,
        zIndex: isSelected ? 50 : 10,
      }}
      whileHover={{ scale: 1.2, rotate: 5 }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      onMouseEnter={() => onHover(companion.id)}
      onMouseLeave={() => onHover(null)}
      onClick={() => onSelect(companion)}
    >
      {/* Floating animation */}
      <motion.div
        animate={{
          y: [0, -8, 0],
          rotate: [0, 2, 0, -2, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          delay: index * 0.5,
        }}
      >
        {/* Aura effect */}
        <motion.div
          className="absolute inset-0 rounded-full blur-sm"
          style={{
            backgroundColor: companion.color,
            filter: `blur(4px)`,
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: index * 0.2,
          }}
        />

        {/* Glowing border */}
        <motion.div
          className="absolute inset-0 rounded-full border-2"
          style={{
            borderColor: companion.color,
            boxShadow: `0 0 20px ${companion.color}`,
          }}
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: index * 0.3,
          }}
        />

        {/* Companion image */}
        <motion.div
          className="w-20 h-20 rounded-full overflow-hidden relative"
          style={{
            backgroundColor: companion.color,
            boxShadow: `0 8px 32px ${companion.color}40`,
          }}
          animate={{
            boxShadow:
              isHovered === companion.id
                ? `0 8px 40px ${companion.color}80`
                : `0 8px 32px ${companion.color}40`,
          }}
        >
          <img
            src={companion.image}
            alt={companion.name}
            className="w-full h-full object-cover"
          />

          {/* Sparkle trail on hover */}
          <SparkleTrail
            isHovered={isHovered === companion.id}
            color={companion.color}
          />
        </motion.div>

        {/* Name label */}
        <motion.div
          className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-white text-sm font-bold"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 + 0.5 }}
        >
          {companion.name}
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
      >
        {/* Outer ring */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full border-4"
          style={{
            borderColor: color,
            borderStyle: "dashed",
            boxShadow: `0 0 30px ${color}`,
          }}
          animate={{ rotate: 360 }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Inner ring */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border-2"
          style={{
            borderColor: color,
            borderStyle: "solid",
            boxShadow: `0 0 20px ${color}`,
          }}
          animate={{ rotate: -360 }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Portal particles */}
        {[...Array(12)].map((_, i) => (
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
              x: [0, Math.cos((i * 30 * Math.PI) / 180) * 70],
              y: [0, Math.sin((i * 30 * Math.PI) / 180) * 70],
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              delay: i * 0.1,
              repeat: Infinity,
              repeatDelay: 1,
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

  const handleSelect = (companion) => {
    setSelectedCompanion(companion);
    setShowMessage(true);
    setTimeout(() => {
      onSelect?.(companion);
    }, 2000);
  };

  const handleClose = () => {
    setSelectedCompanion(null);
    setShowMessage(false);
    onClose?.();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      {/* Magical background */}
      <motion.div
        className="absolute inset-0 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Floating background particles */}
        {[...Array(20)].map((_, i) => (
          <MagicalParticle key={i} delay={i * 0.1} />
        ))}

        {/* Animated background gradient */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at 50% 50%, 
              rgba(147, 51, 234, 0.3) 0%, 
              rgba(59, 130, 246, 0.2) 30%, 
              rgba(16, 185, 129, 0.1) 60%, 
              rgba(0, 0, 0, 0.8) 100%)`,
          }}
          animate={{
            background: [
              `radial-gradient(circle at 50% 50%, rgba(147, 51, 234, 0.3) 0%, rgba(59, 130, 246, 0.2) 30%, rgba(16, 185, 129, 0.1) 60%, rgba(0, 0, 0, 0.8) 100%)`,
              `radial-gradient(circle at 60% 40%, rgba(59, 130, 246, 0.3) 0%, rgba(16, 185, 129, 0.2) 30%, rgba(147, 51, 234, 0.1) 60%, rgba(0, 0, 0, 0.8) 100%)`,
              `radial-gradient(circle at 40% 60%, rgba(16, 185, 129, 0.3) 0%, rgba(147, 51, 234, 0.2) 30%, rgba(59, 130, 246, 0.1) 60%, rgba(0, 0, 0, 0.8) 100%)`,
              `radial-gradient(circle at 50% 50%, rgba(147, 51, 234, 0.3) 0%, rgba(59, 130, 246, 0.2) 30%, rgba(16, 185, 129, 0.1) 60%, rgba(0, 0, 0, 0.8) 100%)`,
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </motion.div>

      {/* Main selector container */}
      <motion.div
        className="relative w-96 h-96 flex items-center justify-center"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 0.8,
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      >
        {/* Title */}
        <motion.h2
          className="absolute -top-20 left-1/2 transform -translate-x-1/2 text-3xl font-bold text-white text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          ✨ Choose Your Magical Companion ✨
        </motion.h2>

        {/* Orbit circle */}
        <motion.div
          className="absolute w-80 h-80 border-2 border-dashed border-white border-opacity-30 rounded-full"
          animate={{ rotate: 360 }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Portal ring for selected companion */}
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
            isSelected={selectedCompanion?.id === companion.id}
            onSelect={handleSelect}
            isHovered={hoveredCompanion}
            onHover={setHoveredCompanion}
          />
        ))}

        {/* Center cancel button */}
        <motion.button
          className="absolute w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-2xl"
          onClick={handleClose}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={{
            boxShadow: [
              "0 0 20px rgba(147, 51, 234, 0.5)",
              "0 0 30px rgba(147, 51, 234, 0.8)",
              "0 0 20px rgba(147, 51, 234, 0.5)",
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          <X className="w-8 h-8 text-white" />
        </motion.button>

        {/* Success message */}
        <AnimatePresence>
          {showMessage && selectedCompanion && (
            <motion.div
              className="absolute -bottom-24 left-1/2 transform -translate-x-1/2 text-center"
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.8 }}
              transition={{ duration: 0.5 }}
            >
              <motion.h3
                className="text-2xl font-bold text-white mb-2"
                animate={{
                  textShadow: [
                    `0 0 10px ${selectedCompanion.color}`,
                    `0 0 20px ${selectedCompanion.color}`,
                    `0 0 10px ${selectedCompanion.color}`,
                  ],
                }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                ✨ You chose {selectedCompanion.name}! ✨
              </motion.h3>
              <motion.p
                className="text-lg text-white opacity-90"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Let the magic begin! 🌟
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default CompanionSelector;
