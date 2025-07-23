import { useState, useRef, useEffect } from "react";
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
    | "mood"
    | "carousel";
  sender: "AI" | "Kid";
  content?: string;
  timestamp: Date;
  title?: string;
  description?: string;
  mediaUrl?: string;
  mediaType?: "image" | "video";
  onAccept?: () => void;
  onRegenerate?: () => void;
  onChatMore?: () => void;
  images?: string[];
  onImagesUpdate?: (images: string[]) => void;
  onMoodSubmit?: (mood: any) => void;
}

interface SimplifiedChatContainerProps {
  messages: ChatMessage[];
  className?: string;
  showMagicalCard?: boolean;
  onAcceptChallenge?: () => void;
  onRegenerateChallenge?: () => void;
  onChatMore?: () => void;
  onShowCarousel?: (images: string[]) => void;
  isAIThinking?: boolean;
  selectedCompanion?: any;
  kidProfileImage?: string;
}

export function SimplifiedChatContainer({
  messages,
  className = "",
  showMagicalCard = false,
  onAcceptChallenge,
  onRegenerateChallenge,
  onChatMore,
  onShowCarousel = () => {},
  isAIThinking = false,
  selectedCompanion,
  kidProfileImage,
}: SimplifiedChatContainerProps) {
  // Get only the latest message between AI and Kid
  const getLatestMessage = () => {
    if (messages.length === 0) return null;
    
    // Find the last message from either AI or Kid
    for (let i = messages.length - 1; i >= 0; i--) {
      const message = messages[i];
      if (message.sender === "AI" || message.sender === "Kid") {
        return message;
      }
    }
    
    return null;
  };

  const latestMessage = getLatestMessage();

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
        <div className="flex justify-start w-full">
          <div className="max-w-sm">
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
          </div>
        </div>
      );
    }

    if (message.type === "challenge") {
      return (
        <div className="flex justify-start w-full">
          <div className="max-w-sm">
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
          </div>
        </div>
      );
    }

    // AI text messages
    if (message.sender === "AI") {
      return (
        <div className="flex justify-center w-full">
          <div className="max-w-md w-full">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 md:p-6 rounded-3xl shadow-xl border border-white/20 backdrop-blur-sm">
              <p className="text-sm md:text-base leading-relaxed text-center">
                {message.content}
              </p>
            </div>
            <div className="text-xs text-gray-400 mt-2 text-center">
              {message.timestamp.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </div>
          </div>
        </div>
      );
    }

    // Kid messages
    return (
      <div className="flex justify-center w-full">
        <div className="max-w-md w-full">
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-4 md:p-6 rounded-3xl shadow-xl border border-white/20 backdrop-blur-sm">
            <p className="text-sm md:text-base leading-relaxed text-center">
              {message.content}
            </p>
          </div>
          <div className="text-xs text-gray-400 mt-2 text-center">
            {message.timestamp.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={`flex flex-col h-full relative ${className}`}>
      {/* Fixed Companion Character at bottom-left */}
      <div className="fixed bottom-20 left-8 z-20">
        <div className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2Fae5429317afa463b8668d5872bee2cf9%2Fb739432197b34209a365cd0320ed09a4?format=webp&width=800"
            alt="AI Companion"
            className="w-full h-full object-contain animate-gentle-float drop-shadow-lg"
          />
        </div>
        {isAIThinking && (
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm shadow-lg">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Latest Message Container */}
      <div className="flex-1 flex items-center justify-center px-4 pb-24">
        <div className="w-full max-w-2xl">
          {/* Default state when no messages */}
          {!latestMessage && (
            <div className="flex justify-center w-full">
              <div className="max-w-sm">
                <CompactChallengeCard
                  title="How are you feeling today?"
                  description="Just wanted to know how your day is going?"
                  onAccept={onAcceptChallenge}
                  onRegenerate={onRegenerateChallenge}
                  onChatMore={onChatMore}
                />
              </div>
            </div>
          )}
          
          {/* Latest Message */}
          {latestMessage && (
            <div className="animate-slide-in">
              {renderMessage(latestMessage)}
            </div>
          )}

          {/* Additional Challenge Card when Imagine is clicked */}
          {showMagicalCard && (
            <div className="flex justify-center w-full mt-6 animate-slide-in">
              <div className="max-w-sm">
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
      </div>
    </div>
  );
}

export type { ChatMessage };
