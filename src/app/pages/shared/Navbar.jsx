import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-black text-white border-b border-white shadow-md block w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/">
            <h1 className="text-2xl font-bold hover:text-indigo-600">
              Builder X
            </h1>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <a href="/" className="hover:text-indigo-600 transition">
              Home
            </a>
            <a href="/about" className="hover:text-indigo-600 transition">
              About
            </a>
            <a href="/register" className="hover:text-indigo-600 transition">
              Register
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
        <div className="md:hidden bg-black text-white px-4 py-4 space-y-2">
          <a href="/" className="block hover:text-indigo-600 transition">
            Home
          </a>
          <a href="/about" className="block hover:text-indigo-600 transition">
            About
          </a>
          <a href="/contact" className="block hover:text-indigo-600 transition">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
