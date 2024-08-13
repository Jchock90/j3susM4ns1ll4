// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Typewriter from './Typewriter';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const words = ['JESÚS MANSILLA', 'REPLICANT', 'FLOW MY TEARS'];

  return (
    <nav className="bg-darkGray bg-opacity-80 p-4 fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-gray-300 text-2xl font-bold text-opacity-90">
          <Typewriter words={words} />
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-lightGray hover:text-violet transition">Audio</Link>
          <Link to="/soundtrack" className="text-lightGray hover:text-violet transition">Soundtrack</Link>
          <Link to="/gallery" className="text-lightGray hover:text-violet transition">Galería</Link>
          <Link to="/contact" className="text-lightGray hover:text-violet transition">Contacto</Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-lightGray focus:outline-none">
            {isOpen ? '✖' : '☰'}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden flex justify-center items-center space-x-4 bg-opacity-90 mt-2">
          <Link to="/" className="text-lightGray hover:text-violet transition" onClick={toggleMenu}>Audio</Link>
          <Link to="/soundtrack" className="text-lightGray hover:text-violet transition" onClick={toggleMenu}>Soundtrack</Link>
          <Link to="/gallery" className="text-lightGray hover:text-violet transition" onClick={toggleMenu}>Galería</Link>
          <Link to="/contact" className="text-lightGray hover:text-violet transition" onClick={toggleMenu}>Contacto</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
