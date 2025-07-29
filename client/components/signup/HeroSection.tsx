import { useState } from "react";
import { SignupChatContainer } from "./SignupChatContainer";
import { SignupChatInput } from "./SignupChatInput";
import { HeaderActions } from "./HeaderActions";

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



  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: `url('https://cdn.builder.io/api/v1/image/assets%2F0b5ad4e8e5f84db5a19db37317c1643d%2Fdb72aca99fd341bf810b2c50e7d6006a?format=webp&width=800')`,
          backgroundPosition: 'center center',
          backgroundSize: 'cover'
        }}
      />

      {/* SignupChatContainer with companion centered */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        <SignupChatContainer
          messages={chatMessages}
          className="w-full h-full"
          isAIThinking={false}
        />
      </div>

      {/* SignupChatInput for chatting */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 w-full max-w-2xl px-4">
        <SignupChatInput
          onSendMessage={handleSendMessage}
          placeholder="Ask me anything..."
        />
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="flex flex-col items-center text-white/80">
          <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
          <svg
            className="w-4 h-4 mt-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
