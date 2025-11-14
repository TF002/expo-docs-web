"use client";

import { usePathname } from "next/navigation";
import { MainHead } from "@/templates/header";

export function ConditionalMainHead() {
    const pathname = usePathname();

    // Hide navigation if current path is /admin
    if (pathname?.startsWith("/admin")) {
        return null;
    }

    return <MainHead />;
}
