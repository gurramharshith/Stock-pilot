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
import type { Operation, Product } from '@/lib/types';
import { products } from '@/lib/data';
import { X } from 'lucide-react';

interface OperationsFiltersProps {
  allOperations: Operation[];
  setFilteredOperations: (operations: Operation[]) => void;
}

const documentTypes = ['All', 'Receipt', 'Delivery', 'Internal', 'Adjustment'];
const statuses = ['All', 'Draft', 'Waiting', 'Ready', 'Done', 'Canceled'];
const warehouses = ['All', 'Main Warehouse', 'Warehouse B', 'Warehouse C', 'Production Floor'];

// Get unique product categories from the products data
const productCategories = ['All', ...Array.from(new Set(products.map(p => p.category)))];

// Create a map of product names to their categories for efficient lookup
const productCategoryMap = new Map<string, string>();
products.forEach(p => {
  productCategoryMap.set(p.name, p.category);
});

export default function OperationsFilters({ allOperations, setFilteredOperations }: OperationsFiltersProps) {
  const [type, setType] = useState('All');
  const [status, setStatus] = useState('All');
  const [warehouse, setWarehouse] = useState('All');
  const [category, setCategory] = useState('All');

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
    if (category !== 'All') {
      filtered = filtered.filter(op => productCategoryMap.get(op.product) === category);
    }
    
    setFilteredOperations(filtered);
  }, [type, status, warehouse, category, allOperations, setFilteredOperations]);
  
  const resetFilters = () => {
    setType('All');
    setStatus('All');
    setWarehouse('All');
    setCategory('All');
  }
  
  const isFiltered = type !== 'All' || status !== 'All' || warehouse !== 'All' || category !== 'All';

  return (
    <div className="flex items-center gap-2 pt-4 flex-wrap">
      <Select value={type} onValueChange={setType}>
        <SelectTrigger className="w-full sm:w-auto sm:min-w-[160px]">
          <SelectValue placeholder="Document Type" />
        </SelectTrigger>
        <SelectContent>
          {documentTypes.map(t => <SelectItem key={t} value={t}>{t}</SelectItem>)}
        </SelectContent>
      </Select>
      <Select value={status} onValueChange={setStatus}>
        <SelectTrigger className="w-full sm:w-auto sm:min-w-[140px]">
          <SelectValue placeholder="Status" />
        </SelectTrigger>
        <SelectContent>
          {statuses.map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}
        </SelectContent>
      </Select>
      <Select value={warehouse} onValueChange={setWarehouse}>
        <SelectTrigger className="w-full sm:w-auto sm:min-w-[180px]">
          <SelectValue placeholder="Warehouse" />
        </SelectTrigger>
        <SelectContent>
          {warehouses.map(w => <SelectItem key={w} value={w}>{w}</SelectItem>)}
        </SelectContent>
      </Select>
       <Select value={category} onValueChange={setCategory}>
        <SelectTrigger className="w-full sm:w-auto sm:min-w-[180px]">
          <SelectValue placeholder="Product Category" />
        </SelectTrigger>
        <SelectContent>
          {productCategories.map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}
        </SelectContent>
      </Select>
      {isFiltered && (
        <Button variant="ghost" onClick={resetFilters} className="h-9">
            <X className="mr-2 h-4 w-4" />
            Reset
        </Button>
      )}
    </div>
  );
}
