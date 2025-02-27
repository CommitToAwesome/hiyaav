import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Gallery: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  
  useEffect(() => {
    if (sectionRef.current && headingRef.current && galleryRef.current) {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 80%',
        onEnter: () => {
          gsap.to(headingRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
          });
          
          gsap.to(galleryRef.current.querySelectorAll('.gallery-item'), {
            opacity: 1,
            y: 0,
            stagger: 0.1,
            duration: 0.8,
            delay: 0.3,
            ease: 'power3.out',
          });
        },
      });
    }
  }, []);
  
  const galleryImages = [
    {
      src: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
      alt: 'Hair Styling',
      category: 'Hair'
    },
    {
      src: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
      alt: 'Makeup Application',
      category: 'Makeup'
    },
    {
      src: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1970&q=80',
      alt: 'Facial Treatment',
      category: 'Skin'
    },
    {
      src: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
      alt: 'Professional Makeup',
      category: 'Makeup'
    },
    {
      src: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
      alt: 'Hair Coloring',
      category: 'Hair'
    },
    {
      src: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
      alt: 'Nail Art',
      category: 'Nails'
    },
    {
      src: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1970&q=80',
      alt: 'Spa Treatment',
      category: 'Wellness'
    },
    {
      src: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1969&q=80',
      alt: 'Hair Styling',
      category: 'Hair'
    }
  ];
  
  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="section-padding bg-black relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#d4af37]/5 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-[#d4af37]/10 blur-3xl"></div>
      
      <div className="container mx-auto">
        <div 
          ref={headingRef}
          className="text-center mb-16 opacity-0 transform translate-y-10"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Our <span className="gold-text">Gallery</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            animate={isInView ? { opacity: 1, width: '100px' } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-[#d4af37] mx-auto mb-8"
          ></motion.div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore our portfolio of transformative beauty services and be inspired by the artistry of our talented team.
          </p>
        </div>
        
        <div 
          ref={galleryRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="gallery-item relative group overflow-hidden rounded-lg opacity-0 transform translate-y-10"
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
                <h3 className="text-white text-xl font-semibold mb-2">{image.alt}</h3>
                <span className="text-[#d4af37] text-sm">{image.category}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-300 mb-6">
            Follow us on Instagram for more inspiration and behind-the-scenes content.
          </p>
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cta-button inline-block px-8 py-3 border-2 border-[#d4af37] text-white font-semibold rounded-full hover:bg-[#d4af37]/20 transition-all duration-300"
          >
            @HIYAAV_Beauty
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;