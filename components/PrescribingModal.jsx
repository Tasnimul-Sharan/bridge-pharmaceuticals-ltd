import { FaTimes } from "react-icons/fa";

export default function PrescribingModal({ pdf, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center">
      <div className="bg-white w-full max-w-4xl h-[85vh] rounded-md relative">
        <button onClick={onClose} className="absolute top-4 right-4">
          <FaTimes />
        </button>

        <iframe src={pdf} className="w-full h-full rounded-md" />
      </div>
    </div>
  );
}
