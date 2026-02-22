"use client";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { supabaseServer } from "@/lib/supabaseServer";
import AdminLayout from "@/components/AdminLayout";
import { FileText, Mail, Phone, Calendar } from "lucide-react";

export default function JobApplications() {
  const router = useRouter();
  const { slug } = router.query;

  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    const fetchApplications = async () => {
      const { data: jobData } = await supabaseServer
        .from("job_posts")
        .select("id")
        .eq("slug", slug)
        .single();

      if (!jobData) {
        setLoading(false);
        return;
      }

      const { data } = await supabaseServer
        .from("job_applications")
        .select("*")
        .eq("job_id", jobData.id)
        .order("created_at", { ascending: false });

      setApplications(data || []);
      setLoading(false);
    };

    fetchApplications();
  }, [slug]);

  if (loading)
    return (
      <div className="py-24 text-center text-gray-500">
        Loading applications...
      </div>
    );

  return (
    <div className="max-w-6xl mx-auto py-20 px-6 space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Job Applications</h1>
          <p className="text-gray-500 mt-1">
            Applications for: <span className="font-medium">{slug}</span>
          </p>
        </div>

        <button
          onClick={() => router.back()}
          className="px-4 py-2 border rounded-lg hover:bg-gray-100 transition"
        >
          Back
        </button>
      </div>

      {/* Empty State */}
      {applications.length === 0 ? (
        <div className="bg-white border rounded-xl p-10 text-center text-gray-400">
          No applications found for this job.
        </div>
      ) : (
        <div className="grid gap-6">
          {applications.map((app) => (
            <div
              key={app.id}
              className="bg-white border border-border_color rounded-2xl p-6 transition"
            >
              {/* Top Section */}
              <div className="flex justify-between items-start flex-wrap gap-4">
                <div>
                  <h2 className="text-xl font-semibold">{app.name}</h2>
                  <div className="mt-2 space-y-1 text-sm text-gray-600">
                    <p className="flex items-center gap-2">
                      <Mail size={14} /> {app.email}
                    </p>
                    <p className="flex items-center gap-2">
                      <Phone size={14} /> {app.phone}
                    </p>
                    <p className="flex items-center gap-2 text-gray-400">
                      <Calendar size={14} />
                      {new Date(app.created_at).toLocaleString()}
                    </p>
                  </div>
                </div>

                {app.cv_url && (
                  <a
                    href={app.cv_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-secondary transition text-sm"
                  >
                    <FileText size={16} />
                    View CV
                  </a>
                )}
              </div>

              {app.message && (
                <div className="mt-6 border-t pt-4">
                  <h3 className="text-sm font-semibold text-gray-500 mb-2">
                    Cover Letter
                  </h3>
                  <p className="text-gray-700 whitespace-pre-line">
                    {app.message}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

JobApplications.getLayout = function getLayout(page) {
  return <AdminLayout title="Job Applications">{page}</AdminLayout>;
};
