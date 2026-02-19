// import { supabaseServer } from "@/lib/supabaseServer";
// import { useRouter } from "next/router";
// import { useEffect, useState } from "react";
// import { FaUserCircle } from "react-icons/fa";

// export default function AdminHeader() {
//   const router = useRouter();
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const getUser = async () => {
//       const { data } = await supabaseServer.auth.getUser();
//       setUser(data.user);
//     };

//     getUser();
//   }, []);

//   const logout = async () => {
//     await supabaseServer.auth.signOut();
//     router.push("/login");
//   };

//   return (
//     <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 shadow-sm">
//       {/* Left */}
//       <div>
//         <h1 className="text-lg font-semibold text-soft_black">
//           Admin Dashboard
//         </h1>
//       </div>

//       {/* Right */}
//       <div className="flex items-center gap-4">
//         <div className="flex items-center gap-2 text-sm text-gray-600">
//           <FaUserCircle className="text-xl" />
//           <span>{user?.email}</span>
//         </div>

//         <button
//           onClick={logout}
//           className="text-sm text-red-500 hover:text-red-600"
//         >
//           Logout
//         </button>
//       </div>
//     </header>
//   );
// }

import { supabaseServer } from "@/lib/supabaseServer";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { LogOut } from "lucide-react";

export default function AdminHeader() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabaseServer.auth.getUser();
      setUser(data.user);
    };

    getUser();
  }, []);

  const logout = async () => {
    await supabaseServer.auth.signOut();
    router.push("/login");
  };

  return (
    <header className="h-24 bg-gradient-to-r from-white to-gray-50 border-b border-gray-200 flex items-center justify-between px-8">
      {/* Left */}
      <div>
        <h1 className="text-xl font-semibold text-soft_black tracking-wide">
          Admin Dashboard
        </h1>
        <p className="text-xs text-gray-400">Manage your system efficiently</p>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        {/* User Info Card */}
        <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-full">
          <FaUserCircle className="text-3xl text-primary" />
          <div className="text-sm leading-tight">
            <p className="font-medium text-gray-700">
              {user?.email?.split("@")[0]}
            </p>
            <p className="text-xs text-gray-400">{user?.email}</p>
          </div>
        </div>

        {/* Logout Button */}
        <button
          onClick={logout}
          className="flex items-center gap-2 bg-red-50 text-red-500 px-4 py-2 rounded-full hover:bg-red-100 transition text-sm font-medium"
        >
          <LogOut size={16} />
          Logout
        </button>
      </div>
    </header>
  );
}
