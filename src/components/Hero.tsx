import React, { useEffect, useState } from 'react';

const images = [
  'https://images.pexels.com/photos/1527603/pexels-photo-1527603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
];

const Hero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      id="home" 
      className="relative h-screen w-full bg-black overflow-hidden"
    >
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${image})`,
          }}
        />
      ))}
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      {/* Content */}
      <div className="relative h-full flex items-center justify-center text-center px-4">
        <div className="max-w-4xl" data-aos="fade-up">
          <h2 className="text-amber-400 font-serif text-xl md:text-2xl mb-2 opacity-0 animate-[fadeInUp_1s_ease-out_0.5s_forwards]">
            Authentic Italian Cuisine with an Indian Twist
          </h2>
          <h1 className="text-white font-serif text-4xl md:text-6xl lg:text-7xl mb-6 opacity-0 animate-[fadeInUp_1s_ease-out_0.8s_forwards]">
            Experience the Taste of 
            <span className="text-red-600"> Italy </span>
            in 
            <span className="text-green-600"> India</span>
          </h1>
          <p className="text-gray-200 text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-0 animate-[fadeInUp_1s_ease-out_1s_forwards]">
            Discover our chef's handcrafted dishes that blend traditional Italian recipes with subtle
            Indian influences, creating a unique culinary experience.
          </p>
          <div className="space-x-4 opacity-0 animate-[fadeInUp_1s_ease-out_1.2s_forwards]">
            <a
              href="#menu"
              className="inline-block bg-transparent hover:bg-white text-white hover:text-stone-900 border-2 border-white px-6 py-3 rounded-md transition-colors duration-300"
            >
              Explore Menu
            </a>
            <a
              href="#reservation"
              className="inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md transition-colors duration-300"
            >
              Reserve Table
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;