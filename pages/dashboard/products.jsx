import AdminLayout from "@/components/AdminLayout";

export default function ProductsPage() {
  return (
    <div title="Products">
      <h1 className="text-2xl font-bold mb-6">
        Products – PHARMACEUTICALS LIMITED
      </h1>

      <div className="bg-white rounded-xl shadow p-6">
        <p className="text-gray-600">
          Here you can add, edit, update and delete products.
        </p>
      </div>
    </div>
  );
}

// ProductsPage.getLayout = function getLayout(page) {
//   return <AdminLayout>{page}</AdminLayout>;
// };

ProductsPage.getLayout = function getLayout(page) {
  return <AdminLayout title="Products">{page}</AdminLayout>;
};
