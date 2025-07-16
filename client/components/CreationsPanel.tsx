import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Creation {
  id: string;
  title: string;
  images: string[];
}

interface CreationsPanelProps {
  creations: Creation[];
}

export function CreationsPanel({ creations }: CreationsPanelProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [currentCreationIndex, setCurrentCreationIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const nextCreation = () => {
    setCurrentCreationIndex((prev) =>
      prev >= creations.length - 1 ? 0 : prev + 1,
    );
    setCurrentImageIndex(0); // Reset to first image of new creation
  };

  const prevCreation = () => {
    setCurrentCreationIndex((prev) =>
      prev <= 0 ? creations.length - 1 : prev - 1,
    );
    setCurrentImageIndex(0); // Reset to first image of new creation
  };

  const nextImage = () => {
    const currentCreation = creations[currentCreationIndex];
    if (currentCreation && currentCreation.images.length > 1) {
      setCurrentImageIndex((prev) =>
        prev >= currentCreation.images.length - 1 ? 0 : prev + 1,
      );
    }
  };

  const prevImage = () => {
    const currentCreation = creations[currentCreationIndex];
    if (currentCreation && currentCreation.images.length > 1) {
      setCurrentImageIndex((prev) =>
        prev <= 0 ? currentCreation.images.length - 1 : prev - 1,
      );
    }
  };

  const currentCreation = creations[currentCreationIndex];
  const currentImage = currentCreation?.images[currentImageIndex];

  return (
    <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50">
      <div className="flex items-center">
        {/* Toggle Button */}
        <Button
          onClick={toggleCollapse}
          className="w-8 h-12 rounded-l-lg bg-[#1C2051] hover:bg-[#252B5C] border border-white/20 border-r-0 p-0 transition-all duration-300 shadow-lg"
          style={{
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          }}
        >
          {isCollapsed ? (
            <ChevronLeft className="w-4 h-4 text-white" />
          ) : (
            <ChevronRight className="w-4 h-4 text-white" />
          )}
        </Button>

        {/* Main Panel */}
        <div
          className={`${
            isCollapsed ? "w-0 opacity-0" : "w-72 opacity-100"
          } transition-all duration-700 ease-out overflow-hidden`}
        >
          <div
            className="bg-[#4C1D95] rounded-l-[20px] border border-white/20 border-r-0 shadow-2xl relative"
            style={{
              boxShadow: "0px 8px 32px rgba(0, 0, 0, 0.4)",
              height: "400px",
              minHeight: "400px",
              zIndex: 60,
            }}
          >
            {/* Header */}
            <div className="p-4 border-b border-white/20">
              <h2 className="text-white text-lg font-bold text-center">
                My Last Creations
              </h2>
              {creations.length > 1 && (
                <div className="flex justify-between items-center mt-2">
                  <Button
                    onClick={prevCreation}
                    className="w-6 h-6 rounded-full bg-white/20 hover:bg-white/30 p-0"
                  >
                    <ChevronLeft className="w-3 h-3 text-white" />
                  </Button>
                  <span className="text-white/60 text-xs">
                    {currentCreationIndex + 1} of {creations.length}
                  </span>
                  <Button
                    onClick={nextCreation}
                    className="w-6 h-6 rounded-full bg-white/20 hover:bg-white/30 p-0"
                  >
                    <ChevronRight className="w-3 h-3 text-white" />
                  </Button>
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col items-center justify-center h-[calc(100%-80px)]">
              {currentCreation ? (
                <div className="flex flex-col items-center w-full">
                  {/* Image Card */}
                  <div
                    className="relative rounded-2xl overflow-hidden shadow-lg mb-4"
                    style={{
                      width: "200px",
                      height: "200px",
                      background:
                        "linear-gradient(135deg, #FF6B9D 0%, #C084FC 50%, #60A5FA 100%)",
                    }}
                  >
                    {currentImage ? (
                      <img
                        src={currentImage}
                        alt={currentCreation.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="text-white/50 text-4xl">🎨</div>
                      </div>
                    )}
                  </div>

                  {/* Image Navigation */}
                  {currentCreation.images.length > 1 && (
                    <div className="flex gap-2 mb-4">
                      <Button
                        onClick={prevImage}
                        className="w-8 h-8 rounded-full bg-white hover:bg-white/90 p-0 shadow-md"
                      >
                        <ChevronLeft className="w-4 h-4 text-gray-700" />
                      </Button>
                      <Button
                        onClick={nextImage}
                        className="w-8 h-8 rounded-full bg-white hover:bg-white/90 p-0 shadow-md"
                      >
                        <ChevronRight className="w-4 h-4 text-gray-700" />
                      </Button>
                    </div>
                  )}

                  {/* Image Indicators */}
                  {currentCreation.images.length > 1 && (
                    <div className="flex gap-1 mb-2">
                      {currentCreation.images.map((_, index) => (
                        <div
                          key={index}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            index === currentImageIndex
                              ? "bg-white"
                              : "bg-white/30"
                          }`}
                        />
                      ))}
                    </div>
                  )}

                  {/* Creation Title */}
                  <h3 className="text-white text-sm font-medium text-center">
                    {currentCreation.title}
                  </h3>
                </div>
              ) : (
                <div className="text-white/50 text-center">
                  <div className="text-4xl mb-2">🎨</div>
                  <p className="text-sm">No creations yet</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
