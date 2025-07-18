import React, { useState } from "react";
import { motion } from "framer-motion";
import CompanionSelector from "@/components/CompanionSelector";

export default function CompanionDemo() {
  const [showSelector, setShowSelector] = useState(false);
  const [selectedCompanion, setSelectedCompanion] = useState(null);

  const handleCompanionSelect = (companion) => {
    setSelectedCompanion(companion);
    setShowSelector(false);
  };

  const handleClose = () => {
    setShowSelector(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-8">
      <div className="text-center">
        {/* Current companion display */}
        {selectedCompanion && (
          <motion.div
            className="mb-12 p-8 bg-white bg-opacity-10 backdrop-blur-sm rounded-3xl border border-white border-opacity-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Your Magical Companion
            </h2>
            <div className="flex items-center justify-center space-x-6">
              <div className="relative">
                <div
                  className="w-24 h-24 rounded-full border-4 overflow-hidden"
                  style={{
                    borderColor: selectedCompanion.color,
                    boxShadow: `0 0 30px ${selectedCompanion.color}60`,
                  }}
                >
                  <img
                    src={selectedCompanion.image}
                    alt={selectedCompanion.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-2 -right-2 text-3xl">
                  {selectedCompanion.element}
                </div>
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {selectedCompanion.name}
                </h3>
                <p className="text-white opacity-90 max-w-md">
                  {selectedCompanion.description}
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Main demo content */}
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold text-white mb-6 drop-shadow-lg">
            🧙‍♂️ Magical Companion Selector
          </h1>
          <p className="text-xl text-white opacity-90 mb-12 leading-relaxed">
            Experience the enchantment of choosing your magical companion! Click
            below to open a portal to the fairy realm and select your perfect
            adventure buddy.
          </p>

          {/* Open selector button */}
          <motion.button
            className="relative px-12 py-6 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 rounded-2xl text-white font-bold text-xl shadow-2xl border-2 border-white border-opacity-30 overflow-hidden"
            onClick={() => setShowSelector(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: [
                "0 0 30px rgba(147, 51, 234, 0.5)",
                "0 0 50px rgba(236, 72, 153, 0.7)",
                "0 0 30px rgba(147, 51, 234, 0.5)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            {/* Animated background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 opacity-0"
              whileHover={{ opacity: 0.2 }}
              transition={{ duration: 0.3 }}
            />

            {/* Button text */}
            <span className="relative z-10 flex items-center space-x-3">
              <span>✨ Choose Your Companion ✨</span>
            </span>

            {/* Sparkle effects */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              animate={{
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: 0.5,
              }}
            >
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full"
                  style={{
                    left: `${20 + i * 12}%`,
                    top: `${30 + (i % 2) * 40}%`,
                  }}
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 1,
                    delay: i * 0.2,
                    repeat: Infinity,
                    repeatDelay: 2,
                  }}
                />
              ))}
            </motion.div>
          </motion.button>

          {/* Features list */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="p-6 bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl border border-white border-opacity-20"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-xl font-bold text-white mb-3">
                🌟 Magical Effects
              </h3>
              <ul className="text-white opacity-90 space-y-2">
                <li>• Floating companions in orbital layout</li>
                <li>• Sparkling particle effects</li>
                <li>• Glowing auras and magical rings</li>
                <li>• Smooth animations and transitions</li>
              </ul>
            </motion.div>

            <motion.div
              className="p-6 bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl border border-white border-opacity-20"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-xl font-bold text-white mb-3">
                🎭 Interactive Features
              </h3>
              <ul className="text-white opacity-90 space-y-2">
                <li>• Hover effects with sparkle trails</li>
                <li>• Portal rings on selection</li>
                <li>• Animated success messages</li>
                <li>• Gentle bobbing animations</li>
              </ul>
            </motion.div>
          </div>
        </motion.div>

        {/* Change companion button */}
        {selectedCompanion && (
          <motion.button
            className="mt-8 px-8 py-3 bg-white bg-opacity-20 backdrop-blur-sm rounded-xl text-white font-semibold border border-white border-opacity-30"
            onClick={() => setShowSelector(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Choose Different Companion
          </motion.button>
        )}
      </div>

      {/* Companion selector modal */}
      {showSelector && (
        <CompanionSelector
          onSelect={handleCompanionSelect}
          onClose={handleClose}
        />
      )}
    </div>
  );
}
