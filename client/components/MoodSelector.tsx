import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Heart } from "lucide-react";

interface Mood {
  id: string;
  name: string;
  emoji: string;
  color: string;
  bgColor: string;
  description: string;
}

interface MoodSelectorProps {
  onMoodSubmit?: (mood: Mood) => void;
  className?: string;
  title?: string;
}

const moods: Mood[] = [
  {
    id: "happy",
    name: "Happy",
    emoji: "😊",
    color: "text-yellow-200",
    bgColor: "from-yellow-400 to-orange-400",
    description: "I feel joyful and bright!",
  },
  {
    id: "excited",
    name: "Excited",
    emoji: "🤩",
    color: "text-pink-200",
    bgColor: "from-pink-400 to-purple-500",
    description: "I'm bursting with energy!",
  },
  {
    id: "calm",
    name: "Calm",
    emoji: "😌",
    color: "text-green-200",
    bgColor: "from-green-400 to-teal-500",
    description: "I feel peaceful and relaxed",
  },
  {
    id: "nervous",
    name: "Nervous",
    emoji: "😰",
    color: "text-orange-200",
    bgColor: "from-orange-400 to-red-400",
    description: "I feel a bit worried",
  },
  {
    id: "tired",
    name: "Tired",
    emoji: "😴",
    color: "text-indigo-200",
    bgColor: "from-indigo-400 to-purple-600",
    description: "I need some rest",
  },
  {
    id: "sad",
    name: "Sad",
    emoji: "😢",
    color: "text-blue-200",
    bgColor: "from-blue-400 to-blue-600",
    description: "I feel a little down",
  },
  {
    id: "bored",
    name: "Bored",
    emoji: "😑",
    color: "text-gray-200",
    bgColor: "from-gray-400 to-gray-600",
    description: "I want something fun to do",
  },
  {
    id: "worried",
    name: "Worried",
    emoji: "😟",
    color: "text-amber-200",
    bgColor: "from-amber-400 to-yellow-500",
    description: "Something is on my mind",
  },
];

export default function MoodSelector({
  onMoodSubmit = () => {},
  className = "",
  title = "How are you feeling today?",
}: MoodSelectorProps) {
  const [selectedMood, setSelectedMood] = useState<Mood | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleMoodSelect = (mood: Mood) => {
    setSelectedMood(mood);
  };

  const handleSubmit = () => {
    if (selectedMood) {
      setIsSubmitted(true);
      onMoodSubmit(selectedMood);

      // Reset after a short delay for feedback
      setTimeout(() => {
        setIsSubmitted(false);
        setSelectedMood(null);
      }, 2000);
    }
  };

  return (
    <motion.div
      className={`bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-md rounded-3xl border border-white/20 shadow-2xl p-6 max-w-md mx-auto ${className}`}
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "backOut" }}
    >
      {/* Header */}
      <motion.div
        className="text-center mb-6"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="flex items-center justify-center gap-2 mb-2">
          <Heart className="w-6 h-6 text-pink-400" />
          <h2 className="text-xl font-bold text-white">{title}</h2>
          <Heart className="w-6 h-6 text-pink-400" />
        </div>
        <p className="text-sm text-gray-300">
          Pick the mood that matches your heart! ✨
        </p>
      </motion.div>

      {/* Mood Grid */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        {moods.map((mood, index) => (
          <motion.button
            key={mood.id}
            onClick={() => handleMoodSelect(mood)}
            className={`relative p-4 rounded-2xl border-2 transition-all duration-300 min-h-[100px] ${
              selectedMood?.id === mood.id
                ? "border-white scale-105 shadow-lg"
                : "border-white/20 hover:border-white/40 hover:scale-102"
            }`}
            style={{
              background:
                selectedMood?.id === mood.id
                  ? `linear-gradient(135deg, var(--tw-gradient-stops))`
                  : "rgba(255, 255, 255, 0.05)",
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: index * 0.1,
              duration: 0.4,
              ease: "backOut",
            }}
            whileHover={{
              scale: selectedMood?.id === mood.id ? 1.05 : 1.02,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Selection Indicator */}
            <AnimatePresence>
              {selectedMood?.id === mood.id && (
                <motion.div
                  className="absolute top-2 right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Check className="w-4 h-4 text-green-600" />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Mood Content */}
            <div className="flex flex-col items-center gap-2">
              <motion.span
                className="text-3xl"
                animate={
                  selectedMood?.id === mood.id
                    ? {
                        scale: [1, 1.2, 1],
                        rotate: [0, 10, -10, 0],
                      }
                    : {}
                }
                transition={{ duration: 0.5 }}
              >
                {mood.emoji}
              </motion.span>
              <span
                className={`font-semibold text-sm ${
                  selectedMood?.id === mood.id ? "text-white" : mood.color
                }`}
              >
                {mood.name}
              </span>
            </div>

            {/* Background gradient for selected mood */}
            {selectedMood?.id === mood.id && (
              <div
                className={`absolute inset-0 bg-gradient-to-br ${mood.bgColor} opacity-80 rounded-2xl -z-10`}
              />
            )}
          </motion.button>
        ))}
      </div>

      {/* Selected Mood Display */}
      <AnimatePresence>
        {selectedMood && !isSubmitted && (
          <motion.div
            className="text-center mb-4 p-4 bg-white/10 rounded-xl border border-white/20"
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-2xl">{selectedMood.emoji}</span>
              <span className="text-lg font-semibold text-white">
                Feeling {selectedMood.name}
              </span>
              <span className="text-2xl">{selectedMood.emoji}</span>
            </div>
            <p className="text-sm text-gray-300">{selectedMood.description}</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Submit Button */}
      <motion.button
        onClick={handleSubmit}
        disabled={!selectedMood || isSubmitted}
        className={`w-full py-4 px-6 rounded-2xl font-bold text-lg transition-all duration-300 ${
          selectedMood && !isSubmitted
            ? "bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white shadow-lg"
            : "bg-gray-600 text-gray-400 cursor-not-allowed"
        }`}
        whileHover={
          selectedMood && !isSubmitted
            ? {
                scale: 1.02,
                boxShadow: "0 10px 25px rgba(16, 185, 129, 0.4)",
              }
            : {}
        }
        whileTap={selectedMood && !isSubmitted ? { scale: 0.98 } : {}}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        {isSubmitted ? (
          <motion.div
            className="flex items-center justify-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              ✨
            </motion.div>
            <span>Thank you!</span>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 0.5 }}
            >
              ✨
            </motion.div>
          </motion.div>
        ) : selectedMood ? (
          <span>Share My Mood! 🚀</span>
        ) : (
          <span>Pick a mood first! 👆</span>
        )}
      </motion.button>

      {/* Success Animation */}
      <AnimatePresence>
        {isSubmitted && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center bg-green-500/20 rounded-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="text-6xl"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.5, ease: "backOut" }}
            >
              🎉
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
