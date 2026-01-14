// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";
// import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

// export default function Footer() {
//   return (
//     <footer className="bg-secondary text-white">
//       {/* Main Footer */}
//       <div className="custom-container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-20">
//         {/* -------- Brand -------- */}
//         <div>
//           <div className="bg-white rounded-lg w-52 h-28 flex items-center justify-center mb-6">
//             <Image
//               src="/logo/bridge-logo1.jpg"
//               alt="Bridge Pharmaceuticals Logo"
//               width={200}
//               height={200}
//               className="object-contain h-16 w-auto"
//             />
//           </div>

//           <h3 className="text-lg font-semibold mb-3">
//             Bridge Pharmaceuticals Ltd.
//           </h3>

//           <p className="text-sm text-gray-300 leading-relaxed mb-6">
//             Bridge Pharmaceuticals Limited inherits a long track record of a
//             solid reputation as one of the renowned and fastest-growing locally
//             manufactured companies with a strong footprint in the Animal Health
//             Sector.
//           </p>

//           <div className="flex gap-3">
//             {[
//               { Icon: FaFacebookF, link: "#" },
//               { Icon: FaXTwitter, link: "#" },
//               { Icon: FaLinkedinIn, link: "#" },
//               { Icon: FaInstagram, link: "#" },
//             ].map(({ Icon, link }, idx) => (
//               <a
//                 key={idx}
//                 href={link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="bg-primary p-3 rounded-full hover:bg-white hover:text-primary transition-all duration-300"
//               >
//                 <Icon />
//               </a>
//             ))}
//           </div>
//         </div>

//         {/* -------- Quick Links -------- */}
//         <div>
//           <h3 className="text-lg font-semibold mb-5">Quick Link</h3>
//           <ul className="space-y-3 text-sm text-gray-300">
//             {[
//               { name: "About Us", href: "/about" },
//               { name: "Products", href: "/products" },
//               { name: "Research & Development", href: "/research" },
//               { name: "Quality Assurance", href: "/quality" },
//               { name: "Contact", href: "/contact" },
//             ].map(({ name, href }, idx) => (
//               <li key={idx}>
//                 <Link href={href} className="relative group inline-block">
//                   <span className="hover:text-primary transition">{name}</span>
//                   {/* hover underline (kept as requested) */}
//                   <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* -------- Resources -------- */}
//         <div>
//           <h3 className="text-lg font-semibold mb-5">Resources</h3>
//           <ul className="space-y-4 text-sm text-gray-300">
//             <li>
//               <Link href="#" className="hover:text-primary transition">
//                 Manufacturing Standards
//                 <span className="block text-xs text-gray-400 mt-1">
//                   GMP & Regulatory Compliance
//                 </span>
//               </Link>
//             </li>
//             <li>
//               <Link href="#" className="hover:text-primary transition">
//                 Animal Health Solutions
//                 <span className="block text-xs text-gray-400 mt-1">
//                   Trusted Veterinary Products
//                 </span>
//               </Link>
//             </li>
//           </ul>
//         </div>

//         {/* -------- Contact -------- */}
//         <div>
//           <h3 className="text-lg font-semibold mb-5">Contact</h3>
//           <ul className="space-y-4 text-sm text-gray-300">
//             <li className="flex items-start gap-3">
//               <FaMapMarkerAlt className="text-primary mt-1" />
//               <span>
//                 Printers Building, 12–14th Floor,
//                 <br />5 Rajuk Avenue, Motijheel, Dhaka
//               </span>
//             </li>

//             <li className="flex items-center gap-3">
//               <FaPhoneAlt className="text-primary" />
//               <a
//                 href="tel:+8801313775333"
//                 className="hover:text-primary transition"
//               >
//                 +880 1313 775333
//               </a>
//             </li>

//             <li className="flex items-center gap-3">
//               <FaEnvelope className="text-primary" />
//               <a
//                 href="mailto:info@bridgepharma.com"
//                 className="hover:text-primary transition"
//               >
//                 info@bridgepharma.com
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>

//       {/* -------- Bottom Bar -------- */}
//       <div className="border-t border-white/10 py-6 text-center text-sm text-gray-400">
//         © {new Date().getFullYear()}{" "}
//         <span className="text-primary font-medium">
//           Bridge Pharmaceuticals Ltd.
//         </span>{" "}
//         — All Rights Reserved.
//       </div>
//     </footer>
//   );
// }

"use client";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaBuilding,
  FaIndustry,
  FaUserTie,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-secondary text-white">
      {/* ================= Main Footer ================= */}
      <div className="custom-container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-20">
        {/* -------- Brand -------- */}
        <div>
          <div className="bg-white rounded-lg w-52 h-28 flex items-center justify-center mb-6">
            <Image
              src="/logo/bridge-logo1.jpg"
              alt="Bridge Pharmaceuticals Logo"
              width={200}
              height={200}
              className="object-contain h-16 w-auto"
            />
          </div>

          <h3 className="text-lg font-semibold mb-3">
            Bridge Pharmaceuticals Ltd.
          </h3>

          <p className="text-sm text-gray-300 leading-relaxed mb-6">
            Bridge Pharmaceuticals Limited is one of the fastest-growing local
            manufacturers with a strong footprint in the Animal Health sector.
          </p>

          <div className="flex gap-3">
            {[FaFacebookF, FaXTwitter, FaLinkedinIn, FaInstagram].map(
              (Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="bg-primary p-3 rounded-full hover:bg-white hover:text-primary transition"
                >
                  <Icon />
                </a>
              )
            )}
          </div>
        </div>

        {/* -------- Quick Links -------- */}
        <div>
          <h3 className="text-lg font-semibold mb-5">Quick Links</h3>
          <ul className="space-y-3 text-sm text-gray-300">
            {[
              { name: "About Us", href: "/about" },
              { name: "Products", href: "/products" },
              { name: "Research & Development", href: "/research" },
              { name: "Quality Assurance", href: "/quality" },
              { name: "Contact", href: "/contact" },
            ].map(({ name, href }, idx) => (
              <li key={idx}>
                <Link href={href} className="group relative inline-block">
                  <span className="hover:text-primary transition">{name}</span>
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* -------- Head Office -------- */}
        <div>
          <h3 className="text-lg font-semibold mb-5 flex items-center gap-2">
            <FaBuilding className="text-primary" /> Head Office
          </h3>

          <ul className="space-y-4 text-sm text-gray-300">
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-primary mt-1" />
              <span>
                Printer’s Building (13th Floor),
                <br />
                5 Rajuk Avenue, Motijheel Commercial Area,
                <br />
                Dhaka-1000
              </span>
            </li>

            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-primary" />
              <span>+88 02-41050459, 02-41050457</span>
            </li>

            <li className="flex items-center gap-3">
              <FaEnvelope className="text-primary" />
              <a
                href="mailto:hrbplho@gmail.com"
                className="hover:text-primary transition"
              >
                hrbplho@gmail.com
              </a>
            </li>
          </ul>
        </div>

        {/* -------- Factory -------- */}
        <div>
          <h3 className="text-lg font-semibold mb-5 flex items-center gap-2">
            <FaIndustry className="text-primary" /> Factory
          </h3>

          <ul className="space-y-4 text-sm text-gray-300">
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-primary mt-1" />
              <span>
                West Tengra, Sarulia, Demra,
                <br />
                Dhaka, Bangladesh
              </span>
            </li>

            <li className="flex items-start gap-3">
              <FaUserTie className="text-primary mt-1" />
              <div>
                <p className="font-medium text-white">Head of Marketing</p>
                <p className="text-gray-300">Mobile: 01762627623</p>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <FaUserTie className="text-primary mt-1" />
              <div>
                <p className="font-medium text-white">
                  Head of Procurement & Admin
                </p>
                <p className="text-gray-300">
                  Tel: +88 02-41050459, 02-41050457
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* ================= Bottom Bar ================= */}
      <div className="border-t border-white/10 py-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()}{" "}
        <span className="text-primary font-medium">
          Bridge Pharmaceuticals Ltd.
        </span>{" "}
        — All Rights Reserved.
      </div>
    </footer>
  );
}
