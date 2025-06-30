
import React, { useState } from 'react';
import { TrendingUp, Sparkles, BookOpen, Search } from 'lucide-react';
import ArticleCard from '../components/ArticleCard';
import SearchBar from '../components/SearchBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Mock articles data with 9 articles
const featuredArticles = [
  {
    id: 1,
    title: "The Future of AI in Content Creation: What 2024 Holds",
    slug: "future-ai-content-creation-2024",
    excerpt: "Discover how artificial intelligence is revolutionizing content creation and what trends to expect in the coming year.",
    thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
    author: "TrendWise AI",
    publishedAt: "2024-01-15",
    readTime: "5 min read",
    views: 1250,
    tags: ["AI", "Content", "Technology"]
  },
  {
    id: 2,
    title: "10 SEO Strategies That Actually Work in 2024",
    slug: "seo-strategies-2024",
    excerpt: "Boost your website's visibility with these proven SEO techniques that deliver real results in today's competitive landscape.",
    thumbnail: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&h=400&fit=crop",
    author: "TrendWise AI",
    publishedAt: "2024-01-14",
    readTime: "8 min read",
    views: 2100,
    tags: ["SEO", "Marketing", "Web"]
  },
  {
    id: 3,
    title: "Social Media Trends Reshaping Digital Marketing",
    slug: "social-media-trends-digital-marketing",
    excerpt: "From TikTok marketing to Instagram Reels, explore the social media trends that are changing how brands connect with audiences.",
    thumbnail: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=800&h=400&fit=crop",
    author: "TrendWise AI",
    publishedAt: "2024-01-13",
    readTime: "6 min read",
    views: 1800,
    tags: ["Social Media", "Marketing", "Trends"]
  },
  {
    id: 4,
    title: "Remote Work Culture: Building Teams That Thrive",
    slug: "remote-work-culture-building-teams",
    excerpt: "Learn how to create a strong remote work culture that keeps your team engaged, productive, and connected.",
    thumbnail: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=400&fit=crop",
    author: "TrendWise AI",
    publishedAt: "2024-01-12",
    readTime: "7 min read",
    views: 1650,
    tags: ["Remote Work", "Leadership", "Culture"]
  },
  {
    id: 5,
    title: "Cryptocurrency Market Analysis: Q1 2024 Outlook",
    slug: "crypto-market-analysis-q1-2024",
    excerpt: "Get insights into the cryptocurrency market trends and what to expect in the first quarter of 2024.",
    thumbnail: "https://images.unsplash.com/photo-1640340434855-6084b1f4901c?w=800&h=400&fit=crop",
    author: "TrendWise AI",
    publishedAt: "2024-01-11",
    readTime: "9 min read",
    views: 2400,
    tags: ["Crypto", "Finance", "Investment"]
  },
  {
    id: 6,
    title: "Sustainable Technology: Green Innovations for 2024",
    slug: "sustainable-technology-green-innovations",
    excerpt: "Explore the latest green technologies and sustainable innovations that are shaping our environmental future.",
    thumbnail: "https://images.unsplash.com/photo-1569163139394-de4e4f43e4e5?w=800&h=400&fit=crop",
    author: "TrendWise AI",
    publishedAt: "2024-01-10",
    readTime: "6 min read",
    views: 1320,
    tags: ["Sustainability", "Technology", "Environment"]
  },
  {
    id: 7,
    title: "E-commerce Evolution: Trends Driving Online Sales",
    slug: "ecommerce-evolution-trends-online-sales",
    excerpt: "Discover the e-commerce trends that are revolutionizing online shopping and driving unprecedented growth.",
    thumbnail: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop",
    author: "TrendWise AI",
    publishedAt: "2024-01-09",
    readTime: "5 min read",
    views: 1890,
    tags: ["E-commerce", "Business", "Retail"]
  },
  {
    id: 8,
    title: "Mental Health in the Digital Age: Finding Balance",
    slug: "mental-health-digital-age-balance",
    excerpt: "Navigate the challenges of digital overwhelm and discover strategies for maintaining mental wellness in our connected world.",
    thumbnail: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=400&fit=crop",
    author: "TrendWise AI",
    publishedAt: "2024-01-08",
    readTime: "7 min read",
    views: 1560,
    tags: ["Mental Health", "Wellness", "Lifestyle"]
  },
  {
    id: 9,
    title: "Web3 and Decentralization: The Internet's Next Chapter",
    slug: "web3-decentralization-internet-future",
    excerpt: "Understand Web3 technologies and how decentralization is set to transform the internet as we know it.",
    thumbnail: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=400&fit=crop",
    author: "TrendWise AI",
    publishedAt: "2024-01-07",
    readTime: "8 min read",
    views: 2200,
    tags: ["Web3", "Blockchain", "Technology"]
  }
];

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredArticles, setFilteredArticles] = useState(featuredArticles);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim() === '') {
      setFilteredArticles(featuredArticles);
    } else {
      const filtered = featuredArticles.filter(article =>
        article.title.toLowerCase().includes(query.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(query.toLowerCase()) ||
        article.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
      );
      setFilteredArticles(filtered);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <Navbar />
      
      {/* Header */}
      <header className="py-8 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-gradient-to-r from-violet-500 to-purple-600 p-3 rounded-2xl mr-4">
              <TrendingUp className="h-8 sm:h-10 w-8 sm:w-10 text-white" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              TrendWise
            </h1>
          </div>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto px-4">
            Stay ahead with AI-powered insights. Discover trending topics, SEO-optimized articles, 
            and cutting-edge insights generated by advanced AI.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
            <div className="flex items-center text-violet-400 bg-violet-500/10 px-4 py-2 rounded-full">
              <Sparkles className="h-5 w-5 mr-2" />
              <span className="text-sm font-medium">AI-Powered Content</span>
            </div>
            <div className="flex items-center text-purple-400 bg-purple-500/10 px-4 py-2 rounded-full">
              <BookOpen className="h-5 w-5 mr-2" />
              <span className="text-sm font-medium">SEO Optimized</span>
            </div>
          </div>

          <div className="max-w-md mx-auto">
            <SearchBar onSearch={handleSearch} />
          </div>
        </div>
      </header>

      {/* Featured Articles */}
      <section className="py-8 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 sm:mb-12 gap-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Latest Articles</h2>
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm sm:text-base">
                {filteredArticles.length} articles
              </span>
            </div>
          </div>

          {filteredArticles.length === 0 ? (
            <div className="text-center py-16">
              <div className="bg-gray-800/50 rounded-2xl p-8 max-w-md mx-auto">
                <Search className="h-12 w-12 text-gray-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">No articles found</h3>
                <p className="text-gray-400">Try adjusting your search terms</p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredArticles.map(article => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          )}
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
