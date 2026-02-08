// export default function CategoryDropdown({ value, onChange, options = [] }) {
//   return (
//     <div className="text-center mb-6">
//       <select
//         value={value}
//         onChange={(e) => onChange(e.target.value)}
//         className="border px-4 py-2 rounded"
//       >
//         <option value="">All Category</option>

//         {options.map((opt) => (
//           <option key={opt} value={opt}>
//             {opt}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// }

"use client";

import { useEffect, useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa";

export default function CategoryDropdown({ value, onChange, options = [] }) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative max-w-xs mx-auto mb-6">
      {/* Selected */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full border border-border_color bg-white px-4 py-3 rounded-t-lg flex items-center justify-between text-sm transition"
      >
        <span className={`${!value && "text-gray-600"}`}>
          {value || "All Category"}
        </span>

        <FaChevronDown
          className={`text-xs text-secondary transition ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute z-20 w-full bg-white border border-border_color rounded-b-lg max-h-60 overflow-auto">
          <button
            onClick={() => {
              onChange("");
              setOpen(false);
            }}
            className="w-full text-left px-4 py-2 text-sm hover:bg-primary hover:text-white"
          >
            All Category
          </button>

          {options.map((opt) => (
            <button
              key={opt}
              onClick={() => {
                onChange(opt);
                setOpen(false);
              }}
              className="w-full text-left px-4 py-2 text-sm hover:bg-primary hover:text-white"
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
