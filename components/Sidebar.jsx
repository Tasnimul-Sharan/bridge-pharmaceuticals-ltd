"use client";

import { supabaseServer } from "@/lib/supabaseServer";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import {
  FaBoxOpen,
  FaHome,
  FaPlusCircle,
  FaSignOutAlt,
  FaTags,
  FaLayerGroup,
} from "react-icons/fa";

export default function Sidebar() {
  const router = useRouter();

  const logout = async () => {
    await supabaseServer.auth.signOut();
    router.push("/login");
  };

  const menu = [
    { name: "Dashboard", href: "/dashboard", icon: <FaHome /> },
    { name: "Products", href: "/dashboard/products", icon: <FaBoxOpen /> },
    {
      name: "Add Product",
      href: "/dashboard/products/add",
      icon: <FaPlusCircle />,
    },
    { name: "Categories", href: "/dashboard/categories", icon: <FaTags /> },
    { name: "Types", href: "/dashboard/types", icon: <FaLayerGroup /> },
  ];

  const isActiveRoute = (href) => router.pathname === href;

  return (
    <aside className="w-64 min-h-screen bg-soft_black text-white flex flex-col border-r border-white/10">
      <div className="px-6 py-6 border-b border-white/10 flex items-center gap-3">
        <Image
          src="/logo/BRIDGE-LOGO.jpg"
          alt="Bridge Logo"
          width={80}
          height={80}
          className="w-14 h-14 rounded-full object-cover"
        />
        <div>
          <h2 className="text-lg font-bold">
            Bridge <span className="text-primary">Pharma</span>
          </h2>
          {/* <h2 className="text-lg font-bold">Admin Panel</h2> */}
          {/* <p className="text-xs text-white/50">Management Console</p> */}
          <p className="text-xs text-white/50">Admin Panel</p>
        </div>
      </div>

      <nav className="flex-1 px-4 py-6 space-y-1">
        {menu.map((item) => {
          const active = isActiveRoute(item.href);

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition
                ${
                  active
                    ? "bg-primary text-white shadow"
                    : "text-white/70 hover:bg-white/10 hover:text-white"
                }`}
            >
              <span className="text-base">{item.icon}</span>
              {item.name}
            </Link>
          );
        })}
      </nav>
      <div className="px-4 pb-6 mt-auto">
        <button
          onClick={logout}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-red-400 hover:bg-red-500/10 hover:text-red-500 transition"
        >
          <FaSignOutAlt />
          Logout
        </button>
      </div>
    </aside>
  );
}
