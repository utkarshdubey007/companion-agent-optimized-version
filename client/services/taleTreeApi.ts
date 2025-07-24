import { TaleTreeChatRequest, TaleTreeChatResponse } from "@shared/api";

/**
 * TaleTree Chat API Service
 * Handles communication with the TaleTree AI chat endpoint
 */
export class TaleTreeApiService {
  private static readonly API_BASE_URL = "http://localhost:8000";
  private static readonly CHAT_ENDPOINT = "/api/v3/open-ai/chat";
  private static readonly CONVERSATION_KEY = "taletree_conversation_id";

  /**
   * Get conversation ID from localStorage
   */
  static getStoredConversationId(): string | null {
    try {
      return localStorage.getItem(this.CONVERSATION_KEY);
    } catch (error) {
      console.warn("Failed to read from localStorage:", error);
      return null;
    }
  }

  /**
   * Save conversation ID to localStorage
   */
  static saveConversationId(conversationId: string): void {
    try {
      localStorage.setItem(this.CONVERSATION_KEY, conversationId);
      console.log("💾 Saved conversation_id to localStorage:", conversationId);
    } catch (error) {
      console.warn("Failed to save to localStorage:", error);
    }
  }

  /**
   * Send a chat request to TaleTree AI
   * @param request - The chat request payload
   * @returns Promise<TaleTreeChatResponse>
   */
  static async sendChatMessage(
    request: TaleTreeChatRequest,
  ): Promise<TaleTreeChatResponse> {
    try {
      console.log("🚀 Sending TaleTree chat request:", request);

      const response = await fetch(
        `${this.API_BASE_URL}${this.CHAT_ENDPOINT}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // Add any authentication headers if needed
          },
          body: JSON.stringify(request),
        },
      );

      if (!response.ok) {
        throw new Error(
          `TaleTree API request failed: ${response.status} ${response.statusText}`,
        );
      }

      const data = await response.json();
      console.log("✅ TaleTree chat response received:", data);

      // Save conversation_id to localStorage if present
      if (data.conversation_id) {
        this.saveConversationId(data.conversation_id);
      }

      return data;
    } catch (error) {
      console.error("❌ Error in TaleTree chat request:", error);
      throw error;
    }
  }

  /**
   * Initialize chat on page load
   * @returns Promise<TaleTreeChatResponse>
   */
  static async initializeChat(): Promise<TaleTreeChatResponse> {
    const initRequest: TaleTreeChatRequest = {
      conversation_id: null,
      query: "hi",
    };

    return this.sendChatMessage(initRequest);
  }

  /**
   * Send chat message with specific query
   * @param query - The message query
   * @returns Promise<TaleTreeChatResponse>
   */
  static async sendMessage(query: string): Promise<TaleTreeChatResponse> {
    const conversationId = this.getStoredConversationId();

    const request: TaleTreeChatRequest = {
      conversation_id: conversationId,
      query,
    };

    return this.sendChatMessage(request);
  }
}

/**
 * Hook-like functions for easier usage in components
 */
export const initializeTaleTreeChat = () => TaleTreeApiService.initializeChat();

export const sendTaleTreeMessage = (query: string) =>
  TaleTreeApiService.sendMessage(query);
