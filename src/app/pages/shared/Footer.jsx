import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import toasts from "../../components/Notifications";

function Footer() {
  const { toastInvalidLink } = toasts;

  return (
    <footer className="bg-black text-gray-300 border-t border-white pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top section: Logo + Links */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-start space-y-6 md:space-y-0">
          {/* Logo / Brand with description */}
          <div className="md:w-1/3">
            <div className="text-white text-2xl font-bold hover:text-indigo-600">
              Builder X
            </div>
            <p className="mt-2 text-gray-400">
              Folify is your go-to platform for modern web solutions, creative
              ideas, and innovative designs.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:w-2/3 flex flex-col items-end">
            <div className="flex flex-col md:flex-row gap-6 mb-4 md:mb-0">
              <a href="/" className="hover:text-indigo-600 transition">
                Home
              </a>
              <a href="/about" className="hover:text-indigo-600 transition">
                About
              </a>
              <a href="/services" className="hover:text-indigo-600 transition">
                Services
              </a>
              <a href="/register" className="hover:text-indigo-600 transition">
                Register
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-700 my-6" />

        {/* Bottom section: Copyright + Social Icons */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-gray-500 text-center md:text-left">
            &copy; {new Date().getFullYear()} Folify. All rights reserved.
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
            <button
              onClick={toastInvalidLink}
              className="hover:text-indigo-600 transition cursor-pointer"
            >
              <FaFacebookF />
            </button>
            <button
              onClick={toastInvalidLink}
              className="hover:text-indigo-600 transition cursor-pointer"
            >
              <FaTwitter />
            </button>
            <button
              onClick={toastInvalidLink}
              className="hover:text-indigo-600 transition cursor-pointer"
            >
              <FaInstagram />
            </button>
            <button
              onClick={toastInvalidLink}
              className="hover:text-indigo-600 transition cursor-pointer"
            >
              <FaLinkedinIn />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
