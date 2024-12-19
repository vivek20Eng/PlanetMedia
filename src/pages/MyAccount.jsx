import React, { useEffect, useState } from "react";
import { profileApi, advertisementApi } from "../utils/api";
import { getUser } from "../utils/storage";
import phone from "../assets/icons/phone.svg";
import location from "../assets/icons/location.svg";
import letter from "../assets/icons/letter.svg";
import ProfileSkeletonLoader from "../components/Common/ProfileSkeletonLoader";
import AdvertisementList from "./AdvertisementList";

// mockAdvertisementApi.js
export const ads = [
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
  {
    id: 3,
    title: "Seaside Villa",
    price: 299.99,
    description: "Beautiful beachfront property with panoramic ocean views and private access to the beach.",
    image: "https://picsum.photos/300",
    location: "Miami, Florida"
  },
  {
    id: 4,
    title: "Mountain Retreat Cabin",
    price: 156.50,
    description: "Rustic cabin surrounded by nature. Perfect for weekend getaways and outdoor enthusiasts.",
    image: "https://picsum.photos/300",
    location: "Denver, Colorado"
  }
];



const MyAccount = () => {
  const [profile, setProfile] = useState(null);
  const [ads, setAds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        setLoading(true);
        const [profileResponse, adsResponse] = await Promise.all([
          profileApi.getProfile(),
          advertisementApi.getAll(),
        ]);

        setProfile(profileResponse.data);
        setAds(adsResponse.data);
        setError(null);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to load profile data. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchProfileData();
  }, []);

  if (loading) {
    return <ProfileSkeletonLoader />;

  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-red-600">{error}</div>
      </div>
    );
  }

  // Fallback to localStorage data if API fails
  const userData = profile || getUser();
  

  return (
    <div className="max-w-5xl mx-auto p-4">
      {/* Profile Section */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
        <div className="flex items-center justify-between mb-6 pb-2 border-b border-gray-500/20">
          <div className="flex items-center gap-4">
            <img
              src="https://picsum.photos/300"
              alt="Profile"
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <h1 className="text-xl font-semibold text-gray-900">
                {userData?.firstName} {userData?.lastName}
              </h1>
              <p className="text-gray-500 text-sm">Member since 2019</p>
            </div>
          </div>
          <button className="px-4 py-[0.5em] text-gray-700 bg-white border border-gray-200 rounded-full hover:bg-gray-50">
            Edit Profile
          </button>
        </div>
        <div className="flex flex-wrap gap-4 text-center items-center">
          <div className="flex items-center gap-2 text-gray-600">
            <span>
              {" "}
              <img src={location} alt="location" className="h-4" />
            </span>
            <span>{userData?.location || "No location set"}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <span>
              {" "}
              <img src={letter} alt="mail" className="h-4" />
            </span>
            <span>{userData?.email}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <span>
              {" "}
              <img src={phone} alt="phone" className="h-4" />
            </span>
            <span>{userData?.phone || "No phone number set"}</span>
          </div>
        </div>
      </div>

      {/* Advertisements Section */}
      <div className="space-y-4">
        {ads.map((ad) => (
          <div key={ad.id} className="bg-white rounded-lg shadow-sm p-4">
            <div className="flex gap-4">
              <img
                src={ad.image || "/api/placeholder/200/150"}
                alt={ad.title}
                className="w-48 h-32 rounded-lg object-cover"
              />
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-lg font-semibold text-gray-900">
                      {ad.title}
                    </h2>
                    <div className="flex items-center gap-2 text-gray-500 text-sm mt-1">
                      <span>{ad.location || "Location not specified"}</span>
                      <span>•</span>
                      <span>24hrs ago</span>
                    </div>
                    <div className="mt-2">
                      <span className="text-lg font-semibold">
                        ${ad.price?.toFixed(2) || "0.00"}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="px-4 py-2 text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50">
                      View
                    </button>
                    <button className="px-4 py-2 text-white bg-pink-500 rounded-lg hover:bg-pink-600">
                      Edit Ad
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <AdvertisementList ads={ads} />

    </div>
  );
};

export default MyAccount;
