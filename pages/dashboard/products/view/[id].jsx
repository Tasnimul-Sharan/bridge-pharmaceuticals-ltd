"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import AdminLayout from "@/components/AdminLayout";
import { supabaseServer } from "@/lib/supabaseServer";

const Field = ({ label, value }) => (
  <div className="space-y-1">
    <p className="text-xs text-gray-500 uppercase tracking-wide">{label}</p>
    <p className="text-sm text-gray-800 whitespace-pre-line">{value || "—"}</p>
  </div>
);

export default function ViewProductPage() {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    supabaseServer
      .from("products")
      .select("*")
      .eq("id", id)
      .single()
      .then(({ data }) => {
        setProduct(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="p-6">Loading product...</div>;
  if (!product) return <div className="p-6">Product not found</div>;

  return (
    <div className="max-w-5xl mx-auto bg-white p-6 rounded-xl border space-y-8">
      <h1 className="text-2xl font-bold">Product Details</h1>

      {/* Basic Info */}
      <div className="grid grid-cols-2 gap-6">
        <Field label="Slug" value={product.slug} />
        <Field label="Category" value={product.category} />
        <Field label="Type" value={product.type} />
        <Field label="Name" value={product.name} />
        <Field label="Generic Name" value={product.generic} />
        <Field label="Composition" value={product.composition} />
      </div>

      {/* Medical Info */}
      <div className="grid grid-cols-2 gap-6">
        <Field label="Indication" value={product.indication} />
        <Field label="Contraindication" value={product.contraindication} />
        <Field label="Dosage" value={product.dosage} />
        <Field label="Interaction" value={product.interaction} />
        <Field label="Side Effect" value={product.sideeffect} />
        <Field label="Precaution" value={product.precaution} />
        <Field label="Withdrawal" value={product.withdrawal} />
      </div>

      {/* Description */}
      <div>
        <Field label="Description" value={product.description} />
      </div>

      {/* Storage & Packing */}
      <div className="grid grid-cols-2 gap-6">
        <Field label="Storage" value={product.storage} />
        <Field label="Packing" value={product.packing} />
      </div>

      {/* Images */}
      {product.images?.length > 0 && (
        <div className="space-y-3">
          <p className="text-xs text-gray-500 uppercase tracking-wide">
            Images
          </p>
          <div className="grid grid-cols-4 gap-4">
            {product.images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt=""
                className="w-full h-32 object-cover rounded border"
              />
            ))}
          </div>
        </div>
      )}

      {/* Actions */}
      <div className="flex gap-3 pt-6 border-t">
        <button
          onClick={() => router.push(`/dashboard/products/edit/${product.id}`)}
          className="bg-primary text-white px-4 py-2 rounded"
        >
          Edit Product
        </button>

        <button
          onClick={() => router.back()}
          className="border px-4 py-2 rounded"
        >
          Back
        </button>
      </div>
    </div>
  );
}

ViewProductPage.getLayout = function getLayout(page) {
  return <AdminLayout title="View Product">{page}</AdminLayout>;
};
