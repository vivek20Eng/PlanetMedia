import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import arrowRight from "../../assets/icons/arrowRight.svg";
import person from "../../assets/icons/person.svg";
import Logo from "../../assets/images/logo.svg";

const Header = () => {
  const { isAuthenticated, logout, user } = useAuth();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/auth");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white border-b border-gray-200 p-4 relative">
      <div className="container mx-auto">
        {/* Desktop and Mobile Layout */}
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-gray-900 text-xl font-bold">
            <Link to="/" className="flex items-center">
              <img src={Logo} alt="Listbnb" className="h-8" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            {!isAuthenticated && (
              <Link
                to="/auth"
                className="text-gray-600 hover:text-gray-900 flex font-bold items-center gap-2"
              >
                <img src={person} alt="" className="w-5 h-5" />
                Sign In
              </Link>
            )}
            <Link
              to="/post-ad"
              className="bg-[#F50963] text-white px-4 py-3 rounded-full hover:bg-pink-700 transition-colors flex items-center gap-2 font-medium whitespace-nowrap"
            >
              Post Your Ad
              <img src={arrowRight} alt="" className="w-5 h-5" />
            </Link>
            {isAuthenticated && (
              <Link
                to="/profile"
                className="text-gray-600 hover:text-gray-900 flex items-center gap-2"
              >
                <img src={person} alt="" className="w-5 h-5" />
                Profile
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:hidden absolute left-0 right-0 top-full bg-white border-b border-gray-200 shadow-lg z-50`}
        >
          <div className="container mx-auto py-4 px-4 space-y-4">
            {!isAuthenticated && (
              <Link
                to="/auth"
                className="text-gray-600 hover:text-gray-900 flex items-center gap-2 font-bold w-full"
                onClick={() => setIsMenuOpen(false)}
              >
                <img src={person} alt="" className="w-5 h-5" />
                Sign In
              </Link>
            )}
            <Link
              to="/post-ad"
              className="bg-[#F50963] text-white px-4 py-3 rounded-full hover:bg-pink-700 transition-colors flex items-center gap-2 font-medium w-full justify-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Post Your Ad
              <img src={arrowRight} alt="" className="w-5 h-5" />
            </Link>
            {isAuthenticated && (
              <Link
                to="/profile"
                className="text-gray-600 hover:text-gray-900 flex items-center gap-2 w-full"
                onClick={() => setIsMenuOpen(false)}
              >
                <img src={person} alt="" className="w-5 h-5" />
                Profile
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
