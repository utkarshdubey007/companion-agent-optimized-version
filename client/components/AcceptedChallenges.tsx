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
  }: {
    challenge: Challenge;
    isCompact?: boolean;
  }) => (
    <div
      className={`bg-white/10 rounded-2xl p-4 backdrop-blur-sm border border-white/20 ${
        challenge.isSelected ? "ring-2 ring-white/30" : ""
      } ${isCompact ? "w-full" : "min-w-[200px]"}`}
    >
      {/* Challenge Image */}
      <div className="relative mb-4">
        <img
          src={challenge.image}
          alt={challenge.title}
          className={`w-full ${isCompact ? "h-24" : "h-32"} object-cover rounded-xl`}
        />
      </div>

      {/* Challenge Title */}
      <h3
        className={`text-white font-semibold ${isCompact ? "text-sm" : "text-base"} mb-2 text-center`}
      >
        {challenge.title}
      </h3>

      {/* Motivational Message */}
      <p
        className={`text-white/80 ${isCompact ? "text-xs" : "text-sm"} mb-3 text-center`}
      >
        {challenge.motivationalMessage}
      </p>

      {/* Progress Bar */}
      <div className="mb-3">
        <ProgressBar progress={challenge.progress} />
      </div>

      {/* Timer */}
      <div
        className={`text-green-400 font-mono ${isCompact ? "text-xs" : "text-sm"} mb-4 text-center`}
      >
        {challenge.timeLeft}
      </div>

      {/* Chat Button */}
      <Button
        className={`w-full rounded-full ${isCompact ? "py-2 text-xs" : "py-3"} font-medium transition-all duration-200 hover:scale-105`}
        style={{ backgroundColor: challenge.chatColor }}
      >
        <span className="flex items-center justify-center gap-2">
          Chat with
          <span className={`${isCompact ? "text-lg" : "text-xl"}`}>
            {challenge.companionIcon}
          </span>
        </span>
      </Button>
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
            isCollapsed ? "w-0 opacity-0" : "w-80 lg:w-96 opacity-100"
          } transition-all duration-700 ease-out overflow-hidden`}
        >
          <div
            className="bg-[#1C2051] rounded-l-[20px] border border-white/20 border-r-0 shadow-2xl"
            style={{
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              height: "calc(100vh - 200px)",
              maxHeight: "600px",
              minHeight: "400px",
            }}
          >
            {/* Header */}
            <div className="p-6 border-b border-white/20">
              <h2 className="text-white text-xl font-semibold">
                Accepted Challenges
              </h2>
            </div>

            {/* Content */}
            <div className="p-4 h-full overflow-y-auto">
              <div className="grid gap-4 lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3">
                {challenges.map((challenge) => (
                  <ChallengeCard key={challenge.id} challenge={challenge} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Collapsed View - Single Challenge */}
        <div
          className={`${
            isCollapsed ? "w-64 opacity-100" : "w-0 opacity-0"
          } transition-all duration-700 ease-out overflow-hidden`}
        >
          <div
            className="bg-[#1C2051] rounded-l-[20px] border border-white/20 border-r-0 shadow-2xl p-4"
            style={{
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              height: "calc(100vh - 200px)",
              maxHeight: "600px",
              minHeight: "400px",
            }}
          >
            {/* Header */}
            <div className="mb-4">
              <h2 className="text-white text-lg font-semibold">
                Accepted Challenges
              </h2>
            </div>

            {/* Selected Challenge - Compact */}
            <ChallengeCard challenge={selectedChallenge} isCompact={true} />
          </div>
        </div>
      </div>
    </div>
  );
}
