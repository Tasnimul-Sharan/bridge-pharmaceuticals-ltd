import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 hover:shadow-xl hover:shadow-secondary/50 transition-all duration-500 p-8">
      {/* Image */}
      <div className="relative h-48 mb-6">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain"
        />
      </div>

      {/* Title */}
      <h3 className="text-secondary font-semibold text-base mb-1">
        {product.name}
      </h3>

      {/* Generic */}
      <p className="text-gray-500 text-sm mb-5">{product.generic}</p>

      {/* CTA */}
      <Link
        href={`/products/${product.slug}`}
        className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:gap-3 transition-all"
      >
        Find More
        <FaArrowRight className="text-xs" />
      </Link>
    </div>
  );
}
