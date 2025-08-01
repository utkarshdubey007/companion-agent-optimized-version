import { useState, useRef, useEffect, ReactNode } from "react";
import { MagicalChallengeCard } from "./MagicalChallengeCard";
import { ChatMessage } from "./ChatMessage";
import { CompactChallengeCard } from "./CompactChallengeCard";
import { AITextMessage } from "./AITextMessage";
import AIChallengeMessage from "./AIChallengeMessage";
import KidMediaMessage from "./KidMediaMessage";
import KidImageCarousel from "./KidImageCarousel";
import MoodMessage from "./MoodMessage";
import { CompanionChatMessage } from "./CompanionCharacter";
import { TaleTreeAIMessage } from "./AIMessage";

interface ChatMessage {
  id: string;
  type:
    | "text"
    | "challenge"
    | "ai_challenge"
    | "taletree_ai"
    | "system"
    | "media"
    | "image_display"
    | "mood"
    | "carousel";
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
  // For TaleTree AI messages
  taleTreeData?: any;
}

interface ChatContainerProps {
  messages: ChatMessage[];
  className?: string;
  showMagicalCard?: boolean;
  onAcceptChallenge?: () => void;
  onRegenerateChallenge?: () => void;
  onChatMore?: () => void;
  onShowCarousel?: (images: string[]) => void;
}

export function ChatContainer({
  messages,
  className = "",
  showMagicalCard = false,
  onAcceptChallenge,
  onRegenerateChallenge,
  onChatMore,
  onShowCarousel = () => {},
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

  // Use only the messages passed from props (no static fallback)
  const allMessages = messages;

  const renderMessage = (message: ChatMessage) => {
    if (message.type === "carousel") {
      return (
        <KidImageCarousel
          key={message.id}
          images={message.images || []}
          timestamp={message.timestamp}
        />
      );
    }

    if (message.type === "mood") {
      return (
        <MoodMessage
          key={message.id}
          onMoodSubmit={message.onMoodSubmit}
          timestamp={message.timestamp}
        />
      );
    }

    if (message.type === "taletree_ai") {
      return (
        <TaleTreeAIMessage
          key={message.id}
          data={message.taleTreeData}
          timestamp={message.timestamp}
          onAccept={() => console.log("Challenge accepted from TaleTree!")}
          onRegenerate={() => console.log("Regenerate TaleTree challenge")}
          onChatMore={() => console.log("Chat more about TaleTree challenge")}
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
          onShareCreation={onShowCarousel}
          timestamp={message.timestamp}
          mode="upload"
        />
      );
    }

    if (message.type === "ai_challenge") {
      return (
        <CompanionChatMessage
          key={message.id}
          showCompanion={true}
          alignment="left"
          centerCompanion={true}
          companionProps={{
            size: "proportional",
            animated: true,
            maxWidthPercent: 12,
          }}
        >
          <AIChallengeMessage
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
        </CompanionChatMessage>
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
        <CompanionChatMessage
          key={message.id}
          showCompanion={true}
          alignment="left"
          centerCompanion={true}
          companionProps={{
            size: "proportional",
            animated: true,
            maxWidthPercent: 12,
          }}
        >
          <div className="flex justify-start w-full mb-4">
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
        </CompanionChatMessage>
      );
    }

    // Regular text messages
    if (message.sender === "AI") {
      return (
        <CompanionChatMessage
          key={message.id}
          showCompanion={true}
          alignment="left"
          centerCompanion={true}
          companionProps={{
            size: "proportional",
            animated: true,
            maxWidthPercent: 12,
          }}
        >
          <AITextMessage
            content={message.content || ""}
            timestamp={message.timestamp}
            onReply={() => console.log("Reply to AI message")}
            onRegenerate={() => console.log("Regenerate AI message")}
          />
        </CompanionChatMessage>
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
