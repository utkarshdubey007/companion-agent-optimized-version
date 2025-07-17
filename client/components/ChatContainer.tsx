import { useState, useRef, useEffect, ReactNode } from "react";
import { MagicalChallengeCard } from "./MagicalChallengeCard";
import { ChatMessage } from "./ChatMessage";
import { CompactChallengeCard } from "./CompactChallengeCard";
import { AITextMessage } from "./AITextMessage";
import AIChallengeMessage from "./AIChallengeMessage";
import KidMediaMessage from "./KidMediaMessage";
import KidImageCarousel from "./KidImageCarousel";
import MoodMessage from "./MoodMessage";

interface ChatMessage {
  id: string;
  type:
    | "text"
    | "challenge"
    | "ai_challenge"
    | "system"
    | "media"
    | "image_display"
    | "mood";
  sender: "AI" | "Kid";
  content?: string;
  timestamp: Date;
  // For challenge messages
  title?: string;
  description?: string;
  mediaUrl?: string;
  mediaType?: "image" | "video";
  onAccept?: () => void;
  onRegenerate?: () => void;
  onChatMore?: () => void;
  // For media messages
  images?: string[];
  onImagesUpdate?: (images: string[]) => void;
  // For mood messages
  onMoodSubmit?: (mood: any) => void;
}

interface ChatContainerProps {
  messages: ChatMessage[];
  className?: string;
  showMagicalCard?: boolean;
  onAcceptChallenge?: () => void;
  onRegenerateChallenge?: () => void;
  onChatMore?: () => void;
  showImageCarousel?: boolean;
  carouselImages?: string[];
  onCloseCarousel?: () => void;
  onShowCarousel?: (images: string[]) => void;
}

export function ChatContainer({
  messages,
  className = "",
  showMagicalCard = false,
  onAcceptChallenge,
  onRegenerateChallenge,
  onChatMore,
  showImageCarousel = false,
  carouselImages = [],
  onCloseCarousel = () => {},
}: ChatContainerProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Auto scroll to bottom when new messages arrive
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, showMagicalCard]);

  // Initial messages for the chat
  const initialMessages: ChatMessage[] = [
    {
      id: "welcome-1",
      type: "system",
      sender: "AI",
      content:
        "Let's make some fun art together. What if the world was a peaceful place, let's start creating!",
      timestamp: new Date(Date.now() - 300000),
    },
  ];

  const allMessages = messages.length > 0 ? messages : initialMessages;

  const renderMessage = (message: ChatMessage) => {
    if (message.type === "mood") {
      return (
        <MoodMessage
          key={message.id}
          onMoodSubmit={message.onMoodSubmit}
          timestamp={message.timestamp}
        />
      );
    }

    if (message.type === "image_display") {
      return (
        <KidMediaMessage
          key={message.id}
          images={message.images}
          onImagesUpdate={message.onImagesUpdate}
          timestamp={message.timestamp}
          mode="display"
        />
      );
    }

    if (message.type === "media") {
      return (
        <KidMediaMessage
          key={message.id}
          images={message.images}
          onImagesUpdate={message.onImagesUpdate}
          timestamp={message.timestamp}
          mode="upload"
        />
      );
    }

    if (message.type === "ai_challenge") {
      return (
        <AIChallengeMessage
          key={message.id}
          title={message.title || "Today's Challenge!"}
          description={
            message.description ||
            "Help the forest creatures clean their magical village!"
          }
          mediaUrl={message.mediaUrl}
          mediaType={message.mediaType}
          onAccept={message.onAccept}
          onRegenerate={message.onRegenerate}
          onChatMore={message.onChatMore}
        />
      );
    }

    if (message.type === "challenge") {
      return (
        <div
          key={message.id}
          className="flex w-full mb-6 justify-start" // Always left for AI challenges
        >
          <div className="max-w-sm mr-auto">
            <MagicalChallengeCard
              title={message.title || "Magical Challenge!"}
              description={
                message.description ||
                "Let's create something amazing together!"
              }
              mediaUrl={message.mediaUrl}
              mediaType={message.mediaType}
              onAccept={message.onAccept}
              onRegenerate={message.onRegenerate}
              onChatMore={message.onChatMore}
              isVisible={true}
            />
            <div
              className={`text-xs text-gray-400 mt-2 ${
                message.sender === "AI" ? "text-left ml-2" : "text-right mr-2"
              }`}
            >
              {message.timestamp.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </div>
          </div>
        </div>
      );
    }

    if (message.type === "system") {
      return (
        <div key={message.id} className="flex justify-start w-full mb-4">
          {/* AI Avatar for system messages */}
          <div className="flex items-start gap-3 max-w-sm">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center shadow-lg">
                <span className="text-white text-lg">🐰</span>
              </div>
            </div>

            {/* Message bubble */}
            <div className="max-w-xs">
              <div className="bg-chat-bubble text-white p-3 md:p-4 rounded-2xl rounded-bl-sm shadow-lg">
                <p className="text-xs md:text-sm leading-relaxed">
                  {message.content}
                </p>
              </div>
              <div className="text-xs text-gray-400 mt-1 ml-2">
                {message.timestamp.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </div>
            </div>
          </div>
        </div>
      );
    }

    // Regular text messages
    if (message.sender === "AI") {
      return (
        <AITextMessage
          key={message.id}
          content={message.content || ""}
          timestamp={message.timestamp}
          onReply={() => console.log("Reply to AI message")}
          onRegenerate={() => console.log("Regenerate AI message")}
        />
      );
    }

    // Kid messages use regular ChatMessage
    return (
      <ChatMessage
        key={message.id}
        role={message.sender}
        content={message.content || ""}
        timestamp={message.timestamp}
      />
    );
  };

  return (
    <div className={`flex flex-col h-full relative ${className}`}>
      {/* Image Carousel Overlay */}
      {showImageCarousel && carouselImages.length > 0 && (
        <KidImageCarousel
          images={carouselImages}
          onClose={onCloseCarousel}
          showCloseButton={true}
        />
      )}

      {/* Scrollable Messages Container */}
      <div
        ref={chatContainerRef}
        className="flex-1 overflow-y-auto hide-scrollbar px-4 pb-24"
        style={{
          minHeight: "0",
          overflowY: "auto",
        }}
      >
        {/* Default Challenge Card - Always visible */}
        <div className="flex justify-start w-full mb-6 mt-4">
          <div className="mr-auto">
            <CompactChallengeCard
              title="Welcome back, gentle dreamer! ⭐"
              description="Let's dive back into our heartfelt story or begin a new one filled with kindness and imagination. What loving adventure shall we explore today?"
              onAccept={onAcceptChallenge}
              onRegenerate={onRegenerateChallenge}
              onChatMore={onChatMore}
            />
          </div>
        </div>
        {/* Messages */}
        <div className="space-y-4">
          {allMessages.map((message) => renderMessage(message))}

          {/* Additional Compact Challenge Card - Show when Imagine is clicked */}
          {showMagicalCard && (
            <div className="flex justify-start w-full mb-6">
              <div className="mr-auto">
                <CompactChallengeCard
                  title="Today's Magical Mission!"
                  description="Help the forest animals organize a surprise party! Gather magical decorations and create the most wonderful celebration the enchanted forest has ever seen! ✨🎉"
                  onAccept={onAcceptChallenge}
                  onRegenerate={onRegenerateChallenge}
                  onChatMore={onChatMore}
                />
              </div>
            </div>
          )}
        </div>

        {/* Scroll anchor */}
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
}

export type { ChatMessage };
