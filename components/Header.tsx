"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">
          Nexa<span className="text-indigo-600">IT</span>
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-10 text-sm font-medium text-gray-600">
          <a href="#hero" className="hover:text-indigo-600 transition">Home</a>
          <a href="#services" className="hover:text-indigo-600 transition">Services</a>
          <a href="#testimonials" className="hover:text-indigo-600 transition">Reviews</a>
          <a href="#contact" className="hover:text-indigo-600 transition">Contact</a>
        </nav>

        <button className="hidden md:block bg-indigo-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-indigo-700 transition">
          Get a Quote
        </button>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4 text-gray-600 font-medium">
          <a href="#hero" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#services" onClick={() => setIsOpen(false)}>Services</a>
          <a href="#testimonials" onClick={() => setIsOpen(false)}>Reviews</a>
          <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
          <button className="bg-indigo-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full mt-2">
            Get a Quote
          </button>
        </div>
      )}
    </header>
  );
}