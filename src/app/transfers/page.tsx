import { Button } from "@/components/ui/button";
import { PlusCircle, ArrowRightLeft } from "lucide-react";

export default function TransfersPage() {
  return (
    <>
      <div className="flex items-center justify-between">
        <div>
            <h1 className="text-lg font-semibold md:text-2xl">Internal Transfers</h1>
            <p className="text-sm text-muted-foreground">Move stock between your warehouse locations to optimize inventory levels.</p>
        </div>
        <Button><PlusCircle className="mr-2 h-4 w-4" /> New Transfer</Button>
      </div>
      <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm" x-chunk="dashboard-02-chunk-1">
        <div className="flex flex-col items-center gap-2 text-center">
            <ArrowRightLeft className="h-12 w-12 text-muted-foreground" />
          <h3 className="text-2xl font-bold tracking-tight">
            You have no internal transfers
          </h3>
          <p className="text-sm text-muted-foreground">
            Start moving stock between your locations to see a history here.
          </p>
          <Button className="mt-4"><PlusCircle className="mr-2 h-4 w-4" /> New Transfer</Button>
        </div>
      </div>
    </>
  );
}
