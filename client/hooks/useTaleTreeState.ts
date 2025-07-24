import { useState, useEffect, useCallback } from "react";
import { TaleTreeApiService } from "@/services/taleTreeApi";
import { TaleTreeChatResponse } from "@shared/api";

/**
 * Custom hook for managing TaleTree AI chat state
 */
export function useTaleTreeState() {
  const [activeAction, setActiveAction] = useState<string>("imagine");
  const [isLoading, setIsLoading] = useState(false);
  const [chatResponse, setChatResponse] = useState<TaleTreeChatResponse | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);
  const [conversationId, setConversationId] = useState<string | null>(null);

  // Action to icon index mapping
  const actionIconMap: Record<string, number> = {
    imagine: 0,
    play: 1,
    create: 2,
    store: 3,
    reflect: 4,
    reward: 5,
  };

  /**
   * Initialize chat on first load
   */
  const initializeChat = useCallback(async () => {
    if (isInitialized || isLoading) return;

    setIsLoading(true);
    try {
      console.log("🌟 Initializing TaleTree chat...");
      const response = await TaleTreeApiService.initializeChat();
      setChatResponse(response);

      // Store the conversation_id from response
      if (response.conversation_id) {
        setConversationId(response.conversation_id);
      }

      // Set active action from response
      if (response.outputs?.answer?.action) {
        setActiveAction(response.outputs.answer.action);
      }

      setIsInitialized(true);
      console.log("✅ TaleTree chat initialized successfully");
    } catch (error) {
      console.error("❌ Failed to initialize TaleTree chat:", error);
    } finally {
      setIsLoading(false);
    }
  }, [isInitialized, isLoading]);

  /**
   * Send message to TaleTree API
   */
  const sendMessage = useCallback(async (query: string) => {
    if (isLoading) {
      console.log("⏳ Request already in progress, ignoring request");
      return;
    }

    setIsLoading(true);
    try {
      console.log(`🎯 Sending message: ${query}`);
      const response = await TaleTreeApiService.sendMessage(query);
      setChatResponse(response);

      // Update conversation_id if it changed
      if (response.conversation_id && response.conversation_id !== conversationId) {
        setConversationId(response.conversation_id);
      }

      // Set active action from response if present
      if (response.outputs?.answer?.action) {
        setActiveAction(response.outputs.answer.action);
      }

      console.log(`✅ Message sent successfully`);
    } catch (error) {
      console.error(`❌ Failed to send message:`, error);
    } finally {
      setIsLoading(false);
    }
  }, [isLoading, conversationId]);

  /**
   * Get highlighted icon index based on active action
   */
  const getHighlightedIconIndex = useCallback((): number => {
    return actionIconMap[activeAction] ?? 0;
  }, [activeAction]);

  /**
   * Check if a specific icon should be highlighted
   */
  const isIconHighlighted = useCallback((iconIndex: number): boolean => {
    return getHighlightedIconIndex() === iconIndex;
  }, [getHighlightedIconIndex]);

  /**
   * Initialize chat on component mount
   */
  useEffect(() => {
    initializeChat();
  }, [initializeChat]);

  return {
    // State
    activeAction,
    isLoading,
    chatResponse,
    isInitialized,
    conversationId,
    user,
    
    // Actions
    sendMessage,
    initializeChat,
    
    // Helpers
    getHighlightedIconIndex,
    isIconHighlighted,
    actionIconMap,
    
    // Setters (if needed for external control)
    setActiveAction,
    setChatResponse,
  };
}

export type TaleTreeState = ReturnType<typeof useTaleTreeState>;
