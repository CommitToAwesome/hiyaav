import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Scissors, Sparkles, Droplet, Brush, Gem, Leaf } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
}

const Services: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  
  useEffect(() => {
    if (sectionRef.current && headingRef.current && cardsRef.current) {
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
          
          gsap.to(cardsRef.current.querySelectorAll('.service-card'), {
            opacity: 1,
            y: 0,
            stagger: 0.15,
            duration: 0.8,
            delay: 0.3,
            ease: 'power3.out',
          });
        },
      });
    }
  }, []);
  
  const services: Service[] = [
    {
      icon: <Scissors className="w-8 h-8 text-[#d4af37]" />,
      title: 'Hair Styling',
      description: 'From precision cuts to elaborate updos, our expert stylists create looks that enhance your natural beauty and reflect your personal style.',
      image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1969&q=80'
    },
    {
      icon: <Sparkles className="w-8 h-8 text-[#d4af37]" />,
      title: 'Color Transformation',
      description: 'Our color specialists use premium products and innovative techniques to create vibrant, dimensional color that complements your skin tone and lifestyle.',
      image: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'
    },
    {
      icon: <Droplet className="w-8 h-8 text-[#d4af37]" />,
      title: 'Skin Treatments',
      description: 'Rejuvenate and revitalize your skin with our customized facial treatments, designed to address specific concerns and promote a healthy, radiant complexion.',
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1970&q=80'
    },
    {
      icon: <Brush className="w-8 h-8 text-[#d4af37]" />,
      title: 'Makeup Artistry',
      description: 'Whether for a special occasion or everyday glamour, our makeup artists create flawless looks that enhance your features and boost your confidence.',
      image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'
    },
    {
      icon: <Gem className="w-8 h-8 text-[#d4af37]" />,
      title: 'Nail Care',
      description: 'Indulge in our luxurious manicure and pedicure services, featuring exquisite nail art and long-lasting finishes for perfectly polished hands and feet.',
      image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'
    },
    {
      icon: <Leaf className="w-8 h-8 text-[#d4af37]" />,
      title: 'Wellness Therapies',
      description: 'Restore balance and vitality with our holistic wellness treatments, including massage therapy, aromatherapy, and relaxation rituals.',
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1970&q=80'
    }
  ];
  
  return (
    <section
      id="services"
      ref={sectionRef}
      className="section-padding bg-gradient-to-b from-black to-gray-900 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-0 w-32 h-32 rounded-full bg-[#d4af37]/10 blur-2xl"></div>
      <div className="absolute bottom-1/4 right-0 w-48 h-48 rounded-full bg-[#d4af37]/10 blur-2xl"></div>
      
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
            Our <span className="gold-text">Premium Services</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            animate={isInView ? { opacity: 1, width: '100px' } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-[#d4af37] mx-auto mb-8"
          ></motion.div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Indulge in our comprehensive range of beauty and wellness services, each designed to enhance your natural beauty and elevate your self-care routine.
          </p>
        </div>
        
        <div 
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <div 
              key={index}
              className="service-card bg-black/50 backdrop-blur-sm border border-[#d4af37]/20 rounded-lg overflow-hidden opacity-0 transform translate-y-10"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  {service.icon}
                  <h3 className="text-xl font-semibold ml-3 gold-text">{service.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <a 
                  href="#contact" 
                  className="inline-block text-[#d4af37] hover:text-white transition-colors duration-300"
                >
                  Book Now →
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cta-button inline-block px-8 py-3 bg-[#d4af37] text-black font-semibold rounded-full hover:bg-[#b8860b] transition-all duration-300"
          >
            Schedule Your Appointment
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Services;