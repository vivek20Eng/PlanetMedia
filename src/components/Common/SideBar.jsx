import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Sidebar = () => {
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
    // Add your logout logic here
    navigate('/auth');
  };

  return (
    <div className="w-64 bg-white shadow-md min-h-screen">
      <div className="p-6">

        <nav className="space-y-2">
          {navigationItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
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
            <span className="text-lg text-red-500"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6A2.25 2.25 0 005.25 5.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M16.5 12H9m3 3l3-3m-3-3l3 3" />
</svg>
</span>
            <span>Logout</span>
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;