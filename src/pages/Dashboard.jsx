import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { advertisementService } from '../services/advertisementService';
import { useAuth } from '../contexts/AuthContext';
import { toast } from 'react-toastify';

const DashboardPage = () => {
  const [advertisements, setAdvertisements] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    const fetchAdvertisements = async () => {
      try {
        const response = await advertisementService.getAdvertisements();
        
        // Debug logging to understand the response structure
        console.log('API Response:', response);

        // Handle different possible response formats
        const ads = Array.isArray(response) 
          ? response 
          : response.data 
          ? response.data 
          : response.advertisements 
          ? response.advertisements 
          : [];

        setAdvertisements(ads);
        setIsLoading(false);
      } catch (error) {
        console.error('Fetch Advertisements Error:', error);
        toast.error('Failed to fetch advertisements');
        setIsLoading(false);
      }
    };

    fetchAdvertisements();
  }, []);

  const handleDeleteAdvertisement = async (id) => {
    try {
      await advertisementService.deleteAdvertisement(id);
      setAdvertisements(advertisements.filter(ad => ad.id !== id));
      toast.success('Advertisement deleted successfully');
    } catch (error) {
      toast.error('Failed to delete advertisement');
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Welcome, {user?.username}</h1>
        <Link 
          to="/create-advertisement" 
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
        >
          Create New Advertisement
        </Link>
      </div>

      {advertisements.length === 0 ? (
        <div className="text-center mt-10">
          <p className="text-gray-600 text-xl">No advertisements found</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advertisements.map(ad => (
            <div key={ad.id} className="bg-white shadow-md rounded-lg p-6">
              {ad.image && (
                <img 
                  src={ad.image} 
                  alt={ad.title} 
                  className="w-full h-48 object-cover rounded-t-lg mb-4"
                />
              )}
              <h2 className="text-xl font-semibold mb-2">{ad.title}</h2>
              <p className="text-gray-600 mb-4">{ad.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-indigo-600">${ad.price}</span>
                <div className="space-x-2">
                  <Link 
                    to={`/advertisement/${ad.id}`}
                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                  >
                    View
                  </Link>
                  <button 
                    onClick={() => handleDeleteAdvertisement(ad.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DashboardPage;