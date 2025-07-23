import express from "express";
import cors from "cors";
import { handleDemo } from "./routes/demo";
import { getCurrentUserTags } from "./routes/tags";
import { getDependentChallengesWorking } from "./routes/challenges";
import { getCreations } from "./routes/creations";
import { testAuthentication } from "./routes/auth-test";

export function createServer() {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

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

  // Creations API route
  app.get("/api/v2/creations", getCreations);

  // Authentication test route
  app.get("/api/auth-test", testAuthentication);

  return app;
}
