'use client';

import React, { useState, memo } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, ArrowUpRight, User, AtSign, MessageSquare } from 'lucide-react';
import { GlobeDemo } from './Globe'; 

const GlobePanel = memo(() => {
  return (
    <div className="lg:col-span-2 bg-gradient-to-b from-[#0a0a0a] to-black relative overflow-hidden flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/5 p-8 h-full min-h-[400px]">
        
        {}
        <div className="relative z-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono mb-3">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                OPEN TO WORK
            </div>
            <h3 className="text-white font-bold text-2xl tracking-tight leading-tight">Worldwide<br/>Connection</h3>
        </div>

        {}
        <div className="absolute inset-0 flex items-center justify-center z-10 mt-10 lg:mt-0">
             <div className="w-full h-full transform scale-[0.85] lg:scale-[0.95] translate-y-4">
                <GlobeDemo />
             </div>
        </div>

        {}
        <div className="relative z-20 flex gap-3 mt-auto pt-8">
           <SocialButton href="https://github.com/Sauravsingh1719" icon={<Github size={18} />} />
           <SocialButton href="https://www.linkedin.com/in/saurav-kumar-262219337" icon={<Linkedin size={18} />} />
           <SocialButton href="mailto:Sauravs1719@gmail.com" icon={<Mail size={18} />} />
        </div>
        
        {}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black to-transparent pointer-events-none z-10" />
    </div>
  );
});

GlobePanel.displayName = 'GlobePanel';


export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!formData.name || !formData.email || !formData.message) return;

  setLoading(true);

  try {
    const res = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        message: formData.message,
      }),
    });

    if (!res.ok) {
      throw new Error('Failed to send message');
    }

    setFormData({ name: '', email: '', message: '' });
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  } catch (error) {
    console.error(error);
    alert('Something went wrong. Please try again.');
  } finally {
    setLoading(false);
  }
};


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-20 bg-[#050505] relative flex items-center justify-center overflow-hidden">
      
      {}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 max-w-5xl">
        
        {}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-black/40 backdrop-blur-2xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-5 min-h-[500px]"
        >
            
            {}
            <GlobePanel />

            {}
            <div className="lg:col-span-3 p-8 lg:p-12 flex flex-col justify-center bg-black/20">
                
                <div className="mb-8">
                    <h2 className="text-3xl font-bold text-white mb-2">Let's build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">great.</span></h2>
                    <p className="text-neutral-400 text-sm">Fill out the form below and I'll get back to you within 24 hours.</p>
                </div>

                {submitted ? (
                    <div className="flex flex-col items-center justify-center h-64 text-center animate-in fade-in zoom-in duration-500">
                        <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center text-green-500 mb-4 border border-green-500/20">
                            <ArrowUpRight size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-white">Message received!</h3>
                        <p className="text-neutral-500 text-sm mt-2">I'll be in touch soon.</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid grid-cols-2 gap-5">
                            <div className="group relative">
                                <div className={`absolute left-0 top-1/2 -translate-y-1/2 text-neutral-500 transition-colors ${focusedField === 'name' ? 'text-blue-500' : ''}`}>
                                    <User size={18} />
                                </div>
                                <input 
                                    name="name" 
                                    value={formData.name} 
                                    onChange={handleChange}
                                    onFocus={() => setFocusedField('name')}
                                    onBlur={() => setFocusedField(null)}
                                    className="w-full bg-transparent border-b border-white/10 py-3 pl-8 text-white focus:border-blue-500 outline-none transition-all placeholder:text-neutral-600 text-sm"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div className="group relative">
                                <div className={`absolute left-0 top-1/2 -translate-y-1/2 text-neutral-500 transition-colors ${focusedField === 'email' ? 'text-blue-500' : ''}`}>
                                    <AtSign size={18} />
                                </div>
                                <input 
                                    name="email" 
                                    type="email"
                                    value={formData.email} 
                                    onChange={handleChange}
                                    onFocus={() => setFocusedField('email')}
                                    onBlur={() => setFocusedField(null)}
                                    className="w-full bg-transparent border-b border-white/10 py-3 pl-8 text-white focus:border-blue-500 outline-none transition-all placeholder:text-neutral-600 text-sm"
                                    placeholder="Email Address"
                                />
                            </div>
                        </div>
                        
                        <div className="group relative">
                            <div className={`absolute left-0 top-4 text-neutral-500 transition-colors ${focusedField === 'message' ? 'text-blue-500' : ''}`}>
                                <MessageSquare size={18} />
                            </div>
                            <textarea
                                name="message"
                                rows={3}
                                value={formData.message}
                                onChange={handleChange}
                                onFocus={() => setFocusedField('message')}
                                onBlur={() => setFocusedField(null)}
                                className="w-full bg-transparent border-b border-white/10 py-3 pl-8 text-white focus:border-blue-500 outline-none transition-all placeholder:text-neutral-600 text-sm resize-none"
                                placeholder="Tell me about your project..."
                            ></textarea>
                        </div>
                        
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full mt-4 bg-white text-black font-bold py-3.5 rounded-xl hover:bg-neutral-200 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 text-sm disabled:opacity-70 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]"
                        >
                            {loading ? (
                                <span className="animate-pulse">Sending...</span>
                            ) : (
                                <>Send Message <ArrowUpRight size={18} /></>
                            )}
                        </button>
                    </form>
                )}
            </div>

        </motion.div>
      </div>
    </section>
  );
}

const SocialButton = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
    <a 
        href={href} 
        target="_blank" 
        className="w-10 h-10 flex items-center justify-center rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white hover:bg-white hover:text-black transition-all duration-300 hover:scale-110 z-30"
    >
        {icon}
    </a>
);
