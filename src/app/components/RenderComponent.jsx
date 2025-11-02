import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function RenderComponent({ type }) {
  const [isOpen, setIsOpen] = useState(false);
  switch (type) {
    case "Navbar": {
      const toggleMenu = () => setIsOpen((prev) => !prev);

      return (
        <nav className="bg-blue-500 shadow-md rounded-md w-full">
          <div className="flex justify-between items-center p-4">
            <div className="font-bold text-xl text-white truncate">
              Builder X
            </div>

            {/* Desktop menu */}
            <ul className="hidden lg:flex space-x-6 text-white font-medium text-sm">
              <li className="hover:text-black cursor-pointer truncate">Home</li>
              <li className="hover:text-black cursor-pointer truncate">
                Courses
              </li>
              <li className="hover:text-black cursor-pointer truncate">
                About
              </li>
              <li className="hover:text-black cursor-pointer truncate">
                Register
              </li>
            </ul>

            {/* Hamburger button */}
            <div className="lg:hidden">
              <button
                onClick={toggleMenu}
                className="text-white focus:outline-none"
              >
                {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {isOpen && (
            <ul className="flex flex-col space-y-2 px-4 pb-4 text-white font-medium lg:hidden text-sm">
              <li className="hover:text-black cursor-pointer truncate">Home</li>
              <li className="hover:text-black cursor-pointer truncate">
                Courses
              </li>
              <li className="hover:text-black cursor-pointer truncate">
                About
              </li>
              <li className="hover:text-black cursor-pointer truncate">
                Register
              </li>
            </ul>
          )}
        </nav>
      );
    }

    case "Hero":
      return (
        <section className="relative p-2 sm:p-4 md:p-6 rounded-lg text-black bg-white shadow-lg flex flex-col justify-center items-start space-y-2 sm:space-y-3 w-full">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold leading-snug truncate">
            Build Your Platform Easily
          </h1>
          <p className="text-xs sm:text-sm md:text-base max-w-full sm:max-w-xs truncate">
            Drag and drop components to design your custom online marketplace or
            course platform without coding.
          </p>
          <button className="px-2 sm:px-3 py-1 sm:py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600 cursor-pointer text-xs sm:text-sm">
            Get Started
          </button>
        </section>
      );

    case "Banner":
      return (
        <div className="p-2 sm:p-4 bg-blue-500 text-white rounded-md shadow-md flex flex-col sm:flex-row justify-between items-center space-y-1 sm:space-y-0 w-full">
          <span className="font-semibold text-xs sm:text-sm truncate">
            Special Offer: 50% off all courses!
          </span>
          <button className="px-2 sm:px-3 py-1 sm:py-2 bg-white text-black font-bold rounded hover:bg-blue-600 cursor-pointer text-xs sm:text-sm mt-1 sm:mt-0">
            Enroll Now
          </button>
        </div>
      );

    case "NewCourse":
      return (
        <div className="p-2 sm:p-4 bg-white rounded-lg shadow-md flex flex-col space-y-2 w-full hover:shadow-xl transition">
          <div className="text-sm sm:text-base font-bold text-black truncate">
            React for Beginners
          </div>
          <p className="text-gray-600 text-xs sm:text-sm truncate">
            Learn the basics of React and build your first web app.
          </p>
          <button className="px-2 sm:px-3 py-1 sm:py-2 bg-blue-500 text-white font-semibold rounded-lg cursor-pointer hover:bg-blue-600 text-xs sm:text-sm">
            Add to Cart
          </button>
        </div>
      );

    case "AvailableCourses":
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3 w-full">
          {["React Basics", "Advanced JS", "Node.js"].map((course, idx) => (
            <div
              key={idx}
              className="p-2 sm:p-4 bg-white rounded-lg shadow hover:shadow-lg flex flex-col justify-between w-full"
            >
              <div className="font-bold text-xs sm:text-sm md:text-base text-black truncate">
                {course}
              </div>
              <p className="text-gray-500 text-xs sm:text-sm truncate">
                High quality course content
              </p>
              <button className="mt-1 px-2 sm:px-3 py-1 sm:py-2 bg-blue-500 text-white rounded hover:bg-blue-600 text-xs sm:text-sm">
                Enroll
              </button>
            </div>
          ))}
        </div>
      );

    default:
      return null;
  }
}

export default RenderComponent;
