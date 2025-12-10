'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Home, FolderGit2, Mail, Linkedin } from 'lucide-react';

const AnimatedNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 1. Defined Center Items (Home, Projects, LinkedIn)
  const centerNavItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Projects', href: '/#projects', icon: FolderGit2 },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/saurav-kumar-262219337/', icon: Linkedin },
  ];

  // 2. Defined Right/End Item (Contact)
  const contactItem = { name: 'Contact', href: '/#contact', icon: Mail };

  // Combine for mobile menu
  const allNavItems = [...centerNavItems, contactItem];

  const logoVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i: number) => ({ 
      opacity: 1, 
      y: 0,
      transition: { delay: i * 0.1, duration: 0.4, ease: "easeOut" }
    })
  };

  const mobileMenuVariants = {
    closed: { opacity: 0, height: 0, transition: { duration: 0.3, ease: "easeInOut" } },
    open: { opacity: 1, height: "auto", transition: { duration: 0.3, ease: "easeInOut" } }
  };

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-black/90 backdrop-blur-md py-3 shadow-lg' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          
          {/* --- LEFT: LOGO --- */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={logoVariants}
            className="flex-shrink-0"
          >
            <Link 
              href="/" 
              className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
            >
              Saurav
            </Link>
          </motion.div>

          {/* --- CENTER: HOME, PROJECTS, LINKEDIN --- */}
          <div className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
            {centerNavItems.map((item, index) => {
              const Icon = item.icon;
              const isLinkedIn = item.name === 'LinkedIn';
              
              return (
                <motion.div
                  key={item.name}
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    href={item.href}
                    target={isLinkedIn ? "_blank" : "_self"} // Open LinkedIn in new tab
                    className={`flex items-center text-sm font-medium transition-colors ${
                      pathname === item.href
                        ? 'text-blue-400'
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {/* Applied conditional blue color for LinkedIn Icon */}
                    <Icon 
                      className={`w-4 h-4 mr-2 ${isLinkedIn ? 'text-[#0A66C2]' : ''}`} 
                    />
                    {item.name}
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* --- RIGHT: CONTACT --- */}
          <div className="hidden md:flex items-center">
            <motion.div
              custom={3}
              initial="hidden"
              animate="visible"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href={contactItem.href}
                className={`flex items-center text-sm font-medium px-4 py-2 rounded-full border transition-all ${
                  pathname === contactItem.href
                    ? 'border-blue-500 text-blue-400 bg-blue-500/10'
                    : 'border-gray-600 text-gray-300 hover:border-white hover:text-white'
                }`}
              >
                <contactItem.icon className="w-4 h-4 mr-2" />
                {contactItem.name}
              </Link>
            </motion.div>
          </div>

          {/* --- MOBILE HAMBURGER --- */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* --- MOBILE MENU CONTENT --- */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={mobileMenuVariants}
              className="md:hidden bg-black/95 backdrop-blur-md overflow-hidden"
            >
              <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
                {allNavItems.map((item, index) => {
                  const Icon = item.icon;
                  const isLinkedIn = item.name === 'LinkedIn';

                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link 
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`flex items-center text-base font-medium py-2 transition-colors ${
                          pathname === item.href
                            ? 'text-blue-400'
                            : 'text-gray-300 hover:text-white'
                        }`}
                      >
                         <Icon 
                          className={`w-5 h-5 mr-3 ${isLinkedIn ? 'text-[#0A66C2]' : ''}`} 
                        />
                        {item.name}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Spacer to prevent content overlap */}
      <div className="h-16 md:h-20"></div>
    </>
  );
};

export default AnimatedNavbar;