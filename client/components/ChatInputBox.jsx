import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Plus, ArrowUp } from "lucide-react";
import { useState } from "react";

export function ChatInputBox({
  onSendMessage,
  onAddAttachment,
  onSelectChallenge,
  onMyOwnCreation,
  placeholder = "Ask me anything...",
  disabled = false,
  externalShowUploadMenu = false,
  onUploadMenuChange,
}) {
  const [message, setMessage] = useState("");
  const [internalShowUploadMenu, setInternalShowUploadMenu] = useState(false);

  // Use external state if provided, otherwise use internal state
  const showUploadMenu = externalShowUploadMenu !== false ? externalShowUploadMenu : internalShowUploadMenu;
  const setShowUploadMenu = onUploadMenuChange || setInternalShowUploadMenu;

  const handleSend = () => {
    if (message.trim() && onSendMessage) {
      onSendMessage(message.trim());
      setMessage("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleAddClick = () => {
    setShowUploadMenu(!showUploadMenu);
  };

  const handleSelectChallenge = () => {
    setShowUploadMenu(false);
    if (onSelectChallenge) {
      onSelectChallenge();
    }
  };

  const handleMyOwnCreation = () => {
    setShowUploadMenu(false);
    if (onMyOwnCreation) {
      onMyOwnCreation();
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto px-4">
      <div
        className="flex items-center gap-2 bg-white rounded-full shadow-lg border border-gray-100 px-2 pt-2 pb-1"
        style={{
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.08)",
        }}
      >
        {/* Add/Plus Button with Popover */}
        <Popover open={showUploadMenu} onOpenChange={setShowUploadMenu}>
          <PopoverTrigger asChild>
            <Button
              onClick={handleAddClick}
              disabled={disabled}
              className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 p-0 border-0 flex-shrink-0"
            >
              <Plus className="w-5 h-5 text-purple-600" />
            </Button>
          </PopoverTrigger>
          <PopoverContent
            side="top"
            align="start"
            sideOffset={10}
            className="w-48 p-2 bg-white rounded-2xl shadow-lg border border-gray-200"
          >
            <div className="flex flex-col gap-2">
              <Button
                onClick={handleSelectChallenge}
                variant="ghost"
                className="w-full justify-start px-3 py-2 text-purple-600 hover:bg-purple-50 rounded-xl"
              >
                Select challenge
              </Button>
              <Button
                onClick={handleMyOwnCreation}
                variant="ghost"
                className="w-full justify-start px-3 py-2 text-purple-600 hover:bg-purple-50 rounded-xl"
              >
                My own creation
              </Button>
            </div>
          </PopoverContent>
        </Popover>

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
