import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { gsap } from 'gsap';

const Hero: React.FC = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textRef.current && imageRef.current) {
      const tl = gsap.timeline();
      
      tl.from(textRef.current.querySelectorAll('.gsap-text'), {
        y: 100,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: 'power3.out',
      });
      
      tl.from(imageRef.current, {
        scale: 0.8,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      }, '-=0.5');
    }
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80')",
            backgroundAttachment: "fixed"
          }}
        ></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 flex flex-col md:flex-row items-center justify-between">
        <div ref={textRef} className="w-full md:w-1/2 text-center md:text-left mb-12 md:mb-0">
          <h1 className="gsap-text text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-white">
            Discover Your <span className="gold-text">True Beauty</span>
          </h1>
          <p className="gsap-text text-lg md:text-xl text-gray-200 mb-8 max-w-xl">
            HIYAAV Salon & Aesthetic Center offers premium beauty services that transform, enhance, and celebrate your unique beauty.
          </p>
          <div className="gsap-text flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <motion.a
              href="#services"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cta-button px-8 py-3 bg-[#d4af37] text-black font-semibold rounded-full hover:bg-[#b8860b] transition-all duration-300"
            >
              Explore Services
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cta-button px-8 py-3 border-2 border-[#d4af37] text-white font-semibold rounded-full hover:bg-[#d4af37]/20 transition-all duration-300"
            >
              Book Appointment
            </motion.a>
          </div>
        </div>
        
        <div ref={imageRef} className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            <div className="absolute inset-0 rounded-full border-4 border-[#d4af37] animate-pulse"></div>
            <img
              src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
              alt="HIYAAV Beauty"
              className="absolute inset-4 object-cover rounded-full"
            />
          </div>
        </div>
      </div>
      
      <motion.div 
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <ChevronDown size={32} className="text-[#d4af37]" />
      </motion.div>
    </section>
  );
};

export default Hero;