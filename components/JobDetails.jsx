import { MapPin, Briefcase, Calendar } from "lucide-react";
import { useRouter } from "next/router";

export default function JobDetails({ job }) {
  const router = useRouter();

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold mb-4">{job.title}</h1>

      {/* Meta Info */}
      <div className="flex flex-wrap gap-6 text-gray-600 mb-10 text-sm">
        <div className="flex items-center gap-2">
          <Briefcase size={18} />
          {job.employment_type}
        </div>

        <div className="flex items-center gap-2">
          <MapPin size={18} />
          {job.location}
        </div>

        {job.deadline && (
          <div className="flex items-center gap-2">
            <Calendar size={18} />
            Deadline: {job.deadline}
          </div>
        )}
      </div>

      {/* Description */}
      {job.description && (
        <div className="mb-10">
          <h2 className="text-xl font-semibold mb-3">Job Description</h2>
          <p className="text-gray-700 whitespace-pre-line leading-relaxed">
            {job.description}
          </p>
        </div>
      )}

      {/* Responsibilities */}
      {job.responsibilities && (
        <div className="mb-10">
          <h2 className="text-xl font-semibold mb-3">Responsibilities</h2>
          <p className="text-gray-700 whitespace-pre-line leading-relaxed">
            {job.responsibilities}
          </p>
        </div>
      )}

      {/* Requirements */}
      {job.requirements && (
        <div className="mb-10">
          <h2 className="text-xl font-semibold mb-3">Requirements</h2>
          <p className="text-gray-700 whitespace-pre-line leading-relaxed">
            {job.requirements}
          </p>
        </div>
      )}

      {/* Salary */}
      {job.salary && (
        <div className="mb-10">
          <h2 className="text-xl font-semibold mb-2">Salary</h2>
          <p className="text-gray-700">{job.salary}</p>
        </div>
      )}

      {/* Apply Button */}
      <div className="mt-12">
        <button
          onClick={() => router.push(`/career/${job.slug}/apply`)}
          className="bg-primary text-white px-8 py-3 rounded-full hover:bg-secondary transition"
        >
          Apply Now
        </button>
      </div>
    </div>
  );
}
