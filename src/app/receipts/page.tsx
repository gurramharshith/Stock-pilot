
import { Button } from "@/components/ui/button";
import { PlusCircle, Truck } from "lucide-react";

export default function ReceiptsPage() {
  return (
    <>
      <div className="flex items-center justify-between">
        <div>
            <h1 className="text-lg font-semibold md:text-2xl">Receipts</h1>
            <p className="text-sm text-muted-foreground">Manage incoming inventory from your suppliers. Track what's arrived and what's pending.</p>
        </div>
        <Button><PlusCircle className="mr-2 h-4 w-4" /> New Receipt</Button>
      </div>
       <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm" x-chunk="dashboard-02-chunk-1">
        <div className="flex flex-col items-center gap-2 text-center">
        <Truck className="h-12 w-12 text-muted-foreground" />
          <h3 className="text-2xl font-bold tracking-tight">
            You have no receipts
          </h3>
          <p className="text-sm text-muted-foreground">
            Start receiving products from your suppliers to populate this list.
          </p>
          <Button className="mt-4"><PlusCircle className="mr-2 h-4 w-4" /> New Receipt</Button>
        </div>
      </div>
    </>
  );
}
