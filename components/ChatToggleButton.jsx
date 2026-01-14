"use client";

import { motion, AnimatePresence } from "framer-motion";
import { AiFillMessage } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";

export function ChatToggleButton({ open, toggle }) {
  return (
    <motion.button
      onClick={toggle}
      className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center shadow-lg animate-ripple"
    >
      <AnimatePresence mode="wait" initial={false}>
        {open ? (
          <motion.div
            key="close"
            initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.3 }}
          >
            <FaTimes size={26} />
          </motion.div>
        ) : (
          <motion.div
            key="chat"
            initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.3 }}
          >
            <AiFillMessage size={26} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
