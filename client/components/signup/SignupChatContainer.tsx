import { useState, useEffect } from "react";
import Lottie from "lottie-react";

interface ChatMessage {
  id: string;
  type: "text" | "system";
  sender: "AI" | "Kid";
  content?: string;
  timestamp: Date;
}

interface SignupChatContainerProps {
  messages: ChatMessage[];
  className?: string;
  isAIThinking?: boolean;
}

export function SignupChatContainer({
  messages,
  className = "",
  isAIThinking = false,
}: SignupChatContainerProps) {
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
    // AI text messages - positioned at companion mouth level
    if (message.sender === "AI") {
      return (
        <div className="absolute bottom-32 left-1/4 transform translate-x-16" key={message.id}>
          <div className="max-w-sm">
            <div className="bg-blue-500 text-white p-3 rounded-2xl rounded-bl-sm shadow-lg relative">
              <p className="text-sm leading-relaxed">{message.content}</p>
              {/* Speech bubble tail pointing to companion */}
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
      {/* Fixed Companion Character on left side above chat input and on ground */}
      <div className="absolute bottom-24 left-1/4 transform -translate-x-1/2 z-10 hover:scale-105 transition-transform duration-300">
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
          <div className="absolute bottom-32 left-1/4 transform translate-x-16">
            <div className="max-w-sm">
              <div className="bg-blue-500 text-white p-3 rounded-2xl rounded-bl-sm shadow-lg relative">
                <p className="text-sm leading-relaxed">
                  Hello, brave explorer! 🌟
                  <br />
                  Welcome to TaleTree! Share your magical stories and ideas with me.
                  <br />
                  <br />
                  Let's create something amazing together!
                </p>
                {/* Speech bubble tail pointing to companion */}
                <div className="absolute bottom-0 left-4 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-blue-500 transform translate-y-full"></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export type { ChatMessage };
