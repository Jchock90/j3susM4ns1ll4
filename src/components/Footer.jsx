// src/components/Footer.js
import React from 'react';
import { FaInstagram } from 'react-icons/fa'; // Importamos el icono de Instagram

const Footer = () => {
  return (
    <footer className="bg-darkGray bg-opacity-90 p-4 mt-8">
      <div className="container mx-auto flex justify-between items-center text-lightGray">
        {/* Ícono de Instagram a la izquierda */}
        <a href="https://www.instagram.com/flow_my.tears" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-gray-300 text-2xl" />
        </a>

        {/* Derechos de autor en el centro */}
        <div className="text-center text-gray-300 ">
          &copy; 2024 Jesús Mansilla.
        </div>

        {/* Imagen con link a la derecha */}
        <a href="https://linktr.ee/j3susm4nsill4" target="_blank" rel="noopener noreferrer">
          <img src="/linktree.png" alt="Linktree logo" className="h-8" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
