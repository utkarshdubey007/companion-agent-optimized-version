import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getCompanionInfo } from "@/utils/companionMapping";

export default function ChallengeListView({
  challenges = [],
  loading = false,
  error = null,
  onClose,
  onChallengeSelect,
  onBackToMenu,
}) {
  // Transform API challenge data to component format
  const transformedChallenges = challenges.map((challengeItem, index) => {
    const companionInfo = getCompanionInfo(challengeItem.challenge.character_type);

    return {
      id: challengeItem.challenge.id,
      title: challengeItem.challenge.title,
      image: challengeItem.challenge.picture_url,
      description: challengeItem.challenge.description,
      progress: Math.min(100, ((7 - challengeItem.days_left) / 7) * 100),
      timeLeft: challengeItem.time_left,
      chatColor: companionInfo.color,
      companionIcon: companionInfo.icon,
      companionName: companionInfo.name,
    };
  });

  const handleChallengeClick = (challenge) => {
    if (onChallengeSelect) {
      onChallengeSelect(challenge);
    }
  };

  return (
    <motion.div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-white rounded-3xl shadow-2xl w-full max-w-md max-h-[80vh] overflow-hidden"
        initial={{ scale: 0.8, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.8, y: 50 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 text-white">
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="text-white hover:bg-white/20 p-2 h-auto"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <h2 className="text-lg font-semibold">Select challenge</h2>
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          {loading && (
            <div className="flex items-center justify-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-500"></div>
            </div>
          )}

          {error && (
            <div className="text-center py-8">
              <p className="text-red-500">{error}</p>
            </div>
          )}

          {!loading && !error && transformedChallenges.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-500">No accepted challenges found</p>
            </div>
          )}

          {!loading && !error && transformedChallenges.length > 0 && (
            <div className="space-y-3">
              <p className="text-sm text-gray-600 mb-4">
                Hey, young crafters and book enthusiasts!
              </p>
              {transformedChallenges.map((challenge, index) => (
                <motion.div
                  key={challenge.id}
                  className="bg-purple-50 rounded-2xl p-4 cursor-pointer hover:bg-purple-100 transition-colors border border-purple-100"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => handleChallengeClick(challenge)}
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={challenge.image}
                      alt={challenge.title}
                      className="w-12 h-12 rounded-xl object-cover border border-purple-200"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-gray-900 truncate">
                        {challenge.title}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                        {challenge.description}
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="text-xs text-purple-600 font-medium">
                          by {challenge.companionName}
                        </span>
                        <span className="text-lg">{challenge.companionIcon}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
