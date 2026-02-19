"use client";
import { useState } from "react";

export default function CareerSection() {
  const [form, setForm] = useState({
    job: "",
    email: "",
    name: "",
    phone: "",
    about: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleFile = (e) => {
    setForm({ ...form, file: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-teal-700 mb-4">
            Career Opportunity
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Join our mission-driven team committed to innovation and excellence
            in the Animal Health sector.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Info Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
              Why Work With Us?
            </h3>
            <ul className="space-y-4 text-gray-600">
              <li>✔ Competitive salary & benefits</li>
              <li>✔ Professional growth opportunities</li>
              <li>✔ Collaborative and innovative culture</li>
              <li>✔ Long-term career development</li>
            </ul>
          </div>

          {/* Right Form Card */}
          <div className="bg-white shadow-xl rounded-2xl p-8 border">
            <form onSubmit={handleSubmit} className="space-y-4">
              <select
                name="job"
                value={form.job}
                onChange={handleChange}
                className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-teal-600 outline-none"
              >
                <option value="">Select Job Position</option>
                <option>Medical Representative</option>
                <option>Marketing Executive</option>
                <option>Production Officer</option>
              </select>

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-teal-600 outline-none"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-teal-600 outline-none"
              />

              <input
                type="text"
                name="phone"
                placeholder="Your Phone"
                value={form.phone}
                onChange={handleChange}
                className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-teal-600 outline-none"
              />

              <textarea
                name="about"
                placeholder="Tell us about yourself"
                value={form.about}
                onChange={handleChange}
                rows="4"
                className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-teal-600 outline-none"
              />

              <input
                type="file"
                onChange={handleFile}
                className="w-full border p-3 rounded-lg bg-gray-50"
              />

              <button
                type="submit"
                className="w-full bg-teal-700 hover:bg-teal-800 transition text-white py-3 rounded-lg font-semibold"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
