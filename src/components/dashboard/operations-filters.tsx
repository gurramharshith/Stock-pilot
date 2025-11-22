'use client';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import type { Operation } from '@/lib/types';
import { X } from 'lucide-react';

interface OperationsFiltersProps {
  allOperations: Operation[];
  setFilteredOperations: (operations: Operation[]) => void;
}

const documentTypes = ['All', 'Receipt', 'Delivery', 'Internal', 'Adjustment'];
const statuses = ['All', 'Draft', 'Waiting', 'Ready', 'Done', 'Canceled'];
const warehouses = ['All', 'Main Warehouse', 'Warehouse B', 'Warehouse C', 'Production Floor'];

export default function OperationsFilters({ allOperations, setFilteredOperations }: OperationsFiltersProps) {
  const [type, setType] = useState('All');
  const [status, setStatus] = useState('All');
  const [warehouse, setWarehouse] = useState('All');

  useEffect(() => {
    let filtered = allOperations;

    if (type !== 'All') {
      filtered = filtered.filter(op => op.type === type);
    }
    if (status !== 'All') {
      filtered = filtered.filter(op => op.status === status);
    }
    if (warehouse !== 'All') {
      filtered = filtered.filter(op => op.source === warehouse || op.destination === warehouse);
    }
    
    setFilteredOperations(filtered);
  }, [type, status, warehouse, allOperations, setFilteredOperations]);
  
  const resetFilters = () => {
    setType('All');
    setStatus('All');
    setWarehouse('All');
  }
  
  const isFiltered = type !== 'All' || status !== 'All' || warehouse !== 'All';

  return (
    <div className="flex items-center gap-2 pt-4 flex-wrap">
      <Select value={type} onValueChange={setType}>
        <SelectTrigger className="w-full sm:w-[180px]">
          <SelectValue placeholder="Document Type" />
        </SelectTrigger>
        <SelectContent>
          {documentTypes.map(t => <SelectItem key={t} value={t}>{t}</SelectItem>)}
        </SelectContent>
      </Select>
      <Select value={status} onValueChange={setStatus}>
        <SelectTrigger className="w-full sm:w-[180px]">
          <SelectValue placeholder="Status" />
        </SelectTrigger>
        <SelectContent>
          {statuses.map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}
        </SelectContent>
      </Select>
      <Select value={warehouse} onValueChange={setWarehouse}>
        <SelectTrigger className="w-full sm:w-[180px]">
          <SelectValue placeholder="Warehouse" />
        </SelectTrigger>
        <SelectContent>
          {warehouses.map(w => <SelectItem key={w} value={w}>{w}</SelectItem>)}
        </SelectContent>
      </Select>
      {isFiltered && (
        <Button variant="ghost" onClick={resetFilters}>
            <X className="mr-2 h-4 w-4" />
            Reset
        </Button>
      )}
    </div>
  );
}
