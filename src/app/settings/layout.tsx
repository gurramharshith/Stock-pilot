import AppLayout from "@/components/layout/app-layout";
import { ReactNode } from "react";

export default function SettingsLayout({ children }: { children: ReactNode }) {
    return <AppLayout>{children}</AppLayout>;
}
