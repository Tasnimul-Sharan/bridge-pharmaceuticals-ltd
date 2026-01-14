// "use client";
// import { useRef, useState } from "react";
// import { motion } from "framer-motion";
// import { FaRegPaperPlane } from "react-icons/fa";
// import { AiFillCheckCircle } from "react-icons/ai";
// import {
//   FiXCircle,
//   FiMail,
//   FiMapPin,
//   FiPhoneCall,
//   FiCalendar,
// } from "react-icons/fi";

// export default function BookNowSection() {
//   const buttonRef = useRef(null);

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     checkin: "",
//     checkout: "",
//     guests: "",
//     message: "",
//   });
//   const [status, setStatus] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setStatus(null);

//     try {
//       const form = new FormData();
//       Object.entries(formData).forEach(([key, value]) =>
//         form.append(key, value)
//       );

//       const res = await fetch("https://formspree.io/f/xpwlnqjv", {
//         method: "POST",
//         headers: { Accept: "application/json" },
//         body: form,
//       });

//       if (res.ok) {
//         setStatus("success");
//         setFormData({
//           name: "",
//           email: "",
//           phone: "",
//           checkin: "",
//           checkout: "",
//           guests: "",
//           message: "",
//         });
//       } else {
//         throw new Error("Submission failed");
//       }
//     } catch (err) {
//       setStatus("error");
//     } finally {
//       setLoading(false);
//       setTimeout(() => setStatus(null), 6000);
//     }
//   };

//   return (
//     <section className="relative py-20 bg-primary/5">
//       <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
//         {/* Left side (info) */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           viewport={{ once: true }}
//           className="flex flex-col justify-between rounded"
//         >
//           <div>
//             <p className="uppercase text-primary tracking-[0.15em] mb-3 font-medium">
//               Book Your Stay
//             </p>
//             <h2 className="md:text-4xl text-3xl font-bold text-secondary mb-4 leading-snug">
//               Experience comfort & care <br /> at Anondo Baari
//             </h2>
//             <p className="text-gray-500 mb-10 max-w-md">
//               Reserve your room or suite today and enjoy peace, wellness, and
//               happiness in our serene senior living home.
//             </p>
//           </div>

//           <div className="bg-primary/90 rounded-lg p-8 md:pt-16 pt-12 h-full text-white relative overflow-hidden">
//             <div className="space-y-12">
//               <div className="flex items-start gap-4">
//                 <div className="text-white bg-primary p-3 rounded-full text-xl">
//                   <FiMapPin />
//                 </div>
//                 <div>
//                   <h4 className="font-semibold">Our Address</h4>
//                   <p className="text-sm opacity-90">
//                     Anondo Baari, Printers’ Building, 5 RAJUK Avenue, Dilkusha,
//                     Dhaka
//                   </p>
//                 </div>
//               </div>

//               <div className="flex items-start gap-4">
//                 <div className="text-white bg-primary p-3 rounded-full text-xl">
//                   <FiPhoneCall />
//                 </div>
//                 <div>
//                   <h4 className="font-semibold">Call Us</h4>
//                   <p className="text-sm opacity-90">+880 1313775333</p>
//                 </div>
//               </div>

//               <div className="flex items-start gap-4">
//                 <div className="text-white bg-primary p-3 rounded-full text-xl">
//                   <FiMail />
//                 </div>
//                 <div>
//                   <h4 className="font-semibold">Email</h4>
//                   <p className="text-sm opacity-90">info@anondobari.com</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </motion.div>

//         {/* Right side (booking form) */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
//           viewport={{ once: true }}
//           className="bg-white border rounded-lg px-6 py-12 flex flex-col justify-between"
//         >
//           <form onSubmit={handleSubmit} className="space-y-6 flex-1">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div>
//                 <label className="block text-sm font-medium mb-2">
//                   Full Name
//                 </label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   placeholder="Your Name"
//                   className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium mb-2">
//                   Phone Number
//                 </label>
//                 <input
//                   type="text"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   placeholder="+880..."
//                   className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none"
//                   required
//                 />
//               </div>
//             </div>

//             <div>
//               <label className="block text-sm font-medium mb-2">Email</label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 placeholder="Your Email"
//                 className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none"
//                 required
//               />
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div>
//                 <label className="block text-sm font-medium mb-2">
//                   Check-in Date
//                 </label>
//                 <input
//                   type="date"
//                   name="checkin"
//                   value={formData.checkin}
//                   onChange={handleChange}
//                   className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none"
//                   required
//                 />
//               </div>
//               {/* <div>
//                 <label className="block text-sm font-medium mb-2 text-secondary">
//                   Check-in Date
//                 </label>
//                 <div className="relative">
//                   <input
//                     type="date"
//                     name="checkin"
//                     value={formData.checkin}
//                     onChange={handleChange}
//                     className=" w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-[#f99b24]/50 focus:border-[#f99b24] transition duration-300 shadow-sm hover:border-[#f99b24]/70 cursor-pointer"
//                     required
//                   />
//                   <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-[#f99b24]">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="w-5 h-5"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                       strokeWidth="1.8"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         d="M8 7V3m8 4V3m-9 8h10m-9 8h10m-9 8h10m-9-8h10M5 5h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z"
//                       />
//                     </svg>
//                   </div>
//                 </div>
//               </div> */}

//               <div>
//                 <label className="block text-sm font-medium mb-2">
//                   Number of Guests
//                 </label>
//                 <input
//                   type="number"
//                   name="guests"
//                   min="1"
//                   value={formData.guests}
//                   onChange={handleChange}
//                   placeholder="e.g. 2"
//                   className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none"
//                   required
//                 />
//               </div>
//             </div>

//             <div>
//               <label className="block text-sm font-medium mb-2">
//                 Additional Message
//               </label>
//               <textarea
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 placeholder="Any special requests?"
//                 rows={4}
//                 className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none"
//               />
//             </div>

//             <button
//               ref={buttonRef}
//               type="submit"
//               disabled={loading}
//               className="bg-primary hover:bg-primary/80 text-white font-semibold rounded-md px-6 py-3 w-full transition-all transform duration-500 flex items-center justify-center gap-2"
//             >
//               <FiCalendar className="text-lg" />
//               {loading ? "Booking..." : "Book Now"}
//             </button>
//           </form>
//         </motion.div>
//       </div>

//       {/* Status Messages */}
//       {status === "success" && (
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="mt-6 flex items-center gap-2 p-4 bg-green-100 border border-green-400 text-green-700 rounded-md transition-all max-w-2xl mx-auto"
//         >
//           <AiFillCheckCircle className="w-5 h-5" />
//           <span>Your booking request has been sent successfully!</span>
//         </motion.div>
//       )}

//       {status === "error" && (
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="mt-6 flex items-center gap-2 p-4 bg-red-100 border border-red-400 text-red-700 rounded-md transition-all max-w-2xl mx-auto"
//         >
//           <FiXCircle className="w-5 h-5" />
//           <span>Oops! Something went wrong. Please try again.</span>
//         </motion.div>
//       )}
//     </section>
//   );
// }

"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { AiFillCheckCircle } from "react-icons/ai";
import { FiXCircle, FiCalendar } from "react-icons/fi";

export default function BookNowSection() {
  const buttonRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    checkin: "",
    checkout: "",
    guests: "",
    message: "",
  });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const form = new FormData();
      Object.entries(formData).forEach(([key, value]) =>
        form.append(key, value)
      );

      const res = await fetch("https://formspree.io/f/xpwlnqjv", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: form,
      });

      if (res.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          checkin: "",
          checkout: "",
          guests: "",
          message: "",
        });
      } else {
        throw new Error("Submission failed");
      }
    } catch (err) {
      setStatus("error");
    } finally {
      setLoading(false);
      setTimeout(() => setStatus(null), 6000);
    }
  };

  return (
    <section className="relative py-20 bg-primary/5">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 flex flex-col items-center">
        {/* Top heading & intro */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="uppercase text-primary tracking-[0.15em] mb-3 font-medium">
            Book Your Stay
          </p>
          <h2 className="md:text-4xl text-3xl font-bold text-secondary mb-4 leading-snug">
            Experience comfort & care <br /> at Anondo Baari
          </h2>
          <p className="text-gray-500 max-w-md mx-auto">
            Reserve your room or suite today and enjoy peace, wellness, and
            happiness in our serene senior living home.
          </p>
        </motion.div>

        {/* Booking Form */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white border rounded-lg px-6 py-12 w-full shadow-sm"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Phone Number
                </label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+880..."
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Check-in Date
                </label>
                <input
                  type="date"
                  name="checkin"
                  value={formData.checkin}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Number of Guests
                </label>
                <input
                  type="number"
                  name="guests"
                  min="1"
                  value={formData.guests}
                  onChange={handleChange}
                  placeholder="e.g. 2"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Additional Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Any special requests?"
                rows={4}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none"
              />
            </div>

            <button
              ref={buttonRef}
              type="submit"
              disabled={loading}
              className="bg-primary hover:bg-primary/80 text-white font-semibold rounded-md px-6 py-3 w-full transition-all transform duration-500 flex items-center justify-center gap-2"
            >
              <FiCalendar className="text-lg" />
              {loading ? "Booking..." : "Book Now"}
            </button>
          </form>
        </motion.div>

        {/* Status Messages */}
        {status === "success" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 flex items-center gap-2 p-4 bg-green-100 border border-green-400 text-green-700 rounded-md transition-all max-w-2xl mx-auto"
          >
            <AiFillCheckCircle className="w-5 h-5" />
            <span>Your booking request has been sent successfully!</span>
          </motion.div>
        )}

        {status === "error" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 flex items-center gap-2 p-4 bg-red-100 border border-red-400 text-red-700 rounded-md transition-all max-w-2xl mx-auto"
          >
            <FiXCircle className="w-5 h-5" />
            <span>Oops! Something went wrong. Please try again.</span>
          </motion.div>
        )}
      </div>
    </section>
  );
}
