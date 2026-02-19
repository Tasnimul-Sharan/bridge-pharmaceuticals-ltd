"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import AdminLayout from "@/components/AdminLayout";
import { supabaseServer } from "@/lib/supabaseServer";
import StatusModal from "@/components/StatusModal";

export default function EditJobPostPage() {
  const router = useRouter();
  const { id } = router.query;

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

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [modal, setModal] = useState({
    show: false,
    type: "success",
    message: "",
  });

  useEffect(() => {
    if (id) fetchJob();
  }, [id]);

  const fetchJob = async () => {
    const { data, error } = await supabaseServer
      .from("job_posts")
      .select("*")
      .eq("id", id)
      .single();

    if (!error && data) {
      setForm({
        ...data,
        deadline: data.deadline ? data.deadline.split("T")[0] : "",
      });
    }

    setLoading(false);
  };

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

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (saving) return;

    try {
      setSaving(true);

      const { error } = await supabaseServer
        .from("job_posts")
        .update(form)
        .eq("id", id);

      if (error) throw error;

      setModal({
        show: true,
        type: "success",
        message: "Job updated successfully!",
      });

      setTimeout(() => {
        router.push("/dashboard/job-post");
      }, 1200);
    } catch (err) {
      setModal({
        show: true,
        type: "error",
        message: err.message || "Something went wrong!",
      });
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <div className="p-10 text-center">Loading...</div>;
  }

  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Edit Job Post</h1>

      <form
        onSubmit={handleUpdate}
        className="space-y-4 bg-white p-6 rounded-xl border border-border_color"
      >
        <input
          name="slug"
          value={form.slug}
          readOnly
          className="border p-2 w-full bg-gray-100 rounded"
        />

        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Job Title"
          className="border p-2 w-full rounded"
        />

        <input
          name="department"
          value={form.department}
          onChange={handleChange}
          placeholder="Department"
          className="border p-2 w-full rounded"
        />

        <input
          name="location"
          value={form.location}
          onChange={handleChange}
          placeholder="Location"
          className="border p-2 w-full rounded"
        />

        <select
          name="employment_type"
          value={form.employment_type}
          onChange={handleChange}
          className="border p-2 w-full rounded"
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
          onChange={handleChange}
          placeholder="Job Description"
          className="border p-2 w-full rounded"
        />

        <textarea
          name="responsibilities"
          value={form.responsibilities}
          onChange={handleChange}
          placeholder="Responsibilities"
          className="border p-2 w-full rounded"
        />

        <textarea
          name="requirements"
          value={form.requirements}
          onChange={handleChange}
          placeholder="Requirements"
          className="border p-2 w-full rounded"
        />

        <input
          name="salary"
          value={form.salary}
          onChange={handleChange}
          placeholder="Salary"
          className="border p-2 w-full rounded"
        />

        <input
          type="date"
          name="deadline"
          value={form.deadline}
          onChange={handleChange}
          className="border p-2 w-full rounded"
        />

        <select
          name="status"
          value={form.status}
          onChange={handleChange}
          className="border p-2 w-full rounded"
        >
          <option value="active">Active</option>
          <option value="closed">Closed</option>
        </select>

        <div className="flex gap-3 pt-4">
          <button
            type="submit"
            disabled={saving}
            className={`px-6 py-2 rounded text-white ${
              saving ? "bg-gray-400" : "bg-primary hover:bg-secondary"
            }`}
          >
            {saving ? "Updating..." : "Update Job"}
          </button>

          <button
            type="button"
            onClick={() => router.push("/dashboard/job-post")}
            className="px-6 py-2 border rounded"
          >
            Cancel
          </button>
        </div>
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

EditJobPostPage.getLayout = function getLayout(page) {
  return <AdminLayout title="Edit Job">{page}</AdminLayout>;
};
