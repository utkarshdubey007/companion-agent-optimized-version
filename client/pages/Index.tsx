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
import { ChatInterface } from "@/components/ChatInterface";

export default function Index() {
  const [topSidebarCollapsed, setTopSidebarCollapsed] = useState(true);
  const [bottomSidebarCollapsed, setBottomSidebarCollapsed] = useState(true);
  const [showTopWaveEffect, setShowTopWaveEffect] = useState(false);
  const [showBottomWaveEffect, setShowBottomWaveEffect] = useState(false);
  const [showAcceptedChallenges, setShowAcceptedChallenges] = useState(false);
  const [showCreationsPanel, setShowCreationsPanel] = useState(false);
  const [showMagicalCard, setShowMagicalCard] = useState(false);
  const [showChatInterface, setShowChatInterface] = useState(false);

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
    if (itemAlt === "Create") {
      setShowAcceptedChallenges(!showAcceptedChallenges);
    } else if (itemAlt === "Reflect") {
      setShowCreationsPanel(!showCreationsPanel);
    } else if (itemAlt === "Imagine") {
      setShowMagicalCard(!showMagicalCard);
    } else if (itemAlt === "Play") {
      setShowChatInterface(!showChatInterface);
    }
  };

  const handleAcceptChallenge = () => {
    console.log("Challenge accepted! 🎉");
    setShowMagicalCard(false);
    // You can add more logic here, like navigating to a challenge page
  };

  const handleRegenerateChallenge = () => {
    console.log("Generating new challenge... ✨");
    // Add logic to generate a new challenge
  };

  const handleChatMore = () => {
    console.log("Opening chat... 💬");
    // Add logic to open chat interface
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

        {/* Center Content Area */}
        <div className="flex-1 relative flex flex-col items-center justify-center px-4">
          {/* Dialogue with Lexicb Badge */}
          <div className="absolute top-8 md:top-12 bg-orange-accent text-white px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium">
            Dialogue with Lexicb
          </div>

          {/* Chat Bubble */}
          <div className="absolute top-20 md:top-32 left-1/2 transform -translate-x-1/2 max-w-xs md:max-w-md px-4">
            <div className="bg-chat-bubble text-white p-3 md:p-4 rounded-2xl rounded-bl-sm relative">
              <p className="text-xs md:text-sm leading-relaxed">
                Let's make some fun art together. What if the world was a
                peaceful place, let's start creating!
              </p>
            </div>
          </div>

          {/* Green Bunny Character */}
          <div className="mt-16 md:mt-24">
            <svg
              width="80"
              height="80"
              viewBox="0 0 120 120"
              className="drop-shadow-lg md:w-[120px] md:h-[120px]"
            >
              <g>
                {/* Bunny body */}
                <ellipse cx="60" cy="75" rx="35" ry="30" fill="#00ff7f" />

                {/* Bunny head */}
                <circle cx="60" cy="45" r="25" fill="#00ff7f" />

                {/* Bunny ears */}
                <ellipse
                  cx="50"
                  cy="25"
                  rx="8"
                  ry="20"
                  fill="#00ff7f"
                  transform="rotate(-20 50 25)"
                />
                <ellipse
                  cx="70"
                  cy="25"
                  rx="8"
                  ry="20"
                  fill="#00ff7f"
                  transform="rotate(20 70 25)"
                />

                {/* Inner ears */}
                <ellipse
                  cx="50"
                  cy="28"
                  rx="4"
                  ry="12"
                  fill="#00d65f"
                  transform="rotate(-20 50 28)"
                />
                <ellipse
                  cx="70"
                  cy="28"
                  rx="4"
                  ry="12"
                  fill="#00d65f"
                  transform="rotate(20 70 28)"
                />

                {/* Eyes */}
                <circle cx="52" cy="42" r="4" fill="white" />
                <circle cx="68" cy="42" r="4" fill="white" />
                <circle cx="52" cy="42" r="2" fill="black" />
                <circle cx="68" cy="42" r="2" fill="black" />

                {/* Nose */}
                <ellipse cx="60" cy="50" rx="2" ry="1" fill="#00d65f" />

                {/* Mouth */}
                <path
                  d="M 58 53 Q 60 55 62 53"
                  stroke="#00d65f"
                  strokeWidth="1.5"
                  fill="none"
                />

                {/* Arms */}
                <ellipse cx="35" cy="65" rx="10" ry="18" fill="#00ff7f" />
                <ellipse cx="85" cy="65" rx="10" ry="18" fill="#00ff7f" />

                {/* Legs */}
                <ellipse cx="48" cy="95" rx="8" ry="15" fill="#00ff7f" />
                <ellipse cx="72" cy="95" rx="8" ry="15" fill="#00ff7f" />
              </g>
            </svg>
          </div>

          {/* Magical Challenge Card - Show when Imagine is clicked */}
          {showMagicalCard && (
            <div className="mt-8 md:mt-12">
              <MagicalChallengeCard
                title="Today's Magical Mission!"
                description="Help the forest animals organize a surprise party! Gather magical decorations and create the most wonderful celebration the enchanted forest has ever seen! ✨🎉"
                mediaUrl="https://cdn.builder.io/api/v1/image/assets%2Fae5429317afa463b8668d5872bee2cf9%2F63656ed422f24b9c9cd47657e89e2840?format=webp&width=800"
                mediaType="image"
                onAccept={handleAcceptChallenge}
                onRegenerate={handleRegenerateChallenge}
                onChatMore={handleChatMore}
                isVisible={showMagicalCard}
              />
            </div>
          )}

          {/* Bottom Input Section */}
          <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 w-full max-w-2xl px-4 md:px-6">
            <ChatInputBox
              placeholder="Ask me anything..."
              onSendMessage={(message) =>
                console.log("Sending message:", message)
              }
              onAddAttachment={() => console.log("Add attachment clicked")}
            />
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
