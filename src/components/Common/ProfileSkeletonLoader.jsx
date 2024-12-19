import React, { useEffect, useState } from "react";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const ProfileSkeletonLoader = () => {
  return (
    <div className="max-w-5xl mx-auto p-4">
      {/* Profile Section */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
        <div className="flex items-center justify-between mb-6 pb-2 border-b border-gray-500/20">
          <div className="flex items-center gap-4">
            <Skeleton circle width={64} height={64} />
            <div>
              <h1><Skeleton width={200} height={24} /></h1>
              <p><Skeleton width={150} /></p>
            </div>
          </div>
          <Skeleton width={100} height={35} borderRadius={20} />
        </div>
        <div className="flex flex-wrap gap-4 text-center items-center">
          <div className="flex items-center gap-2">
            <Skeleton width={16} height={16} />
            <Skeleton width={150} />
          </div>
          <div className="flex items-center gap-2">
            <Skeleton width={16} height={16} />
            <Skeleton width={200} />
          </div>
          <div className="flex items-center gap-2">
            <Skeleton width={16} height={16} />
            <Skeleton width={150} />
          </div>
        </div>
      </div>

      {/* Advertisements Section */}
      {[1, 2].map((index) => (
        <div key={index} className="bg-white rounded-lg shadow-sm p-4 mb-4">
          <div className="flex gap-4">
            <Skeleton width={192} height={128} borderRadius={8} />
            <div className="flex-1">
              <div className="flex items-start justify-between">
                <div>
                  <Skeleton width={250} height={24} className="mb-2" />
                  <Skeleton width={200} className="mb-2" />
                  <Skeleton width={100} height={24} />
                </div>
                <div className="flex gap-2">
                  <Skeleton width={64} height={40} borderRadius={8} />
                  <Skeleton width={64} height={40} borderRadius={8} />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProfileSkeletonLoader;