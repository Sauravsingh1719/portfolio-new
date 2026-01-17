'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Home, FolderGit2, Mail, Linkedin, Sparkles, Layers, PenTool } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const navItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Projects', href: '/#projects', icon: FolderGit2 },
    { name: 'Skills', href: '/#skills', icon: Layers },
    { name: 'Writings', href: '/#writings', icon: PenTool },
  ];

  const socialItem = { name: 'LinkedIn', href: 'https://www.linkedin.com/in/saurav-kumar-262219337/', icon: Linkedin };
  const contactItem = { name: 'Contact', href: '/#contact', icon: Mail };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
          isScrolled 
            ? 'top-4 md:top-6'
            : 'top-0'
        }`}
      >
        <div className={`mx-auto transition-all duration-500 ${
          isScrolled 
            ? 'w-[95%] md:w-[85%] lg:w-[60%] bg-black/50 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl py-3 px-6'
            : 'w-full bg-transparent py-6 px-4 md:px-8'
        }`}>
          
          <div className="flex justify-between items-center">
            
            {}
            <Link 
              href="/" 
              className="flex items-center gap-2 group"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
                S
              </div>
              <span className={`font-bold text-lg tracking-tight transition-colors ${isScrolled ? 'text-white' : 'text-white'}`}>
                Saurav
              </span>
            </Link>

            {}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href || (typeof window !== 'undefined' && window.location.hash === item.href.replace('/', ''));
                
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="relative px-4 py-2 text-sm font-medium text-neutral-400 hover:text-white transition-colors rounded-full group"
                  >
                    {isActive && (
                      <motion.div
                        layoutId="nav-pill"
                        className="absolute inset-0 bg-white/10 rounded-full"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10 flex items-center gap-2">
                      {item.name}
                    </span>
                  </Link>
                );
              })}
            </div>

            {}
            <div className="hidden md:flex items-center gap-4">
               {}
               <a 
                 href={socialItem.href}
                 target="_blank"
                 className="text-neutral-400 hover:text-[#0A66C2] transition-colors"
               >
                 <Linkedin size={20} />
               </a>

               {}
               <Link
                 href={contactItem.href}
                 className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-bold transition-all ${
                   isScrolled
                     ? 'bg-white text-black hover:bg-neutral-200'
                     : 'bg-white/10 text-white border border-white/10 hover:bg-white/20'
                 }`}
               >
                 Let's Talk <Sparkles size={14} className="text-yellow-500" />
               </Link>
            </div>

            {}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white p-2"
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>

          </div>
        </div>

        {}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 mt-2 mx-4 bg-[#111] border border-white/10 rounded-2xl p-4 shadow-2xl md:hidden overflow-hidden"
            >
              <div className="flex flex-col gap-2">
                {[...navItems, socialItem, contactItem].map((item, idx) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 text-neutral-300 hover:text-white transition-colors"
                  >
                    <div className="p-2 bg-white/5 rounded-lg">
                      <item.icon size={18} />
                    </div>
                    <span className="font-medium">{item.name}</span>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </motion.nav>
    </>
  );
};

export default Navbar;