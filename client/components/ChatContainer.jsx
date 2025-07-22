import { useState, useRef, useEffect } from "react";
import { MagicalChallengeCard } from "./MagicalChallengeCard";
import { ChatMessage } from "./ChatMessage";
import { CompactChallengeCard } from "./CompactChallengeCard";
import { AITextMessage } from "./AITextMessage";
import AIChallengeMessage from "./AIChallengeMessage";
import KidMediaMessage from "./KidMediaMessage";
import KidImageCarousel from "./KidImageCarousel";
import MoodMessage from "./MoodMessage";
import { AITypingIndicator } from "./MagicalCompanionChat";
import KidReflectionStorybookCard from "./KidReflectionStorybookCard";
import StorybookReflectionCard from "./StorybookReflectionCard";
import FlippableStorybookCard from "./FlippableStorybookCard";
import { AnimatedCompanionAvatar } from "./AnimatedCompanionAvatar";

export function ChatContainer({
  messages,
  className = "",
  showMagicalCard = false,
  onAcceptChallenge,
  onRegenerateChallenge,
  onChatMore,
  onShowCarousel = () => {},
  isAIThinking = false,
  selectedCompanion = null,
  kidProfileImage = null, // New prop for kid's profile image
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

  // Dummy kid profile image
  const defaultKidImage = "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?w=100&h=100&fit=crop&crop=face&auto=format";

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

    if (message.type === "storybook") {
      return (
        <StorybookReflectionCard
          key={message.id}
          reflections={message.reflections}
          onReactionClick={message.onReactionClick}
          index={message.index || 0}
        />
      );
    }

    if (message.type === "flippable_storybook") {
      return (
        <FlippableStorybookCard
          key={message.id}
          pages={message.pages}
          index={message.index || 0}
        />
      );
    }

    if (message.type === "ai_challenge") {
      return (
        <div key={message.id} className="flex justify-start w-full mb-4">
          {/* AI companion profile image */}
          <div className="flex-shrink-0 mr-3">
            <AnimatedCompanionAvatar
              companion={message.companion || selectedCompanion}
              size={40}
              showAnimations={true}
              triggerAnimation={false}
            />
          </div>
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
      );
    }

    if (message.type === "system") {
      return (
        <div key={message.id} className="flex justify-start w-full mb-4">
          {/* AI companion profile image */}
          <div className="flex-shrink-0 mr-3">
            <AnimatedCompanionAvatar
              companion={message.companion || selectedCompanion}
              size={40}
              showAnimations={true}
              triggerAnimation={false}
            />
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
      );
    }

    // Regular text messages
    if (message.sender === "AI") {
      return (
        <div key={message.id} className="flex justify-start w-full mb-4">
          {/* AI companion profile image */}
          <div className="flex-shrink-0 mr-3">
            <AnimatedCompanionAvatar
              companion={message.companion || selectedCompanion}
              size={40}
              showAnimations={true}
              triggerAnimation={false}
            />
          </div>
          <AITextMessage
            content={message.content || ""}
            timestamp={message.timestamp}
            onReply={() => console.log("Reply to AI message")}
            onRegenerate={() => console.log("Regenerate AI message")}
            hasAvatar={!!selectedCompanion?.imageUrl}
          />
        </div>
      );
    }

    // Kid messages use regular ChatMessage
    return (
      <div key={message.id} className="flex justify-end w-full mb-4">
        <ChatMessage
          role={message.sender}
          content={message.content || ""}
          timestamp={message.timestamp}
          hasAvatar={!!kidProfileImage}
        />
        {/* Kid profile image */}
        <div className="flex-shrink-0 ml-3">
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-pink-300 shadow-lg">
            <img
              src={kidProfileImage || defaultKidImage}
              alt="Kid Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
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

          {/* AI Thinking Indicator */}
          {isAIThinking && (
            <AITypingIndicator
              companionColor={selectedCompanion?.color || "#FFD700"}
              selectedCompanion={selectedCompanion}
              className=""
            />
          )}

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
