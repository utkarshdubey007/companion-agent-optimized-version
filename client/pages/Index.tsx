import {
  Search,
  Mic,
  Plus,
  User,
  ChevronLeft,
  ChevronRight,
  Menu,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import { DualSidebar } from "@/components/DualSidebar";
import { AcceptedChallenges } from "@/components/AcceptedChallenges";
import { CreationsPanel } from "@/components/CreationsPanel";
import { ChatInputBox } from "@/components/ChatInputBox";
import { MagicalChallengeCard } from "@/components/MagicalChallengeCard";
import { ChatContainer } from "@/components/ChatContainer";

export default function Index() {
  const [topSidebarCollapsed, setTopSidebarCollapsed] = useState(true);
  const [bottomSidebarCollapsed, setBottomSidebarCollapsed] = useState(true);
  const [showTopWaveEffect, setShowTopWaveEffect] = useState(false);
  const [showBottomWaveEffect, setShowBottomWaveEffect] = useState(false);
  const [showAcceptedChallenges, setShowAcceptedChallenges] = useState(false);
  const [showCreationsPanel, setShowCreationsPanel] = useState(false);
  const [showMagicalCard, setShowMagicalCard] = useState(false);
  const [showImageCarousel, setShowImageCarousel] = useState(false);
  const [carouselImages, setCarouselImages] = useState<string[]>([]);

  const handleShowCarousel = (images: string[]) => {
    // Create a carousel message in the chat
    const carouselMessage = {
      id: Date.now().toString(),
      type: "carousel" as const,
      sender: "Kid" as const,
      content: `Shared my creation gallery! 🎨`,
      timestamp: new Date(),
      images: images,
    };
    setChatMessages((prev) => [...prev, carouselMessage]);

    // Add AI response
    setTimeout(() => {
      const aiResponse = {
        id: (Date.now() + 1).toString(),
        type: "text" as const,
        sender: "AI" as const,
        content: `Wow! What a beautiful collection! 🌟 I can see you've put so much creativity and heart into these. Each image tells its own special story! Would you like to tell me more about your favorite one? ✨`,
        timestamp: new Date(),
      };
      setChatMessages((prev) => [...prev, aiResponse]);
    }, 1500);
  };
  const [chatMessages, setChatMessages] = useState<any[]>([
    {
      id: "ai-welcome",
      type: "text",
      sender: "AI",
      content:
        "I'm feeling as bright as a sunbeam, ready to embark on new adventures with you. How is your heart today?",
      timestamp: new Date(Date.now() - 300000),
    },
  ]);

  // Auto-expand on page load - top first, then bottom
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
  }, []);

  const toggleTopSidebar = () => {
    setTopSidebarCollapsed(!topSidebarCollapsed);
  };

  const toggleBottomSidebar = () => {
    setBottomSidebarCollapsed(!bottomSidebarCollapsed);
  };

  const handleMenuItemClick = (itemAlt: string) => {
    console.log("Menu item clicked:", itemAlt); // Debug log
    if (itemAlt === "Create") {
      setShowAcceptedChallenges(!showAcceptedChallenges);
    } else if (itemAlt === "Reflect") {
      setShowCreationsPanel(!showCreationsPanel);
    } else if (itemAlt === "Imagine") {
      setShowMagicalCard(!showMagicalCard);
    } else if (itemAlt === "Mood") {
      console.log("Mood button clicked - creating mood message"); // Debug log
      // Add mood selector message
      const moodMessage = {
        id: Date.now().toString(),
        type: "mood" as const,
        sender: "Kid" as const,
        content: "",
        timestamp: new Date(),
        onMoodSubmit: (mood: any) => {
          // Update the mood message to show selected mood
          setChatMessages((prev) =>
            prev.map((msg) =>
              msg.id === moodMessage.id
                ? {
                    ...msg,
                    type: "text" as const,
                    content: `I'm feeling ${mood.name.toLowerCase()} today! ${mood.emoji} ${mood.description}`,
                  }
                : msg,
            ),
          );

          // Add AI response
          setTimeout(() => {
            const aiResponse = {
              id: (Date.now() + 1).toString(),
              type: "text" as const,
              sender: "AI" as const,
              content: `Thank you for sharing that you're feeling ${mood.name.toLowerCase()}! ${mood.emoji} ${
                mood.name === "Happy" || mood.name === "Excited"
                  ? "That's wonderful! Your positive energy is contagious! ✨"
                  : mood.name === "Calm"
                    ? "That's beautiful! Peace and calm are such gifts. 🌸"
                    : mood.name === "Tired"
                      ? "Rest is so important! Take care of yourself. 💤"
                      : mood.name === "Sad" || mood.name === "Worried"
                        ? "It's okay to feel this way sometimes. I'm here if you want to talk about it. 🤗"
                        : mood.name === "Nervous"
                          ? "Feeling nervous is natural! You're braver than you know. 💪"
                          : "Every feeling is valid and important. What would help you feel better today? 🌈"
              }`,
              timestamp: new Date(),
            };
            setChatMessages((prev) => [...prev, aiResponse]);
          }, 1500);
        },
      };
      console.log("Adding mood message to chat:", moodMessage); // Debug log
      setChatMessages((prev) => {
        const updated = [...prev, moodMessage];
        console.log("Updated chat messages:", updated); // Debug log
        return updated;
      });
    }
  };

  const handleAcceptChallenge = () => {
    console.log("Challenge accepted! 🎉");
    // Add kid message accepting the challenge
    const newMessage = {
      id: Date.now().toString(),
      type: "text",
      sender: "Kid",
      content:
        "Yes! I accept this challenge! Let's create something amazing! 🎉",
      timestamp: new Date(),
    };
    setChatMessages((prev) => [...prev, newMessage]);
    setShowMagicalCard(false);
  };

  const handleRegenerateChallenge = () => {
    console.log("Generating new challenge... ✨");
    setShowMagicalCard(false);
    // Simulate a new challenge appearing
    setTimeout(() => {
      setShowMagicalCard(true);
    }, 500);
  };

  const handleChatMore = () => {
    console.log("Opening chat... 💬");
    // Add magical AI challenge message instead of regular text
    const newMessage = {
      id: Date.now().toString(),
      type: "ai_challenge",
      sender: "AI",
      title: "Enchanted Forest Adventure! 🌟",
      description:
        "Help the forest creatures organize a magical birthday party for the wise old owl! Create colorful decorations, plan fun games, and make magical treats that will make this the most wonderful celebration ever! ✨🦉🎂",
      mediaUrl:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=200&fit=crop",
      mediaType: "image",
      timestamp: new Date(),
      onAccept: handleAcceptChallenge,
      onRegenerate: handleRegenerateChallenge,
      onChatMore: () => console.log("Chat more about challenge"),
    };
    setChatMessages((prev) => [...prev, newMessage]);
  };

  // Menu items data for easier mapping
  const topMenuItems = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2Fae5429317afa463b8668d5872bee2cf9%2Fb384d84e1df642dfa4d274ede8768a82?format=webp&width=800",
      alt: "Imagine",
      delay: 0,
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2Fae5429317afa463b8668d5872bee2cf9%2Fc2571e7f678d413eb9a1bd06ea66f8e0?format=webp&width=800",
      alt: "Play",
      delay: 100,
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2Fae5429317afa463b8668d5872bee2cf9%2F1d2408e75472446e89e1c722cc60c5bc?format=webp&width=800",
      alt: "Create",
      delay: 200,
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2Fae5429317afa463b8668d5872bee2cf9%2F7ce4cb9686ab4c8883ffd924942ba7ce?format=webp&width=800",
      alt: "Store",
      delay: 300,
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2Fae5429317afa463b8668d5872bee2cf9%2F9d8d266fb1d04ad69bf3010bc8af2640?format=webp&width=800",
      alt: "Reflect",
      delay: 400,
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2Fae5429317afa463b8668d5872bee2cf9%2Fc4d8103edd924d3a815299efddcbb19f?format=webp&width=800",
      alt: "Reward",
      delay: 500,
    },
  ];

  const bottomMenuItems = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2Fae5429317afa463b8668d5872bee2cf9%2Fc729f16c9d3149d881a210498aef88fe?format=webp&width=800",
      alt: "Mood",
      delay: 0,
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2Fae5429317afa463b8668d5872bee2cf9%2F883c9f12ab684706a3a77d529ef2b3bb?format=webp&width=800",
      alt: "Friends",
      delay: 100,
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2Fae5429317afa463b8668d5872bee2cf9%2F62ae7a5b66d24b6db76a5ce77f234122?format=webp&width=800",
      alt: "Tree",
      delay: 200,
    },
  ];

  // Sample challenges data
  const challenges = [
    {
      id: "1",
      title: "Style your name!",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fae5429317afa463b8668d5872bee2cf9%2Fac9225ba31de444ea69e2ee963f3f976?format=webp&width=800",
      motivationalMessage: "Go for it!",
      progress: 65,
      timeLeft: "6d 22h 39m 21s",
      chatColor: "#FF9500",
      companionIcon: "😊",
      isSelected: false,
    },
    {
      id: "2",
      title: "Everyday Imagination",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fae5429317afa463b8668d5872bee2cf9%2Fc1f47f5b06164bf3bc1fc7a1e8e5e060?format=webp&width=800",
      motivationalMessage: "You got this!",
      progress: 80,
      timeLeft: "3d 10h 24m 12s",
      chatColor: "#FF4757",
      companionIcon: "😡",
      isSelected: false,
    },
    {
      id: "3",
      title: "Design a Game",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fae5429317afa463b8668d5872bee2cf9%2Fd3c553ca967e497fbddf23e326153dea?format=webp&width=800",
      motivationalMessage: "You can do it!",
      progress: 45,
      timeLeft: "1d 22h 10m 00s",
      chatColor: "#FF6B9D",
      companionIcon: "😈",
      isSelected: true,
    },
  ];

  // Sample creations data
  const creations = [
    {
      id: "1",
      title: "Monster Character",
      images: [
        "https://cdn.builder.io/api/v1/image/assets%2Fae5429317afa463b8668d5872bee2cf9%2F63656ed422f24b9c9cd47657e89e2840?format=webp&width=800",
        "https://cdn.builder.io/api/v1/image/assets%2Fae5429317afa463b8668d5872bee2cf9%2Fac9225ba31de444ea69e2ee963f3f976?format=webp&width=800",
      ],
    },
    {
      id: "2",
      title: "Fantasy Landscape",
      images: [
        "https://cdn.builder.io/api/v1/image/assets%2Fae5429317afa463b8668d5872bee2cf9%2Fc1f47f5b06164bf3bc1fc7a1e8e5e060?format=webp&width=800",
      ],
    },
    {
      id: "3",
      title: "Game Design",
      images: [
        "https://cdn.builder.io/api/v1/image/assets%2Fae5429317afa463b8668d5872bee2cf9%2Fd3c553ca967e497fbddf23e326153dea?format=webp&width=800",
        "https://cdn.builder.io/api/v1/image/assets%2Fae5429317afa463b8668d5872bee2cf9%2Fac9225ba31de444ea69e2ee963f3f976?format=webp&width=800",
        "https://cdn.builder.io/api/v1/image/assets%2Fae5429317afa463b8668d5872bee2cf9%2Fc1f47f5b06164bf3bc1fc7a1e8e5e060?format=webp&width=800",
      ],
    },
  ];

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
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Various geometric shapes scattered around */}
        <div className="absolute top-16 left-72 w-4 h-4 bg-orange-accent rounded transform rotate-45"></div>
        <div className="absolute top-32 right-96 w-6 h-6 bg-purple-accent rounded-full"></div>
        <div className="absolute top-48 left-1/4 w-3 h-8 bg-pink-accent transform rotate-12"></div>
        <div className="absolute bottom-72 right-1/4 w-5 h-5 bg-yellow-accent"></div>
        <div className="absolute top-24 right-1/3 w-8 h-3 bg-chat-bubble transform -rotate-12"></div>
        <div className="absolute bottom-48 left-1/3 w-4 h-4 bg-bunny-green rounded-full"></div>
        <div className="absolute top-64 left-1/2 w-2 h-6 bg-orange-accent transform rotate-45"></div>
      </div>

      {/* Top Header */}
      <header className="relative z-10 flex items-center justify-between px-4 md:px-6 py-4">
        <div className="flex items-center gap-3 md:gap-6">
          {/* Builder.io Logo */}
          <div className="w-8 h-8 bg-chat-bubble rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">B</span>
          </div>

          {/* Search Bar */}
          <div className="relative hidden sm:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search branches, treehouses..."
              className="pl-10 w-48 md:w-72 bg-white/10 border-white/20 text-white placeholder:text-gray-300"
            />
          </div>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          {/* Icon buttons */}
          <div className="hidden md:flex items-center gap-2">
            <div className="w-8 h-8 bg-orange-accent rounded-lg"></div>
            <div className="w-8 h-8 bg-bunny-green rounded-lg"></div>
            <div className="w-8 h-8 bg-yellow-accent rounded-lg"></div>
          </div>

          {/* Night Mode Toggle */}
          <div className="hidden lg:flex items-center gap-2 bg-white/10 rounded-full px-3 py-1">
            <span className="text-white text-sm">Night Mode</span>
            <div className="w-8 h-4 bg-white/20 rounded-full relative">
              <div className="w-3 h-3 bg-white rounded-full absolute left-0.5 top-0.5"></div>
            </div>
          </div>

          {/* User Profile */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-gray-600" />
            </div>
            <span className="text-white hidden sm:inline">John</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex h-[calc(100vh-80px)]">
        {/* Dual-Section Sidebar */}
        <DualSidebar
          topMenuItems={topMenuItems}
          bottomMenuItems={bottomMenuItems}
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
          {/* Chat Container */}
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
          <div className="flex-shrink-0 sticky bottom-0 bg-gradient-to-t from-space-bg via-space-bg/90 to-transparent pt-6 pb-4">
            <div className="max-w-2xl mx-auto px-4 md:px-6">
              <ChatInputBox
                placeholder="Ask me anything..."
                onSendMessage={(message) => {
                  // Add kid message
                  const kidMessage = {
                    id: Date.now().toString(),
                    type: "text",
                    sender: "Kid",
                    content: message,
                    timestamp: new Date(),
                  };
                  setChatMessages((prev) => [...prev, kidMessage]);

                  // Simulate AI response after a delay
                  setTimeout(() => {
                    const aiMessage = {
                      id: (Date.now() + 1).toString(),
                      type: "text",
                      sender: "AI",
                      content:
                        "That's a great idea! I love your creativity! ✨ Let me think of something fun we can do with that...",
                      timestamp: new Date(),
                    };
                    setChatMessages((prev) => [...prev, aiMessage]);
                  }, 1500);
                }}
                onAddAttachment={() => {
                  // Create a media upload message
                  const mediaMessage = {
                    id: Date.now().toString(),
                    type: "media",
                    sender: "Kid",
                    content: "",
                    timestamp: new Date(),
                    images: [],
                    onImagesUpdate: (images: string[]) => {
                      setChatMessages((prev) =>
                        prev.map((msg) =>
                          msg.id === mediaMessage.id ? { ...msg, images } : msg,
                        ),
                      );

                      // Create a display message when images are uploaded
                      if (images.length > 0) {
                        // Replace upload message with display message
                        setChatMessages((prev) =>
                          prev.map((msg) =>
                            msg.id === mediaMessage.id
                              ? {
                                  ...msg,
                                  type: "image_display",
                                  images: images,
                                  content: `Shared ${images.length} picture${images.length > 1 ? "s" : ""}! 📸`,
                                }
                              : msg,
                          ),
                        );

                        setTimeout(() => {
                          const aiResponse = {
                            id: (Date.now() + 1).toString(),
                            type: "text",
                            sender: "AI",
                            content: `Wow! ${images.length === 1 ? "That's a beautiful picture" : `Those are ${images.length} amazing pictures`}! 🌟 I love your creativity! Tell me more about ${images.length === 1 ? "it" : "them"} - what inspired you to create ${images.length === 1 ? "this" : "these"}? ✨`,
                            timestamp: new Date(),
                          };
                          setChatMessages((prev) => [...prev, aiResponse]);
                        }, 1500);
                      }
                    },
                  };
                  setChatMessages((prev) => [...prev, mediaMessage]);
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Accepted Challenges Component - Show only when Create is clicked */}
      {showAcceptedChallenges && <AcceptedChallenges challenges={challenges} />}

      {/* Creations Panel Component - Show only when Reflect is clicked */}
      {showCreationsPanel && <CreationsPanel creations={creations} />}
    </div>
  );
}
