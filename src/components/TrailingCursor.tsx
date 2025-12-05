'use client';

import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  size: number;
  color: string;
}

export default function TrailingCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const cursorRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);

  // Configuration
  const colors = [
    '#60A5FA', // Blue-400
    '#A78BFA', // Purple-400
    '#3B82F6', // Blue-500
    '#ffffff'  // White sparkles
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Handle Resize
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    resize();

    // Helper to create particles
    const addParticle = (x: number, y: number) => {
      // Spawn 2 particles per move for a richer trail
      for (let i = 0; i < 2; i++) {
        particlesRef.current.push({
          x,
          y,
          // Random slight velocity for "drift" feel
          vx: (Math.random() - 0.5) * 1.5,
          vy: (Math.random() - 0.5) * 1.5,
          life: 1.0, // Starts at 100% opacity
          size: Math.random() * 2 + 1, // Random size between 1px and 3px
          color: colors[Math.floor(Math.random() * colors.length)]
        });
      }
    };

    // Handle Mouse Move
    const onMouseMove = (e: MouseEvent) => {
      cursorRef.current = { x: e.clientX, y: e.clientY };
      addParticle(e.clientX, e.clientY);
    };
    window.addEventListener('mousemove', onMouseMove);

    // Animation Loop
    const animate = () => {
      // Clear canvas with a slight fade effect for "trails"
      // Instead of clearRect, we draw a semi-transparent black rect
      // This creates a "long exposure" look, but for crisp particles, clearRect is better.
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 1. Update and Draw Particles
      particlesRef.current.forEach((p, index) => {
        // Move particle
        p.x += p.vx;
        p.y += p.vy;
        
        // Age particle
        p.life -= 0.02; // Decrease life (higher = faster fade)

        // Remove dead particles
        if (p.life <= 0) {
          particlesRef.current.splice(index, 1);
          return;
        }

        // Draw
        ctx.globalAlpha = p.life;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // 2. Draw Main Cursor (Glowing Orb)
      ctx.globalAlpha = 1;
      
      // Outer Glow
      const gradient = ctx.createRadialGradient(
        cursorRef.current.x, cursorRef.current.y, 0,
        cursorRef.current.x, cursorRef.current.y, 12
      );
      gradient.addColorStop(0, 'rgba(255, 255, 255, 0.8)');
      gradient.addColorStop(0.5, 'rgba(167, 139, 250, 0.4)'); // Purple tint
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(cursorRef.current.x, cursorRef.current.y, 12, 0, Math.PI * 2);
      ctx.fill();

      // Inner Core
      ctx.fillStyle = 'white';
      ctx.beginPath();
      ctx.arc(cursorRef.current.x, cursorRef.current.y, 3, 0, Math.PI * 2);
      ctx.fill();

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      // mix-blend-screen ensures the glowing colors look bright on dark backgrounds
      className="fixed inset-0 pointer-events-none z-[9999] mix-blend-screen" 
    />
  );
}