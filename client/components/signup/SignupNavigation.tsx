import { Button } from "@/components/ui/button";

const SignupNavigation = () => {
  return (
    <nav className="flex items-center justify-between p-4 relative z-10">
      <div className="flex items-center space-x-2">
        <div className="w-10 h-10 bg-cyan-400 rounded-full flex items-center justify-center">
          <div className="w-6 h-6 bg-white rounded-full"></div>
        </div>
        <div>
          <h1 className="text-white text-xl font-bold">taleTree</h1>
          <p className="text-cyan-300 text-xs">
            A New Kind of Curriculum for a New Kind of World
          </p>
        </div>
      </div>
      <div className="flex items-center space-x-6">
        <button className="text-white hover:text-cyan-300 transition-colors">
          Features
        </button>
        <button className="text-white hover:text-cyan-300 transition-colors">
          Pricing
        </button>
        <button className="text-white hover:text-cyan-300 transition-colors">
          About
        </button>
        <Button className="bg-cyan-400 hover:bg-cyan-500 text-black rounded-full px-6">
          Get Started
        </Button>
      </div>
    </nav>
  );
};

export default SignupNavigation;
