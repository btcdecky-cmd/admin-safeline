"use client";

import { useMemo, useState } from "react";
import {
  ArrowDownToLine,
  ArrowUpRight,
  Check,
  CircleDollarSign,
  ExternalLink,
  LockKeyhole,
  ShieldCheck,
  WalletCards,
} from "lucide-react";

const transactions = [
  { order: "ord_8K4P2M", customer: "cus_9a8b7c", payment: 18, token: "USDC", signature: "5Vf...k8Q2", provider: 7.2, fees: 0.44, refund: 0, status: "Completed", time: "Oct 24, 14:32 UTC" },
  { order: "ord_7N2R9L", customer: "cus_1f2e3d", payment: 12, token: "SOL", signature: "3Bq...p71x", provider: 4.5, fees: 0.31, refund: 0, status: "Completed", time: "Oct 24, 13:48 UTC" },
  { order: "ord_6T8W1A", customer: "cus_5e6f7g", payment: 24, token: "USDC", signature: "4Qm...z9L0", provider: 9.1, fees: 0.52, refund: 6, status: "Partially refunded", time: "Oct 24, 12:10 UTC" },
  { order: "ord_4C1D5F", customer: "cus_3d4c5b", payment: 9, token: "USDC", signature: "2Jx...m4P8", provider: 3.6, fees: 0.28, refund: 0, status: "Completed", time: "Oct 24, 11:26 UTC" },
];

const money = (amount: number) => `$${amount.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

export default function FinancePage() {
  const [withdrawalOpen, setWithdrawalOpen] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const totals = useMemo(() => transactions.reduce((result, row) => {
    result.collected += row.payment;
    result.provider += row.provider;
    result.fees += row.fees;
    result.refunds += row.refund;
    return result;
  }, { collected: 0, provider: 0, fees: 0, refunds: 0 }), []);
  const grossProfit = totals.collected - totals.provider;
  const netEarnings = grossProfit - totals.fees - totals.refunds;

  return (
    <div className="flex flex-col gap-8 pb-10">
      <header className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-lime-100 px-3 py-1 text-xs font-semibold text-lime-800"><LockKeyhole size={13} /> Admin only</div>
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">Profit & earnings</h1>
          <p className="mt-2 max-w-xl text-sm text-slate-500">Accounting ledger for completed orders, provider spend, fees, refunds, and treasury liquidity.</p>
        </div>
        <button onClick={() => { setConfirmed(false); setWithdrawalOpen(true); }} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-slate-900 px-5 text-sm font-semibold text-white transition hover:bg-slate-800"><ArrowDownToLine size={16} /> Withdraw to treasury</button>
      </header>

      <section className="grid grid-cols-2 gap-3 lg:grid-cols-5">
        <Metric label="Collected revenue" value={money(totals.collected)} detail="Customer payments" />
        <Metric label="Provider expenses" value={money(totals.provider)} detail="Telephony purchases" />
        <Metric label="Gross profit" value={money(grossProfit)} detail="Before fees & refunds" positive />
        <Metric label="Refunds" value={money(totals.refunds)} detail="Customer returns" />
        <Metric label="Net earnings" value={money(netEarnings)} detail="Accounting profit" positive accent />
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.15fr_.85fr]">
        <div className="rounded-3xl border border-slate-200/70 bg-white p-5 shadow-sm md:p-6">
          <div className="flex items-start justify-between gap-4">
            <div><h2 className="text-lg font-semibold text-slate-900">Treasury controls</h2><p className="mt-1 text-sm text-slate-500">Balances are separate from accounting profit.</p></div>
            <WalletCards className="text-lime-600" size={22} />
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <Balance label="Merchant wallet" value="12,846.28 USDC" sub="Customer payment destination" />
            <Balance label="Treasury available" value="8,492.17 USDC" sub="Eligible for authorized withdrawal" accent />
          </div>
          <div className="mt-5 rounded-2xl bg-slate-50 p-4 text-sm text-slate-600"><div className="flex items-center gap-2 font-medium text-slate-900"><ShieldCheck size={16} className="text-lime-600" /> Manual authorization required</div><p className="mt-1 leading-6">No funds move automatically. Every transfer must name the destination, show network fees, and be explicitly confirmed by an administrator.</p></div>
        </div>
        <div className="rounded-3xl bg-slate-900 p-5 text-white shadow-sm md:p-6">
          <div className="flex items-start justify-between"><div><p className="text-sm text-slate-400">Merchant wallet</p><p className="mt-2 break-all font-mono text-sm">7xKp...4QmZ</p></div><CircleDollarSign className="text-lime-400" size={22} /></div>
          <div className="mt-8 flex flex-col gap-4 text-sm"><div className="flex justify-between gap-4"><span className="text-slate-400">Network</span><span>Solana mainnet</span></div><div className="flex justify-between gap-4"><span className="text-slate-400">Treasury wallet</span><span className="font-mono">9fTa...8LmP</span></div><div className="flex justify-between gap-4 border-t border-slate-700 pt-4"><span className="text-slate-400">Last settlement</span><span>Oct 23, 18:04 UTC</span></div></div>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200/70 bg-white shadow-sm">
        <div className="flex flex-col gap-3 border-b border-slate-100 p-5 sm:flex-row sm:items-center sm:justify-between md:p-6"><div><h2 className="text-lg font-semibold text-slate-900">Earnings ledger</h2><p className="mt-1 text-sm text-slate-500">Every completed order is reconciled against on-chain settlement.</p></div><button className="inline-flex min-h-10 items-center gap-2 self-start rounded-full border border-slate-200 px-4 text-sm font-medium text-slate-600 hover:bg-slate-50">Export CSV <ArrowUpRight size={15} /></button></div>
        <div className="overflow-x-auto"><table className="w-full min-w-[980px] text-left text-sm"><thead className="bg-slate-50 text-xs font-medium text-slate-500"><tr>{["Order / customer", "Payment", "Solana signature", "Provider cost", "Fees", "Gross profit", "Refund", "Net earnings", "Status"].map((heading) => <th key={heading} className="px-5 py-3 font-medium">{heading}</th>)}</tr></thead><tbody className="divide-y divide-slate-100">{transactions.map((row) => { const profit = row.payment - row.provider; const net = profit - row.fees - row.refund; return <tr key={row.order} className="hover:bg-slate-50/70"><td className="px-5 py-4"><p className="font-mono text-xs font-semibold text-slate-900">{row.order}</p><p className="mt-1 font-mono text-xs text-slate-500">{row.customer}</p><p className="mt-1 text-xs text-slate-400">{row.time}</p></td><td className="px-5 py-4 font-medium text-slate-900">{money(row.payment)} <span className="text-xs text-slate-500">{row.token}</span></td><td className="px-5 py-4"><button className="inline-flex items-center gap-1 font-mono text-xs text-slate-600 hover:text-slate-900">{row.signature}<ExternalLink size={13} /></button></td><td className="px-5 py-4 text-slate-600">{money(row.provider)}</td><td className="px-5 py-4 text-slate-600">{money(row.fees)}</td><td className="px-5 py-4 font-semibold text-lime-700">{money(profit)}</td><td className="px-5 py-4 text-slate-600">{money(row.refund)}</td><td className="px-5 py-4 font-semibold text-slate-900">{money(net)}</td><td className="px-5 py-4"><span className={`inline-flex whitespace-nowrap rounded-full px-2.5 py-1 text-xs font-medium ${row.status === "Completed" ? "bg-lime-100 text-lime-800" : "bg-amber-100 text-amber-800"}`}>{row.status}</span></td></tr>})}</tbody></table></div>
      </section>

      {withdrawalOpen && <div className="fixed inset-0 z-50 flex items-end justify-center bg-slate-950/40 p-0 sm:items-center sm:p-4" role="presentation" onClick={() => setWithdrawalOpen(false)}><div role="dialog" aria-modal="true" aria-labelledby="withdraw-title" className="w-full max-w-md rounded-t-3xl bg-white p-6 shadow-2xl sm:rounded-3xl" onClick={(event) => event.stopPropagation()}><div className="flex items-start justify-between"><div><h2 id="withdraw-title" className="text-xl font-semibold text-slate-900">Authorize treasury transfer</h2><p className="mt-1 text-sm text-slate-500">Review every detail before signing.</p></div><button aria-label="Close withdrawal dialog" onClick={() => setWithdrawalOpen(false)} className="rounded-full p-2 text-slate-400 hover:bg-slate-100">×</button></div><div className="mt-6 flex flex-col gap-3 rounded-2xl bg-slate-50 p-4 text-sm"><Detail label="Destination" value="9fTa...8LmP" mono /><Detail label="Amount" value="5,000.00 USDC" /><Detail label="Network fee" value="0.000005 SOL" /><Detail label="Source" value="Treasury available" /></div><label className="mt-5 flex items-start gap-3 text-sm text-slate-600"><input type="checkbox" checked={confirmed} onChange={(event) => setConfirmed(event.target.checked)} className="mt-0.5 size-4 accent-lime-500" />I confirm the destination and amount are correct. This action will be logged and requires the business wallet signer.</label><button disabled={!confirmed} onClick={() => setWithdrawalOpen(false)} className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-slate-900 px-5 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-40">{confirmed ? <Check size={16} /> : <LockKeyhole size={16} />} {confirmed ? "Confirm authorized transfer" : "Confirm details to continue"}</button></div></div>}
    </div>
  );
}

function Metric({ label, value, detail, positive, accent }: { label: string; value: string; detail: string; positive?: boolean; accent?: boolean }) { return <div className={`rounded-2xl border p-4 ${accent ? "border-lime-200 bg-lime-50" : "border-slate-200/70 bg-white"}`}><p className="text-xs font-medium text-slate-500">{label}</p><p className={`mt-3 text-xl font-semibold tracking-tight ${positive ? "text-lime-700" : "text-slate-900"}`}>{value}</p><p className="mt-1 text-xs text-slate-500">{detail}</p></div>; }
function Balance({ label, value, sub, accent }: { label: string; value: string; sub: string; accent?: boolean }) { return <div className={`rounded-2xl p-4 ${accent ? "bg-lime-50" : "bg-slate-50"}`}><p className="text-xs font-medium text-slate-500">{label}</p><p className="mt-2 text-lg font-semibold text-slate-900">{value}</p><p className="mt-1 text-xs text-slate-500">{sub}</p></div>; }
function Detail({ label, value, mono }: { label: string; value: string; mono?: boolean }) { return <div className="flex justify-between gap-4"><span className="text-slate-500">{label}</span><span className={`text-right font-medium text-slate-900 ${mono ? "font-mono" : ""}`}>{value}</span></div>; }
