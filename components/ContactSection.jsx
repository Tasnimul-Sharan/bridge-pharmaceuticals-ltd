"use client";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaBuilding,
  FaIndustry,
  FaUserTie,
  FaComments,
  FaBriefcase,
} from "react-icons/fa";
import SectionBadge from "./SectionBadge";
import { useState } from "react";

export default function ContactSection() {
  const [result, setResult] = useState({
    message: "",
    type: "",
  });
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.target);
    formData.append("access_key", "084d004e-4d18-416e-aec2-91ba5ddf1954");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult({
          message: "Message sent successfully. Our team will contact you soon.",
          type: "success",
        });

        event.target.reset();
      } else {
        setResult({
          message: "Something went wrong. Please try again.",
          type: "error",
        });
      }
    } catch (error) {
      setResult({
        message: "Network error. Please try later.",
        type: "error",
      });
    }

    setLoading(false);

    setTimeout(() => {
      setResult({ message: "", type: "" });
    }, 4000);
  };

  return (
    <main className="bg-gradient-to-b from-white via-sky-50/40 to-white">
      {/* ================= Header ================= */}
      <section>
        <div className="max-w-7xl mx-auto px-6 py-24 text-center">
          <div className="flex justify-center mb-4">
            <SectionBadge icon={FaBriefcase} className="mb-0">
              Corporate Communication
            </SectionBadge>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
            Contact Our Offices
          </h1>

          <p className="mt-5 text-slate-600 max-w-2xl mx-auto text-lg">
            Reach out to our corporate, factory, or marketing departments for
            official communication and business inquiries.
          </p>
        </div>
      </section>

      {/* ================= Office Info ================= */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 gap-10">
          {/* Head Office */}
          <div
            className="bg-white/80 backdrop-blur border border-sky-100
                       p-10 rounded-2xl shadow-[0_10px_40px_rgba(2,132,199,0.08)]
                      transition-all transform duration-500"
          >
            <div className="flex items-center gap-4 mb-6">
              <div
                className="w-12 h-12 flex items-center justify-center
                              bg-sky-100 text-sky-600 rounded-xl"
              >
                <FaBuilding />
              </div>
              <h3 className="text-2xl font-semibold text-slate-900">
                Head Office
              </h3>
            </div>

            <p className="text-slate-600 mb-5 leading-relaxed">
              Printer’s Building (13th Floor), 5 Rajuk Avenue, Motijheel
              Commercial Area, Dhaka-1000
            </p>

            <p className="flex items-center gap-3 text-slate-600 mb-3">
              <FaPhoneAlt className="text-sky-600" />
              +88 02-41050459, 02-41050457
            </p>

            <p className="flex items-center gap-3 text-slate-600">
              <FaEnvelope className="text-sky-600" />
              hrbplho@gmail.com
            </p>
          </div>

          {/* Factory */}
          <div
            className="bg-white/80 backdrop-blur border border-sky-100
                       p-10 rounded-2xl shadow-[0_10px_40px_rgba(2,132,199,0.08)]
                       transition-all transform duration-500"
          >
            <div className="flex items-center gap-4 mb-6">
              <div
                className="w-12 h-12 flex items-center justify-center
                              bg-sky-100 text-sky-600 rounded-xl"
              >
                <FaIndustry />
              </div>
              <h3 className="text-2xl font-semibold text-slate-900">
                Manufacturing Facility
              </h3>
            </div>

            <p className="text-slate-600 mb-6 leading-relaxed">
              West Tengra, Sarulia, Demra, Dhaka, Bangladesh
            </p>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 flex items-center justify-center
                                bg-sky-50 text-sky-600 rounded-lg"
                >
                  <FaUserTie />
                </div>
                <div>
                  <p className="font-medium text-slate-900">
                    Head of Marketing
                  </p>
                  <p className="text-slate-600 text-sm">Mobile: 01762627623</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 flex items-center justify-center
                                bg-sky-50 text-sky-600 rounded-lg"
                >
                  <FaUserTie />
                </div>
                <div>
                  <p className="font-medium text-slate-900">
                    Head of Procurement & Admin
                  </p>
                  <p className="text-slate-600 text-sm">
                    Tel: +88 02-41050459, 02-41050457
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= Form + Map ================= */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Map */}
          <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm h-[600px]">
            <iframe
              src="https://www.google.com/maps?q=Printer's%20Building%20Motijheel%20Dhaka&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Contact Form */}
          <div
            className="bg-white/90 backdrop-blur border border-sky-100
                       p-10 rounded-2xl shadow-[0_10px_40px_rgba(2,132,199,0.08)]"
          >
            <h2 className="text-2xl font-semibold mb-8 text-slate-900">
              Connect With Us
            </h2>

            <form onSubmit={onSubmit} className="space-y-5">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full border border-slate-200 rounded-lg px-6 py-3 outline-none"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full border border-slate-200 rounded-lg px-6 py-3 outline-none"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Your Phone Number"
                className="w-full border border-slate-200 rounded-lg px-6 py-3 outline-none"
              />

              <textarea
                rows={5}
                name="message"
                placeholder="Your Message"
                required
                className="w-full border border-slate-200 rounded-lg px-6 py-3 outline-none"
              />

              <button
                type="submit"
                disabled={loading}
                className="bg-sky-600 text-white px-8 py-3 rounded-lg font-medium 
  hover:bg-sky-700 transition w-full flex items-center justify-center gap-2"
              >
                {loading && (
                  <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                )}

                {loading ? "Sending..." : "Send Message"}
              </button>

              {/* Result Message */}
              {result.message && (
                <div
                  className={`mt-4 text-sm text-center px-4 py-3 rounded-lg
      ${
        result.type === "success"
          ? "bg-green-50 text-green-700 border border-green-200"
          : "bg-red-50 text-red-700 border border-red-200"
      }`}
                >
                  {result.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
