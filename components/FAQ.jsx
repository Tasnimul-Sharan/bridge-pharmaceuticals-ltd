"use client";

import { useRef, useState } from "react";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";
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
    if (el) {
      gsap.killTweensOf(el);
      el.style.display = "block";
      const height = el.scrollHeight;

      gsap.fromTo(
        el,
        { height: 0, opacity: 0 },
        {
          height,
          opacity: 1,
          duration: 0.4,
          ease: "power2.out",
          onComplete: () => {
            el.style.height = "auto";
          },
        }
      );
    }
  };

  const collapse = (index, onComplete) => {
    const el = answerRefs.current[index];
    if (el) {
      gsap.killTweensOf(el);
      gsap.to(el, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power2.inOut",
        onComplete: () => {
          el.style.display = "none";
          if (onComplete) onComplete();
        },
      });
    }
  };

  return (
    <motion.section
      className="max-w-3xl mx-auto py-16 px-4"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      {/* Section Title */}
      <motion.h2
        className="text-center text-3xl font-bold mb-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {faqData.title}
      </motion.h2>

      <div className="space-y-4">
        {faqData.faqs.map((faq, index) => {
          const isActive = activeIndex === index;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => toggleFAQ(index)}
              className={`rounded-md cursor-pointer overflow-hidden transition-colors duration-300 ${
                isActive
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-secondary"
              }`}
            >
              {/* Question Row */}
              <div className="flex items-center justify-between px-4 py-4">
                <span
                  className={`font-semibold w-10 ${
                    isActive ? "text-white" : "text-primary"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="flex-1 font-medium">{faq.question}</span>
                <span
                  className={`text-2xl transition-transform duration-500 ${
                    isActive ? "rotate-180" : "rotate-0 text-primary"
                  }`}
                >
                  {isActive ? (
                    <AiOutlineMinusCircle />
                  ) : (
                    <AiOutlinePlusCircle />
                  )}
                </span>
              </div>

              {/* Answer with expand/collapse animation */}
              {/* <AnimatePresence initial={false}>
                {isActive && (
                  <motion.div
                    key="answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="px-14 pb-4 text-sm overflow-hidden"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence> */}
              <div
                ref={(el) => (answerRefs.current[index] = el)}
                className="px-14 pb-4 text-sm overflow-hidden"
                style={{ height: 0, opacity: 0, display: "none" }}
              >
                {faq.answer}
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}
