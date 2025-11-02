import { useState } from "react";
import toast from "react-hot-toast";
import { FaBars, FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from "../../redux/features/userSlice";
import { signOut } from "firebase/auth";
import auth from "../../firebase/firebase.config";

function Navbar() {
  // redux
  const { userEmail } = useSelector((state) => state.userSlice);

  // hooks
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // handle logout
  const handleLogout = () => {
    signOut(auth);
    dispatch(logoutUser());
    navigate("/");
    toast.success("Logout Successfully");
  };

  return (
    <nav className="bg-black text-white border-b border-white shadow-md block w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/">
            <h1 className="text-2xl font-bold hover:text-indigo-600 transition cursor-pointer">
              Builder X
            </h1>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4">
            <Link to="/">
              <button className="px-4 py-2 rounded-lg hover:text-indigo-600 transition cursor-pointer font-medium">
                Home
              </button>
            </Link>
            <Link to="/about">
              <button className="px-4 py-2 rounded-lg hover:text-indigo-600 transition cursor-pointer font-medium">
                About
              </button>
            </Link>
            {userEmail ? (
              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 rounded-lg hover:text-red-600 transition cursor-pointer font-medium"
              >
                Logout
              </button>
            ) : (
              <Link to="/register" onClick={() => setIsOpen(false)}>
                <button className="w-full text-left px-4 py-2 rounded-lg hover:text-indigo-600 transition cursor-pointer font-medium">
                  Register
                </button>
              </Link>
            )}
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
          <Link to="/" onClick={() => setIsOpen(false)}>
            <button className="w-full text-left px-4 py-2 rounded-lg hover:text-indigo-600 transition cursor-pointer font-medium">
              Home
            </button>
          </Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>
            <button className="w-full text-left px-4 py-2 rounded-lg hover:text-indigo-600 transition cursor-pointer font-medium">
              About
            </button>
          </Link>

          {userEmail ? (
            <button
              onClick={handleLogout}
              className="w-full text-left px-4 py-2 rounded-lg hover:text-indigo-600 transition cursor-pointer font-medium"
            >
              Logout
            </button>
          ) : (
            <Link to="/register" onClick={() => setIsOpen(false)}>
              <button className="w-full text-left px-4 py-2 rounded-lg hover:text-indigo-600 transition cursor-pointer font-medium">
                Register
              </button>
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
