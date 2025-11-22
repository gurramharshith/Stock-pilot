import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

export default function AdjustmentsPage() {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-lg font-semibold md:text-2xl">Inventory Adjustments</h1>
      <Button><PlusCircle className="mr-2 h-4 w-4" /> New Adjustment</Button>
    </div>
  );
}
