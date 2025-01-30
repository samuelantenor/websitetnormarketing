'use client';

import { motion } from 'framer-motion';
import { FiMessageSquare, FiCalendar, FiArrowRight } from 'react-icons/fi';
import Image from 'next/image';

interface ProductsClientProps {
  dict: {
    products: {
      title: string;
      subtitle: string;
      flowtext: {
        title: string;
        description: string;
        features: string[];
        cta: string;
      };
      bookinz: {
        title: string;
        description: string;
        features: string[];
        cta: string;
      };
    };
  };
}

export default function ProductsClient({ dict }: ProductsClientProps) {
  const products = [
    {
      icon: FiMessageSquare,
      title: dict.products.flowtext.title,
      description: dict.products.flowtext.description,
      features: dict.products.flowtext.features,
      cta: dict.products.flowtext.cta,
      image: '/images/snippet-textflow.png',
      color: 'from-red-600 to-red-500',
      link: 'https://textflow.lovable.app/'
    },
    {
      icon: FiCalendar,
      title: dict.products.bookinz.title,
      description: dict.products.bookinz.description,
      features: dict.products.bookinz.features,
      cta: dict.products.bookinz.cta,
      image: '/images/snippet-bookinz.png',
      color: 'from-sky-400 to-blue-300',
      link: 'https://tnorbookinz.lovable.app/'
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-text-primary"
          >
            {dict.products.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-text-secondary"
          >
            {dict.products.subtitle}
          </motion.p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-background-light rounded-2xl overflow-hidden"
            >
              {/* Product Image */}
              <div className="relative h-64 w-full">
                <div className={`absolute inset-0 bg-gradient-to-r ${product.color} opacity-10`} />
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Product Content */}
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${product.color}`}>
                    <product.icon className="text-2xl text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-text-primary">{product.title}</h2>
                </div>

                <p className="text-text-secondary mb-6">
                  {product.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  {product.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + idx * 0.1 }}
                      className="flex items-center gap-3 text-text-secondary"
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${product.color}`} />
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                {/* CTA Button */}
                <a
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r ${product.color} text-white font-medium 
                    transform hover:scale-105 transition-all duration-300 hover:shadow-lg`}
                >
                  {product.cta}
                  <FiArrowRight />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 