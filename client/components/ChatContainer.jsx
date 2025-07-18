import { useState, useRef, useEffect } from "react";
import { MagicalChallengeCard } from "./MagicalChallengeCard";
import { ChatMessage } from "./ChatMessage";
import { CompactChallengeCard } from "./CompactChallengeCard";
import { AITextMessage } from "./AITextMessage";
import AIChallengeMessage from "./AIChallengeMessage";
import KidMediaMessage from "./KidMediaMessage";
import KidImageCarousel from "./KidImageCarousel";
import MoodMessage from "./MoodMessage";
import { CompanionChatMessage } from "./CompanionCharacter";
import KidReflectionStorybookCard from "./KidReflectionStorybookCard";

export function ChatContainer({
  messages,
  className = "",
  showMagicalCard = false,
  onAcceptChallenge,
  onRegenerateChallenge,
  onChatMore,
  onShowCarousel = () => {},
}) {
  const messagesEndRef = useRef(null);
  const chatContainerRef = useRef(null);

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
  const initialMessages = [
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

  const renderMessage = (message) => {
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

    if (message.type === "reflection") {
      return (
        <KidReflectionStorybookCard
          key={message.id}
          imageUrl={message.imageUrl}
          reflection={message.reflection}
          badgeTitle={message.badgeTitle}
          aiAvatarUrl={message.aiAvatarUrl}
          reactionsEnabled={true}
          index={message.index || 0}
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
