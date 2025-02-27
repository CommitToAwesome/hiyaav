import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface Testimonial {
  name: string;
  role: string;
  image: string;
  quote: string;
  rating: number;
}

const Testimonials: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  
  useEffect(() => {
    if (sectionRef.current && headingRef.current && testimonialsRef.current) {
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
          
          gsap.to(testimonialsRef.current.querySelectorAll('.testimonial-card'), {
            opacity: 1,
            y: 0,
            stagger: 0.2,
            duration: 0.8,
            delay: 0.3,
            ease: 'power3.out',
          });
        },
      });
    }
  }, []);
  
  const testimonials: Testimonial[] = [
    {
      name: 'Sophia Anderson',
      role: 'Regular Client',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
      quote: 'HIYAAV has completely transformed my beauty routine. The stylists are true artists who listen to what I want and always exceed my expectations. The atmosphere is luxurious and welcoming, making every visit a treat for the senses.',
      rating: 5
    },
    {
      name: 'Michael Johnson',
      role: 'First-time Client',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
      quote: "I was nervous about trying a new salon, but the team at HIYAAV immediately put me at ease. The attention to detail and personalized service were outstanding. I've never felt more confident with my appearance.",
      rating: 5
    },
    {
      name: 'Emma Rodriguez',
      role: 'Bridal Client',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1970&q=80',
      quote: "HIYAAV made my wedding day absolutely perfect! From the trial sessions to the big day, they were professional, attentive, and incredibly talented. My hair and makeup lasted all day and looked flawless in photos.",
      rating: 5
    },
    {
      name: 'David Chen',
      role: 'Monthly Client',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
      quote: "I've been coming to HIYAAV for over a year now, and I'm consistently impressed by their innovative techniques and commitment to excellence. The staff is knowledgeable about the latest trends and always helps me look my best.",
      rating: 5
    }
  ];
  
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };
  
  const visibleTestimonials = () => {
    // For mobile, show only the current testimonial
    // For desktop, show 3 testimonials at a time
    return testimonials.slice(currentIndex, currentIndex + 3);
  };
  
  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="section-padding bg-gradient-to-b from-gray-900 to-black relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-1/3 left-0 w-48 h-48 rounded-full bg-[#d4af37]/10 blur-3xl"></div>
      <div className="absolute bottom-1/3 right-0 w-64 h-64 rounded-full bg-[#d4af37]/5 blur-3xl"></div>
      
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
            Client <span className="gold-text">Testimonials</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            animate={isInView ? { opacity: 1, width: '100px' } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-[#d4af37] mx-auto mb-8"
          ></motion.div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Discover what our clients have to say about their experiences at HIYAAV Salon & Aesthetic Center.
          </p>
        </div>
        
        {/* Mobile Testimonials (Carousel) */}
        <div className="md:hidden relative">
          <div 
            ref={testimonialsRef}
            className="overflow-hidden"
          >
            <div 
              className="testimonial-card bg-black/50 backdrop-blur-sm border border-[#d4af37]/20 rounded-lg p-6 opacity-0 transform translate-y-10"
            >
              <div className="flex items-center mb-4">
                <img 
                  src={testimonials[currentIndex].image} 
                  alt={testimonials[currentIndex].name} 
                  className="w-16 h-16 rounded-full object-cover border-2 border-[#d4af37]"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold gold-text">{testimonials[currentIndex].name}</h3>
                  <p className="text-gray-400 text-sm">{testimonials[currentIndex].role}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#d4af37] fill-[#d4af37]" />
                ))}
              </div>
              <p className="text-gray-300 italic">"{testimonials[currentIndex].quote}"</p>
            </div>
          </div>
          
          <div className="flex justify-center mt-6 space-x-4">
            <button 
              onClick={prevTestimonial}
              className="p-2 rounded-full border border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-black transition-colors duration-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={nextTestimonial}
              className="p-2 rounded-full border border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-black transition-colors duration-300"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        {/* Desktop Testimonials (Grid) */}
        <div 
          ref={testimonialsRef}
          className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="testimonial-card bg-black/50 backdrop-blur-sm border border-[#d4af37]/20 rounded-lg p-6 opacity-0 transform translate-y-10"
            >
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-16 h-16 rounded-full object-cover border-2 border-[#d4af37]"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold gold-text">{testimonial.name}</h3>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#d4af37] fill-[#d4af37]" />
                ))}
              </div>
              <p className="text-gray-300 italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <p className="text-gray-300 mb-6">
            Join our community of satisfied clients and experience the HIYAAV difference.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cta-button inline-block px-8 py-3 bg-[#d4af37] text-black font-semibold rounded-full hover:bg-[#b8860b] transition-all duration-300"
          >
            Book Your First Appointment
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;