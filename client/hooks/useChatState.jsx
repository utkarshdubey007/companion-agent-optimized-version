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
      companion: null, // Will use default companion in AnimatedCompanionAvatar
    },
  ]);

  const [isAIThinking, setIsAIThinking] = useState(false);
  const [selectedCompanion, setSelectedCompanion] = useState(null);

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

    // Show thinking mode then add AI response
    setIsAIThinking(true);

    setTimeout(() => {
      setIsAIThinking(false);

      const aiResponse = {
        id: (Date.now() + 1).toString(),
        type: "text",
        sender: "AI",
        content: `Wow! What a beautiful collection! 🌟 I can see you've put so much creativity and heart into these. Each image tells its own special story! Would you like to tell me more about your favorite one? ✨`,
        timestamp: new Date(),
        companion: selectedCompanion, // Store current companion with message
      };
      setChatMessages((prev) => [...prev, aiResponse]);
    }, 2200);
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
      companion: selectedCompanion, // Store current companion with message
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

    // Show thinking mode
    setIsAIThinking(true);

    // Simulate AI response after thinking
    setTimeout(() => {
      setIsAIThinking(false);

      const aiMessage = {
        id: (Date.now() + 1).toString(),
        type: "text",
        sender: "AI",
        content:
          "That's a great idea! I love your creativity! ✨ Let me think of something fun we can do with that...",
        timestamp: new Date(),
        companion: selectedCompanion, // Store current companion with message
      };
      setChatMessages((prev) => [...prev, aiMessage]);
    }, 2500); // Extended thinking time for magical effect
  };

  const handleShareCreation = (images) => {
    // Create a display message for the shared creation
    const sharedMessage = {
      id: Date.now().toString(),
      type: "image_display",
      sender: "Kid",
      content: `I want to share my creation! 🎨✨`,
      timestamp: new Date(),
      images: images,
    };
    setChatMessages((prev) => [...prev, sharedMessage]);

    // Show thinking mode
    setIsAIThinking(true);

    // AI asks for the title
    setTimeout(() => {
      setIsAIThinking(false);

      const titleRequestMessage = {
        id: (Date.now() + 1).toString(),
        type: "text",
        sender: "AI",
        content: "Great! Now let's give it a name. Tell me the title of your creation! 🌟",
        timestamp: new Date(),
        companion: selectedCompanion,
        awaitingInput: "title", // Special flag to indicate what we're waiting for
      };
      setChatMessages((prev) => [...prev, titleRequestMessage]);
    }, 2000);
  };

  const handleCreationTitleSubmit = (title) => {
    // Add kid's title response
    const titleMessage = {
      id: Date.now().toString(),
      type: "text",
      sender: "Kid",
      content: title,
      timestamp: new Date(),
    };
    setChatMessages((prev) => [...prev, titleMessage]);

    // Show thinking mode
    setIsAIThinking(true);

    // AI asks for description
    setTimeout(() => {
      setIsAIThinking(false);

      const descriptionRequestMessage = {
        id: (Date.now() + 1).toString(),
        type: "text",
        sender: "AI",
        content: "Perfect! Now let's take a moment to craft a detailed description of it. Tell me all about your amazing creation! ✨",
        timestamp: new Date(),
        companion: selectedCompanion,
        awaitingInput: "description", // Special flag to indicate what we're waiting for
      };
      setChatMessages((prev) => [...prev, descriptionRequestMessage]);
    }, 2000);
  };

  const handleCreationDescriptionSubmit = (description) => {
    // Add kid's description response
    const descriptionMessage = {
      id: Date.now().toString(),
      type: "text",
      sender: "Kid",
      content: description,
      timestamp: new Date(),
    };
    setChatMessages((prev) => [...prev, descriptionMessage]);

    // Show thinking mode
    setIsAIThinking(true);

    // AI gives final congratulations
    setTimeout(() => {
      setIsAIThinking(false);

      const congratsMessage = {
        id: (Date.now() + 1).toString(),
        type: "text",
        sender: "AI",
        content: "Wonderful! Your creation is now complete with a beautiful title and description! 🎉 I'm so proud of your creativity and the story you've shared. Keep creating amazing things! ✨",
        timestamp: new Date(),
        companion: selectedCompanion,
      };
      setChatMessages((prev) => [...prev, congratsMessage]);
    }, 2500);
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

          // Show thinking mode
          setIsAIThinking(true);

          setTimeout(() => {
            setIsAIThinking(false);

            const aiResponse = {
              id: (Date.now() + 1).toString(),
              type: "text",
              sender: "AI",
              content: `Wow! ${images.length === 1 ? "That's a beautiful picture" : `Those are ${images.length} amazing pictures`}! 🌟 I love your creativity! Tell me more about ${images.length === 1 ? "it" : "them"} - what inspired you to create ${images.length === 1 ? "this" : "these"}? ✨`,
              timestamp: new Date(),
              companion: selectedCompanion, // Store current companion with message
            };
            setChatMessages((prev) => [...prev, aiResponse]);
          }, 2000);
        }
      },
      onShareCreation: handleShareCreation, // Pass the share creation handler
    };
    setChatMessages((prev) => [...prev, mediaMessage]);
  };

  const handleCompanionSelect = (companion) => {
    setSelectedCompanion(companion);

    // Add a welcome message from the selected companion
    setIsAIThinking(true);

    setTimeout(() => {
      setIsAIThinking(false);

      const welcomeMessage = {
        id: Date.now().toString(),
        type: "text",
        sender: "AI",
        content: `Hello there! I'm ${companion.name}! 🌟 ${companion.description} I'm so excited to go on magical adventures with you! What would you like to create together today? ✨`,
        timestamp: new Date(),
        companion: companion, // Store the selected companion with message
      };
      setChatMessages((prev) => [...prev, welcomeMessage]);
    }, 1800);
  };

  return {
    chatMessages,
    setChatMessages,
    isAIThinking,
    selectedCompanion,
    handleShowCarousel,
    handleAcceptChallenge,
    handleRegenerateChallenge,
    handleChatMore,
    handleSendMessage,
    handleAddAttachment,
    handleCompanionSelect,
    handleShareCreation,
    handleCreationTitleSubmit,
    handleCreationDescriptionSubmit,
    setIsAIThinking,
    setSelectedCompanion,
  };
}
