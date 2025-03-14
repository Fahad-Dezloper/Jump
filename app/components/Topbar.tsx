"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const Topbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const nav = [
    { name: "Features", link: "/" },
    { name: "Resources", link: "/" },
    { name: "Contact us", link: "/" },
  ];

  return (
    <div className="flex items-center justify-between px-6 md:py-4  text-white">
      {/* Logo */}
      <Image src="/LOGO.png" alt="Logo" width={160} height={40} priority className="invert" />

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-10 font-primary">
        {nav.map((item, i) => (
          <Link key={i} href={item.link} className="hover:text-gray-300 transition">
            {item.name}
          </Link>
        ))}
      </nav>
      <div className="md:flex hidden w-10 h-10 "></div>
      {/* Mobile Menu Button */}
      <button
        className="md:hidden block p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute top-20 left-0 w-full bg-gray-800 text-white shadow-lg md:hidden"
        >
          <nav className="flex flex-col items-center gap-6 py-4">
            {nav.map((item, i) => (
              <Link
                key={i}
                href={item.link}
                className="block py-2 text-lg hover:text-gray-300 transition"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </motion.div>
      )}
    </div>
  );
};

export default Topbar;
