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
  // Use exact default content as specified
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
    <div className={`flex justify-start w-full mb-4 ${className}`}>
      <div className="flex items-start gap-2 max-w-md">
        {/* AI Avatar - compact */}
        <div className="flex-shrink-0">
          <div
            className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg"
            style={{
              boxShadow: "0 4px 12px rgba(59, 130, 246, 0.3)",
            }}
          >
            <span className="text-white text-sm">🤖</span>
          </div>
        </div>

        {/* Compact Message Card */}
        <div className="flex-1 relative">
          <div
            className="relative overflow-hidden rounded-2xl shadow-lg"
            style={{
              background:
                "linear-gradient(135deg, #6366F1 0%, #8B5CF6 50%, #A855F7 100%)",
              boxShadow: "0 8px 20px rgba(99, 102, 241, 0.3)",
            }}
          >
            {/* Subtle background sparkles */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="absolute top-2 left-4 w-0.5 h-0.5 bg-white rounded-full animate-pulse opacity-60"></div>
              <div className="absolute top-4 right-6 w-0.5 h-0.5 bg-yellow-200 rounded-full animate-bounce opacity-70"></div>
              <div className="absolute bottom-3 left-8 w-0.5 h-0.5 bg-white rounded-full animate-ping opacity-50"></div>
              <div className="absolute bottom-4 right-4 w-0.5 h-0.5 bg-blue-200 rounded-full animate-pulse opacity-60"></div>
            </div>

            {/* 1. Header Section */}
            <div className="relative px-3 py-2">
              <h3 className="text-white font-bold text-sm drop-shadow-sm">
                {headerTitle}
              </h3>
            </div>

            {/* 2. Main Message (Body) */}
            <div className="relative px-3 py-2">
              <div
                className="text-white leading-relaxed drop-shadow-sm"
                style={{
                  fontSize: "15px",
                  lineHeight: "1.5",
                }}
              >
                {renderContent(messageContent)}
              </div>
            </div>

            {/* 3. Footer Message */}
            <div className="relative px-3 py-2 text-left">
              <div
                className="text-white/90 text-xs font-medium"
                style={{
                  textShadow: "0 0 8px rgba(255, 255, 255, 0.4)",
                  fontSize: "11px",
                }}
              >
                {footerTip}
              </div>
            </div>

            {/* 4. Footer Buttons */}
            <div className="relative px-3 py-2 border-t border-white/10">
              <div className="flex justify-start gap-2">
                <Button
                  onClick={onReply}
                  size="sm"
                  className="h-6 px-2 text-xs bg-white/20 hover:bg-white/30 text-white border-0 rounded-full backdrop-blur-sm transition-all duration-200 hover:scale-105"
                >
                  🗨️ Reply
                </Button>
                <Button
                  onClick={onRegenerate}
                  size="sm"
                  className="h-6 px-2 text-xs bg-white/20 hover:bg-white/30 text-white border-0 rounded-full backdrop-blur-sm transition-all duration-200 hover:scale-105"
                >
                  🔁 Regenerate
                </Button>
              </div>
            </div>
          </div>

          {/* Compact message tail */}
          <div
            className="w-3 h-3 transform -translate-x-1 -mt-3 ml-3"
            style={{
              background: "linear-gradient(135deg, #6366F1 0%, #8B5CF6 50%)",
              clipPath: "polygon(100% 0, 100% 100%, 0 100%)",
              filter: "drop-shadow(0 2px 4px rgba(99, 102, 241, 0.2))",
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
