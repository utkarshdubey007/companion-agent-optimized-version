interface SpeechBubbleProps {
  message: string;
}

const SpeechBubble = ({ message }: SpeechBubbleProps) => {
  return (
    <div className="relative z-10 mb-8">
      <div className="bg-cyan-400 rounded-2xl p-4 max-w-sm text-center relative">
        <p className="text-black font-medium">{message}</p>
        {/* Bubble tail */}
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan-400 rotate-45"></div>
      </div>
    </div>
  );
};

export default SpeechBubble;
