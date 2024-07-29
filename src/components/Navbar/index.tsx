import React, { useState } from 'react';
import logo from "./img/logo.png"
import Button from '../../reusableComponents/Button';
import ContactPopup from './ContactPopup';

function NavBar() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);  

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };
  
  return (
    <nav className="max-w-screen-xl mx-auto p-8 flex items-center justify-between gap-8">
      <img src={logo} alt="Logo" className="w-12" />
      {/* <ul className="flex items-center gap-12">
        <li><a href="#" className="relative text-white pb-3 hover:after:w-4/12 after:block after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-orange-500 transition-all duration-300">Accueil</a></li>
        <li><a href="#" className="relative text-white pb-3 hover:after:w-4/12 after:block after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-orange-500 transition-all duration-300">Projets</a></li>
        <li><a href="#" className="relative text-white pb-3 hover:after:w-4/12 after:block after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-orange-500 transition-all duration-300">Bas de Page</a></li>
      </ul> */}
      <Button onClick={togglePopup}>Me contacter</Button>
      {isPopupOpen && <ContactPopup onClose={togglePopup} />}
    </nav>
  );
}

export default NavBar;
