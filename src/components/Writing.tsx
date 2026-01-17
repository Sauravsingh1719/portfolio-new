'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Calendar, Clock } from 'lucide-react';

const writings = [
  {
    id: 1,
    title: "Life as a Game",
    category: "Philosophy",
    readTime: "5 min read",
    image: "https://miro.medium.com/v2/resize:fit:640/format:webp/1*RZH3-7GNz23HBBVz-F3u2Q.jpeg",
    link: "https://medium.com/@sauravs1719/life-as-a-game-7a5c80c8a3da",
    date: "Dec 12, 2023"
  },
  {
    id: 2,
    title: "In The Game, I Find Me",
    category: "Self Growth",
    readTime: "4 min read",
    image: "https://miro.medium.com/v2/resize:fit:640/format:webp/1*HSTG1IvIeNYb5D9zcJ7IZA.jpeg",
    link: "https://medium.com/@sauravs1719/in-the-game-i-find-me-ac4ab3436457",
    date: "Jan 15, 2024"
  },
  {
    id: 3,
    title: "The True Wealth",
    category: "Mindset",
    readTime: "6 min read",
    image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*az2THrjI-yu0ysNYdJVmmQ.jpeg",
    link: "https://medium.com/@sauravs1719/the-true-wealth-beyond-money-and-materialism-15040d30b179",
    date: "Feb 28, 2024"
  },
  {
    id: 4,
    title: "Flaws: Seeds of Growth",
    category: "Reflection",
    readTime: "4 min read",
    image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*iJ_-gfel_z4Tf81I7OCKGQ@2x.jpeg",
    link: "https://medium.com/@sauravs1719/from-holding-on-to-letting-go-d660f4f0ac27",
    date: "Mar 10, 2024"
  }
];

export function Writings() {
  return (
    <section id="writings" className="py-24 bg-[#050505] relative overflow-hidden">
      
      {}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        
        {}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 px-2">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Writing <span className="text-blue-500">Log</span>
            </h2>
            <p className="text-neutral-400 text-lg max-w-md">
              Thoughts on technology, life, and the pursuit of growth.
            </p>
          </div>
          
          <Link
            href="https://medium.com/@sauravs1719"
            target="_blank"
            className="hidden md:flex group items-center gap-2 text-sm font-medium text-neutral-300 hover:text-white transition-colors"
          >
            Read all on Medium 
            <span className="bg-neutral-800 p-1 rounded-full group-hover:bg-blue-600 transition-colors">
               <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        </div>

        {}
        <div className="flex overflow-x-auto gap-6 pb-12 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
          {writings.map((post) => (
            <Link 
              href={post.link} 
              target="_blank" 
              key={post.id}
              className="group relative flex-shrink-0 w-[85vw] md:w-[400px] h-[500px] snap-center rounded-3xl overflow-hidden cursor-pointer border border-white/10"
            >
              {}
              <div className="absolute inset-0">
                <Image 
                  src={post.image} 
                  alt={post.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                {}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-500" />
              </div>

              {}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                
                {}
                <div className="absolute top-6 left-6">
                  <span className="px-3 py-1 text-xs font-medium text-white bg-white/10 backdrop-blur-md border border-white/10 rounded-full">
                    {post.category}
                  </span>
                </div>

                {}
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center gap-4 text-xs text-neutral-300 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 leading-tight group-hover:text-blue-200 transition-colors">
                    {post.title}
                  </h3>
                  
                  <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-500">
                      <p className="text-neutral-300 text-sm line-clamp-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                        {}
                        Click to read the full story on Medium about how this perspective changed my approach.
                      </p>
                  </div>

                  <div className="flex items-center gap-2 text-sm font-medium text-blue-400 group-hover:text-blue-300 transition-colors">
                    Read Article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>

              {}
              <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/10 rounded-3xl transition-colors duration-300 pointer-events-none" />
            </Link>
          ))}
        </div>

        {}
        <div className="md:hidden flex justify-center mt-4">
           <Link
            href="https://medium.com/@sauravs1719"
            target="_blank"
            className="text-sm text-neutral-500 hover:text-white flex items-center gap-2"
           >
             View all articles <ArrowRight className="w-4 h-4" />
           </Link>
        </div>

      </div>
    </section>
  );
}