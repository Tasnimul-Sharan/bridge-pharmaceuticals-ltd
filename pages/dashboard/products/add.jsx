import AdminLayout from "@/components/AdminLayout";
import { useEffect, useState } from "react";
import { supabaseServer } from "@/lib/supabaseServer";
import StatusModal from "@/components/StatusModal";

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

  const [categories, setCategories] = useState([]);
  const [types, setTypes] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [modal, setModal] = useState({
    show: false,
    type: "success", // success | error
    message: "",
  });

  useEffect(() => {
    fetchCategories();
    fetchTypes();
  }, []);

  const fetchCategories = async () => {
    const { data, error } = await supabaseServer
      .from("categories")
      .select("*")
      .order("name", { ascending: true });

    if (!error) setCategories(data);
  };

  const fetchTypes = async () => {
    const { data, error } = await supabaseServer
      .from("types")
      .select("*")
      .order("name", { ascending: true });

    if (!error) setTypes(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (uploading) return;

    try {
      setUploading(true);

      const { data: existingProduct } = await supabaseServer
        .from("products")
        .select("id")
        .eq("name", form.name)
        .eq("category", form.category)
        .single();

      if (existingProduct) {
        setModal({
          show: true,
          type: "error",
          message: "This product already exists!",
        });
        setUploading(false);
        return;
      }

      let imageUrls = [];

      // 🔥 Upload image FIRST
      if (selectedFile) {
        const reader = new FileReader();

        const base64 = await new Promise((resolve, reject) => {
          reader.onloadend = () => resolve(reader.result);
          reader.onerror = reject;
          reader.readAsDataURL(selectedFile);
        });

        const res = await fetch("/api/upload", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ file: base64 }),
        });

        if (!res.ok) {
          throw new Error("Image upload failed");
        }

        const data = await res.json();
        imageUrls.push(data.url);
      }

      // 🔥 THEN insert to DB
      const { error } = await supabaseServer.from("products").insert([
        {
          ...form,
          images: imageUrls,
        },
      ]);

      if (error) throw error;

      // ✅ SUCCESS MODAL
      setModal({
        show: true,
        type: "success",
        message: "Product added successfully!",
      });

      // ✅ Reset Form
      setForm({
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

      setSelectedFile(null);
    } catch (err) {
      console.error(err);

      setModal({
        show: true,
        type: "error",
        message: err.message || "Something went wrong!",
      });
    } finally {
      setUploading(false);
    }
  };

  console.log(JSON.stringify(form, null, 2));

  const generateSlug = (text) => {
    return text
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");
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

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setSelectedFile(file);

    // preview only
    const previewUrl = URL.createObjectURL(file);

    setForm((prev) => ({
      ...prev,
      images: [previewUrl], // শুধু preview
    }));
  };

  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-xl mb-4">Add Product</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="slug"
          value={form.slug}
          placeholder="Slug"
          readOnly
          className="border p-2 w-full bg-gray-100"
        />

        <select
          name="category"
          value={form.category}
          onChange={handleChange}
          className="border p-2 w-full"
        >
          <option value="">Choose Category</option>
          {categories.map((c) => (
            <option key={c.id} value={c.name}>
              {c.name}
            </option>
          ))}
        </select>

        <select
          name="type"
          value={form.type}
          onChange={handleChange}
          className="border p-2 w-full"
        >
          <option value="">Choose Type</option>
          {types.map((t) => (
            <option key={t.id} value={t.name}>
              {t.name}
            </option>
          ))}
        </select>

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

        {/* <input
          type="file"
          onChange={handleImageUpload}
          className="border p-2 w-full"
        /> */}
        <input
          type="file"
          onChange={handleFileChange}
          className="border p-2 w-full"
        />

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
        <button
          type="submit"
          disabled={uploading}
          className={`px-4 py-2 rounded text-white ${
            uploading ? "bg-gray-400 cursor-not-allowed" : "bg-black"
          }`}
        >
          {uploading ? "Saving..." : "Save Product"}
        </button>
      </form>
      <StatusModal
        show={modal.show}
        type={modal.type}
        message={modal.message}
        onClose={() => setModal({ ...modal, show: false })}
      />
    </div>
  );
}

AddProductPage.getLayout = (page) => <AdminLayout>{page}</AdminLayout>;

export default AddProductPage;
