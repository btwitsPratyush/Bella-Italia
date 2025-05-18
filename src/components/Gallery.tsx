import React, { useState } from 'react';

const images = [
  {
    src: "https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Interior of restaurant",
    category: "ambiance"
  },
  {
    src: "https://images.pexels.com/photos/3338497/pexels-photo-3338497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Chef preparing pasta",
    category: "kitchen"
  },
  {
    src: "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Restaurant terrace",
    category: "ambiance"
  },
  {
    src: "https://images.pexels.com/photos/2664149/pexels-photo-2664149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Wine collection",
    category: "drinks"
  },
  {
    src: "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Food plating",
    category: "food"
  },
  {
    src: "https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Private dining area",
    category: "ambiance"
  },
  {
    src: "https://images.pexels.com/photos/3338537/pexels-photo-3338537.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Dessert preparation",
    category: "food"
  },
  {
    src: "https://images.pexels.com/photos/3201920/pexels-photo-3201920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Bar area",
    category: "drinks"
  }
];

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filters = ['all', 'food', 'drinks', 'ambiance', 'kitchen'];
  
  const filteredImages = activeFilter === 'all' 
    ? images 
    : images.filter(image => image.category === activeFilter);

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="uppercase text-red-600 font-medium tracking-wider mb-2">Our Gallery</h2>
          <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6 text-stone-800">
            Experience Bella Italia
          </h3>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-stone-600 max-w-2xl mx-auto">
            Take a visual journey through our restaurant, from our meticulously prepared dishes 
            to our warm and inviting atmosphere.
          </p>
        </div>
        
        {/* Filters */}
        <div className="flex flex-wrap justify-center mb-8 space-x-2">
          {filters.map(filter => (
            <button
              key={filter}
              className={`px-4 py-2 my-1 rounded-full capitalize transition-all ${
                activeFilter === filter
                  ? 'bg-red-600 text-white'
                  : 'bg-stone-200 text-stone-800 hover:bg-stone-300'
              }`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg cursor-pointer relative group"
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Image Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl mx-auto">
              <button
                className="absolute top-0 right-0 -mt-12 -mr-12 text-white hover:text-red-500 transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <img
                src={selectedImage}
                alt="Enlarged gallery image"
                className="max-h-[80vh] max-w-full"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;