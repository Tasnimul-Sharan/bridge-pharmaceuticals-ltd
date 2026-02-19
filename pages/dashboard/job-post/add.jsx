import AdminLayout from "@/components/AdminLayout";
import { useState } from "react";
import { supabaseServer } from "@/lib/supabaseServer";
import StatusModal from "@/components/StatusModal";

function AddJobPostPage() {
  const [form, setForm] = useState({
    title: "",
    slug: "",
    department: "",
    location: "",
    employment_type: "",
    description: "",
    responsibilities: "",
    requirements: "",
    salary: "",
    deadline: "",
    status: "active",
  });

  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState({
    show: false,
    type: "success",
    message: "",
  });

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

    if (name === "title") {
      setForm({
        ...form,
        title: value,
        slug: generateSlug(value),
      });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    try {
      setLoading(true);

      // Duplicate check
      const { data: existing } = await supabaseServer
        .from("job_posts")
        .select("id")
        .eq("slug", form.slug)
        .single();

      if (existing) {
        setModal({
          show: true,
          type: "error",
          message: "This job post already exists!",
        });
        setLoading(false);
        return;
      }

      const { error } = await supabaseServer.from("job_posts").insert([form]);

      if (error) throw error;

      setModal({
        show: true,
        type: "success",
        message: "Job post created successfully!",
      });

      // Reset form
      setForm({
        title: "",
        slug: "",
        department: "",
        location: "",
        employment_type: "",
        description: "",
        responsibilities: "",
        requirements: "",
        salary: "",
        deadline: "",
        status: "active",
      });
    } catch (err) {
      setModal({
        show: true,
        type: "error",
        message: err.message || "Something went wrong!",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-xl mb-6 font-semibold">Create Job Post</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="slug"
          value={form.slug}
          readOnly
          placeholder="Slug"
          className="border p-2 w-full bg-gray-100"
        />

        <input
          name="title"
          value={form.title}
          placeholder="Job Title"
          onChange={handleChange}
          className="border p-2 w-full"
        />

        <input
          name="department"
          value={form.department}
          placeholder="Department"
          onChange={handleChange}
          className="border p-2 w-full"
        />

        <input
          name="location"
          value={form.location}
          placeholder="Location"
          onChange={handleChange}
          className="border p-2 w-full"
        />

        <select
          name="employment_type"
          value={form.employment_type}
          onChange={handleChange}
          className="border p-2 w-full"
        >
          <option value="">Select Employment Type</option>
          <option value="Full-time">Full-time</option>
          <option value="Part-time">Part-time</option>
          <option value="Contract">Contract</option>
          <option value="Internship">Internship</option>
        </select>

        <textarea
          name="description"
          value={form.description}
          placeholder="Job Description"
          onChange={handleChange}
          className="border p-2 w-full"
        />

        <textarea
          name="responsibilities"
          value={form.responsibilities}
          placeholder="Responsibilities"
          onChange={handleChange}
          className="border p-2 w-full"
        />

        <textarea
          name="requirements"
          value={form.requirements}
          placeholder="Requirements"
          onChange={handleChange}
          className="border p-2 w-full"
        />

        <input
          name="salary"
          value={form.salary}
          placeholder="Salary (Optional)"
          onChange={handleChange}
          className="border p-2 w-full"
        />

        <input
          type="date"
          name="deadline"
          value={form.deadline}
          onChange={handleChange}
          className="border p-2 w-full"
        />

        <select
          name="status"
          value={form.status}
          onChange={handleChange}
          className="border p-2 w-full"
        >
          <option value="active">Active</option>
          <option value="closed">Closed</option>
        </select>

        <button
          type="submit"
          disabled={loading}
          className={`px-4 py-2 rounded text-white ${
            loading ? "bg-gray-400" : "bg-black"
          }`}
        >
          {loading ? "Saving..." : "Create Job"}
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

AddJobPostPage.getLayout = (page) => <AdminLayout>{page}</AdminLayout>;

export default AddJobPostPage;
