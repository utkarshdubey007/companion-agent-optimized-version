import { TagsResponse } from "@shared/api";

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
  // Extract sessionid from the provided cookie string
  private static readonly SESSION_ID = "idzg7dkp3aiddmvrn78it4kaq9hl8yc4";
  private static readonly AUTH_COOKIES =
    "_fbp=fb.0.1752251216171.237035461266330472; _ga=GA1.1.760378924.1752251225; __stripe_mid=950d6f3c-dbf1-4223-856e-8c637002fc643f7797; sessionid=idzg7dkp3aiddmvrn78it4kaq9hl8yc4; _ga_JN6T86SWNW=GS2.1.s1753188967$o35$g1$t1753189595$j51$l0$h0";

  /**
   * Fetch current user tags
   * @returns Promise<TagsResponse>
   */
  static async getCurrentUserTags(): Promise<TagsResponse> {
    try {
      const response = await fetch("/api/v2/tags/current-user-tags", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "X-Session-ID": this.SESSION_ID,
          "X-Auth-Cookies": this.AUTH_COOKIES,
        },
        credentials: "include", // Include cookies in the request
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: TagsResponse = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching current user tags:", error);
      console.log("Using fallback mock data");
      // Return fallback data instead of throwing error
      return mockFallbackData;
    }
  }
}

/**
 * Hook-like function for easier usage in components
 */
export const fetchCurrentUserTags = () => TagsApiService.getCurrentUserTags();
