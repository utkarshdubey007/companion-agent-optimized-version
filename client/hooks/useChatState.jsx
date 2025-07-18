import { useState } from "react";

export function useChatState() {
  const [chatMessages, setChatMessages] = useState([
    {
      id: "ai-welcome",
      type: "text",
      sender: "AI",
      content:
        "I'm feeling as bright as a sunbeam, ready to embark on new adventures with you. How is your heart today?",
      timestamp: new Date(Date.now() - 300000),
    },
  ]);

  const handleShowCarousel = (images) => {
    // Create a carousel message in the chat
    const carouselMessage = {
      id: Date.now().toString(),
      type: "carousel",
      sender: "Kid",
      content: `Shared my creation gallery! 🎨`,
      timestamp: new Date(),
      images: images,
    };
    setChatMessages((prev) => [...prev, carouselMessage]);

    // Add AI response
    setTimeout(() => {
      const aiResponse = {
        id: (Date.now() + 1).toString(),
        type: "text",
        sender: "AI",
        content: `Wow! What a beautiful collection! 🌟 I can see you've put so much creativity and heart into these. Each image tells its own special story! Would you like to tell me more about your favorite one? ✨`,
        timestamp: new Date(),
      };
      setChatMessages((prev) => [...prev, aiResponse]);
    }, 1500);
  };

  const handleAcceptChallenge = () => {
    console.log("Challenge accepted! 🎉");
    const newMessage = {
      id: Date.now().toString(),
      type: "text",
      sender: "Kid",
      content:
        "Yes! I accept this challenge! Let's create something amazing! 🎉",
      timestamp: new Date(),
    };
    setChatMessages((prev) => [...prev, newMessage]);
  };

  const handleRegenerateChallenge = () => {
    console.log("Generating new challenge... ✨");
  };

  const handleChatMore = () => {
    console.log("Opening chat... 💬");
    const newMessage = {
      id: Date.now().toString(),
      type: "ai_challenge",
      sender: "AI",
      title: "Enchanted Forest Adventure! 🌟",
      description:
        "Help the forest creatures organize a magical birthday party for the wise old owl! Create colorful decorations, plan fun games, and make magical treats that will make this the most wonderful celebration ever! ✨🦉🎂",
      mediaUrl:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=200&fit=crop",
      mediaType: "image",
      timestamp: new Date(),
      onAccept: handleAcceptChallenge,
      onRegenerate: handleRegenerateChallenge,
      onChatMore: () => console.log("Chat more about challenge"),
    };
    setChatMessages((prev) => [...prev, newMessage]);
  };

  const handleSendMessage = (message) => {
    // Add kid message
    const kidMessage = {
      id: Date.now().toString(),
      type: "text",
      sender: "Kid",
      content: message,
      timestamp: new Date(),
    };
    setChatMessages((prev) => [...prev, kidMessage]);

    // Simulate AI response after a delay
    setTimeout(() => {
      const aiMessage = {
        id: (Date.now() + 1).toString(),
        type: "text",
        sender: "AI",
        content:
          "That's a great idea! I love your creativity! ✨ Let me think of something fun we can do with that...",
        timestamp: new Date(),
      };
      setChatMessages((prev) => [...prev, aiMessage]);
    }, 1500);
  };

  const handleAddAttachment = () => {
    // Create a media upload message
    const mediaMessage = {
      id: Date.now().toString(),
      type: "media",
      sender: "Kid",
      content: "",
      timestamp: new Date(),
      images: [],
      onImagesUpdate: (images) => {
        setChatMessages((prev) =>
          prev.map((msg) =>
            msg.id === mediaMessage.id ? { ...msg, images } : msg,
          ),
        );

        // Create a display message when images are uploaded
        if (images.length > 0) {
          // Replace upload message with display message
          setChatMessages((prev) =>
            prev.map((msg) =>
              msg.id === mediaMessage.id
                ? {
                    ...msg,
                    type: "image_display",
                    images: images,
                    content: `Shared ${images.length} picture${images.length > 1 ? "s" : ""}! 📸`,
                  }
                : msg,
            ),
          );

          setTimeout(() => {
            const aiResponse = {
              id: (Date.now() + 1).toString(),
              type: "text",
              sender: "AI",
              content: `Wow! ${images.length === 1 ? "That's a beautiful picture" : `Those are ${images.length} amazing pictures`}! 🌟 I love your creativity! Tell me more about ${images.length === 1 ? "it" : "them"} - what inspired you to create ${images.length === 1 ? "this" : "these"}? ✨`,
              timestamp: new Date(),
            };
            setChatMessages((prev) => [...prev, aiResponse]);
          }, 1500);
        }
      },
    };
    setChatMessages((prev) => [...prev, mediaMessage]);
  };

  return {
    chatMessages,
    setChatMessages,
    handleShowCarousel,
    handleAcceptChallenge,
    handleRegenerateChallenge,
    handleChatMore,
    handleSendMessage,
    handleAddAttachment,
  };
}
