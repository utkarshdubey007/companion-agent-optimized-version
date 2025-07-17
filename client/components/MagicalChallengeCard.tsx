import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Sparkles, RefreshCw, MessageCircle, CheckCircle } from "lucide-react";

interface MagicalChallengeCardProps {
  title?: string;
  description?: string;
  mediaUrl?: string;
  mediaType?: "image" | "video";
  onAccept?: () => void;
  onRegenerate?: () => void;
  onChatMore?: () => void;
  isVisible?: boolean;
}

export function MagicalChallengeCard({
  title = "Today's Magical Mission!",
  description = "Help the forest animals organize a surprise party! Gather magical decorations and create the most wonderful celebration the enchanted forest has ever seen! ✨🎉",
  mediaUrl = "https://cdn.builder.io/api/v1/image/assets%2Fae5429317afa463b8668d5872bee2cf9%2F63656ed422f24b9c9cd47657e89e2840?format=webp&width=800",
  mediaType = "image",
  onAccept,
  onRegenerate,
  onChatMore,
  isVisible = true,
}: MagicalChallengeCardProps) {
  const [sparkles, setSparkles] = useState<
    { id: number; x: number; y: number; delay: number }[]
  >([]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showCard, setShowCard] = useState(false);

  // Generate sparkles
  useEffect(() => {
    const generateSparkles = () => {
      const newSparkles = Array.from({ length: 12 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 3,
      }));
      setSparkles(newSparkles);
    };

    generateSparkles();
    const interval = setInterval(generateSparkles, 4000);
    return () => clearInterval(interval);
  }, []);

  // Card entrance animation
  useEffect(() => {
    if (isVisible) {
      setTimeout(() => setShowCard(true), 300);
    }
  }, [isVisible]);

  const handleAccept = () => {
    setIsAnimating(true);
    if (onAccept) {
      setTimeout(() => {
        onAccept();
        setIsAnimating(false);
      }, 600);
    }
  };

  const handleRegenerate = () => {
    if (onRegenerate) {
      onRegenerate();
    }
  };

  const handleChatMore = () => {
    if (onChatMore) {
      onChatMore();
    }
  };

  if (!isVisible) return null;

  return (
    <div className="relative max-w-sm mx-auto">
      {/* Magical sparkles */}
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="absolute pointer-events-none z-10"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
            animation: `sparkleFloat 3s ease-in-out infinite ${sparkle.delay}s`,
          }}
        >
          <Sparkles className="w-3 h-3 text-yellow-300 opacity-60" />
        </div>
      ))}

      {/* Main card */}
      <div
        className={`
          relative bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100 
          rounded-3xl shadow-2xl border-2 border-purple-200 overflow-hidden
          transition-all duration-700 ease-out transform
          ${showCard ? "translate-y-0 opacity-100 scale-100" : "translate-y-8 opacity-0 scale-95"}
          ${isAnimating ? "animate-pulse" : ""}
        `}
        style={{
          background: `
            linear-gradient(135deg, 
              rgba(147, 51, 234, 0.1) 0%, 
              rgba(236, 72, 153, 0.1) 25%,
              rgba(59, 130, 246, 0.1) 50%,
              rgba(16, 185, 129, 0.1) 75%,
              rgba(245, 158, 11, 0.1) 100%
            )
          `,
          boxShadow: `
            0 25px 50px -12px rgba(147, 51, 234, 0.25),
            0 0 0 1px rgba(147, 51, 234, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.1)
          `,
        }}
      >
        {/* Glowing border effect */}
        <div
          className="absolute inset-0 rounded-3xl"
          style={{
            background: `
              linear-gradient(45deg, 
                transparent 30%, 
                rgba(147, 51, 234, 0.3) 50%, 
                transparent 70%
              )
            `,
            animation: "borderGlow 3s ease-in-out infinite",
          }}
        />

        {/* Content */}
        <div className="relative z-10 p-6">
          {/* Magical title */}
          <div className="text-center mb-4">
            <h2
              className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent mb-2"
              style={{
                animation: "titleTwinkle 2s ease-in-out infinite alternate",
              }}
            >
              ✨ {title} ✨
            </h2>
            <div className="h-1 w-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mx-auto opacity-60" />
          </div>

          {/* Media area */}
          <div className="relative mb-4 rounded-2xl overflow-hidden bg-gradient-to-br from-purple-50 to-pink-50 p-1">
            <div className="relative rounded-xl overflow-hidden">
              {mediaType === "video" ? (
                <video
                  src={mediaUrl}
                  autoPlay
                  loop
                  muted
                  className="w-full h-48 object-cover"
                />
              ) : (
                <img
                  src={mediaUrl}
                  alt="Challenge illustration"
                  className="w-full h-48 object-cover"
                />
              )}
              {/* Overlay sparkles */}
              <div className="absolute inset-0 bg-gradient-to-t from-transparent to-purple-100/20" />
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-700 text-center mb-6 leading-relaxed font-medium text-lg">
            {description}
          </p>

          {/* Action buttons */}
          <div className="space-y-3">
            {/* Accept Challenge Button */}
            <Button
              onClick={handleAccept}
              disabled={isAnimating}
              className="w-full py-4 text-lg font-bold text-white rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl relative overflow-hidden group"
              style={{
                background: "linear-gradient(135deg, #10B981 0%, #059669 100%)",
                boxShadow: "0 8px 25px rgba(16, 185, 129, 0.4)",
              }}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <CheckCircle className="w-5 h-5" />
                {isAnimating ? "Accepting..." : "Accept Challenge!"}
              </span>
              <div
                className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ animation: "buttonGlow 2s ease-in-out infinite" }}
              />
            </Button>

            {/* Secondary buttons */}
            <div className="grid grid-cols-2 gap-3">
              <Button
                onClick={handleRegenerate}
                className="py-3 text-purple-700 bg-purple-100 border-2 border-purple-200 rounded-2xl transition-all duration-300 hover:bg-purple-200 hover:scale-105 font-semibold group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-1">
                  <RefreshCw className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
                  Regenerate
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-200 to-pink-200 opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
              </Button>

              <Button
                onClick={handleChatMore}
                className="py-3 text-blue-700 bg-blue-100 border-2 border-blue-200 rounded-2xl transition-all duration-300 hover:bg-blue-200 hover:scale-105 font-semibold group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-1">
                  <MessageCircle className="w-4 h-4 group-hover:animate-bounce" />
                  Chat More
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-cyan-200 opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom magical glow */}
        <div
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400"
          style={{ animation: "bottomGlow 2s ease-in-out infinite alternate" }}
        />
      </div>

      {/* Floating magic elements */}
      <div className="absolute -top-2 -right-2 text-2xl animate-bounce">🌟</div>
      <div className="absolute -bottom-2 -left-2 text-2xl animate-pulse">
        💫
      </div>
      <div className="absolute top-1/2 -right-4 text-xl animate-spin-slow">
        ✨
      </div>
    </div>
  );
}
