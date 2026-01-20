import { useState } from "react";
import PrescribingModal from "./PrescribingModal";

export default function ProductInfo({ product }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white border rounded-md sticky top-24">
      <h2 className="bg-blue-400 text-white text-xl font-semibold px-6 py-4">
        {product.name}
      </h2>

      <div className="p-6 space-y-4 text-sm">
        <div>
          <p className="font-semibold text-primary">Generic Name</p>
          <p>{product.generic}</p>
        </div>

        <div>
          <p className="font-semibold text-primary">Therapeutic Class</p>
          <p>{product.therapeuticClass}</p>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded"
        >
          View Prescribing Details
        </button>
      </div>

      {open && (
        <PrescribingModal
          pdf={product.prescribingPdf}
          onClose={() => setOpen(false)}
        />
      )}
    </div>
  );
}
