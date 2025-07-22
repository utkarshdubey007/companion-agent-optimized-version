import { TagsResponse } from '@shared/api';

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
    { id: 15, tag: "Food" }
  ],
  has_more: false,
  total_count: 6
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
      const response = await fetch('/api/v2/tags/current-user-tags', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: TagsResponse = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching current user tags:', error);
      console.log('Using fallback mock data');
      // Return fallback data instead of throwing error
      return mockFallbackData;
    }
  }
}

/**
 * Hook-like function for easier usage in components
 */
export const fetchCurrentUserTags = () => TagsApiService.getCurrentUserTags();
