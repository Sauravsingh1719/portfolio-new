// src/app/resume/page.tsx

import React from 'react';
import { Mail, MapPin, Globe, CheckCircle2 } from 'lucide-react';
import ResumeActions from '@/components/ResumeActions';

export const metadata = {
  title: 'Resume | Saurav Kumar',
  description: 'Full Stack Web Developer Resume',
};

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 md:px-8 print:p-0 print:bg-white">
      
      {/* Client Component for Buttons */}
      <ResumeActions />

      {/* Resume Container */}
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden print:shadow-none print:rounded-none min-h-[1100px]">
        
        {/* Header */}
        <header className="bg-slate-900 text-white p-8 md:p-12 print:bg-slate-900 print:text-white">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-2">SAURAV KUMAR</h1>
              <h2 className="text-xl md:text-2xl text-blue-400 font-medium">Full Stack Web Developer</h2>
            </div>
            <div className="flex flex-col gap-2 text-sm md:text-base text-gray-300">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span>New Delhi, India</span>
              </div>
              <a href="mailto:sauravs1719@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="h-4 w-4 text-blue-400" />
                <span>sauravs1719@gmail.com</span>
              </a>
              <a href="https://saurav190.vercel.app" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                <Globe className="h-4 w-4 text-blue-400" />
                <span>saurav190.vercel.app</span>
              </a>
            </div>
          </div>
        </header>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3">
          
          {/* LEFT COLUMN */}
          <aside className="bg-slate-50 p-8 border-r border-gray-100 md:col-span-1 print:bg-slate-50">
            
            {/* Skills */}
            <section className="mb-8">
              <h3 className="text-lg font-bold text-slate-900 border-b-2 border-blue-500 pb-2 mb-4">SKILLS</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "HTML5, CSS3",
                  "JavaScript (ES6+)",
                  "React.js",
                  "Next.js (App & Pages)",
                  "Tailwind CSS",
                  "Framer Motion",
                  "Shadcn UI",
                  "Aceternity UI",
                  "NextAuth.js",
                  "Nodemailer",
                  "OTP flows",
                  "MongoDB",
                  "REST APIs",
                  "Git & Vercel",
                  "Responsive design"
                ].map((skill, index) => (
                  <span key={index} className="bg-white border border-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-medium shadow-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            {/* Education */}
            <section className="mb-8">
              <h3 className="text-lg font-bold text-slate-900 border-b-2 border-blue-500 pb-2 mb-4">EDUCATION</h3>
              
              <div className="mb-6">
                <h4 className="font-bold text-slate-800 leading-tight">Indira Gandhi National Open University (IGNOU)</h4>
                <p className="text-sm text-gray-600">Bachelor's degree</p>
                <p className="text-xs text-gray-500">2022 (approx)</p>
              </div>

              <div className="mb-6">
                <h4 className="font-bold text-slate-800 leading-tight">Spring Meadows Public School (CBSE)</h4>
                <p className="text-sm text-gray-600">Intermediate (PCM)</p>
                <p className="text-xs text-gray-500">2019</p>
              </div>

              <div className="mb-6">
                <h4 className="font-bold text-slate-800 leading-tight">Spring Field Convent Secondary School (CBSE)</h4>
                <p className="text-sm text-gray-600">Matric</p>
                <p className="text-xs text-gray-500">2016 • CGPA 8.6</p>
              </div>
            </section>

            {/* Competitive Exams */}
            <section className="mb-8">
              <h3 className="text-lg font-bold text-slate-900 border-b-2 border-blue-500 pb-2 mb-4">COMPETITIVE EXAMS</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start"><CheckCircle2 className="h-4 w-4 text-green-600 mr-2 mt-0.5 shrink-0" /> UPSC CAPF AC Paper-1 Cleared</li>
                <li className="flex items-start"><CheckCircle2 className="h-4 w-4 text-green-600 mr-2 mt-0.5 shrink-0" /> UPSC CDS - Cleared</li>
                <li className="flex items-start"><CheckCircle2 className="h-4 w-4 text-green-600 mr-2 mt-0.5 shrink-0" /> ICG Assistant Commandant - Cleared</li>
                <li className="flex items-start"><CheckCircle2 className="h-4 w-4 text-green-600 mr-2 mt-0.5 shrink-0" /> AFCAT - Cleared</li>
                <li className="flex items-start"><CheckCircle2 className="h-4 w-4 text-green-600 mr-2 mt-0.5 shrink-0" /> Navy SSR - Cleared</li>
                <li className="flex items-start"><CheckCircle2 className="h-4 w-4 text-green-600 mr-2 mt-0.5 shrink-0" /> SSC GD Cleared</li>
              </ul>
              <p className="mt-4 text-xs text-gray-500 italic border-t pt-2 border-gray-200">
                Stayed till conference stage in SSB multiple times (SSB interviews).
              </p>
            </section>

             {/* Languages */}
             <section>
              <h3 className="text-lg font-bold text-slate-900 border-b-2 border-blue-500 pb-2 mb-4">LANGUAGES</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>English</li>
                <li>Hindi</li>
              </ul>
            </section>
          </aside>

          {/* RIGHT COLUMN */}
          <main className="p-8 md:col-span-2">
            
            {/* Summary */}
            <section className="mb-10">
              <h3 className="text-lg font-bold text-slate-900 border-b-2 border-blue-500 pb-2 mb-4 uppercase">Professional Summary</h3>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                Dedicated Full Stack Web Developer with strong expertise in Next.js and frontend technologies. 
                Passionate about building responsive, user-friendly web applications and improving product usability. 
                Disciplined, result-driven, and resilient demonstrated by clearing multiple competitive exams. 
                Seeking a full-time role to build scalable web products and grow within a collaborative team.
              </p>
            </section>

            {/* Selected Projects */}
            <section className="mb-10">
              <h3 className="text-lg font-bold text-slate-900 border-b-2 border-blue-500 pb-2 mb-6 uppercase">Selected Projects</h3>
              
              {/* Project 1: Senior Data Analyst Portfolio (REPLACED "Data to Grow") */}
              <div className="mb-8 relative pl-6 border-l-2 border-gray-200">
                <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-blue-500 border-4 border-white"></div>
                <h4 className="text-lg font-bold text-slate-800">Senior Data Analyst Portfolio & CMS</h4>
                <p className="text-sm text-gray-600 mb-2 italic">Next.js 16, Vercel/Hostinger Hybrid, TipTap, Hashed OTPs</p>
                <p className="text-gray-700 text-sm mb-2 leading-relaxed">
                  Developed a high-performance dynamic portfolio with a custom Admin Panel, enabling a Senior Analyst to manage case studies and blogs without coding.
                </p>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                  <li><strong>Custom CMS:</strong> Integrated TipTap rich-text editor and Cloudinary for seamless blog/project management.</li>
                  <li><strong>Security:</strong> Implemented NextAuth with Hashed OTP 2FA protection (5-min TTL) for the admin dashboard.</li>
                  <li><strong>Cost Optimization:</strong> Engineered a hybrid deployment redirecting Hostinger DNS to Vercel for zero-cost hosting.</li>
                  <li><strong>Automation:</strong> Connected Resend API for instant transactional emails and newsletter broadcasts.</li>
                </ul>
              </div>

              {/* Project 2: Testify */}
              <div className="mb-8 relative pl-6 border-l-2 border-gray-200">
                <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-gray-300 border-4 border-white"></div>
                <h4 className="text-lg font-bold text-slate-800">Testify</h4>
                <p className="text-sm text-gray-600 mb-2 italic">Online Exam Management System</p>
                <p className="text-gray-700 text-sm mb-2 leading-relaxed">
                  A full-stack Online Exam Management built with Next.js 15.5, Typescript, and MongoDB. It enables Admins, Teachers, and Students to collaborate on a platform where tests can be created, attempted, and ranked in real-time.
                </p>
              </div>

              {/* Project 3: Taskify */}
              <div className="relative pl-6 border-l-2 border-gray-200">
                <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-gray-300 border-4 border-white"></div>
                <h4 className="text-lg font-bold text-slate-800">Taskify</h4>
                <p className="text-sm text-gray-600 mb-2 italic">To-do & Diary App</p>
                <p className="text-gray-700 text-sm mb-2 leading-relaxed">
                  Designed a to-do and diary management platform using Next.js and Shadcn UI. Implemented OTP-based signup and password recovery; built a user dashboard for tasks and diary entries.
                </p>
              </div>
            </section>

            {/* Certifications */}
            <section>
              <h3 className="text-lg font-bold text-slate-900 border-b-2 border-blue-500 pb-2 mb-4 uppercase">Certificate</h3>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-gray-50 p-4 rounded-lg">
                <div>
                  <h4 className="font-bold text-slate-800">Full-stack web development certificate</h4>
                  <p className="text-sm text-gray-600">Udemy</p>
                </div>
              </div>
            </section>

          </main>
        </div>
      </div>
    </div>
  );
}