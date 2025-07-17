import { useState, useRef, useEffect } from "react";
import { MagicalChallengeCard } from "./MagicalChallengeCard";
import { Button } from "@/components/ui/button";
import { FileText, Image, Video, Download } from "lucide-react";

interface BaseMessage {
  id: string;
  timestamp: Date;
  type: "text" | "challenge" | "file";
  sender: "ai" | "kid";
}

interface TextMessage extends BaseMessage {
  type: "text";
  content: string;
  header?: string;
  footer?: string;
}

interface ChallengeMessage extends BaseMessage {
  type: "challenge";
  sender: "ai";
  title: string;
  description: string;
  mediaUrl?: string;
  mediaType?: "image" | "video";
  onAccept?: () => void;
  onRegenerate?: () => void;
  onChatMore?: () => void;
}

interface FileMessage extends BaseMessage {
  type: "file";
  sender: "kid";
  fileName: string;
  fileUrl: string;
  fileType: "image" | "video" | "document";
  fileSize?: string;
}

type Message = TextMessage | ChallengeMessage | FileMessage;

interface ChatBoxProps {
  messages: Message[];
  onSendMessage?: (message: string) => void;
  className?: string;
}

export function ChatBox({
  messages,
  onSendMessage,
  className = "",
}: ChatBoxProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [animatingMessages, setAnimatingMessages] = useState<Set<string>>(
    new Set(),
  );

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Animate new messages
  useEffect(() => {
    const latestMessage = messages[messages.length - 1];
    if (latestMessage) {
      setAnimatingMessages((prev) => new Set([...prev, latestMessage.id]));
      setTimeout(() => {
        setAnimatingMessages((prev) => {
          const newSet = new Set(prev);
          newSet.delete(latestMessage.id);
          return newSet;
        });
      }, 600);
    }
  }, [messages]);

  const renderAITextMessage = (message: TextMessage) => (
    <div className="flex items-start gap-3 mb-4 animate-slide-in-left">
      {/* AI Avatar */}
      <div className="flex-shrink-0">
        <div
          className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center shadow-lg"
          style={{
            animation: "avatarFloat 3s ease-in-out infinite",
          }}
        >
          <span className="text-white text-lg">🧙‍♂️</span>
        </div>
      </div>

      {/* Message bubble */}
      <div className="max-w-sm">
        <div
          className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl rounded-bl-lg p-4 shadow-lg border border-purple-100"
          style={{
            boxShadow:
              "0 8px 25px rgba(147, 51, 234, 0.15), 0 0 0 1px rgba(147, 51, 234, 0.1)",
          }}
        >
          {message.header && (
            <h3 className="text-purple-700 font-bold text-sm mb-2">
              ✨ {message.header}
            </h3>
          )}
          <p className="text-gray-700 text-sm leading-relaxed mb-2">
            {message.content}
          </p>
          {message.footer && (
            <p className="text-purple-600 text-xs font-medium">
              {message.footer}
            </p>
          )}
        </div>
        <div className="text-xs text-gray-400 mt-1 ml-2">
          {message.timestamp.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </div>
      </div>
    </div>
  );

  const renderChallengeMessage = (message: ChallengeMessage) => (
    <div className="flex items-start gap-3 mb-6 animate-slide-in-left">
      {/* AI Avatar */}
      <div className="flex-shrink-0">
        <div
          className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center shadow-lg"
          style={{
            animation: "avatarFloat 3s ease-in-out infinite",
          }}
        >
          <span className="text-white text-lg">🧙‍♂️</span>
        </div>
      </div>

      {/* Challenge card */}
      <div className="max-w-sm">
        <MagicalChallengeCard
          title={message.title}
          description={message.description}
          mediaUrl={message.mediaUrl}
          mediaType={message.mediaType}
          onAccept={message.onAccept}
          onRegenerate={message.onRegenerate}
          onChatMore={message.onChatMore}
          isVisible={true}
        />
        <div className="text-xs text-gray-400 mt-2 ml-2">
          {message.timestamp.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </div>
      </div>
    </div>
  );

  const renderKidTextMessage = (message: TextMessage) => (
    <div className="flex items-start gap-3 mb-4 justify-end animate-slide-in-right">
      {/* Message bubble */}
      <div className="max-w-sm">
        <div className="bg-gradient-to-br from-pink-400 to-purple-400 rounded-3xl rounded-br-lg p-4 shadow-lg">
          <p className="text-white text-sm leading-relaxed">
            {message.content}
          </p>
        </div>
        <div className="text-xs text-gray-400 mt-1 mr-2 text-right">
          {message.timestamp.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </div>
      </div>

      {/* Kid Avatar */}
      <div className="flex-shrink-0">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-orange-400 flex items-center justify-center shadow-lg">
          <span className="text-white text-lg">👧</span>
        </div>
      </div>
    </div>
  );

  const renderKidFileMessage = (message: FileMessage) => {
    const getFileIcon = () => {
      switch (message.fileType) {
        case "image":
          return <Image className="w-5 h-5" />;
        case "video":
          return <Video className="w-5 h-5" />;
        default:
          return <FileText className="w-5 h-5" />;
      }
    };

    const isMediaFile =
      message.fileType === "image" || message.fileType === "video";

    return (
      <div className="flex items-start gap-3 mb-4 justify-end animate-slide-in-right">
        {/* File message bubble */}
        <div className="max-w-sm">
          <div className="bg-gradient-to-br from-green-400 to-blue-400 rounded-3xl rounded-br-lg p-4 shadow-lg">
            {isMediaFile && message.fileUrl && (
              <div className="mb-3">
                {message.fileType === "image" ? (
                  <img
                    src={message.fileUrl}
                    alt={message.fileName}
                    className="w-full max-w-xs rounded-xl"
                  />
                ) : (
                  <video
                    src={message.fileUrl}
                    controls
                    className="w-full max-w-xs rounded-xl"
                  />
                )}
              </div>
            )}

            <div className="flex items-center gap-3">
              <div className="text-white">{getFileIcon()}</div>
              <div className="flex-1">
                <p className="text-white text-sm font-medium">
                  {message.fileName}
                </p>
                {message.fileSize && (
                  <p className="text-white/80 text-xs">{message.fileSize}</p>
                )}
              </div>
              <Button
                size="sm"
                className="bg-white/20 hover:bg-white/30 text-white border-0 p-2"
              >
                <Download className="w-4 h-4" />
              </Button>
            </div>
          </div>
          <div className="text-xs text-gray-400 mt-1 mr-2 text-right">
            {message.timestamp.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </div>
        </div>

        {/* Kid Avatar */}
        <div className="flex-shrink-0">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-orange-400 flex items-center justify-center shadow-lg">
            <span className="text-white text-lg">👧</span>
          </div>
        </div>
      </div>
    );
  };

  const renderMessage = (message: Message) => {
    switch (message.type) {
      case "text":
        return message.sender === "ai"
          ? renderAITextMessage(message)
          : renderKidTextMessage(message);
      case "challenge":
        return renderChallengeMessage(message);
      case "file":
        return renderKidFileMessage(message);
      default:
        return null;
    }
  };

  return (
    <div className={`flex flex-col h-full ${className}`}>
      {/* Messages container */}
      <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4">
        {messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center">
            <div className="text-6xl mb-4 animate-bounce">🌟</div>
            <h3 className="text-xl font-bold text-purple-600 mb-2">
              Welcome to your magical adventure!
            </h3>
            <p className="text-gray-600 max-w-sm">
              Your friendly AI companion is here to help you create, learn, and
              explore amazing things together!
            </p>
          </div>
        ) : (
          messages.map((message) => (
            <div key={message.id}>{renderMessage(message)}</div>
          ))
        )}
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
}

// Export the types for external use
export type { Message, TextMessage, ChallengeMessage, FileMessage };
