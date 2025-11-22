import AppLayout from "@/components/layout/app-layout";
import { ReactNode } from "react";

export default function DeliveriesLayout({ children }: { children: ReactNode }) {
    return <AppLayout>{children}</AppLayout>;
}
