import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import MoodSelector from "./MoodSelector";

interface MoodPickerCardProps {
  isVisible: boolean;
  onClose: () => void;
  onMoodSubmit: (mood: any) => void;
  className?: string;
}

export default function MoodPickerCard({
  isVisible,
  onClose,
  onMoodSubmit,
  className = "",
}: MoodPickerCardProps) {
  const handleMoodSubmit = (mood: any) => {
    onMoodSubmit(mood);
    // Set localStorage to prevent showing again until manually triggered
    localStorage.setItem('checkin_modal', 'false');
    onClose();
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={`fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 ${className}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-gradient-to-br from-purple-900/90 to-pink-900/90 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6 max-w-md w-full mx-4 relative shadow-2xl"
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <motion.button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <X className="w-4 h-4 text-white" />
            </motion.button>

            {/* Header */}
            <div className="text-center mb-6">
              <motion.div
                className="text-4xl mb-3"
                animate={{ 
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1] 
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop"
                }}
              >
                🌟
              </motion.div>
              <h2 className="text-2xl font-bold text-white mb-2">
                Good to see you!
              </h2>
              <p className="text-gray-300 text-sm">
                Let's check in with how you're feeling today
              </p>
            </div>

            {/* Mood Selector */}
            <MoodSelector
              onMoodSubmit={handleMoodSubmit}
              title=""
              className="bg-transparent"
            />

            {/* Sparkle Effects */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.4,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
