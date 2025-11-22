'use client';

import { useState } from 'react';
import { streamFlow } from '@genkit-ai/next/client';
import { suggestReorderingRules, SuggestReorderingRulesInput, SuggestReorderingRulesOutput } from '@/ai/flows/suggest-reordering-rules';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Wand2, Loader2 } from 'lucide-react';
import { Slider } from '@/components/ui/slider';
import type { Product } from '@/lib/types';

export default function ReorderingRules({ product }: { product: Product }) {
  const {run, stream, result, running} = streamFlow(suggestReorderingRules);
  const [historicalData, setHistoricalData] = useState('Last 6 months: 120, 150, 130, 160, 140, 170 units sold.');
  const [leadTime, setLeadTime] = useState(14);
  const [serviceLevel, setServiceLevel] = useState(0.95);
  const [suggestions, setSuggestions] = useState<SuggestReorderingRulesOutput | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuggestions(null);

    const input: SuggestReorderingRulesInput = {
      productName: product.name,
      historicalData,
      currentStockLevel: product.stock,
      leadTime,
      serviceLevel,
    };
    
    const result = await run(input);
    setSuggestions(result);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Reordering Rules</CardTitle>
        <CardDescription>Define and optimize reordering parameters for this product using AI.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="historical-data">Historical Sales Data</Label>
            <Textarea
              id="historical-data"
              value={historicalData}
              onChange={(e) => setHistoricalData(e.target.value)}
              placeholder="e.g., Last 3 months: 100, 120, 110 units sold."
            />
          </div>
          <div>
            <Label htmlFor="lead-time">Lead Time (days)</Label>
            <Input
              id="lead-time"
              type="number"
              value={leadTime}
              onChange={(e) => setLeadTime(Number(e.target.value))}
            />
          </div>
           <div>
            <Label htmlFor="service-level">Service Level: {Math.round(serviceLevel * 100)}%</Label>
            <Slider
                id="service-level"
                min={0.8}
                max={0.99}
                step={0.01}
                value={[serviceLevel]}
                onValueChange={(value) => setServiceLevel(value[0])}
            />
            <p className="text-sm text-muted-foreground">The desired probability of not stocking out.</p>
          </div>
          <Button type="submit" disabled={running}>
            {running ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Wand2 className="mr-2 h-4 w-4" />
            )}
            Get AI Suggestions
          </Button>
        </form>
        
        {running && !suggestions && (
            <div className="space-y-4 rounded-lg border border-dashed p-4">
                <p className="text-sm text-muted-foreground text-center">AI is analyzing the data...</p>
                 <div className="grid grid-cols-3 gap-4">
                    <div className="flex flex-col items-center gap-2 p-4 bg-muted/50 rounded-lg animate-pulse">
                        <div className="h-4 w-24 bg-muted rounded"></div>
                        <div className="h-8 w-16 bg-muted rounded"></div>
                    </div>
                    <div className="flex flex-col items-center gap-2 p-4 bg-muted/50 rounded-lg animate-pulse delay-150">
                        <div className="h-4 w-24 bg-muted rounded"></div>
                        <div className="h-8 w-16 bg-muted rounded"></div>
                    </div>
                    <div className="flex flex-col items-center gap-2 p-4 bg-muted/50 rounded-lg animate-pulse delay-300">
                        <div className="h-4 w-24 bg-muted rounded"></div>
                        <div className="h-8 w-16 bg-muted rounded"></div>
                    </div>
                </div>
            </div>
        )}

        {suggestions && (
          <div className="space-y-4 rounded-lg border border-primary/20 bg-primary/5 p-4">
            <h3 className="font-semibold text-primary">AI Recommendations</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <div className="p-4 bg-background rounded-lg">
                <p className="text-sm text-muted-foreground">Reorder Point</p>
                <p className="text-2xl font-bold">{suggestions.reorderPoint}</p>
              </div>
              <div className="p-4 bg-background rounded-lg">
                <p className="text-sm text-muted-foreground">Order Quantity</p>
                <p className="text-2xl font-bold">{suggestions.orderQuantity}</p>
              </div>
              <div className="p-4 bg-background rounded-lg">
                <p className="text-sm text-muted-foreground">Safety Stock</p>
                <p className="text-2xl font-bold">{suggestions.safetyStock}</p>
              </div>
            </div>
            <div>
                <h4 className="font-medium">Analysis</h4>
                <p className="text-sm text-muted-foreground">{suggestions.recommendations}</p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
