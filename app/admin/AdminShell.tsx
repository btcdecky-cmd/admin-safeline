"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Activity, Phone, List, MessageSquare, Shield, LayoutDashboard, WalletCards, Search, Bell, ChevronDown, LogOut } from "lucide-react";

const items = [
  ["/admin", "Overview", LayoutDashboard], ["/admin/numbers", "Numbers", Phone], ["/admin/rentals", "Rentals", List], ["/admin/messages", "Messages", MessageSquare], ["/admin/provider-health", "Provider Health", Activity], ["/admin/audit-logs", "Audit Logs", Shield], ["/admin/finance", "Finance", WalletCards],
] as const;

export default function AdminShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname(); const router = useRouter();
  async function logout() { await fetch("/api/admin/auth", { method: "DELETE" }); router.replace("/admin/login"); }
  return <div className="min-h-screen bg-[#f4f5f1] text-slate-950 md:flex">
    <aside className="border-b border-slate-200/70 bg-white md:fixed md:inset-y-0 md:flex md:w-72 md:flex-col md:border-b-0 md:border-r">
      <div className="flex items-center gap-3 px-5 py-5 md:px-7 md:py-8"><div className="grid size-10 place-items-center rounded-2xl bg-[#c8ff44]"><Shield size={19} /></div><div><p className="font-semibold tracking-tight">Safeline</p><p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">Admin ops</p></div></div>
      <nav className="flex gap-1 overflow-x-auto px-4 pb-4 md:flex-col md:px-5" aria-label="Admin navigation">{items.map(([href, label, Icon]) => <Link key={href} href={href} aria-current={pathname === href || (href !== "/admin" && pathname.startsWith(href)) ? "page" : undefined} className={`flex min-h-11 shrink-0 items-center gap-3 rounded-2xl px-4 text-sm font-medium transition ${pathname === href || (href !== "/admin" && pathname.startsWith(href)) ? "bg-slate-950 text-white" : "text-slate-500 hover:bg-slate-100 hover:text-slate-950"}`}><Icon size={17} />{label}</Link>)}</nav>
      <div className="mt-auto hidden p-5 md:block"><div className="rounded-2xl bg-slate-100 p-4"><p className="text-sm font-semibold">Operations</p><p className="mt-1 text-xs text-slate-500">ops@platform.internal</p><button onClick={logout} className="mt-4 flex items-center gap-2 text-xs font-medium text-slate-500 hover:text-slate-950"><LogOut size={14} /> Sign out</button></div></div>
    </aside>
    <main className="min-w-0 flex-1 md:ml-72"><div className="mx-auto max-w-[1480px] p-4 md:p-8 lg:p-10"><header className="mb-8 flex items-center justify-between gap-4 border-b border-slate-200/80 pb-5"><div className="relative hidden max-w-md flex-1 sm:block"><Search className="absolute left-4 top-3.5 text-slate-400" size={16} /><input aria-label="Search admin workspace" placeholder="Search workspace" className="min-h-11 w-full rounded-2xl border border-slate-200 bg-white pl-11 pr-4 text-sm outline-none focus:border-[#b1df26] focus:ring-4 focus:ring-[#c8ff44]/20" /></div><div className="ml-auto flex items-center gap-2"><button aria-label="View notifications" className="relative grid size-11 place-items-center rounded-2xl border border-slate-200 bg-white text-slate-500"><Bell size={17} /><span className="absolute right-2.5 top-2.5 size-1.5 rounded-full bg-[#9dcc1a]" /></button><button className="flex min-h-11 items-center gap-2 rounded-2xl border border-slate-200 bg-white px-3 text-sm font-medium"><span className="grid size-7 place-items-center rounded-xl bg-slate-950 text-xs text-white">OP</span><span className="hidden sm:block">Operations</span><ChevronDown size={15} className="text-slate-400" /></button></div></header>{children}</div></main>
  </div>;
}
