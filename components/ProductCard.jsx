// import Image from "next/image";
// import Link from "next/link";
// import { FaArrowRight } from "react-icons/fa";

// export default function ProductCard({ product }) {
//   return (
//     <div className="bg-white rounded-lg border border-gray-200 hover:shadow-xl hover:shadow-secondary/50 transition-all duration-500 p-8">
//       <div className="relative h-48 mb-6">
//         <Image
//           src={product.images?.[0]}
//           alt={product.name}
//           fill
//           className="object-contain"
//         />
//       </div>
//       <h3 className="text-secondary font-semibold text-base mb-1">
//         {product.name}
//       </h3>
//       <p className="text-gray-500 text-sm mb-5">{product.generic}</p>
//       <Link
//         href={`/products/${product.slug}`}
//         className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:gap-3 transition-all"
//       >
//         View Details
//         <FaArrowRight className="text-xs" />
//       </Link>
//     </div>
//   );
// }

import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function ProductCard({ product }) {
  return (
    <div className="bg-white group rounded-lg border border-gray-200 hover:shadow-xl hover:shadow-secondary/50 hover:border-primary/50 transition-all duration-500 p-8">
      <div className="relative h-48 mb-6">
        {/* Product Type Badge */}
        <span className="absolute top-0 left-0 z-10 bg-primary text-white text-xs px-3 py-1.5 rounded-full">
          {product.type}
        </span>

        <Image
          src={product.images?.[0]}
          alt={product.name}
          fill
          className="object-contain"
        />
      </div>

      <h3 className="text-secondary font-semibold text-base mb-1">
        {product.name}
      </h3>

      <p className="text-gray-500 text-sm mb-2">{product.generic}</p>

      {/* Type (alternative position if needed) */}
      {/* <p className="text-xs text-primary mb-3 font-medium">{product.type}</p> */}

      <Link
        href={`/products/${product.slug}`}
        className="inline-flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all transform duration-500"
      >
        View Details
        <FaArrowRight className="text-xs" />
      </Link>
    </div>
  );
}
