import React from 'react';
import { Facebook, Twitter, Youtube, Github } from 'lucide-react';
import FooterLogo from '../../assets/icons/footerLogo.svg';

const Footer = () => {
  const socialLinks = [
    { icon: <Facebook size={18} />, url: 'https://facebook.com' },
    { icon: <Twitter size={18} />, url: 'https://twitter.com' },
    { icon: <span className="font-semibold">Be</span>, url: 'https://behance.net' },
    { icon: <Youtube size={18} />, url: 'https://youtube.com' },
    { icon: <Github size={18} />, url: 'https://github.com/vivek20Eng/PlanetMedia' },
  ];

  return (
    <footer className="bg-[#1C1C1C] text-white py-4">
      <div className="container mx-auto px-4">
        {/* Desktop Layout */}
        <div className="hidden md:flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src={FooterLogo} alt="ListBnb Logo" className="h-8" />
            <span className="text-sm text-gray-400 ml-6 border-l border-red-600 pl-6">
              Copyright 2024
            </span>
          </div>

          <div className="flex items-center space-x-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden space-y-4">
          <div className="flex flex-col items-center gap-4">
            <img src={FooterLogo} alt="ListBnb Logo" className="h-8" />
            <div className="flex items-center space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {link.icon}
                </a>
              ))}
            </div>
            <span className="text-sm text-gray-400 text-center pt-2 border-t border-red-600 w-full">
              Copyright 2024
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;