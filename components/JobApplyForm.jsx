"use client";

import { useState } from "react";
import { useRouter } from "next/router";
import { supabaseServer } from "@/lib/supabaseServer";

export default function JobApplyForm({ slug }) {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [cvFile, setCvFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!cvFile) {
      alert("Please upload your CV");
      return;
    }

    setLoading(true);

    try {
      // 🔥 Convert file to base64
      const base64 = await toBase64(cvFile);

      const uploadRes = await fetch("/api/uploadCv", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ file: base64 }),
      });

      const uploadData = await uploadRes.json();

      if (!uploadData.url) {
        throw new Error("CV upload failed");
      }

      // Get job UUID from slug
      const { data: jobData, error: jobError } = await supabaseServer
        .from("job_posts")
        .select("id")
        .eq("slug", slug)
        .single();

      if (jobError || !jobData) {
        throw new Error("Job not found");
      }

      // Insert application
      const { error: insertError } = await supabaseServer
        .from("job_applications")
        .insert([
          {
            ...form,
            cv_url: uploadData.url,
            job_id: jobData.id,
          },
        ]);

      if (insertError) throw insertError;

      alert("Application submitted successfully!");
      router.push("/career");
    } catch (error) {
      console.error(error);
      alert(error.message || "Something went wrong");
    }

    setLoading(false);
  };

  return (
    <div className="w-full px-4 py-8">
      <div className="w-full max-w-2xl mx-auto bg-white border border-gray-200 rounded-2xl p-8">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Apply for {slug}
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            placeholder="Full Name"
            required
            className="w-full border p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <input
            type="email"
            placeholder="Email"
            required
            className="w-full border p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <input
            type="text"
            placeholder="Phone"
            required
            className="w-full border p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />

          <textarea
            placeholder="Cover Letter"
            rows="5"
            className="w-full border p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />

          <input
            type="file"
            accept=".pdf,.doc,.docx"
            required
            className="w-full"
            onChange={(e) => setCvFile(e.target.files[0])}
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white py-4 text-lg font-semibold rounded-full hover:bg-gray-800 transition"
          >
            {loading ? "Submitting..." : "Submit Application"}
          </button>
        </form>
      </div>
    </div>
  );
}
