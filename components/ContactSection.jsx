"use client";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaBuilding,
  FaIndustry,
  FaUserTie,
} from "react-icons/fa";

export default function ContactSection() {
  return (
    <main className="bg-gradient-to-b from-white via-sky-50/40 to-white">
      {/* ================= Header ================= */}
      <section>
        <div className="max-w-7xl mx-auto px-6 py-24 text-center">
          <span
            className="inline-block px-4 py-2 mb-5 text-sm font-medium tracking-wide
                           text-sky-700 bg-sky-100 rounded-full border border-sky-200"
          >
            Corporate Communication
          </span>

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
          <div className="rounded-2xl overflow-hidden border border-sky-100">
            <iframe
              src="https://www.google.com/maps?q=Printers%20Building%20Dhaka&output=embed"
              className="w-full h-full min-h-[460px] border-0"
              loading="lazy"
            />
          </div>

          {/* Contact Form */}
          <div
            className="bg-white/90 backdrop-blur border border-sky-100
                       p-10 rounded-2xl shadow-[0_10px_40px_rgba(2,132,199,0.08)]"
          >
            <h2 className="text-2xl font-semibold mb-8 text-slate-900">
              Send a Message
            </h2>

            <form className="space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-slate-200 rounded-xl px-5 py-3
                           focus:ring-2 focus:ring-sky-400 outline-none"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-slate-200 rounded-xl px-5 py-3
                           focus:ring-2 focus:ring-sky-400 outline-none"
              />
              <textarea
                rows={5}
                placeholder="Your Message"
                className="w-full border border-slate-200 rounded-xl px-5 py-3
                           focus:ring-2 focus:ring-sky-400 outline-none"
              />

              <button
                type="submit"
                className="bg-sky-600 text-white px-8 py-3 rounded-xl
                           font-medium hover:bg-sky-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
