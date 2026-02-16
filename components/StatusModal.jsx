"use client";

import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function StatusModal({ show, type, message, onClose }) {
  const isSuccess = type === "success";

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-sm z-50 px-4"
        >
          <motion.div
            initial={{ scale: 0.85, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.85, opacity: 0, y: 40 }}
            transition={{ duration: 0.25 }}
            className="relative w-full max-w-md rounded-3xl bg-gradient-to-br from-white to-gray-50 shadow-2xl p-8 border border-gray-100"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-black transition"
            >
              ✕
            </button>

            <div className="flex flex-col items-center text-center">
              <div
                className={`flex items-center justify-center h-20 w-20 rounded-full mb-5
                ${
                  isSuccess
                    ? "bg-green-100 text-green-600 shadow-lg shadow-green-200"
                    : "bg-red-100 text-red-600 shadow-lg shadow-red-200"
                }`}
              >
                {isSuccess ? (
                  <FaCheckCircle size={36} />
                ) : (
                  <FaTimesCircle size={36} />
                )}
              </div>
              <h2 className="text-2xl font-bold text-soft_black mb-2">
                {isSuccess ? "Success!" : "Action Failed"}
              </h2>
              <p className="text-gray-600 mb-7 leading-relaxed">{message}</p>
              <button
                onClick={onClose}
                className={`w-full py-3 rounded-xl font-medium text-white transition
                ${
                  isSuccess
                    ? "bg-green-500 hover:bg-green-600 shadow-md shadow-green-200"
                    : "bg-red-500 hover:bg-red-600 shadow-md shadow-red-200"
                }`}
              >
                Continue
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
