'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Github, Linkedin, Mail, FileText, Download } from 'lucide-react';
import { CometCard } from '@/components/ui/comet-card'; 
import { Spotlight } from './ui/Spotlight';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const Hero = () => {
  return (
    <div className="min-h-[100dvh] lg:min-h-screen w-full flex items-start lg:items-center justify-center bg-[#050505] relative overflow-hidden pt-28 lg:pt-0 pb-10 lg:pb-0">
      
      {}
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />

      {}
      {}
      <div className="absolute top-[65%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex flex-col items-center justify-center leading-none pointer-events-none z-0 select-none opacity-[0.04]">
         <h1 className="text-[12vw] font-bold text-center text-white tracking-tighter uppercase whitespace-nowrap">
            FULL STACK
         </h1>
         <h1 className="text-[12vw] font-bold text-center text-white tracking-tighter uppercase whitespace-nowrap">
            ENGINEER
         </h1>
      </div>

      <div className="container mx-auto px-6 relative z-10 w-full h-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center h-full">
          
          {}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.1 } },
            }}
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            {}
            <motion.div 
              variants={fadeInUp} 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-sm font-medium mb-6 lg:mb-8 backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Available for Global Projects
            </motion.div>

            {}
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-4 lg:mb-6 leading-[1.1]"
            >
              Architecting <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 animate-gradient-x">
                Scalable Solutions.
              </span>
            </motion.h1>

            {}
            <motion.p 
              variants={fadeInUp}
              className="text-base md:text-xl text-neutral-400 max-w-xl leading-relaxed mb-8 lg:mb-10"
            >
              I am <span className="text-white font-semibold">Saurav</span>, a Full Stack Engineer dedicated to building robust, high-performance web applications. I specialize in the Next.js ecosystem to deliver pixel-perfect, accessible, and efficient digital products.
            </motion.p>

            {}
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 justify-center lg:justify-start w-full sm:w-auto">
              
              <Link
                href="#projects"
                className="px-8 py-3.5 rounded-full bg-white text-black font-bold hover:bg-neutral-200 transition-all duration-300 flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] hover:-translate-y-1"
              >
                View Selected Work <ArrowRight size={18} />
              </Link>
              
              <a
                href="/SAURAV_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded-full border border-white/20 bg-white/5 text-white font-medium hover:bg-white/10 hover:border-white/40 transition-all duration-300 flex items-center gap-2 backdrop-blur-sm hover:-translate-y-1"
              >
                <FileText size={18} /> Resume
              </a>

              <Link
                href="#contact"
                className="px-8 py-3.5 rounded-full border border-transparent text-neutral-400 font-medium hover:text-white transition-all duration-300 flex items-center"
              >
                Contact
              </Link>

            </motion.div>
          </motion.div>

          {}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, type: "spring" }}
            className="lg:col-span-5 flex justify-center lg:justify-end relative mt-8 lg:mt-0"
          >
            {}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[450px] bg-blue-600/20 blur-[90px] rounded-full pointer-events-none" />

            <div className="relative z-10">
               <CometCard>
                 <div className="relative w-[280px] md:w-[340px] aspect-[3/4] rounded-[30px] overflow-hidden border border-white/10 shadow-2xl group bg-[#111]">
                   
                   <Image
                     src="/images/profile.jpg" 
                     alt="Saurav Profile"
                     fill
                     className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                     priority
                   />
                   
                   <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />

                   <div className="absolute top-5 right-5 flex flex-col gap-3 z-20">
                     <SocialButton href="https://github.com/Sauravsingh1719" icon={<Github size={20} />} label="GitHub" />
                     <SocialButton href="https://www.linkedin.com/in/saurav-kumar-262219337" icon={<Linkedin size={20} />} label="LinkedIn" />
                     <SocialButton href="mailto:Sauravs1719@gmail.com" icon={<Mail size={20} />} label="Email" />
                   </div>
                   
                   <a 
                     href="/SAURAV_CV.pdf" 
                     download
                     className="absolute bottom-5 right-5 w-10 h-10 bg-white/20 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300"
                     title="Download Resume"
                   >
                      <Download size={18} />
                   </a>

                 </div>
               </CometCard>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

const SocialButton = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => (
  <a 
    href={href}
    target="_blank"
    rel="noreferrer"
    className="w-12 h-12 bg-black/30 backdrop-blur-xl border border-white/10 rounded-full flex items-center justify-center text-white/90 hover:text-white hover:bg-blue-600 hover:border-blue-500 transition-all duration-300 transform hover:scale-110 shadow-lg group relative"
  >
    {icon}
    <span className="sr-only">{label}</span>
  </a>
);

export default Hero;