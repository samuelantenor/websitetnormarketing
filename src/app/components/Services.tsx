'use client';

import { motion } from 'framer-motion';
import { FaGoogle, FaHashtag, FaUsers, FaCalendar, FaSms, FaLaptopCode } from 'react-icons/fa';

interface ServicesProps {
  dict: {
    services: {
      title: string;
      items: {
        seo: string;
        social: string;
        management: string;
        booking: string;
        sms: string;
        website: string;
        descriptions: {
          seo: string;
          social: string;
          management: string;
          booking: string;
          sms: string;
          website: string;
        };
      };
    };
  };
}

export default function Services({ dict }: ServicesProps) {
  const services = [
    {
      icon: FaGoogle,
      title: dict.services.items.seo,
      description: dict.services.items.descriptions.seo,
      color: 'bg-primary'
    },
    {
      icon: FaHashtag,
      title: dict.services.items.social,
      description: dict.services.items.descriptions.social,
      color: 'bg-primary'
    },
    {
      icon: FaUsers,
      title: dict.services.items.management,
      description: dict.services.items.descriptions.management,
      color: 'bg-primary'
    },
    {
      icon: FaCalendar,
      title: dict.services.items.booking,
      description: dict.services.items.descriptions.booking,
      color: 'bg-primary'
    },
    {
      icon: FaSms,
      title: dict.services.items.sms,
      description: dict.services.items.descriptions.sms,
      color: 'bg-primary'
    },
    {
      icon: FaLaptopCode,
      title: dict.services.items.website,
      description: dict.services.items.descriptions.website,
      color: 'bg-primary'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center py-20 bg-background-dark">
      <div className="container mx-auto px-4 relative">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-text-primary"
        >
          {dict.services.title}
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-background-light rounded-2xl p-8 relative overflow-hidden group hover:shadow-xl transition-shadow"
            >
              {/* Gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br opacity-5 group-hover:opacity-10 transition-opacity" />

              <div className="relative z-10">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${service.color} bg-opacity-10 mb-6`}>
                  <service.icon className="text-2xl text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-text-primary">
                  {service.title}
                </h3>
                <p className="text-text-secondary">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
} 