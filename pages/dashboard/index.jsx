// import AdminLayout from "@/components/AdminLayout";

// export default function Dashboard() {
//   return (
//     <AdminLayout>
//       <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

//       <div className="grid grid-cols-3 gap-6">
//         <div className="bg-white p-6 shadow rounded">
//           <h3>Total Products</h3>
//           <p className="text-2xl font-bold">—</p>
//         </div>
//         <div className="bg-white p-6 shadow rounded">
//           <h3>Admin</h3>
//           <p>Logged In</p>
//         </div>
//       </div>
//     </AdminLayout>
//   );
// }

import AdminLayout from "@/components/AdminLayout";
import { FaBoxOpen, FaUserShield } from "react-icons/fa";

function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-soft_black tracking-wide">
            BRIDGE PHARMACEUTICALS LIMITED
          </h1>
          <p className="text-sm text-gray-500 mt-1">Admin Control Dashboard</p>
        </div>

        <div className="text-right">
          <p className="text-xs text-gray-400">Status</p>
          <span className="inline-flex items-center gap-2 text-sm font-medium text-green-600">
            <span className="h-2 w-2 rounded-full bg-green-500"></span>
            System Active
          </span>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-border_color" />

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {/* Total Products */}
        <div className="bg-white rounded-xl border border-border_color p-6 shadow-sm hover:shadow-md transition">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Products</p>
              <h3 className="text-3xl font-bold text-soft_black mt-2">—</h3>
            </div>

            <div className="h-12 w-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-xl">
              <FaBoxOpen />
            </div>
          </div>
        </div>

        {/* Admin */}
        <div className="bg-white rounded-xl border border-border_color p-6 shadow-sm hover:shadow-md transition">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Administrator</p>
              <h3 className="text-lg font-semibold text-soft_black mt-2">
                Logged In
              </h3>
            </div>

            <div className="h-12 w-12 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center text-xl">
              <FaUserShield />
            </div>
          </div>
        </div>

        {/* Placeholder */}
        <div className="bg-white rounded-xl border border-border_color p-6 shadow-sm hover:shadow-md transition">
          <p className="text-sm text-gray-500">System</p>
          <h3 className="text-lg font-semibold text-soft_black mt-2">
            Ready for Operations
          </h3>
        </div>
      </div>
    </div>
  );
}

/* Attach Admin Layout */
Dashboard.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};

export default Dashboard;
