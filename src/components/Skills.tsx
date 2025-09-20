'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { HoverEffect } from './ui/card-hover-effect';

export function Skills() {
  const skills = [
    {
      title: "HTML5",
      description: "Semantic markup, accessibility, and modern HTML5 features for structured web content.",
      icon: "/images/html.png",
    },
    {
      title: "CSS3",
      description: "Advanced styling with Flexbox, Grid, animations, and responsive design principles.",
      icon: "/images/css.png",
    },
    {
      title: "JavaScript",
      description: "ES6+ features, asynchronous programming, DOM manipulation, and modern JS patterns.",
      icon: "/images/js.png",
    },
    {
      title: "React.js",
      description: "Component-based UI development with hooks, context API, and performance optimization.",
      icon: "/images/react.png",
    },
    {
      title: "Next.js",
      description: "Server-side rendering, static site generation, and full-stack React development.",
      icon: "/images/nextjs.png",
    },
    {
      title: "MongoDB",
      description: "NoSQL database management with aggregation pipelines, indexing, and data modeling.",
      icon: "/images/mongo.png",
    },
    {
      title: "Framer Motion",
      description: "Advanced animations, gestures, and transitions for modern web experiences.",
      icon: "/images/framer.png",
    },
    {
      title: "NextAuth",
      description: "Authentication and authorization solutions for Next.js applications.",
      icon: "/images/nextAuth.png",
    },
    {
      title: "Tailwind CSS",
      description: "Utility-first CSS framework for rapid UI development and responsive design.",
      icon: "/images/tailwind.png",
    },
  ];

  return (
    <section id="skills" className="py-20 lg:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Expertise</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Here are the technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto px-8">
          <HoverEffect items={skills} />
        </div>
      </div>
    </section>
  );
}
