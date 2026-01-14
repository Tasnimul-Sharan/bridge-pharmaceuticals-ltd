"use client";

import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

export default function ServicesDetails({ service }) {
  return (
    <section className="py-12 max-w-6xl mx-auto md:px-0 px-6">
      {/* <div className="relative w-full h-[30rem] mb-8">
        <Image
          src={service.services.image}
          alt={service.services.title}
          fill
          className="object-cover rounded-lg"
        />
      </div> */}
      <div className="relative w-full aspect-[16/10] mb-8">
        <Image
          src={service.services.image}
          alt={service.services.title}
          fill
          className="object-cover rounded-lg"
        />
      </div>

      <div className="mb-12">
        {/* <h2 className="text-3xl font-bold text-secondary mb-4">
          {service.services.title}
        </h2> */}
        <p className="text-gray-600 leading-relaxed mb-6">
          {service.services.description}
        </p>

        <ul className="space-y-3 mb-6 text-gray-700">
          {service.services.checklist.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <FaCheckCircle className="text-primary mt-1" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <blockquote className="italic text-secondary_two md:text-lg text-base border-l-4 border-primary bg-primary/5 p-4 rounded-md pl-4">
          “{service.services.quote}”
        </blockquote>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {service.services.subImages.slice(0, 2).map((img, idx) => (
          <div key={idx} className="relative w-full md:h-[400px] h-12">
            <Image
              src={img}
              alt={service.services.title}
              fill
              className="object-cover rounded-lg w-full h-full"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

// "use client";

// import Image from "next/image";
// import { FaCheckCircle, FaQuoteLeft } from "react-icons/fa";

// export default function ServicesDetails({ service }) {
//   const { title, description, checklist, quote, image, subImages } =
//     service.services;

//   return (
//     <section className="py-6 md:py-16 max-w-7xl mx-auto px-6">
//       <div className="relative w-full aspect-[16/10] overflow-hidden rounded-xl shadow-2xl mb-16">
//         <Image
//           src={image}
//           alt={title}
//           fill
//           className="object-cover transition-transform duration-500 hover:scale-105"
//           priority
//         />
//       </div>

//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
//         <div className="lg:col-span-2">
//           <p className="text-lg text-gray-700 leading-relaxed mb-10 border-l-4 border-primary pl-4">
//             {description}
//           </p>

//           <h3 className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-2">
//             What's Included
//           </h3>
//           <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
//             {checklist.map((item, idx) => (
//               <li
//                 key={idx}
//                 className="flex items-start gap-3 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
//               >
//                 <FaCheckCircle className="text-primary mt-1 flex-shrink-0 text-xl" />
//                 <span className="font-medium">{item}</span>
//               </li>
//             ))}
//           </ul>
//         </div>

//         <aside className="lg:col-span-1">
//           <div className="sticky top-10">
//             {" "}
//             <blockquote className="relative p-8 bg-primary/10 border-l-4 border-primary rounded-xl shadow-lg">
//               <FaQuoteLeft className="absolute top-4 left-4 text-primary/50 text-4xl opacity-50" />
//               <p className="italic text-gray-800 text-xl leading-relaxed mt-6">
//                 “{quote}”
//               </p>
//               <footer className="text-right text-sm text-gray-600 mt-4">
//                 - Client Testimonial
//               </footer>
//             </blockquote>
//           </div>
//         </aside>
//       </div>

//       <hr className="my-16 border-gray-200" />

//       <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
//         Our Work Examples
//       </h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         {subImages.slice(0, 2).map((img, idx) => (
//           <div
//             key={idx}
//             className="relative w-full aspect-video overflow-hidden rounded-xl shadow-xl hover:shadow-2xl transition-all"
//           >
//             <Image
//               src={img}
//               alt={`${title} example ${idx + 1}`}
//               fill
//               className="object-cover transition-transform duration-500 hover:scale-105"
//             />
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
