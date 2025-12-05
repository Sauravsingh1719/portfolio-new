'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { StickyScroll } from './ui/sticky-scroll-reveal';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

export function Writings() {
  const writings = [
    {
      title: "LIFE AS A GAME",
      description: "Learning from Life's Failures: How Challenges Have Taught Me to Always Give My Best Effort. A reflection on how life's obstacles shape our character and push us to grow beyond our limits.",
      image: "https://miro.medium.com/v2/resize:fit:640/format:webp/1*RZH3-7GNz23HBBVz-F3u2Q.jpeg",
      link: "https://medium.com/@sauravs1719/life-as-a-game-7a5c80c8a3da"
    },
    {
      title: "IN THE GAME, I FIND ME",
      description: "Discovering Inner Clarity and Strength: How Sports Help Us Find Ourselves Amid Life's Chaos. Exploring the connection between physical activity and mental clarity in our journey of self-discovery.",
      image: "https://miro.medium.com/v2/resize:fit:640/format:webp/1*HSTG1IvIeNYb5D9zcJ7IZA.jpeg",
      link: "https://medium.com/@sauravs1719/in-the-game-i-find-me-ac4ab3436457"
    },
    {
      title: "The True Wealth",
      description: "A reflection on how mental peace is the true wealth, urging us to prioritize inner calm over material desires. Exploring the concept of wealth beyond financial measures and material possessions.",
      image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*az2THrjI-yu0ysNYdJVmmQ.jpeg",
      link: "https://medium.com/@sauravs1719/the-true-wealth-beyond-money-and-materialism-15040d30b179"
    },
    {
      title: "Flaws: The Seeds of Growth",
      description: "Failure as our greatest teacher, guiding us towards self-improvement and success. Embracing our imperfections as opportunities for growth and learning.",
      image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*iJ_-gfel_z4Tf81I7OCKGQ@2x.jpeg",
      link: "https://medium.com/@sauravs1719/from-holding-on-to-letting-go-d660f4f0ac27"
    }
  ];

  const content = writings.map(writing => ({
    title: writing.title,
    description: writing.description,
    content: (
      <div className="flex h-full w-full items-center justify-center overflow-hidden">
        <Image
          src={writing.image}
          width={400}
          height={300}
          className="h-full w-full object-cover"
          alt={writing.title}
        />
      </div>
    ),
    link: writing.link
  }));

  return (
    <section id="writings" className="py-20 lg:py-32 relative overflow-hidden ">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Writings</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Thoughts, reflections, and insights from my journey in tech and beyond
          </p>
        </motion.div>

        <div className="w-full">
          <StickyScroll content={content} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mt-16"
        >
          <Link
            href="https://medium.com/@sauravs1719"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-medium hover:from-blue-500 hover:to-purple-500 transition-all duration-300"
          >
            Read More Stories on Medium
            <ExternalLink className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}