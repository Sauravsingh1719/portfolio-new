'use client';

import React, { useState, useEffect } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';

// 1. Defined outside the main component to fix the syntax error
const Particles = () => {
  // Fix for Next.js Hydration Mismatch:
  // We only render particles after the component has mounted on the client
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-white rounded-full opacity-20"
          initial={{
            x: Math.random() * 100 + "vw",
            y: Math.random() * 100 + "vh",
            scale: Math.random() * 0.5 + 0.5,
          }}
          animate={{
            y: [null, Math.random() * -100], // Float up
            opacity: [0.2, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            width: Math.random() * 2 + 1 + "px",
            height: Math.random() * 2 + 1 + "px",
          }}
        />
      ))}
    </div>
  );
};

export const BackgroundLayout = ({ children }: { children: React.ReactNode }) => {
  // Mouse position state for the spotlight effect
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className="relative min-h-screen w-full bg-black group"
      onMouseMove={handleMouseMove}
    >
      {/* 1. The Grid Pattern */}
      <div className="absolute inset-0 h-full w-full bg-black bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      {/* 2. The Mouse Follower (Spotlight) */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(29, 78, 216, 0.15),
              transparent 80%
            )
          `,
        }}
      />

      {/* 3. A fixed vignetting to focus attention on the center */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      {/* 4. Particles Layer */}
      <Particles />

      {/* 5. The Main Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};