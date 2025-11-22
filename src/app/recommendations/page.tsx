import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const recommendations = [
    {
        title: "Build Multiple Deployments Simultaneously",
        description: "Never wait for a queued build."
    },
    {
        title: "Get builds up to 40% faster",
        description: "Switch to a bigger build machine."
    },
    {
        title: "Prevent Frontend-Backend Mismatches",
        description: "Automatically sync client and server versions to avoid deployment conflicts."
    }
]

export default function RecommendationsPage() {
  return (
    <div>
      <h1 className="text-lg font-semibold md:text-2xl">Recommendations</h1>
      <p className="text-muted-foreground mb-4">Improve your development and deployment workflow.</p>
       <div className="grid gap-6">
        {recommendations.map((rec, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-start gap-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                <div>
                    <CardTitle>{rec.title}</CardTitle>
                    <p className="text-muted-foreground">{rec.description}</p>
                </div>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
}
