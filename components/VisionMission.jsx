// "use client";

// import { fadeUp } from "@/Hooks/animations";
// import { motion } from "framer-motion";

// export default function VisionMission() {
//   return (
//     <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16">
//       <motion.div
//         variants={fadeUp}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//       >
//         <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
//         <p className="text-gray-600 leading-relaxed">
//           To be Bangladesh’s most trusted and innovative animal health company,
//           enhancing animal welfare and food safety.
//         </p>
//       </motion.div>

//       <motion.div
//         variants={fadeUp}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//       >
//         <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
//         <p className="text-gray-600 leading-relaxed">
//           Advancing livestock, poultry, aquaculture, and companion animal
//           sectors with affordable, research-driven solutions.
//         </p>
//       </motion.div>
//     </div>
//   );
// }

"use client";

import { fadeUp } from "@/Hooks/animations";
import { motion } from "framer-motion";
import { FaEye, FaBullseye } from "react-icons/fa";

export default function VisionMission() {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Soft background accents */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16">
        {/* Vision */}
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

          <p className="text-gray-600 text-lg leading-relaxed">
            To be Bangladesh’s most trusted and innovative animal health
            company, strengthening animal welfare and ensuring food safety
            nationwide.
          </p>
        </motion.div>

        {/* Mission */}
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

          <p className="text-gray-600 text-lg leading-relaxed">
            Advancing livestock, poultry, aquaculture, and companion animal
            sectors through affordable, research-driven, and sustainable
            solutions.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
