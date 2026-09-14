import Link from "next/link";
import { Activity, Phone, List, MessageSquare, Shield, LayoutDashboard, WalletCards } from "lucide-react";

export const metadata = {
  title: "Admin Operations",
  description: "Platform operations and security dashboard",
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
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

          <nav className="flex flex-wrap gap-1 md:block md:space-y-1">
            <NavItem href="/admin" icon={<LayoutDashboard size={18} />} label="Overview" />
            <NavItem href="/admin/numbers" icon={<Phone size={18} />} label="Numbers" />
            <NavItem href="/admin/rentals" icon={<List size={18} />} label="Rentals" />
            <NavItem href="/admin/messages" icon={<MessageSquare size={18} />} label="Messages" />
            <NavItem href="/admin/provider-health" icon={<Activity size={18} />} label="Provider Health" />
            <NavItem href="/admin/audit-logs" icon={<Shield size={18} />} label="Audit Logs" />
            <NavItem href="/admin/finance" icon={<WalletCards size={18} />} label="Finance" />
          </nav>
        </div>

        <div className="pb-4">
          <div className="px-4 py-3 bg-slate-100 rounded-2xl flex flex-col gap-1 text-sm md:block">
            <span className="font-medium text-slate-900">Admin User</span>
            <span className="text-slate-500 text-xs">ops@platform.internal</span>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 ml-0 md:ml-64 overflow-y-auto p-4 md:p-8">
        <div className="max-w-6xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}

function NavItem({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <Link
      href={href}
      className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:text-slate-900 hover:bg-slate-100/80 rounded-full transition-colors font-medium text-sm"
    >
      {icon}
      {label}
    </Link>
  );
}
