import { useState } from "react";
import { imageUtils } from "@/utils/imageUtils";

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

  // State for creation sharing flow
  const [creationTitle, setCreationTitle] = useState("");
  const [creationImages, setCreationImages] = useState([]);

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
    // Store images for later API call
    console.log("🎨 Share Creation flow started!");
    console.log("🎨 Storing creation images:", images.length, "images");
    console.log("🎨 Images data:", images);
    setCreationImages(images);

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
        content:
          "Great! Now let's give it a name. Tell me the title of your creation! 🌟",
        timestamp: new Date(),
        companion: selectedCompanion,
        awaitingInput: "title", // Special flag to indicate what we're waiting for
      };
      setChatMessages((prev) => [...prev, titleRequestMessage]);
    }, 2000);
  };

  const handleCreationTitleSubmit = (title) => {
    // Store title for later API call
    console.log("📝 Storing creation title:", title);
    setCreationTitle(title);

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
        content:
          "Perfect! Now let's take a moment to craft a detailed description of it. Tell me all about your amazing creation! ✨",
        timestamp: new Date(),
        companion: selectedCompanion,
        awaitingInput: "description", // Special flag to indicate what we're waiting for
      };
      setChatMessages((prev) => [...prev, descriptionRequestMessage]);
    }, 2000);
  };

  const handleCreationDescriptionSubmit = async (description) => {
    // Get current creation data from state
    const currentTitle = creationTitle;
    const currentImages = creationImages;

    console.log("Starting upload with stored data:", {
      currentTitle,
      currentImages: currentImages.length,
    });

    // Add kid's description response
    const descriptionMessage = {
      id: Date.now().toString(),
      type: "text",
      sender: "Kid",
      content: description,
      timestamp: new Date(),
    };
    setChatMessages((prev) => [...prev, descriptionMessage]);

    // Show thinking mode and upload message
    setIsAIThinking(true);

    setTimeout(() => {
      setIsAIThinking(false);

      const uploadingMessage = {
        id: (Date.now() + 1).toString(),
        type: "text",
        sender: "AI",
        content: "Please wait I am uploading your creations...",
        timestamp: new Date(),
        companion: selectedCompanion,
      };
      setChatMessages((prev) => [...prev, uploadingMessage]);

      // Make API call to upload creation
      uploadCreationToAPI(currentImages, currentTitle, description)
        .then((result) => {
          console.log("✅ Upload successful, starting response flow");

          // Show success message immediately
          const successMessage = {
            id: (Date.now() + 2).toString(),
            type: "text",
            sender: "AI",
            content: "Amazing! Your creation has been successfully uploaded!",
            timestamp: new Date(),
            companion: selectedCompanion,
          };
          setChatMessages((prev) => [...prev, successMessage]);

          // Show reflection message after 500ms
          setTimeout(() => {
            console.log("💭 Adding reflection message");
            const reflectionMessage = {
              id: (Date.now() + 3).toString(),
              type: "text",
              sender: "AI",
              content: "Please wait till I am reflecting on your creations...",
              timestamp: new Date(),
              companion: selectedCompanion,
            };
            setChatMessages((prev) => [...prev, reflectionMessage]);

            // Show FlippableStorybookCard after another 500ms
            setTimeout(() => {
              console.log("📖 Adding FlippableStorybookCard");
              const flippableStorybookMessage = {
                id: (Date.now() + 4).toString(),
                type: "flippable_storybook",
                sender: "AI",
                timestamp: new Date(),
                pages: [
                  {
                    badgeTitle: "Amazing Creation!",
                    imageUrl:
                      currentImages[0] ||
                      "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=300&fit=crop",
                    reflection: `What a wonderful creation! I can see you put so much creativity into "${currentTitle}". ${description} Your artistic vision truly shines through! This piece tells a beautiful story and shows your unique perspective. Keep creating and sharing your amazing work!`,
                    aiAvatarUrl:
                      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
                  },
                ],
                index: 0,
              };
              setChatMessages((prev) => [...prev, flippableStorybookMessage]);

              // Clear creation data
              setCreationTitle("");
              setCreationImages([]);
            }, 500);
          }, 500);
        })
        .catch((error) => {
          console.error("Upload failed:", error);

          const errorMessage = {
            id: (Date.now() + 2).toString(),
            type: "text",
            sender: "AI",
            content:
              "I'm sorry, there was an issue uploading your creation. Please try again later.",
            timestamp: new Date(),
            companion: selectedCompanion,
          };
          setChatMessages((prev) => [...prev, errorMessage]);
        });
    }, 2000);
  };

  // Creation data is now managed via React state above

  // API call function
  const uploadCreationToAPI = async (images, title, description) => {
    try {
      console.log("Starting upload with images:", images);
      const formData = new FormData();

      // Convert all images to binary files using imageUtils
      for (let i = 0; i < images.length; i++) {
        const imageUrl = images[i];
        console.log(`Processing image ${i}:`, imageUrl);

        try {
          // Convert image URL to binary file using imageUtils
          const binaryFile = await imageUtils.convertImageToBinary(imageUrl);
          console.log(
            `Converted image ${i} to binary file:`,
            binaryFile.name,
            binaryFile.size,
          );

          // Rename file with proper extension
          const fileName = `creation_${i}_${Date.now()}.jpeg`;
          const renamedFile = new File([binaryFile], fileName, {
            type: "image/jpeg",
            lastModified: Date.now(),
          });

          formData.append("uploads", renamedFile);
        } catch (conversionError) {
          console.error(
            `Failed to convert image ${i} using imageUtils:`,
            conversionError,
          );

          // Fallback: try manual base64 conversion
          try {
            if (imageUrl.startsWith("data:")) {
              const [header, base64Data] = imageUrl.split(",");
              const mimeMatch = header.match(/data:([^;]+)/);
              const mimeType = mimeMatch ? mimeMatch[1] : "image/jpeg";

              const binaryString = atob(base64Data);
              const bytes = new Uint8Array(binaryString.length);
              for (let j = 0; j < binaryString.length; j++) {
                bytes[j] = binaryString.charCodeAt(j);
              }

              const fallbackFile = new File(
                [bytes],
                `creation_${i}_fallback.jpg`,
                {
                  type: mimeType,
                  lastModified: Date.now(),
                },
              );

              formData.append("uploads", fallbackFile);
              console.log(`Used fallback conversion for image ${i}`);
            } else {
              throw new Error("Unsupported image format");
            }
          } catch (fallbackError) {
            console.error(
              `Fallback conversion also failed for image ${i}:`,
              fallbackError,
            );
            throw new Error(
              `Failed to process image ${i}: ${conversionError.message}`,
            );
          }
        }
      }

      // Add other fields
      formData.append("title", title);
      formData.append("description", description);
      formData.append("user_id", "2404"); // Dependent ID as mentioned

      // Debug FormData contents
      console.log("FormData prepared with:");
      console.log("- Title:", title);
      console.log("- Description:", description);
      console.log("- User ID: 2404");
      console.log("- Number of files:", images.length);

      // Log FormData entries for debugging
      for (let [key, value] of formData.entries()) {
        console.log(
          `FormData entry: ${key} =`,
          value instanceof File
            ? `File(${value.name}, ${value.size}b, ${value.type})`
            : value,
        );
      }

      console.log("Making API call...");

      const response = await fetch("/api/v2/creations_media", {
        method: "POST",
        headers: {
          Authorization: "Bearer dummy-token", // Add auth header
          "X-Session-ID": "jjyww1tp4zv8gwg1l9xvf0mckgwwcd3t", // Add session header
        },
        body: formData,
      });

      console.log("API response status:", response.status);

      if (!response.ok) {
        throw new Error(`Upload failed: ${response.status}`);
      }

      const result = await response.json();
      console.log("API response:", result);

      if (result.result_code !== 1) {
        throw new Error(result.error_info || "Upload failed");
      }

      return result.data;
    } catch (error) {
      console.error("API upload error:", error);
      throw error;
    }
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
