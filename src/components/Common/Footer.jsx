import React from 'react';
import { Facebook, Twitter, Youtube, Github } from 'lucide-react';
import FooterLogo from '../../assets/icons/footerLogo.svg';

const Footer = () => {
  return (
    <footer className="bg-[#1C1C1C] text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src={FooterLogo} alt="ListBnb Logo" className="h-8" />
          <span className="text-sm text-gray-400 ml-6 border-l border-red-600 pl-6">Copyright 2024</span>
        </div>

        <div className="flex items-center space-x-4">
          <a 
            href="https://facebook.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Facebook size={18} />
          </a>
          
          <a 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Twitter size={18} />
          </a>
          
          <a 
            href="https://behance.net" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <span className="font-semibold">Be</span>
          </a>
          
          <a 
            href="https://youtube.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Youtube size={18} />
          </a>
          
          <a
            href="https://github.com/vivek20Eng/PlanetMedia"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Github size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;