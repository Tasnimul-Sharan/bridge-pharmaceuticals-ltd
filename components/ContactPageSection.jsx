"use client";

import { FaBuilding, FaIndustry, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function ContactPageSection() {
  return (
    <main className="bg-white">
      {/* Top Content */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        {/* Head Office + Factory */}
        <div className="grid md:grid-cols-2 gap-10 mb-16">
          {/* Head Office */}
          <div className="bg-gray-50 p-8 border">
            <FaBuilding className="text-secondary text-3xl mb-4" />
            <h3 className="text-lg font-semibold mb-3">Head Office</h3>
            <p className="text-sm text-gray-700 leading-6">
              Printer’s Building (13th Floor), 5 Rajuk Avenue,
              <br />
              Motijheel Commercial Area, Dhaka-1000
            </p>

            <p className="text-sm mt-4 flex items-center gap-2">
              <FaPhoneAlt className="text-Secound_primary" />
              +88 02-41050459, 02-41050457
            </p>

            <p className="text-sm flex items-center gap-2 mt-1">
              <FaEnvelope className="text-primary" /> hrbplho@gmail.com
            </p>
          </div>

          {/* Factory */}
          <div className="bg-gray-50 p-8 border">
            <FaIndustry className="text-secondary text-3xl mb-4" />
            <h3 className="text-lg font-semibold mb-3">Factory</h3>
            <p className="text-sm text-gray-700 leading-6">
              West Tengra, Sarulia, Demra,
              <br />
              Dhaka, Bangladesh
            </p>

            <p className="text-sm mt-4 flex items-center gap-2">
              <FaPhoneAlt className="text-Secound_primary" />
              +88 02-41050459, 02-41050457
            </p>

            <div className="text-sm space-y-1 mt-2">
              <p className="flex items-center gap-2">
                <FaEnvelope className="text-primary" />
                hrbplho@gmail.com
              </p>
              <p className="flex items-center gap-2">
                <FaEnvelope className="text-primary" />
                info@bridgepharmabd.com
              </p>
              <p className="flex items-center gap-2">
                <FaEnvelope className="text-primary" />
                sales@bridgepharmabd.com
              </p>
            </div>
          </div>
        </div>

        {/* Form + Distribution Centers */}
        <div className="grid md:grid-cols-[2fr_1fr] gap-12">
          {/* Contact Form */}
          <div>
            <form className="space-y-6">
              {["Your Name", "Your Email", "Your Phone", "Subject"].map(
                (label) => (
                  <div key={label}>
                    <label className="block text-sm mb-2">{label}</label>
                    <input
                      type="text"
                      className="w-full border border-sky-400 px-4 py-3 focus:outline-none"
                    />
                  </div>
                )
              )}

              <div>
                <label className="block text-sm mb-2">Your Message</label>
                <textarea
                  rows="6"
                  className="w-full border border-sky-400 px-4 py-3 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="bg-primary text-white px-8 py-3 text-sm font-medium"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Distribution Centers */}
          <div>
            <h3 className="text-xl font-semibold text-sky-700 mb-6">
              Distribution Centers
            </h3>

            <div className="space-y-6 text-base text-gray-700">
              <Depot
                title="Dhaka Depot"
                address="West Tengra, Sarulia, Demra, Dhaka, Bangladesh"
                phone="01762627618"
                email="tonmaybplho@gmail.com"
              />
              <Depot
                title="Jashore Depot"
                address="Mission para, DC Banglo Road, Kotwali, Jashore"
                phone="01762627619"
                email="jessorebpldepot@gmail.com"
              />
              <Depot
                title="Bogura Depot"
                address="Housing state, House #5, Road 32, Nishirdhara, Uposohor, Bogura"
                phone="01762627622"
                email="bogurabpldepot@gmail.com"
              />
              <Depot
                title="Rangpur Depot"
                address="C.O Bazar Road, Hazipara, Rangpur"
                phone="01762627616"
                email="rangpurbpldepot@gmail.com"
              />
              <Depot
                title="Mymensingh Depot"
                address="Dhaka Bypass Road (Hridoy More), Mymensingh"
                phone="01762627614"
                email="mymensinghbpldepot@gmail.com"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function Depot({ title, address, phone, email }) {
  return (
    <div>
      <h4 className="font-semibold mb-1">{title}</h4>
      <p>Address: {address}</p>
      <p>Mobile: {phone}</p>
      <p>Email: {email}</p>
    </div>
  );
}
