import AppLayout from "@/components/layout/app-layout";
import { ReactNode } from "react";

export default function HistoryLayout({ children }: { children: ReactNode }) {
    return <AppLayout>{children}</AppLayout>;
}
