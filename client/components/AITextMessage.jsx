import { Button } from "@/components/ui/button";
import { RefreshCw, MessageCircle, ThumbsUp } from "lucide-react";
import { useTypingEffect } from "@/hooks/useTypingEffect";

export function AITextMessage({
  content,
  timestamp,
  onReply,
  onRegenerate,
  onLike,
  headerTitle = "Hello, genuine friend! 🌟",
  footerTip = "Every conversation with you is a new beginning! ✨",
  className = "",
  hasAvatar = false, // New prop to indicate if avatar is shown
  enableTyping = true, // New prop to control typing effect
}) {
  // Use exact default content as specified
  const defaultContent =
    "I'm feeling as bright as a sunbeam, ready to embark on new adventures with you. How is your heart today?";
  const messageContent = content || defaultContent;

  // Prepare sections for typing effect
  const sections = [
    { text: headerTitle, type: 'header' },
    { text: messageContent, type: 'body' },
    { text: footerTip, type: 'footer' }
  ];

  const {
    getDisplayText,
    isSectionVisible,
    isSectionComplete,
    isComplete,
    currentSectionIndex
  } = useTypingEffect(enableTyping ? sections : null, 30, 500);

  // Function to render content with emoji and line break support
  const renderContent = (text) => {
    return text.split("\n").map((line, index) => (
      <span key={index}>
        {line}
        {index < text.split("\n").length - 1 && <br />}
      </span>
    ));
  };

  return (
    <div className={`${className}`}>
      <div className="max-w-md">
        {/* AI Message Card */}
        <div className="relative">
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

            {/* Header Section - Greeting/Title */}
            {isSectionVisible(0) && (
              <div className="relative px-4 py-3">
                <h3 className="text-white font-bold text-base leading-tight drop-shadow-sm">
                  {enableTyping ? getDisplayText(0) : headerTitle}
                  {enableTyping && currentSectionIndex === 0 && !isSectionComplete(0) && (
                    <span className="animate-pulse ml-1">|</span>
                  )}
                </h3>
              </div>
            )}

            {/* Body Section - Main Content */}
            {isSectionVisible(1) && (
              <div className="relative px-4 py-2">
                <div
                  className="text-white leading-relaxed drop-shadow-sm font-normal"
                  style={{
                    fontSize: "14px",
                    lineHeight: "1.4",
                  }}
                >
                  {enableTyping ? renderContent(getDisplayText(1)) : renderContent(messageContent)}
                  {enableTyping && currentSectionIndex === 1 && !isSectionComplete(1) && (
                    <span className="animate-pulse ml-1">|</span>
                  )}
                </div>
              </div>
            )}

            {/* Footer Section - Supportive Line */}
            {isSectionVisible(2) && (
              <div className="relative px-4 py-3">
                <div
                  className="text-white/95 text-sm font-medium leading-tight"
                  style={{
                    textShadow: "0 0 8px rgba(255, 255, 255, 0.4)",
                    fontSize: "13px",
                  }}
                >
                  {enableTyping ? getDisplayText(2) : footerTip}
                  {enableTyping && currentSectionIndex === 2 && !isSectionComplete(2) && (
                    <span className="animate-pulse ml-1">|</span>
                  )}
                </div>
              </div>
            )}

            {/* Action Buttons - Show only when typing is complete */}
            {(!enableTyping || isComplete) && (
              <div className="relative px-4 py-3 border-t border-white/10">
                <div className="flex justify-start gap-2">
                  <Button
                    onClick={onReply}
                    size="sm"
                    className="h-7 px-3 text-xs bg-white/20 hover:bg-white/30 text-white border-0 rounded-full backdrop-blur-sm transition-all duration-200 hover:scale-105"
                  >
                    🗨️ Reply
                  </Button>
                  <Button
                    onClick={onRegenerate}
                    size="sm"
                    className="h-7 px-3 text-xs bg-white/20 hover:bg-white/30 text-white border-0 rounded-full backdrop-blur-sm transition-all duration-200 hover:scale-105"
                  >
                    🔁 Regenerate
                  </Button>
                </div>
              </div>
            )}
          </div>

          {/* Message tail */}
          <div
            className="w-3 h-3 transform -translate-x-1 -mt-3 ml-4"
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
  enableTyping = true,
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
      enableTyping={enableTyping}
    />
  );
}
