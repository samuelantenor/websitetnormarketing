'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';
import type { FAQItem } from '@/data/faq-data';

interface FAQClientProps {
  dict: {
    faq: {
      title: string;
      description: string;
    };
  };
  initialFAQs: FAQItem[];
}

export default function FAQClient({ dict, initialFAQs }: FAQClientProps) {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative py-20 bg-background-dark">
        <div className="absolute inset-0 bg-gradient-to-b from-background-dark/50 to-background-dark" />
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            {dict.faq.title}
          </h1>
          <p className="text-xl text-text-secondary max-w-2xl mb-8">
            {dict.faq.description}
          </p>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {initialFAQs.map((faq) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-background-light rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left"
                >
                  <span className="font-medium">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: openItems.includes(faq.id) ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FiChevronDown className="text-xl text-primary" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openItems.includes(faq.id) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="px-6 pb-4"
                    >
                      <p className="text-text-secondary">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 