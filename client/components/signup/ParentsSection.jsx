import { Card, CardContent } from "@/components/ui/card";

const ParentsSection = () => {
  return (
    <div className="px-8 py-8">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-gray-900">Parents</h3>
        <button className="text-purple-600 hover:text-purple-700 text-sm font-medium">
          View all
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <Card key={i} className="bg-gray-100 border-0">
            <CardContent className="p-4">
              <div className="w-full h-32 bg-gray-200 rounded mb-3"></div>
              <p className="text-sm text-gray-700 mb-2">
                Parent story title
              </p>
              <p className="text-xs text-gray-500">
                Story description here
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ParentsSection;
