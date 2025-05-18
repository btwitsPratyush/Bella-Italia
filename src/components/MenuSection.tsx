import React, { useState } from 'react';
import { Download } from 'lucide-react';

const menuItems = {
  antipasti: [
    {
      name: "Bruschetta Tricolore",
      description: "Toasted garlic bread topped with tomatoes, basil, and buffalo mozzarella with Indian spice-infused olive oil",
      price: "₹350",
      image: "https://images.pexels.com/photos/2456435/pexels-photo-2456435.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Arancini di Riso",
      description: "Saffron-infused rice balls stuffed with mozzarella and green peas, served with spicy arrabiata sauce",
      price: "₹420",
      image: "https://images.pexels.com/photos/5639411/pexels-photo-5639411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Carpaccio di Manzo",
      description: "Thinly sliced raw beef with curry leaf-infused lemon dressing, arugula and parmesan shavings",
      price: "₹480",
      image: "https://images.pexels.com/photos/8696567/pexels-photo-8696567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ],
  pasta: [
    {
      name: "Spaghetti al Pomodoro e Basilico",
      description: "Classic spaghetti with fresh tomato sauce, basil and a hint of Kashmiri chili",
      price: "₹450",
      image: "https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Fettuccine al Fungi",
      description: "Hand-rolled fettuccine with wild mushrooms, cream and truffle oil",
      price: "₹550",
      image: "https://images.pexels.com/photos/6287525/pexels-photo-6287525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Linguine ai Gamberi",
      description: "Linguine pasta with tiger prawns, garlic, cherry tomatoes and garam masala-infused white wine sauce",
      price: "₹650",
      image: "https://images.pexels.com/photos/725997/pexels-photo-725997.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ],
  pizze: [
    {
      name: "Margherita Classica",
      description: "San Marzano tomato sauce, fresh mozzarella, basil and extra virgin olive oil",
      price: "₹520",
      image: "https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Quattro Formaggi",
      description: "Four cheese pizza with mozzarella, gorgonzola, parmesan and ricotta",
      price: "₹580",
      image: "https://images.pexels.com/photos/2619970/pexels-photo-2619970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Pizza Tandoori",
      description: "Tandoori chicken, red onions, bell peppers on a thin crust with mint yogurt drizzle",
      price: "₹620",
      image: "https://images.pexels.com/photos/1049626/pexels-photo-1049626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ],
  dolci: [
    {
      name: "Tiramisu",
      description: "Classic Italian dessert with cardamom-infused coffee, mascarpone and cocoa",
      price: "₹380",
      image: "https://images.pexels.com/photos/6880219/pexels-photo-6880219.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Panna Cotta",
      description: "Creamy vanilla panna cotta with saffron and rose syrup",
      price: "₹350",
      image: "https://images.pexels.com/photos/6133305/pexels-photo-6133305.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Gelato Artigianale",
      description: "Selection of homemade gelato: pistachio, saffron, mango and chocolate",
      price: "₹320",
      image: "https://images.pexels.com/photos/5060281/pexels-photo-5060281.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ]
};

const MenuSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'antipasti' | 'pasta' | 'pizze' | 'dolci'>('antipasti');

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="uppercase text-red-600 font-medium tracking-wider mb-2">Our Menu</h2>
          <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-4 text-stone-800">
            Culinary Excellence
          </h3>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-stone-600 max-w-2xl mx-auto">
            Our menu features traditional Italian recipes with a subtle Indian influence, 
            crafted with locally-sourced ingredients and imported Italian specialties.
          </p>
          
          <div className="mt-8 flex justify-center">
            <a 
              href="#" 
              className="flex items-center text-stone-800 hover:text-red-600 transition-colors"
            >
              <Download size={18} className="mr-2" />
              <span>Download Full Menu</span>
            </a>
          </div>
        </div>
        
        {/* Menu Categories */}
        <div className="flex flex-wrap justify-center mb-12 space-x-1 md:space-x-4">
          {['antipasti', 'pasta', 'pizze', 'dolci'].map((category) => (
            <button
              key={category}
              className={`px-4 py-2 my-1 rounded-full capitalize transition-all ${
                activeCategory === category
                  ? 'bg-red-600 text-white'
                  : 'bg-stone-200 text-stone-800 hover:bg-stone-300'
              }`}
              onClick={() => setActiveCategory(category as any)}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Menu Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems[activeCategory].map((item, index) => (
            <div 
              key={index} 
              className="bg-stone-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-serif text-xl text-stone-800">{item.name}</h4>
                  <span className="font-medium text-red-600">{item.price}</span>
                </div>
                <p className="text-stone-600 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;