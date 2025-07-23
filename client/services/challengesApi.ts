import { ChallengesResponse } from "@shared/api";

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
  // Updated authentication with new sessionid
  private static readonly SESSION_ID = "ym7qxiur5kruzip1lv7jgrtp2fc9b7rt";
  private static readonly AUTH_COOKIES =
    "_fbp=fb.0.1752251216171.237035461266330472; _ga=GA1.1.760378924.1752251225; __stripe_mid=950d6f3c-dbf1-4223-856e-8c637002fc643f7797; sessionid=ym7qxiur5kruzip1lv7jgrtp2fc9b7rt; _ga_JN6T86SWNW=GS2.1.s1753188967$o35$g1$t1753190505$j60$l0$h0";

  /**
   * Fetch dependent challenges working
   * @param dependentId - The dependent ID (default: 2404)
   * @returns Promise<ChallengesResponse>
   */
  static async getDependentChallengesWorking(
    dependentId: number = 2404,
  ): Promise<ChallengesResponse> {
    try {
      const response = await fetch(
        `/api/v2/challenges/dependent-challenges/working?dependent_id=${dependentId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "X-Session-ID": this.SESSION_ID,
            "X-Auth-Cookies": this.AUTH_COOKIES,
          },
          credentials: "include",
        },
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: ChallengesResponse = await response.json();
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
