
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Eye, Clock } from 'lucide-react';

interface Article {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  thumbnail: string;
  author: string;
  publishedAt: string;
  readTime: string;
  views: number;
  tags: string[];
}

interface ArticleCardProps {
  article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <Link to={`/article/${article.slug}`} className="group">
      <article className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden hover:border-violet-500/50 transition-all duration-300 hover:transform hover:scale-105">
        {/* Article Image */}
        <div className="relative overflow-hidden">
          <img
            src={article.thumbnail}
            alt={article.title}
            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          
          {/* Tags */}
          <div className="absolute top-4 left-4">
            <span className="bg-violet-600/90 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">
              {article.tags[0]}
            </span>
          </div>
        </div>

        {/* Article Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-violet-400 transition-colors line-clamp-2">
            {article.title}
          </h3>
          
          <p className="text-gray-400 mb-4 line-clamp-3">
            {article.excerpt}
          </p>

          {/* Article Meta */}
          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Calendar className="h-4 w-4" />
                <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>{article.readTime}</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-1">
              <Eye className="h-4 w-4" />
              <span>{article.views.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default ArticleCard;
