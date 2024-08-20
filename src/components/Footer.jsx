// src/components/Footer.js
import React from 'react';
import { FaInstagram } from 'react-icons/fa'; 
/* import { useTranslation } from 'react-i18next';
 */
const Footer = () => {
/*   const { t } = useTranslation();
 */
  return (
    <footer className="bg-darkGray bg-opacity-80 p-4 mt-8">
      <div className="container mx-auto flex justify-between items-center text-lightGray">
        <a href="https://www.instagram.com/flow_my.tears" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-gray-300 text-2xl" />
        </a>
        <div className="text-center text-gray-300">
        © 2024 <a className='hover:text-violet' href="https://github.com/Jchock90" target="_blank" rel="noopener noreferrer">Jesús Mansilla.</a> {/* {t('Derechos de autor')} */}
        </div>
        <a href="https://linktr.ee/j3susm4nsill4" target="_blank" rel="noopener noreferrer">
          <img src="/linktree.png" alt="Linktree logo" className="h-8" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
