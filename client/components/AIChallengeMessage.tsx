import React, { useState, useEffect } from "react";

interface AIChallengeMessageProps {
  title?: string;
  description?: string;
  mediaUrl?: string;
  mediaType?: "image" | "video";
  onAccept?: () => void;
  onRegenerate?: () => void;
  onChatMore?: () => void;
}

export default function AIChallengeMessage({
  title = "Today's Challenge!",
  description = "Help the forest creatures clean their magical village!",
  mediaUrl = "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=200&fit=crop",
  mediaType = "image",
  onAccept = () => console.log("Challenge accepted!"),
  onRegenerate = () => console.log("Regenerating challenge..."),
  onChatMore = () => console.log("Chat more about this..."),
}: AIChallengeMessageProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex justify-start mb-4">
      {/* AI Avatar */}
      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center mr-3 flex-shrink-0 shadow-lg">
        <div className="sparkle-container">
          <span className="text-white font-bold text-sm">AI</span>
          <div className="absolute inset-0 sparkle-animation"></div>
        </div>
      </div>

      {/* Challenge Card */}
      <div
        className={`max-w-md transform transition-all duration-1000 ease-out ${
          isVisible
            ? "translate-y-0 opacity-100 scale-100"
            : "translate-y-8 opacity-0 scale-95"
        }`}
      >
        <div className="magical-challenge-card bg-gradient-to-br from-pink-400 via-purple-500 to-blue-600 rounded-3xl p-6 shadow-2xl border border-white/30 backdrop-blur-sm relative overflow-hidden">
          {/* Floating Sparkles */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="sparkle sparkle-1"></div>
            <div className="sparkle sparkle-2"></div>
            <div className="sparkle sparkle-3"></div>
            <div className="sparkle sparkle-4"></div>
            <div className="sparkle sparkle-5"></div>
          </div>

          {/* Magical Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-200/20 via-pink-200/20 to-blue-200/20 rounded-3xl blur-xl animate-pulse"></div>

          {/* Title Section */}
          <div className="relative z-10 text-center mb-4">
            <h3 className="text-2xl font-bold text-white mb-2 animate-bounce drop-shadow-lg">
              {title}
            </h3>
            <div className="flex justify-center space-x-1">
              <span className="text-yellow-300 text-lg animate-pulse">✨</span>
              <span className="text-pink-300 text-lg animate-pulse delay-100">
                🌟
              </span>
              <span className="text-blue-300 text-lg animate-pulse delay-200">
                ✨
              </span>
            </div>
          </div>

          {/* Media Section */}
          <div className="relative z-10 mb-4 rounded-2xl overflow-hidden shadow-xl">
            <div className="relative group">
              {mediaType === "image" ? (
                <img
                  src={mediaUrl}
                  alt="Challenge visual"
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              ) : (
                <video
                  src={mediaUrl}
                  className="w-full h-48 object-cover"
                  autoPlay
                  loop
                  muted
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-black/10 transition-all duration-300"></div>
              <div className="absolute inset-0 border-2 border-white/20 rounded-2xl shadow-inner"></div>
            </div>
          </div>

          {/* Description */}
          <div className="relative z-10 text-center mb-6">
            <p className="text-white text-lg font-medium leading-relaxed drop-shadow-md">
              {description}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="relative z-10 flex flex-col space-y-3">
            {/* Accept Challenge Button */}
            <button
              onClick={onAccept}
              className="magical-button accept-button w-full py-3 px-6 rounded-2xl bg-gradient-to-r from-green-400 to-emerald-500 text-white font-bold text-lg shadow-lg transform transition-all duration-200 hover:scale-105 hover:shadow-xl active:scale-95"
            >
              <span className="flex items-center justify-center space-x-2">
                <span>🏆</span>
                <span>Accept Challenge</span>
                <span>⚡</span>
              </span>
            </button>

            <div className="flex space-x-3">
              {/* Regenerate Button */}
              <button
                onClick={onRegenerate}
                className="magical-button regenerate-button flex-1 py-2.5 px-4 rounded-xl bg-gradient-to-r from-orange-400 to-pink-500 text-white font-semibold shadow-lg transform transition-all duration-200 hover:scale-105 hover:shadow-xl active:scale-95"
              >
                <span className="flex items-center justify-center space-x-1">
                  <span>🔄</span>
                  <span>Regenerate</span>
                </span>
              </button>

              {/* Chat More Button */}
              <button
                onClick={onChatMore}
                className="magical-button chat-button flex-1 py-2.5 px-4 rounded-xl bg-gradient-to-r from-blue-400 to-purple-500 text-white font-semibold shadow-lg transform transition-all duration-200 hover:scale-105 hover:shadow-xl active:scale-95"
              >
                <span className="flex items-center justify-center space-x-1">
                  <span>💬</span>
                  <span>Chat More</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
