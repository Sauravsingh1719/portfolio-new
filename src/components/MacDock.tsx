'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { motion, useMotionValue, useSpring, useTransform, MotionValue, AnimatePresence } from 'framer-motion';
import { 
  Home, 
  FolderGit2, 
  Cpu, // For Skills
  PenTool, // For Writings
  Mail 
} from 'lucide-react';
import { cn } from '@/lib/utils'; // Assuming you have a cn utility, or remove and use template literals

// 1. Configuration: Your Menu Items
const DATA = [
  { title: 'Home', icon: Home, href: '/' },
  { title: 'Projects', icon: FolderGit2, href: '/#projects' },
  { title: 'Skills', icon: Cpu, href: '/#skills' },
  { title: 'Writings', icon: PenTool, href: '/#writings' },
  { title: 'Contact', icon: Mail, href: '/#contact' },
];

export default function MacDock() {
  const mouseX = useMotionValue(Infinity);

  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 flex items-end gap-4 pb-3 px-4">
      <motion.div
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className="mx-auto flex h-16 gap-4 items-end rounded-2xl bg-gray-900/40 backdrop-blur-md border border-white/10 px-4 pb-3"
      >
        {DATA.map((item) => (
          <DockIcon mouseX={mouseX} key={item.title} {...item} />
        ))}
      </motion.div>
    </div>
  );
}

function DockIcon({
  mouseX,
  title,
  icon: Icon,
  href,
}: {
  mouseX: MotionValue;
  title: string;
  icon: any;
  href: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  // 2. The Math: Calculate distance from mouse to icon center
  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  // 3. The Transformation: Map distance to width/height
  // When mouse is close (0px), size is 80px. When far (150px), size is 40px.
  const widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  const heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);

  // 4. The Spring: Make it bouncy and smooth
  const width = useSpring(widthTransform, { mass: 0.1, stiffness: 150, damping: 12 });
  const height = useSpring(heightTransform, { mass: 0.1, stiffness: 150, damping: 12 });

  // 5. Icon Size Logic: Icon grows relative to the container
  const iconScale = useTransform(distance, [-150, 0, 150], [1, 1.5, 1]); // Icon scales up 1.5x
  const scaleSpring = useSpring(iconScale, { mass: 0.1, stiffness: 150, damping: 12 });

  const [hovered, setHovered] = React.useState(false);

  return (
    <Link href={href}>
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="aspect-square rounded-full bg-gray-800/80 border border-white/10 flex items-center justify-center relative shadow-lg shadow-black/40 hover:bg-gray-700/80 transition-colors"
      >
        {/* Tooltip (Title) */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: "-50%" }}
              animate={{ opacity: 1, y: -50, x: "-50%" }}
              exit={{ opacity: 0, y: 2, x: "-50%" }}
              className="absolute left-1/2 -top-2 w-fit whitespace-nowrap rounded-md border border-white/10 bg-gray-900/90 px-2 py-0.5 text-xs text-white backdrop-blur-md"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Icon */}
        <motion.div style={{ scale: scaleSpring }}>
          <Icon className="h-5 w-5 text-white" />
        </motion.div>
      </motion.div>
    </Link>
  );
}