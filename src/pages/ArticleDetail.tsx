
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Eye, Share2, Bookmark, TrendingUp } from 'lucide-react';
import CommentSection from '../components/CommentSection';

// Mock article data - in real app would fetch from API
const mockArticle = {
  id: 1,
  title: "The Future of AI in Content Creation: What 2024 Holds",
  slug: "future-ai-content-creation-2024",
  content: `
    <h2>The Revolution is Here</h2>
    <p>Artificial Intelligence has fundamentally transformed how we approach content creation, and 2024 promises to be the year where these changes become mainstream. From automated blog posts to AI-generated videos, the landscape is evolving at breakneck speed.</p>
    
    <h3>Key Trends to Watch</h3>
    <p>The integration of large language models into everyday content workflows has already begun, but we're seeing several emerging trends that will shape the industry:</p>
    
    <ul>
      <li><strong>Multimodal AI</strong>: Content that seamlessly blends text, images, and video</li>
      <li><strong>Personalization at Scale</strong>: AI-driven content tailored to individual preferences</li>
      <li><strong>Real-time Optimization</strong>: Content that adapts based on performance metrics</li>
    </ul>

    <h3>The Technology Behind the Magic</h3>
    <p>Modern AI content generation relies on transformer architectures and massive datasets. These systems can understand context, maintain consistency, and even adapt writing styles to match specific brand voices.</p>

    <blockquote>
      "AI isn't replacing creativity—it's amplifying it. The best content creators of 2024 will be those who learn to collaborate with AI tools effectively." - Industry Expert
    </blockquote>

    <h3>Challenges and Opportunities</h3>
    <p>While AI offers incredible opportunities for scaling content production, it also presents unique challenges around authenticity, fact-checking, and maintaining human connection with audiences.</p>

    <h2>Looking Ahead</h2>
    <p>The future of content creation is not about humans versus machines—it's about humans working alongside AI to create more engaging, relevant, and impactful content than ever before.</p>
  `,
  thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop",
  author: "TrendWise AI",
  publishedAt: "2024-01-15",
  readTime: "5 min read",
  views: 1250,
  tags: ["AI", "Content", "Technology"],
  metaDescription: "Discover how artificial intelligence is revolutionizing content creation and what trends to watch for in 2024.",
};

const ArticleDetail = () => {
  const { slug } = useParams();
  const [isBookmarked, setIsBookmarked] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Header */}
      <header className="bg-black/50 backdrop-blur-md border-b border-violet-500/20 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-violet-500 to-purple-600 p-2 rounded-xl">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">TrendWise</span>
            </Link>
            
            <Link 
              to="/" 
              className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Articles</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Article Header */}
        <header className="mb-12">
          <div className="mb-6">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              {mockArticle.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-violet-600/20 text-violet-400 px-3 py-1 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              {mockArticle.title}
            </h1>
            
            <p className="text-xl text-gray-300 mb-8">
              {mockArticle.metaDescription}
            </p>
          </div>

          {/* Article Meta */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span>{new Date(mockArticle.publishedAt).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>{mockArticle.readTime}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Eye className="h-4 w-4" />
                <span>{mockArticle.views.toLocaleString()} views</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsBookmarked(!isBookmarked)}
                className={`p-2 rounded-xl border transition-all duration-200 ${
                  isBookmarked
                    ? 'bg-violet-600 border-violet-600 text-white'
                    : 'border-gray-700 text-gray-400 hover:border-violet-500 hover:text-violet-400'
                }`}
              >
                <Bookmark className="h-5 w-5" />
              </button>
              
              <button className="p-2 rounded-xl border border-gray-700 text-gray-400 hover:border-violet-500 hover:text-violet-400 transition-all duration-200">
                <Share2 className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Featured Image */}
          <div className="rounded-2xl overflow-hidden mb-12">
            <img
              src={mockArticle.thumbnail}
              alt={mockArticle.title}
              className="w-full h-96 object-cover"
            />
          </div>
        </header>

        {/* Article Body */}
        <div 
          className="prose prose-lg prose-invert max-w-none mb-16"
          dangerouslySetInnerHTML={{ __html: mockArticle.content }}
        />

        {/* Comments Section */}
        <CommentSection articleId={mockArticle.id} />
      </article>
    </div>
  );
};

export default ArticleDetail;
