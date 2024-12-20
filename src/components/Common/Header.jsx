import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import arrowRight from '../../assets/icons/arrowRight.svg';
import person from '../../assets/icons/person.svg';
import Logo from '../../assets/images/logo.svg';

const Header = () => {
  const { isAuthenticated, logout, user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/auth');
  };

  return (
    <nav className="bg-white border-b border-gray-200 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-gray-900 text-xl font-bold">
          <Link to="/" className="flex items-center">
            <img src={Logo} alt="Listbnb" className="h-8" />
          </Link>
        </div>
        <div className="flex items-center gap-6">
          {!isAuthenticated && (
            <Link to="/auth" className="text-gray-600 hover:text-gray-900 flex font-bold items-center gap-2">
              <img src={person} alt="" className="w-5 h-5" />
              Sign In
            </Link>
          )}
          <Link 
            to="/post-ad" 
            className="bg-[#F50963] text-white px-4 py-3 rounded-full hover:bg-pink-700 transition-colors flex items-center gap-2 font-medium"
          >
            Post Your Ad 
            <img src={arrowRight} alt="" className="w-5 h-5" />
          </Link>
          {isAuthenticated && (
            <>
              {/* <Link to="/dashboard" className="text-gray-600 hover:text-gray-900 flex items-center gap-2">
                Dashboard
              </Link> */}
              <Link to="/profile" className="text-gray-600 hover:text-gray-900 flex items-center gap-2">
                <img src={person} alt="" className="w-5 h-5" />
                Profile
              </Link>
              {/* <button 
                onClick={handleLogout} 
                className="text-gray-600 hover:text-gray-900 flex items-center gap-2"
              >
                Logout
              </button> */}
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;