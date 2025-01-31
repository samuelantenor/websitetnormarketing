'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface TestimonialsProps {
  dict: {
    testimonials: {
      title: string;
      items: {
        name: string;
        company: string;
        text: string;
      }[];
    };
  };
}

export default function Testimonials({ dict }: TestimonialsProps) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = useCallback((newDirection: number) => {
    setDirection(newDirection);
    setCurrent((current) => (current + newDirection + dict.testimonials.items.length) % dict.testimonials.items.length);
  }, [dict.testimonials.items.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 5000);

    return () => clearInterval(timer);
  }, [paginate]);

  return (
    <section className="py-20 bg-background-dark relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background-light/5 to-transparent" />

      <div className="container mx-auto px-4 relative">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-text-primary"
        >
          {dict.testimonials.title}
        </motion.h2>

        <div className="relative h-[400px] max-w-4xl mx-auto">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="absolute w-full"
            >
              <div className="bg-background-light rounded-lg p-8 md:p-12 shadow-xl">
                <FaQuoteLeft className="text-4xl text-primary mb-6" />
                <p className="text-lg md:text-xl text-text-secondary mb-8">
                  {dict.testimonials.items[current].text}
                </p>
                <div className="flex items-center">
                  <div>
                    <h4 className="font-semibold text-text-primary">
                      {dict.testimonials.items[current].name}
                    </h4>
                    <p className="text-text-secondary">
                      {dict.testimonials.items[current].company}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none px-4">
            <button
              onClick={() => paginate(-1)}
              className="p-2 rounded-full bg-background-dark/50 text-text-primary hover:bg-background-dark transition-colors pointer-events-auto"
              aria-label="Previous testimonial"
            >
              <FaChevronLeft size={24} />
            </button>
            <button
              onClick={() => paginate(1)}
              className="p-2 rounded-full bg-background-dark/50 text-text-primary hover:bg-background-dark transition-colors pointer-events-auto"
              aria-label="Next testimonial"
            >
              <FaChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 