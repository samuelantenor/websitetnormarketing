export interface Dictionary {
  navigation: {
    home: string;
    services: string;
    about: string;
    blog: string;
    contact: string;
    products: string;
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
  faq: {
    title: string;
    description: string;
  };
  blog: {
    title: string;
    description: string;
  };
  blogCTA: {
    title: string;
    description: string;
    button: string;
  };
  // Add other dictionary sections as needed
} 