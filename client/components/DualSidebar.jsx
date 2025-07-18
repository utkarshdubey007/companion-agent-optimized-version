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
  // Combine all menu items into a single array
  const allMenuItems = [...topMenuItems, ...bottomMenuItems];
  // Use the topSidebarCollapsed state to control the unified sidebar
  const isCollapsed = topSidebarCollapsed;
  const toggleSidebar = toggleTopSidebar;
  const showWaveEffect = showTopWaveEffect || showBottomWaveEffect;

  return (
    <div className="fixed left-0 top-0 z-30 flex items-center h-screen">
      {/* Unified Sidebar - Matches the image design */}
      <div className="relative flex items-center">
        {/* Sidebar Content */}
        <div
          className={`transition-all duration-500 ease-in-out overflow-hidden ${
            isCollapsed ? "w-0 opacity-0" : "w-16 opacity-100"
          }`}
        >
          <div
            className="bg-gradient-to-b from-gray-900/95 to-gray-800/95 backdrop-blur-sm shadow-2xl flex flex-col py-4 px-2"
            style={{
              height: "calc(100vh - 4rem)",
              marginTop: "2rem",
              marginBottom: "2rem",
              borderRadius: "0 16px 16px 0",
              boxShadow: "0px 8px 32px rgba(0, 0, 0, 0.3)",
            }}
          >
            {/* Menu Items */}
            <div className="overflow-y-auto hide-scrollbar flex-1 flex flex-col justify-center">
              <div className="flex flex-col items-center gap-3">
                {allMenuItems.map((item, index) => (
                  <div
                    key={item.alt}
                    className="relative group"
                    style={{
                      animation: showWaveEffect
                        ? `popIn 0.6s ease-out ${item.delay || index * 100}ms both, wave 2s ease-in-out ${(item.delay || index * 100) + 600}ms both`
                        : "none",
                      transform: showWaveEffect ? "scale(1)" : "scale(0)",
                    }}
                  >
                    <div
                      className="w-12 h-12 rounded-full overflow-hidden cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-lg hover:ring-2 hover:ring-white/40 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 hover:border-white/40"
                      onClick={() => onMenuItemClick?.(item.alt)}
                      style={{
                        background: `linear-gradient(135deg, ${
                          index % 2 === 0
                            ? "rgba(255, 107, 157, 0.8)"
                            : "rgba(99, 102, 241, 0.8)"
                        }, ${
                          index % 3 === 0
                            ? "rgba(34, 197, 94, 0.8)"
                            : "rgba(249, 115, 22, 0.8)"
                        })`,
                      }}
                    >
                      <img
                        src={item.src}
                        alt={item.alt}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Enhanced Tooltip */}
                    {!isCollapsed && (
                      <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 px-3 py-2 bg-gray-900/90 backdrop-blur-sm border border-white/20 rounded-xl text-white text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-xl z-40 pointer-events-none">
                        {item.alt}
                        {/* Tooltip arrow */}
                        <div className="absolute right-full top-1/2 -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-r-4 border-transparent border-r-gray-900/90"></div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Toggle Button - Positioned based on sidebar state */}
        <Button
          onClick={toggleSidebar}
          className={`w-8 h-12 bg-gray-900/90 hover:bg-gray-800/90 backdrop-blur-sm border border-white/20 hover:border-white/40 p-0 transition-all duration-500 shadow-lg flex-shrink-0 absolute top-1/2 -translate-y-1/2 ${
            isCollapsed
              ? "left-0 rounded-r-lg border-l-0" // At left edge when collapsed
              : "left-16 rounded-l-lg border-r-0" // At right edge of sidebar when expanded
          }`}
          style={{
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.3)",
            zIndex: 10,
          }}
        >
          {isCollapsed ? (
            <ChevronRight className="w-4 h-4 text-white" />
          ) : (
            <ChevronLeft className="w-4 h-4 text-white" />
          )}
        </Button>
      </div>
    </div>
  );
}
