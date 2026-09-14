import Link from "next/link";
import { Activity, ArrowUpRight, Database } from "lucide-react";

export default function AdminDashboardPage() {
  return (
    <div className="flex flex-col gap-8 pb-10">
      <header><h1 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">Operations Overview</h1><p className="mt-2 text-slate-500">Live platform metrics and provider health.</p></header>
      <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard title="Active Rentals" /><StatCard title="Provider Availability" /><StatCard title="MRR" /><StatCard title="Webhook Errors (24h)" />
      </section>
      <section className="grid gap-6 lg:grid-cols-3">
        <EmptyPanel title="Recent Failed Purchases" description="Failed purchase events will appear here when connected data is available." href="/admin/finance" />
        <EmptyPanel title="Expiring Soon" description="Expiring rentals will appear here when connected data is available." href="/admin/rentals" />
        <div className="rounded-3xl bg-slate-900 p-6 text-white"><h2 className="flex items-center gap-2 text-lg font-semibold"><Activity className="text-lime-400" />Provider APIs</h2><p className="mt-4 text-sm leading-6 text-slate-300">Connect provider monitoring to display live availability, latency, and webhook status.</p><Link href="/admin/provider-health" className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-full border border-slate-700 px-4 text-sm font-medium hover:bg-slate-800">Configure monitoring <ArrowUpRight /></Link></div>
      </section>
    </div>
  );
}
function StatCard({ title }: { title: string }) { return <div className="rounded-3xl border border-slate-200/70 bg-white p-6 shadow-sm"><span className="text-sm font-medium text-slate-500">{title}</span><p className="mt-4 text-3xl font-semibold tracking-tight text-slate-400">—</p><p className="mt-2 text-xs text-slate-500">No connected data source</p></div>; }
function EmptyPanel({ title, description, href }: { title: string; description: string; href: string }) { return <div className="rounded-3xl border border-slate-200/70 bg-white p-6 shadow-sm"><h2 className="text-lg font-semibold text-slate-900">{title}</h2><div className="flex min-h-32 flex-col items-center justify-center text-center"><Database className="text-slate-300" /><p className="mt-3 text-sm text-slate-500">{description}</p><Link href={href} className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-full border border-slate-200 px-4 text-sm font-medium text-slate-700 hover:bg-slate-50">Open section <ArrowUpRight /></Link></div></div>; }

export const metadata = { title: "Operations Overview" };

