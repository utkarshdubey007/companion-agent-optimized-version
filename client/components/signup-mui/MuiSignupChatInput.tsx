import { useState } from "react";
import { Box, IconButton, TextField } from "@mui/material";
import { ArrowUpward, Mic } from "@mui/icons-material";

interface MuiSignupChatInputProps {
  onSendMessage?: (message: string) => void;
  placeholder?: string;
  disabled?: boolean;
}

export function MuiSignupChatInput({
  onSendMessage,
  placeholder = "Ask me anything...",
  disabled = false,
}: MuiSignupChatInputProps) {
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

  return (
    <Box sx={{ width: "100%", maxWidth: "90rem", mx: "auto", px: 1 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          bgcolor: "white",
          borderRadius: "25px",
          boxShadow: "0px 6px 24px rgba(0, 0, 0, 0.12)",
          border: "1px solid #e5e7eb",
          px: 1.5,
          py: 1,
        }}
      >
        {/* Text Input */}
        <Box sx={{ flex: 1, position: "relative" }}>
          <TextField
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder={placeholder}
            disabled={disabled}
            variant="standard"
            fullWidth
            sx={{
              "& .MuiInput-underline:before": {
                borderBottom: "none",
              },
              "& .MuiInput-underline:after": {
                borderBottom: "none",
              },
              "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                borderBottom: "none",
              },
              "& .MuiInputBase-input": {
                padding: "8px 12px",
                color: "#374151",
                fontSize: "14px",
                "&::placeholder": {
                  color: "#6b7280",
                  opacity: 1,
                },
              },
            }}
          />
        </Box>

        {/* Microphone Button */}
        <IconButton
          disabled={disabled}
          sx={{
            width: 36,
            height: 36,
            bgcolor: "#f3f4f6",
            "&:hover": {
              bgcolor: "#e5e7eb",
            },
            transition: "all 0.2s ease",
          }}
        >
          <Mic sx={{ width: 16, height: 16, color: "#4b5563" }} />
        </IconButton>

        {/* Send Button */}
        <IconButton
          onClick={handleSend}
          disabled={disabled || !message.trim()}
          sx={{
            width: 36,
            height: 36,
            background: message.trim()
              ? "linear-gradient(135deg, #4FC3F7 0%, #29B6F6 100%)"
              : "linear-gradient(135deg, #E0E0E0 0%, #BDBDBD 100%)",
            opacity: !message.trim() ? 0.6 : 1,
            transition: "all 0.2s ease",
            "&:hover": {
              transform: "scale(1.1)",
              background: message.trim()
                ? "linear-gradient(135deg, #29B6F6 0%, #1976D2 100%)"
                : "linear-gradient(135deg, #E0E0E0 0%, #BDBDBD 100%)",
            },
            "&:disabled": {
              background: "linear-gradient(135deg, #E0E0E0 0%, #BDBDBD 100%)",
            },
          }}
        >
          <ArrowUpward sx={{ width: 16, height: 16, color: "white" }} />
        </IconButton>
      </Box>
    </Box>
  );
}
