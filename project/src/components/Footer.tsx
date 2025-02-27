import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Twitter, ChevronUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  
  return (
    <footer className="bg-black relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#d4af37]/50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent"></div>
      
      <div className="container mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl font-bold gold-text mb-6">HIYAAV</h3>
            <p className="text-gray-400 mb-6">
              Elevating beauty through artistry, innovation, and personalized care. Your journey to radiance begins here.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-[#d4af37]/10 flex items-center justify-center hover:bg-[#d4af37] transition-colors duration-300 group"
              >
                <Instagram className="w-5 h-5 text-[#d4af37] group-hover:text-black" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-[#d4af37]/10 flex items-center justify-center hover:bg-[#d4af37] transition-colors duration-300 group"
              >
                <Facebook className="w-5 h-5 text-[#d4af37] group-hover:text-black" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-[#d4af37]/10 flex items-center justify-center hover:bg-[#d4af37] transition-colors duration-300 group"
              >
                <Twitter className="w-5 h-5 text-[#d4af37] group-hover:text-black" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-400 hover:text-[#d4af37] transition-colors duration-300">Home</a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-[#d4af37] transition-colors duration-300">About Us</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-[#d4af37] transition-colors duration-300">Services</a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-400 hover:text-[#d4af37] transition-colors duration-300">Gallery</a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-[#d4af37] transition-colors duration-300">Testimonials</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-[#d4af37] transition-colors duration-300">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-gray-400 hover:text-[#d4af37] transition-colors duration-300">Hair Styling</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-[#d4af37] transition-colors duration-300">Color Transformation</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-[#d4af37] transition-colors duration-300">Skin Treatments</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-[#d4af37] transition-colors duration-300">Makeup Artistry</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-[#d4af37] transition-colors duration-300">Nail Care</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-[#d4af37] transition-colors duration-300">Wellness Therapies</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-3">
              <li className="text-gray-400">
                123 Beauty Boulevard, Luxury District, New York, NY 10001
              </li>
              <li>
                <a href="tel:+15551234567" className="text-gray-400 hover:text-[#d4af37] transition-colors duration-300">+1 (555) 123-4567</a>
              </li>
              <li>
                <a href="mailto:info@hiyaav.com" className="text-gray-400 hover:text-[#d4af37] transition-colors duration-300">info@hiyaav.com</a>
              </li>
              <li className="text-gray-400">
                Monday - Friday: 9:00 AM - 8:00 PM
              </li>
              <li className="text-gray-400">
                Saturday: 10:00 AM - 6:00 PM
              </li>
              <li className="text-gray-400">
                Sunday: 11:00 AM - 5:00 PM
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} HIYAAV Salon & Aesthetic Center. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 text-sm hover:text-[#d4af37] transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="text-gray-500 text-sm hover:text-[#d4af37] transition-colors duration-300">Terms of Service</a>
            <a href="#" className="text-gray-500 text-sm hover:text-[#d4af37] transition-colors duration-300">Sitemap</a>
          </div>
        </div>
      </div>
      
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-[#d4af37] flex items-center justify-center shadow-lg z-50"
      >
        <ChevronUp className="w-6 h-6 text-black" />
      </motion.button>
    </footer>
  );
};

export default Footer;