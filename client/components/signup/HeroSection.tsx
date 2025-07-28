import { SimplifiedChatContainer } from "@/components/SimplifiedChatContainer";

const HeroSection = () => {
  // Sample messages for the chat container
  const sampleMessages = [
    {
      id: "1",
      type: "text" as const,
      sender: "AI" as const,
      content: "It's time to start. Share the beautiful, magical stories and stories.",
      timestamp: new Date(),
    }
  ];

  return (
    <div className="relative flex flex-col items-center justify-center min-h-[70vh] px-4">
      {/* Background Landscape */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-green-400 via-yellow-300 to-transparent rounded-t-full transform scale-150 origin-bottom"></div>

      {/* Mountains/Hills */}
      <div className="absolute bottom-16 left-0 right-0 flex justify-center space-x-4">
        <div className="w-32 h-24 bg-green-500 rounded-t-full"></div>
        <div className="w-40 h-32 bg-green-600 rounded-t-full"></div>
        <div className="w-28 h-20 bg-green-400 rounded-t-full"></div>
      </div>

      {/* SimplifiedChatContainer replacing bunny and search */}
      <div className="relative z-10 w-full h-96">
        <SimplifiedChatContainer
          messages={sampleMessages}
          className="w-full h-full"
          isAIThinking={false}
        />
      </div>

      {/* Support Text */}
      <p className="relative z-10 text-white/80 text-sm mt-4">
        <span className="font-semibold">ADULTS</span> can get Support
      </p>
    </div>
  );
};

export default HeroSection;
