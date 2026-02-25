"use client";

import { useEffect, useState } from "react";
import { supabaseServer } from "@/lib/supabaseServer";
import { MapPin, Briefcase, Calendar } from "lucide-react";
import Link from "next/link";

export default function CareerSection() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    const today = new Date().toISOString().split("T")[0];

    const { data, error } = await supabaseServer
      .from("job_posts")
      .select("*")
      .eq("status", "active")
      .or(`deadline.is.null,deadline.gte.${today}`)
      .order("created_at", { ascending: false });

    if (!error) {
      setJobs(data);
    }

    setLoading(false);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Current Openings
        </h2>

        {loading ? (
          <div className="text-center text-gray-500">Loading jobs...</div>
        ) : jobs.length === 0 ? (
          <div className="text-center text-gray-400">
            No open positions available right now.
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-8">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition border"
              >
                <h3 className="text-xl font-semibold mb-3">{job.title}</h3>

                <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                  {job.employment_type && (
                    <div className="flex items-center gap-1">
                      <Briefcase size={16} />
                      {job.employment_type}
                    </div>
                  )}

                  {job.location && (
                    <div className="flex items-center gap-1">
                      <MapPin size={16} />
                      {job.location}
                    </div>
                  )}

                  {job.deadline && (
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      Deadline: {job.deadline}
                    </div>
                  )}
                </div>

                <p className="text-gray-600 text-sm line-clamp-3 mb-6">
                  {job.description}
                </p>

                <Link
                  href={`/career/${job.slug}`}
                  className="inline-block bg-primary text-white px-6 py-2 rounded-full hover:bg-secondary transition text-sm"
                >
                  View Details
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
