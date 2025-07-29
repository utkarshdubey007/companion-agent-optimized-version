import React from 'react';

const PlansStrip = () => {
  return (
    <div className="relative z-10 bg-white border-t border-gray-100">
      {/* Plans Strip Container */}
      <div className="py-6 px-4 mx-auto max-w-7xl">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Left Side - Text Content */}
          <div className="flex-1 text-center sm:text-left">
            <h3 className="text-lg font-semibold text-gray-900 mb-1">
              Creativity and kindness matter more than ever in the age of AI
            </h3>
            <p className="text-sm text-gray-600">
              TaleTree helps your child grow both — and get rewarded for it.
            </p>
          </div>

          {/* Right Side - CTA Button */}
          <div className="flex-shrink-0">
            <button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-medium py-3 px-8 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
              Explore Plans
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlansStrip;
