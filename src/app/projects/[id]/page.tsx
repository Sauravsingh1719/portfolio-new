import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { projectCaseStudies } from '@/data/projects';
import { ArrowLeft, ExternalLink, Github, Calendar, Clock, Users } from 'lucide-react';

interface ProjectPageProps {
  params: {
    id: string;
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projectCaseStudies.find(p => p.id === params.id);
  
  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {}
        <Link 
          href="/#projects" 
          className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Projects
        </Link>

        {}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <h1 className="text-4xl md:text-5xl font-bold">{project.title}</h1>
            <div className="flex gap-4">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Demo
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
              >
                <Github className="mr-2 h-4 w-4" />
                GitHub Repo
              </a>
            </div>
          </div>
          
          <p className="text-xl text-gray-400 mb-8">{project.description}</p>
          
          <div className="relative h-96 w-full rounded-xl overflow-hidden mb-8">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-wrap gap-4 mb-8">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-800/50 rounded-full text-sm text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>

          {}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-gray-900/50 rounded-lg">
            <div className="flex items-center">
              <Calendar className="h-5 w-5 mr-2 text-blue-400" />
              <span className="text-gray-300">Completed: {project.completedDate}</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-5 w-5 mr-2 text-blue-400" />
              <span className="text-gray-300">Duration: {project.duration}</span>
            </div>
            <div className="flex items-center">
              <Users className="h-5 w-5 mr-2 text-blue-400" />
              <span className="text-gray-300">Role: {project.role}</span>
            </div>
          </div>
        </div>

        {}
        <div className="space-y-12">
          {}
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">The Problem</h2>
              <p className="text-gray-400">{project.problem}</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">The Solution</h2>
              <p className="text-gray-400">{project.solution}</p>
            </div>
          </div>

          {}
          <div>
            <h2 className="text-2xl font-bold mb-4">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {project.features.map((feature, index) => (
                <div key={index} className="p-4 bg-gray-900/50 rounded-lg">
                  <div className="flex items-center mb-2">
                    <div className="h-2 w-2 bg-blue-500 rounded-full mr-2"></div>
                    <h3 className="font-semibold">{feature.title}</h3>
                  </div>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {}
          <div>
            <h2 className="text-2xl font-bold mb-4">Development Process</h2>
            <div className="space-y-4">
              {project.process.map((step, index) => (
                <div key={index} className="flex">
                  <div className="flex flex-col items-center mr-4">
                    <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center">
                      <span className="text-white font-bold">{index + 1}</span>
                    </div>
                    {index < project.process.length - 1 && (
                      <div className="h-16 w-0.5 bg-gray-700 my-1"></div>
                    )}
                  </div>
                  <div className="flex-1 pb-8">
                    <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                    <p className="text-gray-400">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Challenges */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Challenges & Solutions</h2>
            <div className="space-y-4">
              {project.challenges.map((challenge, index) => (
                <div key={index} className="p-4 bg-gray-900/50 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">{challenge.title}</h3>
                  <p className="text-gray-400 mb-2">{challenge.description}</p>
                  <div className="mt-2">
                    <span className="text-blue-400 font-medium">Solution: </span>
                    <span className="text-gray-400">{challenge.solution}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {}
          <div>
            <h2 className="text-2xl font-bold mb-4">Results & Impact</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {project.results.map((result, index) => (
                <div key={index} className="p-4 bg-gray-900/50 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">{result.title}</h3>
                  <p className="text-gray-400">{result.value}</p>
                </div>
              ))}
            </div>
          </div>

          {}
          <div>
            <h2 className="text-2xl font-bold mb-4">Key Learnings</h2>
            <ul className="space-y-2">
              {project.learnings.map((learning, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span className="text-gray-400">{learning}</span>
                </li>
              ))}
            </ul>
          </div>

          {}
          {project.futureEnhancements && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Future Enhancements</h2>
              <ul className="space-y-2">
                {project.futureEnhancements.map((enhancement, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span className="text-gray-400">{enhancement}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {}
          <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-gray-800">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              View Live Project
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
            >
              <Github className="mr-2 h-4 w-4" />
              View Source Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return projectCaseStudies.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const project = projectCaseStudies.find(p => p.id === params.id);
  
  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} | Case Study`,
    description: project.description,
  };
}