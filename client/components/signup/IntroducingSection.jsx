const IntroducingSection = () => {
  return (
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
  );
};

export default IntroducingSection;
