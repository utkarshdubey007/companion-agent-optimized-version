import { RequestHandler } from "express";
import { validateAuthentication } from "../utils/auth";

/**
 * GET /api/auth-test
 * Test endpoint to verify authentication is working
 */
export const testAuthentication: RequestHandler = (req, res) => {
  try {
    console.log("Authentication test endpoint called");

    // Validate authentication using the new utility
    const authResult = validateAuthentication(req.headers);

    if (!authResult.isValid) {
      console.log("❌ Auth test failed:", authResult.message);
      return res.status(401).json({
        success: false,
        authenticated: false,
        message: authResult.message,
        sessionId: null,
      });
    }

    console.log("🎉 Auth test successful - sessionid:", authResult.sessionId);

    res.json({
      success: true,
      authenticated: true,
      message: "Authentication successful",
      sessionId: authResult.sessionId,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Error in auth test:", error);
    res.status(500).json({
      success: false,
      authenticated: false,
      message: "Internal server error",
      sessionId: null,
    });
  }
};
