import { ReactNode } from "react";

export interface ChatMessageProps {
  role: "AI" | "Kid";
  content: string | ReactNode;
  timestamp?: Date;
  avatar?: string | ReactNode;
  className?: string;
}

export function ChatMessage({
  role,
  content,
  timestamp,
  avatar,
  className = "",
}: ChatMessageProps) {
  const isAI = role === "AI";
  const isKid = role === "Kid";

  // Default avatars
  const defaultAvatar = isAI ? "🤖" : "👧";

  return (
    <div
      className={`flex w-full mb-4 animate-slide-in ${
        isAI ? "justify-start" : "justify-end"
      } ${className}`}
    >
      <div
        className={`flex max-w-xs md:max-w-sm lg:max-w-md items-end gap-2 ${
          isAI ? "flex-row" : "flex-row-reverse"
        }`}
      >
        {/* Avatar */}
        <div
          className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm shadow-md ${
            isAI
              ? "bg-gradient-to-br from-pink-400 to-purple-500"
              : "bg-gradient-to-br from-blue-300 to-cyan-400"
          }`}
        >
          {avatar || defaultAvatar}
        </div>

        {/* Message bubble */}
        <div
          className={`relative px-4 py-3 rounded-2xl shadow-sm max-w-full break-words ${
            isAI
              ? "bg-gradient-to-br from-blue-50 to-cyan-50 text-blue-800 rounded-bl-md"
              : "bg-gradient-to-br from-pink-100 to-purple-100 text-purple-800 rounded-br-md"
          }`}
          style={{
            boxShadow: isAI
              ? "0 4px 12px rgba(59, 130, 246, 0.15)"
              : "0 4px 12px rgba(236, 72, 153, 0.15)",
          }}
        >
          {/* Message content */}
          <div className="text-sm leading-relaxed">
            {typeof content === "string" ? (
              <p className="m-0">{content}</p>
            ) : (
              content
            )}
          </div>

          {/* Message tail */}
          <div
            className={`absolute bottom-0 w-3 h-3 ${
              isAI
                ? "right-0 transform translate-x-1 bg-gradient-to-br from-pink-100 to-purple-100"
                : "left-0 transform -translate-x-1 bg-gradient-to-br from-blue-50 to-cyan-50"
            }`}
            style={{
              clipPath: isAI
                ? "polygon(0 0, 100% 100%, 0 100%)"
                : "polygon(100% 0, 100% 100%, 0 100%)",
            }}
          />
        </div>
      </div>

      {/* Timestamp */}
      {timestamp && (
        <div
          className={`text-xs text-gray-400 mt-1 ${
            isAI ? "text-right mr-10" : "text-left ml-10"
          }`}
        >
          {timestamp.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </div>
      )}
    </div>
  );
}

// Helper component for AI messages with rich content
export function AIChallengeMessage({
  title,
  description,
  onAccept,
  onRegenerate,
  timestamp,
  className = "",
}: {
  title: string;
  description: string;
  onAccept?: () => void;
  onRegenerate?: () => void;
  timestamp?: Date;
  className?: string;
}) {
  return (
    <ChatMessage
      role="AI"
      timestamp={timestamp}
      className={className}
      content={
        <div className="space-y-3">
          <div className="text-center">
            <h3 className="text-base font-bold text-purple-700 mb-1">
              ✨ {title} ✨
            </h3>
            <div className="h-0.5 w-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mx-auto" />
          </div>

          <p className="text-sm text-purple-700 leading-relaxed">
            {description}
          </p>

          <div className="flex gap-2 pt-2">
            {onAccept && (
              <button
                onClick={onAccept}
                className="flex-1 bg-gradient-to-r from-green-400 to-emerald-500 text-white text-xs font-semibold py-2 px-3 rounded-xl hover:scale-105 transform transition-all duration-200 shadow-md"
              >
                🎉 Accept!
              </button>
            )}
            {onRegenerate && (
              <button
                onClick={onRegenerate}
                className="bg-gradient-to-r from-purple-400 to-pink-400 text-white text-xs font-semibold py-2 px-3 rounded-xl hover:scale-105 transform transition-all duration-200 shadow-md"
              >
                🔄 New One!
              </button>
            )}
          </div>
        </div>
      }
    />
  );
}

// Helper component for Kid file upload messages
export function KidFileMessage({
  fileName,
  fileUrl,
  fileType,
  fileSize,
  timestamp,
  className = "",
}: {
  fileName: string;
  fileUrl?: string;
  fileType: "image" | "video" | "document";
  fileSize?: string;
  timestamp?: Date;
  className?: string;
}) {
  const getFileIcon = () => {
    switch (fileType) {
      case "image":
        return "🖼️";
      case "video":
        return "🎥";
      default:
        return "📄";
    }
  };

  return (
    <ChatMessage
      role="Kid"
      timestamp={timestamp}
      className={className}
      content={
        <div className="space-y-2">
          {fileUrl && (fileType === "image" || fileType === "video") && (
            <div className="rounded-lg overflow-hidden">
              {fileType === "image" ? (
                <img
                  src={fileUrl}
                  alt={fileName}
                  className="w-full max-w-xs rounded-lg"
                />
              ) : (
                <video
                  src={fileUrl}
                  controls
                  className="w-full max-w-xs rounded-lg"
                />
              )}
            </div>
          )}

          <div className="flex items-center gap-2">
            <span className="text-lg">{getFileIcon()}</span>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-blue-800 truncate">
                {fileName}
              </p>
              {fileSize && <p className="text-xs text-blue-600">{fileSize}</p>}
            </div>
          </div>
        </div>
      }
    />
  );
}
