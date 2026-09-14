import { Activity, AlertCircle } from "lucide-react";
import { getProviderHealth } from "../../../lib/safeline";

export const dynamic = "force-dynamic";

export default async function AdminProviderHealthPage() {
  let data: any = null;
  let error: string | null = null;
  try {
    data = await getProviderHealth();
  } catch (e: any) {
    error = e.message;
  }
  const status = data?.status || {};
  const balances = data?.balances || {};
  const otp = data?.otp || {};

  return (
    <div className="space-y-6">
      <div>
        <h1 className="mb-2 text-3xl font-semibold tracking-tight text-slate-900">Provider Health</h1>
        <p className="text-slate-500">Live provider configuration and balances from production.</p>
      </div>

      {error && <div className="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-800">{error}</div>}

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="rounded-3xl border border-slate-200/60 bg-white p-6">
          <span className="text-sm text-slate-500">OTP waiting</span>
          <div className="mt-2 text-3xl font-semibold">{otp.waiting ?? "—"}</div>
        </div>
        <div className="rounded-3xl border border-slate-200/60 bg-white p-6">
          <span className="text-sm text-slate-500">OTP received</span>
          <div className="mt-2 text-3xl font-semibold">{otp.received ?? "—"}</div>
        </div>
        <div className="rounded-3xl border border-slate-200/60 bg-white p-6">
          <span className="text-sm text-slate-500">OTP failed</span>
          <div className="mt-2 text-3xl font-semibold">{otp.failed ?? "—"}</div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {["pvapins", "fivesim", "safeline", "solana", "paystack"].map((name) => {
          const on = status[name];
          const bal = balances[name] || balances[name === "fivesim" ? "fivesim" : name];
          return (
            <div key={name} className="rounded-3xl border border-slate-200/60 bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100">
                    <Activity size={20} className="text-slate-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold capitalize text-slate-900">{name}</h3>
                    <p className="text-xs text-slate-500">Production provider</p>
                  </div>
                </div>
                <span className={`inline-flex items-center rounded-full px-3 py-1.5 text-xs font-medium ${
                  on ? "bg-lime-100 text-lime-800" : "bg-slate-100 text-slate-600"
                }`}>
                  <span className={`mr-1.5 h-1.5 w-1.5 rounded-full ${on ? "bg-lime-600" : "bg-slate-400"}`} />
                  {on ? "Configured" : "Off"}
                </span>
              </div>
              {bal && !bal.error && (
                <p className="text-sm text-slate-600">
                  Balance: <span className="font-mono font-medium">{bal.balance ?? "—"}</span>
                  {bal.currency ? ` ${bal.currency}` : ""}
                </p>
              )}
              {bal?.error && (
                <p className="flex items-center gap-2 text-sm text-amber-700">
                  <AlertCircle size={14} /> {bal.error}
                </p>
              )}
              {name === "solana" && status.merchantWallet && (
                <p className="mt-2 break-all font-mono text-xs text-slate-500">{status.merchantWallet}</p>
              )}
            </div>
          );
        })}
      </div>

      <div className="rounded-3xl border border-slate-200/60 bg-white p-6">
        <h2 className="mb-4 text-lg font-semibold">Recent webhooks</h2>
        <div className="space-y-2">
          {(data?.recentWebhooks || []).length === 0 && <p className="text-sm text-slate-500">No webhook events yet.</p>}
          {(data?.recentWebhooks || []).slice(0, 20).map((w: any) => (
            <div key={w.id} className="flex justify-between border-b border-slate-100 py-2 text-sm">
              <span className="font-mono text-xs">{w.event_type || w.event_id}</span>
              <span className="text-slate-500">{w.status} · {w.received_at}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
