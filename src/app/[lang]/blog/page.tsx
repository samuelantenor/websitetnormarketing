'use client';

import { getDictionary } from '@/lib/dictionary';
import { blogPosts } from '@/data/blog-posts';
import Image from 'next/image';
import Link from 'next/link';
import { FiClock, FiTag } from 'react-icons/fi';
import BlogTags from '@/components/BlogTags';
import { useState, useEffect } from 'react';
import type { Locale } from '@/config/i18n.config';
import type { Dictionary } from '@/types/dictionary';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
  content: string;
}

interface PageProps {
  params: {
    lang: Locale;
  };
}

export default function BlogPage(props: PageProps) {
  const { params } = props;
  const [lang, setLang] = useState<Locale>(params.lang);
  const [dict, setDict] = useState<Dictionary | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    const initializePage = async () => {
      setLang(params.lang);

      const dictionary = await getDictionary(params.lang) as Dictionary;
      setDict(dictionary);

      const allPosts = Object.values(blogPosts).map(post => post[params.lang]);
      setPosts(allPosts);

      const uniqueCategories = Array.from(new Set(allPosts.map(post => post.category))).sort();
      setCategories(uniqueCategories);
    };

    initializePage();
  }, [params.lang]);

  if (!dict) return null;

  const filteredPosts = selectedCategory
    ? posts.filter(post => post.category === selectedCategory)
    : posts;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative py-20 bg-background-dark">
        <div className="absolute inset-0 bg-gradient-to-b from-background-dark/50 to-background-dark" />
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            {dict.blog.title}
          </h1>
          <p className="text-xl text-text-secondary max-w-2xl mb-8">
            {dict.blog.description}
          </p>
          <BlogTags
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="bg-background-light rounded-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300 hover:shadow-xl"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-text-secondary mb-4">
                  <div className="flex items-center gap-2">
                    <FiTag className="text-primary" />
                    <span>{post.category}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiClock className="text-primary" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <h2 className="text-xl font-bold mb-3 line-clamp-2 hover:text-primary transition-colors">
                  <Link href={`/${lang}/blog/${post.id}`}>
                    {post.title}
                  </Link>
                </h2>
                <p className="text-text-secondary mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-text-secondary">{post.date}</span>
                  <Link
                    href={`/${lang}/blog/${post.id}`}
                    className="text-primary hover:text-accent transition-colors font-medium"
                  >
                    {lang === 'en' ? 'Read More' : 'Lire Plus'} →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
