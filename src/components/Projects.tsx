'use client';
import React, { useRef } from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';
import { PinContainer } from './ui/3d-pin';
import Image from 'next/image';
import Link from 'next/link';
import { projectCaseStudies } from '@/data/projects';

export function Projects() {
  const targetRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-85%"]);

  return (
    <div className="bg-[#050505] relative z-0 "> 
      
      {}
      <section id="projects" ref={targetRef} className="relative h-[300vh]"> {}
        
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          
          {}
          <div className="absolute top-8 left-8 md:top-12 md:left-12 z-20 pointer-events-none">
             <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">
                Featured <span className="text-blue-500">Works</span>
             </h2>
             <p className="text-neutral-400 text-sm md:text-lg max-w-[200px] md:max-w-sm">
                Scroll down to explore.
             </p>
          </div>

          {}
          <motion.div style={{ x }} className="flex gap-8 md:gap-20 pl-[20vw] md:pl-[25vw] items-center">
            {projectCaseStudies.map((project, index) => (
              <div key={index} className="flex-shrink-0">
                <ProjectCard project={project} />
              </div>
            ))}
          </motion.div>
          
        </div>
      </section>

    </div>
  );
}

function ProjectCard({ project }: { project: any }) {
  return (
    <div className="flex justify-center items-center">
      <PinContainer
        title={project.title}
        href={`/projects/${project.id}`}
      >
        {}
        <div className="flex flex-col p-4 tracking-tight text-slate-100 w-[75vw] md:w-[24rem] h-[22rem] md:h-[28rem]">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold text-lg md:text-xl text-slate-100">
            {project.title}
          </h3>
          
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 line-clamp-2 text-xs md:text-sm">
              {project.description}
            </span>
          </div>
          
          <div className="flex-1 w-full rounded-lg mt-4 overflow-hidden relative">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
          
          {}
          <div className="flex flex-wrap gap-2 mt-4 max-h-[40px] overflow-hidden">
            {project.technologies.slice(0, 3).map((tech: string, techIndex: number) => (
              <span
                key={techIndex}
                className="px-2 py-1 text-[10px] uppercase tracking-wider bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-300"
              >
                {tech}
              </span>
            ))}
          </div>
          
          <div className="flex justify-end mt-4">
            <Link 
              href={`/projects/${project.id}`}
              className="text-xs md:text-sm text-white font-bold hover:text-blue-400 transition-colors flex items-center gap-1"
            >
              View Case Study <span className="text-lg">→</span>
            </Link>
          </div>
        </div>
      </PinContainer>
    </div>
  );
}