// "use client";

// import { fadeUp } from "@/Hooks/animations";
// import { motion } from "framer-motion";
// import { FaEye, FaBullseye } from "react-icons/fa";

// export default function VisionMission() {
//   return (
//     <section className="relative bg-white overflow-hidden">
//       {/* Soft background accents */}
//       <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
//       <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

//       <div className="relative max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16">
//         {/* Vision */}
//         <motion.div
//           variants={fadeUp}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="bg-gray-50 rounded-3xl p-10 border border-gray-200 hover:shadow-2xl transition"
//         >
//           <div className="flex items-center gap-4 mb-6">
//             <span className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xl">
//               <FaEye />
//             </span>
//             <h3 className="text-2xl font-bold">Our Vision</h3>
//           </div>

//           <p className="text-gray-600 text-lg leading-relaxed">
//             To be Bangladesh’s most trusted and innovative animal health
//             company, strengthening animal welfare and ensuring food safety
//             nationwide.
//           </p>
//         </motion.div>

//         {/* Mission */}
//         <motion.div
//           variants={fadeUp}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="bg-gray-50 rounded-3xl p-10 border border-gray-200 hover:shadow-2xl transition"
//         >
//           <div className="flex items-center gap-4 mb-6">
//             <span className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xl">
//               <FaBullseye />
//             </span>
//             <h3 className="text-2xl font-bold">Our Mission</h3>
//           </div>

//           <p className="text-gray-600 text-lg leading-relaxed">
//             Advancing livestock, poultry, aquaculture, and companion animal
//             sectors through affordable, research-driven, and sustainable
//             solutions.
//           </p>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

"use client";

import { fadeUp } from "@/Hooks/animations";
import { motion } from "framer-motion";
import { FaEye, FaBullseye } from "react-icons/fa";
import { Check } from "lucide-react";

export default function VisionMission() {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Soft background accents */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-0 py-24 grid md:grid-cols-2 gap-16">
        {/* ================= Vision ================= */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-gray-50 rounded-3xl p-10 border border-gray-200 hover:shadow-2xl transition"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xl">
              <FaEye />
            </span>
            <h3 className="text-2xl font-bold">Our Vision</h3>
          </div>

          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            To become Bangladesh’s most trusted and innovative Animal Health
            company, delivering world-class veterinary solutions that:
          </p>

          {/* Vision Highlights */}
          <ul className="space-y-3 mb-8">
            {[
              "Enhance animal welfare",
              "Ensure safe food production",
              "Empower farmers",
              "Contribute to national prosperity",
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-gray-700">
                <span className="mt-1 text-primary">
                  <Check size={18} />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h4 className="text-lg font-semibold mb-4">Our vision reflects:</h4>

          <ul className="space-y-3">
            {[
              "Commitment to excellence",
              "Continuous innovation",
              "National & regional leadership ambition",
              "A belief that animal health drives food safety and economic growth",
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-gray-700">
                <span className="mt-1 text-primary">
                  <Check size={18} />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* ================= Mission ================= */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-gray-50 rounded-3xl p-10 border border-gray-200 hover:shadow-2xl transition"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xl">
              <FaBullseye />
            </span>
            <h3 className="text-2xl font-bold">Our Mission</h3>
          </div>

          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            To advance Bangladesh’s livestock, poultry, aquaculture, and
            companion animal sectors by producing high-quality, affordable, and
            research-driven veterinary solutions.
          </p>

          <h4 className="text-lg font-semibold mb-4">
            Our mission emphasizes:
          </h4>

          <ul className="space-y-4">
            {[
              "Quality Products – No compromise on safety, purity, or efficacy",
              "Service to Farmers & Veterinarians – Training, field-level support, and reliable supply",
              "Innovation & R&D Leadership – First-in-Bangladesh formulations and continuous upgrades",
              "Affordable Access – High-quality solutions at fair prices for all farmers",
              "Ethical Practices – Transparency, responsibility, and respect for society",
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-gray-700">
                <span className="mt-1 text-primary">
                  <Check size={18} />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
