'use client';

import { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { operations as allOperations } from '@/lib/data';
import type { Operation } from '@/lib/types';
import OperationsFilters from './operations-filters';

type StatusVariant = "default" | "secondary" | "destructive" | "outline";

const getStatusVariant = (status: Operation['status']): StatusVariant => {
  switch (status) {
    case 'Done':
      return 'default';
    case 'Ready':
      return 'secondary';
    case 'Canceled':
      return 'destructive';
    case 'Draft':
    case 'Waiting':
    default:
      return 'outline';
  }
};

export default function OperationsTable() {
  const [filteredOperations, setFilteredOperations] = useState<Operation[]>(allOperations);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Operations Overview</CardTitle>
        <CardDescription>A summary of your recent inventory movements.</CardDescription>
        <OperationsFilters allOperations={allOperations} setFilteredOperations={setFilteredOperations} />
      </CardHeader>
      <CardContent>
        <div className="border rounded-md">
            <Table>
            <TableHeader>
                <TableRow>
                <TableHead>Reference</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Product</TableHead>
                <TableHead className="text-right">Quantity</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {filteredOperations.length > 0 ? filteredOperations.map((op) => (
                <TableRow key={op.id}>
                    <TableCell className="font-medium">{op.reference}</TableCell>
                    <TableCell>{op.type}</TableCell>
                    <TableCell>{op.product}</TableCell>
                    <TableCell className="text-right">{op.quantity}</TableCell>
                    <TableCell>
                    <Badge variant={getStatusVariant(op.status)}>{op.status}</Badge>
                    </TableCell>
                    <TableCell>{op.scheduledDate}</TableCell>
                </TableRow>
                )) : (
                    <TableRow>
                        <TableCell colSpan={6} className="h-24 text-center">
                            No operations found.
                        </TableCell>
                    </TableRow>
                )}
            </TableBody>
            </Table>
        </div>
      </CardContent>
    </Card>
  );
}
