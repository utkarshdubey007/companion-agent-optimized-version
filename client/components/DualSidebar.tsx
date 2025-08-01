import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface MenuItem {
  src: string;
  alt: string;
  delay: number;
}

interface DualSidebarProps {
  topMenuItems: MenuItem[];
  bottomMenuItems: MenuItem[];
  topSidebarCollapsed: boolean;
  bottomSidebarCollapsed: boolean;
  showTopWaveEffect: boolean;
  showBottomWaveEffect: boolean;
  toggleTopSidebar: () => void;
  toggleBottomSidebar: () => void;
  onMenuItemClick?: (itemAlt: string, index: number) => void;
  highlightedTopIndex?: number;
  isLoading?: boolean;
}

export function DualSidebar({
  topMenuItems,
  bottomMenuItems,
  topSidebarCollapsed,
  bottomSidebarCollapsed,
  showTopWaveEffect,
  showBottomWaveEffect,
  toggleTopSidebar,
  toggleBottomSidebar,
  onMenuItemClick,
  highlightedTopIndex,
  isLoading = false,
}: DualSidebarProps) {
  return (
    <div className="fixed left-0 top-0 z-30 flex flex-col h-screen w-auto">
      {/* Container with zero margin, aligned to left edge */}
      <div className="flex flex-col gap-3 py-4 h-screen max-h-screen overflow-hidden">
        {/* Top Sidebar Section - Auto height, no flex-1 */}
        <div className="flex items-center relative">
          {/* Top Section Content - Content-based height */}
          <div
            className={`transition-all duration-500 ease-in-out overflow-hidden ${
              topSidebarCollapsed ? "w-0 opacity-0" : "w-20 opacity-100"
            }`}
          >
            <div
              className="bg-[#1C2051] border border-white/20 border-l-0 shadow-2xl flex flex-col p-4"
              style={{
                borderRadius: "0 15px 15px 0",
                boxShadow: "0px 8px 32px rgba(0, 0, 0, 0.4)",
                height: "auto",
                maxHeight: "calc(60vh)",
              }}
            >
              {/* Menu Items - Content-based sizing, no labels */}
              <div className="overflow-y-auto hide-scrollbar">
                <div className="flex flex-col items-center gap-3">
                  {topMenuItems.map((item, index) => {
                    const isHighlighted = highlightedTopIndex === index;
                    const isClickDisabled = isLoading;

                    return (
                      <div
                        key={item.alt}
                        className="relative group"
                        style={{
                          animation: showTopWaveEffect
                            ? `popIn 0.6s ease-out ${item.delay}ms both, wave 2s ease-in-out ${item.delay + 600}ms both`
                            : "none",
                          transform: showTopWaveEffect
                            ? "scale(1)"
                            : "scale(0)",
                        }}
                      >
                        <div
                          className={`w-12 h-12 rounded-2xl overflow-hidden transition-all duration-300 backdrop-blur-sm border ${
                            isClickDisabled
                              ? "cursor-not-allowed opacity-60"
                              : "cursor-pointer hover:scale-110 hover:shadow-lg hover:ring-2 hover:ring-white/30"
                          } ${
                            isHighlighted
                              ? "bg-chat-bubble/30 border-chat-bubble ring-2 ring-chat-bubble/50 shadow-lg scale-105"
                              : "bg-white/5 hover:bg-white/15 border-white/10 hover:border-white/30"
                          }`}
                          onClick={() =>
                            !isClickDisabled &&
                            onMenuItemClick?.(item.alt, index)
                          }
                        >
                          <img
                            src={item.src}
                            alt={item.alt}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Enhanced Tooltip */}
                        {!topSidebarCollapsed && (
                          <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 px-3 py-2 bg-[#1C2051] border border-white/20 rounded-xl text-white text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg z-40 pointer-events-none tooltip-float">
                            {item.alt}
                            {/* Tooltip arrow */}
                            <div className="absolute right-full top-1/2 -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-r-4 border-transparent border-r-[#1C2051]"></div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Top Section Toggle Button - Positioned at the edge */}
          <Button
            onClick={toggleTopSidebar}
            className="w-8 h-12 bg-[#1C2051] hover:bg-[#252B5C] border border-white/20 border-l-0 p-0 flex-shrink-0 z-10 transition-all duration-500 ease-in-out"
            style={{
              borderRadius: "0 15px 15px 0",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              marginLeft: topSidebarCollapsed ? "0" : "-8px",
            }}
          >
            {topSidebarCollapsed ? (
              <ChevronRight className="w-4 h-4 text-white transition-transform duration-300" />
            ) : (
              <ChevronLeft className="w-4 h-4 text-white transition-transform duration-300" />
            )}
          </Button>
        </div>

        {/* Bottom Sidebar Section - Independent content-based height */}
        <div className="flex items-center relative">
          {/* Bottom Section Content - Independent sizing */}
          <div
            className={`transition-all duration-500 ease-in-out overflow-hidden ${
              bottomSidebarCollapsed ? "w-0 opacity-0" : "w-20 opacity-100"
            }`}
          >
            <div
              className="bg-[#1C2051] border border-white/20 border-l-0 shadow-2xl flex flex-col p-3"
              style={{
                borderRadius: "0 15px 15px 0",
                boxShadow: "0px 8px 32px rgba(0, 0, 0, 0.4)",
                height: "auto",
                maxHeight: "calc(30vh)",
              }}
            >
              {/* Menu Items - Content-based layout, no labels */}
              <div className="overflow-y-auto hide-scrollbar">
                <div className="flex flex-col items-center gap-2">
                  {bottomMenuItems.map((item, index) => (
                    <div
                      key={item.alt}
                      className="relative group"
                      style={{
                        animation: showBottomWaveEffect
                          ? `popIn 0.6s ease-out ${item.delay}ms both, wave 2s ease-in-out ${item.delay + 600}ms both`
                          : "none",
                        transform: showBottomWaveEffect
                          ? "scale(1)"
                          : "scale(0)",
                      }}
                    >
                      <div
                        className="w-12 h-12 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-lg hover:ring-2 hover:ring-white/30 bg-white/5 hover:bg-white/15 backdrop-blur-sm border border-white/10 hover:border-white/30"
                        onClick={() => onMenuItemClick?.(item.alt, index)}
                      >
                        <img
                          src={item.src}
                          alt={item.alt}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Enhanced Tooltip */}
                      {!bottomSidebarCollapsed && (
                        <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 px-3 py-2 bg-[#1C2051] border border-white/20 rounded-xl text-white text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg z-40 pointer-events-none tooltip-float">
                          {item.alt}
                          {/* Tooltip arrow */}
                          <div className="absolute right-full top-1/2 -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-r-4 border-transparent border-r-[#1C2051]"></div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section Toggle Button - Positioned at the edge */}
          <Button
            onClick={toggleBottomSidebar}
            className="w-8 h-12 bg-[#1C2051] hover:bg-[#252B5C] border border-white/20 border-l-0 p-0 flex-shrink-0 z-10 transition-all duration-500 ease-in-out"
            style={{
              borderRadius: "0 15px 15px 0",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              marginLeft: bottomSidebarCollapsed ? "0" : "-8px",
            }}
          >
            {bottomSidebarCollapsed ? (
              <ChevronRight className="w-4 h-4 text-white transition-transform duration-300" />
            ) : (
              <ChevronLeft className="w-4 h-4 text-white transition-transform duration-300" />
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}
