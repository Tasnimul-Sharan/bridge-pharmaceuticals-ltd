"use client";

export default function ResearchTimeline() {
  const timeline = [
    {
      year: "2010",
      title: "Company Established",
      desc: "Founded with a vision to deliver world-class veterinary solutions in Bangladesh.",
    },
    {
      year: "2015",
      title: "Manufacturing Expansion",
      desc: "Upgraded production capacity with advanced pharmaceutical machinery.",
    },
    {
      year: "2020",
      title: "Modern R&D Lab Launch",
      desc: "Established dedicated research laboratories for formulation and validation.",
    },
    {
      year: "2023",
      title: "Digital Pharma Systems",
      desc: "Implemented structured digital operations and innovation-driven processes.",
    },
  ];

  return (
    <section className="py-28 bg-Secound_primary/5">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-20">
          Research & Innovation Journey
        </h2>

        <div className="relative border-l border-primary/30 pl-11 space-y-16">
          {timeline.map((item, i) => (
              <div key={i} className="relative">
                <div className="absolute -left-14 top-2 w-6 h-6 rounded-full bg-primary shadow-md" />
              {/* Dot */}

              {/* Content */}
              <div>
                <span className="text-primary font-semibold text-sm tracking-widest">
                  {item.year}
                </span>

                <h3 className="text-2xl font-semibold mt-2 mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
