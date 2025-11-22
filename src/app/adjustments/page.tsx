import { Button } from "@/components/ui/button";
import { PlusCircle, Wrench } from "lucide-react";

export default function AdjustmentsPage() {
  return (
    <>
      <div className="flex items-center justify-between">
        <div>
            <h1 className="text-lg font-semibold md:text-2xl">Inventory Adjustments</h1>
            <p className="text-sm text-muted-foreground">Record changes in stock levels due to cycle counts, damages, or discrepancies.</p>
        </div>
        <Button><PlusCircle className="mr-2 h-4 w-4" /> New Adjustment</Button>
      </div>
       <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm" x-chunk="dashboard-02-chunk-1">
        <div className="flex flex-col items-center gap-2 text-center">
            <Wrench className="h-12 w-12 text-muted-foreground" />
          <h3 className="text-2xl font-bold tracking-tight">
            You have no adjustments
          </h3>
          <p className="text-sm text-muted-foreground">
            Start recording inventory adjustments to see a log of all changes.
          </p>
          <Button className="mt-4"><PlusCircle className="mr-2 h-4 w-4" /> New Adjustment</Button>
        </div>
      </div>
    </>
  );
}
