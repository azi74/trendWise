import React, { useState } from 'react';
import { TrendingUp, Calendar, Eye, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import ArticleCard from '../components/ArticleCard';
import SearchBar from '../components/SearchBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Mock trending articles data
const trendingArticles = [
  {
    id: 5,
    title: "Breaking: New AI Model Surpasses GPT-4 in Benchmark Tests",
    slug: "new-ai-model-surpasses-gpt4",
    excerpt: "Revolutionary AI breakthrough shows 40% improvement in reasoning tasks and creative writing capabilities.",
    thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
    author: "TrendWise AI",
    publishedAt: "2024-01-16",
    readTime: "4 min read",
    views: 8500,
    tags: ["AI", "Technology", "Breaking"]
  },
  {
    id: 6,
    title: "Cryptocurrency Market Hits New All-Time High",
    slug: "crypto-market-new-high",
    excerpt: "Bitcoin and Ethereum lead the charge as institutional investors flood the market with unprecedented volume.",
    thumbnail: "https://images.unsplash.com/photo-1640340434855-6084b1f4901c?w=800&h=400&fit=crop",
    author: "TrendWise AI",
    publishedAt: "2024-01-16",
    readTime: "6 min read",
    views: 12400,
    tags: ["Crypto", "Finance", "Markets"]
  },
  {
    id: 7,
    title: "Major Tech Companies Announce Massive Layoffs",
    slug: "tech-companies-layoffs-2024",
    excerpt: "Industry giants cut workforce as economic uncertainty continues to impact the technology sector.",
    thumbnail: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=400&fit=crop",
    author: "TrendWise AI",
    publishedAt: "2024-01-15",
    readTime: "5 min read",
    views: 7200,
    tags: ["Technology", "Business", "Economy"]
  },
  {
    id: 8,
    title: "Climate Change Summit Reaches Historic Agreement",
    slug: "climate-summit-historic-agreement",
    excerpt: "World leaders commit to ambitious carbon reduction targets in landmark environmental deal.",
    thumbnail: "https://images.unsplash.com/photo-1569163139394-de4e4f43e4e5?w=800&h=400&fit=crop",
    author: "TrendWise AI",
    publishedAt: "2024-01-15",
    readTime: "7 min read",
    views: 9800,
    tags: ["Climate", "Environment", "Politics"]
  },
  {
    id: 9,
    title: "SpaceX Successfully Launches Mars Mission",
    slug: "spacex-mars-mission-launch",
    excerpt: "Historic launch marks humanity's next step toward establishing a permanent presence on Mars.",
    thumbnail: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800&h=400&fit=crop",
    author: "TrendWise AI",
    publishedAt: "2024-01-14",
    readTime: "8 min read",
    views: 15600,
    tags: ["Space", "Technology", "Science"]
  }
];

const Trending = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredArticles, setFilteredArticles] = useState(trendingArticles);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim() === '') {
      setFilteredArticles(trendingArticles);
    } else {
      const filtered = trendingArticles.filter(article =>
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
            <TrendingUp className="h-8 sm:h-12 w-8 sm:w-12 text-violet-400 mr-3" />
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              Trending Now
            </h1>
          </div>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto px-4">
            Stay updated with the hottest topics and breaking news from around the world
          </p>
          
          <div className="max-w-md mx-auto">
            <SearchBar onSearch={handleSearch} />
          </div>
        </div>
      </header>

      {/* Trending Articles */}
      <section className="py-8 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 sm:mb-12 gap-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Hot Topics</h2>
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm sm:text-base">
                {filteredArticles.length} trending articles
              </span>
            </div>
          </div>

          {filteredArticles.length === 0 ? (
            <div className="text-center py-16">
              <div className="bg-gray-800/50 rounded-2xl p-8 max-w-md mx-auto">
                <Search className="h-12 w-12 text-gray-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">No trending articles found</h3>
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

export default Trending;
