import Image from "next/image";
import { useState } from "react";

export default function ProductGallery({ images }) {
  const [active, setActive] = useState(0);

  return (
    <div className="bg-white border rounded-md p-6">
      <div className="relative h-[420px] mb-6">
        <Image
          src={images[active]}
          alt="product"
          fill
          className="object-contain"
        />
      </div>

      <div className="flex gap-4">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`relative w-24 h-20 border rounded 
              ${active === i ? "border-primary" : "border-gray-200"}`}
          >
            <Image src={img} alt="" fill className="object-contain" />
          </button>
        ))}
      </div>
    </div>
  );
}
