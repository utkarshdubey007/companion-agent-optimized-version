import { Search, Mic, Plus, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Index() {
  return (
    <div className="min-h-screen bg-space-bg relative overflow-hidden">
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
        {/* Left Sidebar */}
        <div className="w-12 md:w-16 flex flex-col items-center py-4 md:py-6 gap-3 md:gap-4">
          {/* Imagine */}
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden cursor-pointer hover:scale-110 transition-transform">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fae5429317afa463b8668d5872bee2cf9%2Fb384d84e1df642dfa4d274ede8768a82?format=webp&width=800"
              alt="Imagine"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Play */}
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden cursor-pointer hover:scale-110 transition-transform">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fae5429317afa463b8668d5872bee2cf9%2Fc2571e7f678d413eb9a1bd06ea66f8e0?format=webp&width=800"
              alt="Play"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Create */}
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden cursor-pointer hover:scale-110 transition-transform">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fae5429317afa463b8668d5872bee2cf9%2F1d2408e75472446e89e1c722cc60c5bc?format=webp&width=800"
              alt="Create"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Store */}
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden cursor-pointer hover:scale-110 transition-transform">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fae5429317afa463b8668d5872bee2cf9%2F7ce4cb9686ab4c8883ffd924942ba7ce?format=webp&width=800"
              alt="Store"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Reflect */}
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden cursor-pointer hover:scale-110 transition-transform">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fae5429317afa463b8668d5872bee2cf9%2F9d8d266fb1d04ad69bf3010bc8af2640?format=webp&width=800"
              alt="Reflect"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Reward */}
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden cursor-pointer hover:scale-110 transition-transform">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fae5429317afa463b8668d5872bee2cf9%2Fc4d8103edd924d3a815299efddcbb19f?format=webp&width=800"
              alt="Reward"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Mood */}
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden cursor-pointer hover:scale-110 transition-transform hidden sm:block">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fae5429317afa463b8668d5872bee2cf9%2Fc729f16c9d3149d881a210498aef88fe?format=webp&width=800"
              alt="Mood"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Friends */}
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden cursor-pointer hover:scale-110 transition-transform hidden md:block">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fae5429317afa463b8668d5872bee2cf9%2F883c9f12ab684706a3a77d529ef2b3bb?format=webp&width=800"
              alt="Friends"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Tree */}
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden cursor-pointer hover:scale-110 transition-transform hidden lg:block">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fae5429317afa463b8668d5872bee2cf9%2F62ae7a5b66d24b6db76a5ce77f234122?format=webp&width=800"
              alt="Tree"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

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

          {/* Landscape Elements */}
          <div className="absolute bottom-0 left-0 right-0 h-48">
            {/* Ground/Hills */}
            <svg viewBox="0 0 1200 200" className="w-full h-full">
              <defs>
                <linearGradient
                  id="groundGradient"
                  x1="0%"
                  y1="0%"
                  x2="0%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#FFD700" />
                  <stop offset="100%" stopColor="#FFA500" />
                </linearGradient>
              </defs>

              {/* Golden ground */}
              <path
                d="M 0 120 Q 300 100 600 120 T 1200 130 L 1200 200 L 0 200 Z"
                fill="url(#groundGradient)"
              />

              {/* Green hills background */}
              <path
                d="M 0 140 Q 200 120 400 130 Q 600 125 800 135 Q 1000 130 1200 140 L 1200 200 L 0 200 Z"
                fill="#228B22"
              />

              {/* Trees */}
              <g>
                {/* Tree 1 */}
                <ellipse cx="100" cy="130" rx="25" ry="30" fill="#32CD32" />
                <ellipse cx="90" cy="135" rx="20" ry="25" fill="#228B22" />
                <ellipse cx="110" cy="135" rx="20" ry="25" fill="#228B22" />

                {/* Tree 2 */}
                <ellipse cx="300" cy="125" rx="30" ry="35" fill="#32CD32" />
                <ellipse cx="285" cy="130" rx="25" ry="30" fill="#228B22" />
                <ellipse cx="315" cy="130" rx="25" ry="30" fill="#228B22" />

                {/* Tree 3 */}
                <ellipse cx="900" cy="135" rx="35" ry="40" fill="#32CD32" />
                <ellipse cx="880" cy="140" rx="28" ry="35" fill="#228B22" />
                <ellipse cx="920" cy="140" rx="28" ry="35" fill="#228B22" />

                {/* Smaller bushes */}
                <ellipse cx="500" cy="145" rx="15" ry="20" fill="#228B22" />
                <ellipse cx="700" cy="140" rx="20" ry="25" fill="#32CD32" />
                <ellipse cx="1100" cy="145" rx="18" ry="22" fill="#228B22" />
              </g>
            </svg>
          </div>

          {/* Bottom Input Section */}
          <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 w-full max-w-2xl px-4 md:px-6">
            {/* Control buttons */}
            <div className="flex justify-center mb-3 md:mb-4">
              <div className="bg-gray-800 rounded-full p-1.5 md:p-2 flex gap-1.5 md:gap-2">
                <div className="w-6 h-6 md:w-8 md:h-8 bg-pink-accent rounded-full flex items-center justify-center">
                  <span className="text-white text-xs md:text-sm">●</span>
                </div>
                <div className="w-6 h-6 md:w-8 md:h-8 bg-gray-600 rounded-full"></div>
              </div>
            </div>

            {/* Input field */}
            <div className="relative">
              <div className="absolute left-3 md:left-4 top-1/2 transform -translate-y-1/2">
                <Plus className="w-4 h-4 md:w-5 md:h-5 text-gray-400" />
              </div>
              <Input
                placeholder="Ask me anything..."
                className="w-full pl-10 md:pl-12 pr-16 md:pr-20 py-3 md:py-4 bg-input-bg border-0 rounded-full text-gray-800 placeholder:text-gray-400 text-sm md:text-lg"
              />
              <div className="absolute right-3 md:right-4 top-1/2 transform -translate-y-1/2 flex items-center gap-1.5 md:gap-2">
                <Button
                  size="sm"
                  className="bg-purple-accent hover:bg-purple-accent/80 rounded-full w-6 h-6 md:w-8 md:h-8 p-0"
                >
                  <Mic className="w-3 h-3 md:w-4 md:h-4" />
                </Button>
                <div className="w-6 h-6 md:w-8 md:h-8 bg-purple-accent rounded-full flex items-center justify-center">
                  <span className="text-white text-xs md:text-sm">→</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
