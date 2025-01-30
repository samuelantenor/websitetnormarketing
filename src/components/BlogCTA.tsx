'use client';

import { FiArrowRight } from 'react-icons/fi';
import Link from 'next/link';
import { motion } from 'framer-motion';
import type { Locale } from '@/config/i18n.config';

interface BlogCTAProps {
  lang: Locale;
  title: string;
  description: string;
  buttonText: string;
}

export default function BlogCTA({ lang, title, description, buttonText }: BlogCTAProps) {
  return (
    <div className="py-20 bg-background-dark relative overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-background-dark via-background-dark to-primary/20" />
      
      {/* Animated shapes */}
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
        className="absolute -right-64 -top-64 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
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
        className="absolute -left-32 -bottom-32 w-64 h-64 bg-accent/10 rounded-full blur-3xl"
      />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            {title}
          </h2>
          <p className="text-lg text-text-secondary mb-8">
            {description}
          </p>
          <Link
            href={`/${lang}/blog`}
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-white rounded-full font-medium 
              transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
          >
            {buttonText}
            <FiArrowRight className="text-lg" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
} 