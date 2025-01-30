import { getDictionary } from '@/lib/dictionary';
import type { Locale } from '@/config/i18n.config';
import { faqData } from '@/data/faq-data';
import FAQClient from './FAQClient';
import type { Dictionary } from '@/types/dictionary';

interface PageProps {
  params: {
    lang: Locale;
  };
}

export default async function FAQPage(props: PageProps) {
  const { params } = props;
  const dict = await getDictionary(params.lang) as Dictionary;

  // Get all FAQs for the current language
  const allFAQs = Object.values(faqData).flatMap(categoryData => categoryData[params.lang]);

  return (
    <FAQClient 
      dict={dict} 
      initialFAQs={allFAQs} 
    />
  );
}
