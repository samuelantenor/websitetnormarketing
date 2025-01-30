import '@/app/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import type { Locale } from '@/config/i18n.config';
import { i18n } from '@/config/i18n.config';
import { getDictionary } from '@/lib/dictionary';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import ClientWrapper from '@/app/components/ClientWrapper';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TNOR Marketing - Digital Marketing Agency',
  description: 'Google certified Digital Marketing agency based in Montreal',
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

interface RootLayoutProps {
  children: React.ReactNode;
  params: { lang: Locale };
}

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  const dict = await getDictionary(params.lang);

  return (
    <html lang={params.lang} className="dark scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} bg-background-dark`} suppressHydrationWarning>
        <ClientWrapper>
          <div className="flex flex-col min-h-screen">
            <Navbar dict={dict} lang={params.lang} />
            <main className="flex-grow text-text-primary">
              {children}
            </main>
            <Footer dict={dict} lang={params.lang} />
          </div>
        </ClientWrapper>
      </body>
    </html>
  );
}