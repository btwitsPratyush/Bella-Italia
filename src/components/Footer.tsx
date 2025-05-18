import React from 'react';
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-stone-900 text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <a href="#" className="text-2xl md:text-3xl font-serif font-bold mb-4 inline-block">
              <span className="text-red-600">Bella</span>
              <span className="text-white">{' '}</span>
              <span className="text-green-600">Italia</span>
            </a>
            <p className="text-stone-400 mt-4">
              Experience the authentic taste of Italy with an Indian twist. Our restaurant combines 
              traditional Italian recipes with subtle Indian influences for a unique dining experience.
            </p>
            <div className="flex space-x-4 mt-6">
              <a 
                href="#" 
                className="bg-stone-800 hover:bg-red-600 h-10 w-10 rounded-full flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="#" 
                className="bg-stone-800 hover:bg-red-600 h-10 w-10 rounded-full flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="#" 
                className="bg-stone-800 hover:bg-red-600 h-10 w-10 rounded-full flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-serif text-xl mb-6">Useful Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-stone-400 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-stone-400 hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#menu" className="text-stone-400 hover:text-white transition-colors">Menu</a>
              </li>
              <li>
                <a href="#gallery" className="text-stone-400 hover:text-white transition-colors">Gallery</a>
              </li>
              <li>
                <a href="#contact" className="text-stone-400 hover:text-white transition-colors">Contact</a>
              </li>
              <li>
                <a href="#reservation" className="text-stone-400 hover:text-white transition-colors">Reservations</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif text-xl mb-6">Opening Hours</h4>
            <ul className="space-y-3">
              <li className="flex justify-between">
                <span className="text-stone-400">Monday - Friday</span>
                <span>12:00 - 23:00</span>
              </li>
              <li className="flex justify-between">
                <span className="text-stone-400">Saturday</span>
                <span>11:00 - 23:30</span>
              </li>
              <li className="flex justify-between">
                <span className="text-stone-400">Sunday</span>
                <span>11:00 - 23:30</span>
              </li>
              <li className="mt-6 text-amber-400">
                <span>* Kitchen closes 30 minutes before closing time</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif text-xl mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 text-red-600 mt-1 flex-shrink-0" />
                <span className="text-stone-400">
                  42 Connaught Circle, Connaught Place, New Delhi, 110001
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-red-600 flex-shrink-0" />
                <span className="text-stone-400">+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-red-600 flex-shrink-0" />
                <span className="text-stone-400">info@bellaitalia.in</span>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-stone-800 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-stone-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Bella Italia. All rights reserved.
          </p>
          
          <div className="text-stone-400 text-sm flex items-center">
            <span className="italic">Designed by</span>
            <span className="ml-2 text-amber-400 font-serif font-medium text-base relative group">
              Pratyush
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;