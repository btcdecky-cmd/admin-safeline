import { getAdminNumbers } from "../../../lib/safeline";

export const dynamic = "force-dynamic";

export default async function AdminNumbersPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; status?: string; country?: string }>;
}) {
  const sp = await searchParams;
  let data: any = null;
  let error: string | null = null;
  try {
    data = await getAdminNumbers({ q: sp.q, status: sp.status, country: sp.country });
  } catch (e: any) {
    error = e.message;
  }
  const numbers = data?.numbers || [];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="mb-2 text-3xl font-semibold tracking-tight text-slate-900">Number Inventory</h1>
        <p className="text-slate-500">Live inventory from production · {data?.total ?? 0} numbers</p>
      </div>

      {error && (
        <div className="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-800">{error}</div>
      )}

      <form className="flex flex-wrap gap-3">
        <input name="q" defaultValue={sp.q} placeholder="Search number or country" className="min-h-11 flex-1 rounded-full border border-slate-200 bg-white px-4 text-sm" />
        <select name="status" defaultValue={sp.status || ""} className="min-h-11 rounded-full border border-slate-200 bg-white px-4 text-sm">
          <option value="">All statuses</option>
          <option value="available">Available</option>
          <option value="rented">Rented</option>
          <option value="reserved">Reserved</option>
        </select>
        <button type="submit" className="min-h-11 rounded-full bg-slate-900 px-5 text-sm font-medium text-white">Filter</button>
      </form>

      <div className="overflow-hidden rounded-3xl border border-slate-200/60 bg-white shadow-sm">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-slate-200/60 bg-[#F9F9F8]">
              <th className="p-4 font-semibold text-slate-600">Phone</th>
              <th className="p-4 font-semibold text-slate-600">Country</th>
              <th className="p-4 font-semibold text-slate-600">Status</th>
              <th className="p-4 font-semibold text-slate-600">Provider</th>
              <th className="p-4 font-semibold text-slate-600">Rental</th>
              <th className="p-4 font-semibold text-slate-600">Expires</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {numbers.length === 0 && (
              <tr>
                <td colSpan={6} className="p-8 text-center text-slate-500">No numbers in inventory yet.</td>
              </tr>
            )}
            {numbers.map((n: any) => (
              <tr key={n.id} className="hover:bg-[#F9F9F8]/50">
                <td className="p-4 font-mono font-medium text-slate-900">{n.phoneNumber}</td>
                <td className="p-4 text-slate-600">{n.country} ({n.countryCode})</td>
                <td className="p-4">
                  <span className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${
                    n.status === "available" ? "bg-lime-100 text-lime-800" :
                    n.status === "rented" ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-700"
                  }`}>{n.status}</span>
                </td>
                <td className="p-4 text-slate-600">{n.provider}</td>
                <td className="p-4 font-mono text-xs text-slate-500">{n.rentalId || "—"}</td>
                <td className="p-4 text-slate-600">{n.expiresAt ? new Date(n.expiresAt).toLocaleString() : "—"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
