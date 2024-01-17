"use client";

import Sidebar from "../../components/Dashborad-compo/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="w-1/6 h-full hidden md:block">
        <Sidebar />
      </div>
      <main className="flex-1 overflow-x-hidden overflow-y-auto ">
        {children}
      </main>
    </div>
  );
}
