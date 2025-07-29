import React from 'react';

const PlansStrip = () => {
  return (
    <div className="relative z-10 bg-gray-50 border-t border-gray-200">
      {/* Plans Strip Container */}
      <div className="py-4 px-6 mx-auto max-w-6xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          {/* Left Side - Text Content */}
          <div className="flex-1">
            <h3 className="text-base font-medium text-gray-900 mb-1">
              Creativity and kindness matter more than ever in the age of{' '}
              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800 ml-1">
                AI
              </span>
            </h3>
            <p className="text-sm text-gray-600">
              TaleTree helps your child grow both — and get rewarded for it.
            </p>
          </div>

          {/* Right Side - CTA Button */}
          <div className="flex-shrink-0">
            <button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-medium py-2.5 px-6 rounded-full transition-all duration-200 shadow-sm hover:shadow-md text-sm">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlansStrip;
