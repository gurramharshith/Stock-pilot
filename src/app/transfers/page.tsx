import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

export default function TransfersPage() {
  return (
    <>
      <div className="flex items-center justify-between">
        <div>
            <h1 className="text-lg font-semibold md:text-2xl">Internal Transfers</h1>
            <p className="text-sm text-muted-foreground">Move stock between your warehouse locations.</p>
        </div>
        <Button><PlusCircle className="mr-2 h-4 w-4" /> New Transfer</Button>
      </div>
      <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
        <div className="flex flex-col items-center gap-1 text-center">
          <h3 className="text-2xl font-bold tracking-tight">
            You have no internal transfers
          </h3>
          <p className="text-sm text-muted-foreground">
            Start moving stock between your locations.
          </p>
          <Button className="mt-4">New Transfer</Button>
        </div>
      </div>
    </>
  );
}
