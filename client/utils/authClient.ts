/**
 * Client-side authentication utilities for API requests
 */

// User provided authentication token
const AUTH_TOKEN =
  "_fbp=fb.0.1752251216171.237035461266330472; _ga=GA1.1.760378924.1752251225; __stripe_mid=950d6f3c-dbf1-4223-856e-8c637002fc643f7797; sessionid=jjyww1tp4zv8gwg1l9xvf0mckgwwcd3t; _ga_JN6T86SWNW=GS2.1.s1753277585$o39$g1$t1753279947$j57$l0$h0";

/**
 * Extract session ID from cookie string
 */
export function extractSessionId(cookieString: string): string | null {
  const sessionMatch = cookieString.match(/sessionid=([^;]+)/);
  return sessionMatch ? sessionMatch[1] : null;
}

/**
 * Get the session ID from the auth token
 */
export function getSessionId(): string {
  return extractSessionId(AUTH_TOKEN) || "";
}

/**
 * Get the full authentication token
 */
export function getAuthToken(): string {
  return AUTH_TOKEN;
}

/**
 * Create authenticated headers for API requests
 */
export function createAuthHeaders(): Record<string, string> {
  return {
    "Content-Type": "application/json",
    "X-Session-ID": getSessionId(),
    "X-Auth-Cookies": AUTH_TOKEN,
    "X-Auth-Token": AUTH_TOKEN,
  };
}

/**
 * Make an authenticated fetch request with timeout
 */
export async function authenticatedFetch(
  url: string,
  options: RequestInit = {},
): Promise<Response> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

  const defaultOptions: RequestInit = {
    credentials: "include",
    signal: controller.signal,
    headers: {
      ...createAuthHeaders(),
      ...options.headers,
    },
  };

  try {
    const response = await fetch(url, { ...defaultOptions, ...options });
    clearTimeout(timeoutId);
    return response;
  } catch (error) {
    clearTimeout(timeoutId);
    if (error.name === "AbortError") {
      throw new Error(`Request timeout after 10 seconds for ${url}`);
    }
    throw error;
  }
}

/**
 * Make an authenticated GET request
 */
export async function authenticatedGet(url: string): Promise<Response> {
  return authenticatedFetch(url, { method: "GET" });
}

/**
 * Make an authenticated POST request
 */
export async function authenticatedPost(
  url: string,
  data?: any,
): Promise<Response> {
  const options: RequestInit = {
    method: "POST",
  };

  if (data) {
    if (data instanceof FormData) {
      // For FormData, don't set Content-Type header (browser will set it with boundary)
      options.body = data;
      // Remove Content-Type for FormData
      options.headers = {
        "X-Session-ID": getSessionId(),
        "X-Auth-Cookies": AUTH_TOKEN,
        "X-Auth-Token": AUTH_TOKEN,
      };
    } else {
      options.body = JSON.stringify(data);
    }
  }

  return authenticatedFetch(url, options);
}

/**
 * Parse JSON response with error handling
 */
export async function parseJsonResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
}
