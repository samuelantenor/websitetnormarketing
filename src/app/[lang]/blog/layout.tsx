import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog - TNOR Marketing',
  description: 'Latest insights and updates from TNOR Marketing about digital marketing, SEO, and web development.',
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 