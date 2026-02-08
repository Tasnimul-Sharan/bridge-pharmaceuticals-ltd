import AdminLayout from "@/components/AdminLayout";
import { useState } from "react";
import { supabase } from "@/lib/supabase";

function AddProductPage() {
  const [form, setForm] = useState({
    slug: "",
    category: "",
    type: "",
    name: "",
    generic: "",
    composition: "",
    description: "",
    indication: "",
    contraindication: "",
    dosage: "",
    interaction: "",
    sideeffect: "",
    precaution: "",
    withdrawal: "",
    storage: "",
    packing: "",
    images: [],
  });

  const categories = [
    "Anti-protozoals Products",
    "Aqua Products",
    "Metabolic & Nutritional Supplements",
    "Anti-Parasitics Products",
    "Appetizer & Digestive Stimulant Products",
    "Anti-Histamines Products",
    "Anti-Inflammatory Products",
    "Anthelmintics Products",
    "Antibiotics Products",
  ];

  const types = ["Gel", "Powder", "Oral Liquid", "Bolus", "Injection"];

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error } = await supabase.from("products").insert([form]);

    if (error) alert(error.message);
    else alert("Product Added Successfully!");
  };

  // const handleChange = (e) => {
  //   setForm({ ...form, [e.target.name]: e.target.value });
  // };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = async () => {
      const res = await fetch("/api/upload", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ file: reader.result }),
      });

      const data = await res.json();

      setForm({
        ...form,
        images: [...form.images, data.url],
      });
    };

    reader.readAsDataURL(file);
  };

  console.log(JSON.stringify(form, null, 2));

  const generateSlug = (text) => {
    return text
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "") // special char remove
      .replace(/\s+/g, "-") // space -> dash
      .replace(/-+/g, "-"); // multiple dash fix
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "name") {
      setForm({
        ...form,
        name: value,
        slug: generateSlug(value),
      });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-xl mb-4">Add Product</h1>

      {/* <form onSubmit={handleSubmit} className="space-y-4">
        <select
          name="category"
          onChange={handleChange}
          className="border p-2 w-full"
        >
          <option>Choose Category</option>
          {categories.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>

        <select
          name="type"
          onChange={handleChange}
          className="border p-2 w-full"
        >
          <option>Choose Type</option>
          {types.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>

        <input
          name="name"
          placeholder="Product Name"
          onChange={handleChange}
          className="border p-2 w-full"
        />
        <input
          name="generic"
          placeholder="Generic Name"
          onChange={handleChange}
          className="border p-2 w-full"
        />
        <textarea
          name="composition"
          placeholder="Composition"
          onChange={handleChange}
          className="border p-2 w-full"
        />

        <textarea
          name="description"
          placeholder="Description"
          onChange={handleChange}
          className="border p-2 w-full"
        />
        <textarea
          name="indication"
          placeholder="Indication"
          onChange={handleChange}
          className="border p-2 w-full"
        />
        <textarea
          name="contraindication"
          placeholder="Contra-Indication"
          onChange={handleChange}
          className="border p-2 w-full"
        />
        <textarea
          name="dosage"
          placeholder="Dosage"
          onChange={handleChange}
          className="border p-2 w-full"
        />

        <input
          type="file"
          onChange={handleImageUpload}
          className="border p-2 w-full"
        />

        <button className="bg-black text-white px-4 py-2 rounded">
          Save Product
        </button>
      </form> */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* slug */}
        <input
          name="slug"
          value={form.slug}
          placeholder="Slug"
          readOnly
          className="border p-2 w-full bg-gray-100"
        />
        {/* Category */}
        <select
          name="category"
          value={form.category}
          onChange={handleChange}
          className="border p-2 w-full"
        >
          <option value="">Choose Category</option>
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>

        {/* Type */}
        <select
          name="type"
          value={form.type}
          onChange={handleChange}
          className="border p-2 w-full"
        >
          <option value="">Choose Type</option>
          {types.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>

        {/* Basic Info */}
        <input
          name="name"
          value={form.name}
          placeholder="Product Name"
          onChange={handleChange}
          className="border p-2 w-full"
        />

        <input
          name="generic"
          value={form.generic}
          placeholder="Generic Name"
          onChange={handleChange}
          className="border p-2 w-full"
        />

        <textarea
          name="composition"
          value={form.composition}
          placeholder="Composition"
          onChange={handleChange}
          className="border p-2 w-full"
        />

        <textarea
          name="description"
          value={form.description}
          placeholder="Description"
          onChange={handleChange}
          className="border p-2 w-full"
        />

        <textarea
          name="indication"
          value={form.indication}
          placeholder="Indication"
          onChange={handleChange}
          className="border p-2 w-full"
        />

        <textarea
          name="contraindication"
          value={form.contraindication}
          placeholder="Contraindication"
          onChange={handleChange}
          className="border p-2 w-full"
        />

        <textarea
          name="dosage"
          value={form.dosage}
          placeholder="Dosage"
          onChange={handleChange}
          className="border p-2 w-full"
        />

        {/* Newly Added Fields */}
        <textarea
          name="interaction"
          value={form.interaction}
          placeholder="Drug Interaction"
          onChange={handleChange}
          className="border p-2 w-full"
        />

        <textarea
          name="sideeffect"
          value={form.sideeffect}
          placeholder="Side Effects"
          onChange={handleChange}
          className="border p-2 w-full"
        />

        <textarea
          name="precaution"
          value={form.precaution}
          placeholder="Precaution"
          onChange={handleChange}
          className="border p-2 w-full"
        />

        <textarea
          name="withdrawal"
          value={form.withdrawal}
          placeholder="Withdrawal Period"
          onChange={handleChange}
          className="border p-2 w-full"
        />

        <textarea
          name="storage"
          value={form.storage}
          placeholder="Storage Condition"
          onChange={handleChange}
          className="border p-2 w-full"
        />

        <input
          name="packing"
          value={form.packing}
          placeholder="Packing Information"
          onChange={handleChange}
          className="border p-2 w-full"
        />

        {/* Image Upload */}
        <input
          type="file"
          onChange={handleImageUpload}
          className="border p-2 w-full"
        />

        {/* Preview Uploaded Images (optional but useful) */}
        {form.images.length > 0 && (
          <div className="flex gap-2 flex-wrap">
            {form.images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt="product"
                className="w-20 h-20 object-cover border rounded"
              />
            ))}
          </div>
        )}

        <button className="bg-black text-white px-4 py-2 rounded">
          Save Product
        </button>
      </form>
    </div>
  );
}

AddProductPage.getLayout = (page) => <AdminLayout>{page}</AdminLayout>;

export default AddProductPage;
