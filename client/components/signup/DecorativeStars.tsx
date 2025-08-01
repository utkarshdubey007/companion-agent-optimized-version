const DecorativeStars = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-5">
      <div className="absolute top-20 left-10 w-2 h-2 bg-pink-400 rounded-full animate-pulse opacity-70"></div>
      <div className="absolute top-32 right-20 w-1 h-1 bg-yellow-400 rounded-full animate-pulse opacity-80"></div>
      <div className="absolute top-16 right-32 w-3 h-3 bg-orange-400 rounded-full animate-pulse opacity-60"></div>
      <div className="absolute top-40 left-32 w-2 h-2 bg-purple-400 rounded-full animate-pulse opacity-75"></div>
      <div className="absolute top-24 left-1/3 w-1 h-1 bg-cyan-400 rounded-full animate-pulse opacity-90"></div>
      <div className="absolute top-28 right-1/4 w-2 h-2 bg-pink-300 rounded-full animate-pulse opacity-65"></div>
      <div className="absolute top-60 left-1/4 w-1 h-1 bg-blue-400 rounded-full animate-pulse opacity-80"></div>
      <div className="absolute top-12 left-1/2 w-2 h-2 bg-green-400 rounded-full animate-pulse opacity-70"></div>
      <div className="absolute top-48 right-1/3 w-1 h-1 bg-red-400 rounded-full animate-pulse opacity-85"></div>
    </div>
  );
};

export default DecorativeStars;
