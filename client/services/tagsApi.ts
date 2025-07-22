import { TagsResponse } from '@shared/api';

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
      throw error;
    }
  }
}

/**
 * Hook-like function for easier usage in components
 */
export const fetchCurrentUserTags = () => TagsApiService.getCurrentUserTags();
