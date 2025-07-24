import express from "express";
import cors from "cors";
import multer from "multer";
import { handleDemo } from "./routes/demo";
import { getCurrentUserTags } from "./routes/tags";
import { getDependentChallengesWorking } from "./routes/challenges";
import { getCreations } from "./routes/creations";
import { uploadCreationMedia } from "./routes/creations-media";
import { testAuthentication } from "./routes/auth-test";
import { handleOpenAIChat } from "./routes/openai-chat";

export function createServer() {
  const app = express();

  // Middleware
  app.use(cors());

  // Configure multer for file uploads (in memory storage for demo)
  const upload = multer({
    storage: multer.memoryStorage(),
    limits: {
      fileSize: 50 * 1024 * 1024, // 50MB limit per file
      files: 10, // Maximum 10 files
    },
  });

  // Increase size limits for file uploads (50MB for JSON, 100MB for URL-encoded data)
  app.use(express.json({ limit: "50mb" }));
  app.use(express.urlencoded({ extended: true, limit: "100mb" }));

  // Example API routes
  app.get("/api/ping", (_req, res) => {
    res.json({ message: "Hello from Express server v2!" });
  });

  app.get("/api/demo", handleDemo);

  // Tags API route
  app.get("/api/v2/tags/current-user-tags", getCurrentUserTags);

  // Challenges API route
  app.get(
    "/api/v2/challenges/dependent-challenges/working",
    getDependentChallengesWorking,
  );

  // Creations API routes
  app.get("/api/v2/creations", getCreations);
  app.post(
    "/api/v2/creations_media",
    upload.array("uploads", 10),
    uploadCreationMedia,
  );

  // Authentication test route
  app.get("/api/auth-test", testAuthentication);

  // OpenAI chat route
  app.post("/api/v3/open-ai/chat", handleOpenAIChat);

  return app;
}
