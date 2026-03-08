"use client";
import { useState } from "react";
import Image from "next/image";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/captions.css";
import { FiEye } from "react-icons/fi";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

export default function GalleryPageSection() {
  const router = useRouter();
  const gallery = [
    { img: "/gallery/gallery1.jpg", date: "01 Jan 2026" },
    { img: "/gallery/gallery2.jpg", date: "03 Jan 2026" },
    { img: "/gallery/gallery3.jpg", date: "05 Jan 2026" },
    { img: "/gallery/gallery4.jpg", date: "07 Jan 2026" },
    { img: "/gallery/gallery5.jpg", date: "09 Jan 2026" },
    { img: "/gallery/gallery6.jpg", date: "11 Jan 2026" },
    { img: "/gallery/gallery7.jpg", date: "13 Jan 2026" },
    { img: "/gallery/gallery8.jpg", date: "15 Jan 2026" },
    { img: "/gallery/gallery9.jpg", date: "17 Jan 2026" },
    { img: "/gallery/gallery10.jpg", date: "19 Jan 2026" },
    { img: "/gallery/gallery11.jpg", date: "21 Jan 2026" },
    { img: "/gallery/gallery12.jpg", date: "23 Jan 2026" },
    { img: "/gallery/gallery13.jpg", date: "25 Jan 2026" },
    { img: "/gallery/gallery14.jpg", date: "27 Jan 2026" },
    { img: "/gallery/gallery15.jpg", date: "29 Jan 2026" },
    { img: "/gallery/gallery16.jpg", date: "31 Jan 2026" },
    { img: "/gallery/gallery17.jpg", date: "02 Feb 2026" },
    { img: "/gallery/gallery18.jpg", date: "04 Feb 2026" },
    { img: "/gallery/gallery19.jpg", date: "06 Feb 2026" },
    { img: "/gallery/gallery20.jpg", date: "08 Feb 2026" },
    { img: "/gallery/gallery21.jpg", date: "10 Feb 2026" },
    { img: "/gallery/gallery22.jpg", date: "12 Feb 2026" },
    { img: "/gallery/gallery23.jpg", date: "14 Feb 2026" },
    { img: "/gallery/gallery24.jpg", date: "16 Feb 2026" },
  ];

  const subtitle = "Our Works";
  const title = "Explore Our Gallery";

  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleOpen = (idx) => {
    setCurrentIndex(idx);
    setIsOpen(true);
  };

  const handleImageClick = (idx) => {
    setCurrentIndex(idx);
    setIsOpen(true);
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <div className="custom-container mx-auto py-16">
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {gallery.map((itemData, idx) => (
          <motion.div
            key={idx}
            variants={item}
            className="relative overflow-hidden rounded-md group cursor-pointer"
            // onClick={() => router.push(`/gallery/${itemData.slug}`)}
            onClick={() => handleImageClick(idx)}
          >
            <Image
              src={itemData.img}
              alt={itemData.title}
              width={1200}
              height={1200}
              className="w-full h-full object-cover transition-all transform duration-1000 ease-in group-hover:scale-125"
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 flex items-end justify-center p-4">
              <button
                className="opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0
                transition-all duration-500 ease-out bg-primary text-white px-6 py-4 rounded-md
                flex items-center gap-2"
              >
                <FiEye className="text-lg" />
                See Photo
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>
      {isOpen && (
        <Lightbox
          open={isOpen}
          close={() => setIsOpen(false)}
          index={currentIndex}
          slides={gallery.map((g) => ({
            src: g.img,
            title: `Date: ${g.date}`,
          }))}
          plugins={[Thumbnails, Captions, Zoom, Fullscreen, Slideshow]}
          captions={{ titleTextAlign: "center" }}
          thumbnails={{ position: "bottom", width: 100, height: 70 }}
        />
      )}
    </div>
  );
}
