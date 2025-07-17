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
  headerTitle = "✨ AI Assistant",
  footerTip,
  className = "",
}: AITextMessageProps) {
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
      <div className="flex items-start gap-3 max-w-md">
        {/* AI Avatar */}
        <div className="flex-shrink-0">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center shadow-lg">
            <span className="text-white text-lg">🤖</span>
          </div>
        </div>

        {/* Message Card */}
        <div className="flex-1">
          <div
            className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl rounded-bl-md shadow-lg border border-blue-100 overflow-hidden"
            style={{
              boxShadow: "0 4px 12px rgba(59, 130, 246, 0.15)",
            }}
          >
            {/* Header Section */}
            <div className="bg-gradient-to-r from-blue-100 to-cyan-100 px-4 py-2 border-b border-blue-200">
              <h3 className="text-blue-700 font-semibold text-sm flex items-center gap-2">
                {headerTitle}
              </h3>
            </div>

            {/* Body Section */}
            <div className="px-4 py-3">
              <div className="text-blue-800 text-sm leading-relaxed">
                {renderContent(content)}
              </div>
            </div>

            {/* Footer Section */}
            <div className="px-4 py-2 bg-blue-25 border-t border-blue-100">
              <div className="flex items-center justify-between">
                {/* Action Buttons */}
                <div className="flex items-center gap-2">
                  {onReply && (
                    <Button
                      onClick={onReply}
                      size="sm"
                      variant="ghost"
                      className="h-7 px-2 text-xs text-blue-600 hover:text-blue-700 hover:bg-blue-100"
                    >
                      <MessageCircle className="w-3 h-3 mr-1" />
                      Reply
                    </Button>
                  )}
                  {onRegenerate && (
                    <Button
                      onClick={onRegenerate}
                      size="sm"
                      variant="ghost"
                      className="h-7 px-2 text-xs text-blue-600 hover:text-blue-700 hover:bg-blue-100"
                    >
                      <RefreshCw className="w-3 h-3 mr-1" />
                      Regenerate
                    </Button>
                  )}
                  {onLike && (
                    <Button
                      onClick={onLike}
                      size="sm"
                      variant="ghost"
                      className="h-7 px-2 text-xs text-blue-600 hover:text-blue-700 hover:bg-blue-100"
                    >
                      <ThumbsUp className="w-3 h-3 mr-1" />
                      Like
                    </Button>
                  )}
                </div>

                {/* Footer Tip or Timestamp */}
                <div className="text-xs text-blue-500">
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

          {/* Message tail */}
          <div
            className="w-3 h-3 bg-gradient-to-br from-blue-50 to-cyan-50 transform -translate-x-1 -mt-3 ml-4"
            style={{
              clipPath: "polygon(100% 0, 100% 100%, 0 100%)",
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
