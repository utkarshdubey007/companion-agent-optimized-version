import React from "react";
import { TaleTreeChatAnswer } from "@shared/api";
import { AITextMessage } from "./AITextMessage";
import AIChallengeMessage from "./AIChallengeMessage";

interface AIMessageProps {
  header: string;
  message: string;
  footer: string;
  timestamp?: Date;
  onReply?: () => void;
  onRegenerate?: () => void;
  onLike?: () => void;
  className?: string;
}

/**
 * Standalone AI Message component for simple text messages
 */
export function AIMessage({
  header,
  message,
  footer,
  timestamp,
  onReply,
  onRegenerate,
  onLike,
  className,
}: AIMessageProps) {
  return (
    <AITextMessage
      content={message}
      timestamp={timestamp}
      onReply={onReply}
      onRegenerate={onRegenerate}
      onLike={onLike}
      headerTitle={header}
      footerTip={footer}
      className={className}
    />
  );
}

interface TaleTreeAIMessageProps {
  data: TaleTreeChatAnswer;
  timestamp?: Date;
  onAccept?: () => void;
  onRegenerate?: () => void;
  onChatMore?: () => void;
  className?: string;
}

/**
 * TaleTree AI Message component that handles both conversation types
 */
export function TaleTreeAIMessage({
  data,
  timestamp,
  onAccept,
  onRegenerate,
  onChatMore,
  className,
}: TaleTreeAIMessageProps) {
  // Handle small_talk conversation type
  if (data.conversation_type === "small_talk") {
    return (
      <AIMessage
        header={data.header}
        message={data.msg}
        footer={data.footer}
        timestamp={timestamp}
        onRegenerate={onRegenerate}
        className={className}
      />
    );
  }

  // Handle new_challenge conversation type
  if (data.conversation_type === "new_challenge") {
    return (
      <AIChallengeMessage
        title={data.title || data.header}
        description={data.description || data.msg}
        mediaUrl={data.mediaUrl}
        mediaType={data.mediaType}
        onAccept={onAccept}
        onRegenerate={onRegenerate}
        onChatMore={onChatMore}
      />
    );
  }

  // Fallback to small_talk if conversation_type is unexpected
  return (
    <AIMessage
      header={data.header}
      message={data.msg}
      footer={data.footer}
      timestamp={timestamp}
      onRegenerate={onRegenerate}
      className={className}
    />
  );
}

export default TaleTreeAIMessage;
