import React from "react";
import { Check, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Plans = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
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

            {/* Search and Login */}
            <div className="flex items-center gap-4">
              {/* Search Component */}
              <div className="relative">
                <button className="w-10 h-10 border-2 border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 cursor-pointer">
                  <Search className="w-5 h-5 text-gray-600" />
                </button>
              </div>

              {/* Login Button */}
              <Button
                variant="outline"
                className="border-2 border-gray-300 text-gray-700 px-4 py-2 rounded-full font-medium text-sm hover:bg-gray-100 hover:border-gray-400 hover:text-gray-900 transition-all duration-300 flex items-center gap-2 shadow-sm hover:shadow-md"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Login
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-white">
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
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 relative">
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
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 relative">
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
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 relative">
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
