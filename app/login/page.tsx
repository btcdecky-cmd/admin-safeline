"use client";

import { FormEvent, useState } from "react";
import { ShieldCheck, ArrowRight, LockKeyhole } from "lucide-react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();
  const [token, setToken] = useState("");
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPending(true);
    setError("");
    const response = await fetch("/api/admin/auth", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ token }) });
    if (!response.ok) setError("That token is not valid. Check your environment configuration.");
    else router.replace("/admin");
    setPending(false);
  }

  return (
    <main className="grid min-h-screen place-items-center bg-[#10120f] px-6 text-white">
      <div className="w-full max-w-md">
        <div className="mb-8 flex items-center gap-3">
          <div className="grid size-11 place-items-center rounded-2xl bg-[#c8ff44] text-[#10120f]"><ShieldCheck /></div>
          <div><p className="text-lg font-semibold tracking-tight">Safeline</p><p className="text-xs uppercase tracking-[0.2em] text-white/45">Operations control</p></div>
        </div>
        <section className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-7 shadow-2xl shadow-black/30 backdrop-blur">
          <p className="mb-3 text-sm font-medium text-[#c8ff44]">Restricted workspace</p>
          <h1 className="text-3xl font-semibold tracking-tight">Sign in to admin ops</h1>
          <p className="mt-3 text-sm leading-6 text-white/55">Use the admin access token to manage numbers, rentals, providers, and financial operations.</p>
          <form onSubmit={submit} className="mt-8 flex flex-col gap-4">
            <label className="flex flex-col gap-2 text-sm font-medium"><span>Admin token</span><div className="relative"><LockKeyhole className="absolute left-4 top-3.5 text-white/35" size={17} /><input autoFocus required type="password" value={token} onChange={(event) => setToken(event.target.value)} placeholder="Enter your access token" className="min-h-12 w-full rounded-2xl border border-white/10 bg-black/20 pl-11 pr-4 text-sm outline-none transition placeholder:text-white/30 focus:border-[#c8ff44]" /></div></label>
            {error && <p role="alert" className="text-sm text-red-300">{error}</p>}
            <button disabled={pending} className="flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-[#c8ff44] px-5 text-sm font-semibold text-[#10120f] transition hover:bg-[#d8ff77] disabled:opacity-60">{pending ? "Verifying…" : "Enter workspace"}<ArrowRight size={17} /></button>
          </form>
        </section>
        <p className="mt-6 text-center text-xs text-white/30">Safeline internal tools · Token access only</p>
      </div>
    </main>
  );
}
