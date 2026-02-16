import { supabaseServer } from "@/lib/supabaseServer";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";

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
    await supabase.auth.signOut();
    router.push("/login");
  };

  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 shadow-sm">
      {/* Left */}
      <div>
        <h1 className="text-lg font-semibold text-soft_black">
          Admin Dashboard
        </h1>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <FaUserCircle className="text-xl" />
          <span>{user?.email}</span>
        </div>

        <button
          onClick={logout}
          className="text-sm text-red-500 hover:text-red-600"
        >
          Logout
        </button>
      </div>
    </header>
  );
}
