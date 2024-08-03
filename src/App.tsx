import React from 'react';
import NavBar from './components/Navbar';
import Header from './components/Header';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-gray-900 text-white">
      <NavBar/>
      <Header/>
      <Projects/>
      <Footer/>
      <div className="text-center text-gray-400 py-4">
        ©2024 MAIGNAN Anton. Tous droits réservés. | <a href="https://iut-lannion.univ-rennes.fr" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-600">IUT Lannion</a>
      </div>
    </div>
  );
}

export default App;
