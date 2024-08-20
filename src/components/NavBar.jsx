// src/components/NavBar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Typewriter from './Typewriter';
import { useTranslation } from 'react-i18next';
import UKFlag from '../assets/uk-flag.png';
import SpainFlag from '../assets/spain-flag.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { i18n, t } = useTranslation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsOpen(false); 
  };

  const words = ['JESÚS MANSILLA', 'REPLICANT', 'FLOW MY TEARS'];

  return (
    <nav className="bg-darkGray bg-opacity-80 p-4 fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-gray-300 text-2xl font-bold text-opacity-90">
          <Typewriter words={words} />
        </Link>
        <div className="hidden md:flex space-x-6 items-center">
          <Link to="/" className="text-lightGray hover:text-violet transition">{t('Audio')}</Link>
          <Link to="/soundtrack" className="text-lightGray hover:text-violet transition">{t('Soundtrack')}</Link>
          <Link to="/gallery" className="text-lightGray hover:text-violet transition">{t('Galería')}</Link>
          <Link to="/contact" className="text-lightGray hover:text-violet transition">{t('Contacto')}</Link>
          
          <div className="flex space-x-4 items-center">
            <button onClick={() => changeLanguage('en')} className="focus:outline-none">
              <img src={UKFlag} alt="English" className="h-6" />
            </button>
            <button onClick={() => changeLanguage('es')} className="focus:outline-none">
              <img src={SpainFlag} alt="Español" className="h-6" />
            </button>
          </div>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-lightGray focus:outline-none">
            {isOpen ? '✖' : '☰'}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden flex justify-center items-center space-x-4 mt-2">
          <Link to="/" className="text-lightGray hover:text-violet transition" onClick={toggleMenu}>{t('Audio')}</Link>
          <Link to="/soundtrack" className="text-lightGray hover:text-violet transition" onClick={toggleMenu}>{t('Soundtrack')}</Link>
          <Link to="/gallery" className="text-lightGray hover:text-violet transition" onClick={toggleMenu}>{t('Galería')}</Link>
          <Link to="/contact" className="text-lightGray hover:text-violet transition" onClick={toggleMenu}>{t('Contacto')}</Link>
          
          {/* Botones de selección de idioma */}
          <div className="flex space-x-4">
            <button onClick={() => changeLanguage('en')} className="focus:outline-none">
              <img src={UKFlag} alt="English" className="h-6" />
            </button>
            <button onClick={() => changeLanguage('es')} className="focus:outline-none">
              <img src={SpainFlag} alt="Español" className="h-6" />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
