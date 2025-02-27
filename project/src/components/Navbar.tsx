import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Instagram, Facebook, Twitter } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  const mobileMenuVariants = {
    closed: { opacity: 0, x: '100%' },
    open: { opacity: 1, x: 0 },
  };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/90 backdrop-blur-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.div variants={itemVariants} className="logo-container">
          <a href="#home" className="text-2xl md:text-3xl font-bold gold-text">
            HIYAAV
          </a>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.div variants={itemVariants} className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="nav-link text-white hover:text-[#d4af37] transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
        </motion.div>

        {/* Social Icons */}
        <motion.div variants={itemVariants} className="hidden md:flex space-x-4">
          <a href="#" className="text-white hover:text-[#d4af37] transition-colors duration-300">
            <Instagram size={20} />
          </a>
          <a href="#" className="text-white hover:text-[#d4af37] transition-colors duration-300">
            <Facebook size={20} />
          </a>
          <a href="#" className="text-white hover:text-[#d4af37] transition-colors duration-300">
            <Twitter size={20} />
          </a>
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.div variants={itemVariants} className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
        variants={mobileMenuVariants}
        className="md:hidden fixed top-0 right-0 h-screen w-3/4 bg-black/95 backdrop-blur-md z-50 p-8"
        transition={{ type: 'tween', duration: 0.3 }}
      >
        <div className="flex justify-end mb-8">
          <button
            onClick={() => setIsOpen(false)}
            className="text-white focus:outline-none"
          >
            <X size={24} />
          </button>
        </div>
        <div className="flex flex-col space-y-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xl text-white hover:text-[#d4af37] transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="flex space-x-4 mt-8">
            <a href="#" className="text-white hover:text-[#d4af37] transition-colors duration-300">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-white hover:text-[#d4af37] transition-colors duration-300">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-white hover:text-[#d4af37] transition-colors duration-300">
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;