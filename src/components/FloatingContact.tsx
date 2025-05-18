import React, { useState } from 'react';
import { Phone, X } from 'lucide-react';

const FloatingContact: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="absolute bottom-16 right-0 bg-white rounded-lg shadow-xl p-4 mb-4 w-64 animate-fade-in">
          <h3 className="font-serif text-lg text-stone-800 mb-3">Contact Us</h3>
          <div className="space-y-3">
            <a 
              href="tel:+919876543210" 
              className="flex items-center text-stone-700 hover:text-red-600 transition-colors"
            >
              <Phone size={16} className="mr-2" />
              <span>+91 98765 43210</span>
            </a>
            <a 
              href="https://wa.me/919876543210" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded flex items-center justify-center transition-colors"
            >
              <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.6 6.3C16.2 5 14.3 4.2 12.3 4.2C8.1 4.2 4.7 7.6 4.7 11.8C4.7 13.2 5.1 14.5 5.7 15.7L4.6 19.8L8.8 18.7C10 19.3 11.2 19.6 12.3 19.6H12.4C16.6 19.6 20 16.2 20 12C20 9.9 19.1 8 17.6 6.3ZM12.3 18.2C11.3 18.2 10.3 17.9 9.4 17.4L9.2 17.2L6.7 17.9L7.4 15.5L7.2 15.2C6.6 14.3 6.3 13.1 6.3 11.8C6.3 8.4 9 5.7 12.4 5.7C14.1 5.7 15.6 6.3 16.8 7.5C18 8.7 18.5 10.2 18.5 11.9C18.5 15.3 15.7 18.2 12.3 18.2ZM15.6 13.3C15.4 13.2 14.4 12.7 14.2 12.6C14 12.5 13.9 12.5 13.7 12.7C13.5 12.9 13.1 13.4 13 13.5C12.9 13.7 12.7 13.7 12.5 13.6C11.5 13.1 10.8 12.7 10.1 11.4C9.9 11.1 10.1 10.9 10.3 10.7C10.4 10.6 10.6 10.4 10.7 10.2C10.8 10.1 10.8 9.9 10.7 9.8C10.6 9.7 10.1 8.7 9.9 8.3C9.7 7.9 9.5 8 9.4 8C9.3 8 9.1 8 9 8C8.8 8 8.6 8.1 8.4 8.3C8.2 8.5 7.7 9 7.7 10C7.7 11 8.4 12 8.5 12.1C8.6 12.3 10.1 14.7 12.4 15.5C13.9 16.1 14.5 16.1 15.2 16C15.6 15.9 16.5 15.4 16.7 15C16.9 14.5 16.9 14.1 16.8 14.1C16.7 14 16.6 14 16.4 13.9C16.2 13.5 15.8 13.4 15.6 13.3Z" fill="currentColor"/>
              </svg>
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      )}
      
      <button
        onClick={toggleOpen}
        className={`${
          isOpen 
            ? 'bg-stone-900 hover:bg-stone-800' 
            : 'bg-red-600 hover:bg-red-700'
        } h-14 w-14 rounded-full flex items-center justify-center text-white shadow-lg transition-colors focus:outline-none`}
        aria-label={isOpen ? 'Close contact options' : 'Open contact options'}
      >
        {isOpen ? <X size={24} /> : <Phone size={24} />}
      </button>
    </div>
  );
};

export default FloatingContact;