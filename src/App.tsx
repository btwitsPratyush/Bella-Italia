import React, { useEffect, useState } from 'react';
import { Menu, Phone, Clock, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import MenuSection from './components/MenuSection';
import ChefsSpecials from './components/ChefsSpecials';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Reservation from './components/Reservation';
import Footer from './components/Footer';
import FloatingContact from './components/FloatingContact';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-stone-900">
        <div className="text-center">
          <h1 className="font-serif text-3xl md:text-4xl text-amber-500 mb-4">Bella Italia</h1>
          <div className="flex space-x-2 justify-center">
            <div className="w-3 h-3 bg-red-600 rounded-full animate-bounce"></div>
            <div className="w-3 h-3 bg-white rounded-full animate-bounce [animation-delay:0.2s]"></div>
            <div className="w-3 h-3 bg-green-600 rounded-full animate-bounce [animation-delay:0.4s]"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="font-sans bg-stone-50 text-stone-800">
      <Navbar />
      <main>
        <Hero />
        <About />
        <MenuSection />
        <ChefsSpecials />
        <Testimonials />
        <Gallery />
        <Contact />
        <Reservation />
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
}

export default App;