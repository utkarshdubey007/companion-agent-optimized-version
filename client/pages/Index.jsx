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
      <FloatingShapes />

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
