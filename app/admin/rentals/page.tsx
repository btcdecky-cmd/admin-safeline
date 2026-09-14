import { getAdminRentals } from "../../../lib/safeline";

export const dynamic = "force-dynamic";

export default async function AdminRentalsPage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string }>;
}) {
  const sp = await searchParams;
  let data: any = null;
  let error: string | null = null;
  try {
    data = await getAdminRentals(sp.status);
  } catch (e: any) {
    error = e.message;
  }
  const rentals = data?.rentals || [];
  const active = rentals.filter((r: any) => r.status === "active").length;

  return (
    <div className="flex flex-col gap-6 pb-10">
      <header>
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900">Rental Lifecycle</h1>
        <p className="mt-2 text-slate-500">Live rentals from production · {data?.total ?? 0} total</p>
      </header>

      {error && <div className="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-800">{error}</div>}

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="rounded-3xl border border-slate-200/70 bg-white p-6">
          <span className="text-sm font-medium text-slate-500">Active</span>
          <p className="mt-3 text-3xl font-semibold text-slate-900">{active}</p>
        </div>
        <div className="rounded-3xl border border-slate-200/70 bg-white p-6">
          <span className="text-sm font-medium text-slate-500">Total</span>
          <p className="mt-3 text-3xl font-semibold text-slate-900">{data?.total ?? 0}</p>
        </div>
        <div className="rounded-3xl border border-slate-200/70 bg-white p-6">
          <span className="text-sm font-medium text-slate-500">Filter</span>
          <form className="mt-3">
            <select name="status" defaultValue={sp.status || ""} className="w-full rounded-full border border-slate-200 px-3 py-2 text-sm">
              <option value="">All</option>
              <option value="active">Active</option>
              <option value="expired">Expired</option>
              <option value="released">Released</option>
            </select>
          </form>
        </div>
      </div>

      <div className="overflow-hidden rounded-3xl border border-slate-200/60 bg-white">
        <table className="w-full text-left text-sm">
          <thead className="border-b bg-[#F9F9F8] text-xs uppercase text-slate-500">
            <tr>
              <th className="p-4">ID</th>
              <th className="p-4">User</th>
              <th className="p-4">Number</th>
              <th className="p-4">Status</th>
              <th className="p-4">Provider</th>
              <th className="p-4">Expires</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {rentals.length === 0 && (
              <tr><td colSpan={6} className="p-8 text-center text-slate-500">No rentals yet.</td></tr>
            )}
            {rentals.map((r: any) => (
              <tr key={r.id}>
                <td className="p-4 font-mono text-xs">{r.id}</td>
                <td className="p-4">{r.userEmail || r.userId}</td>
                <td className="p-4 font-mono">{r.phoneNumber}</td>
                <td className="p-4">
                  <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                    r.status === "active" ? "bg-lime-100 text-lime-800" : "bg-slate-100 text-slate-700"
                  }`}>{r.status}</span>
                </td>
                <td className="p-4">{r.provider}</td>
                <td className="p-4 text-slate-600">{r.expiresAt ? new Date(r.expiresAt).toLocaleString() : "—"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
