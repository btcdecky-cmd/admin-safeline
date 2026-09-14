/**
 * Production Safeline API client for admin-safeline.
 * Set SAFELINE_API_URL + SAFELINE_ADMIN_TOKEN (or login for Bearer).
 */

const API = process.env.SAFELINE_API_URL || process.env.NEXT_PUBLIC_SAFELINE_API_URL || "http://127.0.0.1:3001";

export async function safelineFetch<T = unknown>(
  path: string,
  opts: RequestInit & { token?: string } = {},
): Promise<T> {
  const token = opts.token || process.env.SAFELINE_ADMIN_TOKEN || "";
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    ...(opts.headers as Record<string, string>),
  };
  if (token) headers.Authorization = `Bearer ${token}`;

  const res = await fetch(`${API}${path}`, {
    ...opts,
    headers,
    cache: "no-store",
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error((data as any).error || res.statusText || "Safeline API error");
  }
  return data as T;
}

export async function getOpsOverview(token?: string) {
  return safelineFetch<any>("/api/admin/ops", { token });
}

export async function getAdminNumbers(params?: { status?: string; country?: string; q?: string }, token?: string) {
  const q = new URLSearchParams();
  if (params?.status) q.set("status", params.status);
  if (params?.country) q.set("country", params.country);
  if (params?.q) q.set("q", params.q);
  const qs = q.toString();
  return safelineFetch<any>(`/api/admin/numbers${qs ? `?${qs}` : ""}`, { token });
}

export async function getAdminRentals(status?: string, token?: string) {
  const qs = status ? `?status=${encodeURIComponent(status)}` : "";
  return safelineFetch<any>(`/api/admin/rentals${qs}`, { token });
}

export async function getAdminMessages(token?: string) {
  return safelineFetch<any>("/api/admin/messages", { token });
}

export async function getProviderHealth(token?: string) {
  return safelineFetch<any>("/api/admin/providers", { token });
}

export async function getAuditLogs(token?: string) {
  return safelineFetch<any>("/api/admin/audit", { token });
}

export async function getOtpSessions(status?: string, token?: string) {
  const qs = status ? `?status=${encodeURIComponent(status)}` : "";
  return safelineFetch<any>(`/api/admin/otp${qs}`, { token });
}

export function formatUsd(cents?: number) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format((cents || 0) / 100);
}
