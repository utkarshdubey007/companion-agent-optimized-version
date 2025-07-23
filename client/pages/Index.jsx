import { Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import { DualSidebar } from "@/components/DualSidebar";
import { AcceptedChallenges } from "@/components/AcceptedChallenges";
import { CreationsPanel } from "@/components/CreationsPanel";
import { ChatInputBox } from "@/components/ChatInputBox";
import { SimplifiedChatContainer } from "@/components/SimplifiedChatContainer";
import { AppHeader } from "@/components/AppHeader";
import { EnhancedMagicalBackground } from "@/components/EnhancedMagicalBackground";
import CompanionSelector from "@/components/CompanionSelector";
import { MagicalPortalCompanion } from "@/components/MagicalPortalCompanion";
import ChallengeListView from "@/components/ChallengeListView";
import StorybookReflectionCard from "@/components/StorybookReflectionCard";
import { useChatState } from "@/hooks/useChatState";
import { usePageState } from "@/hooks/usePageState";
import { menuItemsData, challengesData, creationsData } from "@/data/appData";
import {
  dependent,
  shouldAskForMood,
  moodPickerUtils,
} from "@/data/dependentData";
import MoodPickerCard from "@/components/MoodPickerCard";
import { fetchCurrentUserTags } from "@/services/tagsApi";
import { fetchDependentChallenges } from "@/services/challengesApi";

export default function Index() {
  // Page state management
  const {
    topSidebarCollapsed,
    setTopSidebarCollapsed,
    bottomSidebarCollapsed,
    setBottomSidebarCollapsed,
    showTopWaveEffect,
    setShowTopWaveEffect,
    showBottomWaveEffect,
    setShowBottomWaveEffect,
    showAcceptedChallenges,
    setShowAcceptedChallenges,
    showCreationsPanel,
    setShowCreationsPanel,
    showMagicalCard,
    setShowMagicalCard,
  } = usePageState();

  // Companion selector state
  const [showCompanionSelector, setShowCompanionSelector] = useState(false);

  // Upload menu state
  const [showChallengeListView, setShowChallengeListView] = useState(false);
  const [cameFromUploadMenu, setCameFromUploadMenu] = useState(false);
  const [showUploadMenu, setShowUploadMenu] = useState(false);

  // Creation sharing flow state
  const [creationSharingStep, setCreationSharingStep] = useState(null); // null, 'title', 'description', 'uploading', 'complete'
  const [creationImages, setCreationImages] = useState([]);
  const [creationTitle, setCreationTitle] = useState('');
  const [creationDescription, setCreationDescription] = useState('');
  const [isUploading, setIsUploading] = useState(false);

  // Mood picker state
  const [showMoodPicker, setShowMoodPicker] = useState(false);
  const [hasMoodCheckinOccurred, setHasMoodCheckinOccurred] = useState(false);
  const [selectedMood, setSelectedMood] = useState(null);
  const [moodAnimationTrigger, setMoodAnimationTrigger] = useState(false);

  // Tags state
  const [tags, setTags] = useState([]);

  // Dynamic creations data from API
  const [apiCreationsData, setApiCreationsData] = useState([]);
  const [tagsLoading, setTagsLoading] = useState(false);
  const [tagsError, setTagsError] = useState(null);

  // Challenges state
  const [challenges, setChallenges] = useState([]);
  const [challengesLoading, setChallengesLoading] = useState(false);
  const [challengesError, setChallengesError] = useState(null);

  // Magical companion state
  const [companionState, setCompanionState] = useState("idle");
  const [companionEmotions, setCompanionEmotions] = useState([]);

  // Chat state management
  const {
    chatMessages,
    setChatMessages,
    isAIThinking,
    selectedCompanion: chatSelectedCompanion,
    handleShowCarousel,
    handleAcceptChallenge,
    handleRegenerateChallenge,
    handleChatMore,
    handleSendMessage,
    handleAddAttachment,
    handleCompanionSelect: chatHandleCompanionSelect,
  } = useChatState();

  // Upload creation to API
  const uploadCreation = async (images, title, description) => {
    try {
      setIsUploading(true);

      const formData = new FormData();

      // Convert image URLs to File objects (if they're blob URLs)
      for (let i = 0; i < images.length; i++) {
        const imageUrl = images[i];
        if (imageUrl.startsWith('blob:')) {
          const response = await fetch(imageUrl);
          const blob = await response.blob();
          const file = new File([blob], `creation_${i}.jpg`, { type: 'image/jpeg' });
          formData.append('uploads', file);
        }
      }

      formData.append('title', title);
      formData.append('description', description);
      formData.append('user_id', '2404'); // dependent user ID

      const response = await fetch('/api/v2/creations_media', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      return result;
    } catch (error) {
      console.error('Upload failed:', error);
      throw error;
    } finally {
      setIsUploading(false);
    }
  };

  // Fetch current user tags
  const loadUserTags = async () => {
    setTagsLoading(true);
    setTagsError(null);

    try {
      const response = await fetchCurrentUserTags();

      if (response.result_code === 1) {
        setTags(response.data);
        console.log("Tags loaded successfully:", response.data);
      } else {
        setTagsError(response.error_info || "Failed to load tags");
        console.error("Tags API error:", response.error_info);
      }
    } catch (error) {
      setTagsError(error.message || "Failed to fetch tags");
      console.error("Tags fetch error:", error);
    } finally {
      setTagsLoading(false);
    }
  };

  // Auto-expand sidebars on page load and check mood picker
  useEffect(() => {
    // Initialize mood picker for demo - enable it if not already set
    if (!localStorage.getItem("checkin_modal")) {
      moodPickerUtils.enableMoodPicker();
    }

    // Load user tags on component mount
    loadUserTags();

    const topTimer = setTimeout(() => {
      setTopSidebarCollapsed(false);
      setShowTopWaveEffect(true);
    }, 500);

    const bottomTimer = setTimeout(() => {
      setBottomSidebarCollapsed(false);
      setShowBottomWaveEffect(true);
    }, 1200);

    // Check if mood picker should be shown after sidebars load
    const moodTimer = setTimeout(() => {
      if (shouldAskForMood(dependent) && !hasMoodCheckinOccurred) {
        setShowMoodPicker(true);
      }
    }, 2000);

    return () => {
      clearTimeout(topTimer);
      clearTimeout(bottomTimer);
      clearTimeout(moodTimer);
    };
  }, [
    setTopSidebarCollapsed,
    setShowTopWaveEffect,
    setBottomSidebarCollapsed,
    setShowBottomWaveEffect,
    hasMoodCheckinOccurred,
  ]);

  // Fetch dependent challenges
  const loadDependentChallenges = async () => {
    setChallengesLoading(true);
    setChallengesError(null);

    try {
      const response = await fetchDependentChallenges(2404);

      if (response.result_code === 1) {
        setChallenges(response.data);
        console.log("Challenges loaded successfully:", response.data);
      } else {
        setChallengesError(response.error_info || "Failed to load challenges");
        console.error("Challenges API error:", response.error_info);
      }
    } catch (error) {
      setChallengesError(error.message || "Failed to fetch challenges");
      console.error("Challenges fetch error:", error);
    } finally {
      setChallengesLoading(false);
    }
  };

  // Tags refresh handler
  const refreshUserTags = () => {
    console.log("Refreshing user tags...");
    loadUserTags();
  };

  // Log tags state for debugging
  useEffect(() => {
    console.log("Tags state updated:", {
      tags,
      loading: tagsLoading,
      error: tagsError,
      count: tags.length,
    });
  }, [tags, tagsLoading, tagsError]);

  // Function to manually add flippable storybook when reflection icon is clicked
  const addFlippableStorybook = () => {
    // Allow multiple storybooks to be added each time reflection icon is clicked

    const samplePages = [
      {
        imageUrl:
          "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop",
        reflection:
          "Wow! I can see a beautiful rainbow painting! The colors are so bright and cheerful - red, orange, yellow, green, blue, and purple all dancing together. It makes me feel happy and excited, like there's magic in the air! ✨",
        badgeTitle: "Rainbow Master!",
        aiAvatarUrl:
          "https://cdn.builder.io/api/v1/image/assets%2Fae5429317afa463b8668d5872bee2cf9%2F2f140743f61a4813a678c882959815ff?format=webp&width=800",
      },
      {
        imageUrl:
          "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
        reflection:
          "Look at this amazing cat drawing! I love how you made the whiskers so long and the eyes so big and sparkly. The cat looks so friendly and playful - I bet it would love to chase butterflies in a sunny garden! 🐱",
        badgeTitle: "Animal Artist!",
        aiAvatarUrl:
          "https://cdn.builder.io/api/v1/image/assets%2Fae5429317afa463b8668d5872bee2cf9%2Fb739432197b34209a365cd0320ed09a4?format=webp&width=800",
      },
      {
        imageUrl:
          "https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?w=400&h=300&fit=crop",
        reflection:
          "This space adventure drawing is incredible! I can see rockets flying to distant planets with stars twinkling all around. The astronaut looks so brave and ready for an amazing journey through the galaxy! 🚀",
        badgeTitle: "Space Explorer!",
        aiAvatarUrl:
          "https://cdn.builder.io/api/v1/image/assets%2Fae5429317afa463b8668d5872bee2cf9%2F408758d5b0f24a8ab1fe3ac5b8489720?format=webp&width=800",
      },
      {
        imageUrl:
          "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=300&fit=crop",
        reflection:
          "What a magical flower garden! I see so many different colors - pink roses, yellow sunflowers, and purple violets all growing together. The butterflies dancing around them make it look like a fairy tale! ������",
        badgeTitle: "Garden Wizard!",
        aiAvatarUrl:
          "https://cdn.builder.io/api/v1/image/assets%2Fae5429317afa463b8668d5872bee2cf9%2Ff22c539957df4cf1b810be45844442be?format=webp&width=800",
      },
      {
        imageUrl:
          "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
        reflection:
          "I love this underwater world you've created! The fish are swimming in such beautiful patterns, and the coral looks like a magical castle. I can almost hear the gentle sound of the ocean waves! 🌊",
        badgeTitle: "Ocean Dreamer!",
        aiAvatarUrl:
          "https://cdn.builder.io/api/v1/image/assets%2Fae5429317afa463b8668d5872bee2cf9%2Fd477fa3ace324c9aafc5275df782584f?format=webp&width=800",
      },
    ];

    const flippableStorybookMessage = {
      id: `flippable-storybook-${Date.now()}`,
      type: "flippable_storybook",
      sender: "Kid",
      pages: samplePages,
      timestamp: new Date(),
      index: 0,
    };

    setChatMessages((prev) => [...prev, flippableStorybookMessage]);
    console.log(
      "FlippableStorybookCard added to chat!",
      flippableStorybookMessage,
    );
  };

  // Fetch creations from API
  const fetchCreationsFromAPI = async () => {
    try {
      const response = await fetch(
        "/api/v2/creations?dependent_id=2404&for_challenges=false&limit=9&starting_after=0",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "X-Auth-Token":
              "_fbp=fb.0.1752251216171.237035461266330472; _ga=GA1.1.760378924.1752251225; __stripe_mid=950d6f3c-dbf1-4223-856e-8c637002fc643f7797; sessionid=ym7qxiur5kruzip1lv7jgrtp2fc9b7rt; _ga_JN6T86SWNW=GS2.1.s1753188967$o35$g1$t1753190505$j60$l0$h0",
          },
        },
      );
      const data = await response.json();

      if (data.result_code === 1 && data.data) {
        // Transform API data to match CreationsPanel interface
        const transformedData = data.data.map((creation) => ({
          id: creation.id.toString(),
          title: creation.title,
          images: creation.media
            .map(
              (media) =>
                // Use s240_url if available, fallback to s150_url or original url
                media.s240_url || media.s150_url || media.url,
            )
            .filter((url) => url), // Remove empty URLs
        }));

        setApiCreationsData(transformedData);
        setShowCreationsPanel(true);
        console.log("Creations fetched from API:", transformedData);
      } else {
        console.error("Failed to fetch creations:", data.error_info);
        // Fallback to static data if API fails
        setShowCreationsPanel((prev) => !prev);
      }
    } catch (error) {
      console.error("Error fetching creations:", error);
      // Fallback to static data if API fails
      setShowCreationsPanel((prev) => !prev);
    }
  };

  // Sidebar toggle handlers
  const toggleTopSidebar = () => {
    setTopSidebarCollapsed(!topSidebarCollapsed);
  };

  const toggleBottomSidebar = () => {
    setBottomSidebarCollapsed(!bottomSidebarCollapsed);
  };

  // Enhanced message sending with companion reactions
  const handleEnhancedSendMessage = (message) => {
    // Check if we're in creation sharing flow
    if (creationSharingStep === 'title') {
      // User provided title
      setCreationTitle(message);
      setCreationSharingStep('description');

      // Add user message for title
      const titleMessage = {
        id: Date.now().toString(),
        type: "text",
        sender: "Kid",
        content: message,
        timestamp: new Date(),
      };
      setChatMessages((prev) => [...prev, titleMessage]);

      // Add AI message asking for description
      setTimeout(() => {
        const descriptionRequest = {
          id: (Date.now() + 1).toString(),
          type: "text",
          sender: "AI",
          content: "Great! Now let's take a moment to craft a detailed description of it.",
          timestamp: new Date(),
        };
        setChatMessages((prev) => [...prev, descriptionRequest]);
      }, 1000);

      return; // Don't proceed with normal message handling
    } else if (creationSharingStep === 'description') {
      // User provided description
      setCreationSharingStep('complete');

      // Add user message for description
      const descriptionMessage = {
        id: Date.now().toString(),
        type: "text",
        sender: "Kid",
        content: message,
        timestamp: new Date(),
      };
      setChatMessages((prev) => [...prev, descriptionMessage]);

      // Complete the creation sharing process
      setTimeout(() => {
        const completionMessage = {
          id: (Date.now() + 1).toString(),
          type: "text",
          sender: "AI",
          content: `Perfect! "${creationTitle}" sounds amazing! 🌟 Thank you for sharing your wonderful creation with me. I love hearing about your creative process!`,
          timestamp: new Date(),
        };
        setChatMessages((prev) => [...prev, completionMessage]);

        // Reset creation sharing state
        setCreationSharingStep(null);
        setCreationImages([]);
        setCreationTitle('');
      }, 1000);

      return; // Don't proceed with normal message handling
    }

    // Normal message handling
    // Set companion to thinking state
    setCompanionState("thinking");
    handleSendMessage(message);
  };

  // Monitor AI thinking state for companion reactions
  useEffect(() => {
    if (isAIThinking) {
      setCompanionState("thinking");
    } else if (companionState === "thinking") {
      // AI finished thinking, show talking state
      setCompanionState("talking");
      // Return to idle after talking
      setTimeout(() => {
        setCompanionState("idle");
      }, 3000);
    }
  }, [isAIThinking, companionState]);

  // Mood picker handlers
  const handleMoodPickerSubmit = (mood) => {
    console.log("Mood submitted:", mood);
    setHasMoodCheckinOccurred(true);
    setSelectedMood(mood); // Store the selected mood

    // Trigger animation for the mood icon
    setMoodAnimationTrigger(true);
    setTimeout(() => setMoodAnimationTrigger(false), 100); // Brief trigger

    // Add mood message to chat
    const moodMessage = {
      id: Date.now().toString(),
      type: "text",
      sender: "Kid",
      content: `I'm feeling ${mood.name.toLowerCase()} today! ${mood.emoji} ${mood.description}`,
      timestamp: new Date(),
    };
    setChatMessages((prev) => [...prev, moodMessage]);

    // Add AI response
    setTimeout(() => {
      const aiResponse = {
        id: (Date.now() + 1).toString(),
        type: "text",
        sender: "AI",
        content: generateMoodResponse(mood),
        timestamp: new Date(),
      };
      setChatMessages((prev) => [...prev, aiResponse]);
    }, 1500);
  };

  const handleMoodPickerClose = () => {
    setShowMoodPicker(false);
    setHasMoodCheckinOccurred(true);
  };

  // Menu item click handler
  const handleMenuItemClick = (itemAlt) => {
    console.log("Menu item clicked:", itemAlt);

    // Hide accepted challenges for all items except Create
    if (itemAlt !== "Create") {
      setShowAcceptedChallenges(false);
    }

    if (itemAlt === "Play") {
      // Show playful reaction
      setCompanionState("reacting");
      setCompanionEmotions(["🎮", "🎉", "😄"]);
      setTimeout(() => {
        setCompanionState("idle");
        setCompanionEmotions([]);
      }, 2000);
      handleChatMore();
    } else if (itemAlt === "Create") {
      // Show creative reaction
      setCompanionState("reacting");
      setCompanionEmotions(["🎨", "✨", "💡"]);
      setTimeout(() => {
        setCompanionState("idle");
        setCompanionEmotions([]);
      }, 2000);

      // Load challenges and show accepted challenges panel
      console.log(
        "Create icon clicked - loading dependent challenges and fetching creations...",
      );
      loadDependentChallenges();
      setShowAcceptedChallenges(true);

      // Also fetch creations from API
      fetchCreationsFromAPI();
    } else if (itemAlt === "Reflect") {
      console.log("Reflect icon clicked - fetching creations from API");
      // Show thoughtful reaction
      setCompanionState("thinking");
      setCompanionEmotions(["🤔", "📖", "✨"]);
      setTimeout(() => {
        setCompanionState("idle");
        setCompanionEmotions([]);
      }, 2000);

      // Fetch creations from API and show panel
      fetchCreationsFromAPI();
    } else if (itemAlt === "Imagine") {
      // Show imaginative reaction
      setCompanionState("reacting");
      setCompanionEmotions(["💭", "🌟", "🔮"]);
      setTimeout(() => {
        setCompanionState("thinking");
        setTimeout(() => {
          setCompanionState("idle");
          setCompanionEmotions([]);
        }, 3000);
      }, 1000);
      handleSendMessage();
    } else if (itemAlt === "Friends") {
      console.log("Friends button clicked! Opening companion selector...");
      // Show excited reaction for friends
      setCompanionState("reacting");
      setCompanionEmotions(["👫", "����", "🤗"]);
      setTimeout(() => {
        setCompanionState("idle");
        setCompanionEmotions([]);
      }, 2000);
      setShowCompanionSelector(true);
    } else if (itemAlt === "Mood") {
      console.log("Mood button clicked - showing mood picker");

      // Show mood picker modal
      setShowMoodPicker(true);
      // Set checkin modal to true for the shouldAskForMood logic
      localStorage.setItem("checkin_modal", "true");
    } else if (itemAlt === "Store") {
      handleAddAttachment();
    }
  };

  // Generate AI response based on mood
  const generateMoodResponse = (mood) => {
    const responses = {
      Happy: "That's wonderful! Your positive energy is contagious! ����",
      Excited: "That's wonderful! Your positive energy is contagious! ✨",
      Calm: "That's beautiful! Peace and calm are such gifts. 🌸",
      Tired: "Rest is so important! Take care of yourself. 💤",
      Sad: "It's okay to feel this way sometimes. I'm here if you want to talk about it. 🤗",
      Worried:
        "It's okay to feel this way sometimes. I'm here if you want to talk about it. ���",
      Nervous: "Feeling nervous is natural! You're braver than you know. 💪",
      Bored:
        "Every feeling is valid and important. What would help you feel better today? 🌈",
    };

    return `Thank you for sharing that you're feeling ${mood.name.toLowerCase()}! ${mood.emoji} ${
      responses[mood.name] ||
      "Every feeling is valid and important. What would help you feel better today? 🌈"
    }`;
  };

  // Companion selector handlers
  const handleCompanionSelect = (companion) => {
    chatHandleCompanionSelect(companion); // Use the magical chat handler
    setShowCompanionSelector(false);

    // Show excited reaction when companion is selected
    setCompanionState("reacting");
    setCompanionEmotions(["🌟", "✨", "💫"]);
    setTimeout(() => {
      setCompanionState("idle");
      setCompanionEmotions([]);
    }, 3000);
  };

  const handleCompanionClose = () => {
    setShowCompanionSelector(false);
  };

  // Upload menu handlers
  const handleSelectChallenge = () => {
    console.log("Select challenge clicked - loading challenges");
    // Load challenges if not already loaded
    if (challenges.length === 0) {
      loadDependentChallenges();
    }
    setShowUploadMenu(false); // Close upload menu
    setCameFromUploadMenu(true);
    setShowChallengeListView(true);
  };

  const handleMyOwnCreation = () => {
    console.log("My own creation clicked - clearing previous kid messages and adding AI media upload message");

    setShowUploadMenu(false); // Close upload menu

    // Clear previous kid messages and add new AI Media Upload message
    const mediaMessage = {
      id: Date.now().toString(),
      type: "media",
      sender: "AI",
      images: [],
      timestamp: new Date(),
    };

    // Filter out previous kid messages and keep only AI messages, then add new AI media message
    setChatMessages((prev) => {
      const aiMessages = prev.filter(message => message.sender === "AI");
      return [...aiMessages, mediaMessage];
    });
  };

  const handleChallengeListClose = () => {
    setShowChallengeListView(false);
    setCameFromUploadMenu(false);
  };

  const handleBackToUploadMenu = () => {
    setShowChallengeListView(false);
    setShowUploadMenu(true); // Reopen the upload menu
  };

  const handleUploadMenuChange = (isOpen) => {
    setShowUploadMenu(isOpen);
    if (!isOpen) {
      setCameFromUploadMenu(false); // Reset when menu closes
    }
  };

  // Handler for creation sharing flow
  const handleCreationSharing = (images) => {
    console.log("Starting creation sharing flow with images:", images);
    setCreationImages(images);
    setCreationSharingStep('title');

    // Add AI message asking for title
    const titleRequest = {
      id: Date.now().toString(),
      type: "text",
      sender: "AI",
      content: "Great! Now let's give it a name. Tell me the name of your creation.",
      timestamp: new Date(),
    };
    setChatMessages((prev) => [...prev, titleRequest]);
  };

  const handleChallengeSelect = (challenge) => {
    console.log("Challenge selected:", challenge);
    setShowChallengeListView(false);

    // Add challenge message to chat
    const challengeMessage = {
      id: Date.now().toString(),
      type: "text",
      sender: "Kid",
      content: `I want to work on the "${challenge.title}" challenge!`,
      timestamp: new Date(),
    };
    setChatMessages((prev) => [...prev, challengeMessage]);

    // Add AI response
    setTimeout(() => {
      const aiResponse = {
        id: (Date.now() + 1).toString(),
        type: "text",
        sender: "AI",
        content: `Great choice! Let's work on "${challenge.title}" together. What would you like to create for this challenge?`,
        timestamp: new Date(),
      };
      setChatMessages((prev) => [...prev, aiResponse]);
    }, 1500);
  };



  return (
    <div
      className="min-h-screen bg-space-bg relative overflow-hidden"
      style={{
        backgroundImage: `url('https://cdn.builder.io/api/v1/image/assets%2Fda24af11bdbb4585b8e6eb6406b2daf9%2Fbe19d365cb504ae1abfb1c61a7af9c62?format=webp&width=800')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {!showCompanionSelector && <EnhancedMagicalBackground />}

      <AppHeader />

      {/* Main Content */}
      <div className="flex h-[calc(100vh-80px)]">
        <DualSidebar
          topMenuItems={menuItemsData.top}
          bottomMenuItems={menuItemsData.bottom}
          topSidebarCollapsed={topSidebarCollapsed}
          bottomSidebarCollapsed={bottomSidebarCollapsed}
          showTopWaveEffect={showTopWaveEffect}
          showBottomWaveEffect={showBottomWaveEffect}
          toggleTopSidebar={toggleTopSidebar}
          toggleBottomSidebar={toggleBottomSidebar}
          onMenuItemClick={handleMenuItemClick}
          moodIconActivated={
            shouldAskForMood(dependent) && !hasMoodCheckinOccurred
          }
          selectedMood={selectedMood}
          showMoodPicker={showMoodPicker}
          moodAnimationTrigger={moodAnimationTrigger}
        />

        {/* Center Content Area - Chat Interface */}
        <div className="flex-1 relative flex flex-col">
          <div className="flex-1 flex flex-col max-w-4xl mx-auto w-full px-4 pt-6 min-h-0">
            <SimplifiedChatContainer
              messages={chatMessages}
              showMagicalCard={showMagicalCard}
              onAcceptChallenge={handleAcceptChallenge}
              onRegenerateChallenge={handleRegenerateChallenge}
              onChatMore={handleChatMore}
              onShowCarousel={handleShowCarousel}
              onCreationSharing={handleCreationSharing}
              isAIThinking={isAIThinking}
              selectedCompanion={chatSelectedCompanion}
              kidProfileImage="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?w=100&h=100&fit=crop&crop=face&auto=format"
              className="flex-1 min-h-0"
            />
          </div>

          {/* Fixed Input Box at Bottom */}
          <div className="flex-shrink-0 sticky bottom-0 pt-6 pb-8">
            <div className="max-w-2xl mx-auto px-4 md:px-6">
              <ChatInputBox
                placeholder="Ask me anything..."
                onSendMessage={handleEnhancedSendMessage}
                onAddAttachment={handleAddAttachment}
                onSelectChallenge={handleSelectChallenge}
                onMyOwnCreation={handleMyOwnCreation}
                externalShowUploadMenu={showUploadMenu}
                onUploadMenuChange={handleUploadMenuChange}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Modals and Overlays */}
      {showAcceptedChallenges && (
        <AcceptedChallenges
          challenges={challenges}
          loading={challengesLoading}
          error={challengesError}
        />
      )}
      {showCreationsPanel && (
        <CreationsPanel
          creations={
            apiCreationsData.length > 0 ? apiCreationsData : creationsData
          }
        />
      )}
      {/* Companion Selector Modal */}
      {showCompanionSelector && (
        <CompanionSelector
          onSelect={handleCompanionSelect}
          onClose={() => setShowCompanionSelector(false)}
        />
      )}

      {/* Mood Picker Modal */}
      <MoodPickerCard
        isVisible={showMoodPicker}
        onClose={handleMoodPickerClose}
        onMoodSubmit={handleMoodPickerSubmit}
      />

      {/* Challenge List View Modal */}
      {showChallengeListView && (
        <ChallengeListView
          challenges={challenges}
          loading={challengesLoading}
          error={challengesError}
          onClose={handleChallengeListClose}
          onChallengeSelect={handleChallengeSelect}
          onBackToMenu={cameFromUploadMenu ? handleBackToUploadMenu : null}
        />
      )}


    </div>
  );
}
