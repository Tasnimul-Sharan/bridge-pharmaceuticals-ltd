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
    {
      img: "/gallery/gallery17.jpg",
    },
    {
      img: "/gallery/gallery18.jpg",
    },
    {
      img: "/gallery/gallery19.jpg",
    },
    {
      img: "/gallery/gallery20.jpg",
    },
    {
      img: "/gallery/gallery21.jpg",
    },
    {
      img: "/gallery/gallery22.jpg",
    },
    {
      img: "/gallery/gallery1.jpg",
    },
    {
      img: "/gallery/gallery2.jpg",
    },
    {
      img: "/gallery/gallery3.jpg",
    },
    {
      img: "/gallery/gallery9.jpg",
    },
    {
      img: "/gallery/gallery10.jpg",
    },
    {
      img: "/gallery/gallery11.jpg",
    },
    {
      img: "/gallery/gallery12.jpg",
    },
    {
      img: "/gallery/gallery13.jpg",
    },
    {
      img: "/gallery/gallery14.jpg",
    },
    {
      img: "/gallery/gallery15.jpg",
    },
    {
      img: "/gallery/gallery16.jpg",
    },
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

  // const item = {
  //   hidden: { opacity: 0, y: 50, scale: 0.9 },
  //   show: {
  //     opacity: 1,
  //     y: 0,
  //     scale: 1,
  //     transition: { duration: 0.7, ease: "easeOut" },
  //   },
  // };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="custom-container mx-auto py-16">
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6"
        // variants={container}
        // initial="hidden"
        // whileInView="show"
        // viewport={{ once: true, amount: 0.2 }}
      >
        {gallery.map((itemData, idx) => (
          <motion.div
            key={idx}
            variants={item}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-md group cursor-pointer"
            // onClick={() => router.push(`/gallery/${itemData.slug}`)}
            onClick={() => handleImageClick(idx)}
          >
            <Image
              src={itemData.img}
              alt="Gallery Image"
              width={1200}
              height={1200}
              priority={idx < 4}
              placeholder="blur"
              blurDataURL="/placeholder.jpg"
              sizes="(max-width: 768px) 100vw, 50vw"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
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
          slides={gallery.map((g) => ({ src: g.img, description: g.title }))}
          index={currentIndex}
          plugins={[Thumbnails, Captions, Zoom, Fullscreen, Slideshow]}
          thumbnails={{ position: "bottom" }}
          captions={{ position: "below" }}
          zoom={{ maxZoomPixelRatio: 3, scrollToZoom: true }}
          slideshow={{ autoplay: false }}
        />
      )}
    </div>
  );
}
