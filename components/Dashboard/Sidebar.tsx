'use client'

import { LayoutDashboardIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from 'next/navigation';

export default function Sidebar() {
    const currentRoute = usePathname();
    return (
        <div className="py-16 border h-full">
            <div className="space-y-4 py-4">
                <div className="px-3 py-2">
                    <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
                        Overview
                    </h2>
                    <div className="space-y-2 grid items-start gap-2">
                        <Link href={'/dashboard'} className={`group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground ${currentRoute === "/dashboard" ? "bg-blue-300" : "bg-transparent"}`}>
                            <LayoutDashboardIcon className="mr-2 h-4 w-4" />
                            <span>Dashboard</span>
                        </Link>
                        <Link href={'/dashboard/insight'} className={`group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground ${currentRoute === "/dashboard/insight" ? "bg-blue-300" : "bg-transparent"}`}>
                            <LayoutDashboardIcon className="mr-2 h-4 w-4" />
                            <span>Insight</span>
                        </Link>
                        <Link href={'/dashboard'} className={`group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground ${currentRoute === "/dashboard" ? "bg-blue-300" : "bg-transparent"}`}>
                            <LayoutDashboardIcon className="mr-2 h-4 w-4" />
                            <span>Dashboard</span>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    );
}