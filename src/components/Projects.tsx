// components/Works.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { PinContainer } from './ui/3d-pin';
import Image from 'next/image';

export function Projects() {
  const projects = [
    {
      title: "Data to Grow",
      description: "Professional data analytics platform with appointment booking, blog management, and admin dashboard.",
      image: "/images/dtg.png",
      link: "https://dtg-five.vercel.app/",
      technologies: ["Next.js", "MongoDB", "NextAuth", "Tailwind CSS"]
    },
    {
      title: "Taskify",
      description: "Personalized user-based todo and personal diary management responsive web application.",
      image: "/images/taskify.png",
      link: "https://taskify160.vercel.app/",
      technologies: ["Next.js", "MongoDB", "NextAuth", "Framer Motion"]
    },
    {
      title: "The Fitness Centre",
      description: "Stunning responsive website for a fitness center with modern design and smooth animations.",
      image: "/images/gym.png",
      link: "https://tfc1.netlify.app/",
      technologies: ["React", "CSS3", "JavaScript", "Framer Motion"]
    },
    {
      title: "My Old Portfolio",
      description: "Responsive portfolio website with interactive elements and modern design principles.",
      image: "/images/oldport.png",
      link: "https://saurav19.vercel.app/",
      technologies: ["Next.js", "Accernity UI", "Nodemailer", "Shadcn UI"]
    },
    {
      title: "Negative Marks Calculator",
      description: "Utility application for calculating exam marks with negative marking system.",
      image: "/images/marks.png",
      link: "https://markscal.vercel.app/",
      technologies: ["React", "CSS3", "JavaScript"]
    },
    {
      title: "Library Website",
      description: "Dummy library website with book catalog and user management features.",
      image: "/images/Lib.png",
      link: "https://myspacelib.vercel.app/",
      technologies: ["React", "CSS3", "JavaScript"]
    }
  ];

  return (
    <div className='px-[10%]'>
    <section id="projects" className="py-20 lg:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A collection of projects that showcase my skills and passion for development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div key={index} className="flex justify-center">
              <PinContainer
                title={project.title}
                href={project.link}
              >
                <div className="flex flex-col p-4 tracking-tight text-slate-100 w-[20rem] h-[24rem]">
                  <h3 className="max-w-xs !pb-2 !m-0 font-bold text-lg text-slate-100 text-center">
                    {project.title}
                  </h3>
                  
                  <div className="text-base !m-0 !p-0 font-normal text-center">
                    <span className="text-slate-500">
                      {project.description}
                    </span>
                  </div>
                  
                  <div className="flex-1 w-full rounded-lg mt-4 overflow-hidden relative">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  <div className="flex flex-wrap justify-center gap-2 mt-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 text-xs bg-gray-800/50 rounded-full text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </PinContainer>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
}
