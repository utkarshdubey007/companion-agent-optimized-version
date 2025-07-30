import { useState } from "react";
import { Search, User } from "lucide-react";

export function HeaderActions() {
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [isLoginMenuOpen, setIsLoginMenuOpen] = useState(false);

  const handleSearchClick = () => {
    setIsSearchExpanded(!isSearchExpanded);
  };

  return (
    <div className="absolute top-6 right-6 z-50 flex items-center gap-4">
      {/* Search Component */}
      <div className="relative">
        {!isSearchExpanded ? (
          <button
            onClick={handleSearchClick}
            className="w-10 h-10 border border-white/40 rounded-full flex items-center justify-center hover:bg-white/10 transition-all duration-300 cursor-pointer"
          >
            <Search className="w-5 h-5 text-white" />
          </button>
        ) : (
          <div className="bg-transparent backdrop-blur-sm border border-white/40 rounded-full px-4 py-2 min-w-[240px] transition-all duration-300">
            <div className="flex items-center gap-2">
              <Search className="w-4 h-4 text-white" />
              <input
                type="text"
                placeholder="Search TaleTree"
                className="bg-transparent text-white placeholder-white/70 border-none outline-none flex-1 text-sm"
                autoFocus
                onBlur={() => setIsSearchExpanded(false)}
              />
            </div>
          </div>
        )}
      </div>

      {/* Login Component */}
      <div
        className="relative"
        onMouseEnter={() => setIsLoginMenuOpen(true)}
        onMouseLeave={() => setIsLoginMenuOpen(false)}
      >
        <button className="border border-white/40 text-white px-4 py-2 rounded-full font-medium text-sm hover:bg-white hover:text-gray-800 transition-all duration-300 flex items-center gap-2">
          <User className="w-4 h-4" />
          Login
        </button>

        {/* Login Dropdown Menu */}
        <div
          className={`absolute top-full right-0 pt-2 pointer-events-none transition-all duration-200 ${
            isLoginMenuOpen
              ? 'opacity-100 visible pointer-events-auto translate-y-0'
              : 'opacity-0 invisible -translate-y-2'
          }`}
        >
          {/* Invisible bridge to prevent menu from closing */}
          <div className="absolute top-0 right-0 w-full h-2 bg-transparent pointer-events-auto"></div>
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden min-w-[140px] pointer-events-auto">
            <div className="py-2">
                <button className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors duration-200 flex items-center gap-3">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F0b5ad4e8e5f84db5a19db37317c1643d%2F8ade38e9e3ed4481823af4c44b90eec8?format=webp&width=800"
                    alt="Kids"
                    className="w-6 h-6 rounded-full object-cover"
                  />
                  <span className="text-gray-800 font-medium text-sm">
                    Kids
                  </span>
                </button>

                <button className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors duration-200 flex items-center gap-3">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F0b5ad4e8e5f84db5a19db37317c1643d%2F70906b39ddd5462b8740ab078244aace?format=webp&width=800"
                    alt="Parent"
                    className="w-6 h-6 rounded-full object-cover"
                  />
                  <span className="text-gray-800 font-medium text-sm">
                    Guardians
                  </span>
                </button>

                <button className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors duration-200 flex items-center gap-3">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F0b5ad4e8e5f84db5a19db37317c1643d%2F79afaa309c38474ba6bc9b0f00dbac56?format=webp&width=800"
                    alt="Educator"
                    className="w-6 h-6 rounded-full object-cover"
                  />
                  <span className="text-gray-800 font-medium text-sm">
                    Educator
                  </span>
                </button>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}
