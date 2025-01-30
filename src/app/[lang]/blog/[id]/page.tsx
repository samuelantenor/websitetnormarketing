import { blogPosts } from '@/data/blog-posts';
import Image from 'next/image';
import { FiClock, FiTag, FiCalendar } from 'react-icons/fi';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import { Metadata } from 'next';

interface Props {
  params: Promise<{
    id: string;
    lang: 'en' | 'fr';
  }>;
}

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((id) => ({
    id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const post = blogPosts[resolvedParams.id]?.[resolvedParams.lang];
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPost({ params }: Props) {
  const resolvedParams = await params;
  const { lang, id } = resolvedParams;
  const post = blogPosts[id]?.[lang];

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative py-20 bg-background-dark">
        <div className="absolute inset-0 bg-gradient-to-b from-background-dark/50 to-background-dark" />
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-text-secondary">
            <div className="flex items-center gap-2">
              <FiCalendar className="text-primary" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <FiTag className="text-primary" />
              <span>{post.category}</span>
            </div>
            <div className="flex items-center gap-2">
              <FiClock className="text-primary" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="relative h-96 w-full mb-12 rounded-2xl overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-xl text-text-secondary mb-8 leading-relaxed">
              {post.excerpt}
            </p>
            <div className="bg-background-light rounded-2xl p-8">
              <ReactMarkdown
                className="text-text-secondary [&>p]:whitespace-pre-wrap [&>p]:mb-8 [&>p]:leading-relaxed
                [&>h3]:text-2xl [&>h3]:font-bold [&>h3]:mb-6 [&>h3]:text-white
                [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-8 [&>ul>li]:mb-3 [&>ul>li]:leading-relaxed
                [&_strong]:text-white [&_strong]:font-semibold
                [&>p:first-of-type]:text-xl [&>p:first-of-type]:font-medium [&>p:first-of-type]:text-white"
              >
                {post.content.trim()}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
