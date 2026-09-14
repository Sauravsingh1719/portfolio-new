import React from 'react';
import {
  Mail,
  MapPin,
  Globe,
  Github,
  Linkedin,
  CheckCircle2,
} from 'lucide-react';
import ResumeActions from '@/components/ResumeActions';

export const metadata = {
  title: 'Resume | Saurav Kumar',
  description: 'Full Stack Web Developer Resume',
};

export default function ResumePage() {
  return (
    <div className="pt-25 min-h-screen bg-gray-100 py-10 px-4 md:px-8 print:p-0 print:bg-white">
      {/* Resume Actions */}
      <ResumeActions />

      {/* Resume Container */}
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden print:shadow-none print:rounded-none min-h-[1100px]">
        {/* Header */}
        <header className="bg-slate-900 text-white p-8 md:p-12 print:bg-slate-900 print:text-white">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-2">
                SAURAV KUMAR
              </h1>

              <h2 className="text-xl md:text-2xl text-blue-400 font-medium">
                Full Stack Web Developer
              </h2>
            </div>

            <div className="flex flex-col gap-2 text-sm md:text-base text-gray-300">
              {/* Location */}
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-blue-400 shrink-0" />
                <span>New Delhi, India</span>
              </div>

              {/* Email */}
              <a
                href="mailto:sauravs1719@gmail.com"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="h-4 w-4 text-blue-400 shrink-0" />
                <span>sauravs1719@gmail.com</span>
              </a>

              {/* Portfolio */}
              <a
                href="https://saurav190.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Globe className="h-4 w-4 text-blue-400 shrink-0" />
                <span>saurav190.vercel.app</span>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/saurav-kumar-262219337/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Linkedin className="h-4 w-4 text-blue-400 shrink-0" />
                <span>LinkedIn</span>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/Sauravsingh1719"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Github className="h-4 w-4 text-blue-400 shrink-0" />
                <span>github.com/Sauravsingh1719</span>
              </a>
            </div>
          </div>
        </header>

        {/* Main Resume Body */}
        <div className="grid grid-cols-1 md:grid-cols-3">
          {/* ==================== SIDEBAR ==================== */}
          <aside className="bg-slate-50 p-8 border-r border-gray-100 md:col-span-1 print:bg-slate-50">
            {/* Contacts */}
            <section className="mb-8">
              <h3 className="text-lg font-bold text-slate-900 border-b-2 border-blue-500 pb-2 mb-4">
                CONTACTS
              </h3>

              <div className="space-y-3 text-sm text-gray-700">
                <a
                  href="tel:7011367561"
                  className="flex items-start gap-2 hover:text-slate-900 transition-colors"
                >
                  <span className="text-blue-500 font-semibold">☎</span>
                  <span>7011367561</span>
                </a>

                <a
                  href="mailto:sauravs1719@gmail.com"
                  className="flex items-start gap-2 hover:text-slate-900 transition-colors"
                >
                  <Mail className="h-4 w-4 text-blue-500 mt-0.5 shrink-0" />
                  <span className="break-all">sauravs1719@gmail.com</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/saurav-kumar-262219337/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 hover:text-slate-900 transition-colors"
                >
                  <Linkedin className="h-4 w-4 text-blue-500 mt-0.5 shrink-0" />
                  <span className="break-all">
                    linkedin.com/in/saurav-kumar-262219337/
                  </span>
                </a>

                <a
                  href="https://saurav190.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 hover:text-slate-900 transition-colors"
                >
                  <Globe className="h-4 w-4 text-blue-500 mt-0.5 shrink-0" />
                  <span>saurav190.vercel.app</span>
                </a>

                <a
                  href="https://github.com/Sauravsingh1719"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 hover:text-slate-900 transition-colors"
                >
                  <Github className="h-4 w-4 text-blue-500 mt-0.5 shrink-0" />
                  <span className="break-all">
                    github.com/Sauravsingh1719
                  </span>
                </a>

                <div className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 text-blue-500 mt-0.5 shrink-0" />
                  <span>New Delhi, India</span>
                </div>
              </div>
            </section>

            {/* Key Achievements */}
            <section className="mb-8">
              <h3 className="text-lg font-bold text-slate-900 border-b-2 border-blue-500 pb-2 mb-4">
                KEY ACHIEVEMENTS
              </h3>

              <div className="space-y-5">
                {/* Competitive Exams */}
                <div>
                  <h4 className="font-bold text-slate-800 text-sm mb-1">
                    Competitive Exams
                  </h4>

                  <p className="text-xs text-gray-600 leading-relaxed">
                    Cleared 13 national-level competitive examinations,
                    including UPSC CDS, AFCAT, Navy SSR, SSC GD, CAPF AC
                    (Paper 1), and SSC CGL (Prelims).
                  </p>
                </div>

                {/* SSB Interviews */}
                <div>
                  <h4 className="font-bold text-slate-800 text-sm mb-1">
                    SSB Interviews
                  </h4>

                  <p className="text-xs text-gray-600 leading-relaxed">
                    Attended multiple SSB interviews through to the final
                    stage, demonstrating high-level leadership, resilience,
                    and analytical problem-solving under pressure.
                  </p>
                </div>

                {/* Content Creation */}
                <div>
                  <h4 className="font-bold text-slate-800 text-sm mb-1">
                    Content Creation
                  </h4>

                  <p className="text-xs text-gray-600 leading-relaxed">
                    Founded &apos;The Self Study Ranker&apos; YouTube channel,
                    scripting and editing comprehensive educational tutorials
                    for various competitive exams.
                  </p>
                </div>
              </div>
            </section>

            {/* Skills */}
            <section className="mb-8">
              <h3 className="text-lg font-bold text-slate-900 border-b-2 border-blue-500 pb-2 mb-4">
                SKILLS
              </h3>

              <div className="space-y-4 text-sm text-gray-700">
                <div>
                  <p className="font-bold text-slate-800 mb-1">
                    Frontend:
                  </p>
                  <p className="leading-relaxed">
                    Next.js (App Router), React.js, TypeScript, Tailwind CSS,
                    Framer Motion
                  </p>
                </div>

                <div>
                  <p className="font-bold text-slate-800 mb-1">
                    Backend &amp; DB:
                  </p>
                  <p className="leading-relaxed">
                    MongoDB, REST APIs, NextAuth.js (Auth.js)
                  </p>
                </div>

                <div>
                  <p className="font-bold text-slate-800 mb-1">
                    Tools:
                  </p>
                  <p className="leading-relaxed">
                    Vercel, Git, GitHub, SEO, Cloudinary, Resend API
                  </p>
                </div>
              </div>
            </section>

            {/* Languages */}
            <section>
              <h3 className="text-lg font-bold text-slate-900 border-b-2 border-blue-500 pb-2 mb-4">
                LANGUAGES
              </h3>

              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex justify-between gap-4">
                  <span>English</span>
                  <span className="font-medium text-gray-500">
                    Proficient
                  </span>
                </div>

                <div className="flex justify-between gap-4">
                  <span>Hindi</span>
                  <span className="font-medium text-gray-500">
                    Native
                  </span>
                </div>
              </div>
            </section>
          </aside>

          {/* ==================== MAIN CONTENT ==================== */}
          <main className="p-8 md:col-span-2">
            {/* Professional Summary */}
            <section className="mb-10">
              <h3 className="text-lg font-bold text-slate-900 border-b-2 border-blue-500 pb-2 mb-4 uppercase">
                SUMMARY
              </h3>

              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                Full Stack Web Developer with hands-on experience building
                production-grade web applications using Next.js, TypeScript,
                React.js, and MongoDB. Specialized in secure authentication
                systems (NextAuth, OTP-based 2FA), REST API development, and
                scalable CMS architecture. Delivered freelance projects that
                reduced client infrastructure costs and improved content
                workflows. Currently pursuing MCA while actively building and
                shipping real-world products.
              </p>
            </section>

            {/* Experience */}
            <section className="mb-10">
              <h3 className="text-lg font-bold text-slate-900 border-b-2 border-blue-500 pb-2 mb-6 uppercase">
                EXPERIENCE
              </h3>

              {/* Freelance */}
              <div className="mb-8">
                <div className="flex flex-col sm:flex-row justify-between gap-2 mb-1">
                  <h4 className="text-lg font-bold text-slate-800">
                    Freelance Full Stack Web Developer
                  </h4>

                  <span className="text-sm font-semibold text-blue-600 whitespace-nowrap">
                    08/2025 – Present
                  </span>
                </div>

                <p className="text-sm text-gray-600 italic mb-3">
                  Self-Employed | Remote, New Delhi
                </p>

                <ul className="list-disc pl-5 text-sm text-gray-700 space-y-2 leading-relaxed">
                  <li>
                    Engineered a hybrid-cloud portfolio and bespoke CMS using
                    Next.js 16, TypeScript, and Tailwind CSS, routing DNS to
                    Vercel to completely eliminate the client&apos;s VPS
                    hosting costs.
                  </li>

                  <li>
                    Built a secure admin dashboard featuring a TipTap
                    rich-text editor and Cloudinary integration, enabling
                    100% no-code content management and automated image
                    optimization.
                  </li>

                  <li>
                    Integrated the Resend API to replace slow SMTP handshakes,
                    powering instant contact form submissions, simultaneous
                    MongoDB data logging, and one-click newsletter broadcasts.
                  </li>

                  <li>
                    Fortified application security by implementing NextAuth
                    with cryptographically hashed OTP 2-Factor Authentication
                    and automated 5-minute TTL self-destruction.
                  </li>
                </ul>
              </div>

              {/* WNS */}
              <div>
                <div className="mb-4">
                  <h4 className="text-lg font-bold text-slate-800">
                    WNS (Part of Capgemini)
                  </h4>

                  <p className="text-sm text-gray-600 italic">
                    Full-time | Gurugram, Haryana, India · Hybrid
                  </p>
                </div>

                {/* Senior Associate */}
                <div className="border-l-2 border-gray-200 pl-4 mb-4">
                  <div className="flex flex-col sm:flex-row justify-between gap-1">
                    <h5 className="font-bold text-slate-800">
                      Senior Associate – RNA
                    </h5>

                    <span className="text-sm font-semibold text-blue-600 whitespace-nowrap">
                      06/2026 – Present
                    </span>
                  </div>
                </div>

                {/* Associate Researcher */}
                <div className="border-l-2 border-gray-200 pl-4">
                  <div className="flex flex-col sm:flex-row justify-between gap-1">
                    <h5 className="font-bold text-slate-800">
                      Associate Researcher
                    </h5>

                    <span className="text-sm font-semibold text-blue-600 whitespace-nowrap">
                      12/2025 – 06/2026
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* Projects */}
            <section className="mb-10">
              <h3 className="text-lg font-bold text-slate-900 border-b-2 border-blue-500 pb-2 mb-6 uppercase">
                PROJECTS
              </h3>

              {/* RoyalInvites */}
              <div className="mb-8 relative pl-6 border-l-2 border-gray-200">
                <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-blue-500 border-4 border-white"></div>

                <div className="flex flex-col sm:flex-row justify-between gap-2 mb-1">
                  <h4 className="text-lg font-bold text-slate-800">
                    RoyalInvites | Personalized Cinematic Wedding Invitations
                  </h4>

                  <span className="text-sm font-semibold text-blue-600">
                    2026
                  </span>
                </div>

                <p className="text-sm text-gray-600 mb-3 italic leading-relaxed">
                  Next.js 16 · TypeScript · Tailwind CSS · Framer Motion ·
                  MongoDB Atlas · NextAuth.js · Cloudinary
                </p>

                <ul className="list-disc pl-5 text-sm text-gray-700 space-y-2 leading-relaxed">
                  <li>
                    Built a full-stack SaaS platform that replaces static
                    PDF/image wedding invitations with personalized,
                    cinematic web experiences, including an interactive
                    wax-seal opening animation, background audio, and 4+
                    visual templates.
                  </li>

                  <li>
                    Engineered a stateless, encoded guest-link system that
                    renders a personalized greeting and message per guest at
                    runtime, avoiding a database record for every recipient
                    while keeping the platform lightweight.
                  </li>

                  <li>
                    Developed a self-serve host dashboard for multi-ceremony
                    wedding timelines (Haldi, Mehendi, Sangeet, etc.) with
                    direct Google Maps venue navigation and one-click,
                    pre-formatted WhatsApp invitation sharing.
                  </li>

                  <li>
                    Added client-side image compression before Cloudinary
                    upload and automated cloud media cleanup on image
                    replacement/deletion to prevent orphaned files and
                    reduce storage overhead.
                  </li>
                </ul>

                <p className="mt-3 text-sm text-gray-700 leading-relaxed">
                  <strong className="text-emerald-600">Impact:</strong> Live,
                  production SaaS product used to invite real wedding guests;
                  built and shipped end-to-end as an independent, AI-assisted
                  full-stack build.
                </p>
              </div>

              {/* Senior Data Analyst Portfolio */}
              <div className="relative pl-6 border-l-2 border-gray-200">
                <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-gray-300 border-4 border-white"></div>

                <div className="flex flex-col sm:flex-row justify-between gap-2 mb-1">
                  <h4 className="text-lg font-bold text-slate-800">
                    Senior Data Analyst Portfolio &amp; Custom CMS
                  </h4>

                  <span className="text-sm font-semibold text-blue-600 whitespace-nowrap">
                    Client Project · 12/2025
                  </span>
                </div>

                <p className="text-sm text-gray-600 mb-3 italic leading-relaxed">
                  Next.js · TypeScript · Tailwind CSS · shadcn/ui · MongoDB ·
                  NextAuth.js · TipTap · Cloudinary · Resend API
                </p>

                <ul className="list-disc pl-5 text-sm text-gray-700 space-y-2 leading-relaxed">
                  <li>
                    Delivered a professional portfolio and a bespoke
                    &quot;Digital Command Center&quot; admin panel for a
                    Senior Data Analyst client to publish case studies,
                    blogs, and a downloadable resume without writing code.
                  </li>

                  <li>
                    Designed a hybrid-cloud architecture that kept the
                    client&apos;s existing Hostinger domain/email while
                    routing web traffic to Vercel, completely eliminating
                    the need for a paid VPS.
                  </li>

                  <li>
                    Integrated a TipTap &quot;MS Word-like&quot; rich-text
                    editor with image alignment and a draft-mode workflow,
                    plus Cloudinary-powered image storage and optimization,
                    for fully self-serve content publishing.
                  </li>

                  <li>
                    Built a high-speed, triple-action contact form (Resend
                    API) that simultaneously logs leads to MongoDB, alerts
                    the admin, and auto-confirms the visitor, alongside a
                    message inbox with read/unread tracking.
                  </li>

                  <li>
                    Secured the platform with password + hashed,
                    auto-expiring OTP 2-factor authentication, ensuring
                    login codes stay useless even in the event of a database
                    leak.
                  </li>
                </ul>

                <p className="mt-3 text-sm text-gray-700 leading-relaxed">
                  <strong className="text-emerald-600">Impact:</strong> $0
                  recurring hosting cost vs. a paid VPS, 100% no-code
                  content management for the client, and a one-click
                  newsletter broadcast on every new publish.
                </p>
              </div>
            </section>

            {/* Education */}
            <section>
              <h3 className="text-lg font-bold text-slate-900 border-b-2 border-blue-500 pb-2 mb-5 uppercase">
                EDUCATION
              </h3>

              {/* MCA */}
              <div className="mb-5">
                <div className="flex flex-col sm:flex-row justify-between gap-2">
                  <h4 className="font-bold text-slate-800">
                    Master of Computer Applications (MCA)
                  </h4>

                  <span className="text-sm font-semibold text-blue-600 whitespace-nowrap">
                    2026 – 2028
                  </span>
                </div>

                <p className="text-sm text-gray-600 italic mt-1">
                  Indira Gandhi National Open University (IGNOU), New Delhi
                </p>
              </div>

              {/* BCA */}
              <div>
                <div className="flex flex-col sm:flex-row justify-between gap-2">
                  <h4 className="font-bold text-slate-800">
                    Bachelor of Computer Applications (BCA)
                  </h4>

                  <span className="text-sm font-semibold text-blue-600 whitespace-nowrap">
                    2020 – 2023
                  </span>
                </div>

                <p className="text-sm text-gray-600 italic mt-1">
                  Indira Gandhi National Open University (IGNOU), New Delhi |
                  Graduated with 62%
                </p>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}