import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const SearchSection = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      {/* Search Input Section */}
      <div className="relative z-10 w-full max-w-md mb-4">
        <div className="relative">
          <Input
            type="text"
            placeholder="Enter anything..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-14 pl-4 pr-16 rounded-full border-2 border-orange-300 bg-white text-black placeholder-gray-500 text-lg"
          />
          <Button className="absolute right-2 top-2 h-10 w-10 bg-orange-400 hover:bg-orange-500 rounded-full p-0">
            <svg
              className="w-5 h-5 text-white"
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
      </div>

      {/* Support Text */}
      <p className="relative z-10 text-white/80 text-sm">
        <span className="font-semibold">ADULTS</span> can get Support
      </p>
    </>
  );
};

export default SearchSection;
