"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Activity, Phone, List, MessageSquare, Shield, LayoutDashboard, WalletCards, Search, Bell, ChevronDown } from "lucide-react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <div className="min-h-screen bg-[#F9F9F8] text-slate-900 flex flex-col md:flex-row font-sans">
      {/* Sidebar Navigation */}
      <aside className="w-full md:w-64 border-b md:border-b-0 md:border-r border-slate-200/60 bg-white/70 backdrop-blur-xl flex flex-col justify-between py-5 md:py-8 px-4 md:px-6 md:fixed md:left-0 md:top-0 md:h-screen">
        <div>
          <Link href="/admin" className="flex items-center gap-2 mb-5 md:mb-12">
            <div className="w-8 h-8 bg-lime-400 rounded-full flex items-center justify-center text-slate-900 font-bold">
              <Shield size={16} />
            </div>
            <span className="font-semibold tracking-tight text-lg">Admin Ops</span>
          </Link>

          <p className="mb-2 hidden px-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400 md:block">Workspace</p>
          <nav className="flex flex-wrap gap-1 md:block md:space-y-1">
            <NavItem active={pathname === "/admin"} href="/admin" icon={<LayoutDashboard size={18} />} label="Overview" />
            <NavItem active={pathname.startsWith("/admin/numbers")} href="/admin/numbers" icon={<Phone size={18} />} label="Numbers" />
            <NavItem active={pathname.startsWith("/admin/rentals")} href="/admin/rentals" icon={<List size={18} />} label="Rentals" />
            <NavItem active={pathname.startsWith("/admin/messages")} href="/admin/messages" icon={<MessageSquare size={18} />} label="Messages" />
            <NavItem active={pathname.startsWith("/admin/provider-health")} href="/admin/provider-health" icon={<Activity size={18} />} label="Provider Health" />
            <NavItem active={pathname.startsWith("/admin/audit-logs")} href="/admin/audit-logs" icon={<Shield size={18} />} label="Audit Logs" />
            <NavItem active={pathname.startsWith("/admin/finance")} href="/admin/finance" icon={<WalletCards size={18} />} label="Finance" />
          </nav>
        </div>

        <div className="pb-4">
          <div className="px-4 py-3 bg-slate-100 rounded-2xl flex flex-col gap-1 text-sm md:block">
            <span className="font-medium text-slate-900">Admin User</span>
            <span className="text-slate-500 text-xs">ops@platform.internal</span>
          </div>
        </div>
      </aside>

      <main className="min-w-0 flex-1 ml-0 md:ml-64 overflow-y-auto p-4 md:p-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-6">
          <header className="flex min-h-11 items-center justify-between gap-3 border-b border-slate-200/70 pb-4">
            <div className="relative hidden max-w-sm flex-1 sm:block">
              <Search size={16} className="absolute left-3 top-3 text-slate-400" />
              <input aria-label="Search admin workspace" placeholder="Search workspace" className="min-h-11 w-full rounded-full border border-slate-200 bg-white pl-9 pr-4 text-sm outline-none transition focus:border-lime-400 focus:ring-2 focus:ring-lime-100" />
            </div>
            <div className="ml-auto flex items-center gap-2">
              <button aria-label="View notifications" className="relative grid size-11 place-items-center rounded-full border border-slate-200 bg-white text-slate-500 transition hover:text-slate-900"><Bell size={17} /><span className="absolute right-2.5 top-2.5 size-1.5 rounded-full bg-lime-500" /></button>
              <button className="flex min-h-11 items-center gap-2 rounded-full border border-slate-200 bg-white px-3 text-sm font-medium text-slate-700"><span className="grid size-7 place-items-center rounded-full bg-slate-900 text-xs text-white">OP</span><span className="hidden sm:block">Operations</span><ChevronDown size={15} className="text-slate-400" /></button>
            </div>
          </header>
          {children}
        </div>
      </main>
    </div>
  );
}

function NavItem({ href, icon, label, active }: { href: string; icon: React.ReactNode; label: string; active: boolean }) {
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={`flex min-h-11 items-center gap-3 rounded-full px-4 py-3 text-sm font-medium transition-colors ${active ? "bg-slate-900 text-white shadow-sm" : "text-slate-600 hover:bg-slate-100/80 hover:text-slate-900"}`}
    >
      {icon}
      {label}
    </Link>
  );
}
