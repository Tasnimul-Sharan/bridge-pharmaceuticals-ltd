"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { AiFillCheckCircle } from "react-icons/ai";
import { FiXCircle } from "react-icons/fi";

export default function WhyUsSection() {
  const buttonRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
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
          email: "",
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
  const features = [
    "Resident capacity: 5000",
    "2500 centrally air-conditioned suites",
    "1103 dedicated service professionals",
    "24/7 personalized care",
    "Fitness, and emergency support",
    "Qualified team of doctors, nurses & therapists",
    "Emergency helicopter evacuation",
    "Guest accommodation & visitation",
    "Eco-friendly campus with greenery",
  ];

  return (
    <section className="w-full flex flex-col lg:flex-row relative">
      <div className="relative lg:w-1/2 w-full h-[600px] lg:h-auto">
        <Image
          src="/why-us-baari.jpg"
          alt="Anondo Baari Wellness & Senior Living"
          fill
          className="object-cover"
        />
      </div>

      <div className="lg:w-1/2 w-full bg-primary/90 text-white px-6 lg:px-12 py-20 md:py-36 lg:py-28 relative flex flex-col justify-between">
        {/* <div className="absolute top-0 right-0 w-[250px] h-[250px] opacity-15 pointer-events-none">
          <Image
            src="/images/leaf-bg.png"
            alt="Leaf background"
            fill
            className="object-contain"
          />
        </div> */}

        <div>
          <p className="uppercase font-medium text-sm tracking-widest mb-3">
            Why Choose Us
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold mb-5 leading-snug">
            A Peaceful & Luxurious <br /> Home for Your Golden Years
          </h2>
          <p className="text-white/90 mb-8 leading-relaxed">
            At Anondo Baari, we combine world-class facilities, compassionate
            care, and a serene natural environment to ensure every resident
            enjoys a healthy, joyful, and fulfilling life. With personalized
            wellness programs and vibrant community activities, we make every
            day special.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 text-base">
            {features.map((item, idx) => (
              <p key={idx} className="flex items-center gap-2">
                <FaCheckCircle className="text-white/90 flex-shrink-0" />
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div
        className="absolute left-1/2 transform -translate-x-1/2 lg:bottom-[-70px] md:bottom-[-90px]
  w-[90%] max-w-md lg:max-w-none lg:w-[45%]
  bg-white rounded-xl z-10 px-6 py-8 lg:px-12 lg:py-12
  flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between"
      >
        <p className="text-black text-lg lg:text-xl font-medium text-center lg:text-left">
          Stay updated with{" "}
          <span className="font-semibold text-primary">Anondo Baari</span> news
          & events
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col w-full">
          <div className="flex flex-col lg:flex-row w-full">
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="px-4 py-3 border border-gray-300 rounded-t-lg lg:rounded-l-lg lg:rounded-tr-none focus:outline-none text-black w-full"
            />
            <button
              type="submit"
              ref={buttonRef}
              disabled={loading}
              className="bg-primary px-6 py-3 rounded-b-lg lg:rounded-r-lg lg:rounded-bl-none text-white font-semibold hover:bg-primary/90 transition w-full lg:w-auto"
            >
              {loading ? "Sending..." : "Subscribe"}
            </button>
          </div>

          {status === "success" && (
            <div className="mt-4 flex items-center gap-2 p-3 bg-green-100 border border-green-400 text-green-700 rounded-md transition-all">
              <AiFillCheckCircle className="w-5 h-5" />
              <span>Your message has been sent successfully!</span>
            </div>
          )}

          {status === "error" && (
            <div className="mt-4 flex items-center gap-2 p-3 bg-red-100 border border-red-400 text-red-700 rounded-md transition-all">
              <FiXCircle className="w-5 h-5" />
              <span>Oops! Something went wrong. Please try again.</span>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}