import React, { useState } from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { FiMenu, FiChevronDown } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="bg-green-900 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center font-bold text-xl">
          <div className="bg-yellow-400 p-2 rounded-full mr-2">
            <FaPhoneAlt className="text-white text-lg" />
          </div>
          <span>AllôBénin</span>
        </Link>

        {/* Liens de navigation Desktop */}
        <nav className="hidden lg:flex items-center space-x-6 font-medium">
          <Link to="/about">A propos</Link>
          <Link to="/services">Nos services</Link>

          {/* Menu déroulant Ressources */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              aria-expanded={dropdownOpen}
              className="flex items-center gap-1 focus:outline-none"
            >
              Ressources <FiChevronDown className="mt-0.5" />
            </button>
            {dropdownOpen && (
              <div className="absolute mt-2 w-40 bg-white text-green-800 rounded shadow-lg z-10">
                <Link to="/contact" className="block px-4 py-2 hover:bg-gray-100">Contacts</Link>
                <Link to="/faq" className="block px-4 py-2 hover:bg-gray-100">FAQ</Link>
              </div>
            )}
          </div>
        </nav>

        {/* Connexion + CTA */}
        <div className="hidden lg:flex items-center space-x-4">
          <Link to="/login" className="hover:underline">Connexion</Link>
          <Link
            to="/registrer"
            className="bg-yellow-400 text-green-900 font-bold px-4 py-2 rounded-full hover:bg-yellow-300 transition"
          >
            Démarrer maintenant
          </Link>
        </div>

        {/* Menu mobile */}
        <button
          className="lg:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FiMenu />
        </button>
      </div>

      {/* Menu mobile déroulant */}
      {menuOpen && (
        <div className="lg:hidden px-4 pb-4 space-y-2 bg-green-800">
          <Link to="/about" className="block">À propos</Link>
          <Link to="/services" className="block">Nos services</Link>
          <Link to="/contact" className="block">Contacts</Link>
          <Link to="/faq" className="block">FAQ</Link>

          <hr className="border-green-700" />
          <Link to="/login" className="block">Connexion</Link>
          <Link
            to="/registrer"
            className="block text-center bg-yellow-400 text-green-900 font-bold px-4 py-2 rounded-full hover:bg-yellow-300 transition"
          >
            Démarrer maintenant
          </Link>
        </div>
      )}
    </header>
  );
}
