import { Button } from "@/components/ui/button";

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
}: DualSidebarProps) {
  return (
    <div className="flex flex-col gap-4 ml-4 my-4 relative h-[calc(100vh-120px)]">
      {/* Top Sidebar Section */}
      <div className="relative">
        {/* Top Section Toggle Button */}
        <div
          className="absolute z-20 transition-all duration-700"
          style={{
            right: topSidebarCollapsed ? "-16px" : "-32px",
            top: "50%",
            transform: "translateY(-50%)",
          }}
        >
          <Button
            onClick={toggleTopSidebar}
            size="sm"
            className="w-8 h-8 rounded-lg bg-[#1C2051] hover:bg-[#252B5C] border border-white/20 p-0 transition-all duration-300 shadow-lg"
            style={{
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            }}
          >
            <svg
              className="w-4 h-4 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              {topSidebarCollapsed ? (
                <line x1="9" y1="12" x2="15" y2="12" />
              ) : (
                <>
                  <line x1="6" y1="9" x2="18" y2="9" />
                  <line x1="6" y1="15" x2="18" y2="15" />
                </>
              )}
            </svg>
          </Button>
        </div>

        {/* Top Section Content */}
        <div
          className={`transition-all duration-700 ease-out overflow-hidden ${
            topSidebarCollapsed ? "w-0 opacity-0" : "w-20 opacity-100"
          }`}
        >
          <div
            className="flex flex-col items-center py-4 gap-3 rounded-[20px] flex-1"
            style={{
              background: "#1C2051",
              border: "1px solid rgba(255, 252, 252, 0.2)",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              maxHeight: "60vh",
              overflowY: "auto",
            }}
          >
            {topMenuItems.map((item, index) => (
              <div
                key={item.alt}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden cursor-pointer hover:scale-125 hover:rotate-6 transition-all duration-300 group relative"
                style={{
                  animation: showTopWaveEffect
                    ? `popIn 0.6s ease-out ${item.delay}ms both, wave 2s ease-in-out ${item.delay + 600}ms both`
                    : "none",
                  transform: showTopWaveEffect ? "scale(1)" : "scale(0)",
                }}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover"
                />
                {!topSidebarCollapsed && (
                  <div
                    className="absolute -right-16 top-1/2 transform -translate-y-1/2 text-white px-3 py-2 rounded-lg text-xs opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap z-30"
                    style={{
                      background: "#1C2051",
                      border: "1px solid rgba(255, 252, 252, 0.2)",
                      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                    }}
                  >
                    {item.alt}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Sidebar Section */}
      <div className="relative">
        {/* Bottom Section Toggle Button */}
        <div
          className="absolute z-20 transition-all duration-700"
          style={{
            right: bottomSidebarCollapsed ? "-16px" : "-32px",
            top: "50%",
            transform: "translateY(-50%)",
          }}
        >
          <Button
            onClick={toggleBottomSidebar}
            size="sm"
            className="w-8 h-8 rounded-lg bg-[#1C2051] hover:bg-[#252B5C] border border-white/20 p-0 transition-all duration-300 shadow-lg"
            style={{
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            }}
          >
            <svg
              className="w-4 h-4 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              {bottomSidebarCollapsed ? (
                <line x1="9" y1="12" x2="15" y2="12" />
              ) : (
                <>
                  <line x1="6" y1="9" x2="18" y2="9" />
                  <line x1="6" y1="15" x2="18" y2="15" />
                </>
              )}
            </svg>
          </Button>
        </div>

        {/* Bottom Section Content */}
        <div
          className={`transition-all duration-700 ease-out overflow-hidden ${
            bottomSidebarCollapsed ? "w-0 opacity-0" : "w-20 opacity-100"
          }`}
        >
          <div
            className="flex flex-col items-center py-4 gap-3 rounded-[20px] flex-1"
            style={{
              background: "#1C2051",
              border: "1px solid rgba(255, 252, 252, 0.2)",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              maxHeight: "35vh",
              overflowY: "auto",
            }}
          >
            {bottomMenuItems.map((item, index) => (
              <div
                key={item.alt}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden cursor-pointer hover:scale-125 hover:rotate-6 transition-all duration-300 group relative"
                style={{
                  animation: showBottomWaveEffect
                    ? `popIn 0.6s ease-out ${item.delay}ms both, wave 2s ease-in-out ${item.delay + 600}ms both`
                    : "none",
                  transform: showBottomWaveEffect ? "scale(1)" : "scale(0)",
                }}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover"
                />
                {!bottomSidebarCollapsed && (
                  <div
                    className="absolute -right-16 top-1/2 transform -translate-y-1/2 text-white px-3 py-2 rounded-lg text-xs opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap z-30"
                    style={{
                      background: "#1C2051",
                      border: "1px solid rgba(255, 252, 252, 0.2)",
                      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                    }}
                  >
                    {item.alt}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
