import React, { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const AdvertisementList = () => {
  const [loading, setLoading] = useState(true);
  const [ads, setAds] = useState([]);

  // Simulate API call
  useEffect(() => {
    const fetchAds = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 1500));
        setAds([
          {
            id: 1,
            title: "Luxury couple apartment",
            price: 124.80,
            description: "Modern luxury apartment perfect for couples. Features high-end amenities and stunning city views.",
            image: "https://picsum.photos/300",
            location: "Dallas, Texas"
          },
          {
            id: 2,
            title: "Downtown Studio Loft",
            price: 89.99,
            description: "Cozy studio loft in the heart of downtown. Recently renovated with modern fixtures.",
            image: "https://picsum.photos/300",
            location: "Austin, Texas"
          },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchAds();
  }, []);

  const formatTimeAgo = () => '24hrs ago';

  if (loading) {
    return (
      <div className="space-y-6">
        {[1, 2].map((index) => (
          <div key={index} className="bg-white rounded-lg shadow p-4">
            <div className="flex gap-6">
              <div className="w-52 h-40 flex-shrink-0">
                <Skeleton height={160} className="rounded-lg" />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <Skeleton width="60%" height={24} className="mb-2" />
                    <div className="flex items-center gap-2 mt-1">
                      <Skeleton width={100} />
                      <span className="text-gray-300">•</span>
                      <Skeleton width={80} />
                    </div>
                    <div className="mt-3">
                      <Skeleton width={80} height={24} />
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Skeleton width={80} height={40} className="rounded-full" />
                    <Skeleton width={80} height={40} className="rounded-full" />
                  </div>
                </div>
                <div className="mt-2">
                  <Skeleton count={2} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {ads.map((ad) => (
        <div key={ad.id} className="bg-white rounded-lg shadow p-4">
          <div className="flex gap-6">
            <div className="w-52 h-40 flex-shrink-0">
              <img
                src={ad.image}
                alt={ad.title}
                className="w-full h-full rounded-lg object-cover"
              />
            </div>
            <div className="flex-1">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-xl font-medium text-gray-900">
                    {ad.title}
                  </h2>
                  <div className="flex items-center gap-2 mt-1 text-gray-600">
                    <span>{ad.location}</span>
                    <span className="text-gray-300">•</span>
                    <span>{formatTimeAgo()}</span>
                  </div>
                  <div className="mt-3">
                    <span className="text-xl font-semibold text-gray-900">
                      ${ad.price.toFixed(2)}
                    </span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button className="px-6 py-2 text-gray-700 bg-white border border-gray-200 rounded-full hover:bg-gray-50 transition-colors">
                    View
                  </button>
                  <button className="px-6 py-2 text-white bg-pink-600 rounded-full hover:bg-pink-700 transition-colors">
                    Edit Ad
                  </button>
                </div>
              </div>
              {ad.description && (
                <p className="mt-2 text-gray-600 line-clamp-2">
                  {ad.description}
                </p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdvertisementList;