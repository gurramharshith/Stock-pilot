import { Package, ArrowDownLeft, ArrowUpRight, Blocks } from 'lucide-react';
import KpiCard from '@/components/dashboard/kpi-card';
import OperationsTable from '@/components/dashboard/operations-table';
import { kpiData } from '@/lib/data';

export default function DashboardPage() {
  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        <KpiCard
          title="Total Products in Stock"
          value={kpiData.totalProducts.toLocaleString()}
          icon={Package}
          description="Across all warehouses"
        />
        <KpiCard
          title="Low Stock Items"
          value={kpiData.lowStockItems}
          icon={Blocks}
          description="Items needing reorder"
        />
        <KpiCard
          title="Pending Receipts"
          value={kpiData.pendingReceipts}
          icon={ArrowDownLeft}
          description="Incoming stock to be processed"
        />
        <KpiCard
          title="Pending Deliveries"
          value={kpiData.pendingDeliveries}
          icon={ArrowUpRight}
          description="Outgoing orders to be shipped"
        />
      </div>
      <div className="grid gap-4 md:gap-8 lg:grid-cols-1">
        <OperationsTable />
      </div>
    </>
  );
}
