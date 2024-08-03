import React from 'react';

function Footer() {
  return (
    <footer className="relative flex justify-center items-center py-8 max-w-screen-xl mx-auto">
      <div className="flex items-center gap-4">
        <a href="https://www.linkedin.com/in/anton-maignan-165ab5297/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 text-gray-400 border border-gray-400 p-2 text-xl rounded-full hover:text-white hover:bg-orange-500 hover:border-orange-500 transition-all duration-300 flex items-center justify-center">
          <i className="ri-linkedin-line"></i>
        </a>
        <a href="https://github.com/AntonMAIGNAN" target="_blank" rel="noopener noreferrer" className="w-10 h-10 text-gray-400 border border-gray-400 p-2 text-xl rounded-full hover:text-white hover:bg-orange-500 hover:border-orange-500 transition-all duration-300 flex items-center justify-center">
          <i className="ri-github-line"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
