"use client";

import { useState, useEffect } from "react";
import { Eye, Pencil, Trash2, Plus } from "lucide-react";
import AdminLayout from "@/components/AdminLayout";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/router";

const PAGE_SIZE = 10;

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [viewProduct, setViewProduct] = useState(null);
  const router = useRouter();

  useEffect(() => {
    fetchProducts();
  }, [page, search]);

  const fetchProducts = async () => {
    setLoading(true);

    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;

    let query = supabase
      .from("products")
      .select("*", { count: "exact" })
      .order("id", { ascending: true })
      .range(from, to);

    if (search) {
      query = query.ilike("name", `%${search}%`);
    }

    const { data, error, count } = await query;

    if (!error) {
      setProducts(data);
      setTotal(count);
    }

    setLoading(false);
  };

  const totalPages = Math.ceil(total / PAGE_SIZE);

  const deleteProduct = async (id) => {
    if (!confirm("Delete this product permanently?")) return;

    const { error } = await supabase.from("products").delete().eq("id", id);

    if (!error) fetchProducts();
  };

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">All Products</h1>

        <button className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-secondary transition">
          <Plus size={18} /> Add Product
        </button>
      </div>

      {/* Search */}
      <div className="bg-white p-4 rounded-xl border border-border_color flex gap-4">
        <input
          type="text"
          placeholder="Search by product name..."
          className="border w-full px-4 py-2 rounded-lg focus:ring-2 focus:ring-primary outline-none"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
        />
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-border_color overflow-hidden">
        {loading ? (
          <div className="p-6 text-center text-gray-500">
            Loading products...
          </div>
        ) : (
          <table className="w-full text-sm border border-gray-200 border-collapse bg-primary/10">
            <thead className="bg-primary text-white sticky top-0">
              <tr>
                <th className="p-3 text-left w-12 border border-gray-200">
                  S/L
                </th>
                <th className="p-3 text-left border border-gray-200">
                  Product
                </th>
                <th className="p-3 text-left border border-gray-200">
                  Generic Name
                </th>
                <th className="p-3 text-left border border-gray-200">
                  Category
                </th>
                <th className="p-3 text-left border border-gray-200">Type</th>
                <th className="p-3 text-center w-32 border border-gray-200">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {products.map((p, i) => (
                <tr className="even:bg-gray-50 hover:bg-blue-50 transition">
                  <td className="p-3 border border-gray-200">
                    {(page - 1) * PAGE_SIZE + i + 1}
                  </td>
                  <td className="p-3 border border-gray-200 font-medium">
                    {p.name}
                  </td>
                  <td className="p-3 border border-gray-200">{p.generic}</td>
                  <td className="p-3 border border-gray-200">{p.category}</td>
                  <td className="p-3 border border-gray-200">{p.type}</td>
                  <td className="p-3 border border-gray-200">
                    <div className="flex justify-center gap-2">
                      <button
                        onClick={() =>
                          router.push(`/dashboard/products/view/${p.id}`)
                        }
                        className="bg-emerald-100 p-2 rounded hover:bg-emerald-200"
                      >
                        <Eye size={16} className="text-emerald-600" />
                      </button>

                      <button
                        onClick={() =>
                          router.push(`/dashboard/products/edit/${p.id}`)
                        }
                        className="bg-blue-100 p-2 rounded hover:bg-blue-200"
                      >
                        <Pencil size={16} className="text-blue-600" />
                      </button>

                      <button
                        onClick={() => deleteProduct(p.id)}
                        className="bg-red-100 p-2 rounded hover:bg-red-200"
                      >
                        <Trash2 size={16} className="text-red-600" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

              {products.length === 0 && (
                <tr>
                  <td colSpan="6" className="p-6 text-center text-gray-400">
                    No products found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>

      {viewProduct && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-lg rounded-xl p-6 space-y-4">
            <h2 className="text-xl font-semibold">Product Details</h2>

            <div className="space-y-2 text-sm">
              <p>
                <b>Name:</b> {viewProduct.name}
              </p>
              <p>
                <b>Generic:</b> {viewProduct.generic}
              </p>
              <p>
                <b>Category:</b> {viewProduct.category}
              </p>
              <p>
                <b>Type:</b> {viewProduct.type}
              </p>
            </div>

            <div className="flex justify-end gap-2 pt-4">
              <button
                onClick={() => setViewProduct(null)}
                className="px-4 py-2 border rounded"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center gap-2">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i + 1)}
              className={`px-4 py-2 rounded border transition
                ${
                  page === i + 1
                    ? "bg-primary text-white border-primary"
                    : "hover:bg-primary hover:text-white"
                }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

ProductsPage.getLayout = function getLayout(page) {
  return <AdminLayout title="Products">{page}</AdminLayout>;
};
