/**
 * Authentication utilities for handling session tokens and cookies
 */

// User provided authentication token
const AUTH_TOKEN = "_fbp=fb.0.1752251216171.237035461266330472; _ga=GA1.1.760378924.1752251225; __stripe_mid=950d6f3c-dbf1-4223-856e-8c637002fc643f7797; sessionid=jjyww1tp4zv8gwg1l9xvf0mckgwwcd3t; _ga_JN6T86SWNW=GS2.1.s1753277585$o39$g1$t1753279947$j57$l0$h0";

/**
 * Extract session ID from cookie string
 */
export function extractSessionId(cookieString: string): string | null {
  const sessionMatch = cookieString.match(/sessionid=([^;]+)/);
  return sessionMatch ? sessionMatch[1] : null;
}

/**
 * Get the expected session ID from the auth token
 */
export function getExpectedSessionId(): string {
  return extractSessionId(AUTH_TOKEN) || "";
}

/**
 * Parse cookie string into key-value pairs
 */
export function parseCookies(cookieString: string): Record<string, string> {
  const cookies: Record<string, string> = {};
  
  cookieString.split(';').forEach(cookie => {
    const [key, value] = cookie.trim().split('=');
    if (key && value) {
      cookies[key] = value;
    }
  });
  
  return cookies;
}

/**
 * Validate if the provided session ID matches our expected token
 */
export function validateSessionId(providedSessionId: string): boolean {
  const expectedSessionId = getExpectedSessionId();
  return providedSessionId === expectedSessionId;
}

/**
 * Validate authentication from request headers
 */
export function validateAuthentication(headers: Record<string, any>): {
  isValid: boolean;
  sessionId?: string;
  message: string;
} {
  // Check for session ID in custom header
  const sessionId = headers["x-session-id"] as string;
  
  // Check for auth cookies in custom header
  const authCookies = headers["x-auth-cookies"] as string;
  
  // Check for auth token in custom header
  const authToken = headers["x-auth-token"] as string;
  
  // Check for cookies in standard cookie header
  const cookieHeader = headers["cookie"] as string;
  
  console.log("Authentication attempt:", {
    sessionId: sessionId ? "Present" : "Missing",
    authCookies: authCookies ? "Present" : "Missing", 
    authToken: authToken ? "Present" : "Missing",
    cookieHeader: cookieHeader ? "Present" : "Missing"
  });

  // Try to extract session ID from various sources
  let extractedSessionId = sessionId;
  
  if (!extractedSessionId && authCookies) {
    extractedSessionId = extractSessionId(authCookies);
  }
  
  if (!extractedSessionId && authToken) {
    extractedSessionId = extractSessionId(authToken);
  }
  
  if (!extractedSessionId && cookieHeader) {
    extractedSessionId = extractSessionId(cookieHeader);
  }

  if (!extractedSessionId) {
    return {
      isValid: false,
      message: "No session ID found in request headers"
    };
  }

  const isValid = validateSessionId(extractedSessionId);
  
  return {
    isValid,
    sessionId: extractedSessionId,
    message: isValid ? "Authentication successful" : "Invalid session ID"
  };
}

/**
 * Get the full authentication token for making external API calls
 */
export function getAuthToken(): string {
  return AUTH_TOKEN;
}

/**
 * Create headers for external API requests
 */
export function createAuthHeaders(): Record<string, string> {
  return {
    "Cookie": AUTH_TOKEN,
    "Content-Type": "application/json",
    "User-Agent": "Mozilla/5.0 (compatible; API-Client/1.0)"
  };
}
