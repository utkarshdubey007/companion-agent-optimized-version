import { RequestHandler } from "express";
import { ChallengesResponse } from "@shared/api";
import { validateAuthentication } from "../utils/auth";

/**
 * Mock data for dependent challenges working
 */
const mockChallengesData = [
  {
    challenge: {
      title: "Hey, young crafters and book enthusiasts!",
      description: "Are you ready for a creative adventure inspired by your favorite books?",
      hash_tags: [],
      created_by: {
        first_name: "Kim",
        last_name: "Lee",
        is_superuser: false,
        picture_url: "http://localhost:8000/media/profiles/afadf666-6a44-4e33-8a35-6de5ccffe1b4.png",
        slug: "kyobo",
        partner_detail: {},
        id: 1458,
        user_type: "partner"
      },
      treehouse_user: {
        id: 1458,
        slug: "kyobo",
        name: "Kyobo",
        picture: "http://localhost:8000/media/profiles/afadf666-6a44-4e33-8a35-6de5ccffe1b4.png",
        description: "Largest bookstore chain in South Korea and global educator of Kids!",
        is_verified: true,
        user_type: "partner",
        type_of_organisation: "profit"
      },
      agora_group_id: "225065487630337",
      agora_chat_box: false,
      created_at: "2023-09-06T21:59:36.311185+00:00",
      updated_at: "2024-08-14T05:50:47.807287+00:00",
      id: 269,
      picture_url: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=480&h=270&fit=crop",
      picture_height: 270,
      picture_width: 480,
      start_date_time: "2023-09-06T22:00:00+00:00",
      start_date_time_ts: 1694037600,
      end_date_time: "2060-05-11T12:30:00+00:00",
      end_date_time_ts: 2851504200,
      has_submitted: false,
      character_type: "rooty",
      youtube_url: "",
      deadline: 7,
      tag_list: [
        {
          id: 21,
          tag: "Fantasy/Mythical"
        }
      ],
      challenge_scope: "public",
      submission_count: 6,
      accepted_dependent_count: 1,
      completed_dependent_count: 6,
      accepted_dependents: [
        {
          id: 2404,
          username: "oliver",
          first_name: "Oliver",
          profile: {
            picture_url: "",
            picture_height: "",
            picture_width: "",
            gender: "male",
            taletree_friend: "rushmore"
          }
        }
      ],
      completed_dependents: [
        {
          id: 1070,
          username: "Liliana09",
          first_name: "Liliana",
          profile: {
            picture_url: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=459&h=480&fit=crop&crop=face",
            picture_height: 480,
            picture_width: 459,
            gender: "female",
            taletree_friend: "rooty"
          }
        }
      ],
      special_camp: {},
      group: "",
      is_trending: false,
      video_url: ""
    },
    challenge_status: "SELECTED",
    days_left: 6,
    time_left: 518400000, // 6 days in milliseconds (6 * 24 * 60 * 60 * 1000)
    submission_date: "2025-07-29T13:21:26.872888+00:00"
  },
  {
    challenge: {
      title: "Mindful Reflections",
      description: "Reflect on a memory that makes you happy. What are the details you cherish the most about it?",
      hash_tags: [],
      created_by: {
        first_name: "Kim",
        last_name: "Lee",
        is_superuser: false,
        picture_url: "http://localhost:8000/media/profiles/afadf666-6a44-4e33-8a35-6de5ccffe1b4.png",
        slug: "kyobo",
        partner_detail: {},
        id: 1458,
        user_type: "partner"
      },
      treehouse_user: {
        id: 1458,
        slug: "kyobo",
        name: "Kyobo",
        picture: "http://localhost:8000/media/profiles/afadf666-6a44-4e33-8a35-6de5ccffe1b4.png",
        description: "Largest bookstore chain in South Korea and global educator of Kids!",
        is_verified: true,
        user_type: "partner",
        type_of_organisation: "profit"
      },
      agora_group_id: "",
      agora_chat_box: false,
      created_at: "2021-01-18T21:24:07.778116+00:00",
      updated_at: "2023-09-25T14:07:38.183797+00:00",
      id: 39,
      picture_url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1312&h=700&fit=crop",
      picture_height: 700,
      picture_width: 1312,
      start_date_time: "2021-01-25T08:00:00+00:00",
      start_date_time_ts: 1611561600,
      end_date_time: "2021-01-31T08:00:00+00:00",
      end_date_time_ts: 1612080000,
      has_submitted: false,
      character_type: "uni",
      youtube_url: "",
      deadline: 7,
      tag_list: [],
      challenge_scope: "",
      submission_count: 4,
      accepted_dependent_count: 1,
      completed_dependent_count: 16,
      accepted_dependents: [
        {
          id: 2404,
          username: "oliver",
          first_name: "Oliver",
          profile: {
            picture_url: "",
            picture_height: "",
            picture_width: "",
            gender: "male",
            taletree_friend: "rushmore"
          }
        }
      ],
      completed_dependents: [
        {
          id: 200,
          username: "Cosmomeow",
          first_name: "Raeko",
          profile: {
            picture_url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=381&h=480&fit=crop&crop=face",
            picture_height: 480,
            picture_width: 381,
            gender: "male",
            taletree_friend: ""
          }
        }
      ],
      special_camp: {},
      group: "",
      is_trending: false,
      video_url: ""
    },
    challenge_status: "SELECTED",
    days_left: 6,
    time_left: 432000000, // 5 days in milliseconds (5 * 24 * 60 * 60 * 1000)
    submission_date: "2025-07-29T13:20:59.971552+00:00"
  },
  {
    challenge: {
      title: "Christmas Challenge By Expert",
      description: "Celebrations around the corner",
      hash_tags: [],
      created_by: {
        first_name: "Bob",
        last_name: "Mathew",
        is_superuser: false,
        picture_url: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
        slug: "bob-mathew",
        partner_detail: "",
        id: 1785,
        user_type: "camp master"
      },
      treehouse_user: {
        camp_master_id: 1785,
        slug: "bob-mathew",
        name: "Bob Mathew",
        picture: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
        description: "Lets paint together and learn from one another",
        is_verified: true,
        agora_group_id: "251644746989569",
        user_type: "camp master"
      },
      agora_group_id: "251644746989569",
      agora_chat_box: false,
      created_at: "2024-11-07T10:24:56.976322+00:00",
      updated_at: "2024-12-30T11:24:11.458437+00:00",
      id: 387,
      picture_url: "https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=245&h=137&fit=crop",
      picture_height: 137,
      picture_width: 245,
      start_date_time: "2024-11-04T11:30:00+00:00",
      start_date_time_ts: 1730719800,
      end_date_time: "2025-01-14T12:30:00+00:00",
      end_date_time_ts: 1736857800,
      has_submitted: false,
      character_type: "rushmore",
      youtube_url: "",
      deadline: 7,
      tag_list: [
        {
          id: 11,
          tag: "❤️Kindness"
        },
        {
          id: 24,
          tag: "Christmas"
        }
      ],
      challenge_scope: "public",
      submission_count: 0,
      accepted_dependent_count: 7,
      completed_dependent_count: 0,
      accepted_dependents: [
        {
          id: 1874,
          username: "Leo",
          first_name: "Leonard",
          profile: {
            picture_url: "",
            picture_height: "",
            picture_width: "",
            gender: "male",
            taletree_friend: "rooty"
          }
        }
      ],
      completed_dependents: [],
      special_camp: {},
      group: "",
      is_trending: true,
      video_url: ""
    },
    challenge_status: "SELECTED",
    days_left: 6,
    time_left: 259200000, // 3 days in milliseconds (3 * 24 * 60 * 60 * 1000)
    submission_date: "2025-07-29T13:18:00.900470+00:00"
  }
];

/**
 * GET /api/v2/challenges/dependent-challenges/working
 * Mock endpoint for fetching dependent challenges working
 */
export const getDependentChallengesWorking: RequestHandler = (req, res) => {
  try {
    // Log authentication headers for debugging
    const sessionId = req.headers['x-session-id'] as string;
    const authCookies = req.headers['x-auth-cookies'] as string;
    const dependentId = req.query.dependent_id;
    
    console.log('Challenges API Request:', {
      sessionId,
      dependentId,
      authCookies: authCookies ? 'Present' : 'Missing'
    });

    // Check for authentication
    if (sessionId) {
      console.log('✅ Challenges Authentication detected - sessionid:', sessionId);
    } else {
      console.log('⚠️ No sessionid found in challenges request');
    }

    // Validate sessionid (using updated token)
    const expectedSessionId = 'ym7qxiur5kruzip1lv7jgrtp2fc9b7rt';
    const isAuthenticated = sessionId === expectedSessionId;

    if (!isAuthenticated) {
      console.log('❌ Challenges Authentication failed - invalid or missing sessionid');
      const errorResponse: ChallengesResponse = {
        result_code: 0,
        error_info: "Authentication required",
        data: [],
        has_more: false,
        total_count: 0
      };
      return res.status(401).json(errorResponse);
    }

    console.log('🎉 Challenges Authentication successful - returning dependent challenges');

    // Simulate a slight delay to mimic real API behavior
    setTimeout(() => {
      const response: ChallengesResponse = {
        result_code: 1,
        error_info: "",
        data: mockChallengesData,
        has_more: false,
        total_count: mockChallengesData.length
      };

      res.json(response);
    }, 150);
  } catch (error) {
    console.error('Error in getDependentChallengesWorking:', error);
    
    const errorResponse: ChallengesResponse = {
      result_code: 0,
      error_info: "Internal server error",
      data: [],
      has_more: false,
      total_count: 0
    };

    res.status(500).json(errorResponse);
  }
};
