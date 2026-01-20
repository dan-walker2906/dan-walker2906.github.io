"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { navLinks } from "@/lib/data";
import Link from "next/link";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("About");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 w-full z-50 flex justify-center mt-6 px-4">
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={cn(
          "flex items-center gap-1 p-1 rounded-full transition-all duration-300",
          scrolled ? "glass-card px-6 py-2 shadow-xl" : "bg-transparent"
        )}
      >
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.hash}
            onClick={() => setActiveSection(link.name)}
            className={cn(
              "px-4 py-2 text-sm font-medium transition-colors rounded-full relative",
              activeSection === link.name ? "text-white" : "text-neutral-400 hover:text-white"
            )}
          >
            {link.name}
            {activeSection === link.name && (
              <motion.span 
                layoutId="activeTab"
                className="absolute inset-0 bg-indigo-500/20 rounded-full -z-10 border border-indigo-500/30"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </Link>
        ))}
      </motion.nav>
    </header>
  );
}
