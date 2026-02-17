// "use client";
// import { motion } from "framer-motion";
// import Image from "next/image";

// export default function FacilitiesSection() {
//   const facilities = [
//     {
//       title: "Manufacturing Facility",
//       image: "/images/facility-manufacturing.jpg",
//       desc: "State-of-the-art veterinary pharmaceutical manufacturing unit equipped with modern production lines ensuring safety, precision, and GMP-aligned processes.",
//     },
//     {
//       title: "Quality Control Laboratory",
//       image: "/images/facility-quality.jpg",
//       desc: "Advanced quality assurance and testing laboratories dedicated to product purity, safety validation, and regulatory compliance standards.",
//     },
//     {
//       title: "Research & Development Center",
//       image: "/images/facility-rnd.jpg",
//       desc: "Innovation-driven R&D division focused on formulation development, clinical validation, and future-ready animal healthcare solutions.",
//     },
//     {
//       title: "Distribution & Logistics Hub",
//       image: "/images/facility-logistics.jpg",
//       desc: "Nationwide distribution and supply chain infrastructure ensuring reliable product availability for farmers, veterinarians, and partners across Bangladesh.",
//     },
//   ];

//   return (
//     <section className="py-20 bg-gray-50">
//       <div className="custom-container mx-auto">
//         <div className="text-center mb-14">
//           <h2 className="text-4xl font-bold mb-4">World-Class Facilities</h2>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             Our infrastructure combines advanced technology, scientific
//             precision, and operational excellence to ensure safe and
//             high-quality animal healthcare solutions.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {facilities.map((item, i) => (
//             <motion.div
//               key={i}
//               whileHover={{ y: -8 }}
//               className="bg-white rounded-2xl shadow-lg overflow-hidden"
//             >
//               <div className="relative h-56 w-full">
//                 <Image
//                   src={item.image}
//                   alt={item.title}
//                   fill
//                   className="object-cover"
//                 />
//               </div>

//               <div className="p-6">
//                 <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
//                 <p className="text-gray-600 text-sm leading-relaxed">
//                   {item.desc}
//                 </p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FiCpu } from "react-icons/fi";
import SectionBadge from "@/components/SectionBadge";
import { FaPills } from "react-icons/fa";
// import { FaPills } from "react-icons/fa";

export default function FacilitiesSection() {
  const facilities = [
    {
      title: "Manufacturing Facility",
      image: "/images/facility-manufacturing.jpg",
      desc: "State-of-the-art veterinary pharmaceutical manufacturing unit equipped with modern production lines ensuring safety, precision, and GMP-aligned processes.",
    },
    {
      title: "Quality Control Laboratory",
      image: "/images/facility-quality.jpg",
      desc: "Advanced quality assurance and testing laboratories dedicated to product purity, safety validation, and regulatory compliance standards.",
    },
    {
      title: "Research & Development Center",
      image: "/images/facility-rnd.jpg",
      desc: "Innovation-driven R&D division focused on formulation development, clinical validation, and future-ready animal healthcare solutions.",
    },
    {
      title: "Distribution & Logistics Hub",
      image: "/images/facility-logistics.jpg",
      desc: "Nationwide distribution and supply chain infrastructure ensuring reliable product availability for farmers, veterinarians, and partners across Bangladesh.",
    },
  ];

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="custom-container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-5">
            <SectionBadge icon={FaPills}>Our Infrastructure</SectionBadge>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            World-Class Facilities
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Built on advanced technology, strict quality standards, and
            operational excellence to deliver safe and reliable animal
            healthcare solutions.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {facilities.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl overflow-hidden group border border-border_color"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
