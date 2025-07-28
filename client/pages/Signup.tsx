import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

const Signup = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 via-purple-900 to-indigo-800 overflow-x-hidden">
      {/* Navigation Header */}
      <nav className="flex items-center justify-between p-4 relative z-10">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-cyan-400 rounded-full flex items-center justify-center">
            <div className="w-6 h-6 bg-white rounded-full"></div>
          </div>
          <div>
            <h1 className="text-white text-xl font-bold">taleTree</h1>
            <p className="text-cyan-300 text-xs">
              A New Kind of Curriculum for a New Kind of World
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <button className="text-white hover:text-cyan-300 transition-colors">
            Features
          </button>
          <button className="text-white hover:text-cyan-300 transition-colors">
            Pricing
          </button>
          <button className="text-white hover:text-cyan-300 transition-colors">
            About
          </button>
          <Button className="bg-cyan-400 hover:bg-cyan-500 text-black rounded-full px-6">
            Get Started
          </Button>
        </div>
      </nav>

      {/* Stars/Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-1 h-1 bg-yellow-400 rounded-full animate-pulse"></div>
        <div className="absolute top-16 right-32 w-3 h-3 bg-orange-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 left-32 w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
        <div className="absolute top-24 left-1/3 w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
        <div className="absolute top-28 right-1/4 w-2 h-2 bg-pink-300 rounded-full animate-pulse"></div>
      </div>

      {/* Main Hero Section */}
      <div className="relative flex flex-col items-center justify-center min-h-[70vh] px-4">
        {/* Background Landscape */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-green-400 via-yellow-300 to-transparent rounded-t-full transform scale-150 origin-bottom"></div>

        {/* Mountains/Hills */}
        <div className="absolute bottom-16 left-0 right-0 flex justify-center space-x-4">
          <div className="w-32 h-24 bg-green-500 rounded-t-full"></div>
          <div className="w-40 h-32 bg-green-600 rounded-t-full"></div>
          <div className="w-28 h-20 bg-green-400 rounded-t-full"></div>
        </div>

        {/* Character - Green Bunny */}
        <div className="relative z-10 mb-8 animate-gentle-float">
          <div className="w-32 h-40 relative">
            {/* Bunny Body */}
            <div className="w-20 h-24 bg-green-400 rounded-full mx-auto"></div>
            {/* Bunny Head */}
            <div className="w-16 h-16 bg-green-400 rounded-full mx-auto -mt-4 relative">
              {/* Ears */}
              <div className="absolute -top-6 left-2 w-3 h-8 bg-green-400 rounded-full rotate-12"></div>
              <div className="absolute -top-6 right-2 w-3 h-8 bg-green-400 rounded-full -rotate-12"></div>
              {/* Eyes */}
              <div className="absolute top-4 left-3 w-2 h-2 bg-black rounded-full"></div>
              <div className="absolute top-4 right-3 w-2 h-2 bg-black rounded-full"></div>
              {/* Mouth */}
              <div className="absolute top-7 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-black rounded-full"></div>
            </div>
            {/* Arms */}
            <div className="absolute top-6 -left-3 w-6 h-12 bg-green-400 rounded-full rotate-12"></div>
            <div className="absolute top-6 -right-3 w-6 h-12 bg-green-400 rounded-full -rotate-12"></div>
          </div>
        </div>

        {/* Speech Bubble */}
        <div className="relative z-10 mb-8">
          <div className="bg-cyan-400 rounded-2xl p-4 max-w-sm text-center relative">
            <p className="text-black font-medium">
              It's time to start. Share the beautiful, magical stories and
              stories.
            </p>
            {/* Bubble tail */}
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan-400 rotate-45"></div>
          </div>
        </div>

        {/* Search Input Section */}
        <div className="relative z-10 w-full max-w-md mb-4">
          <div className="relative">
            <Input
              type="text"
              placeholder="Enter anything..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-14 pl-4 pr-16 rounded-full border-2 border-orange-300 bg-white text-black placeholder-gray-500 text-lg"
            />
            <Button className="absolute right-2 top-2 h-10 w-10 bg-orange-400 hover:bg-orange-500 rounded-full p-0">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </Button>
          </div>
        </div>

        {/* Support Text */}
        <p className="relative z-10 text-white/80 text-sm">
          <span className="font-semibold">ADULTS</span> can get Support
        </p>
      </div>

      {/* Content Sections */}
      <div className="relative z-10 bg-white mt-8">
        {/* Creativity Section */}
        <div className="px-8 py-8 text-center">
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">
              Creativity and kindness matter more than score
            </span>{" "}
            in the age of
            <span className="inline-flex items-center mx-1 px-2 py-1 bg-purple-100 text-purple-800 rounded text-sm">
              AI
            </span>
          </p>
          <p className="text-gray-600">
            TaleTree helps your child grow both — and get rewarded for it.
          </p>
        </div>

        {/* Introducing TaleTree Section */}
        <div className="px-8 py-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Introducing TaleTree
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left - Character illustration */}
            <div className="bg-gradient-to-br from-orange-400 to-red-500 rounded-xl p-6 h-64 relative overflow-hidden">
              <div className="absolute bottom-4 left-4">
                <div className="w-16 h-20 bg-orange-600 rounded-full relative">
                  {/* Simple character representation */}
                  <div className="absolute top-2 left-3 w-2 h-2 bg-white rounded-full"></div>
                  <div className="absolute top-2 right-3 w-2 h-2 bg-white rounded-full"></div>
                  <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full"></div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-green-400/20 to-transparent rounded-xl"></div>
            </div>

            {/* Right - Family photo placeholder */}
            <div className="bg-gray-200 rounded-xl h-64 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-4"></div>
                <p className="text-gray-600 text-sm">Families that talk</p>
              </div>
            </div>
          </div>
        </div>

        {/* Latest News Grid */}
        <div className="px-8 py-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-gray-900">Latest news</h3>
            <button className="text-purple-600 hover:text-purple-700 text-sm font-medium">
              View all
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <Card key={i} className="bg-gray-100 border-0">
                <CardContent className="p-3">
                  <div className="w-full h-20 bg-gray-200 rounded mb-2"></div>
                  <p className="text-xs text-gray-600 mb-1">
                    News headline here
                  </p>
                  <p className="text-xs text-gray-500">Jan 24, 2024</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Parents Section */}
        <div className="px-8 py-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-gray-900">Parents</h3>
            <button className="text-purple-600 hover:text-purple-700 text-sm font-medium">
              View all
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <Card key={i} className="bg-gray-100 border-0">
                <CardContent className="p-4">
                  <div className="w-full h-32 bg-gray-200 rounded mb-3"></div>
                  <p className="text-sm text-gray-700 mb-2">
                    Parent story title
                  </p>
                  <p className="text-xs text-gray-500">
                    Story description here
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* TaleTree for Educators */}
        <div className="px-8 py-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-gray-900">
              TaleTree for Educators
            </h3>
            <button className="text-purple-600 hover:text-purple-700 text-sm font-medium">
              View all
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-gray-100 border-0">
              <CardContent className="p-6">
                <div className="w-full h-40 bg-gray-200 rounded mb-4"></div>
                <p className="text-sm text-gray-700 mb-2">
                  Learn about what we offer
                </p>
                <p className="text-xs text-gray-500">Jan 24, 2024</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-100 border-0">
              <CardContent className="p-6">
                <div className="w-full h-40 bg-gray-200 rounded mb-4"></div>
                <p className="text-sm text-gray-700 mb-2">
                  The TaleTree Method
                </p>
                <p className="text-xs text-gray-500">Jan 24, 2024</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Experts and Brands */}
        <div className="px-8 py-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-gray-900">
              Experts and Brands
            </h3>
            <button className="text-purple-600 hover:text-purple-700 text-sm font-medium">
              View all
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Array.from({ length: 3 }).map((_, i) => (
              <Card key={i} className="bg-gray-100 border-0">
                <CardContent className="p-6">
                  <div className="w-full h-32 bg-gray-200 rounded mb-4"></div>
                  <p className="text-sm text-gray-700 mb-2">
                    Expert opinion piece
                  </p>
                  <p className="text-xs text-gray-500">Jan 24, 2024</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-indigo-900 text-white py-12 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <h4 className="text-xl font-bold mb-4">TaleTree Inc.</h4>
              <p className="text-gray-300 text-sm">
                149 Barrow St, Floor 2nd, New York, NY 10014, USA
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h5 className="font-semibold mb-3">Company</h5>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>
                    <a href="#" className="hover:text-white">
                      Our Story
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h5 className="font-semibold mb-3">Support</h5>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>
                    <a href="#" className="hover:text-white">
                      Getting Started
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Help Center
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Server Status
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h5 className="font-semibold mb-3">Follow us</h5>
                <div className="flex space-x-3">
                  <div className="w-8 h-8 bg-gray-600 rounded-full"></div>
                  <div className="w-8 h-8 bg-gray-600 rounded-full"></div>
                  <div className="w-8 h-8 bg-gray-600 rounded-full"></div>
                  <div className="w-8 h-8 bg-gray-600 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
            <p>
              2024, TaleTree Inc. All rights reserved. | Email:
              contact@taletree.com
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Signup;
