'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Box,
  Home,
  LogOut,
  Package,
  Rocket,
  Settings,
  Truck,
  User,
  Warehouse,
  ArrowRightLeft,
  Wrench,
  History,
  ChevronDown,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { cn } from '@/lib/utils';
import { useState } from 'react';

export default function AppSidebar() {
  const pathname = usePathname();
  const isOperationsActive = ['/receipts', '/deliveries', '/transfers', '/adjustments'].some(p => pathname.startsWith(p));
  const [isOperationsOpen, setIsOperationsOpen] = useState(isOperationsActive);

  return (
    <div className="hidden border-r bg-card md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link href="/dashboard" className="flex items-center gap-2 font-semibold">
            <Rocket className="h-6 w-6 text-primary" />
            <span className="">StockPilot</span>
          </Link>
        </div>
        <div className="flex-1 overflow-auto py-2">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            <Link
              href="/dashboard"
              className={cn(
                'flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary',
                pathname === '/dashboard' && 'bg-muted text-primary'
              )}
            >
              <Home className="h-4 w-4" />
              Dashboard
            </Link>
            <Link
              href="/products"
              className={cn(
                'flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary',
                pathname.startsWith('/products') && 'bg-muted text-primary'
              )}
            >
              <Package className="h-4 w-4" />
              Products
            </Link>

            <Collapsible open={isOperationsOpen} onOpenChange={setIsOperationsOpen} className="grid items-start">
              <CollapsibleTrigger asChild>
                <div
                  className={cn(
                    'flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary cursor-pointer',
                    isOperationsActive && 'text-primary'
                  )}
                >
                  <Box className="h-4 w-4" />
                  Operations
                  <ChevronDown className={cn('ml-auto h-4 w-4 transition-transform', isOperationsOpen && 'rotate-180')} />
                </div>
              </CollapsibleTrigger>
              <CollapsibleContent>
                  <div className="grid auto-rows-auto items-start pl-7 pt-2 gap-1">
                    <Link href="/receipts" className={cn('flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary', pathname.startsWith('/receipts') && 'bg-muted text-primary')}>Receipts</Link>
                    <Link href="/deliveries" className={cn('flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary', pathname.startsWith('/deliveries') && 'bg-muted text-primary')}>Delivery Orders</Link>
                    <Link href="/transfers" className={cn('flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary', pathname.startsWith('/transfers') && 'bg-muted text-primary')}>Internal Transfers</Link>
                    <Link href="/adjustments" className={cn('flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary', pathname.startsWith('/adjustments') && 'bg-muted text-primary')}>Adjustments</Link>
                </div>
              </CollapsibleContent>
            </Collapsible>

            <Link
              href="/history"
              className={cn(
                'flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary',
                pathname === '/history' && 'bg-muted text-primary'
              )}
            >
              <History className="h-4 w-4" />
              Move History
            </Link>
             <Link
              href="/settings/warehouse"
              className={cn(
                'flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary',
                pathname.startsWith('/settings') && 'bg-muted text-primary'
              )}
            >
              <Settings className="h-4 w-4" />
              Settings
            </Link>
          </nav>
        </div>
        <div className="mt-auto p-4">
           <div className="flex flex-col space-y-2">
                <Button variant="ghost" className="w-full justify-start gap-2" asChild>
                    <Link href="/profile">
                        <User className="h-4 w-4" />
                        My Profile
                    </Link>
                </Button>
                <Button variant="ghost" className="w-full justify-start gap-2 text-destructive hover:text-destructive" asChild>
                    <Link href="/login">
                        <LogOut className="h-4 w-4" />
                        Logout
                    </Link>
                </Button>
            </div>
        </div>
      </div>
    </div>
  );
}
