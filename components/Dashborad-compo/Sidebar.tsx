"use client";

import {
  BarChartBig,
  Home,
  Landmark,
  LayoutDashboardIcon,
  Settings,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
            <Link
              href={"/dashboard"}
              className={`group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-blue-300 hover:text-accent-foreground duration-500 ${
                currentRoute === "/dashboard" ? "bg-blue-300" : "bg-transparent"
              }`}
            >
              <LayoutDashboardIcon className="mr-2 h-4 w-4" />
              <span>Dashboard</span>
            </Link>
            <Link
              href={"/dashboard/insight"}
              className={`group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-blue-300 hover:text-accent-foreground duration-500 ${
                currentRoute === "/dashboard/insight"
                  ? "bg-blue-300"
                  : "bg-transparent"
              }`}
            >
              <BarChartBig className="mr-2 h-4 w-4" />
              <span>Insight</span>
            </Link>
            <Link
              href={"/dashboard/transaction"}
              className={`group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-blue-300  hover:text-accent-foreground duration-500 ${
                currentRoute === "/dashboard/transaction"
                  ? "bg-blue-300"
                  : "bg-transparent"
              }`}
            >
              <Landmark className="mr-2 h-4 w-4" />
              <span>Transaction</span>
            </Link>
            <Link
              href={"/dashboard/account"}
              className={`group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-blue-300  hover:text-accent-foreground duration-500 ${
                currentRoute === "/dashboard/account"
                  ? "bg-blue-300"
                  : "bg-transparent"
              }`}
            >
              <LayoutDashboardIcon className="mr-2 h-4 w-4" />
              <span>Account</span>
            </Link>
            <Link
              href={"/dashboard/setting"}
              className={`group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-blue-300  hover:text-accent-foreground duration-500 ${
                currentRoute === "/dashboard/setting"
                  ? "bg-blue-300"
                  : "bg-transparent"
              }`}
            >
              <Settings className="mr-2 h-4 w-4" />
              <span>Setting</span>
            </Link>
            <Link
              href={"/"}
              className={`group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-blue-300  hover:text-accent-foreground duration-500 ${
                currentRoute === "/" ? "bg-blue-300" : "bg-transparent"
              }`}
            >
              <Home className="mr-2 h-4 w-4" />
              <span>Home</span>
            </Link>
            <Link
              href={"/dashboard"}
              className={`group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-blue-300  hover:text-accent-foreground duration-500 ${
                currentRoute === "/switch-account"
                  ? "bg-blue-300"
                  : "bg-transparent"
              }`}
            >
              <LayoutDashboardIcon className="mr-2 h-4 w-4" />
              <span>Switch Account</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
