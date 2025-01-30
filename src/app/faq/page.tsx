'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What services does TNOR Marketing offer?",
    answer: "We offer a comprehensive range of digital marketing services including Google My Business optimization, SEO, social media management, social media advertising, SMS marketing, and website creation."
  },
  {
    question: "Are you a certified Google partner?",
    answer: "Yes, we are a Google certified Digital Marketing Agency based in Montreal, ensuring that we follow best practices and stay up-to-date with the latest digital marketing trends."
  },
  {
    question: "How can I get started with your services?",
    answer: "Getting started is easy! Simply fill out our contact form or reach out to us directly. We'll schedule a consultation to understand your needs and create a customized marketing strategy for your business."
  },
  {
    question: "Do you offer services in both English and French?",
    answer: "Yes, we provide bilingual services in both English and French to better serve the Montreal community and beyond."
  },
  {
    question: "What is your approach to social media management?",
    answer: "We take a strategic approach to social media management, focusing on creating engaging content, building community, and driving meaningful interactions while maintaining consistent brand messaging across all platforms."
  }
];

function FAQItem({ item, isOpen, onToggle }: { item: FAQItem; isOpen: boolean; onToggle: () => void }) {
  return (
    <motion.div
      initial={false}
      className="border-b border-gray-800"
    >
      <button
        className="w-full py-4 flex justify-between items-center text-left"
        onClick={onToggle}
      >
        <span className="text-lg text-text-primary">{item.question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-primary"
        >
          <FaChevronDown />
        </motion.span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="pb-4 text-text-secondary">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen py-16 md:py-24">
      <div className="container max-w-3xl mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-text-primary"
        >
          Frequently Asked Questions
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-background-light rounded-lg p-6 shadow-lg"
        >
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              item={faq}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
} 