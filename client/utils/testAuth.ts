import { authenticatedGet, parseJsonResponse } from "./authClient";

/**
 * Test authentication by calling the auth test endpoint
 */
export async function testAuthentication(): Promise<{
  success: boolean;
  authenticated: boolean;
  message: string;
  sessionId?: string;
  timestamp?: string;
}> {
  try {
    console.log("Testing authentication...");
    const response = await authenticatedGet("/api/auth-test");
    const data = await parseJsonResponse(response);
    console.log("Authentication test result:", data);
    return data;
  } catch (error) {
    console.error("Authentication test failed:", error);
    return {
      success: false,
      authenticated: false,
      message: `Test failed: ${error.message}`,
    };
  }
}

/**
 * Run authentication test and log results to console
 */
export async function runAuthTest(): Promise<void> {
  const result = await testAuthentication();

  if (result.success && result.authenticated) {
    console.log("✅ Authentication test PASSED");
    console.log(`Session ID: ${result.sessionId}`);
    console.log(`Timestamp: ${result.timestamp}`);
  } else {
    console.log("❌ Authentication test FAILED");
    console.log(`Message: ${result.message}`);
  }
}
