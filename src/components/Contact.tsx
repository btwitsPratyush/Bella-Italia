import React from 'react';
import { Clock, Mail, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-stone-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="uppercase text-amber-400 font-medium tracking-wider mb-2">Contact Us</h2>
          <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6">
            Get in Touch
          </h3>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-stone-300 max-w-2xl mx-auto">
            We'd love to hear from you. Contact us for reservations or any inquiries.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-stone-800 rounded-lg p-8 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex items-start">
                <div className="bg-red-600 p-3 rounded-full mr-4">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-serif text-xl text-white mb-2">Call Us</h4>
                  <p className="text-stone-300">+91 98765 43210</p>
                  <p className="text-stone-300">+91 11 2345 6789</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-red-600 p-3 rounded-full mr-4">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-serif text-xl text-white mb-2">Email Us</h4>
                  <p className="text-stone-300">info@restaurant.com</p>
                  <p className="text-stone-300">reservations@restaurant.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-red-600 p-3 rounded-full mr-4">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-serif text-xl text-white mb-2">Opening Hours</h4>
                  <p className="text-stone-300">Monday - Friday: 12:00 PM - 11:00 PM</p>
                  <p className="text-stone-300">Saturday - Sunday: 11:00 AM - 11:30 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;