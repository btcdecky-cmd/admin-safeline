import { getAuditLogs, formatUsd } from "../../../lib/safeline";

export const dynamic = "force-dynamic";

export default async function AdminAuditLogsPage() {
  let data: any = null;
  let error: string | null = null;
  try {
    data = await getAuditLogs();
  } catch (e: any) {
    error = e.message;
  }
  const audit = data?.audit || [];
  const ledger = data?.ledger || [];

  return (
    <div className="flex flex-col gap-6 pb-10">
      <header>
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900">Audit Logs</h1>
        <p className="mt-2 text-slate-500">Live security events and profit ledger from production.</p>
      </header>

      {error && <div className="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-800">{error}</div>}

      <section>
        <h2 className="mb-3 text-lg font-semibold">Actions</h2>
        <div className="overflow-hidden rounded-3xl border border-slate-200/60 bg-white">
          <table className="w-full text-left text-sm">
            <thead className="border-b bg-[#F9F9F8] text-xs uppercase text-slate-500">
              <tr>
                <th className="p-4">When</th>
                <th className="p-4">Actor</th>
                <th className="p-4">Action</th>
                <th className="p-4">Meta</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {audit.length === 0 && (
                <tr><td colSpan={4} className="p-8 text-center text-slate-500">No audit events yet.</td></tr>
              )}
              {audit.map((a: any) => (
                <tr key={a.id}>
                  <td className="p-4 text-slate-600">{a.created_at ? new Date(a.created_at).toLocaleString() : "—"}</td>
                  <td className="p-4 font-mono text-xs">{a.actor_id}</td>
                  <td className="p-4">{a.action}</td>
                  <td className="max-w-xs truncate p-4 font-mono text-xs text-slate-500">{JSON.stringify(a.meta || {})}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="mb-3 text-lg font-semibold">Profit ledger</h2>
        <div className="overflow-hidden rounded-3xl border border-slate-200/60 bg-white">
          <table className="w-full text-left text-sm">
            <thead className="border-b bg-[#F9F9F8] text-xs uppercase text-slate-500">
              <tr>
                <th className="p-4">When</th>
                <th className="p-4">Type</th>
                <th className="p-4">Amount</th>
                <th className="p-4">Note</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {ledger.length === 0 && (
                <tr><td colSpan={4} className="p-8 text-center text-slate-500">Ledger empty until payments confirm.</td></tr>
              )}
              {ledger.map((l: any) => (
                <tr key={l.id}>
                  <td className="p-4 text-slate-600">{l.created_at ? new Date(l.created_at).toLocaleString() : "—"}</td>
                  <td className="p-4">{String(l.type).replace(/_/g, " ")}</td>
                  <td className="p-4 tabular-nums">{formatUsd(l.amount_cents)}</td>
                  <td className="p-4 text-slate-500">{l.description || ""}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
