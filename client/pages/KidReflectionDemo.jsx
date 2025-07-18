import React, { useState } from "react";
import { motion } from "framer-motion";
import KidReflectionStorybookCard from "@/components/KidReflectionStorybookCard";

export default function KidReflectionDemo() {
  const [selectedCompanion, setSelectedCompanion] = useState(null);

  // Sample data for demonstration
  const sampleReflections = [
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
        "What a magical flower garden! I see so many different colors - pink roses, yellow sunflowers, and purple violets all growing together. The butterflies dancing around them make it look like a fairy tale! 🌸",
      badgeTitle: "Garden Wizard!",
      aiAvatarUrl:
        "https://cdn.builder.io/api/v1/image/assets%2Fae5429317afa463b8668d5872bee2cf9%2Ff22c539957df4cf1b810be45844442be?format=webp&width=800",
    },
  ];

  const [visibleCards, setVisibleCards] = useState(1);

  const showNextCard = () => {
    if (visibleCards < sampleReflections.length) {
      setVisibleCards((prev) => prev + 1);
    }
  };

  const resetDemo = () => {
    setVisibleCards(1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1
            className="text-4xl font-bold text-purple-600 mb-4"
            style={{ fontFamily: '"Comic Neue", cursive' }}
          >
            🎨 Kid's Reflection Storybook Cards
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Watch as AI companions create magical storybook cards for each
            artwork! Each card appears with delightful animations and
            personalized reflections.
          </p>
        </motion.div>

        {/* Demo Controls */}
        <motion.div
          className="flex justify-center gap-4 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <button
            onClick={showNextCard}
            disabled={visibleCards >= sampleReflections.length}
            className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-bold shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ fontFamily: '"Comic Neue", cursive' }}
          >
            ✨ Show Next Card ({visibleCards}/{sampleReflections.length})
          </button>
          <button
            onClick={resetDemo}
            className="px-6 py-3 bg-gradient-to-r from-orange-400 to-yellow-400 text-white rounded-full font-bold shadow-lg hover:shadow-xl transition-all"
            style={{ fontFamily: '"Comic Neue", cursive' }}
          >
            🔄 Reset Demo
          </button>
        </motion.div>

        {/* Chat Interface Simulation */}
        <motion.div
          className="bg-white rounded-3xl shadow-xl p-6 max-h-[80vh] overflow-y-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="flex items-center justify-center mb-6 p-4 bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl">
            <h2
              className="text-xl font-bold text-purple-600"
              style={{ fontFamily: '"Comic Neue", cursive' }}
            >
              💬 Kids Chat Interface - Reflection Cards
            </h2>
          </div>

          {/* Chat Messages */}
          <div className="space-y-6">
            {/* Sample regular chat message */}
            <motion.div
              className="flex justify-start"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
            >
              <div className="bg-gray-100 rounded-2xl p-4 max-w-xs">
                <p
                  className="text-gray-700"
                  style={{ fontFamily: '"Comic Neue", cursive' }}
                >
                  🤖 Hi there! I'm so excited to see your amazing artwork! Show
                  me what you've created!
                </p>
              </div>
            </motion.div>

            {/* Reflection Storybook Cards */}
            {sampleReflections
              .slice(0, visibleCards)
              .map((reflection, index) => (
                <KidReflectionStorybookCard
                  key={index}
                  imageUrl={reflection.imageUrl}
                  reflection={reflection.reflection}
                  badgeTitle={reflection.badgeTitle}
                  aiAvatarUrl={reflection.aiAvatarUrl}
                  reactionsEnabled={true}
                  index={index}
                />
              ))}

            {/* Encouraging message */}
            {visibleCards >= sampleReflections.length && (
              <motion.div
                className="flex justify-start"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-2xl p-4 max-w-sm border-2 border-yellow-200">
                  <p
                    className="text-gray-700 font-bold"
                    style={{ fontFamily: '"Comic Neue", cursive' }}
                  >
                    🌟 Wow! You're such an amazing artist! I love seeing all
                    your beautiful creations. Keep being creative and magical!
                    ✨
                  </p>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Features List */}
        <motion.div
          className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3
              className="text-xl font-bold text-purple-600 mb-3"
              style={{ fontFamily: '"Comic Neue", cursive' }}
            >
              ✨ Magical Features
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Storybook page-flip animations</li>
              <li>• AI companion avatars</li>
              <li>• Interactive reaction system</li>
              <li>• Voice playback simulation</li>
              <li>• Sparkle and magical effects</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3
              className="text-xl font-bold text-purple-600 mb-3"
              style={{ fontFamily: '"Comic Neue", cursive' }}
            >
              🎨 Design Elements
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Soft pastel gradients</li>
              <li>• Playful Comic Neue font</li>
              <li>• Right-aligned chat positioning</li>
              <li>• Responsive mobile design</li>
              <li>• Achievement badges</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
