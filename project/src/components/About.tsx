import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  
  useEffect(() => {
    if (sectionRef.current && textRef.current && imageRef.current && statsRef.current) {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 80%',
        onEnter: () => {
          gsap.to(textRef.current, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
          });
          
          gsap.to(imageRef.current, {
            opacity: 1,
            x: 0,
            duration: 1,
            delay: 0.3,
            ease: 'power3.out',
          });
          
          gsap.to(statsRef.current.querySelectorAll('.stat-item'), {
            opacity: 1,
            y: 0,
            stagger: 0.2,
            duration: 0.8,
            delay: 0.5,
            ease: 'power3.out',
          });
        },
      });
    }
  }, []);
  
  const stats = [
    { value: '10+', label: 'Years Experience' },
    { value: '5000+', label: 'Happy Clients' },
    { value: '20+', label: 'Expert Stylists' },
    { value: '50+', label: 'Premium Services' },
  ];
  
  return (
    <section
      id="about"
      ref={sectionRef}
      className="section-padding bg-black relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-[#d4af37]/10 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[#d4af37]/5 blur-3xl"></div>
      
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            About <span className="gold-text">HIYAAV</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            animate={isInView ? { opacity: 1, width: '100px' } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-[#d4af37] mx-auto mb-8"
          ></motion.div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div 
            ref={textRef}
            className="w-full md:w-1/2 opacity-0 transform translate-y-10"
          >
            <h3 className="text-2xl md:text-3xl font-semibold mb-6 gold-text">Our Story</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Founded in 2013, HIYAAV began as a small salon with a big vision: to create a sanctuary where beauty, wellness, and luxury converge. Our founder, with over 15 years of experience in the beauty industry, envisioned a place where clients could experience transformative beauty services in an atmosphere of elegance and tranquility.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Today, HIYAAV has evolved into a premier salon and aesthetic center, renowned for our commitment to excellence, innovation, and personalized care. We combine time-honored beauty traditions with cutting-edge techniques and premium products to deliver exceptional results.
            </p>
            <h3 className="text-2xl md:text-3xl font-semibold mb-6 gold-text">Our Philosophy</h3>
            <p className="text-gray-300 leading-relaxed">
              At HIYAAV, we believe that true beauty emanates from within and is unique to each individual. Our approach is holistic, focusing not just on external appearance but on enhancing your natural beauty while nurturing your overall well-being. We are committed to creating a warm, inclusive environment where every client feels valued, understood, and transformed.
            </p>
          </div>
          
          <div 
            ref={imageRef}
            className="w-full md:w-1/2 opacity-0 transform translate-x-10"
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#d4af37]"></div>
              <img 
                src="https://images.unsplash.com/photo-1470259078422-826894b933aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
                alt="HIYAAV Salon Interior" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
        
        <div 
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
        >
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="stat-item text-center p-6 border border-[#d4af37]/30 rounded-lg opacity-0 transform translate-y-10"
            >
              <h3 className="text-3xl md:text-4xl font-bold gold-text mb-2">{stat.value}</h3>
              <p className="text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;