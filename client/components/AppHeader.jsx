import { Search, User } from "lucide-react";
import { Input } from "@/components/ui/input";

export function AppHeader() {
  return (
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
  );
}
