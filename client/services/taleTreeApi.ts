import { TaleTreeChatRequest, TaleTreeChatResponse } from "@shared/api";

/**
 * TaleTree Chat API Service
 * Handles communication with the TaleTree AI chat endpoint
 */
export class TaleTreeApiService {
  private static readonly API_BASE_URL = "http://localhost:8000";
  private static readonly CHAT_ENDPOINT = "/api/v3/open-ai/chat";

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
      return data;
    } catch (error) {
      console.error("❌ Error in TaleTree chat request:", error);
      throw error;
    }
  }

  /**
   * Initialize chat on page load
   * @param user - Username
   * @param conversationId - Conversation ID
   * @returns Promise<TaleTreeChatResponse>
   */
  static async initializeChat(
    user: string = "oliver",
    conversationId: string = "a4490c53-de8f-484d-91d1-4cdd302dafca",
  ): Promise<TaleTreeChatResponse> {
    const initRequest: TaleTreeChatRequest = {
      query: "We should continue where we left off?",
      user,
      conversation_id: conversationId,
      inputs: {
        username: user,
        user_id: 2404,
        companion: "rushmore",
        birthdate: "2018-04-29",
        accepted_challenge_count: 3,
        challenge_id: null,
        action: "imagine",
        emotion: null,
        branches:
          "These are my current interest branches: Anime, Kindness, Family, Monsters, Animals, Food",
        challenge_details: null,
      },
      files: null,
    };

    return this.sendChatMessage(initRequest);
  }

  /**
   * Send chat message with specific action
   * @param action - The action to trigger
   * @param user - Username
   * @param conversationId - Conversation ID
   * @returns Promise<TaleTreeChatResponse>
   */
  static async sendActionMessage(
    action: string,
    user: string = "oliver",
    conversationId: string = "a4490c53-de8f-484d-91d1-4cdd302dafca",
  ): Promise<TaleTreeChatResponse> {
    const actionRequest: TaleTreeChatRequest = {
      query: `Let's ${action}!`,
      user,
      conversation_id: conversationId,
      inputs: {
        username: user,
        user_id: 2404,
        companion: "rushmore",
        birthdate: "2018-04-29",
        accepted_challenge_count: 3,
        challenge_id: null,
        action,
        emotion: null,
        branches:
          "These are my current interest branches: Anime, Kindness, Family, Monsters, Animals, Food",
        challenge_details: null,
      },
      files: null,
    };

    return this.sendChatMessage(actionRequest);
  }
}

/**
 * Hook-like function for easier usage in components
 */
export const initializeTaleTreeChat = () => TaleTreeApiService.initializeChat();

export const sendTaleTreeAction = (action: string) =>
  TaleTreeApiService.sendActionMessage(action);
