import React from 'react';
import hero1 from '../../assets/images/hero-1.png'
import hero2 from '../../assets/images/hero-2.png'
import HomeShape from '../../assets/icons/homeShape.svg'
import BannerHeading from '../../assets/icons/bannerHeading.svg'
import DecorativeShape from '../../assets/icons/decorativeShape.svg'
import shape1 from '../../assets/images/shape-1.png'

const PlatformHero = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
        {/* Left Content */}
        <div className="space-y-6 relative">
        <div className="absolute z-1 mt-16 left-0 -ml-[8em]">
        <img
                src={BannerHeading}
                alt="Banner Heading"
                className="w-full h-full object-cover rounded-lg"
              />          </div>
          <h1 className="text-5xl font-bold leading-tight">
            Get daily thing<br /> in same
            
            <span className="text-gray-400"> platform</span>
          </h1>
          
          {/* Background Text */}
          <div className="absolute -z-10 text-[200px] font-bold text-gray-100 opacity-10 -top-12 left-0">
            5000+
          </div>
        </div>

        {/* Right Content */}
        <div className="relative">
          <div className="grid grid-cols-2 gap-4">
            {/* Left Column */}
            <div className="relative">
              <img
                src={hero1}
                alt="Person using phone"
                className="w-full h-full object-cover rounded-lg"
              />
              {/* Circular Badge */}
              <div className="absolute -right-4 top-1/4 h-[10em] ">
                <img
                  src={HomeShape}
                  alt="Mobile app screens"
                  className="w-full h-full object-cover"
                />             
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              {/* Stats Card */}
              <div 
                className="bg-pink-600 text-white p-6 rounded-lg h-48 flex flex-col justify-center relative overflow-hidden"
                style={{
                  backgroundImage: `url(${shape1})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="text-3xl font-bold">5000 +</div>
                  <div className="text-sm mt-1">DAILY ADS LISTING</div>
                </div>
              </div>

              {/* Mobile Screens */}
              <img
                src={hero2}
                alt="Mobile app screens"
                className="w-full rounded-lg object-cover"
              />
            </div>
          </div>

          {/* Decorative shapes */}
          <div className="absolute -z-10 w-full h-full">
          <img
                src={DecorativeShape}
                alt="Shape"
                className="w-full h-full object-cover rounded-lg"
              />
              </div>
        </div>
      </div>
    </div>
  );
};

export default PlatformHero;