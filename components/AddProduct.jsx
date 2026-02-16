"use client";
import { supabaseServer } from "@/lib/supabaseServer";
import { useState } from "react";

export default function AddProduct() {
  const [form, setForm] = useState({
    slug: "",
    name: "",
    generic: "",
    images: "",
    description: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error } = await supabaseServer.from("products").insert([
      {
        ...form,
        images: form.images.split(","), // 👈 comma separated
      },
    ]);

    if (error) alert(error.message);
    else alert("Product added!");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        placeholder="Slug"
        onChange={(e) => setForm({ ...form, slug: e.target.value })}
      />
      <input
        placeholder="Name"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <input
        placeholder="Generic"
        onChange={(e) => setForm({ ...form, generic: e.target.value })}
      />
      <textarea
        placeholder="Images (comma separated)"
        onChange={(e) => setForm({ ...form, images: e.target.value })}
      />
      <textarea
        placeholder="Description"
        onChange={(e) => setForm({ ...form, description: e.target.value })}
      />
      <button type="submit">Save</button>
    </form>
  );
}
