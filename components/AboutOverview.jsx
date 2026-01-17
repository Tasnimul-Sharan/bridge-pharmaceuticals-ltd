// "use client";

// import { fadeUp } from "@/Hooks/animations";
// import { motion } from "framer-motion";

// export default function AboutOverview() {
//   return (
//     <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
//       <motion.div
//         variants={fadeUp}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//       >
//         <h2 className="text-3xl font-bold mb-6">
//           Who We <span className="text-primary">Are</span>
//         </h2>
//         <p className="text-gray-600 leading-relaxed">
//           Established in 2010, Bridge Pharmaceuticals Ltd. is one of
//           Bangladesh’s first companies dedicated exclusively to Animal Health,
//           serving livestock, poultry, aquaculture, and companion animals.
//         </p>
//       </motion.div>

//       <motion.div
//         variants={fadeUp}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         className="bg-white rounded-2xl shadow-xl p-10"
//       >
//         <h3 className="text-xl font-semibold mb-4">Founded By</h3>
//         <ul className="space-y-4 text-gray-700">
//           <li>
//             <strong>Mr. Safar Ali</strong> – Animal Health entrepreneurship &
//             product development
//           </li>
//           <li>
//             <strong>Mr. Kamrul Hassan</strong> – Veterinary sales & distribution
//             strategy
//           </li>
//         </ul>
//       </motion.div>
//     </div>
//   );
// }

"use client";

import { fadeUp } from "@/Hooks/animations";
import { motion } from "framer-motion";
import { FaUserTie } from "react-icons/fa";

export default function AboutOverview() {
  return (
    <section className="relative overflow-hidden bg-gray-50">
      {/* Subtle background accent */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-20 items-center">
        {/* Left Content */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <span className="inline-block mb-3 text-sm font-semibold tracking-widest text-primary uppercase">
            About Company
          </span>

          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
            Who We <span className="text-primary">Are</span>
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
            Established in 2010, <strong>Bridge Pharmaceuticals Ltd.</strong> is
            one of Bangladesh’s pioneering organizations dedicated exclusively
            to Animal Health—serving livestock, poultry, aquaculture, and
            companion animals with quality-driven solutions.
          </p>
        </motion.div>

        {/* Right Card */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative bg-white/80 backdrop-blur-xl rounded-3xl border border-gray-200 shadow-current p-10"
        >
          <h3 className="text-xl font-semibold mb-8 flex items-center gap-3">
            <span className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary">
              <FaUserTie />
            </span>
            Founded By
          </h3>

          <ul className="space-y-6">
            <li className="flex gap-4">
              <span className="w-2 h-2 mt-2 rounded-full bg-primary" />
              <p className="text-gray-700 leading-relaxed">
                <strong className="text-gray-900">Mr. Safar Ali</strong>
                <br />
                <span className="text-sm text-gray-500">
                  Animal Health Entrepreneurship & Product Development
                </span>
              </p>
            </li>

            <li className="flex gap-4">
              <span className="w-2 h-2 mt-2 rounded-full bg-primary" />
              <p className="text-gray-700 leading-relaxed">
                <strong className="text-gray-900">Mr. Kamrul Hassan</strong>
                <br />
                <span className="text-sm text-gray-500">
                  Veterinary Sales & Distribution Strategy
                </span>
              </p>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
