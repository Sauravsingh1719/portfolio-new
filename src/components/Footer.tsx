'use client';

import React from 'react';
import Link from 'next/link';
import { Github, Linkedin, Instagram, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/Sauravsingh1719",
      icon: <Github className="w-5 h-5" />,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/saurav-kumar-262219337/",
      icon: <Linkedin className="w-5 h-5" />,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/saurav.singh19__/",
      icon: <Instagram className="w-5 h-5" />,
    },
  ];

  const quickLinks = [
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Writings", href: "#writings" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-[#050505] border-t border-white/10 pt-20 pb-10 relative overflow-hidden">
      
      {}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {}
          <div className="lg:col-span-2">
            <Link href="/" className="text-2xl font-bold text-white mb-4 inline-block">
               Saurav<span className="text-blue-500">.</span>
            </Link>
            <p className="text-neutral-400 max-w-sm mt-4 text-sm leading-relaxed">
              Full Stack Web Developer building the future of the web, one pixel at a time. 
              Always focused on performance, accessibility, and clean design.
            </p>
          </div>

          {}
          <div>
            <h3 className="text-white font-bold mb-6">Navigation</h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-neutral-400 hover:text-blue-400 transition-colors text-sm flex items-center gap-1 group"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {}
          <div>
            <h3 className="text-white font-bold mb-6">Connect</h3>
            <ul className="space-y-4">
              {socialLinks.map((social) => (
                <li key={social.name}>
                  <a 
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-400 hover:text-white transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="bg-white/5 p-2 rounded-full group-hover:bg-blue-500 group-hover:text-white transition-all">
                        {social.icon}
                    </span>
                    {social.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
           
           <div className="text-center md:text-left">
              <p className="text-neutral-500 text-xs">
                 © {currentYear} Saurav. All rights reserved.
              </p>
              <div className="flex flex-wrap gap-4 mt-2 justify-center md:justify-start">
                  <p className="text-neutral-600 text-[10px]">
                    Built with Next.js & Tailwind
                  </p>
                  <p className="text-neutral-600 text-[10px]">
                    Inspired by Aceternity UI
                  </p>
              </div>
           </div>

           <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-neutral-400 text-xs font-mono">
                System Status: Online
              </span>
           </div>

        </div>
      </div>

      {}
      {}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full overflow-hidden pointer-events-none opacity-[0.05] z-0 flex justify-center">
         <h1 className="text-[23vw] md:text-[14vw] font-bold text-center text-white leading-none tracking-tighter select-none whitespace-nowrap">
            SAURAV
         </h1>
      </div>

    </footer>
  );
}