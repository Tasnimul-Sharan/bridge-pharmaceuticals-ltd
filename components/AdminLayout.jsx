// import { useEffect, useState } from "react";
// import { useRouter } from "next/router";
// import { supabase } from "@/lib/supabase";
// import Sidebar from "./Sidebar";

// export default function AdminLayout({ children }) {
//   const router = useRouter();
//   const [loading, setLoading] = useState(true);

//   // useEffect(() => {
//   //   supabase.auth.getSession().then(({ data }) => {
//   //     if (!data.session) {
//   //       router.push("/login");
//   //     } else {
//   //       setLoading(false);
//   //     }
//   //   });
//   // }, []);

//   useEffect(() => {
//     let isMounted = true;

//     supabase.auth.getSession().then(({ data }) => {
//       if (!isMounted) return;

//       if (!data.session) {
//         router.replace("/login");
//       } else {
//         setLoading(false);
//       }
//     });

//     return () => {
//       isMounted = false;
//     };
//   }, [router]);

//   if (loading) return <div className="p-10">Loading...</div>;

//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       <Sidebar />
//       <main className="flex-1 p-8 max-w-5xl mx-auto md:px-0 px-6">
//         {children}
//       </main>
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { supabase } from "@/lib/supabase";
import Sidebar from "./Sidebar";
import AdminHeader from "./AdminHeader";

export default function AdminLayout({ children }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    supabase.auth.getSession().then(({ data }) => {
      if (!isMounted) return;

      if (!data.session) {
        router.replace("/login");
      } else {
        setLoading(false);
      }
    });

    return () => {
      isMounted = false;
    };
  }, [router]);

  if (loading) return <div className="p-10 text-center">Loading...</div>;

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        {/* Persistent Header */}
        <AdminHeader />

        {/* Page Content */}
        <main className="flex-1 p-8 max-w-6xl mx-auto w-full">{children}</main>
      </div>
    </div>
  );
}
