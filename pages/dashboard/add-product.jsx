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

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

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

  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-xl mb-4">Add Product</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
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
      </form>
    </div>
  );
}

AddProductPage.getLayout = (page) => <AdminLayout>{page}</AdminLayout>;

export default AddProductPage;
