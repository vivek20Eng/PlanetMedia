import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-sm">&copy; 2024 Vivek</p>
        <a
          href="https://github.com/vivek20Eng/PlanetMedia"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 hover:text-gray-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="w-5 h-5"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12c0 4.41 2.9 8.16 6.91 9.49.51.09.69-.22.69-.49v-1.76c-2.83.61-3.42-1.36-3.42-1.36-.46-1.18-1.13-1.5-1.13-1.5-.92-.63.07-.62.07-.62 1.02.07 1.55 1.04 1.55 1.04.9 1.53 2.36 1.09 2.93.84.09-.65.35-1.09.64-1.34-2.33-.26-4.77-1.16-4.77-5.16 0-1.14.41-2.08 1.08-2.81-.11-.26-.47-1.31.12-2.73 0 0 .87-.28 2.85 1.02.83-.23 1.72-.34 2.59-.34s1.76.11 2.59.34c1.98-1.3 2.85-1.02 2.85-1.02.59 1.42.23 2.47.12 2.73.67.73 1.08 1.67 1.08 2.81 0 4.01-2.44 4.91-4.77 5.16.29.24.54.7.54 1.37v2.03c0 .28.18.58.7.49 4.01-1.33 6.91-5.08 6.91-9.49 0-5.52-4.48-10-10-10z" />
          </svg>
          <span>GitHub</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
