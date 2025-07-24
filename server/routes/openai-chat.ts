import { Request, Response } from "express";
import { validateAuthentication } from "../utils/auth";

/**
 * Handle OpenAI chat API calls
 * POST /api/v3/open-ai/chat
 */
export async function handleOpenAIChat(req: Request, res: Response) {
  try {
    console.log("🤖 OpenAI chat request received");
    console.log("Request body:", JSON.stringify(req.body, null, 2));

    // Validate authentication
    const authResult = validateAuthentication(req.headers);

    if (!authResult.isValid) {
      console.log("❌ OpenAI Authentication failed:", authResult.message);
      return res.status(401).json({
        error: authResult.message,
      });
    }

    console.log(
      "🎉 OpenAI Authentication successful - sessionid:",
      authResult.sessionId,
    );

    const { query, user, conversation_id, inputs, files } = req.body;
    const action = inputs?.action || "imagine";

    // Generate conversation_id if not provided or null
    const responseConversationId =
      conversation_id ||
      `conv-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

    console.log(
      `🎯 Processing action: ${action} for user: ${user}, conversation_id: ${responseConversationId}`,
    );

    // Mock response based on action
    let mockResponse;

    switch (action) {
      case "imagine":
        mockResponse = {
          conversation_id: responseConversationId,
          outputs: {
            answer: {
              action: "imagine",
              conversation_type: "small_talk",
              header: "Let's Imagine Together! ✨",
              msg: "I can see your imagination sparkling! What magical world would you like to explore today? We could create anything from enchanted forests to space adventures!",
              footer: "What comes to your mind first? 🌟",
            },
          },
        };
        break;

      case "play":
        mockResponse = {
          conversation_id: responseConversationId,
          outputs: {
            answer: {
              action: "play",
              conversation_type: "small_talk",
              header: "Time to Play! 🎮",
              msg: "Hooray! Play time is the best time! I love how you're always ready for fun and games. What kind of adventure should we go on?",
              footer: "Let's make this super fun! 🎉",
            },
          },
        };
        break;

      case "create":
        mockResponse = {
          conversation_id: responseConversationId,
          outputs: {
            answer: {
              action: "create",
              conversation_type: "new_challenge",
              header: "Creative Challenge! 🎨",
              msg: "I have an amazing creative challenge for you! Let's design a magical treehouse that can fly through the clouds. What special rooms would it have?",
              footer: "Ready to build something incredible?",
            },
          },
        };
        break;

      case "store":
        mockResponse = {
          conversation_id: responseConversationId,
          outputs: {
            answer: {
              action: "store",
              conversation_type: "small_talk",
              header: "Let's Store Our Treasures! 📦",
              msg: "Time to organize all your amazing creations! I love seeing how much you've accomplished. Each piece tells such a wonderful story!",
              footer: "What would you like to save or share? ✨",
            },
          },
        };
        break;

      case "reflect":
        mockResponse = {
          conversation_id: responseConversationId,
          outputs: {
            answer: {
              action: "reflect",
              conversation_type: "small_talk",
              header: "Reflection Time 🪞",
              msg: "Let's take a moment to think about all the amazing things you've created! I'm so proud of your creativity and imagination. What's your favorite creation so far?",
              footer: "Your growth is truly inspiring! 🌱",
            },
          },
        };
        break;

      case "reward":
        mockResponse = {
          conversation_id: responseConversationId,
          outputs: {
            answer: {
              action: "reward",
              conversation_type: "small_talk",
              header: "Celebration Time! 🏆",
              msg: "You've been doing such incredible work! Your creativity and effort deserve to be celebrated. I'm so excited to see what you'll create next!",
              footer: "You're amazing! Keep being creative! 🌟",
            },
          },
        };
        break;

      default:
        mockResponse = {
          conversation_id: responseConversationId,
          outputs: {
            answer: {
              action: action,
              conversation_type: "small_talk",
              header: "Hello there! 🌟",
              msg: "I'm excited to go on magical adventures with you! Your creativity always amazes me.",
              footer: "What would you like to explore today? ✨",
            },
          },
        };
    }

    console.log("✅ OpenAI response generated:", mockResponse);
    res.json(mockResponse);
  } catch (error) {
    console.error("Error in handleOpenAIChat:", error);
    res.status(500).json({
      error: "Internal server error",
      conversation_id: `error-${Date.now()}`,
      outputs: {
        answer: {
          action: "imagine",
          conversation_type: "small_talk",
          header: "Hello! 🌟",
          msg: "I'm here to help you explore your creativity!",
          footer: "What would you like to create today? ✨",
        },
      },
    });
  }
}
