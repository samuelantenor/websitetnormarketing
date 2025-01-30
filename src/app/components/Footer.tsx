'use client';

import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import type { Locale } from '@/config/i18n.config';

interface FooterProps {
  dict: {
    footer: {
      quickLinks: {
        title: string;
        home: string;
        about: string;
        services: string;
        contact: string;
        faq: string;
      };
      contact: {
        title: string;
        address: string;
        email: string;
        phone: string;
      };
      copyright: string;
    };
  };
  lang: Locale;
}

export default function Footer({ dict, lang }: FooterProps) {
  const socialLinks = [
    { icon: FaFacebookF, href: 'https://facebook.com/tnormarketing' },
    { icon: FaTwitter, href: 'https://twitter.com/tnormarketing' },
    { icon: FaInstagram, href: 'https://instagram.com/tnormarketing' },
    { icon: FaLinkedinIn, href: 'https://linkedin.com/company/tnormarketing' },
  ];

  const quickLinks = [
    { href: `#home`, label: dict.footer.quickLinks.home, isSection: true },
    { href: `#about`, label: dict.footer.quickLinks.about, isSection: true },
    { href: `#services`, label: dict.footer.quickLinks.services, isSection: true },
    { href: `#contact`, label: dict.footer.quickLinks.contact, isSection: true },
    { href: `/${lang}/faq`, label: dict.footer.quickLinks.faq, isSection: false },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    
    // If not on home page, navigate to home page first
    const pathname = window.location.pathname;
    if (pathname !== `/${lang}`) {
      window.location.href = `/${lang}#${sectionId}`;
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-background-dark py-16 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <a 
              href="#home"
              onClick={(e) => scrollToSection(e, 'home')}
              className="text-primary font-bold text-2xl"
            >
              TNOR
            </a>
            <p className="mt-4 text-text-secondary">
              Google certified Digital Marketing agency based in Montreal.
            </p>
            <div className="mt-6 flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-background-light rounded-full text-text-secondary hover:text-primary transition-colors"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-text-primary mb-6">
              {dict.footer.quickLinks.title}
            </h3>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  {link.isSection ? (
                    <a
                      href={link.href}
                      onClick={(e) => scrollToSection(e, link.href.substring(1))}
                      className="text-text-secondary hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-text-secondary hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-text-primary mb-6">
              {dict.footer.contact.title}
            </h3>
            <ul className="space-y-4 text-text-secondary">
              <li>{dict.footer.contact.address}</li>
              <li>
                <a
                  href={`mailto:${dict.footer.contact.email}`}
                  className="hover:text-primary transition-colors"
                >
                  {dict.footer.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${dict.footer.contact.phone}`}
                  className="hover:text-primary transition-colors"
                >
                  {dict.footer.contact.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-text-secondary">
          <p>{dict.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
