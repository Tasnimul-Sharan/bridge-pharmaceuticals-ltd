"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { supabaseServer } from "@/lib/supabaseServer";
import AdminLayout from "@/components/AdminLayout";

const Input = ({ label, value, onChange }) => (
  <div className="space-y-1">
    <label className="text-xs text-gray-500 uppercase tracking-wide">
      {label}
    </label>
    <input
      className="border p-2 w-full rounded"
      value={value || ""}
      onChange={onChange}
    />
  </div>
);

const Textarea = ({ label, value, onChange }) => (
  <div className="space-y-1">
    <label className="text-xs text-gray-500 uppercase tracking-wide">
      {label}
    </label>
    <textarea
      rows={4}
      className="border p-2 w-full rounded"
      value={value || ""}
      onChange={onChange}
    />
  </div>
);

function EditProductPage() {
  const router = useRouter();
  const { id } = router.query;
  const [form, setForm] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    supabaseServer
      .from("products")
      .select("*")
      .eq("id", id)
      .single()
      .then(({ data }) => {
        setForm(data);
        setLoading(false);
      });
  }, [id]);

  const updateProduct = async () => {
    const payload = {
      ...form,
      images:
        typeof form.images === "string"
          ? form.images.split(",").map((i) => i.trim())
          : form.images,
    };

    const { error } = await supabaseServer
      .from("products")
      .update(payload)
      .eq("id", id);

    if (!error) {
      alert("Product updated successfully");
      router.push("/dashboard/products");
    }
  };

  if (loading) {
    return <div className="p-6 text-center">Loading...</div>;
  }

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // file → base64 convert
    const reader = new FileReader();

    reader.onloadend = async () => {
      try {
        const res = await fetch("/api/upload", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            file: reader.result,
          }),
        });

        const data = await res.json();

        if (!data.url) {
          alert("Upload failed");
          return;
        }

        const updatedImages = [...(form.images || []), data.url];

        // preview update
        setForm({ ...form, images: updatedImages });

        // supabaseServer update
        await supabaseServer
          .from("products")
          .update({ images: updatedImages })
          .eq("id", id);
      } catch (err) {
        console.log(err);
        alert("Upload error");
      }
    };

    reader.readAsDataURL(file);
  };

  return (
    <div className="max-w-5xl mx-auto bg-white p-6 rounded-xl border space-y-8">
      <h1 className="text-2xl font-bold">Edit Product</h1>

      {/* Basic Info */}
      <div className="grid grid-cols-2 gap-6">
        <Input
          label="Slug"
          value={form.slug}
          onChange={(e) => setForm({ ...form, slug: e.target.value })}
        />
        <Input
          label="Category"
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
        />
        <Input
          label="Type"
          value={form.type}
          onChange={(e) => setForm({ ...form, type: e.target.value })}
        />
        <Input
          label="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <Input
          label="Generic Name"
          value={form.generic}
          onChange={(e) => setForm({ ...form, generic: e.target.value })}
        />
        <Input
          label="Composition"
          value={form.composition}
          onChange={(e) => setForm({ ...form, composition: e.target.value })}
        />
      </div>

      {/* Medical */}
      <div className="grid grid-cols-2 gap-6">
        <Textarea
          label="Indication"
          value={form.indication}
          onChange={(e) => setForm({ ...form, indication: e.target.value })}
        />
        <Textarea
          label="Contraindication"
          value={form.contraindication}
          onChange={(e) =>
            setForm({ ...form, contraindication: e.target.value })
          }
        />
        <Textarea
          label="Dosage"
          value={form.dosage}
          onChange={(e) => setForm({ ...form, dosage: e.target.value })}
        />
        <Textarea
          label="Interaction"
          value={form.interaction}
          onChange={(e) => setForm({ ...form, interaction: e.target.value })}
        />
        <Textarea
          label="Side Effect"
          value={form.sideeffect}
          onChange={(e) => setForm({ ...form, sideeffect: e.target.value })}
        />
        <Textarea
          label="Precaution"
          value={form.precaution}
          onChange={(e) => setForm({ ...form, precaution: e.target.value })}
        />
        <Textarea
          label="Withdrawal"
          value={form.withdrawal}
          onChange={(e) => setForm({ ...form, withdrawal: e.target.value })}
        />
      </div>

      {/* Description */}
      <Textarea
        label="Description"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
      />

      {/* Storage & Packing */}
      <div className="grid grid-cols-2 gap-6">
        <Textarea
          label="Storage"
          value={form.storage}
          onChange={(e) => setForm({ ...form, storage: e.target.value })}
        />
        <Textarea
          label="Packing"
          value={form.packing}
          onChange={(e) => setForm({ ...form, packing: e.target.value })}
        />
      </div>

      {/* Images */}
      {/* <Textarea
        label="Images (comma separated URLs)"
        value={
          Array.isArray(form.images) ? form.images.join(", ") : form.images
        }
        onChange={(e) => setForm({ ...form, images: e.target.value })}
      /> */}
      {/* <div className="grid grid-cols-4 gap-4">
        {(Array.isArray(form.images)
          ? form.images
          : form.images?.split(",")
        )?.map((img, i) => (
          <img
            key={i}
            src={img.trim()}
            alt="product"
            className="w-full h-32 object-cover rounded border"
          />
        ))}
      </div> */}
      {/* Images Edit Section */}
      {/* <div className="space-y-4">
        <label className="text-xs text-gray-500 uppercase tracking-wide">
          Product Images
        </label>

        {(Array.isArray(form.images)
          ? form.images
          : form.images?.split(",")
        )?.map((img, i) => {
          const imagesArray = Array.isArray(form.images)
            ? form.images
            : form.images?.split(",");

          return (
            <div key={i} className="flex gap-3 items-center">
              <img
                src={img.trim()}
                alt="product"
                className="w-20 h-20 object-cover rounded border"
              />

              <input
                className="border p-2 flex-1 rounded"
                value={img.trim()}
                onChange={(e) => {
                  const updated = [...imagesArray];
                  updated[i] = e.target.value;
                  setForm({ ...form, images: updated });
                }}
              />

              <button
                onClick={() => {
                  const updated = imagesArray.filter((_, index) => index !== i);
                  setForm({ ...form, images: updated });
                }}
                className="px-3 py-2 bg-red-500 text-white rounded"
              >
                Remove
              </button>
            </div>
          );
        })}

        <button
          onClick={() =>
            setForm({
              ...form,
              images: [...(form.images || []), ""],
            })
          }
          className="px-4 py-2 bg-gray-200 rounded"
        >
          + Add Image
        </button>
      </div> */}

      {/* <div className="space-y-4">
        <label className="text-xs text-gray-500 uppercase">
          Product Images Upload
        </label>

        <input
          type="file"
          accept="image/*"
          onChange={uploadImage}
          className="border p-2 rounded"
        />

        <div className="grid grid-cols-4 gap-4">
          {form.images?.map((img, i) => (
            <img
              key={i}
              src={img}
              className="w-full h-32 object-cover rounded border"
            />
          ))}
        </div>
      </div> */}

      <div className="space-y-4">
        <label className="text-xs text-gray-500 uppercase">
          Product Images Upload
        </label>

        <input
          type="file"
          accept="image/*"
          onChange={uploadImage}
          className="border p-2 rounded"
        />

        <div className="grid grid-cols-4 gap-4">
          {form.images?.map((img, i) => (
            <div key={i} className="relative group">
              <img
                src={img}
                className="w-full h-32 object-cover rounded border"
              />

              {/* Remove Button */}
              <button
                onClick={async () => {
                  const imageUrl = form.images[i];

                  console.log("image url:", imageUrl);

                  // extract public id
                  const public_id = imageUrl
                    .split("/upload/")[1]
                    .split(".")[0]
                    .replace(/^v\d+\//, "");

                  console.log("delete public id:", public_id);

                  await fetch("/api/delete-image", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ public_id }),
                  });

                  const updatedImages = form.images.filter(
                    (_, index) => index !== i,
                  );

                  setForm({ ...form, images: updatedImages });

                  await supabaseServer
                    .from("products")
                    .update({ images: updatedImages })
                    .eq("id", id);
                }}
                className="absolute top-1 right-1 bg-red-500 text-white text-xs px-2 py-1 rounded opacity-100 transition"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-3 pt-6 border-t">
        <button
          onClick={updateProduct}
          className="bg-primary text-white px-4 py-2 rounded"
        >
          Update Product
        </button>

        <button
          onClick={() => router.back()}
          className="border px-4 py-2 rounded"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

EditProductPage.getLayout = (page) => (
  <AdminLayout title="Edit Product">{page}</AdminLayout>
);

export default EditProductPage;
