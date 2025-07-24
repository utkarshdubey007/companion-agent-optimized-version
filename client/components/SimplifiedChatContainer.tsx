import { useState, useRef, useEffect } from "react";
import Lottie from "lottie-react";
import { MagicalChallengeCard } from "./MagicalChallengeCard";
import { ChatMessage } from "./ChatMessage";
import { CompactChallengeCard } from "./CompactChallengeCard";
import { AITextMessage } from "./AITextMessage";
import AIChallengeMessage from "./AIChallengeMessage";
import KidMediaMessage from "./KidMediaMessage";
import KidImageCarousel from "./KidImageCarousel";
import MoodMessage from "./MoodMessage";
import StorybookReflectionCard from "./StorybookReflectionCard";
import FlippableStorybookCard from "./FlippableStorybookCard";

interface ChatMessage {
  id: string;
  type:
    | "text"
    | "challenge"
    | "ai_challenge"
    | "system"
    | "media"
    | "kid_media"
    | "image_display"
    | "mood"
    | "carousel"
    | "storybook_reflection"
    | "flippable_storybook";
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
  creationData?: {
    title: string;
    description: string;
    images: string[];
  };
  reflections?: Array<{
    badgeTitle?: string;
    imageUrl?: string;
    reflection: string;
    aiAvatarUrl?: string;
  }>;
  pages?: Array<{
    imageUrl?: string;
    reflection: string;
    badgeTitle?: string;
    aiAvatarUrl?: string;
  }>;
}

interface SimplifiedChatContainerProps {
  messages: ChatMessage[];
  className?: string;
  showMagicalCard?: boolean;
  onAcceptChallenge?: () => void;
  onRegenerateChallenge?: () => void;
  onChatMore?: () => void;
  onShowCarousel?: (images: string[]) => void;
  onCreationSharing?: (images: string[]) => void;
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
  onCreationSharing = () => {},
  isAIThinking = false,
  selectedCompanion,
  kidProfileImage,
}: SimplifiedChatContainerProps) {
  // State for Lottie animation data
  const [animationData, setAnimationData] = useState(null);

  // Load Lottie animation data
  useEffect(() => {
    const loadAnimation = async () => {
      try {
        const response = await fetch(
          "https://cdn.builder.io/o/assets%2Fda24af11bdbb4585b8e6eb6406b2daf9%2Faf1bb45b193d45099ddf3851679da168?alt=media&token=e1de5c73-b4dc-4ba8-add2-191d7b69446e&apiKey=da24af11bdbb4585b8e6eb6406b2daf9",
        );
        const data = await response.json();
        setAnimationData(data);
      } catch (error) {
        console.error("Failed to load Lottie animation:", error);
      }
    };

    loadAnimation();
  }, []);

  // Get the latest AI and Kid messages separately
  const getLatestMessages = () => {
    let latestAI = null;
    let latestKid = null;

    // Find the most recent AI and Kid messages
    for (let i = messages.length - 1; i >= 0; i--) {
      const message = messages[i];
      if (message.sender === "AI" && !latestAI) {
        latestAI = message;
      }
      if (message.sender === "Kid" && !latestKid) {
        latestKid = message;
      }
      if (latestAI && latestKid) break;
    }

    return { latestAI, latestKid };
  };

  const { latestAI, latestKid } = getLatestMessages();

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

    if (message.type === "storybook_reflection") {
      console.log("📖 Rendering StorybookReflectionCard message:", message);
      return (
        <div
          className="flex justify-center w-full mb-4 px-4 mt-6"
          key={message.id}
        >
          <div
            className="max-w-sm w-full storybook-entrance"
            style={{ transform: "scale(0.7)" }}
          >
            <StorybookReflectionCard
              reflections={message.reflections || []}
              onReactionClick={(reaction, reflection) => {
                console.log("User reaction:", reaction, reflection);
              }}
            />
          </div>
        </div>
      );
    }

    if (message.type === "flippable_storybook") {
      console.log("📖 Rendering FlippableStorybookCard message:", message);
      return (
        <div className="absolute bottom-56 left-1/2 transform -translate-x-1/2 z-20" key={message.id}>
          <div className="max-w-sm">
            <FlippableStorybookCard
              pages={message.pages || []}
              index={message.index || 0}
            />
          </div>
        </div>
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
      if (message.sender === "AI") {
        // AI Media Upload message - positioned with exact same horizontal gap as AI text messages
        return (
          <div className="absolute bottom-32 left-1/2" key={message.id}>
            <div className="max-w-sm">
              <KidMediaMessage
                images={message.images}
                onImagesUpdate={message.onImagesUpdate}
                onShareCreation={onCreationSharing}
                timestamp={message.timestamp}
                mode="upload"
                align="left"
                className=""
              />
            </div>
          </div>
        );
      } else {
        // Kid Media Upload message - positioned on the right
        return (
          <KidMediaMessage
            key={message.id}
            images={message.images}
            onImagesUpdate={message.onImagesUpdate}
            onShareCreation={message.onShareCreation || onCreationSharing}
            timestamp={message.timestamp}
            mode="upload"
          />
        );
      }
    }

    if (message.type === "kid_media") {
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

    // AI text messages - positioned at companion mouth level
    if (message.sender === "AI") {
      return (
        <div className="absolute bottom-56 left-1/2" key={message.id}>
          <div className="max-w-sm">
            <div className="bg-blue-500 text-white p-3 rounded-2xl rounded-bl-sm shadow-lg relative">
              <p className="text-sm leading-relaxed">{message.content}</p>
              {/* Speech bubble tail */}
              <div className="absolute bottom-0 left-4 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-blue-500 transform translate-y-full"></div>
            </div>
          </div>
        </div>
      );
    }

    // Kid messages - positioned below AI message on the right
    return (
      <div className="absolute bottom-28 right-8" key={message.id}>
        <div className="max-w-xs">
          <div className="bg-green-500 text-white p-3 rounded-2xl rounded-br-sm shadow-lg relative">
            <p className="text-sm leading-relaxed">{message.content}</p>
            {/* Speech bubble tail */}
            <div className="absolute bottom-0 right-4 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-green-500 transform translate-y-full"></div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={`flex flex-col h-full relative ${className}`}>
      {/* Fixed Companion Character grounded on landscape */}
      <div className="absolute bottom-4 left-1/4 transform -translate-x-1/2 z-10 hover:scale-105 transition-transform duration-300">
        <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 relative">
          {/* Magical glow effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400/20 to-pink-400/20 blur-xl animate-pulse"></div>
          {animationData ? (
            <Lottie
              animationData={animationData}
              loop={true}
              autoplay={true}
              className="w-full h-full object-contain drop-shadow-2xl relative z-10"
              style={{
                width: "100%",
                height: "100%",
                filter: "drop-shadow(0 0 20px rgba(255, 255, 255, 0.3))",
              }}
            />
          ) : (
            // Fallback image while loading
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fda24af11bdbb4585b8e6eb6406b2daf9%2F39f348f7483547d18b45c8bfcdc8ad42?format=webp&width=800"
              alt="AI Companion"
              className="w-full h-full object-contain animate-gentle-float drop-shadow-2xl relative z-10"
              style={{
                filter: "drop-shadow(0 0 20px rgba(255, 255, 255, 0.3))",
              }}
            />
          )}
        </div>
        {isAIThinking && (
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm shadow-lg">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <div
                  className="w-2 h-2 bg-white rounded-full animate-pulse"
                  style={{ animationDelay: "0.2s" }}
                ></div>
                <div
                  className="w-2 h-2 bg-white rounded-full animate-pulse"
                  style={{ animationDelay: "0.4s" }}
                ></div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Messages Container - positioned absolutely for precise placement */}
      <div className="relative w-full h-full">
        {/* Latest AI Message - above companion */}
        {latestAI && (
          <div className="animate-slide-in">{renderMessage(latestAI)}</div>
        )}

        {/* Latest Kid Message - on the right */}
        {latestKid && (
          <div className="animate-slide-in">{renderMessage(latestKid)}</div>
        )}

        {/* Default state when no messages */}
        {!latestAI && !latestKid && (
          <div className="absolute bottom-56 left-1/2">
            <div className="max-w-sm">
              <div className="bg-blue-500 text-white p-3 rounded-2xl rounded-bl-sm shadow-lg relative">
                <p className="text-sm leading-relaxed">
                  Hello, brave explorer! 🌟
                  <br />
                  You have already pending challenges. Please finish them first
                  before starting a new one.
                  <br />
                  <br />
                  Excited to see the amazing journey you'll take us on!
                </p>
                {/* Speech bubble tail */}
                <div className="absolute bottom-0 left-4 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-blue-500 transform translate-y-full"></div>
              </div>
            </div>
          </div>
        )}

        {/* Additional Challenge Card when Imagine is clicked */}
        {showMagicalCard && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-slide-in">
            <div className="max-w-md w-full">
              <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white p-4 md:p-6 rounded-3xl shadow-xl border border-white/20 backdrop-blur-sm">
                <h3 className="text-lg md:text-xl font-bold text-center mb-2">
                  Today's Magical Mission!
                </h3>
                <p className="text-sm md:text-base leading-relaxed text-center opacity-90">
                  Help the forest animals organize a surprise party! Gather
                  magical decorations and create the most wonderful celebration
                  the enchanted forest has ever seen! ✨🎉
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export type { ChatMessage };
