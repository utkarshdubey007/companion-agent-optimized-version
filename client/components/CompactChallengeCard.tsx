import { Button } from "@/components/ui/button";

interface CompactChallengeCardProps {
  title?: string;
  description?: string;
  onAccept?: () => void;
  onRegenerate?: () => void;
  onChatMore?: () => void;
}

export function CompactChallengeCard({
  title = "Welcome back, gentle dreamer! ⭐",
  description = "Let's dive back into our heartfelt story or begin a new one filled with kindness and imagination. What loving adventure shall we explore today?",
  onAccept,
  onRegenerate,
  onChatMore,
}: CompactChallengeCardProps) {
  return (
    <div
      className="bg-[#1C2051] rounded-l-[20px] border border-white/20 shadow-lg relative max-w-md"
      style={{
        boxShadow: "0px 8px 32px rgba(0, 0, 0, 0.4)",
      }}
    >
      {/* Header */}
      <div className="p-4 border-b border-white/20">
        <h3 className="text-white text-base font-semibold text-center">
          {title}
        </h3>
      </div>

      {/* Content */}
      <div className="p-4">
        <p className="text-white/90 text-sm leading-relaxed mb-4 text-center">
          {description}
        </p>

        {/* Action Buttons */}
        <div className="flex gap-2">
          {onAccept && (
            <Button
              onClick={onAccept}
              className="flex-1 bg-gradient-to-r from-green-400 to-emerald-500 hover:from-green-500 hover:to-emerald-600 text-white text-xs font-semibold py-2 px-3 rounded-xl transition-all duration-200 border-0"
            >
              Accept ✨
            </Button>
          )}
          {onRegenerate && (
            <Button
              onClick={onRegenerate}
              className="bg-white/20 hover:bg-white/30 text-white text-xs font-semibold py-2 px-3 rounded-xl transition-all duration-200 border-0"
            >
              🔄
            </Button>
          )}
          {onChatMore && (
            <Button
              onClick={onChatMore}
              className="bg-white/20 hover:bg-white/30 text-white text-xs font-semibold py-2 px-3 rounded-xl transition-all duration-200 border-0"
            >
              💬
            </Button>
          )}
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-b-[20px]" />
    </div>
  );
}
