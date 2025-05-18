import React, { useEffect } from 'react';

const About: React.FC = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      
      elements.forEach(element => {
        const position = element.getBoundingClientRect();
        
        // Check if element is in viewport
        if(position.top < window.innerHeight * 0.8) {
          element.classList.add('animate-fade-in');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <section id="about" className="py-20 bg-stone-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2 animate-on-scroll opacity-0 transition-all duration-1000 translate-y-8">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/2233348/pexels-photo-2233348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Chef preparing pasta"
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-red-600 text-white p-4 md:p-6 rounded-lg shadow-lg">
                <p className="font-serif text-xl md:text-2xl">Est. 1998</p>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 animate-on-scroll opacity-0 transition-all duration-1000 translate-y-8 delay-200">
            <h2 className="uppercase text-red-600 font-medium tracking-wider mb-2">Our Story</h2>
            <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6 text-stone-800">
              A Taste of Italian Tradition in the Heart of India
            </h3>
            <div className="w-20 h-1 bg-amber-500 mb-6"></div>
            <p className="text-stone-600 mb-6 leading-relaxed">
              Founded in 1998 by Italian-born chef Alessandro Rossi, Bella Italia began as a humble tribute to his grandmother's cherished recipes. After falling in love with India's rich culture and vibrant flavors during his travels, Alessandro made the bold decision to bring authentic Italian cuisine to Delhi.
            </p>
            <p className="text-stone-600 mb-6 leading-relaxed">
              Over the years, our restaurant has evolved to embrace the beautiful harmony between Italian and Indian culinary traditions. Each dish tells a story of cultural exchange, where traditional Italian techniques meet subtle Indian influences, creating a dining experience unlike any other.
            </p>
            <p className="text-stone-600 mb-8 leading-relaxed">
              Today, Bella Italia stands as a testament to Alessandro's vision, welcoming guests to savor the passionate craftsmanship behind every dish, served in an atmosphere that combines Italian warmth with Indian hospitality.
            </p>
            <a
              href="#reservation"
              className="inline-block bg-stone-800 hover:bg-stone-900 text-white px-6 py-3 rounded-md transition-colors"
            >
              Book Your Experience
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;