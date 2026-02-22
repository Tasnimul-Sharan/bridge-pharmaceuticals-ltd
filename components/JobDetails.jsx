import { MapPin, Briefcase, Calendar } from "lucide-react";
import { useRouter } from "next/router";

export default function JobDetails({ job }) {
  const router = useRouter();

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-5xl mx-auto px-6">
        {/* Card Wrapper */}
        <div className="bg-white rounded-2xl p-8 md:p-12">
          {/* Header Section */}
          <div className="border-b pb-6 mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {job.title}
            </h1>

            <div className="flex flex-wrap gap-6 text-gray-600 text-sm">
              <div className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full">
                <Briefcase size={16} />
                {job.employment_type}
              </div>

              <div className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full">
                <MapPin size={16} />
                {job.location}
              </div>

              {job.deadline && (
                <div className="flex items-center gap-2 bg-red-50 text-red-600 px-3 py-1 rounded-full">
                  <Calendar size={16} />
                  Deadline: {job.deadline}
                </div>
              )}
            </div>
          </div>

          {/* Content Sections */}
          <div className="space-y-10">
            {job.description && (
              <section>
                <h2 className="text-xl font-semibold mb-3 text-gray-800">
                  Job Description
                </h2>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {job.description}
                </p>
              </section>
            )}

            {job.responsibilities && (
              <section>
                <h2 className="text-xl font-semibold mb-3 text-gray-800">
                  Responsibilities
                </h2>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {job.responsibilities}
                </p>
              </section>
            )}

            {job.requirements && (
              <section>
                <h2 className="text-xl font-semibold mb-3 text-gray-800">
                  Requirements
                </h2>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {job.requirements}
                </p>
              </section>
            )}

            {job.salary && (
              <section>
                <h2 className="text-xl font-semibold mb-3 text-gray-800">
                  Salary & Benefits
                </h2>
                <div className="bg-green-50 text-green-700 px-4 py-3 rounded-lg">
                  {job.salary}
                </div>
              </section>
            )}
          </div>

          {/* Apply Button */}
          <div className="mt-12 text-center">
            <button
              onClick={() => router.push(`/career/${job.slug}/apply`)}
              className="bg-primary hover:bg-secondary transition text-white px-10 py-3 rounded-full font-semibold shadow-md"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
