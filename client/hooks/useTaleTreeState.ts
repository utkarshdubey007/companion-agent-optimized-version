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
  const [conversationId] = useState("a4490c53-de8f-484d-91d1-4cdd302dafca");
  const [user] = useState("oliver");

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
      const response = await TaleTreeApiService.initializeChat(user, conversationId);
      setChatResponse(response);
      
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
  }, [isInitialized, isLoading, user, conversationId]);

  /**
   * Send action request to TaleTree API
   */
  const sendAction = useCallback(async (action: string) => {
    if (isLoading) {
      console.log("⏳ Request already in progress, ignoring click");
      return;
    }

    setIsLoading(true);
    try {
      console.log(`🎯 Sending action: ${action}`);
      const response = await TaleTreeApiService.sendActionMessage(action, user, conversationId);
      setChatResponse(response);
      setActiveAction(action);
      console.log(`✅ Action ${action} completed successfully`);
    } catch (error) {
      console.error(`❌ Failed to send action ${action}:`, error);
    } finally {
      setIsLoading(false);
    }
  }, [isLoading, user, conversationId]);

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
    sendAction,
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
