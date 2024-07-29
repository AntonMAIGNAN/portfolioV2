import React from 'react';
import pdp from './img/pdp.jpeg';
import Button from '../../reusableComponents/Button';

function Header() {

  return (
    <header className="relative grid grid-cols-1 md:grid-cols-2 gap-6 max-w-screen-xl mx-auto py-8">
      <div className="relative m-6">
        <h2 className="text-gray-400 mb-4 text-2xl font-semibold">Bienvenue sur mon Portfolio !</h2>
        <h1 className="text-white text-3xl font-bold mb-4">
          Je suis <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-300">Anton MAIGNAN</span>, étudiant à l'<a href="https://iut-lannion.univ-rennes.fr" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-600">IUT de Lannion</a>
        </h1>
        <p className="text-gray-400 mb-8">
          Etant très motivé par le domaine de l'informatique, le sujet d'un portfolio a été très prenant d'autant plus pour montrer mes qualités de développement ainsi que les projets que j'ai pu mener.
          <br /><br />
         
          Sur cette page, vous aurez accès aux livrables disponibles sur mon dépôt github.
        </p>
        <Button href="CV/CV.pdf" target="_blank" rel="noopener noreferrer">Voir mon CV</Button>
      </div>
      <div className="relative">
        <img src={pdp} alt="Portrait" className="w-80 h-80 object-cover border-2 border-orange-500 rounded-full mx-auto" />
      </div>
    </header>
  );
}

export default Header;
