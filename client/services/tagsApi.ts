import { TagsResponse } from "@shared/api";
import { authenticatedGet, parseJsonResponse } from "../utils/authClient";

/**
 * Fallback mock data in case API fails
 */
const mockFallbackData: TagsResponse = {
  result_code: 1,
  error_info: "",
  data: [
    { id: 1, tag: "👾 Anime" },
    { id: 11, tag: "❤️Kindness" },
    { id: 13, tag: "Family" },
    { id: 14, tag: "Monsters" },
    { id: 2, tag: "🐶 Animals" },
    { id: 15, tag: "Food" },
  ],
  has_more: false,
  total_count: 6,
};

/**
 * API service for fetching current user tags
 */
export class TagsApiService {
  /**
   * Fetch current user tags
   * @returns Promise<TagsResponse>
   */
  static async getCurrentUserTags(): Promise<TagsResponse> {
    try {
      console.log("🏷️ Attempting to fetch current user tags...");
      const response = await authenticatedGet("/api/v2/tags/current-user-tags");
      console.log("🏷️ Tags API response status:", response.status);
      const data = await parseJsonResponse<TagsResponse>(response);
      console.log("🏷️ Tags API data received:", data);
      return data;
    } catch (error) {
      console.error("❌ Error fetching current user tags:", error);
      console.log("🔄 Using fallback mock data for tags");
      // Return fallback data instead of throwing error
      return mockFallbackData;
    }
  }
}

/**
 * Hook-like function for easier usage in components
 */
export const fetchCurrentUserTags = () => TagsApiService.getCurrentUserTags();
