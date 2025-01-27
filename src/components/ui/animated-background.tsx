'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function AnimatedBackground() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -50]);
  const [particles, setParticles] = useState<Array<{ x: number; y: number }>>([]);
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
    setParticles(
      Array.from({ length: 50 }, () => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
      }))
    );
  }, []);

  if (!mounted) return null;
  
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        style={{ y }}
        className="absolute inset-0"
        initial={false}
      >
        {/* Base gradient */}
        <div className={`
          absolute inset-0 transition-colors duration-1000
          ${theme === 'dark' ? 'bg-[#020817]' : 'bg-gradient-to-b from-blue-50 to-white'}
        `} />
        
        {/* Animated elements */}
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {particles.map((particle, i) => (
            <motion.div
              key={i}
              className={`
                absolute w-3 h-3 rounded-full
                ${theme === 'dark' 
                  ? 'bg-yellow-200/60 shadow-[0_0_15px_rgba(253,224,71,0.6)]'
                  : 'bg-blue-300/60 shadow-[0_0_15px_rgba(59,130,246,0.6)]'
                }
              `}
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
              }}
              animate={{
                y: [0, -40, 0],
                opacity: theme === 'dark' ? [0.4, 0.8, 0.4] : [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3 + (i % 2) * 2,
                repeat: Infinity,
                delay: i * 0.1,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>

        {/* Glowing orbs */}
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-64 h-64 rounded-full"
              style={{
                background: theme === 'dark'
                  ? 'radial-gradient(circle, rgba(253,224,71,0.5) 0%, transparent 70%)'
                  : 'radial-gradient(circle, rgba(59,130,246,0.4) 0%, transparent 70%)',
                left: `${25 + i * 25}%`,
                top: '50%',
                filter: 'blur(25px)',
              }}
              animate={{
                scale: [1, 1.3, 1],
                opacity: theme === 'dark' ? [0.5, 0.8, 0.5] : [0.4, 0.7, 0.4],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: i * 2,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>

        {/* Additional glow layer */}
        <div 
          className={`
            absolute inset-0 bg-gradient-to-b
            ${theme === 'dark'
              ? 'from-transparent via-yellow-400/10 to-transparent'
              : 'from-transparent via-blue-400/30 to-transparent'
            }
          `}
          style={{ mixBlendMode: 'overlay' }}
        />

        {/* Light mode specific animations */}
        {theme !== 'dark' && (
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={`wave-${i}`}
                className="absolute w-[200%] h-40 bg-gradient-to-r from-blue-200/30 via-blue-300/40 to-blue-200/30"
                style={{
                  top: `${(i * 30) - 20}%`,
                  transform: `rotate(${i % 2 ? -5 : 5}deg)`,
                }}
                animate={{
                  x: ['-100%', '0%'],
                }}
                transition={{
                  duration: 20 + i * 2,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * -2,
                }}
              />
            ))}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
