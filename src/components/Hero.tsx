'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowDown, Download, Mail } from 'lucide-react';
import { GlobeDemo } from './Globe';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const staggerChildren = {
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const Hero = () => {
  return (
    // mobile: 8% top padding, md+ use pt-5
    <div>
      <section className="min-h-screen text-white flex items-center justify-center relative overflow-hidden ">
        {/* RIGHT-SIDE PHOTO (hidden on small screens) */}
        <div className="hidden md:block absolute inset-y-0 right-0 w-1/3 lg:w-2/5 z-0 pointer-events-none">
          {/* parent must be relative for Image fill */}
          <div className="relative w-full h-full">
            <Image
              src="/images/profile.png"
              alt="Saurav profile"
              fill
              style={{ objectFit: 'cover', objectPosition: 'right center' }}
              priority={false}
            />
            {/* overlay gradient to blend image into the black background and keep text readable */}
            <div className="absolute inset-0 bg-gradient-to-l from-black/95 to-transparent" />
          </div>
        </div>

        {/* Background pattern (subtle) */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10 z-0"></div>

        {/* Animated floating blobs (behind text/content) */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl z-0"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <motion.div
          className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl z-0"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
        />

        {/* MAIN CONTENT (above photo/background) */}
        <div className="container mx-auto px-4 relative z-10 h-full flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center w-full">
            {/* Left Content */}
            <motion.div
              className="flex flex-col justify-center"
              variants={staggerChildren}
              initial="hidden"
              animate="visible"
            >
              <div className="space-y-8">
                {/* Introductory badge */}
                <motion.div
                  className="inline-flex items-center px-4 py-2 rounded-full bg-gray-800 border border-gray-700"
                  variants={fadeInUp}
                >
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse" />
                  <span className="text-sm font-medium">Full Stack Developer</span>
                </motion.div>

                {/* Main headline */}
                <motion.h1
                  className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                  variants={fadeInUp}
                >
                  Transforming Ideas <br />
                  Into{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                    Digital Reality
                  </span>
                </motion.h1>

                {/* Description */}
                <motion.p
                  className="text-xl text-gray-300 max-w-2xl leading-relaxed"
                  variants={fadeInUp}
                >
                  I'm Saurav, a passionate full-stack developer specializing in building exceptional web applications
                  with Next.js, React, and modern web technologies. I turn complex ideas into seamless digital experiences.
                </motion.p>

                {/* CTAs */}
                <motion.div className="flex flex-col sm:flex-row gap-4" variants={fadeInUp}>
                  <Link
                    href="#projects"
                    className="inline-flex items-center justify-center px-8 py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-medium hover:from-blue-500 hover:to-purple-500 transition-all duration-300 transform hover:-translate-y-1"
                  >
                    View My Work
                    <ArrowDown className="ml-2 h-5 w-5" />
                  </Link>

                  <div className="flex gap-4">
                    {/* Use <a> for direct file download */}
                    <a
                      href="/SAURAV_CV.pdf"
                      download
                      className="inline-flex items-center justify-center px-6 py-3.5 bg-gray-800 border border-gray-700 rounded-lg font-medium hover:bg-gray-700 transition-all duration-300"
                    >
                      <Download className="mr-2 h-5 w-5" />
                      Download CV
                    </a>

                    <Link
                      href="#contact"
                      className="inline-flex items-center justify-center px-6 py-3.5 bg-transparent border border-gray-700 rounded-lg font-medium hover:border-blue-500 hover:text-blue-400 transition-all duration-300"
                    >
                      <Mail className="mr-2 h-5 w-5" />
                      Contact Me
                    </Link>
                  </div>
                </motion.div>

                {/* Stats or quick facts */}
                <motion.div className="flex gap-8 pt-4" variants={fadeInUp}>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400">15+</div>
                    <div className="text-gray-400 text-sm">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400">5+</div>
                    <div className="text-gray-400 text-sm">Technologies</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">100%</div>
                    <div className="text-gray-400 text-sm">Client Satisfaction</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Side - Globe Component (stays above the background photo) */}
            <motion.div
              className="flex items-center justify-center h-full"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <div className="w-full h-[400px] lg:h-[500px] flex items-center justify-center">
                <GlobeDemo />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-gray-400 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Hero;
