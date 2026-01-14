import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Head from "next/head";

export default function Custom404() {
  const underlineRef = useRef(null);
  const linkRef = useRef(null);

  useEffect(() => {
    const underline = underlineRef.current;
    const link = linkRef.current;

    const handleEnter = () => {
      gsap.to(underline, { width: "100%", duration: 0.4, ease: "power2.out" });
    };
    const handleLeave = () => {
      gsap.to(underline, { width: "0%", duration: 0.4, ease: "power2.out" });
    };

    link.addEventListener("mouseenter", handleEnter);
    link.addEventListener("mouseleave", handleLeave);

    return () => {
      link.removeEventListener("mouseenter", handleEnter);
      link.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <section className="w-full relative">
      <Head>
        <title>404 - Page Not Found | Anondo Baari</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta
          name="description"
          content="The page you are looking for does not exist. Please return to the Anondo Baari homepage."
        />
      </Head>
      {/* <Navbar /> */}
      <div className="min-h-screen flex flex-col items-center justify-center text-center text-black px-4">
        <h1 className="text-5xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-lg mb-6">Sorry, we couldn’t find that page.</p>
        <div className="relative inline-block">
          <Link href="/" legacyBehavior>
            <a
              ref={linkRef}
              className="text-pretty text-xl font-semibold relative z-10"
            >
              ← Back to Home
            </a>
          </Link>
          <span ref={underlineRef} className="hover-line"></span>
        </div>
      </div>
    </section>
  );
}
