import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { token } = await request.json().catch(() => ({}));
  const expected = process.env.SAFELINE_ADMIN_TOKEN;
  if (!expected || typeof token !== "string" || token.length === 0 || token !== expected) {
    return NextResponse.json({ error: "Invalid admin token" }, { status: 401 });
  }
  const response = NextResponse.json({ ok: true });
  response.cookies.set("safeline_admin", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 12,
  });
  return response;
}

export async function DELETE() {
  const response = NextResponse.json({ ok: true });
  response.cookies.set("safeline_admin", "", { httpOnly: true, expires: new Date(0), path: "/" });
  return response;
}
