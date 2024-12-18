// src/components/NotFound.js

import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center flex-col h-screen bg-gradient-to-r from-blue-100 to-pink-100">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold text-gray-800 mb-6 animate__animated animate__fadeIn">404</h1>
        <h2 className="text-2xl font-semibold text-gray-600 mb-4 animate__animated animate__fadeIn animate__delay-1s">
          Oops! Page Not Found
        </h2>
        <p className="text-lg text-gray-500 mb-6 animate__animated animate__fadeIn animate__delay-2s">
          The page you’re looking for doesn’t exist or has been moved.
        </p>
        <button
          onClick={() => navigate('/')}
          className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 px-8 rounded-full text-lg font-medium shadow-lg hover:scale-105 transform transition duration-300"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
