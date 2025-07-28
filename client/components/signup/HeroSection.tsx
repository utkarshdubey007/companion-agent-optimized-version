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
          messages={sampleMessages}
          className="w-full h-full"
          isAIThinking={false}
        />
      </div>
    </div>
  );
};

export default HeroSection;
