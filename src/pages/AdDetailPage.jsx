import React, { useEffect, useState } from 'react';
import { MapPin, Calendar, Phone, Mail, Link2 } from 'lucide-react';
import Skeleton from 'react-loading-skeleton';

// Dummy data
const dummyData = {
  title: "Apple MacBook Air (2023) Apple M2 Chip",
  location: "New York, United States",
  date: "Nov 01, 2023, 10:00am",
  price: 599,
  images: [
    "https://picsum.photos/300",
    "https://picsum.photos/300",
    "https://picsum.photos/300",
    "https://picsum.photos/300"
  ],
  overview: "The Apple MacBook Air 13.6-inch laptop is powered by the new M2 chip. It is loaded with 8GB RAM and 256GB SSD. The MacBook Air features a brilliant Retina display, a FaceTime HD camera, and studio-quality mics. It comes with the same compact design but now it supports up to 20 hours of battery life and an active cooling system to sustain enhanced performance. macOS and M2 work together to bring more speed and responsiveness to all your go-to apps. The Apple MacBook Air comes with active cooling that sustains blazing-fast performance.",
  seller: {
    name: "Astonix D. Dowson",
    memberSince: "Member since Nov 24, 2023",
    avatar: "https://picsum.photos/300",
    phone: "+623899299",
    email: "infoVive.com"
  }
};

const AdDetailPage = () => {
  const [loading, setLoading] = useState(true);
  const [adData, setAdData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        setAdData(dummyData);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6 p-6">
            <Skeleton height={40} />
            <Skeleton height={400} />
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3].map(i => (
                <Skeleton key={i} height={100} />
              ))}
            </div>
            <Skeleton count={5} />
          </div>
          <div className="space-y-6">
            <Skeleton height={100} />
            <Skeleton height={200} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6 border p-8 rounded-lg border-gray-400/30">
          {/* Title and Location */}
          <div className="space-y-4">
            <h1 className="text-2xl font-semibold">{adData.title}</h1>
            <div className="flex flex-wrap gap-4 text-gray-600">
              <div className="flex items-center gap-1">
                <MapPin size={16} className="text-pink-500" />
                {adData.location}
              </div>
              <div className="flex items-center gap-1">
                <Calendar size={16} className="text-pink-500" />
                {adData.date}
              </div>
            </div>
          </div>

          {/* Main Image and Gallery */}
          <div className="space-y-4">
            <div className="rounded-lg overflow-hidden h-[25em]">
              <img 
                src={adData.images[0]} 
                alt={adData.title}
                className="w-full object-cover"
              />
            </div>
            
          </div>

          {/* Overview */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Overview</h2>
            <p className="text-gray-600 leading-relaxed">
              {adData.overview}
            </p>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Price Card */}
          <div className=" rounded-lg p-6 shadow-sm border border-gray-400/30">
            <div className="flex justify-between items-center">
              <div>
                <div className="text-sm text-gray-500">Price:</div>
                <div className="text-3xl font-bold text-pink-500">
                  ${adData.price}
                </div>
              </div>
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <Link2 size={20} className="text-gray-400" />
              </button>
            </div>
          </div>

          {/* Seller Info Card */}
          <div className="rounded-lg shadow-sm">
            <div className="flex flex-col items-center text-center space-y-4 border border-gray-400/20 p-4">
              <div className="relative">
                <img 
                  src={adData.seller.avatar} 
                  alt={adData.seller.name}
                  className="w-20 h-20 rounded-full"
                />
                <div className="absolute top-1 right-1 w-4 h-4 bg-white border-4 border-pink-600 rounded-full flex items-center justify-center text-white text-xs">
                  
                </div>
              </div>
              
              <div className="space-y-1">
                <div className="text-sm text-gray-500">
                  {adData.seller.memberSince}
                </div>
                <div className="font-semibold">
                  {adData.seller.name}
                </div>
              </div>

              <div className="w-full space-y-3 flex gap-2 flex-wrap">
                <button className="w-full flex items-center gap-6 bg-gray-400/10 p-3 rounded-lg text-gray-600">
                  <div className='bg-white rounded-full p-3'>
                  <Phone size={16} className="text-pink-500" />
                  </div>
                  <div className='w-full flex flex-col text-start'>
                  <span className="flex-1 text-left">Click To Show Number</span>
                  <span className="text-gray-400">{adData.seller.phone}</span>
                    </div>
                </button>

                <button className="w-full flex items-center gap-6 bg-gray-400/10 p-3 rounded-lg text-gray-600">
                  <div className='bg-white rounded-full p-3'>

                  <Mail size={16} className="text-pink-500" />
                  </div>
                  <div className='w-full flex flex-col text-start'>

                  <span className="flex-1 text-left">Click To Show Email</span>
                  <span className="text-gray-400">{adData.seller.email}</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdDetailPage;