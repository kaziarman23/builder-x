import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gray-900 text-white shadow-md fixed w-full z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/">
            <h1 className="text-2xl font-bold">Folify</h1>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <a href="/" className="hover:text-gray-300 transition">
              Home
            </a>
            <a href="/about" className="hover:text-gray-300 transition">
              About
            </a>
            <a href="/services" className="hover:text-gray-300 transition">
              Services
            </a>
            <a href="/contact" className="hover:text-gray-300 transition">
              Contact
            </a>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="focus:outline-none">
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 px-4 py-4 space-y-2">
          <a href="/" className="block hover:text-white transition">
            Home
          </a>
          <a href="/about" className="block hover:text-white transition">
            About
          </a>
          <a href="/services" className="block hover:text-white transition">
            Services
          </a>
          <a href="/contact" className="block hover:text-white transition">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
