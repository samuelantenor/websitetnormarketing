'use client';

import { motion } from 'framer-motion';
import { FaGoogle, FaChartLine, FaUsers } from 'react-icons/fa';
import Image from 'next/image';

interface AboutUsProps {
  dict: {
    about: {
      title: string;
      subtitle: string;
      description: string;
      features: {
        certified: {
          title: string;
          description: string;
        };
        innovative: {
          title: string;
          description: string;
        };
        results: {
          title: string;
          description: string;
        };
      };
    };
  };
}

export default function AboutUs({ dict }: AboutUsProps) {
  const features = [
    {
      icon: FaGoogle,
      title: dict.about.features.certified.title,
      description: dict.about.features.certified.description,
      color: "bg-primary"
    },
    {
      icon: FaChartLine,
      title: dict.about.features.innovative.title,
      description: dict.about.features.innovative.description,
      color: "bg-primary"
    },
    {
      icon: FaUsers,
      title: dict.about.features.results.title,
      description: dict.about.features.results.description,
      color: "bg-primary"
    }
  ];

  return (
    <div className="min-h-screen flex items-center py-20 bg-background-dark">
      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-8 text-text-primary"
            >
              {dict.about.title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-text-secondary mb-16"
            >
              {dict.about.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="space-y-8"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-start space-x-6"
                >
                  <div className={`p-4 rounded-lg ${feature.color} bg-opacity-10`}>
                    <feature.icon className="text-primary text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-text-primary mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-text-secondary">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="relative w-full aspect-square max-w-md mx-auto lg:ml-auto"
          >
            <Image
              src="/images/logo-tm.png"
              alt="TNOR Marketing Logo"
              fill
              className="object-contain"
              priority
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
} 