// import { supabase } from "@/lib/supabase";
// import Link from "next/link";
// import { useRouter } from "next/router";
// import { FaBoxOpen, FaHome, FaPlusCircle, FaSignOutAlt } from "react-icons/fa";

// export default function Sidebar() {
//   const router = useRouter();

//   const logout = async () => {
//     await supabase.auth.signOut();
//     router.push("/login");
//   };

//   const menu = [
//     {
//       name: "Dashboard",
//       href: "/dashboard",
//       icon: <FaHome />,
//     },
//     {
//       name: "Add Product",
//       href: "/dashboard/add-product",
//       icon: <FaPlusCircle />,
//     },
//     {
//       name: "Products",
//       href: "/dashboard/products",
//       icon: <FaBoxOpen />,
//     },
//   ];

//   return (
//     <aside className="w-64 min-h-screen bg-soft_black text-white flex flex-col border-r border-white/10">
//       {/* Brand */}
//       <div className="px-6 py-5 border-b border-white/10">
//         <h2 className="text-xl font-bold tracking-wide">Admin Panel</h2>
//         <p className="text-xs text-white/50 mt-1">Management Console</p>
//       </div>

//       {/* Navigation */}
//       <nav className="flex-1 px-4 py-6 space-y-1">
//         {menu.map((item) => {
//           const isActive = router.pathname === item.href;

//           return (
//             <Link
//               key={item.name}
//               href={item.href}
//               className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition
//                 ${
//                   isActive
//                     ? "bg-primary text-white shadow-sm"
//                     : "text-white/70 hover:bg-white/10 hover:text-white"
//                 }`}
//             >
//               <span className="text-base">{item.icon}</span>
//               {item.name}
//             </Link>
//           );
//         })}
//       </nav>

//       {/* Logout */}
//       <div className="px-4 pb-6">
//         <button
//           onClick={logout}
//           className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-red-400 hover:bg-red-500/10 hover:text-red-500 transition"
//         >
//           <FaSignOutAlt />
//           Logout
//         </button>
//       </div>
//     </aside>
//   );
// }

import { supabase } from "@/lib/supabase";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { FaBoxOpen, FaHome, FaPlusCircle, FaSignOutAlt } from "react-icons/fa";

export default function Sidebar() {
  const router = useRouter();

  const logout = async () => {
    await supabase.auth.signOut();
    router.push("/login");
  };

  const menu = [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: <FaHome />,
    },
    {
      name: "Add Product",
      href: "/dashboard/add-product",
      icon: <FaPlusCircle />,
    },
    {
      name: "Products",
      href: "/dashboard/products",
      icon: <FaBoxOpen />,
    },
  ];

  return (
    <aside className="w-64 min-h-screen bg-soft_black text-white flex flex-col border-r border-white/10">
      {/* Logo + Brand */}
      <div className="px-6 py-2 border-b border-white/10 flex items-center gap-3">
        <Image
          src="/logo/BRIDGE-LOGO.jpg"
          alt="Bridge Pharmaceuticals Logo"
          width={1200}
          height={1200}
          priority
          className="w-20 h-20 rounded-full object-cover"
        />
        <div>
          <h2 className="text-lg font-bold leading-tight">Admin Panel</h2>
          <p className="text-xs text-white/50">Management Console</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-1">
        {menu.map((item) => {
          const isActive = router.pathname === item.href;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition
                ${
                  isActive
                    ? "bg-primary text-white shadow-sm"
                    : "text-white/70 hover:bg-white/10 hover:text-white"
                }`}
            >
              <span className="text-base">{item.icon}</span>
              {item.name}
            </Link>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="px-4 pb-6">
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
