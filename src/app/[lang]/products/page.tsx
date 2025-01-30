import { getDictionary } from '@/lib/dictionary';
import type { Locale } from '@/config/i18n.config';
import ProductsClient from './ProductsClient';

interface Props {
  params: {
    lang: Locale;
  };
}

export default async function ProductsPage({ params: { lang } }: Props) {
  const dict = await getDictionary(lang);

  return <ProductsClient dict={dict} />;
} 