'use client';

import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { motion, AnimatePresence } from 'framer-motion';
import type { Locale } from '@/config/i18n.config';
import type { Dictionary } from '@/types/dictionary';

interface LayoutProps {
  children: ReactNode;
  lang: Locale;
  dict: Dictionary;
}

export default function Layout({ children, lang, dict }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-background-dark text-text-primary">
      <Navbar lang={lang} dict={dict} />
      <AnimatePresence mode="wait">
        <motion.main
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="flex-grow"
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <Footer lang={lang} dict={dict} />
    </div>
  );
}
