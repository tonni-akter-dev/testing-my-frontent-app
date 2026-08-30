import { FaFacebook, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <h2 className="text-xl font-bold text-white">
          Nexa<span className="text-indigo-500">IT</span>
        </h2>

        <div className="flex gap-6 text-sm">
          <a href="#hero" className="hover:text-white transition">Home</a>
          <a href="#services" className="hover:text-white transition">Services</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>

        <div className="flex gap-4">
          <FaFacebook className="hover:text-white cursor-pointer transition" />
          <FaLinkedin className="hover:text-white cursor-pointer transition" />
          <FaGithub className="hover:text-white cursor-pointer transition" />
          <FaTwitter className="hover:text-white cursor-pointer transition" />
        </div>
      </div>

      <p className="text-center text-xs text-gray-600 mt-8">
        © 2026 NexaIT. All rights reserved.
      </p>
    </footer>
  );
}