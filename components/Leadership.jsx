// "use client";

// import { fadeUp } from "@/Hooks/animations";
// import { motion } from "framer-motion";

// export default function Leadership() {
//   return (
//     <div className="bg-white py-24">
//       <div className="max-w-7xl mx-auto px-6">
//         <motion.h2
//           variants={fadeUp}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="text-3xl font-bold text-center mb-16"
//         >
//           Leadership <span className="text-primary">Team</span>
//         </motion.h2>

//         <div className="grid md:grid-cols-2 gap-12">
//           {[
//             {
//               name: "Mrs. Farzana Mozammel",
//               role: "Chairperson",
//               desc: "Ensures ethical excellence, governance, and organizational growth.",
//             },
//             {
//               name: "Mr. Gazi Md. Mokammel Hoque",
//               role: "Managing Director",
//               desc: "Driving digital transformation and research-driven innovation since 2023.",
//             },
//           ].map((leader, i) => (
//             <motion.div
//               key={i}
//               variants={fadeUp}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               className="border rounded-2xl p-8 hover:shadow-lg transition"
//             >
//               <h3 className="text-xl font-semibold">{leader.name}</h3>
//               <p className="text-primary font-medium">{leader.role}</p>
//               <p className="mt-4 text-gray-600">{leader.desc}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import { fadeUp } from "@/Hooks/animations";
import { motion } from "framer-motion";

export default function Leadership() {
  return (
    <section className="relative bg-primary/5 py-28">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-6"
        >
          Founders & <span className="text-primary">Leadership</span>
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-gray-600 text-center max-w-3xl mx-auto mb-20"
        >
          Visionary leadership and decades of combined expertise have shaped
          Bridge Pharmaceuticals into a trusted, science-driven Animal Health
          company in Bangladesh.
        </motion.p>

        {/* ================= Founders ================= */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-24"
        >
          <h3 className="text-2xl font-bold mb-10 text-secondary">Founders</h3>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Founder 1 */}
            <div className="border border-gray-200 bg-white rounded-2xl p-8 hover:shadow-xl transition">
              <h4 className="text-xl font-semibold text-secondary">
                Mr. Safar Ali
              </h4>
              <p className="text-primary font-medium mt-1">Co-Founder</p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Pioneer in Animal Health entrepreneurship and product
                development, with a strong focus on scientific formulation and
                industry innovation.
              </p>
            </div>

            {/* Founder 2 */}
            <div className="border border-gray-200 bg-white rounded-2xl p-8 hover:shadow-xl transition">
              <h4 className="text-xl font-semibold text-secondary">
                Mr. Kamrul Hassan
              </h4>
              <p className="text-primary font-medium mt-1">Co-Founder</p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Specialist in Veterinary sales strategy and nationwide
                distribution, instrumental in building Bridge Pharmaceuticals’
                market presence across Bangladesh.
              </p>
            </div>
          </div>

          <p className="mt-10 text-gray-600 max-w-4xl leading-relaxed">
            Their combined expertise laid the foundation for Bridge
            Pharmaceuticals as a trusted, science-driven brand committed to
            quality, affordability, and farmer empowerment.
          </p>
        </motion.div>

        {/* ================= Leadership ================= */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Chairperson */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-gray-50 border border-gray-200 rounded-3xl p-10 hover:shadow-2xl transition"
          >
            <h4 className="text-xl font-semibold text-secondary mb-1">
              Mrs. Farzana Mozammel
            </h4>
            <p className="text-primary font-medium mb-4">Chairperson</p>

            <p className="text-gray-600 leading-relaxed">
              An accomplished business leader with extensive experience in
              organizational growth and governance. She ensures Bridge
              Pharmaceuticals operates with ethical excellence, transparency,
              and social responsibility, with strong emphasis on people,
              culture, and sustainability.
            </p>
          </motion.div>

          {/* Managing Director */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-gray-50 border border-gray-200 rounded-3xl p-10 hover:shadow-2xl transition"
          >
            <h4 className="text-xl font-semibold text-secondary mb-1">
              Mr. Gazi Md. Mokammel Hoque
            </h4>
            <p className="text-primary font-medium mb-1">Managing Director</p>
            <p className="text-sm text-gray-500 mb-4">Appointed 2023</p>

            <p className="text-gray-600 leading-relaxed">
              A transformational leader who introduced modern management
              practices, digital systems, and structured team integration. His
              vision emphasizes research-driven innovation, customer trust, and
              long-term sustainable growth.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
