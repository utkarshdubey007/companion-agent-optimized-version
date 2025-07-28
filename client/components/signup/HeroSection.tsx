import { useState } from "react";
import { SimplifiedChatContainer } from "@/components/SimplifiedChatContainer";
import SearchChatMessage from "./SearchChatMessage";

const HeroSection = () => {
  const [searchResults, setSearchResults] = useState<string[]>([]);
  const [hasSearched, setHasSearched] = useState(false);

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

  const handleSearch = (query: string) => {
    console.log("Searching for:", query);
    setHasSearched(true);
    // Simulate search results
    const mockResults = [
      `Creative stories about ${query}`,
      `Educational content for ${query}`,
      `Interactive activities with ${query}`,
    ];
    setSearchResults(mockResults);
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-[70vh] px-4">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://cdn.builder.io/api/v1/image/assets%2F0b5ad4e8e5f84db5a19db37317c1643d%2Fdb72aca99fd341bf810b2c50e7d6006a?format=webp&width=800')`,
          backgroundPosition: 'center bottom',
          backgroundSize: 'cover'
        }}
      />

      {/* SimplifiedChatContainer with companion */}
      <div className="relative z-10 w-full h-96 mb-8">
        <SimplifiedChatContainer
          messages={sampleMessages}
          className="w-full h-full"
          isAIThinking={false}
        />
      </div>

      {/* Search using ChatMessage */}
      <div className="relative z-10 w-full max-w-md mb-4">
        <SearchChatMessage
          onSearch={handleSearch}
          placeholder="Search for stories, activities, or topics..."
        />
      </div>

      {/* Search Results */}
      {hasSearched && searchResults.length > 0 && (
        <div className="relative z-10 w-full max-w-md mb-4">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/20">
            <h4 className="text-sm font-bold text-purple-700 mb-2">Search Results:</h4>
            <ul className="space-y-2">
              {searchResults.map((result, index) => (
                <li
                  key={index}
                  className="text-sm text-gray-700 p-2 bg-purple-50 rounded-lg hover:bg-purple-100 cursor-pointer transition-colors"
                >
                  {result}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Support Text */}
      <p className="relative z-10 text-white/80 text-sm">
        <span className="font-semibold">ADULTS</span> can get Support
      </p>
    </div>
  );
};

export default HeroSection;
