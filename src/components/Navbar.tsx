import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-stone-900/95 text-white py-2 shadow-md'
          : 'bg-transparent text-white py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <a href="#" className="text-2xl md:text-3xl font-serif font-bold">
            <span className="text-[#FF1493]">Pra</span>
            <span className="text-[#00FFFF]">ty</span>
            <span className="text-[#FF00FF]">ush</span>
          </a>

          <ul className="hidden md:flex space-x-8">
            <li>
              <a href="#home" className="hover:text-amber-400 transition-colors">Home</a>
            </li>
            <li>
              <a href="#about" className="hover:text-amber-400 transition-colors">About</a>
            </li>
            <li>
              <a href="#menu" className="hover:text-amber-400 transition-colors">Menu</a>
            </li>
            <li>
              <a href="#specials" className="hover:text-amber-400 transition-colors">Chef's Specials</a>
            </li>
            <li>
              <a href="#gallery" className="hover:text-amber-400 transition-colors">Gallery</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-amber-400 transition-colors">Contact</a>
            </li>
            <li>
              <a
                href="#reservation"
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition-colors"
              >
                Reserve Table
              </a>
            </li>
          </ul>

          <button
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden bg-stone-900/95 overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-screen py-4' : 'max-h-0'
        }`}
      >
        <ul className="px-4 space-y-4">
          <li>
            <a
              href="#home"
              className="block hover:text-amber-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="block hover:text-amber-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#menu"
              className="block hover:text-amber-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Menu
            </a>
          </li>
          <li>
            <a
              href="#specials"
              className="block hover:text-amber-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Chef's Specials
            </a>
          </li>
          <li>
            <a
              href="#gallery"
              className="block hover:text-amber-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="block hover:text-amber-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="#reservation"
              className="block bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition-colors text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Reserve Table
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;