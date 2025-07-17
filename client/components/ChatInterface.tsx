import { useState } from "react";
import { ChatBox, Message, TextMessage, ChallengeMessage } from "./ChatBox";
import { ChatInputBox } from "./ChatInputBox";

interface ChatInterfaceProps {
  className?: string;
  isVisible?: boolean;
}

export function ChatInterface({
  className = "",
  isVisible = true,
}: ChatInterfaceProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "text",
      sender: "ai",
      content:
        "Hello there, brave adventurer! I'm your magical companion, ready to help you on amazing quests and creative journeys! What would you like to explore today?",
      header: "Hey there, Explorer! 👋",
      footer: "Ready for some magic?",
      timestamp: new Date(Date.now() - 300000), // 5 minutes ago
    },
    {
      id: "2",
      type: "text",
      sender: "kid",
      content: "Hi! I want to create something cool! Can you help me?",
      timestamp: new Date(Date.now() - 240000), // 4 minutes ago
    },
    {
      id: "3",
      type: "challenge",
      sender: "ai",
      title: "Design Your Dream Castle! 🏰",
      description:
        "Let's build the most amazing castle ever! Design towers, drawbridges, and magical rooms. What will make your castle special? Maybe a dragon landing pad or a rainbow slide? ✨",
      mediaUrl:
        "https://cdn.builder.io/api/v1/image/assets%2Fae5429317afa463b8668d5872bee2cf9%2F63656ed422f24b9c9cd47657e89e2840?format=webp&width=800",
      mediaType: "image" as const,
      timestamp: new Date(Date.now() - 120000), // 2 minutes ago
      onAccept: () => {
        handleAcceptChallenge("Design Your Dream Castle! 🏰");
      },
      onRegenerate: () => {
        handleRegenerateChallenge();
      },
      onChatMore: () => {
        handleChatMore();
      },
    },
  ]);

  const handleSendMessage = (messageContent: string) => {
    const newMessage: TextMessage = {
      id: Date.now().toString(),
      type: "text",
      sender: "kid",
      content: messageContent,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, newMessage]);

    // Simulate AI response after a delay
    setTimeout(() => {
      const aiResponse: TextMessage = {
        id: (Date.now() + 1).toString(),
        type: "text",
        sender: "ai",
        content:
          "That's a fantastic idea! I love your creativity! 🌟 Let me think of something fun we can do with that...",
        header: "Amazing! ✨",
        footer: "Let's make it happen!",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiResponse]);
    }, 1500);
  };

  const handleAcceptChallenge = (challengeTitle: string) => {
    const newMessage: TextMessage = {
      id: Date.now().toString(),
      type: "text",
      sender: "kid",
      content: `I accept the ${challengeTitle} challenge! Let's do this! 🎉`,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, newMessage]);

    // AI response
    setTimeout(() => {
      const aiResponse: TextMessage = {
        id: (Date.now() + 1).toString(),
        type: "text",
        sender: "ai",
        content:
          "Woohoo! That's the spirit! 🎉 Let's start creating your amazing castle. What's the first thing you want to add?",
        header: "Challenge Accepted! 🏆",
        footer: "Time to create magic!",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiResponse]);
    }, 1000);
  };

  const handleRegenerateChallenge = () => {
    const challenges = [
      {
        title: "Magical Garden Adventure! 🌸",
        description:
          "Create an enchanted garden where flowers sing and butterflies paint rainbows! Design magical plants that can grant wishes and hidden fairy houses! ✨🧚‍♀️",
      },
      {
        title: "Space Explorer Mission! 🚀",
        description:
          "Build your own rocket ship and explore alien planets! Meet friendly space creatures and discover cosmic treasures! What alien friends will you make? 👽⭐",
      },
      {
        title: "Underwater Kingdom Quest! 🐠",
        description:
          "Dive deep into the ocean and design an underwater city! Create homes for mermaids, dolphins, and talking fish! What treasures will you find? 🏛️💎",
      },
    ];

    const randomChallenge =
      challenges[Math.floor(Math.random() * challenges.length)];

    const newChallenge: ChallengeMessage = {
      id: Date.now().toString(),
      type: "challenge",
      sender: "ai",
      title: randomChallenge.title,
      description: randomChallenge.description,
      mediaUrl:
        "https://cdn.builder.io/api/v1/image/assets%2Fae5429317afa463b8668d5872bee2cf9%2F63656ed422f24b9c9cd47657e89e2840?format=webp&width=800",
      mediaType: "image" as const,
      timestamp: new Date(),
      onAccept: () => handleAcceptChallenge(randomChallenge.title),
      onRegenerate: () => handleRegenerateChallenge(),
      onChatMore: () => handleChatMore(),
    };

    setMessages((prev) => [...prev, newChallenge]);
  };

  const handleChatMore = () => {
    const newMessage: TextMessage = {
      id: Date.now().toString(),
      type: "text",
      sender: "ai",
      content:
        "I'm here to help you with anything! You can ask me about the challenge, get creative tips, or just chat about what you're thinking. What's on your mind? 🤔💭",
      header: "Let's Chat! 💬",
      footer: "I'm all ears!",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, newMessage]);
  };

  const handleAddAttachment = () => {
    // Simulate file upload
    const fileMessage = {
      id: Date.now().toString(),
      type: "file" as const,
      sender: "kid" as const,
      fileName: "my_drawing.jpg",
      fileUrl:
        "https://cdn.builder.io/api/v1/image/assets%2Fae5429317afa463b8668d5872bee2cf9%2F63656ed422f24b9c9cd47657e89e2840?format=webp&width=800",
      fileType: "image" as const,
      fileSize: "2.5 MB",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, fileMessage]);

    // AI response to file
    setTimeout(() => {
      const aiResponse: TextMessage = {
        id: (Date.now() + 1).toString(),
        type: "text",
        sender: "ai",
        content:
          "Wow! That's an incredible drawing! I love the colors and creativity you put into it! 🎨 What inspired you to create this masterpiece?",
        header: "Amazing Artwork! 🎨",
        footer: "You're so talented!",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiResponse]);
    }, 1500);
  };

  if (!isVisible) return null;

  return (
    <div
      className={`flex flex-col h-full bg-gradient-to-b from-purple-50 to-pink-50 rounded-3xl shadow-2xl border border-purple-100 overflow-hidden ${className}`}
    >
      {/* Chat Header */}
      <div className="bg-gradient-to-r from-purple-400 to-pink-400 p-4 text-white">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
            <span className="text-xl">🧙‍♂️</span>
          </div>
          <div>
            <h2 className="font-bold text-lg">Magic Chat</h2>
            <p className="text-sm opacity-90">Your AI Adventure Companion</p>
          </div>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 min-h-0">
        <ChatBox
          messages={messages}
          onSendMessage={handleSendMessage}
          className="h-full"
        />
      </div>

      {/* Input Area */}
      <div className="p-4 bg-white/50 border-t border-purple-100">
        <ChatInputBox
          placeholder="Tell me your ideas..."
          onSendMessage={handleSendMessage}
          onAddAttachment={handleAddAttachment}
        />
      </div>
    </div>
  );
}
