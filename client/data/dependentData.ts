import { DependentData } from '@shared/api';

/**
 * Sample dependent user data
 * In a real application, this would typically be fetched from an API
 */
export const dependent: DependentData = {
  id: 2456,
  username: "emillie",
  creation_count: 0,
  challenge_count: 0,
  binky_count: 0,
  dependent_creation_count: 0,
  dependent_challenge_count: 0,
  accepted_challenge_count: 0,
  completed_challenge_count: 0,
  first_name: "emillie",
  last_name: "Simmons",
  is_verified: true,
  date_joined: "2025-05-06T13:43:21.175048+00:00",
  picture_url: "",
  slug: "emillie",
  taletree_friend: "uni",
  is_superuser: false,
  user_type: "dependent",
  viewer: "dependent",
  profile: {
    is_activated: true,
    gender: "female",
    birthdate: "2019-03-06",
    taletree_friend: "uni",
    banner_is_fullscreen: false,
    banner_theme: "",
    favorites: ["pink", "cricket", "Lion"],
    nick_name: "",
    tag_list: "",
    banner_url: "",
    picture_url: "",
    picture_height: "",
    picture_width: "",
    group: {},
    camp_status: "pending_payment",
    treehouse: "",
    school_name: "safd",
    one_time_plan: "Emeralites",
    ask_for_mood: true,
    tribe_request_status: "",
    query: "",
    conversation_ids: "b74bf0f3-a61b-45e9-b676-b4cee150fdb0"
  },
  subscriptions: "",
  schedule_subscription: "",
  special_camp: {
    purchased: false,
    attend: "PENDING",
    special_camp_id: "",
    purchase_date: "",
    name: "",
    special_camp_count: 0
  },
  school_details: ""
};

/**
 * Logic to determine if the mood picker should be shown
 * @param dependentData - The dependent user data
 * @returns boolean indicating if mood picker should be displayed
 */
export const shouldAskForMood = (dependentData: DependentData | null = dependent): boolean => {
  return Boolean(
    dependentData?.profile?.taletree_friend &&
    dependentData?.profile?.ask_for_mood &&
    localStorage.getItem('checkin_modal') === 'true'
  );
};

/**
 * Utility functions to manage mood picker state
 */
export const moodPickerUtils = {
  // Enable mood picker to show on next page load or manual trigger
  enableMoodPicker: () => {
    localStorage.setItem('checkin_modal', 'true');
  },

  // Disable mood picker
  disableMoodPicker: () => {
    localStorage.setItem('checkin_modal', 'false');
  },

  // Check if mood picker is enabled
  isMoodPickerEnabled: () => {
    return localStorage.getItem('checkin_modal') === 'true';
  },

  // Reset mood picker state (useful for testing)
  resetMoodPickerState: () => {
    localStorage.removeItem('checkin_modal');
  }
};
