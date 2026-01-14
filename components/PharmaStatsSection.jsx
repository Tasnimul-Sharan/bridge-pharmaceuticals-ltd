"use client";

import { FaPills, FaBookOpen, FaUsers, FaAward } from "react-icons/fa";

const stats = [
  {
    value: "150+",
    label: "Finished Products",
    icon: FaPills,
  },
  {
    value: "50+",
    label: "Journal Articles",
    icon: FaBookOpen,
  },
  {
    value: "20+",
    label: "Research Members",
    icon: FaUsers,
  },
  {
    value: "10+",
    label: "Winning Awards",
    icon: FaAward,
  },
];

export default function PharmaStatsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-sky-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border p-8 flex flex-col items-center hover:shadow-lg transition"
              >
                <div className="w-14 h-14 rounded-full bg-sky-100 flex items-center justify-center mb-4">
                  <Icon size={28} className="text-sky-600" />
                </div>

                <h3 className="text-3xl font-bold text-gray-900">
                  {item.value}
                </h3>
                <p className="mt-2 text-sm text-gray-600">{item.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
