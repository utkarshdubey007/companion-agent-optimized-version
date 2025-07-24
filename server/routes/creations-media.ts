import { Request, Response } from "express";
import { validateAuthentication } from "../utils/auth";

/**
 * Handle creations media upload
 * POST /api/v2/creations_media
 */
export async function uploadCreationMedia(req: Request, res: Response) {
  try {
    console.log("Creations media upload request received");
    console.log("Request content-type:", req.headers["content-type"]);

    // Validate authentication
    const authResult = validateAuthentication(req.headers);

    if (!authResult.isValid) {
      console.log("❌ Upload Authentication failed:", authResult.message);
      return res.status(401).json({
        result_code: 0,
        error_info: authResult.message,
        data: null,
      });
    }

    console.log(
      "🎉 Upload Authentication successful - sessionid:",
      authResult.sessionId,
    );

    // Log upload details
    const files = req.files as Express.Multer.File[];
    console.log("Uploaded files count:", files?.length || 0);
    console.log("Request body fields:", Object.keys(req.body));
    console.log("Title:", req.body.title);
    console.log("Description:", req.body.description);
    console.log("User ID:", req.body.user_id);

    // Process uploaded files
    const processedFiles: string[] = [];
    if (files && files.length > 0) {
      for (const file of files) {
        console.log(
          `Processing file: ${file.originalname}, size: ${file.size} bytes, type: ${file.mimetype}`,
        );
        // In a real implementation, you would save the file to storage (S3, local disk, etc.)
        // For now, we'll create mock URLs
        processedFiles.push(
          `https://mock-storage.com/uploads/${Date.now()}_${file.originalname}`,
        );
      }
    }

    const response = {
      result_code: 1,
      error_info: "",
      data: {
        id: Date.now(),
        title: req.body.title || "Untitled Creation",
        description: req.body.description || "",
        user_id: req.body.user_id || "2404",
        created_at: new Date().toISOString(),
        media_urls:
          processedFiles.length > 0
            ? processedFiles
            : [
                "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=300&fit=crop",
              ],
      },
    };

    console.log(
      "✅ Upload processed successfully, returning response:",
      response,
    );
    res.json(response);
  } catch (error) {
    console.error("Error in uploadCreationMedia:", error);
    res.status(500).json({
      result_code: 0,
      error_info: "Internal server error during upload",
      data: null,
    });
  }
}
