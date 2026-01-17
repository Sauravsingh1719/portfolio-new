'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Sparkles, X } from 'lucide-react';

const rawSkills = [
  { name: "HTML5", icon: "/images/html.png" },
  { name: "CSS3", icon: "/images/css.png" },
  { name: "JavaScript", icon: "/images/js.png" },
  { name: "React.js", icon: "/images/react.png" },
  { name: "Next.js", icon: "/images/nextjs.png" },
  { name: "Tailwind", icon: "/images/tailwind.png" },
  { name: "Framer", icon: "/images/framer.png" },
  { name: "MongoDB", icon: "/images/mongo.png" },
  { name: "NextAuth", icon: "/images/nextAuth.png" },
];

const skills = [...rawSkills, ...rawSkills, ...rawSkills, ...rawSkills];

const learning = [
  { name: "Python", icon: "/images/system.png" },
  { name: "Generative AI", icon: "/images/genai.png" },
  { name: "LangChain", icon: "/images/langchain.png" },,
];

export function Skills() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLearning, setShowLearning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;
    
    const scroll = () => {
      if (!isPaused && scrollContainer) {
        scrollContainer.scrollLeft += 1.0; 

        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  const handleManualScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="skills" className="py-24 bg-black/[0.96] relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        
        {}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Arsenal</span>
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
             The modern tools I use to build scalable applications.
          </p>
        </div>

        {}
        <div 
          className="relative max-w-full mx-auto group"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          
          {}
          <button 
            onClick={() => handleManualScroll('left')}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/50 border border-white/20 text-white hover:bg-blue-600 hover:scale-110 transition-all backdrop-blur-md opacity-0 group-hover:opacity-100 md:opacity-0 md:group-hover:opacity-100 duration-300"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {}
          <button 
            onClick={() => handleManualScroll('right')}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/50 border border-white/20 text-white hover:bg-blue-600 hover:scale-110 transition-all backdrop-blur-md opacity-0 group-hover:opacity-100 md:opacity-0 md:group-hover:opacity-100 duration-300"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {}
          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-hidden whitespace-nowrap py-4 px-4"
            style={{ 
              maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
              WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' 
            }}
          >
            {skills.map((skill, index) => (
              <div 
                key={index}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-white/10 bg-neutral-900/50 backdrop-blur-sm hover:border-blue-500/50 hover:bg-blue-500/10 transition-colors duration-300 flex-shrink-0 select-none"
              >
                <div className="relative w-8 h-8">
                  <Image 
                    src={skill.icon} 
                    alt={skill.name} 
                    fill 
                    className="object-contain" 
                  />
                </div>
                <span className="text-neutral-300 font-medium text-lg">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        {}
        <div className="flex flex-col items-center justify-center mt-16 relative z-20">
            {!showLearning && (
              <button 
                onClick={() => setShowLearning(true)}
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-blue-500/50 transition-all duration-300 hover:scale-105"
              >
                <Sparkles className="w-4 h-4 text-yellow-500" />
                <span className="text-sm font-medium">See what I'm learning next</span>
              </button>
            )}

            <AnimatePresence>
              {showLearning && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="bg-[#111] border border-neutral-800 rounded-xl p-6 w-full max-w-md relative overflow-hidden mt-4 shadow-2xl"
                >
                  <button 
                    onClick={() => setShowLearning(false)}
                    className="absolute top-4 right-4 text-neutral-500 hover:text-white transition-colors"
                  >
                    <X size={20} />
                  </button>

                  <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    Currently Exploring
                  </h3>
                  
                  <div className="space-y-3">
                    {learning.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-4 p-3 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                         {}
                        <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold text-sm shrink-0">
                          {item.name[0]}
                        </div>
                        <div>
                            <p className="text-white text-sm font-medium">{item.name}</p>
                            <p className="text-neutral-500 text-xs">Loading into my brain...</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
        </div>

      </div>
    </section>
  );
}