'use client';

import { FiTag } from 'react-icons/fi';

interface BlogTagsProps {
  categories: string[];
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
  className?: string;
}

export default function BlogTags({
  categories,
  selectedCategory,
  onSelectCategory,
  className = ''
}: BlogTagsProps) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      <button
        onClick={() => onSelectCategory(null)}
        className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
          ${!selectedCategory 
            ? 'bg-primary text-white shadow-lg shadow-primary/25'
            : 'bg-background-light text-text-secondary hover:bg-primary/10'
          }`}
      >
        <FiTag className="text-lg" />
        All
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
            ${selectedCategory === category
              ? 'bg-primary text-white shadow-lg shadow-primary/25'
              : 'bg-background-light text-text-secondary hover:bg-primary/10'
            }`}
        >
          <FiTag className="text-lg" />
          {category}
        </button>
      ))}
    </div>
  );
} 