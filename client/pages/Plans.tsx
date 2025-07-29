import React, { useState } from "react";
import { Check, Search, User, ArrowLeft } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Plans = () => {
  const [isLoginMenuOpen, setIsLoginMenuOpen] = useState(false);
  const [showBackTooltip, setShowBackTooltip] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* TaleTree Logo - Absolutely positioned like signup */}
      <div className="absolute top-6 left-6 z-50">
        <div className="flex items-center mb-3">
          <div className="w-8 h-8 mr-3">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F0b5ad4e8e5f84db5a19db37317c1643d%2F956eb6364f77469eb6b19c2791e6b43a?format=webp&width=800"
              alt="TaleTree Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <span className="text-xl font-semibold text-gray-900">
            taleTree
          </span>
        </div>

        {/* Back Button */}
        <div className="relative">
          <button
            onClick={() => navigate('/signup')}
            onMouseEnter={() => setShowBackTooltip(true)}
            onMouseLeave={() => setShowBackTooltip(false)}
            className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:bg-purple-50 hover:border-purple-400 hover:text-purple-600 transition-all duration-300 cursor-pointer group"
          >
            <ArrowLeft className="w-5 h-5 text-gray-600 group-hover:text-purple-600" />
          </button>

          {/* Tooltip */}
          {showBackTooltip && (
            <div className="absolute left-full ml-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap transition-all duration-200">
              Back to Signup
              {/* Tooltip arrow */}
              <div className="absolute right-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-4 border-t-transparent border-b-4 border-b-transparent border-r-4 border-r-gray-900"></div>
            </div>
          )}
        </div>
      </div>

      {/* Search and Login - Absolutely positioned like signup */}
      <div className="absolute top-6 right-6 z-50 flex items-center gap-4">
        {/* Search Component */}
        <div className="relative">
          <button className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:bg-blue-50 hover:border-blue-400 hover:text-blue-600 transition-all duration-300 cursor-pointer group">
            <Search className="w-5 h-5 text-gray-600 group-hover:text-blue-600" />
          </button>
        </div>

        {/* Login Component - Same as Signup */}
        <div
          className="relative"
          onMouseEnter={() => setIsLoginMenuOpen(true)}
          onMouseLeave={() => setIsLoginMenuOpen(false)}
        >
          <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-full font-medium text-sm hover:bg-gray-50 hover:text-gray-800 transition-all duration-300 flex items-center gap-2">
            <User className="w-4 h-4" />
            Login
          </button>

          {/* Login Dropdown Menu - Exact same as Signup */}
          {isLoginMenuOpen && (
            <div className="absolute top-full right-0 pt-2">
              {/* Invisible bridge to prevent menu from closing */}
              <div className="absolute top-0 right-0 w-full h-2 bg-transparent"></div>
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden min-w-[140px] transition-all duration-300">
                <div className="py-2">
                  <button className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors duration-200 flex items-center gap-3">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2F0b5ad4e8e5f84db5a19db37317c1643d%2F8ade38e9e3ed4481823af4c44b90eec8?format=webp&width=800"
                      alt="Kids"
                      className="w-6 h-6 rounded-full object-cover"
                    />
                    <span className="text-gray-800 font-medium text-sm">
                      Kids
                    </span>
                  </button>

                  <button className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors duration-200 flex items-center gap-3">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2F0b5ad4e8e5f84db5a19db37317c1643d%2F70906b39ddd5462b8740ab078244aace?format=webp&width=800"
                      alt="Parent"
                      className="w-6 h-6 rounded-full object-cover"
                    />
                    <span className="text-gray-800 font-medium text-sm">
                      Guardians
                    </span>
                  </button>

                  <button className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors duration-200 flex items-center gap-3">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2F0b5ad4e8e5f84db5a19db37317c1643d%2F79afaa309c38474ba6bc9b0f00dbac56?format=webp&width=800"
                      alt="Educator"
                      className="w-6 h-6 rounded-full object-cover"
                    />
                    <span className="text-gray-800 font-medium text-sm">
                      Educator
                    </span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 bg-white">
        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            TaleTree Pricing
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the plan that fits your family or organization.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Emeralites Plan */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 relative hover:border-purple-500 hover:border-2 transition-all duration-300 cursor-pointer">
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-cyan-600 mb-2">
                Emeralites
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                For curious kids just starting out
              </p>
              <div className="mb-6">
                <span className="text-3xl font-bold text-gray-900">$0</span>
                <span className="text-gray-600 ml-2">/ month</span>
              </div>
            </div>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 text-sm">
                  Up to 20 TaleTree creations
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 text-sm">
                  AI powered emotional reflections
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 text-sm">
                  Guardian account verification required
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 text-sm">
                  Limited access to the TaleTree Method
                </span>
              </li>
            </ul>

            <div className="bg-gray-100 text-gray-500 py-3 px-6 rounded-full text-center font-medium">
              You current plan
            </div>
          </div>

          {/* Seedlings Plan */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 relative hover:border-purple-500 hover:border-2 transition-all duration-300 cursor-pointer">
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-green-600 mb-2">
                Seedlings
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                For families ready to grow together
              </p>
              <div className="mb-6">
                <span className="text-3xl font-bold text-gray-900">$10</span>
                <span className="text-gray-600 ml-2">/ month per child</span>
              </div>
            </div>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 text-sm">
                  Unlimited TaleTree creations
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 text-sm">
                  Full access to AI companions
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 text-sm">
                  Weekly guardian insights & reports
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 text-sm">
                  20-Minute Promise tools
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 text-sm">
                  Daily emotional check-ins
                </span>
              </li>
            </ul>

            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-full transition-colors duration-200">
              Get Seedlings
            </Button>
          </div>

          {/* Villagers Plan */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 relative hover:border-purple-500 hover:border-2 transition-all duration-300 cursor-pointer">
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-purple-600 mb-2">
                Villagers
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                For schools, churches, and camps
              </p>
              <div className="mb-6">
                <span className="text-3xl font-bold text-gray-900">
                  Contact Sales
                </span>
              </div>
            </div>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 text-sm">
                  Set up Camps & Tribes
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 text-sm">
                  Manage groups & progress
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 text-sm">
                  All Seedlings features included
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 text-sm">
                  Institution-wide guardian engagement
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 text-sm">
                  Custom challenge creation
                </span>
              </li>
            </ul>

            <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-full transition-colors duration-200">
              Get Villagers
            </Button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-indigo-900 text-white mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-1">
              <h3 className="text-xl font-semibold mb-4">TaleTree Inc.</h3>
              <p className="text-indigo-200 text-sm">
                470 Ramona St. Palo Alto, CA 94301, USA
              </p>
            </div>

            {/* Company Links */}
            <div className="md:col-span-1">
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-indigo-200">
                <li>
                  <a href="#" className="hover:text-white">
                    Our story
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    TaleTree Friends
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    TaleTree Pledge
                  </a>
                </li>
              </ul>
            </div>

            {/* Support Links */}
            <div className="md:col-span-1">
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-indigo-200">
                <li>
                  <a href="#" className="hover:text-white">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    End User License Agreement
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Email Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Follow Us */}
            <div className="md:col-span-1">
              <h4 className="font-semibold mb-4">Follow us</h4>
              <div className="flex space-x-3">
                <div className="w-8 h-8 bg-indigo-700 rounded-full flex items-center justify-center">
                  <span className="text-xs">f</span>
                </div>
                <div className="w-8 h-8 bg-indigo-700 rounded-full flex items-center justify-center">
                  <span className="text-xs">t</span>
                </div>
                <div className="w-8 h-8 bg-indigo-700 rounded-full flex items-center justify-center">
                  <span className="text-xs">i</span>
                </div>
                <div className="w-8 h-8 bg-indigo-700 rounded-full flex items-center justify-center">
                  <span className="text-xs">l</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-indigo-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-indigo-200 text-sm">
              2025 TaleTree Inc. All rights reserved
            </p>
            <p className="text-indigo-200 text-sm">
              Email: contact@taletree.com
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Plans;
