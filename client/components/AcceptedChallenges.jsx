import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Timer from "./Timer";
import { getCompanionInfo } from "@/utils/companionMapping";

export function AcceptedChallenges({ challenges, loading = false, error = null }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Transform API challenge data to component format
  const transformedChallenges = challenges.map((challengeItem, index) => {
    const companionInfo = getCompanionInfo(challengeItem.challenge.character_type);

    return {
      id: challengeItem.challenge.id,
      title: challengeItem.challenge.title,
      image: challengeItem.challenge.picture_url,
      motivationalMessage: challengeItem.challenge.description,
      progress: Math.min(100, ((7 - challengeItem.days_left) / 7) * 100), // Calculate progress based on days left
      timeLeft: challengeItem.time_left, // Use time_left from API for Timer component
      chatColor: companionInfo.color,
      companionIcon: companionInfo.icon,
      companionName: companionInfo.name,
      isSelected: index === 0, // Select first challenge by default
    };
  });

  const selectedChallenge = transformedChallenges.find((c) => c.isSelected) || transformedChallenges[0];

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const ProgressBar = ({ progress }) => (
    <div className="w-full bg-white/20 rounded-full h-2">
      <div
        className="bg-green-400 h-2 rounded-full transition-all duration-300"
        style={{ width: `${progress}%` }}
      />
    </div>
  );

  const ChallengeCard = ({
    challenge,
    isCompact = false,
    isCollapsedView = false,
  }) => (
    <div
      className={`bg-white/10 backdrop-blur-sm rounded-2xl ${isCollapsedView ? "p-3" : "p-4"} border border-white/20 shadow-lg ${
        challenge.isSelected ? "ring-2 ring-purple-400" : ""
      } ${isCompact ? "w-full" : "flex-1 min-w-[200px] max-w-[220px]"} relative flex flex-col`}
      style={{
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.3)",
        height: isCompact ? "auto" : isCollapsedView ? "300px" : "320px",
      }}
    >
      {/* Challenge Title */}
      <h3
        className={`text-white ${isCompact ? "text-sm" : "text-base"} mb-3 text-center flex-shrink-0 min-h-[2rem] flex items-center justify-center`}
      >
        {challenge.title}
      </h3>

      {/* Challenge Image */}
      <div className="relative mb-3 flex-shrink-0">
        <img
          src={challenge.image}
          alt={challenge.title}
          className={`w-full ${isCompact ? "h-24" : isCollapsedView ? "h-28" : "h-32"} object-cover rounded-xl border border-white/30`}
        />
      </div>

      {/* Progress Bar */}
      <div className="mb-3 flex-shrink-0">
        <ProgressBar progress={challenge.progress} />
      </div>

      {/* Timer */}
      <div
        className={`text-green-400 font-mono ${isCompact ? "text-xs" : "text-sm"} mb-4 text-center flex-shrink-0 min-h-[1.5rem] flex items-center justify-center`}
      >
        <Timer timeLeft={challenge.timeLeft} />
      </div>

      {/* Chat Button */}
      <div className="mt-auto flex-shrink-0">
        <Button
          className={`w-full rounded-full ${isCompact ? "py-2 text-xs" : "py-2.5"} font-medium transition-all duration-200 hover:brightness-110 text-white border-0 text-center`}
          style={{
            backgroundColor: challenge.chatColor,
            margin: 0,
            maxWidth: "100%",
          }}
        >
          <span className="flex items-center justify-center gap-2">
            Chat with
            <span className={`${isCompact ? "text-lg" : "text-xl"}`}>
              {challenge.companionIcon}
            </span>
          </span>
        </Button>
      </div>
    </div>
  );

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
            isCollapsed
              ? "w-0 opacity-0"
              : "w-fit min-w-[20rem] max-w-[95vw] opacity-100"
          } transition-all duration-700 ease-out overflow-hidden`}
        >
          <div
            className="bg-[#1C2051] rounded-l-[20px] border border-white/20 border-r-0 shadow-2xl relative"
            style={{
              boxShadow: "0px 8px 32px rgba(0, 0, 0, 0.4)",
              height: "calc(100vh - 200px)",
              maxHeight: "600px",
              minHeight: "400px",
              zIndex: 60,
            }}
          >
            {/* Header */}
            <div className="p-6 border-b border-white/20">
              <h2 className="text-white text-xl">
                Accepted Challenges
              </h2>
            </div>

            {/* Content */}
            <div
              className="p-4 sm:p-6 flex items-center"
              style={{ height: "calc(100% - 80px)" }}
            >
              {loading ? (
                <div className="flex items-center justify-center w-full">
                  <div className="text-white text-center">
                    <div className="animate-spin w-8 h-8 border-2 border-white border-t-transparent rounded-full mx-auto mb-2"></div>
                    <p>Loading challenges...</p>
                  </div>
                </div>
              ) : error ? (
                <div className="flex items-center justify-center w-full">
                  <div className="text-red-400 text-center">
                    <p>Error loading challenges</p>
                    <p className="text-sm text-white/70 mt-1">{error}</p>
                  </div>
                </div>
              ) : transformedChallenges.length === 0 ? (
                <div className="flex items-center justify-center w-full">
                  <div className="text-white/70 text-center">
                    <p>No challenges found</p>
                  </div>
                </div>
              ) : (
                <div className="flex gap-3 sm:gap-4 justify-center w-full overflow-visible">
                  {transformedChallenges.slice(0, 3).map((challenge) => (
                    <ChallengeCard key={challenge.id} challenge={challenge} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Collapsed View - Single Challenge */}
        <div
          className={`${
            isCollapsed ? "w-[240px] opacity-100" : "w-0 opacity-0"
          } transition-all duration-700 ease-out overflow-hidden`}
        >
          <div
            className="bg-[#1C2051] rounded-l-[20px] border border-white/20 border-r-0 shadow-2xl relative"
            style={{
              boxShadow: "0px 8px 32px rgba(0, 0, 0, 0.4)",
              height: "calc(100vh - 200px)",
              maxHeight: "600px",
              minHeight: "400px",
              zIndex: 60,
            }}
          >
            {/* Header */}
            <div className="p-6 border-b border-white/20">
              <h2 className="text-white text-xl">
                Accepted Challenges
              </h2>
            </div>

            {/* Content */}
            <div
              className="p-4 sm:p-6 flex items-center"
              style={{ height: "calc(100% - 80px)" }}
            >
              {loading ? (
                <div className="flex items-center justify-center w-full">
                  <div className="text-white text-center">
                    <div className="animate-spin w-6 h-6 border-2 border-white border-t-transparent rounded-full mx-auto mb-2"></div>
                    <p className="text-sm">Loading...</p>
                  </div>
                </div>
              ) : selectedChallenge ? (
                <div className="flex justify-center w-full overflow-visible">
                  <ChallengeCard
                    key={selectedChallenge.id}
                    challenge={selectedChallenge}
                    isCollapsedView={true}
                  />
                </div>
              ) : (
                <div className="flex items-center justify-center w-full">
                  <div className="text-white/70 text-center">
                    <p className="text-sm">No challenges</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
