"use client";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { supabaseServer } from "@/lib/supabaseServer";

export default function JobApplications() {
  const router = useRouter();
  const { slug } = router.query;

  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    const fetchApplications = async () => {
      const { data, error } = await supabaseServer
        .from("job_applications")
        .select("*")
        .eq("job_slug", slug)
        .order("created_at", { ascending: false });

      if (!error && data) setApplications(data);
      setLoading(false);
    };

    fetchApplications();
  }, [slug]);

  if (loading) return <div className="py-20 text-center">Loading...</div>;

  if (!applications.length)
    return (
      <div className="py-20 text-center text-gray-500">
        No applications yet.
      </div>
    );

  return (
    <div className="min-h-screen px-6 py-10 bg-gray-50">
      <h1 className="text-3xl font-bold mb-8">Applications for {slug}</h1>

      <div className="space-y-6">
        {applications.map((app) => (
          <div
            key={app.id}
            className="bg-white p-6 rounded-xl shadow-md border border-gray-200"
          >
            <h2 className="text-xl font-semibold mb-2">{app.name}</h2>
            <p className="text-gray-600 mb-1">
              <strong>Email:</strong> {app.email}
            </p>
            <p className="text-gray-600 mb-1">
              <strong>Phone:</strong> {app.phone}
            </p>
            {app.message && (
              <p className="text-gray-700 mb-2">
                <strong>Cover Letter:</strong> {app.message}
              </p>
            )}
            {app.cv_url && (
              <a
                href={app.cv_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                View CV
              </a>
            )}
            <p className="text-gray-400 text-sm mt-2">
              Applied on: {new Date(app.created_at).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
