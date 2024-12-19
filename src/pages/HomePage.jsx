import React from 'react';
import { Link } from 'react-router-dom';
import PlatformHero from '../components/Common/PlatformHero';
import FreshRecommendations from '../components/Common/FreshRecommendations';

const HomePage = () => {
  return (
    <div className="">
      <PlatformHero/>
      <FreshRecommendations/>
      
    </div>
  );
};

export default HomePage;