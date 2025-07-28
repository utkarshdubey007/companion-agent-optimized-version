import { Card, CardContent } from "@/components/ui/card";

const EducatorsSection = () => {
  return (
    <div className="px-8 py-8">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-gray-900">
          TaleTree for Educators
        </h3>
        <button className="text-purple-600 hover:text-purple-700 text-sm font-medium">
          View all
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-gray-100 border-0">
          <CardContent className="p-6">
            <div className="w-full h-40 bg-gray-200 rounded mb-4"></div>
            <p className="text-sm text-gray-700 mb-2">
              Learn about what we offer
            </p>
            <p className="text-xs text-gray-500">Jan 24, 2024</p>
          </CardContent>
        </Card>

        <Card className="bg-gray-100 border-0">
          <CardContent className="p-6">
            <div className="w-full h-40 bg-gray-200 rounded mb-4"></div>
            <p className="text-sm text-gray-700 mb-2">
              The TaleTree Method
            </p>
            <p className="text-xs text-gray-500">Jan 24, 2024</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EducatorsSection;
