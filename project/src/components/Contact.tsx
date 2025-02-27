import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  
  useEffect(() => {
    if (sectionRef.current && headingRef.current && formRef.current && infoRef.current) {
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
          
          gsap.to(formRef.current, {
            opacity: 1,
            x: 0,
            duration: 0.8,
            delay: 0.3,
            ease: 'power3.out',
          });
          
          gsap.to(infoRef.current, {
            opacity: 1,
            x: 0,
            duration: 0.8,
            delay: 0.5,
            ease: 'power3.out',
          });
        },
      });
    }
  }, []);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send the form data to a server
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    
    // Reset form after submission
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      });
      setFormSubmitted(false);
    }, 3000);
  };
  
  const services = [
    'Hair Styling',
    'Color Transformation',
    'Skin Treatments',
    'Makeup Artistry',
    'Nail Care',
    'Wellness Therapies',
    'Other',
  ];
  
  return (
    <section
      id="contact"
      ref={sectionRef}
      className="section-padding bg-black relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-[#d4af37]/10 blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-[#d4af37]/5 blur-3xl"></div>
      
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
            Get in <span className="gold-text">Touch</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            animate={isInView ? { opacity: 1, width: '100px' } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-[#d4af37] mx-auto mb-8"
          ></motion.div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Schedule your appointment or inquire about our services. We're here to help you look and feel your best.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12">
          <form 
            ref={formRef}
            onSubmit={handleSubmit}
            className="w-full lg:w-1/2 bg-black/50 backdrop-blur-sm border border-[#d4af37]/20 rounded-lg p-8 opacity-0 transform translate-x-10"
          >
            <h3 className="text-2xl font-semibold mb-6 gold-text">Book an Appointment</h3>
            
            {formSubmitted ? (
              <div className="bg-green-500/20 border border-green-500 rounded-lg p-4 mb-6">
                <p className="text-green-400">Thank you for your message! We'll get back to you shortly.</p>
              </div>
            ) : null}
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#d4af37]"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#d4af37]"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="phone" className="block text-gray-300 mb-2">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#d4af37]"
                />
              </div>
              <div>
                <label htmlFor="service" className="block text-gray-300 mb-2">Service Interested In</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#d4af37]"
                >
                  <option value="">Select a service</option>
                  {services.map((service) => (
                    <option key={service} value={service}>{service}</option>
                  ))}
                </select>
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-300 mb-2">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#d4af37]"
              ></textarea>
            </div>
            
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 bg-[#d4af37] text-black font-semibold rounded-lg hover:bg-[#b8860b] transition-colors duration-300"
            >
              Submit Request
            </motion.button>
          </form>
          
          <div 
            ref={infoRef}
            className="w-full lg:w-1/2 opacity-0 transform -translate-x-10"
          >
            <div className="bg-black/50 backdrop-blur-sm border border-[#d4af37]/20 rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-semibold mb-6 gold-text">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-[#d4af37] mt-1 mr-4" />
                  <div>
                    <h4 className="font-semibold mb-1">Our Location</h4>
                    <p className="text-gray-300">123 Beauty Boulevard, Luxury District, New York, NY 10001</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-[#d4af37] mt-1 mr-4" />
                  <div>
                    <h4 className="font-semibold mb-1">Phone Number</h4>
                    <p className="text-gray-300">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-[#d4af37] mt-1 mr-4" />
                  <div>
                    <h4 className="font-semibold mb-1">Email Address</h4>
                    <p className="text-gray-300">info@hiyaav.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-[#d4af37] mt-1 mr-4" />
                  <div>
                    <h4 className="font-semibold mb-1">Business Hours</h4>
                    <p className="text-gray-300">Monday - Friday: 9:00 AM - 8:00 PM</p>
                    <p className="text-gray-300">Saturday: 10:00 AM - 6:00 PM</p>
                    <p className="text-gray-300">Sunday: 11:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-black/50 backdrop-blur-sm border border-[#d4af37]/20 rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-6 gold-text">Connect With Us</h3>
              
              <div className="flex space-x-6 mb-6">
                <a 
                  href="#" 
                  className="w-12 h-12 rounded-full bg-[#d4af37]/10 flex items-center justify-center hover:bg-[#d4af37] transition-colors duration-300 group"
                >
                  <Instagram className="w-6 h-6 text-[#d4af37] group-hover:text-black" />
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 rounded-full bg-[#d4af37]/10 flex items-center justify-center hover:bg-[#d4af37] transition-colors duration-300 group"
                >
                  <Facebook className="w-6 h-6 text-[#d4af37] group-hover:text-black" />
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 rounded-full bg-[#d4af37]/10 flex items-center justify-center hover:bg-[#d4af37] transition-colors duration-300 group"
                >
                  <Twitter className="w-6 h-6 text-[#d4af37] group-hover:text-black" />
                </a>
              </div>
              
              <p className="text-gray-300 mb-6">
                Follow us on social media for beauty tips, special offers, and to stay updated on the latest trends.
              </p>
              
              <div className="bg-[#d4af37]/10 rounded-lg p-4 border border-[#d4af37]/30">
                <h4 className="font-semibold mb-2">Newsletter Signup</h4>
                <p className="text-gray-300 text-sm mb-4">
                  Subscribe to our newsletter for exclusive offers and beauty insights.
                </p>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-grow bg-gray-900 border border-gray-700 rounded-l-lg px-4 py-2 text-white focus:outline-none focus:border-[#d4af37]"
                  />
                  <button className="bg-[#d4af37] text-black font-semibold px-4 py-2 rounded-r-lg hover:bg-[#b8860b] transition-colors duration-300">
                    Subscribe
                  </button>
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