import { ArrowUpRight, Activity, AlertCircle } from "lucide-react";

export default async function AdminDashboardPage() {
  // In production, fetch securely via server actions or direct Supabase queries.
  // const stats = await getAdminStats();

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div>
        <h1 className="text-4xl font-semibold tracking-tight text-slate-900 mb-2">Operations Overview</h1>
        <p className="text-slate-500">Real-time platform metrics and provider health.</p>
      </div>

      {/* Top Level KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Active Rentals" value="1,248" trend="+12% this week" />
        <StatCard title="Provider Availability" value="99.9%" trend="Twilio & Telnyx Online" status="healthy" />
        <StatCard title="MRR" value="$14,520" trend="+5% this week" />
        <StatCard title="Webhook Errors (24h)" value="3" trend="Requires attention" status="warning" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-4">
        {/* Recent Failed Purchases */}
        <div className="lg:col-span-2 bg-white rounded-3xl border border-slate-200/60 p-6 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold">Recent Failed Purchases</h2>
            <button className="text-sm font-medium text-slate-500 hover:text-slate-900 flex items-center gap-2 transition-colors">
              View all <ArrowUpRight size={16} />
            </button>
          </div>

          <div className="space-y-4">
            {/* Example Row 1 */}
            <div className="flex items-center justify-between p-4 rounded-2xl bg-[#F9F9F8] border border-slate-100 hover:border-slate-200 transition-colors">
              <div>
                <p className="font-medium text-sm text-slate-900">User: usr_9a8b7c6d</p>
                <p className="text-xs text-slate-500 mt-0.5">Attempted: +44 7700 900077 (GB)</p>
              </div>
              <div className="text-right">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                  Provider Error
                </span>
                <p className="text-xs text-slate-500 mt-1">Number no longer available</p>
              </div>
            </div>

            {/* Example Row 2 */}
            <div className="flex items-center justify-between p-4 rounded-2xl bg-[#F9F9F8] border border-slate-100 hover:border-slate-200 transition-colors">
              <div>
                <p className="font-medium text-sm text-slate-900">User: usr_1f2e3d4c</p>
                <p className="text-xs text-slate-500 mt-0.5">Attempted: +1 555 019 2834 (US)</p>
              </div>
              <div className="text-right">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                  Payment Failed
                </span>
                <p className="text-xs text-slate-500 mt-1">Insufficient balance</p>
              </div>
            </div>

            {/* Example Row 3 */}
            <div className="flex items-center justify-between p-4 rounded-2xl bg-[#F9F9F8] border border-slate-100 hover:border-slate-200 transition-colors">
              <div>
                <p className="font-medium text-sm text-slate-900">User: usr_5e6f7g8h</p>
                <p className="text-xs text-slate-500 mt-0.5">Attempted: +33 7 12 34 56 78 (FR)</p>
              </div>
              <div className="text-right">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                  Provider Error
                </span>
                <p className="text-xs text-slate-500 mt-1">Rate limit exceeded</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Expiring Rentals */}
          <div className="bg-white rounded-3xl border border-slate-200/60 p-6 shadow-sm">
            <h2 className="text-lg font-semibold mb-4">Expiring Soon</h2>
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm pb-3 border-b border-slate-100">
                <span className="text-slate-600">+1 (555) 019-8472</span>
                <span className="text-slate-900 font-medium text-amber-600">in 2h</span>
              </div>
              <div className="flex justify-between items-center text-sm pb-3 border-b border-slate-100">
                <span className="text-slate-600">+44 7700 900111</span>
                <span className="text-slate-900 font-medium text-amber-600">in 5h</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-600">+1 (650) 253-0000</span>
                <span className="text-slate-900 font-medium text-amber-600">in 12h</span>
              </div>
            </div>
          </div>

          {/* Provider APIs Status */}
          <div className="bg-slate-900 rounded-3xl p-6 shadow-sm text-white">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Activity size={18} className="text-lime-400" />
              Provider APIs
            </h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center text-sm pb-3 border-b border-slate-700">
                <span className="text-slate-300">Twilio Status</span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-lime-400 shadow-[0_0_8px_rgba(163,230,53,0.8)] animate-pulse"></span>
                  <span className="font-medium">Online</span>
                </span>
              </div>
              <div className="flex justify-between items-center text-sm pb-3 border-b border-slate-700">
                <span className="text-slate-300">Telnyx Status</span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-lime-400 shadow-[0_0_8px_rgba(163,230,53,0.8)] animate-pulse"></span>
                  <span className="font-medium">Online</span>
                </span>
              </div>
              <div className="flex justify-between items-center text-sm pt-3 border-t border-slate-700">
                <span className="text-slate-300">Webhook Latency</span>
                <span className="font-mono text-lime-400 font-medium">124ms</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({
  title,
  value,
  trend,
  status = "normal",
}: {
  title: string;
  value: string;
  trend: string;
  status?: "normal" | "healthy" | "warning";
}) {
  return (
    <div className="bg-white rounded-3xl p-6 border border-slate-200/60 shadow-sm flex flex-col justify-between hover:border-slate-300 transition-colors">
      <span className="text-slate-500 font-medium text-sm">{title}</span>
      <div className="mt-4 mb-1 text-3xl font-semibold text-slate-900 tracking-tight">{value}</div>
      <div className="flex items-center gap-2">
        {status === "healthy" && (
          <span className="w-2 h-2 rounded-full bg-lime-400 shadow-[0_0_8px_rgba(163,230,53,0.8)] animate-pulse"></span>
        )}
        {status === "warning" && <AlertCircle size={14} className="text-red-500" />}
        <span className={`text-xs font-medium ${status === "warning" ? "text-red-500" : "text-slate-500"}`}>
          {trend}
        </span>
      </div>
    </div>
  );
}
