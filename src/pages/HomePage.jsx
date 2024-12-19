import React from 'react';
import { Link } from 'react-router-dom';
import PlatformHero from '../components/Common/PlatformHero';
import FreshRecommendations from '../components/Common/FreshRecommendations';
import Footer from '../components/Common/Footer';

const HomePage = () => {
  return (
    <div className="">
      <PlatformHero/>
      <FreshRecommendations/>
      <Footer/>
    </div>
  );
};

export default HomePage;