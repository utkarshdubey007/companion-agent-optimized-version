import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, ArrowUp, Mic } from "lucide-react";
import { useState } from "react";

interface SignupChatInputProps {
  onSendMessage?: (message: string) => void;
  onAddAttachment?: () => void;
  placeholder?: string;
  disabled?: boolean;
}

export function SignupChatInput({
  onSendMessage,
  onAddAttachment,
  placeholder = "Ask me anything...",
  disabled = false,
}: SignupChatInputProps) {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim() && onSendMessage) {
      onSendMessage(message.trim());
      setMessage("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleAddClick = () => {
    if (onAddAttachment) {
      onAddAttachment();
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto px-4">
      <div
        className="flex items-center gap-2 bg-white rounded-full shadow-xl border border-gray-200 px-3 py-2"
        style={{
          boxShadow: "0px 6px 24px rgba(0, 0, 0, 0.12)",
        }}
      >
        {/* Add/Plus Button */}
        <Button
          onClick={handleAddClick}
          disabled={disabled}
          className="w-9 h-9 rounded-full bg-orange-100 hover:bg-orange-200 p-0 border-0 flex-shrink-0 transition-all duration-200"
        >
          <Plus className="w-4 h-4 text-orange-600" />
        </Button>

        {/* Text Input */}
        <div className="flex-1 relative">
          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder={placeholder}
            disabled={disabled}
            className="border-0 bg-transparent focus:ring-0 focus:outline-none px-3 py-2 text-gray-800 placeholder:text-gray-500 h-auto text-sm"
            style={{
              boxShadow: "none",
            }}
          />
        </div>

        {/* Microphone Button */}
        <Button
          disabled={disabled}
          className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 p-0 border-0 flex-shrink-0 transition-all duration-200"
        >
          <Mic className="w-4 h-4 text-gray-600" />
        </Button>

        {/* Send Button */}
        <Button
          onClick={handleSend}
          disabled={disabled || !message.trim()}
          className="w-9 h-9 rounded-full p-0 border-0 flex-shrink-0 transition-all duration-200 hover:scale-110"
          style={{
            background: message.trim() 
              ? "linear-gradient(135deg, #4FC3F7 0%, #29B6F6 100%)" 
              : "linear-gradient(135deg, #E0E0E0 0%, #BDBDBD 100%)",
            opacity: !message.trim() ? 0.6 : 1,
          }}
        >
          <ArrowUp className="w-4 h-4 text-white" />
        </Button>
      </div>
    </div>
  );
}
