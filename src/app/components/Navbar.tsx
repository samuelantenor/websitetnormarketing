'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaBars, FaTimes } from 'react-icons/fa';
import type { Locale } from '@/config/i18n.config';

interface NavbarProps {
  dict: {
    navigation: {
      home: string;
      services: string;
      about: string;
      blog: string;
      contact: string;
      products: string;
    };
  };
  lang: Locale;
}

export default function Navbar({ dict, lang }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window === 'undefined') return;
      
      setScrolled(window.scrollY > 20);

      // Only track sections on the main page
      if (!pathname.includes('/blog') && !pathname.includes('/products')) {
        const sections = document.querySelectorAll('section[id]');
        const scrollPosition = window.scrollY + 100;

        sections.forEach((section) => {
          const sectionTop = (section as HTMLElement).offsetTop;
          const sectionHeight = (section as HTMLElement).offsetHeight;
          const sectionId = section.getAttribute('id') || '';

          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(sectionId);
          }
        });
      }
    };

    // Only add the event listener on the client side
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Initial check
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [pathname]);

  const menuItems = [
    { href: `#home`, label: dict.navigation.home, isSection: true },
    { href: `#services`, label: dict.navigation.services, isSection: true },
    { href: `#about`, label: dict.navigation.about, isSection: true },
    { href: `/${lang}/products`, label: dict.navigation.products, isSection: false },
    { href: `/${lang}/blog`, label: dict.navigation.blog, isSection: false },
    { href: `#contact`, label: dict.navigation.contact, isSection: true },
  ];

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, href: string, isSection: boolean) => {
    if (isSection) {
      e.preventDefault();
      const sectionId = href.replace('#', '');
      
      // If not on home page, navigate to home page first
      if (pathname !== `/${lang}`) {
        window.location.href = `/${lang}#${sectionId}`;
        return;
      }
      
      scrollToSection(sectionId);
    }
  };

  const scrollToSection = (sectionId: string) => {
    if (typeof window === 'undefined') return;

    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
    }
  };

  return (
    <nav className={`fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-50 transition-all duration-300 ${scrolled ? 'py-2' : 'py-3'}`}>
      <div className="relative">
        <motion.div 
          className={`relative px-6 py-2 rounded-full backdrop-blur-lg ${scrolled ? 'bg-background-dark/95 shadow-lg' : 'bg-background-dark/80'}`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link 
              href={`/${lang}`}
              className="flex items-center"
            >
              <span className="text-primary font-bold text-2xl">TNOR</span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1">
              {menuItems.map((item) => {
                const sectionId = item.isSection ? item.href.replace('#', '') : '';
                return item.isSection ? (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavigation(e, item.href, item.isSection)}
                    className={`px-4 py-2 rounded-full text-sm transition-colors ${
                      activeSection === sectionId
                        ? 'text-primary font-semibold'
                        : 'text-text-secondary hover:text-text-primary'
                    }`}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-4 py-2 rounded-full text-sm transition-colors ${
                      pathname.includes(item.href.split('/').pop() || '')
                        ? 'text-primary font-semibold'
                        : 'text-text-secondary hover:text-text-primary'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <Link 
                href={`/${lang === 'en' ? 'fr' : 'en'}${pathname.replace(`/${lang}`, '')}`}
                className="ml-4 px-4 py-2 bg-primary text-white rounded-full text-sm hover:bg-primary/90 transition-colors"
              >
                {lang === 'en' ? 'FR' : 'EN'}
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-text-primary hover:text-primary transition-colors"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </motion.div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 mt-2 py-4 px-6 bg-background-dark/95 backdrop-blur-lg rounded-2xl shadow-lg md:hidden"
            >
              <div className="flex flex-col space-y-2">
                {menuItems.map((item) => {
                  const sectionId = item.isSection ? item.href.replace('#', '') : '';
                  return item.isSection ? (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={(e) => {
                        handleNavigation(e, item.href, item.isSection);
                        setIsOpen(false);
                      }}
                      className={`px-4 py-2 rounded-full text-sm transition-colors ${
                        activeSection === sectionId
                          ? 'text-primary font-semibold'
                          : 'text-text-secondary hover:text-text-primary'
                      }`}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`px-4 py-2 rounded-full text-sm transition-colors ${
                        pathname.includes(item.href.split('/').pop() || '')
                          ? 'text-primary font-semibold'
                          : 'text-text-secondary hover:text-text-primary'
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
                <Link 
                  href={`/${lang === 'en' ? 'fr' : 'en'}${pathname.replace(`/${lang}`, '')}`}
                  onClick={() => setIsOpen(false)}
                  className="mt-2 px-4 py-2 bg-primary text-white rounded-full text-sm hover:bg-primary/90 transition-colors"
                >
                  {lang === 'en' ? 'FR' : 'EN'}
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
