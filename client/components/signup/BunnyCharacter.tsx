const BunnyCharacter = () => {
  return (
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
  );
};

export default BunnyCharacter;
