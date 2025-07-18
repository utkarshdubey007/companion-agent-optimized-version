import { Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import { DualSidebar } from "@/components/DualSidebar";
import { AcceptedChallenges } from "@/components/AcceptedChallenges";
import { CreationsPanel } from "@/components/CreationsPanel";
import { ChatInputBox } from "@/components/ChatInputBox";
import { ChatContainer } from "@/components/ChatContainer";
import { AppHeader } from "@/components/AppHeader";
import { FloatingShapes } from "@/components/FloatingShapes";
import CompanionSelector from "@/components/CompanionSelector";
import { useChatState } from "@/hooks/useChatState";
import { usePageState } from "@/hooks/usePageState";
import { menuItemsData, challengesData, creationsData } from "@/data/appData";

export default function Index() {
  // Page state management
  const {
    topSidebarCollapsed,
    setTopSidebarCollapsed,
    bottomSidebarCollapsed,
    setBottomSidebarCollapsed,
    showTopWaveEffect,
    setShowTopWaveEffect,
    showBottomWaveEffect,
    setShowBottomWaveEffect,
    showAcceptedChallenges,
    setShowAcceptedChallenges,
    showCreationsPanel,
    setShowCreationsPanel,
    showMagicalCard,
    setShowMagicalCard,
  } = usePageState();

  // Companion selector state
  const [showCompanionSelector, setShowCompanionSelector] = useState(false);
  const [selectedCompanion, setSelectedCompanion] = useState(null);

  // Chat state management
  const {
    chatMessages,
    setChatMessages,
    handleShowCarousel,
    handleAcceptChallenge,
    handleRegenerateChallenge,
    handleChatMore,
    handleSendMessage,
    handleAddAttachment,
  } = useChatState();

  // Auto-expand sidebars on page load
  useEffect(() => {
    const topTimer = setTimeout(() => {
      setTopSidebarCollapsed(false);
      setShowTopWaveEffect(true);
    }, 500);

    const bottomTimer = setTimeout(() => {
      setBottomSidebarCollapsed(false);
      setShowBottomWaveEffect(true);
    }, 1200);

    return () => {
      clearTimeout(topTimer);
      clearTimeout(bottomTimer);
    };
  }, [
    setTopSidebarCollapsed,
    setShowTopWaveEffect,
    setBottomSidebarCollapsed,
    setShowBottomWaveEffect,
  ]);

  // Add sample storybook with multiple reflections
  useEffect(() => {
    const addStorybookReflections = () => {
      const sampleReflections = [
        {
          imageUrl:
            "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop",
          reflection:
            "Wow! I can see a beautiful rainbow painting! The colors are so bright and cheerful - red, orange, yellow, green, blue, and purple all dancing together. It makes me feel happy and excited, like there's magic in the air! ✨",
          badgeTitle: "Rainbow Master!",
          aiAvatarUrl:
            "https://cdn.builder.io/api/v1/image/assets%2Fae5429317afa463b8668d5872bee2cf9%2F2f140743f61a4813a678c882959815ff?format=webp&width=800",
        },
        {
          imageUrl:
            "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
          reflection:
            "Look at this amazing cat drawing! I love how you made the whiskers so long and the eyes so big and sparkly. The cat looks so friendly and playful - I bet it would love to chase butterflies in a sunny garden! 🐱",
          badgeTitle: "Animal Artist!",
          aiAvatarUrl:
            "https://cdn.builder.io/api/v1/image/assets%2Fae5429317afa463b8668d5872bee2cf9%2Fb739432197b34209a365cd0320ed09a4?format=webp&width=800",
        },
        {
          imageUrl:
            "https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?w=400&h=300&fit=crop",
          reflection:
            "This space adventure drawing is incredible! I can see rockets flying to distant planets with stars twinkling all around. The astronaut looks so brave and ready for an amazing journey through the galaxy! 🚀",
          badgeTitle: "Space Explorer!",
          aiAvatarUrl:
            "https://cdn.builder.io/api/v1/image/assets%2Fae5429317afa463b8668d5872bee2cf9%2F408758d5b0f24a8ab1fe3ac5b8489720?format=webp&width=800",
        },
        {
          imageUrl:
            "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=300&fit=crop",
          reflection:
            "What a magical flower garden! I see so many different colors - pink roses, yellow sunflowers, and purple violets all growing together. The butterflies dancing around them make it look like a fairy tale! 🌸",
          badgeTitle: "Garden Wizard!",
          aiAvatarUrl:
            "https://cdn.builder.io/api/v1/image/assets%2Fae5429317afa463b8668d5872bee2cf9%2Ff22c539957df4cf1b810be45844442be?format=webp&width=800",
        },
        {
          imageUrl:
            "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
          reflection:
            "I love this underwater world you've created! The fish are swimming in such beautiful patterns, and the coral looks like a magical castle. I can almost hear the gentle sound of the ocean waves! 🌊",
          badgeTitle: "Ocean Dreamer!",
          aiAvatarUrl:
            "https://cdn.builder.io/api/v1/image/assets%2Fae5429317afa463b8668d5872bee2cf9%2Fd477fa3ace324c9aafc5275df782584f?format=webp&width=800",
        },
      ];

      const storybookMessage = {
        id: "storybook-1",
        type: "storybook",
        sender: "Kid",
        reflections: sampleReflections,
        timestamp: new Date(Date.now() - 120000),
        onReactionClick: (reaction, reflection) => {
          console.log(
            "Reaction clicked:",
            reaction,
            "for reflection:",
            reflection,
          );
        },
        index: 0,
      };

      setChatMessages((prev) => [...prev, storybookMessage]);
    };

    // Start adding storybook after initial setup
    const storybookTimer = setTimeout(addStorybookReflections, 3000);

    return () => clearTimeout(storybookTimer);
  }, [setChatMessages]);

  // Sidebar toggle handlers
  const toggleTopSidebar = () => {
    setTopSidebarCollapsed(!topSidebarCollapsed);
  };

  const toggleBottomSidebar = () => {
    setBottomSidebarCollapsed(!bottomSidebarCollapsed);
  };

  // Menu item click handler
  const handleMenuItemClick = (itemAlt) => {
    console.log("Menu item clicked:", itemAlt);
    if (itemAlt === "Play") {
      handleChatMore();
    } else if (itemAlt === "Create") {
      setShowAcceptedChallenges(!showAcceptedChallenges);
    } else if (itemAlt === "Reflect") {
      setShowCreationsPanel(!showCreationsPanel);
    } else if (itemAlt === "Imagine") {
      handleSendMessage();
    } else if (itemAlt === "Friends") {
      console.log("Friends button clicked! Opening companion selector...");
      setShowCompanionSelector(true);
    } else if (itemAlt === "Mood") {
      console.log("Mood button clicked - creating mood message");

      const moodMessage = {
        id: Date.now().toString(),
        type: "mood",
        sender: "Kid",
        content: "",
        timestamp: new Date(),
        onMoodSubmit: (mood) => {
          setChatMessages((prev) =>
            prev.map((msg) =>
              msg.id === moodMessage.id
                ? {
                    ...msg,
                    type: "text",
                    content: `I'm feeling ${mood.name.toLowerCase()} today! ${mood.emoji} ${mood.description}`,
                  }
                : msg,
            ),
          );

          setTimeout(() => {
            const aiResponse = {
              id: (Date.now() + 1).toString(),
              type: "text",
              sender: "AI",
              content: generateMoodResponse(mood),
              timestamp: new Date(),
            };
            setChatMessages((prev) => [...prev, aiResponse]);
          }, 1500);
        },
      };

      setChatMessages((prev) => [...prev, moodMessage]);
    } else if (itemAlt === "Store") {
      handleAddAttachment();
    }
  };

  // Generate AI response based on mood
  const generateMoodResponse = (mood) => {
    const responses = {
      Happy: "That's wonderful! Your positive energy is contagious! ✨",
      Excited: "That's wonderful! Your positive energy is contagious! ✨",
      Calm: "That's beautiful! Peace and calm are such gifts. 🌸",
      Tired: "Rest is so important! Take care of yourself. 💤",
      Sad: "It's okay to feel this way sometimes. I'm here if you want to talk about it. 🤗",
      Worried:
        "It's okay to feel this way sometimes. I'm here if you want to talk about it. 🤗",
      Nervous: "Feeling nervous is natural! You're braver than you know. 💪",
      Bored:
        "Every feeling is valid and important. What would help you feel better today? 🌈",
    };

    return `Thank you for sharing that you're feeling ${mood.name.toLowerCase()}! ${mood.emoji} ${
      responses[mood.name] ||
      "Every feeling is valid and important. What would help you feel better today? 🌈"
    }`;
  };

  // Companion selector handlers
  const handleCompanionSelect = (companion) => {
    setSelectedCompanion(companion);
    setShowCompanionSelector(false);

    // Add a magical message to the chat
    const companionMessage = {
      id: Date.now().toString(),
      type: "text",
      sender: "AI",
      content: `✨ Welcome to our magical adventure! You've chosen ${companion.name} as your companion. ${companion.description} Let's explore together! 🌟`,
      timestamp: new Date(),
    };

    setChatMessages((prev) => [...prev, companionMessage]);
  };

  const handleCompanionClose = () => {
    setShowCompanionSelector(false);
  };

  return (
    <div
      className="min-h-screen bg-space-bg relative overflow-hidden"
      style={{
        backgroundImage: `url('https://cdn.builder.io/api/v1/image/assets%2Fae5429317afa463b8668d5872bee2cf9%2Fb05ebce3ebe54ebeaa6fe5297c022bd3?format=webp&width=800')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {!showCompanionSelector && <FloatingShapes />}

      <AppHeader />

      {/* Main Content */}
      <div className="flex h-[calc(100vh-80px)]">
        <DualSidebar
          topMenuItems={menuItemsData.top}
          bottomMenuItems={menuItemsData.bottom}
          topSidebarCollapsed={topSidebarCollapsed}
          bottomSidebarCollapsed={bottomSidebarCollapsed}
          showTopWaveEffect={showTopWaveEffect}
          showBottomWaveEffect={showBottomWaveEffect}
          toggleTopSidebar={toggleTopSidebar}
          toggleBottomSidebar={toggleBottomSidebar}
          onMenuItemClick={handleMenuItemClick}
        />

        {/* Center Content Area - Chat Interface */}
        <div className="flex-1 relative flex flex-col">
          <div className="flex-1 flex flex-col max-w-4xl mx-auto w-full px-4 pt-6 min-h-0">
            <ChatContainer
              messages={chatMessages}
              showMagicalCard={showMagicalCard}
              onAcceptChallenge={handleAcceptChallenge}
              onRegenerateChallenge={handleRegenerateChallenge}
              onChatMore={handleChatMore}
              onShowCarousel={handleShowCarousel}
              className="flex-1 min-h-0"
            />
          </div>

          {/* Fixed Input Box at Bottom */}
          <div className="flex-shrink-0 sticky bottom-0 pt-6 pb-4">
            <div className="max-w-2xl mx-auto px-4 md:px-6">
              <ChatInputBox
                placeholder="Ask me anything..."
                onSendMessage={handleSendMessage}
                onAddAttachment={handleAddAttachment}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Modals and Overlays */}
      {showAcceptedChallenges && (
        <AcceptedChallenges challenges={challengesData} />
      )}
      {showCreationsPanel && <CreationsPanel creations={creationsData} />}
      {/* Companion Selector Modal */}
      {showCompanionSelector && (
        <CompanionSelector
          onSelect={handleCompanionSelect}
          onClose={handleCompanionClose}
        />
      )}
    </div>
  );
}
