// "use client";

// import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

// export default function ContactSection() {
//   return (
//     <main className="bg-gray-50">
//       {/* Header */}
//       <section className="">
//         <div className="max-w-7xl mx-auto px-6 py-20 text-center">
//           <h1 className="text-4xl md:text-5xl font-bold">Contact Us</h1>
//           <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
//             Get in touch with us for any queries, support, or business
//             discussion.
//           </p>
//         </div>
//       </section>

//       {/* Contact Info */}
//       <section className="max-w-7xl mx-auto px-6 py-16">
//         <div className="grid md:grid-cols-3 gap-6">
//           {/* Address */}
//           <div className="bg-white p-6 rounded-xl shadow">
//             <FaMapMarkerAlt className="text-primary text-2xl mb-4" />
//             <h3 className="text-lg font-semibold mb-2">Our Location</h3>
//             <p className="text-gray-600 text-sm">
//               Printers Building, Printer's Building Road, Dhaka
//             </p>
//           </div>

//           {/* Phone */}
//           <div className="bg-white p-6 rounded-xl shadow">
//             <FaPhoneAlt className="text-primary text-2xl mb-4" />
//             <h3 className="text-lg font-semibold mb-2">Call Us</h3>
//             <p className="text-gray-600 text-sm">+880 1XXXXXXXXX</p>
//           </div>

//           {/* Email */}
//           <div className="bg-white p-6 rounded-xl shadow">
//             <FaEnvelope className="text-primary text-2xl mb-4" />
//             <h3 className="text-lg font-semibold mb-2">Email</h3>
//             <p className="text-gray-600 text-sm">info@yourdomain.com</p>
//           </div>
//         </div>
//       </section>

//       {/* Form + Map */}
//       <section className="max-w-7xl mx-auto px-6 pb-20">
//         <div className="grid md:grid-cols-2 gap-10">
//           {/* Contact Form */}
//           <div className="bg-white p-8 rounded-xl shadow">
//             <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>

//             <form className="space-y-4">
//               <input
//                 type="text"
//                 placeholder="Your Name"
//                 className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
//               />
//               <input
//                 type="email"
//                 placeholder="Your Email"
//                 className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
//               />
//               <textarea
//                 rows="5"
//                 placeholder="Your Message"
//                 className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
//               ></textarea>

//               <button
//                 type="submit"
//                 className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition"
//               >
//                 Send Message
//               </button>
//             </form>
//           </div>

//           {/* Google Map */}
//           <div className="rounded-xl overflow-hidden shadow">
//             <iframe
//               src="https://www.google.com/maps?q=Printers%20Building%20Dhaka&output=embed"
//               width="100%"
//               height="100%"
//               className="min-h-[420px] border-0"
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//             />
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

"use client";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaBuilding,
  FaIndustry,
  FaUserTie,
} from "react-icons/fa";

export default function ContactSection() {
  return (
    <main className="bg-gray-50">
      {/* ================= Header ================= */}
      <section>
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Contact Us</h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Feel free to reach out to us for business inquiries, support, or
            official communication.
          </p>
        </div>
      </section>

      {/* ================= Office Info ================= */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Head Office */}
          <div className="bg-white p-8 rounded-xl shadow">
            <div className="flex items-center gap-3 mb-4">
              <FaBuilding className="text-primary text-2xl" />
              <h3 className="text-xl font-semibold">Head Office</h3>
            </div>

            <p className="text-gray-600 mb-3">
              Printer’s Building (13th Floor), 5 Rajuk Avenue, Motijheel
              Commercial Area, Dhaka-1000
            </p>

            <p className="flex items-center gap-2 text-gray-600 mb-2">
              <FaPhoneAlt className="text-primary" />
              +88 02-41050459, 02-41050457
            </p>

            <p className="flex items-center gap-2 text-gray-600">
              <FaEnvelope className="text-primary" />
              hrbplho@gmail.com
            </p>
          </div>

          {/* Factory */}
          <div className="bg-white p-8 rounded-xl shadow">
            <div className="flex items-center gap-3 mb-4">
              <FaIndustry className="text-primary text-2xl" />
              <h3 className="text-xl font-semibold">Factory</h3>
            </div>

            <p className="text-gray-600 mb-4">
              West Tengra, Sarulia, Demra, Dhaka, Bangladesh
            </p>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <FaUserTie className="text-primary mt-1" />
                <div>
                  <p className="font-medium">Head of Marketing</p>
                  <p className="text-gray-600 text-sm">Mobile: 01762627623</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FaUserTie className="text-primary mt-1" />
                <div>
                  <p className="font-medium">Head of Procurement & Admin</p>
                  <p className="text-gray-600 text-sm">
                    Tel: +88 02-41050459, 02-41050457
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= Form + Map ================= */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow">
            <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary outline-none"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary outline-none"
              />
              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary outline-none"
              />

              <button
                type="submit"
                className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Google Map */}
          <div className="rounded-xl overflow-hidden shadow">
            <iframe
              src="https://www.google.com/maps?q=Printers%20Building%20Dhaka&output=embed"
              className="w-full h-full min-h-[420px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
