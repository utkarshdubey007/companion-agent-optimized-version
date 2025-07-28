import { useState } from "react";
import { ChatMessage } from "@/components/ChatMessage";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface SearchChatMessageProps {
  onSearch?: (query: string) => void;
  placeholder?: string;
  className?: string;
}

const SearchChatMessage = ({ 
  onSearch = () => {}, 
  placeholder = "Enter anything...",
  className = ""
}: SearchChatMessageProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    if (searchQuery.trim()) {
      onSearch(searchQuery.trim());
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const searchContent = (
    <div className="space-y-3">
      <div className="text-center mb-3">
        <h3 className="text-base font-bold text-purple-700 mb-1">
          🔍 What would you like to explore?
        </h3>
        <div className="h-0.5 w-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mx-auto" />
      </div>

      <div className="relative">
        <Input
          type="text"
          placeholder={placeholder}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyPress={handleKeyPress}
          className="w-full h-12 pl-4 pr-16 rounded-full border-2 border-orange-300 bg-white text-black placeholder-gray-500 text-sm focus:border-orange-400 focus:ring-2 focus:ring-orange-200"
        />
        <Button 
          onClick={handleSearch}
          className="absolute right-2 top-2 h-8 w-8 bg-orange-400 hover:bg-orange-500 rounded-full p-0 transition-all duration-200 hover:scale-105"
        >
          <svg
            className="w-4 h-4 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </Button>
      </div>

      <div className="flex items-center justify-center gap-2 text-xs text-purple-600">
        <span className="font-semibold">💡</span>
        <span>Try: "storytelling", "creativity", "learning"</span>
      </div>
    </div>
  );

  return (
    <ChatMessage
      role="AI"
      content={searchContent}
      timestamp={new Date()}
      avatar="🔍"
      className={className}
    />
  );
};

export default SearchChatMessage;
