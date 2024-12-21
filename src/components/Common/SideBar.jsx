import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const isActivePath = (path) => {
    return location.pathname === path;
  };

  const navigationItems = [
    { path: '/myaccount', label: 'My Account', icon: '' },
    { path: '/profile', label: 'Profile', icon: '' },
    { path: '/ads', label: 'Ads', icon: '' },
    { path: '/post-ad', label: 'Post Ad', icon: '' }
  ];

  const handleLogout = () => {
    navigate('/auth');
  };

  return (
    <>
      {/* Toggle Button */}
      {!isOpen && (
        <button 
          onClick={toggleSidebar}
          className="md:hidden fixed top-4 left-4 z-40 p-2 rounded-lg bg-white shadow-md text-gray-600 hover:text-gray-900"
        >
          <ArrowRight size={24} />
        </button>
      )}

      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed md:static inset-y-0 left-0 z-30
        transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
        md:translate-x-0 transition-transform duration-300 ease-in-out
        w-64 bg-white shadow-md min-h-screen
      `}>
        <div className="p-6">
          {/* Mobile Close Button */}
          <button 
            onClick={toggleSidebar}
            className="md:hidden absolute right-4 top-4 text-gray-600 hover:text-gray-900"
          >
            <X size={24} />
          </button>

          <nav className="space-y-2 mt-8 md:mt-0">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => {
                  if (window.innerWidth < 768) toggleSidebar();
                }}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-colors duration-200 ${
                  isActivePath(item.path)
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <span className="text-lg">{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            ))}
            <button 
              onClick={handleLogout}
              className="flex items-center space-x-2 px-4 py-2 rounded-full w-full text-gray-600 hover:bg-gray-50 hover:text-gray-900"
            >
              <span className="text-lg text-red-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6A2.25 2.25 0 005.25 5.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M16.5 12H9m3 3l3-3m-3-3l3 3" />
                </svg>
              </span>
              <span>Logout</span>
            </button>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;