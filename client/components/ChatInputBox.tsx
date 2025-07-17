import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, ArrowUp } from "lucide-react";
import { useState } from "react";

interface ChatInputBoxProps {
  onSendMessage?: (message: string) => void;
  onAddAttachment?: () => void;
  placeholder?: string;
  disabled?: boolean;
}

export function ChatInputBox({
  onSendMessage,
  onAddAttachment,
  placeholder = "Ask me anything...",
  disabled = false,
}: ChatInputBoxProps) {
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
        className="flex items-center gap-0.5 bg-white rounded-full shadow-lg border border-gray-100 p-2"
        style={{
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.08)",
        }}
      >
        {/* Add/Plus Button */}
        <Button
          onClick={handleAddClick}
          disabled={disabled}
          className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 p-0 border-0 flex-shrink-0"
        >
          <Plus className="w-5 h-5 text-purple-600" />
        </Button>

        {/* Text Input */}
        <div className="flex-1 relative">
          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder={placeholder}
            disabled={disabled}
            className="border-0 bg-transparent focus:ring-0 focus:outline-none px-2 py-2 text-gray-800 placeholder:text-gray-400 h-auto"
            style={{
              boxShadow: "none",
            }}
          />
        </div>

        {/* Send Button */}
        <Button
          onClick={handleSend}
          disabled={disabled || !message.trim()}
          className="w-10 h-10 rounded-full p-0 border-0 flex-shrink-0 transition-all duration-200 hover:scale-105"
          style={{
            background: "linear-gradient(135deg, #FF6B9D 0%, #C084FC 100%)",
            opacity: !message.trim() ? 0.5 : 1,
          }}
        >
          <ArrowUp className="w-5 h-5 text-white" />
        </Button>
      </div>
    </div>
  );
}
