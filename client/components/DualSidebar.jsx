import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
}) {
  return (
    <div className="fixed left-0 top-0 z-30 flex flex-col h-screen w-auto">
      {/* Container with zero margin, aligned to left edge */}
      <div className="flex flex-col gap-3 py-4 h-screen max-h-screen overflow-hidden">
        {/* Top Sidebar Section - Auto height, no flex-1 */}
        <div className="flex items-center">
          {/* Top Section Toggle Button - Always visible at left edge */}
          <Button
            onClick={toggleTopSidebar}
            className="w-8 h-12 rounded-r-lg bg-[#1C2051] hover:bg-[#252B5C] border border-white/20 border-l-0 p-0 transition-all duration-300 shadow-lg flex-shrink-0"
            style={{
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            }}
          >
            {topSidebarCollapsed ? (
              <ChevronRight className="w-4 h-4 text-white" />
            ) : (
              <ChevronLeft className="w-4 h-4 text-white" />
            )}
          </Button>

          {/* Top Section Content - Content-based height */}
          <div
            className={`transition-all duration-700 ease-out overflow-hidden ${
              topSidebarCollapsed ? "w-0 opacity-0" : "w-20 opacity-100"
            }`}
          >
            <div
              className="bg-[#1C2051] rounded-r-[20px] border border-white/20 border-l-0 shadow-2xl flex flex-col p-4"
              style={{
                boxShadow: "0px 8px 32px rgba(0, 0, 0, 0.4)",
                height: "auto",
                maxHeight: "calc(60vh)",
              }}
            >
              {/* Menu Items - Content-based sizing, no labels */}
              <div className="overflow-y-auto hide-scrollbar">
                <div className="flex flex-col items-center gap-3">
                  {topMenuItems.map((item, index) => (
                    <div
                      key={item.alt}
                      className="relative group"
                      style={{
                        animation: showTopWaveEffect
                          ? `popIn 0.6s ease-out ${item.delay}ms both, wave 2s ease-in-out ${item.delay + 600}ms both`
                          : "none",
                        transform: showTopWaveEffect ? "scale(1)" : "scale(0)",
                      }}
                    >
                      <div
                        className="w-12 h-12 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-lg hover:ring-2 hover:ring-white/30 bg-white/5 hover:bg-white/15 backdrop-blur-sm border border-white/10 hover:border-white/30"
                        onClick={() => onMenuItemClick?.(item.alt)}
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
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Sidebar Section - Independent from top */}
        <div className="flex items-center">
          {/* Bottom Section Toggle Button - Always visible at left edge */}
          <Button
            onClick={toggleBottomSidebar}
            className="w-8 h-12 rounded-r-lg bg-[#1C2051] hover:bg-[#252B5C] border border-white/20 border-l-0 p-0 transition-all duration-300 shadow-lg flex-shrink-0"
            style={{
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            }}
          >
            {bottomSidebarCollapsed ? (
              <ChevronRight className="w-4 h-4 text-white" />
            ) : (
              <ChevronLeft className="w-4 h-4 text-white" />
            )}
          </Button>

          {/* Bottom Section Content - Content-based height */}
          <div
            className={`transition-all duration-700 ease-out overflow-hidden ${
              bottomSidebarCollapsed ? "w-0 opacity-0" : "w-20 opacity-100"
            }`}
          >
            <div
              className="bg-[#1C2051] rounded-r-[20px] border border-white/20 border-l-0 shadow-2xl flex flex-col p-4"
              style={{
                boxShadow: "0px 8px 32px rgba(0, 0, 0, 0.4)",
                height: "auto",
                maxHeight: "calc(40vh)",
              }}
            >
              {/* Menu Items - Content-based sizing, no labels */}
              <div className="overflow-y-auto hide-scrollbar">
                <div className="flex flex-col items-center gap-3">
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
                        onClick={() => onMenuItemClick?.(item.alt)}
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
        </div>
      </div>
    </div>
  );
}
