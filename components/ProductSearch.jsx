import { FaSearch } from "react-icons/fa";

export default function ProductSearch({ value, onChange }) {
  return (
    <div className="max-w-xl mx-auto mb-10">
      <div className="flex items-center bg-primary  hover:bg-secondary border rounded overflow-hidden transition-all transform-gpu duration-500">
        <input
          type="text"
          placeholder="By Brand / Generic / Therapeutic Class"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full px-6 py-4 text-sm outline-none placeholder:text-gray-500"
        />

        <button
          type="button"
          className="px-4 h-full flex items-center justify-center text-white transition"
        >
          <FaSearch className="text-base" />
        </button>
      </div>
    </div>
  );
}
