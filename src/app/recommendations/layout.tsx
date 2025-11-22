import AppLayout from "@/components/layout/app-layout";
import { ReactNode } from "react";

export default function RecommendationsLayout({ children }: { children: ReactNode }) {
    return <AppLayout>{children}</AppLayout>;
}
