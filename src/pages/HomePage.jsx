import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <div className="max-w-md w-full space-y-8 text-center">
        <h1 className="text-4xl font-bold text-gray-900">
          Welcome to Buy & Sell Platform
        </h1>
        <p className="text-xl text-gray-600">
          Buy, sell, and trade with ease
        </p>
        <div className="space-x-4">
          <Link 
            to="/auth" 
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition"
          >
            Get Started
          </Link>
          <Link 
            to="/advertisements" 
            className="inline-block bg-gray-200 text-gray-800 px-6 py-3 rounded-md hover:bg-gray-300 transition"
          >
            Browse Ads
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;