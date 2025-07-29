import React from 'react';

const PlansStrip = () => {
  return (
    <div className="relative z-10 bg-gray-50 border-t border-gray-200">
      {/* Plans Strip Container */}
      <div className="py-3 px-6 mx-auto max-w-6xl">
        <div className="flex items-center justify-between">
          {/* Left Side - New Badge + Text */}
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-green-100 text-green-800">
              New
            </span>
            <span className="text-base font-medium text-gray-900">
              TaleTree just got better!
            </span>
          </div>

          {/* Right Side - See Plans Button */}
          <div className="flex-shrink-0">
            <button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-medium py-2 px-6 rounded-full transition-all duration-200 shadow-sm hover:shadow-md text-sm">
              See plans
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlansStrip;
