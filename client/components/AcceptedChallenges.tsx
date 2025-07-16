import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Challenge {
  id: string;
  title: string;
  image: string;
  motivationalMessage: string;
  progress: number;
  timeLeft: string;
  chatColor: string;
  companionIcon: string;
  isSelected?: boolean;
}

interface AcceptedChallengesProps {
  challenges: Challenge[];
}

export function AcceptedChallenges({ challenges }: AcceptedChallengesProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const selectedChallenge =
    challenges.find((c) => c.isSelected) || challenges[0];

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const ProgressBar = ({ progress }: { progress: number }) => (
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
  }: {
    challenge: Challenge;
    isCompact?: boolean;
    isCollapsedView?: boolean;
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
        className={`text-white font-semibold ${isCompact ? "text-sm" : "text-base"} mb-3 text-center flex-shrink-0 min-h-[2rem] flex items-center justify-center`}
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
        {challenge.timeLeft}
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
              <h2 className="text-white text-xl font-semibold">
                Accepted Challenges
              </h2>
            </div>

            {/* Content */}
            <div
              className="p-4 sm:p-6 flex items-center"
              style={{ height: "calc(100% - 80px)" }}
            >
              <div className="flex gap-3 sm:gap-4 justify-center w-full overflow-visible">
                {challenges.slice(0, 3).map((challenge) => (
                  <ChallengeCard key={challenge.id} challenge={challenge} />
                ))}
              </div>
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
              <h2 className="text-white text-xl font-semibold">
                Accepted Challenges
              </h2>
            </div>

            {/* Content */}
            <div
              className="p-4 sm:p-6 flex items-center"
              style={{ height: "calc(100% - 80px)" }}
            >
              <div className="flex justify-center w-full overflow-visible">
                <ChallengeCard
                  key={selectedChallenge.id}
                  challenge={selectedChallenge}
                  isCollapsedView={true}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
