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
      <header className="relative z-10 flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-6">
          {/* Builder.io Logo */}
          <div className="w-8 h-8 bg-chat-bubble rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">B</span>
          </div>

          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search branches, treehouses..."
              className="pl-10 w-72 bg-white/10 border-white/20 text-white placeholder:text-gray-300"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          {/* Icon buttons */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-orange-accent rounded-lg"></div>
            <div className="w-8 h-8 bg-bunny-green rounded-lg"></div>
            <div className="w-8 h-8 bg-yellow-accent rounded-lg"></div>
          </div>

          {/* Night Mode Toggle */}
          <div className="flex items-center gap-2 bg-white/10 rounded-full px-3 py-1">
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
            <span className="text-white">John</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex h-[calc(100vh-80px)]">
        {/* Left Sidebar */}
        <div className="w-16 flex flex-col items-center py-6 gap-4">
          <div className="w-10 h-10 bg-orange-accent rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
            <span className="text-white text-xl">!</span>
          </div>
          <div className="w-10 h-10 bg-chat-bubble rounded-full cursor-pointer hover:scale-110 transition-transform"></div>
          <div className="w-10 h-10 bg-bunny-green rounded-full cursor-pointer hover:scale-110 transition-transform"></div>
          <div className="w-10 h-10 bg-yellow-accent rounded-full cursor-pointer hover:scale-110 transition-transform"></div>
          <div className="w-10 h-10 bg-purple-accent rounded-full cursor-pointer hover:scale-110 transition-transform"></div>
          <div className="w-10 h-10 bg-pink-accent rounded-full cursor-pointer hover:scale-110 transition-transform"></div>
          <div className="w-10 h-10 bg-white/20 rounded-full cursor-pointer hover:scale-110 transition-transform"></div>
          <div className="w-10 h-10 bg-white/20 rounded-full cursor-pointer hover:scale-110 transition-transform"></div>
          <div className="w-10 h-10 bg-white/20 rounded-full cursor-pointer hover:scale-110 transition-transform"></div>
        </div>

        {/* Center Content Area */}
        <div className="flex-1 relative flex flex-col items-center justify-center">
          {/* Dialogue with Lexicb Badge */}
          <div className="absolute top-12 bg-orange-accent text-white px-4 py-2 rounded-full text-sm font-medium">
            Dialogue with Lexicb
          </div>

          {/* Chat Bubble */}
          <div className="absolute top-32 left-1/2 transform -translate-x-1/2 max-w-md">
            <div className="bg-chat-bubble text-white p-4 rounded-2xl rounded-bl-sm relative">
              <p className="text-sm leading-relaxed">
                Let's make some fun art together. What if the world was a
                peaceful place, let's start creating!
              </p>
            </div>
          </div>

          {/* Green Bunny Character */}
          <div className="mt-24">
            <svg
              width="120"
              height="120"
              viewBox="0 0 120 120"
              className="drop-shadow-lg"
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
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-full max-w-2xl px-6">
            {/* Control buttons */}
            <div className="flex justify-center mb-4">
              <div className="bg-gray-800 rounded-full p-2 flex gap-2">
                <div className="w-8 h-8 bg-pink-accent rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">●</span>
                </div>
                <div className="w-8 h-8 bg-gray-600 rounded-full"></div>
              </div>
            </div>

            {/* Input field */}
            <div className="relative">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                <Plus className="w-5 h-5 text-gray-400" />
              </div>
              <Input
                placeholder="Ask me anything..."
                className="w-full pl-12 pr-12 py-4 bg-input-bg border-0 rounded-full text-gray-800 placeholder:text-gray-400 text-lg"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
                <Button
                  size="sm"
                  className="bg-purple-accent hover:bg-purple-accent/80 rounded-full w-8 h-8 p-0"
                >
                  <Mic className="w-4 h-4" />
                </Button>
                <div className="w-8 h-8 bg-purple-accent rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">→</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
