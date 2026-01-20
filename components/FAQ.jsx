"use client";

import { useRef, useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { motion } from "framer-motion";
import gsap from "gsap";

export default function FAQ({ faqData }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const answerRefs = useRef([]);

  const toggleFAQ = (index) => {
    if (activeIndex === index) {
      collapse(index);
      setActiveIndex(null);
    } else {
      if (activeIndex !== null) {
        collapse(activeIndex, () => {
          expand(index);
          setActiveIndex(index);
        });
      } else {
        expand(index);
        setActiveIndex(index);
      }
    }
  };

  const expand = (index) => {
    const el = answerRefs.current[index];
    if (!el) return;
    gsap.killTweensOf(el);
    el.style.display = "block";
    gsap.fromTo(
      el,
      { height: 0, opacity: 0 },
      {
        height: el.scrollHeight,
        opacity: 1,
        duration: 0.45,
        ease: "power2.out",
        onComplete: () => (el.style.height = "auto"),
      },
    );
  };

  const collapse = (index, cb) => {
    const el = answerRefs.current[index];
    if (!el) return;
    gsap.killTweensOf(el);
    gsap.to(el, {
      height: 0,
      opacity: 0,
      duration: 0.35,
      ease: "power2.inOut",
      onComplete: () => {
        el.style.display = "none";
        if (cb) cb();
      },
    });
  };

  return (
    <section className="max-w-4xl mx-auto py-20 px-6">
      {/* Section Title */}
      <motion.h2
        className="text-center text-3xl md:text-4xl font-bold mb-14"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        {faqData.title}
      </motion.h2>

      <div className="space-y-6">
        {faqData.faqs.map((faq, index) => {
          const isActive = activeIndex === index;
          return (
            <motion.div
              key={index}
              onClick={() => toggleFAQ(index)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="relative cursor-pointer bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-all transform-gpu duration-500"
            >
              <span
                className={`absolute left-0 top-0 h-full w-1 rounded-l-xl transition-all transform-gpu duration-500 ${
                  isActive ? "bg-primary" : "bg-transparent"
                }`}
              />

              {/* Question Row */}
              <div className="flex items-start gap-4">
                <span className="text-primary font-semibold">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 text-lg">
                    {faq.question}
                  </h3>
                </div>
                {/* <span
                  className={`text-xl transition-transform duration-300 ${
                    isActive ? "rotate-180 text-primary" : "text-gray-400"
                  }`}
                >
                  {isActive ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </span> */}
                <span
                  className={`flex items-center justify-center w-9 h-9 rounded-full transition-all transform-gpu duration-500
    ${isActive ? "bg-primary text-white rotate-180 scale-105" : "bg-primary text-white"}
  `}
                >
                  {isActive ? (
                    <AiOutlineMinus className="text-lg" />
                  ) : (
                    <AiOutlinePlus className="text-lg" />
                  )}
                </span>
              </div>

              {/* Answer */}
              <div
                ref={(el) => (answerRefs.current[index] = el)}
                className="pl-10 pr-4 pt-3 text-gray-600 text-sm leading-relaxed overflow-hidden"
                style={{ height: 0, opacity: 0, display: "none" }}
              >
                {faq.answer}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
