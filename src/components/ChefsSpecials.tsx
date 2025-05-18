import React from 'react';

const specials = [
  {
    name: "Risotto al Tartufo e Cardamomo",
    description: "Creamy arborio rice with black truffle, cardamom, parmesan, and mascarpone",
    price: "₹720",
    image: "https://images.pexels.com/photos/5836771/pexels-photo-5836771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tag: "Chef's Signature"
  },
  {
    name: "Ossobuco alla Milanese",
    description: "Slow-braised veal shanks with garam masala, saffron risotto and gremolata",
    price: "₹950",
    image: "https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tag: "Most Popular"
  },
  {
    name: "Branzino al Forno",
    description: "Whole sea bass baked with lemon, herbs and Indian five-spice mixture",
    price: "₹850",
    image: "https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tag: "New"
  }
];

const ChefsSpecials: React.FC = () => {
  return (
    <section id="specials" className="py-20 bg-stone-900 text-white relative">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-stone-900 skew-y-1"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="uppercase text-amber-400 font-medium tracking-wider mb-2">Chef's Selection</h2>
          <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6">
            Our Special Creations
          </h3>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-stone-300 max-w-2xl mx-auto">
            Experience our chef's most celebrated dishes, where traditional Italian techniques 
            meet Indian flavors to create unique culinary masterpieces.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {specials.map((special, index) => (
            <div 
              key={index}
              className="relative bg-stone-800 rounded-lg overflow-hidden group transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="absolute top-4 right-4 z-10">
                <span className="bg-red-600 text-white text-xs uppercase font-bold py-1 px-2 rounded">
                  {special.tag}
                </span>
              </div>
              
              <div className="h-64 overflow-hidden">
                <img 
                  src={special.image} 
                  alt={special.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900 to-transparent opacity-70"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-serif text-xl text-white">{special.name}</h4>
                  <span className="font-medium text-amber-400">{special.price}</span>
                </div>
                <p className="text-stone-300 text-sm mb-4">{special.description}</p>
                <a 
                  href="#reservation" 
                  className="inline-block bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded transition-colors text-sm"
                >
                  Reserve to Try
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Bottom decorative element */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-stone-900 -skew-y-1"></div>
    </section>
  );
};

export default ChefsSpecials;