import { RequestHandler } from "express";
import { TagsResponse } from "@shared/api";
import { validateAuthentication } from "../utils/auth";

/**
 * Mock data for current user tags
 * This simulates the response from http://localhost:8000/api/v2/tags/current-user-tags
 */
const mockTagsData = [
  {
    id: 1,
    tag: "👾 Anime",
  },
  {
    id: 11,
    tag: "❤️Kindness",
  },
  {
    id: 13,
    tag: "Family",
  },
  {
    id: 14,
    tag: "Monsters",
  },
  {
    id: 2,
    tag: "🐶 Animals",
  },
  {
    id: 15,
    tag: "Food",
  },
];

/**
 * GET /api/v2/tags/current-user-tags
 * Mock endpoint for fetching current user tags
 */
export const getCurrentUserTags: RequestHandler = (req, res) => {
  try {
    console.log("Tags API Request received");

    // Validate authentication using the new utility
    const authResult = validateAuthentication(req.headers);

    if (!authResult.isValid) {
      console.log("❌ Tags Authentication failed:", authResult.message);
      const errorResponse: TagsResponse = {
        result_code: 0,
        error_info: authResult.message,
        data: [],
        has_more: false,
        total_count: 0,
      };
      return res.status(401).json(errorResponse);
    }

    console.log(
      "🎉 Tags Authentication successful - sessionid:",
      authResult.sessionId,
    );

    // Simulate a slight delay to mimic real API behavior
    setTimeout(() => {
      const response: TagsResponse = {
        result_code: 1,
        error_info: "",
        data: mockTagsData,
        has_more: false,
        total_count: mockTagsData.length,
      };

      res.json(response);
    }, 100);
  } catch (error) {
    console.error("Error in getCurrentUserTags:", error);

    const errorResponse: TagsResponse = {
      result_code: 0,
      error_info: "Internal server error",
      data: [],
      has_more: false,
      total_count: 0,
    };

    res.status(500).json(errorResponse);
  }
};
