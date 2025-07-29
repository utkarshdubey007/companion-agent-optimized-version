import { Card, CardContent } from "@/components/ui/card";

const LatestNewsSection = () => {
  return (
    <div className="px-8 py-8">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-gray-900">Latest news</h3>
        <button className="text-purple-600 hover:text-purple-700 text-sm font-medium">
          View all
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <Card key={i} className="bg-gray-100 border-0">
            <CardContent className="p-3">
              <div className="w-full h-20 bg-gray-200 rounded mb-2"></div>
              <p className="text-xs text-gray-600 mb-1">News headline here</p>
              <p className="text-xs text-gray-500">Jan 24, 2024</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default LatestNewsSection;
