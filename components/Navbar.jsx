"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

export default function Navbar({ hasBackground = false }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef(null);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!navRef.current) return;

    const topbarHeight = 60;

    const handleAnimation = () => {
      const isMobileOrTablet = window.innerWidth < 1024;

      if (isMobileOrTablet) {
        gsap.set(navRef.current, { y: 0 });
      } else {
        gsap.to(navRef.current, {
          y: isScrolled ? 0 : topbarHeight,
          duration: 0.2,
          ease: "power3.inOut",
        });
      }
    };

    handleAnimation();
    window.addEventListener("resize", handleAnimation);

    return () => {
      window.removeEventListener("resize", handleAnimation);
    };
  }, [isScrolled]);

  useEffect(() => {
    const menu = menuRef.current;
    const items = menu?.querySelectorAll("li");

    if (isMenuOpen) {
      gsap.to(menu, {
        width: "100vw",
        height: "100vh",
        opacity: 1,
        duration: 1,
        ease: "power4.out",
      });
      gsap.fromTo(
        items,
        { x: "-100%", opacity: 0 },
        {
          x: "0%",
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power4.out",
        },
      );
    } else {
      gsap.to(menu, {
        width: 0,
        height: 0,
        opacity: 0,
        duration: 0.6,
        ease: "power4.inOut",
      });
    }
  }, [isMenuOpen]);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Location", path: "/location" },
    { name: "Facilities", path: "/facilities" },
    { name: "Services", path: "/services" },
    { name: "Blogs", path: "/blogs" },
    { name: "Contact", path: "/contact" },
  ];

  const isTransparent = !isScrolled;
  // const textColor = isTransparent
  //   ? hasBackground
  //     ? "text-white"
  //     : "text-secondary"
  //   : "text-secondary";

  const textColor = isTransparent ? "text-white" : "text-secondary";

  const navbarClasses = isScrolled ? "bg-white shadow-md" : "bg-white";

  const topbarRef = useRef(null);

  useEffect(() => {
    if (!topbarRef.current) return;

    if (isScrolled) {
      gsap.to(topbarRef.current, {
        y: "-100%",
        duration: 0.3,
        ease: "power3.inOut",
      });
    } else {
      gsap.to(topbarRef.current, {
        y: "0%",
        duration: 0.3,
        ease: "power3.inOut",
      });
    }
  }, [isScrolled]);

  return (
    <header className="w-full">
      {/* <div
        className="hidden lg:block w-full text-base py-6 border-gray-200 bg-primary text-white"
        // className={`fixed top-0 py-6 left-0 w-full z-50 transition-all transform duration-500 ${
        //     isTransparent ? "bg-transparent" : ""
        //   } ${textColor}`}
      > */}
      <div
        // ref={topbarRef}
        className="hidden lg:block fixed top-0 left-0 w-full z-50 bg-primary text-white py-6"
      >
        <div className="custom-container mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 px-4">
          <div className="flex flex-col sm:flex-row sm:gap-6 gap-2 text-center sm:text-left">
            <p className="flex items-center gap-2 justify-center font-normal">
              <FaMapMarkerAlt className="text-primary shrink-0" />
              <span>
                Printers Building, 12-14th Floor, 5 Rajuk Avenue, Motijheel,
                Dhaka
              </span>
            </p>
            <p className="flex items-center gap-2 justify-center font-normal">
              <FaEnvelope className="text-primary shrink-0" />
              <span>hrbplho@gmail.com</span>
            </p>
          </div>

          <div className="flex gap-4 text-secondary z-50">
            <Link href="https://facebook.com" target="_blank">
              <FaFacebookF className="hover:text-secondary cursor-pointer w-5 h-5 transition-all transform duration-500" />
            </Link>
            <Link href="https://twitter.com" target="_blank">
              <FaXTwitter className="hover:text-secondary cursor-pointer w-5 h-5 transition-all transform duration-500" />
            </Link>
            <Link href="https://linkedin.com" target="_blank">
              <FaLinkedinIn className="hover:text-secondary cursor-pointer w-5 h-5 transition-all transform duration-500" />
            </Link>
            <Link href="https://instagram.com" target="_blank">
              <FaInstagram className="hover:text-secondary cursor-pointer w-5 h-5 transition-all transform duration-500" />
            </Link>
          </div>
        </div>
      </div>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 transform-gpu ${navbarClasses}`}
      >
        <div className="custom-container mx-auto h-24 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo/bridge-logo1.jpg"
              alt="Company Logo"
              width={1200}
              height={1200}
              priority
              className="h-24 w-auto object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex gap-8 font-semibold text-secondary">
            {menuItems.map((item, index) => (
              <li key={index} className="relative group">
                <Link
                  href={item.path}
                  className="transition-colors duration-300 hover:text-primary"
                >
                  {item.name}
                </Link>
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden lg:block">
            <Link href="/contact">
              <button className="bg-primary text-white px-6 py-2 rounded-md font-semibold hover:bg-secondary transition">
                Contact Us
              </button>
            </Link>
          </div>

          <button
            className="lg:hidden text-3xl text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
          </button>
        </div>
      </nav>
    </header>
  );
}
