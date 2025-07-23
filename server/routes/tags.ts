import { RequestHandler } from "express";
import { TagsResponse } from "@shared/api";

/**
 * Mock data for current user tags
 * This simulates the response from http://localhost:8000/api/v2/tags/current-user-tags
 */
const mockTagsData = [
  {
    id: 1,
    tag: "👾 Anime"
  },
  {
    id: 11,
    tag: "❤️Kindness"
  },
  {
    id: 13,
    tag: "Family"
  },
  {
    id: 14,
    tag: "Monsters"
  },
  {
    id: 2,
    tag: "🐶 Animals"
  },
  {
    id: 15,
    tag: "Food"
  }
];

/**
 * GET /api/v2/tags/current-user-tags
 * Mock endpoint for fetching current user tags
 */
export const getCurrentUserTags: RequestHandler = (req, res) => {
  try {
    // Log authentication headers for debugging
    const sessionId = req.headers['x-session-id'] as string;
    const authCookies = req.headers['x-auth-cookies'] as string;

    console.log('Tags API Request Headers:', {
      sessionId,
      authCookies: authCookies ? 'Present' : 'Missing',
      cookie: req.headers.cookie,
      userAgent: req.headers['user-agent']
    });

    // Check for authentication
    if (sessionId) {
      console.log('✅ Authentication detected - sessionid:', sessionId);
    } else {
      console.log('⚠️ No sessionid found in custom headers');
    }

    // Validate sessionid (simple validation for demo)
    const expectedSessionId = 'w5f3jr2arpxfvxqt88eb9pi5b0dbcxdq';
    const isAuthenticated = sessionId === expectedSessionId;

    if (!isAuthenticated) {
      console.log('❌ Authentication failed - invalid or missing sessionid');
      const errorResponse: TagsResponse = {
        result_code: 0,
        error_info: "Authentication required",
        data: [],
        has_more: false,
        total_count: 0
      };
      return res.status(401).json(errorResponse);
    }

    console.log('🎉 Authentication successful - returning user tags');

    // Simulate a slight delay to mimic real API behavior
    setTimeout(() => {
      const response: TagsResponse = {
        result_code: 1,
        error_info: "",
        data: mockTagsData,
        has_more: false,
        total_count: mockTagsData.length
      };

      res.json(response);
    }, 100);
  } catch (error) {
    console.error('Error in getCurrentUserTags:', error);

    const errorResponse: TagsResponse = {
      result_code: 0,
      error_info: "Internal server error",
      data: [],
      has_more: false,
      total_count: 0
    };

    res.status(500).json(errorResponse);
  }
};
