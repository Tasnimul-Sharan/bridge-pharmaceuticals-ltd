import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/router";

export default function Sidebar() {
  const router = useRouter();

  const logout = async () => {
    await supabase.auth.signOut();
    router.push("/login");
  };

  return (
    <aside className="w-64 bg-black text-white p-6 space-y-6">
      <h2 className="text-xl font-bold">Admin Panel</h2>

      <nav className="space-y-3">
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/dashboard/add-product">➕ Add Product</Link>
        <Link href="/dashboard/products">📦 Products</Link>
      </nav>

      <button onClick={logout} className="mt-10 text-sm bg-red-600 px-3 py-2">
        Logout
      </button>
    </aside>
  );
}
