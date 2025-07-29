import React, { useState } from "react";
import { Check, Search, User } from "lucide-react";
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
                <button className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:bg-blue-50 hover:border-blue-400 hover:text-blue-600 transition-all duration-300 cursor-pointer group">
                  <Search className="w-5 h-5 text-gray-600 group-hover:text-blue-600" />
                </button>
              </div>

              {/* Login Button with Dropdown */}
              <div className="relative group">
                <Button
                  variant="outline"
                  className="border border-gray-300 text-gray-700 px-4 py-2 rounded-full font-medium text-sm hover:bg-blue-50 hover:border-blue-400 hover:text-blue-600 transition-all duration-300 flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  Login
                </Button>

                {/* Dark Background Overlay */}
                <div className="fixed inset-0 bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-800 opacity-0 invisible group-hover:opacity-95 group-hover:visible transition-all duration-300 z-40"></div>

                {/* Login Dropdown Menu - Only visible on hover */}
                <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 max-w-md bg-white rounded-2xl shadow-2xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="p-8">
                    {/* Header with Avatar */}
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-teal-500 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">Guest</h3>
                        <p className="text-sm text-gray-500">Sign in to continue</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                        <Input
                          type="email"
                          placeholder="Enter your email"
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                        <Input
                          type="password"
                          placeholder="Enter your password"
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200"
                        />
                      </div>
                      <Button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white py-3 rounded-xl font-medium transition-all duration-200 shadow-lg hover:shadow-xl">
                        Sign In
                      </Button>

                      {/* Divider */}
                      <div className="relative my-6">
                        <div className="absolute inset-0 flex items-center">
                          <div className="w-full border-t border-gray-200"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                          <span className="px-2 bg-white text-gray-500">or</span>
                        </div>
                      </div>

                      {/* Social Login */}
                      <Button variant="outline" className="w-full border-2 border-gray-200 py-3 rounded-xl font-medium hover:bg-gray-50 transition-all duration-200">
                        <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                          <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                          <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                          <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                          <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                        </svg>
                        Continue with Google
                      </Button>

                      <div className="text-center">
                        <a href="#" className="text-sm text-purple-600 hover:text-purple-700 transition-colors duration-200">
                          Forgot password?
                        </a>
                      </div>
                      <div className="text-center text-sm text-gray-600">
                        Don't have an account?{" "}
                        <a href="#" className="text-purple-600 hover:text-purple-700 font-medium transition-colors duration-200">
                          Sign up for free
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
