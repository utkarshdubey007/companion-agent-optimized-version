import { Button } from "@/components/ui/button";
import { RefreshCw, MessageCircle, ThumbsUp } from "lucide-react";

interface AITextMessageProps {
  content: string;
  timestamp?: Date;
  onReply?: () => void;
  onRegenerate?: () => void;
  onLike?: () => void;
  headerTitle?: string;
  footerTip?: string;
  className?: string;
}

export function AITextMessage({
  content,
  timestamp,
  onReply,
  onRegenerate,
  onLike,
  headerTitle = "Hello, genuine friend! 🌟",
  footerTip = "Every conversation with you is a new beginning! ✨",
  className = "",
}: AITextMessageProps) {
  // Use friendly default content if none provided
  const defaultContent =
    "I'm feeling as bright as a sunbeam, ready to embark on new adventures with you. How is your heart today?";
  const messageContent = content || defaultContent;

  // Function to render content with emoji and line break support
  const renderContent = (text: string) => {
    return text.split("\n").map((line, index) => (
      <span key={index}>
        {line}
        {index < text.split("\n").length - 1 && <br />}
      </span>
    ));
  };

  return (
    <div className={`flex justify-start w-full mb-6 ${className}`}>
      <div className="flex items-start gap-3 max-w-lg">
        {/* AI Avatar with sparkle animation */}
        <div className="flex-shrink-0 relative">
          <div
            className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-600 flex items-center justify-center shadow-xl"
            style={{
              boxShadow:
                "0 8px 25px rgba(59, 130, 246, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1)",
            }}
          >
            <span className="text-white text-xl">🤖</span>
          </div>
          {/* Floating sparkles around avatar */}
          <div className="absolute -top-1 -right-1 animate-pulse">
            <span className="text-yellow-300 text-sm">✨</span>
          </div>
          <div className="absolute -bottom-1 -left-1 animate-bounce">
            <span className="text-blue-300 text-xs">⭐</span>
          </div>
        </div>

        {/* Message Card with vibrant background */}
        <div className="flex-1 relative">
          <div
            className="relative overflow-hidden rounded-3xl shadow-xl"
            style={{
              background:
                "linear-gradient(135deg, #3B82F6 0%, #1D4ED8 25%, #6366F1 50%, #8B5CF6 75%, #A855F7 100%)",
              boxShadow:
                "0 20px 40px rgba(59, 130, 246, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1)",
            }}
          >
            {/* Animated background sparkles */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="absolute top-4 left-6 w-1 h-1 bg-white rounded-full animate-pulse opacity-70"></div>
              <div className="absolute top-8 right-8 w-1 h-1 bg-yellow-200 rounded-full animate-bounce opacity-80"></div>
              <div className="absolute bottom-6 left-12 w-1 h-1 bg-white rounded-full animate-ping opacity-60"></div>
              <div className="absolute top-12 left-1/2 w-1 h-1 bg-blue-200 rounded-full animate-pulse opacity-50"></div>
              <div className="absolute bottom-8 right-6 w-1 h-1 bg-purple-200 rounded-full animate-bounce opacity-70"></div>
            </div>

            {/* Header Section */}
            <div className="relative px-5 py-3 border-b border-white/20">
              <h3 className="text-white font-bold text-base flex items-center gap-2 drop-shadow-sm">
                {headerTitle}
              </h3>
            </div>

            {/* Body Section */}
            <div className="relative px-5 py-4">
              <div
                className="text-white text-base leading-relaxed drop-shadow-sm"
                style={{
                  fontSize: "16px",
                  lineHeight: "1.6",
                }}
              >
                {renderContent(messageContent)}
              </div>
            </div>

            {/* Footer Section */}
            <div className="relative px-5 py-3 border-t border-white/20">
              <div className="flex items-center justify-between">
                {/* Action Buttons */}
                <div className="flex items-center gap-2">
                  {onReply && (
                    <Button
                      onClick={onReply}
                      size="sm"
                      className="h-8 px-3 text-xs bg-white/20 hover:bg-white/30 text-white border-0 rounded-full backdrop-blur-sm transition-all duration-200"
                    >
                      <MessageCircle className="w-3 h-3 mr-1" />
                      Reply
                    </Button>
                  )}
                  {onRegenerate && (
                    <Button
                      onClick={onRegenerate}
                      size="sm"
                      className="h-8 px-3 text-xs bg-white/20 hover:bg-white/30 text-white border-0 rounded-full backdrop-blur-sm transition-all duration-200"
                    >
                      <RefreshCw className="w-3 h-3 mr-1" />
                      Regenerate
                    </Button>
                  )}
                  {onLike && (
                    <Button
                      onClick={onLike}
                      size="sm"
                      className="h-8 px-3 text-xs bg-white/20 hover:bg-white/30 text-white border-0 rounded-full backdrop-blur-sm transition-all duration-200"
                    >
                      <ThumbsUp className="w-3 h-3 mr-1" />
                      Like
                    </Button>
                  )}
                </div>

                {/* Footer with glowing text */}
                <div
                  className="text-xs text-white/90 font-medium"
                  style={{
                    textShadow: "0 0 10px rgba(255, 255, 255, 0.5)",
                    fontSize: "12px",
                  }}
                >
                  {footerTip ||
                    (timestamp &&
                      timestamp.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      }))}
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced message tail with gradient */}
          <div
            className="w-4 h-4 transform -translate-x-2 -mt-4 ml-6"
            style={{
              background: "linear-gradient(135deg, #3B82F6 0%, #1D4ED8 50%)",
              clipPath: "polygon(100% 0, 100% 100%, 0 100%)",
              filter: "drop-shadow(0 4px 6px rgba(59, 130, 246, 0.2))",
            }}
          />
        </div>
      </div>
    </div>
  );
}

// Variant for different AI message themes
export function AITextMessageThemed({
  content,
  timestamp,
  onReply,
  onRegenerate,
  onLike,
  theme = "default",
  footerTip,
  className = "",
}: AITextMessageProps & {
  theme?: "default" | "creative" | "helpful" | "playful";
}) {
  const themes = {
    default: {
      headerTitle: "✨ AI Assistant",
      avatar: "🤖",
      gradient: "from-blue-50 to-cyan-50",
      headerBg: "from-blue-100 to-cyan-100",
      textColor: "text-blue-800",
      borderColor: "border-blue-100",
    },
    creative: {
      headerTitle: "🎨 Creative AI",
      avatar: "🎭",
      gradient: "from-purple-50 to-pink-50",
      headerBg: "from-purple-100 to-pink-100",
      textColor: "text-purple-800",
      borderColor: "border-purple-100",
    },
    helpful: {
      headerTitle: "🌟 AI Helper",
      avatar: "💡",
      gradient: "from-emerald-50 to-teal-50",
      headerBg: "from-emerald-100 to-teal-100",
      textColor: "text-emerald-800",
      borderColor: "border-emerald-100",
    },
    playful: {
      headerTitle: "🎪 Playful AI",
      avatar: "🎭",
      gradient: "from-orange-50 to-yellow-50",
      headerBg: "from-orange-100 to-yellow-100",
      textColor: "text-orange-800",
      borderColor: "border-orange-100",
    },
  };

  const currentTheme = themes[theme];

  return (
    <AITextMessage
      content={content}
      timestamp={timestamp}
      onReply={onReply}
      onRegenerate={onRegenerate}
      onLike={onLike}
      headerTitle={currentTheme.headerTitle}
      footerTip={footerTip}
      className={className}
    />
  );
}
