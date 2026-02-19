"use client";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { supabaseServer } from "@/lib/supabaseServer";
import JobDetails from "@/components/JobDetails";
import Head from "next/head";
import HeroSection from "@/components/HeroSection";

export default function JobDetailsPage() {
  const router = useRouter();
  const { slug } = router.query;

  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (slug) fetchJob();
  }, [slug]);

  const fetchJob = async () => {
    const today = new Date().toISOString().split("T")[0];

    const { data, error } = await supabaseServer
      .from("job_posts")
      .select("*")
      .eq("slug", slug)
      .eq("status", "active")
      .or(`deadline.is.null,deadline.gte.${today}`)
      .single();

    if (error || !data) {
      setNotFound(true);
    } else {
      setJob(data);
    }

    setLoading(false);
  };

  if (loading) {
    return <div className="py-20 text-center">Loading...</div>;
  }

  if (notFound || !job) {
    return (
      <div className="py-20 text-center text-gray-500">
        Job not found or no longer available.
      </div>
    );
  }

  const meta = {
    title: `${job.title} | Career`,
    description:
      job.description?.slice(0, 150) || "Join our team at Anondo Baari.",
    keywords:
      "career, job, apply, Anondo Baari, senior wellness, assisted living",
    author: "Anondo Baari",
    url: typeof window !== "undefined" ? window.location.href : "",
    image: "/hero.jpg",
  };

  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
        <meta name="author" content={meta.author} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={meta.url} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>
      <HeroSection
        hero={{
          title: job.title,
          backgroundImage: "/hero.jpg",
        }}
      />
      <JobDetails job={job} />
    </div>
  );
}
