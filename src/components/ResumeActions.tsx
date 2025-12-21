'use client'; 
import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Download } from 'lucide-react';

export default function ResumeActions() {
  return (
    <div className="max-w-5xl mx-auto mb-6 flex justify-between items-center print:hidden">
      {}
      <Link 
        href="/" 
        className="flex items-center text-gray-600 hover:text-black transition-colors"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Portfolio
      </Link>

      {}
      {}
      <a 
        href="/SAURAV_CV.pdf" 
        download="Saurav_Kumar_Resume.pdf"
        className="flex items-center px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors text-gray-700 bg-white font-medium cursor-pointer"
      >
        <Download className="mr-2 h-4 w-4" />
        Download PDF
      </a>
    </div>
  );
}