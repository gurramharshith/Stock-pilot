import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

export default function ReceiptsPage() {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-lg font-semibold md:text-2xl">Receipts</h1>
      <Button><PlusCircle className="mr-2 h-4 w-4" /> New Receipt</Button>
    </div>
  );
}
