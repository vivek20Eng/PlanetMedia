import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const Header = () => {
  const { isAuthenticated, logout, user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/auth');
  };

  return (
    <nav className="bg-indigo-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">
          <Link to="/">Buy & Sell Platform</Link>
        </div>
        <div className="space-x-4">
          <Link to="/" className="text-white hover:text-gray-200">Home</Link>
          {isAuthenticated ? (
            <>
              <Link to="/dashboard" className="text-white hover:text-gray-200">Dashboard</Link>
              <Link to="/profile" className="text-white hover:text-gray-200">Profile</Link>
              <button 
                onClick={handleLogout} 
                className="text-white hover:text-gray-200"
              >
                Logout
              </button>
            </>
          ) : (
            <Link to="/auth" className="text-white hover:text-gray-200">Login/Register</Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;