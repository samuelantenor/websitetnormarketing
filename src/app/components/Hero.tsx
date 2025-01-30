'use client';

import { motion } from 'framer-motion';

interface HeroProps {
  dict: {
    hero: {
      title: string;
      subtitle: string;
      cta: string;
    };
  };
  lang: string;
}

export default function Hero({ dict, lang }: HeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Animated background gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-1/4 -top-1/4 w-[800px] h-[800px] bg-primary/20 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute -left-1/4 -bottom-1/4 w-[600px] h-[600px] bg-accent/20 rounded-full blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          {/* New badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background-light/10 backdrop-blur-sm border border-white/10 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm font-medium text-white/80">
              {lang === 'fr' ? 'Agence Certifiée Google' : 'Google Certified Agency'}
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60"
          >
            {dict.hero.title}
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-text-secondary mb-12 max-w-2xl mx-auto"
          >
            {dict.hero.subtitle}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-6"
          >
            <a
              href="#contact"
              className="px-8 py-4 bg-gradient-to-r from-primary to-accent rounded-xl text-white font-medium 
                transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
            >
              {dict.hero.cta}
            </a>
            <a
              href="#services"
              className="px-8 py-4 bg-background-light/10 backdrop-blur-sm border border-white/10 rounded-xl text-white font-medium 
                hover:bg-background-light/20 transition-all duration-300"
            >
              {lang === 'fr' ? 'En Savoir Plus' : 'Learn More'}
            </a>
          </motion.div>

          
        </motion.div>
      </div>
    </div>
  );
} 