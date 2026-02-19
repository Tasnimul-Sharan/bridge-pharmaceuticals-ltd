// "use client";
// import CareerSection from "@/components/CareerSection";
// import FacilitiesSection from "@/components/FacilitiesSection";
// import GMPHighlight from "@/components/GMPHighlight";
// import HeroSection from "@/components/HeroSection";
// import QualityFacilities from "@/components/QualityFacilities";
// import RDShowcase from "@/components/RDShowcase";
// import ResearchTimeline from "@/components/ResearchTimeline";
// import Head from "next/head";
// export default function CareerPage() {
//   const meta = {
//     title:
//       "Career | Anondo Baari - Senior Wellness & Assisted Living in Bangladesh",
//     description:
//       "Discover world-class accommodation at Anondo Baari in Purbachal, Dhaka. Choose from premium suites, assisted living residences, and recovery stays designed for comfort, safety, and community living.",
//     keywords:
//       "Anondo Baari accommodation, senior living Bangladesh, assisted living suites, elderly care Dhaka, retirement home accommodation, Purbachal senior wellness, recovery stays Bangladesh, premium senior suites",
//     author: "Anondo Baari",
//     url: "https://www.anondobari.com/accommodation",
//     image: "https://www.anondobari.com/accommodation/accommodation-og.jpg",
//   };

//   return (
//     <div className="w-full relative">
//       <Head>
//         <title>{meta.title}</title>
//         <meta name="description" content={meta.description} />
//         <meta name="keywords" content={meta.keywords} />
//         <meta name="author" content={meta.author} />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//         <meta property="og:title" content={meta.title} />
//         <meta property="og:description" content={meta.description} />
//         <meta property="og:type" content="website" />
//         <meta property="og:url" content={meta.url} />
//         <meta property="og:image" content={meta.image} />
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta name="twitter:title" content={meta.title} />
//         <meta name="twitter:description" content={meta.description} />
//         <meta name="twitter:image" content={meta.image} />
//       </Head>
//       <HeroSection
//         hero={{
//           title: "Our Facilities",
//           backgroundImage: "/accommodation-bg.jpg",
//         }}
//       />
//       <CareerSection />
//     </div>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import { supabaseServer } from "@/lib/supabaseServer";
import HeroSection from "@/components/HeroSection";
import Head from "next/head";
import { MapPin, Briefcase, Calendar } from "lucide-react";

export default function CareerPage() {
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
    <div className="w-full relative">
      <Head>
        <title>Career | Anondo Baari</title>
      </Head>

      <HeroSection
        hero={{
          title: "Join Our Team",
          backgroundImage: "/career-bg.jpg",
        }}
      />

      {/* Job Section */}
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
                    <div className="flex items-center gap-1">
                      <Briefcase size={16} />
                      {job.employment_type}
                    </div>

                    <div className="flex items-center gap-1">
                      <MapPin size={16} />
                      {job.location}
                    </div>

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

                  <button
                    onClick={() =>
                      (window.location.href = `/career/${job.slug}`)
                    }
                    className="bg-primary text-white px-6 py-2 rounded-full hover:bg-secondary transition text-sm"
                  >
                    View Details
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
