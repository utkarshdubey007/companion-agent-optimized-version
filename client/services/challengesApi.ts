import { ChallengesResponse } from "@shared/api";
import { authenticatedGet, parseJsonResponse } from "../utils/authClient";

/**
 * Fallback mock data in case API fails
 */
const mockChallengesData: ChallengesResponse = {
  result_code: 1,
  error_info: "",
  data: [
    {
      challenge: {
        title: "Hey, young crafters and book enthusiasts!",
        description:
          "Are you ready for a creative adventure inspired by your favorite books?",
        hash_tags: [],
        created_by: {
          first_name: "Kim",
          last_name: "Lee",
          is_superuser: false,
          picture_url:
            "http://localhost:8000/media/profiles/afadf666-6a44-4e33-8a35-6de5ccffe1b4.png",
          slug: "kyobo",
          partner_detail: {},
          id: 1458,
          user_type: "partner",
        },
        treehouse_user: {
          id: 1458,
          slug: "kyobo",
          name: "Kyobo",
          picture:
            "http://localhost:8000/media/profiles/afadf666-6a44-4e33-8a35-6de5ccffe1b4.png",
          description:
            "Largest bookstore chain in South Korea and global educator of Kids!",
          is_verified: true,
          user_type: "partner",
          type_of_organisation: "profit",
        },
        agora_group_id: "225065487630337",
        agora_chat_box: false,
        created_at: "2023-09-06T21:59:36.311185+00:00",
        updated_at: "2024-08-14T05:50:47.807287+00:00",
        id: 269,
        picture_url:
          "http://localhost:8000/media/challenges/60f0280f-4fb0-4014-b453-c03a95f181c2/image.jpeg",
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
            tag: "Fantasy/Mythical",
          },
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
              taletree_friend: "rushmore",
            },
          },
        ],
        completed_dependents: [],
        special_camp: {},
        group: "",
        is_trending: false,
        video_url: "",
      },
      challenge_status: "SELECTED",
      days_left: 6,
      time_left: 518400, // 6 days in seconds (6 * 24 * 60 * 60)
      submission_date: "2025-07-29T13:21:26.872888+00:00",
    },
  ],
  has_more: false,
  total_count: 3,
};

/**
 * API service for fetching dependent challenges
 */
export class ChallengesApiService {
  /**
   * Fetch dependent challenges working
   * @param dependentId - The dependent ID (default: 2404)
   * @returns Promise<ChallengesResponse>
   */
  static async getDependentChallengesWorking(
    dependentId: number = 2404,
  ): Promise<ChallengesResponse> {
    try {
      const response = await authenticatedGet(
        `/api/v2/challenges/dependent-challenges/working?dependent_id=${dependentId}`
      );
      const data = await parseJsonResponse<ChallengesResponse>(response);
      return data;
    } catch (error) {
      console.error("Error fetching dependent challenges:", error);
      console.log("Using fallback mock data for challenges");
      // Return fallback data instead of throwing error
      return mockChallengesData;
    }
  }
}

/**
 * Hook-like function for easier usage in components
 */
export const fetchDependentChallenges = (dependentId?: number) =>
  ChallengesApiService.getDependentChallengesWorking(dependentId);
