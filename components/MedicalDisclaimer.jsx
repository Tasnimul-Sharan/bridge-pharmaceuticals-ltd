"use client";
import { FiAlertCircle } from "react-icons/fi";

export default function MedicalDisclaimer() {
  return (
    <div className="mt-20 relative bg-white border border-gray-200 rounded-xl p-8 overflow-hidden">
      <div className="absolute left-0 top-0 h-full w-1 bg-primary"></div>
      <div className="flex items-start gap-4">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
          <FiAlertCircle />
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-primary mb-2">
            Medical Disclaimer
          </h4>

          <p className="text-gray-600 text-sm leading-relaxed">
            The information provided herein is intended for healthcare
            professionals only. It does not replace medical advice, diagnosis,
            or treatment. Always consult a registered medical practitioner
            before prescribing or using any pharmaceutical product.
          </p>
        </div>
      </div>
    </div>
  );
}
