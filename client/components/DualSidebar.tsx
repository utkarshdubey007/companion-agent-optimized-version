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
  onMenuItemClick?: (itemAlt: string) => void;
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
}: DualSidebarProps) {
  return (
    <div className="fixed left-0 top-0 z-30 flex flex-col h-screen w-auto">
      {/* Container with zero margin, aligned to left edge */}
      <div className="flex flex-col gap-3 py-4 h-screen max-h-screen overflow-hidden">
        {/* Top Sidebar Section - Auto height, no flex-1 */}
        <div className="relative">
          {/* Top Section Toggle Button - Connected to left edge */}
          <div
            className="absolute z-20 transition-all duration-700"
            style={{
              right: topSidebarCollapsed ? "-20px" : "-24px",
              top: "50%",
              transform: "translateY(-50%)",
            }}
          >
            <Button
              onClick={toggleTopSidebar}
              size="sm"
              className="w-10 h-10 rounded-2xl bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/20 p-0 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              style={{
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.3)",
              }}
            >
              {topSidebarCollapsed ? (
                <ChevronRight className="w-5 h-5 text-white" />
              ) : (
                <ChevronLeft className="w-5 h-5 text-white" />
              )}
            </Button>
          </div>

          {/* Top Section Content - Content-based height */}
          <div
            className={`transition-all duration-700 ease-out overflow-hidden ${
              topSidebarCollapsed ? "w-0 opacity-0 h-0" : "w-20 opacity-100"
            }`}
          >
            <div
              className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg flex flex-col p-4"
              style={{
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.3)",
                height: "auto",
                maxHeight: "calc(60vh)",
              }}
            >
              {/* Menu Items - Content-based sizing */}
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
                        <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 px-3 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg z-40 pointer-events-none tooltip-float">
                          {item.alt}
                          {/* Tooltip arrow */}
                          <div className="absolute right-full top-1/2 -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-r-4 border-transparent border-r-white/10"></div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Sidebar Section - Independent content-based height */}
        <div className="relative">
          {/* Bottom Section Toggle Button - Connected to left edge */}
          <div
            className="absolute z-20 transition-all duration-700"
            style={{
              right: bottomSidebarCollapsed ? "-20px" : "-24px",
              top: "50%",
              transform: "translateY(-50%)",
            }}
          >
            <Button
              onClick={toggleBottomSidebar}
              size="sm"
              className="w-10 h-10 rounded-2xl bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/20 p-0 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              style={{
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.3)",
              }}
            >
              {bottomSidebarCollapsed ? (
                <ChevronRight className="w-5 h-5 text-white" />
              ) : (
                <ChevronLeft className="w-5 h-5 text-white" />
              )}
            </Button>
          </div>

          {/* Bottom Section Content - Independent sizing */}
          <div
            className={`transition-all duration-700 ease-out overflow-hidden ${
              bottomSidebarCollapsed ? "w-0 opacity-0 h-0" : "w-20 opacity-100"
            }`}
          >
            <div
              className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg flex flex-col p-3"
              style={{
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.3)",
                height: "auto",
                maxHeight: "calc(30vh)",
              }}
            >
              {/* Menu Items - Content-based layout */}
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
                        <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 px-3 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg z-40 pointer-events-none tooltip-float">
                          {item.alt}
                          {/* Tooltip arrow */}
                          <div className="absolute right-full top-1/2 -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-r-4 border-transparent border-r-white/10"></div>
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
