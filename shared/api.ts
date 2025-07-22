/**
 * Shared code between client and server
 * Useful to share types between client and server
 * and/or small pure JS functions that can be used on both client and server
 */

/**
 * Example response type for /api/demo
 */
export interface DemoResponse {
  message: string;
}

/**
 * Dependent user data structure
 */
export interface DependentProfile {
  is_activated: boolean;
  gender: string;
  birthdate: string;
  taletree_friend: string;
  banner_is_fullscreen: boolean;
  banner_theme: string;
  favorites: string[];
  nick_name: string;
  tag_list: string;
  banner_url: string;
  picture_url: string;
  picture_height: string;
  picture_width: string;
  group: Record<string, any>;
  camp_status: string;
  treehouse: string;
  school_name: string;
  one_time_plan: string;
  ask_for_mood: boolean;
  tribe_request_status: string;
  query: string;
  conversation_ids: string;
}

export interface SpecialCamp {
  purchased: boolean;
  attend: string;
  special_camp_id: string;
  purchase_date: string;
  name: string;
  special_camp_count: number;
}

export interface DependentData {
  id: number;
  username: string;
  creation_count: number;
  challenge_count: number;
  binky_count: number;
  dependent_creation_count: number;
  dependent_challenge_count: number;
  accepted_challenge_count: number;
  completed_challenge_count: number;
  first_name: string;
  last_name: string;
  is_verified: boolean;
  date_joined: string;
  picture_url: string;
  slug: string;
  taletree_friend: string;
  is_superuser: boolean;
  user_type: string;
  viewer: string;
  profile: DependentProfile;
  subscriptions: string;
  schedule_subscription: string;
  special_camp: SpecialCamp;
  school_details: string;
}
