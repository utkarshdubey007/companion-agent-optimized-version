import { useState } from "react";
import { SimplifiedChatContainer } from "@/components/SimplifiedChatContainer";
import { ChatInputBox } from "@/components/ChatInputBox";

const HeroSection = () => {
  const [chatMessages, setChatMessages] = useState<any[]>([
    {
      id: "1",
      type: "text" as const,
      sender: "AI" as const,
      content: "It's time to start. Share the beautiful, magical stories and stories.",
      timestamp: new Date(),
    }
  ]);

  const handleSendMessage = (message: string) => {
    // Add user message
    const userMessage = {
      id: Date.now().toString(),
      type: "text" as const,
      sender: "Kid" as const,
      content: message,
      timestamp: new Date(),
    };
    setChatMessages(prev => [...prev, userMessage]);

    // Simulate AI response after a delay
    setTimeout(() => {
      const aiResponse = {
        id: (Date.now() + 1).toString(),
        type: "text" as const,
        sender: "AI" as const,
        content: `Thanks for sharing: "${message}". Let's explore this together!`,
        timestamp: new Date(),
      };
      setChatMessages(prev => [...prev, aiResponse]);
    }, 1500);
  };

  const handleAddAttachment = () => {
    console.log("Add attachment clicked");
    // You can implement file upload functionality here
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-[80vh] px-4 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://cdn.builder.io/api/v1/image/assets%2F0b5ad4e8e5f84db5a19db37317c1643d%2Fdb72aca99fd341bf810b2c50e7d6006a?format=webp&width=800')`,
          backgroundPosition: 'center bottom',
          backgroundSize: 'cover'
        }}
      />

      {/* SimplifiedChatContainer with companion positioned on ground */}
      <div className="relative z-10 w-full h-full">
        <SimplifiedChatContainer
          messages={chatMessages}
          className="w-full h-full"
          isAIThinking={false}
        />
      </div>

      {/* ChatInputBox for chatting */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 w-full max-w-2xl">
        <ChatInputBox
          onSendMessage={handleSendMessage}
          onAddAttachment={handleAddAttachment}
          placeholder="Ask me anything..."
        />
      </div>
    </div>
  );
};

export default HeroSection;
