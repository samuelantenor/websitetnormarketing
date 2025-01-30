'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';


interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  imageUrl: string;
  date: string;
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Impact of AI on Digital Marketing in 2024',
    excerpt: 'Explore how artificial intelligence is revolutionizing digital marketing strategies and what it means for businesses.',
    category: 'Digital Marketing',
    imageUrl: '/blog/ai-marketing.jpg',
    date: 'March 1, 2024'
  },
  {
    id: '2',
    title: 'Maximizing Your Google My Business Presence',
    excerpt: 'Learn the essential tips and tricks to optimize your Google My Business listing for better local SEO results.',
    category: 'SEO',
    imageUrl: '/blog/gmb-optimization.jpg',
    date: 'February 28, 2024'
  },
  {
    id: '3',
    title: 'Social Media Trends to Watch in 2024',
    excerpt: 'Stay ahead of the curve with these emerging social media trends that will shape digital marketing in 2024.',
    category: 'Social Media',
    imageUrl: '/blog/social-trends.jpg',
    date: 'February 25, 2024'
  },
  // Add more blog posts as needed
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export default function Blog() {
  return (
    <div className="min-h-screen py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-text-primary"
        >
          Latest Insights
        </motion.h1>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogPosts.map((post) => (
            <motion.article
              key={post.id}
              variants={itemVariants}
              className="bg-background-light rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48">
                <div className="absolute inset-0 bg-primary/20" />
                <div className="w-full h-full bg-gradient-to-b from-transparent to-background-dark/80" />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-primary">{post.category}</span>
                  <span className="text-sm text-text-secondary">{post.date}</span>
                </div>

                <h2 className="text-xl font-semibold mb-3 text-text-primary">
                  {post.title}
                </h2>

                <p className="text-text-secondary mb-4">
                  {post.excerpt}
                </p>

                <Link
                  href={`/blog/${post.id}`}
                  className="inline-block text-primary hover:text-accent transition-colors"
                >
                  Read More →
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </div>
  );
} 