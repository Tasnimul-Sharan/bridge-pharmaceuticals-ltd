import AdminLayout from "@/components/AdminLayout";

export default function Dashboard() {
  return (
    <AdminLayout>
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white p-6 shadow rounded">
          <h3>Total Products</h3>
          <p className="text-2xl font-bold">—</p>
        </div>
        <div className="bg-white p-6 shadow rounded">
          <h3>Admin</h3>
          <p>Logged In</p>
        </div>
      </div>
    </AdminLayout>
  );
}
