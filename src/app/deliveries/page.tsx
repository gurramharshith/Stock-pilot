import { Button } from "@/components/ui/button";
import { PlusCircle, PackageCheck } from "lucide-react";

export default function DeliveriesPage() {
  return (
    <>
      <div className="flex items-center justify-between">
        <div>
            <h1 className="text-lg font-semibold md:text-2xl">Delivery Orders</h1>
            <p className="text-sm text-muted-foreground">Manage outgoing shipments to customers. Keep track of what needs to be packed and shipped.</p>
        </div>
        <Button><PlusCircle className="mr-2 h-4 w-4" /> New Delivery</Button>
      </div>
      <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm" x-chunk="dashboard-02-chunk-1">
        <div className="flex flex-col items-center gap-2 text-center">
            <PackageCheck className="h-12 w-12 text-muted-foreground" />
          <h3 className="text-2xl font-bold tracking-tight">
            You have no delivery orders
          </h3>
          <p className="text-sm text-muted-foreground">
            Create delivery orders to ship products to your customers.
          </p>
          <Button className="mt-4"><PlusCircle className="mr-2 h-4 w-4" /> New Delivery</Button>
        </div>
      </div>
    </>
  );
}
