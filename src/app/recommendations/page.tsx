import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { ThumbsUp } from "lucide-react";


export default function RecommendationsPage() {
  return (
    <div>
      <h1 className="text-lg font-semibold md:text-2xl">Recommendations</h1>
      <p className="text-muted-foreground mb-4">This feature is not yet available.</p>
       <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm" x-chunk="dashboard-02-chunk-1">
        <div className="flex flex-col items-center gap-2 text-center">
            <ThumbsUp className="h-12 w-12 text-muted-foreground" />
          <h3 className="text-2xl font-bold tracking-tight">
            Coming Soon
          </h3>
          <p className="text-sm text-muted-foreground">
            AI-powered recommendations for your inventory are on the way.
          </p>
        </div>
      </div>
    </div>
  );
}
