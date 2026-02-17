// import { useState } from "react";
// import PrescribingModal from "./PrescribingModal";
// import { generatePrescriptionPdf } from "@/utils/generatePrescriptionPdf";

// export default function ProductInfo({ product }) {
//   const [open, setOpen] = useState(false);

//   return (
//     <div className="bg-white border rounded-md sticky top-24">
//       <h2 className="bg-blue-400 text-white text-xl font-semibold px-6 py-4">
//         {product.name}
//       </h2>

//       <div className="p-6 space-y-4 text-sm">
//         <div>
//           <p className="font-semibold text-primary">Generic Name</p>
//           <p>{product.generic}</p>
//         </div>

//         <div>
//           <p className="font-semibold text-primary">Therapeutic Class</p>
//           <p>{product.therapeuticClass}</p>
//         </div>

//         <button
//           onClick={() => generatePrescriptionPdf(product)}
//           className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded"
//         >
//           View Prescribing Details
//         </button>
//       </div>

//       {open && (
//         <PrescribingModal
//           pdf={product.prescribingPdf}
//           onClose={() => setOpen(false)}
//         />
//       )}
//     </div>
//   );
// }

import { FaFacebookF, FaTwitter, FaWhatsapp, FaFilePdf } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function ProductInfo({ product }) {
  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  return (
    <div className="bg-white border rounded-md sticky top-24 overflow-hidden">
      <h2 className="bg-gradient-to-r from-blue-500 to-blue-600 text-white text-xl font-semibold px-6 py-4">
        {product.name}
      </h2>

      <div className="p-6 space-y-6 text-sm">
        <div className="space-y-1">
          <p className="text-gray-500 uppercase text-xs tracking-wide">
            Generic Name
          </p>
          <p className="font-medium text-gray-800">
            {product.generic || "N/A"}
          </p>
        </div>

        <div className="space-y-1">
          <p className="text-gray-500 uppercase text-xs tracking-wide">
            Therapeutic Class
          </p>
          <p className="font-medium text-gray-800">
            {product.therapeuticClass || "N/A"}
          </p>
        </div>

        <button
          onClick={() => generatePrescriptionPdf(product)}
          className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 transition text-white py-3 rounded-xl font-medium"
        >
          <FaFilePdf />
          View Prescribing Details
        </button>

        {/* Social Share Section */}
        <div className="pt-4 border-t">
          <p className="text-xs uppercase text-gray-500 mb-3 tracking-wide">
            Share this product
          </p>

          <div className="flex gap-3">
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white hover:scale-105 transition"
            >
              <FaFacebookF size={14} />
            </a>

            <a
              href={`https://twitter.com/intent/tweet?url=${currentUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-sky-500 text-white hover:scale-105 transition"
            >
              <FaTwitter size={14} />
            </a>

            <a
              href={`https://api.whatsapp.com/send?text=${currentUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-green-500 text-white hover:scale-105 transition"
            >
              <FaWhatsapp size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
