'use client';

import { useForm, ValidationError } from '@formspree/react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { useEffect, useRef } from 'react';

interface ContactFormProps {
  dict: {
    contact: {
      title: string;
      name: string;
      email: string;
      message: string;
      submit: string;
      success: string;
      error: string;
    };
    footer: {
      contact: {
        title: string;
        address: string;
        email: string;
        phone: string;
      };
    };
  };
}

export default function ContactForm({ dict }: ContactFormProps) {
  const [state, handleSubmit] = useForm("mnnqpdwn");
  const formRef = useRef<HTMLFormElement>(null);

  // Reset form when submission is successful
  useEffect(() => {
    if (state.succeeded) {
      formRef.current?.reset();
    }
  }, [state.succeeded]);

  const contactInfo = [
    {
      icon: FaPhone,
      title: dict.footer.contact.title === "Contact Info" ? "Phone" : "Téléphone",
      content: dict.footer.contact.phone,
      color: "text-primary"
    },
    {
      icon: FaEnvelope,
      title: dict.footer.contact.title === "Contact Info" ? "Email" : "Courriel",
      content: dict.footer.contact.email,
      color: "text-primary"
    },
    {
      icon: FaMapMarkerAlt,
      title: dict.footer.contact.title === "Contact Info" ? "Address" : "Adresse",
      content: dict.footer.contact.address,
      color: "text-primary"
    }
  ];

  return (
    <section className="py-20 bg-background-dark relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 " />

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-text-primary mb-4"
          >
            {dict.contact.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-text-secondary text-lg"
          >
            {dict.footer.contact.title === "Contact Info" 
              ? "Ready to transform your digital presence? Contact us today for a free consultation"
              : "Prêt à transformer votre présence numérique ? Contactez-nous dès aujourd'hui pour une consultation gratuite"}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-text-secondary mb-2">
                  {dict.contact.name}
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  placeholder={dict.contact.name}
                  className="w-full px-4 py-3 rounded-lg bg-background-light border border-gray-700 text-text-primary focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                />
                <ValidationError prefix={dict.contact.name} field="name" errors={state.errors} />
              </div>

              <div>
                <label htmlFor="email" className="block text-text-secondary mb-2">
                  {dict.contact.email}
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  placeholder={dict.contact.email}
                  className="w-full px-4 py-3 rounded-lg bg-background-light border border-gray-700 text-text-primary focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                />
                <ValidationError prefix={dict.contact.email} field="email" errors={state.errors} />
              </div>

              <div>
                <label htmlFor="message" className="block text-text-secondary mb-2">
                  {dict.contact.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder={dict.contact.message}
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg bg-background-light border border-gray-700 text-text-primary focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-none"
                />
                <ValidationError prefix={dict.contact.message} field="message" errors={state.errors} />
              </div>

              <button
                type="submit"
                disabled={state.submitting}
                className="w-full py-3 px-6 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {state.submitting ? '...' : dict.contact.submit}
              </button>

              {state.succeeded && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-green-500 text-center mt-4"
                >
                  {dict.contact.success}
                </motion.p>
              )}
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-background-light rounded-2xl p-8"
          >
            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="p-3 rounded-lg bg-background-dark">
                    <info.icon className={`text-xl ${info.color}`} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary mb-1">
                      {info.title}
                    </h3>
                    <p className="text-text-secondary">
                      {info.content}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Map */}
            <div className="mt-8 w-full rounded-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d178787.81912808729!2d-73.71187334999999!3d45.5591827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91a541c64b70d%3A0x654e3138211fefef!2sMontreal%2C%20QC!5e0!3m2!1sen!2sca!4v1738280122657!5m2!1sen!2sca"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 