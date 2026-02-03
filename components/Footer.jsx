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
  FaLink,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-secondary to-secondary/95 text-white">
      {/* Soft background glow */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      {/* ================= Main Footer ================= */}
      <div className="relative custom-container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 py-24">
        {/* -------- Brand -------- */}
        <div>
          <div className="rounded-xl w-40 h-40 flex items-center justify-center mb-6">
            <Image
              src="/logo/bridge-logo.png"
              alt="Bridge Pharmaceuticals Logo"
              width={1200}
              height={1200}
              className="object-contain h-40 w-auto"
            />
          </div>

          <h3 className="text-lg font-semibold mb-3 tracking-wide">
            Bridge Pharmaceuticals Ltd.
          </h3>

          <p className="text-sm text-gray-300 leading-relaxed mb-6">
            One of Bangladesh’s fastest-growing local manufacturers with a
            strong footprint in the Animal Health sector.
          </p>

          <div className="flex gap-3">
            {[FaFacebookF, FaXTwitter, FaLinkedinIn, FaInstagram].map(
              (Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-10 h-10 flex items-center justify-center rounded-full
                             bg-white/10 border border-white/20
                             hover:bg-primary hover:border-primary
                             transition-all duration-300"
                >
                  <Icon />
                </a>
              ),
            )}
          </div>
        </div>

        {/* -------- Quick Links -------- */}
        <div>
          {/* <h3 className="text-lg font-semibold mb-6 relative inline-block">
            Quick Links
            <span className="absolute -bottom-2 left-0 w-10 h-[2px] bg-primary" />
          </h3> */}

          <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
            <span className="w-9 h-9 flex items-center justify-center rounded-full bg-primary/10 text-primary">
              <FaLink />
            </span>
            Quick Links
          </h3>

          <ul className="space-y-4 text-sm text-gray-300">
            {[
              { name: "About Us", href: "/about" },
              { name: "Products", href: "/products" },
              { name: "Research & Development", href: "/research" },
              { name: "Quality Assurance", href: "/quality" },
              { name: "Contact", href: "/contact" },
            ].map(({ name, href }, idx) => (
              <li key={idx}>
                {/* <Link
                  href={href}
                  className="flex items-center gap-2 hover:text-primary transition"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/70" />
                  {name}
                </Link> */}
                <Link
                  href={href}
                  className="flex items-start gap-3 hover:text-primary transition"
                >
                  <span className="w-2 h-2 mt-2 rounded-full bg-primary/70 shrink-0" />
                  <span className="leading-relaxed">{name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* -------- Head Office -------- */}
        <div>
          {/* <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
            <FaBuilding className="text-primary" /> Head Office
          </h3> */}
          <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
            <span className="w-9 h-9 flex items-center justify-center rounded-full bg-primary/10 text-primary">
              <FaBuilding />
            </span>
            Head Office
          </h3>

          <ul className="space-y-5 text-sm text-gray-300">
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-primary w-5 shrink-0 mt-1" />
              <span className="leading-relaxed">
                Printer’s Building (13th Floor),
                <br />
                5 Rajuk Avenue, Motijheel Commercial Area,
                <br />
                Dhaka-1000
              </span>
            </li>

            <li className="flex items-center gap-3">
              {/* <FaPhoneAlt className="text-primary" /> */}
              <FaPhoneAlt className="text-primary w-5 shrink-0" />

              <span>+88 02-41050459, 02-41050457</span>
            </li>

            <li className="flex items-center gap-3">
              {/* <FaEnvelope className="text-primary" /> */}
              <FaEnvelope className="text-primary w-5 shrink-0" />
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
          {/* <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
            <FaIndustry className="text-primary" /> Factory
          </h3> */}
          <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
            <span className="w-9 h-9 flex items-center justify-center rounded-full bg-primary/10 text-primary">
              <FaIndustry />
            </span>
            Factory
          </h3>

          <ul className="space-y-5 text-sm text-gray-300">
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-primary mt-1" />
              <span>
                West Tengra, Sarulia, Demra,
                <br />
                Dhaka, Bangladesh
              </span>
            </li>

            <li className="flex items-start gap-3">
              <FaUserTie className="text-primary w-5 shrink-0 mt-1" />
              <div className="leading-relaxed">
                <p className="font-medium text-white">Head of Marketing</p>
                <p className="text-gray-300">Mobile: 01762627623</p>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <FaUserTie className="text-primary w-5 shrink-0 mt-1" />
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
      <div className="relative border-t border-white/10 py-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()}{" "}
        <span className="text-primary font-medium">
          Bridge Pharmaceuticals Ltd.
        </span>{" "}
        All Rights Reserved.
      </div>
    </footer>
  );
}
