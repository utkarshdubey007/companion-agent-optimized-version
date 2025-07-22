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
  moodIconActivated = false,
  selectedMood = null,
  showMoodPicker = false,
}) {
  return (
    <div className="fixed left-0 top-0 z-30 flex flex-col h-screen w-auto">
      <div className="flex flex-col justify-center h-screen py-4 gap-4">
        {/* --- Top Sidebar Section --- */}
        <div className="flex items-center">
          <div
            className={`transition-all duration-700 ease-out overflow-hidden ${
              topSidebarCollapsed ? "w-0 opacity-0" : "w-14 opacity-100"
            }`}
          >
            <div
              className="bg-[#1C2051] rounded-r-xl border border-white/20 border-l-0 shadow-2xl flex flex-col p-2"
              style={{
                boxShadow: "0px 8px 32px rgba(0, 0, 0, 0.4)",
                maxHeight: "60vh",
              }}
            >
              <div className="overflow-y-auto hide-scrollbar">
                <div className="flex flex-col items-center gap-2">
                  {topMenuItems.map((item) => (
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
                        className="w-10 h-10 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-lg hover:ring-2 hover:ring-white/30 bg-white/5 hover:bg-white/15 backdrop-blur-sm border border-white/10 hover:border-white/30"
                        onClick={() => onMenuItemClick?.(item.alt)}
                      >
                        <img
                          src={item.src}
                          alt={item.alt}
                          className="w-full h-full object-contain"
                        />
                      </div>

                      {!topSidebarCollapsed && (
                        <div className="absolute left-full ml-2 top-1/2 -translate-y-1/2 px-2 py-1 bg-[#1C2051] border border-white/20 rounded-md text-white text-[10px] font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg z-40 pointer-events-none">
                          {item.alt}
                          <div className="absolute right-full top-1/2 -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-r-4 border-transparent border-r-[#1C2051]"></div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <Button
            onClick={toggleTopSidebar}
            className="w-7 h-10 rounded-r-md bg-[#1C2051] hover:bg-[#252B5C] border border-white/20 border-l-0 p-0 shadow-lg flex-shrink-0"
            style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
          >
            {topSidebarCollapsed ? (
              <ChevronRight className="w-4 h-4 text-white" />
            ) : (
              <ChevronLeft className="w-4 h-4 text-white" />
            )}
          </Button>
        </div>

        {/* --- Bottom Sidebar Section --- */}
        <div className="flex items-center">
          <div
            className={`transition-all duration-700 ease-out overflow-hidden ${
              bottomSidebarCollapsed ? "w-0 opacity-0" : "w-14 opacity-100"
            }`}
          >
            <div
              className="bg-[#1C2051] rounded-r-xl border border-white/20 border-l-0 shadow-2xl flex flex-col p-2"
              style={{
                boxShadow: "0px 8px 32px rgba(0, 0, 0, 0.4)",
                maxHeight: "40vh",
              }}
            >
              <div className="overflow-y-auto hide-scrollbar">
                <div className="flex flex-col items-center gap-2">
                  {bottomMenuItems.map((item) => {
                    const isMoodItem = item.alt === "Mood";
                    const isMoodActivated = isMoodItem && moodIconActivated;
                    const isMoodSelected = isMoodItem && (showMoodPicker || selectedMood);
                    const hasSelectedMood = isMoodItem && selectedMood;

                    return (
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
                        className={`w-10 h-10 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-lg hover:ring-2 hover:ring-white/30 backdrop-blur-sm ${
                          isMoodSelected
                            ? hasSelectedMood
                              ? "bg-gradient-to-br from-purple-500/30 to-pink-500/30 border-2 border-purple-400/70 ring-2 ring-purple-400/50 shadow-lg shadow-purple-400/30"
                              : "bg-yellow-500/20 border-yellow-400/50 ring-2 ring-yellow-400/30 shadow-lg shadow-yellow-400/20"
                            : "bg-white/5 hover:bg-white/15 border border-white/10 hover:border-white/30"
                        }`}
                        onClick={() => onMenuItemClick?.(item.alt)}
                      >
                        <img
                          src={hasSelectedMood ? selectedMood.imageUrl : item.src}
                          alt={item.alt}
                          className={`w-full h-full object-contain transition-all duration-300 ${
                            isMoodSelected ? "brightness-125 saturate-150" : ""
                          }`}
                        />
                        {isMoodSelected && (
                          <div className={`absolute top-0 right-0 w-2 h-2 rounded-full animate-pulse ${
                            hasSelectedMood ? "bg-purple-400" : "bg-yellow-400"
                          }`} />
                        )}
                      </div>

                      {!bottomSidebarCollapsed && (
                        <div className="absolute left-full ml-2 top-1/2 -translate-y-1/2 px-2 py-1 bg-[#1C2051] border border-white/20 rounded-md text-white text-[10px] font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg z-40 pointer-events-none">
                          {item.alt}
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
          <Button
            onClick={toggleBottomSidebar}
            className="w-7 h-10 rounded-r-md bg-[#1C2051] hover:bg-[#252B5C] border border-white/20 border-l-0 p-0 shadow-lg flex-shrink-0"
            style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
          >
            {bottomSidebarCollapsed ? (
              <ChevronRight className="w-4 h-4 text-white" />
            ) : (
              <ChevronLeft className="w-4 h-4 text-white" />
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}
