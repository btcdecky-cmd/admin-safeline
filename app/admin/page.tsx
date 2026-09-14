import { Activity, AlertCircle, ArrowUpRight } from "lucide-react";
import { getOpsOverview, formatUsd } from "../../lib/safeline";

export const dynamic = "force-dynamic";

export default async function AdminDashboardPage() {
  let data: any = null;
  let error: string | null = null;
  try {
    data = await getOpsOverview();
  } catch (e: any) {
    error = e.message || "Failed to reach Safeline API";
  }

  const k = data?.kpis || {};

  return (
    <div className="space-y-8">
      <div>
        <h1 className="mb-2 text-4xl font-semibold tracking-tight text-slate-900">Operations Overview</h1>
        <p className="text-slate-500">Live platform metrics from production Safeline.</p>
      </div>

      {error && (
        <div className="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-800">
          <strong>API offline:</strong> {error}. Set <code className="mx-1 rounded bg-red-100 px-1">SAFELINE_API_URL</code> and{" "}
          <code className="mx-1 rounded bg-red-100 px-1">SAFELINE_ADMIN_TOKEN</code> in .env.local.
        </div>
      )}

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard title="Active Rentals" value={String(k.activeRentals ?? "—")} trend={`${k.availableNumbers ?? 0} numbers available`} />
        <StatCard
          title="Provider status"
          value={data?.providers ? Object.entries(data.providers).filter(([, v]) => v).map(([n]) => n).join(", ") || "none" : "—"}
          trend="Configured providers"
          status={data?.providers?.safeline ? "healthy" : "warning"}
        />
        <StatCard title="MRR (est.)" value={formatUsd(k.mrrCents)} trend={`${k.users ?? 0} users`} />
        <StatCard
          title="OTP waiting"
          value={String(k.otpWaiting ?? 0)}
          trend={`Treasury ${formatUsd(k.treasuryAvailableCents)}`}
          status={k.otpWaiting > 10 ? "warning" : "normal"}
        />
      </div>

      <div className="grid grid-cols-1 gap-6 pt-4 lg:grid-cols-3">
        <div className="rounded-3xl border border-slate-200/60 bg-white p-6 shadow-sm lg:col-span-2">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-lg font-semibold">Failed / expired payments</h2>
            <span className="text-sm text-slate-500">{(data?.failedPurchases || []).length} recent</span>
          </div>
          <div className="space-y-3">
            {(data?.failedPurchases || []).length === 0 && (
              <p className="text-sm text-slate-500">No failed purchases recorded.</p>
            )}
            {(data?.failedPurchases || []).map((p: any) => (
              <div key={p.id} className="flex items-center justify-between rounded-2xl border border-slate-100 bg-[#F9F9F8] p-4">
                <div>
                  <p className="text-sm font-medium text-slate-900">User: {p.userId}</p>
                  <p className="mt-0.5 text-xs text-slate-500">{p.provider} · {p.createdAt}</p>
                </div>
                <div className="text-right">
                  <span className="inline-flex rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800">{p.status}</span>
                  <p className="mt-1 text-xs text-slate-500">{formatUsd(p.amountCents)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-slate-200/60 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-lg font-semibold">Expiring soon (&lt;24h)</h2>
            <div className="space-y-3">
              {(data?.expiringSoon || []).length === 0 && <p className="text-sm text-slate-500">None</p>}
              {(data?.expiringSoon || []).map((r: any) => (
                <div key={r.id} className="flex justify-between border-b border-slate-100 pb-3 text-sm last:border-0">
                  <span className="font-mono text-slate-600">{r.phoneNumber}</span>
                  <span className="font-medium text-amber-600">{r.hoursLeft}h</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-slate-900 p-6 text-white shadow-sm">
            <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold">
              <Activity size={18} className="text-lime-400" />
              Providers
            </h2>
            <div className="space-y-3 text-sm">
              {data?.providers &&
                Object.entries(data.providers).map(([name, on]) => (
                  <div key={name} className="flex justify-between border-b border-slate-700 pb-2">
                    <span className="text-slate-300">{name}</span>
                    <span className="flex items-center gap-1.5">
                      <span className={`h-2 w-2 rounded-full ${on ? "bg-lime-400" : "bg-slate-500"}`} />
                      {on ? "Online" : "Off"}
                    </span>
                  </div>
                ))}
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
    <div className="flex flex-col justify-between rounded-3xl border border-slate-200/60 bg-white p-6 shadow-sm">
      <span className="text-sm font-medium text-slate-500">{title}</span>
      <div className="mb-1 mt-4 text-2xl font-semibold tracking-tight text-slate-900">{value}</div>
      <div className="flex items-center gap-2">
        {status === "healthy" && <span className="h-2 w-2 animate-pulse rounded-full bg-lime-400" />}
        {status === "warning" && <AlertCircle size={14} className="text-red-500" />}
        <span className={`text-xs font-medium ${status === "warning" ? "text-red-500" : "text-slate-500"}`}>{trend}</span>
      </div>
    </div>
  );
}
