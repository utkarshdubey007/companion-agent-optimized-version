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

/**
 * Tags API interfaces
 */
export interface Tag {
  id: number;
  tag: string;
}

export interface TagsResponse {
  result_code: number;
  error_info: string;
  data: Tag[];
  has_more: boolean;
  total_count: number;
}

/**
 * Challenges API interfaces
 */
export interface UserProfile {
  picture_url: string;
  picture_height: string | number;
  picture_width: string | number;
  gender: string;
  taletree_friend: string;
}

export interface AcceptedDependent {
  id: number;
  username: string;
  first_name: string;
  profile: UserProfile;
}

export interface CreatedBy {
  first_name: string;
  last_name: string;
  is_superuser: boolean;
  picture_url: string;
  slug: string;
  partner_detail: any;
  id: number;
  user_type: string;
}

export interface TreehouseUser {
  id?: number;
  camp_master_id?: number;
  slug: string;
  name: string;
  picture: string;
  description: string;
  is_verified: boolean;
  user_type: string;
  type_of_organisation?: string;
  agora_group_id?: string;
}

export interface Challenge {
  title: string;
  description: string;
  hash_tags: any[];
  created_by: CreatedBy;
  treehouse_user: TreehouseUser;
  agora_group_id: string;
  agora_chat_box: boolean;
  created_at: string;
  updated_at: string;
  id: number;
  picture_url: string;
  picture_height: number;
  picture_width: number;
  start_date_time: string;
  start_date_time_ts: number;
  end_date_time: string;
  end_date_time_ts: number;
  has_submitted: boolean;
  character_type: string;
  youtube_url: string;
  deadline: number;
  tag_list: Tag[];
  challenge_scope: string;
  submission_count: number;
  accepted_dependent_count: number;
  completed_dependent_count: number;
  accepted_dependents: AcceptedDependent[];
  completed_dependents: AcceptedDependent[];
  special_camp: any;
  group: string;
  is_trending: boolean;
  video_url: string;
}

export interface ChallengeItem {
  challenge: Challenge;
  challenge_status: string;
  days_left: number;
  time_left: number;
  submission_date: string;
}

export interface ChallengesResponse {
  result_code: number;
  error_info: string;
  data: ChallengeItem[];
  has_more: boolean;
  total_count: number;
}

/**
 * TaleTree Chat API interfaces
 */
export interface TaleTreeChatInputs {
  username: string;
  user_id: number;
  companion: string;
  birthdate: string;
  accepted_challenge_count: number;
  challenge_id: string | null;
  action: string;
  emotion: string | null;
  branches: string;
  challenge_details: string | null;
}

export interface TaleTreeChatRequest {
  conversation_id: string | null;
  query: string;
}

export interface TaleTreeChatAnswer {
  action: string;
  conversation_type: "small_talk" | "new_challenge";
  header: string;
  msg: string;
  footer: string;
  title?: string;
  description?: string;
  mediaUrl?: string;
  mediaType?: "image" | "video";
}

export interface TaleTreeChatResponse {
  conversation_id: string;
  outputs: {
    answer: TaleTreeChatAnswer;
  };
}
