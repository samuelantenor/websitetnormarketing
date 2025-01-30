import type { Locale } from '@/config/i18n.config'

interface Dictionary {
  navigation: {
    home: string;
    services: string;
    about: string;
    blog: string;
    contact: string;
    products: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
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
  testimonials: {
    title: string;
    items: {
      name: string;
      company: string;
      text: string;
    }[];
  };
  contact: {
    title: string;
    name: string;
    email: string;
    message: string;
    submit: string;
    success: string;
    error: string;
  };
  blog: {
    title: string;
    description: string;
    comingSoon: string;
  };
  blogCTA: {
    title: string;
    description: string;
    button: string;
  };
  faq: {
    title: string;
    description: string;
    allCategories: string;
  };
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
}

const dictionaries = {
  en: () => import('./dictionaries/en.json').then((module) => module.default),
  fr: () => import('./dictionaries/fr.json').then((module) => module.default),
}

export const getDictionary = async (locale: Locale): Promise<Dictionary> => {
  if (!(locale in dictionaries)) {
    locale = 'en';
  }
  return dictionaries[locale as keyof typeof dictionaries]();
} 