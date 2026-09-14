import { getAdminMessages } from "../../../lib/safeline";

export const dynamic = "force-dynamic";

export default async function AdminMessagesPage() {
  let data: any = null;
  let error: string | null = null;
  try {
    data = await getAdminMessages();
  } catch (e: any) {
    error = e.message;
  }
  const messages = data?.messages || [];

  return (
    <div className="flex flex-col gap-6 pb-10">
      <header>
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900">Messages</h1>
        <p className="mt-2 text-slate-500">Inbound SMS from production · {data?.total ?? 0} shown</p>
      </header>

      {error && <div className="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-800">{error}</div>}

      <div className="overflow-hidden rounded-3xl border border-slate-200/60 bg-white">
        <table className="w-full text-left text-sm">
          <thead className="border-b bg-[#F9F9F8] text-xs uppercase text-slate-500">
            <tr>
              <th className="p-4">When</th>
              <th className="p-4">From</th>
              <th className="p-4">To</th>
              <th className="p-4">Body</th>
              <th className="p-4">Provider</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {messages.length === 0 && (
              <tr><td colSpan={5} className="p-8 text-center text-slate-500">No messages yet.</td></tr>
            )}
            {messages.map((m: any) => (
              <tr key={m.id}>
                <td className="p-4 text-slate-600">{m.receivedAt ? new Date(m.receivedAt).toLocaleString() : "—"}</td>
                <td className="p-4 font-mono text-xs">{m.sender}</td>
                <td className="p-4 font-mono text-xs">{m.recipient}</td>
                <td className="max-w-xs truncate p-4">{m.body}</td>
                <td className="p-4">{m.provider}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
