export function FloatingShapes() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Various geometric shapes scattered around */}
      <div className="absolute top-16 left-72 w-4 h-4 bg-orange-accent rounded transform rotate-45"></div>
      <div className="absolute top-32 right-96 w-6 h-6 bg-purple-accent rounded-full"></div>
      <div className="absolute top-48 left-1/4 w-3 h-8 bg-pink-accent transform rotate-12"></div>
      <div className="absolute bottom-72 right-1/4 w-5 h-5 bg-yellow-accent"></div>
      <div className="absolute top-24 right-1/3 w-8 h-3 bg-chat-bubble transform -rotate-12"></div>
      <div className="absolute bottom-48 left-1/3 w-4 h-4 bg-bunny-green rounded-full"></div>
      <div className="absolute top-64 left-1/2 w-2 h-6 bg-orange-accent transform rotate-45"></div>
    </div>
  );
}
