"use client";

import { useEffect, useState } from "react";
import { Eye, Pencil, Trash2, Plus } from "lucide-react";
import { useRouter } from "next/router";
import AdminLayout from "@/components/AdminLayout";
import { supabaseServer } from "@/lib/supabaseServer";

const PAGE_SIZE = 10;

export default function JobPostListPage() {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetchJobs();
  }, [page, search]);

  const fetchJobs = async () => {
    setLoading(true);

    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;

    let query = supabaseServer
      .from("job_posts")
      .select("*", { count: "exact" })
      .order("created_at", { ascending: false })
      .range(from, to);

    if (search) {
      query = query.ilike("title", `%${search}%`);
    }

    const { data, error, count } = await query;

    if (!error) {
      setJobs(data);
      setTotal(count);
    }

    setLoading(false);
  };

  const totalPages = Math.ceil(total / PAGE_SIZE);

  const deleteJob = async (id) => {
    if (!confirm("Delete this job permanently?")) return;

    const { error } = await supabaseServer
      .from("job_posts")
      .delete()
      .eq("id", id);

    if (!error) fetchJobs();
  };

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">All Job Posts</h1>

        <button
          onClick={() => router.push("/dashboard/job-post/add")}
          className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-secondary transition"
        >
          <Plus size={18} /> Add Job
        </button>
      </div>

      {/* Search */}
      <div className="bg-white p-4 rounded-xl border border-border_color flex gap-4">
        <input
          type="text"
          placeholder="Search by job title..."
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
            Loading job posts...
          </div>
        ) : (
          <table className="w-full text-sm border border-gray-200 border-collapse bg-primary/10">
            <thead className="bg-primary text-white sticky top-0">
              <tr>
                <th className="p-3 text-left w-12 border border-gray-200">
                  S/L
                </th>
                <th className="p-3 text-left border border-gray-200">Title</th>
                <th className="p-3 text-left border border-gray-200">
                  Department
                </th>
                <th className="p-3 text-left border border-gray-200">
                  Location
                </th>
                <th className="p-3 text-left border border-gray-200">Type</th>
                <th className="p-3 text-left border border-gray-200">Status</th>
                <th className="p-3 text-center w-32 border border-gray-200">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {jobs.map((job, i) => (
                <tr
                  key={job.id}
                  className="even:bg-gray-50 hover:bg-blue-50 transition"
                >
                  <td className="p-3 border border-gray-200">
                    {(page - 1) * PAGE_SIZE + i + 1}
                  </td>

                  <td className="p-3 border border-gray-200 font-medium">
                    {job.title}
                  </td>

                  <td className="p-3 border border-gray-200">
                    {job.department}
                  </td>

                  <td className="p-3 border border-gray-200">{job.location}</td>

                  <td className="p-3 border border-gray-200">
                    {job.employment_type}
                  </td>

                  <td className="p-3 border border-gray-200">
                    <span
                      className={`px-2 py-1 text-xs rounded ${
                        job.status === "active"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {job.status}
                    </span>
                  </td>

                  <td className="p-3 border border-gray-200">
                    <div className="flex justify-center gap-2">
                      <button
                        onClick={() =>
                          router.push(`/dashboard/job-post/view/${job.id}`)
                        }
                        className="bg-emerald-100 p-2 rounded hover:bg-emerald-200"
                      >
                        <Eye size={16} className="text-emerald-600" />
                      </button>

                      <button
                        onClick={() =>
                          router.push(`/dashboard/job-post/edit/${job.id}`)
                        }
                        className="bg-blue-100 p-2 rounded hover:bg-blue-200"
                      >
                        <Pencil size={16} className="text-blue-600" />
                      </button>

                      <button
                        onClick={() => deleteJob(job.id)}
                        className="bg-red-100 p-2 rounded hover:bg-red-200"
                      >
                        <Trash2 size={16} className="text-red-600" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

              {jobs.length === 0 && (
                <tr>
                  <td colSpan="7" className="p-6 text-center text-gray-400">
                    No job posts found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>

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

JobPostListPage.getLayout = function getLayout(page) {
  return <AdminLayout title="Job Posts">{page}</AdminLayout>;
};
