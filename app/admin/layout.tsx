import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import AdminShell from "./AdminShell";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const token = (await cookies()).get("safeline_admin")?.value;
  if (!token || token !== process.env.SAFELINE_ADMIN_TOKEN) redirect("/login");
  return <AdminShell>{children}</AdminShell>;
}
