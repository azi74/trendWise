
import React, { useState } from 'react';
import { Search, User, Settings, TrendingUp, Calendar, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import ArticleCard from '../components/ArticleCard';
import AuthModal from '../components/AuthModal';
import SearchBar from '../components/SearchBar';
import Footer from '../components/Footer';

// Expanded mock data for articles (9 total)
const mockArticles = [
  {
    id: 1,
    title: "The Future of AI in Content Creation: What 2024 Holds",
    slug: "future-ai-content-creation-2024",
    excerpt: "Discover how artificial intelligence is revolutionizing content creation and what trends to watch for in the coming year.",
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
    excerpt: "Cut through the noise with these proven SEO techniques that are driving real results for businesses worldwide.",
    thumbnail: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&h=400&fit=crop",
    author: "TrendWise AI",
    publishedAt: "2024-01-14",
    readTime: "8 min read",
    views: 2100,
    tags: ["SEO", "Marketing", "Growth"]
  },
  {
    id: 3,
    title: "Social Media Trends Reshaping Digital Marketing",
    slug: "social-media-trends-digital-marketing",
    excerpt: "From TikTok to Twitter, explore how social platforms are changing the marketing landscape forever.",
    thumbnail: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=800&h=400&fit=crop",
    author: "TrendWise AI",
    publishedAt: "2024-01-13",
    readTime: "6 min read",
    views: 1800,
    tags: ["Social Media", "Marketing", "Trends"]
  },
  {
    id: 4,
    title: "The Rise of Voice Search: Optimizing for the Future",
    slug: "voice-search-optimization-future",
    excerpt: "Voice search is changing how people find information. Learn how to optimize your content for this growing trend.",
    thumbnail: "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=800&h=400&fit=crop",
    author: "TrendWise AI",
    publishedAt: "2024-01-12",
    readTime: "7 min read",
    views: 1650,
    tags: ["Voice Search", "SEO", "Technology"]
  },
  {
    id: 5,
    title: "Blockchain Technology Beyond Cryptocurrency",
    slug: "blockchain-beyond-cryptocurrency",
    excerpt: "Discover how blockchain is revolutionizing industries beyond finance with real-world applications.",
    thumbnail: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=400&fit=crop",
    author: "TrendWise AI",
    publishedAt: "2024-01-11",
    readTime: "9 min read",
    views: 2350,
    tags: ["Blockchain", "Technology", "Innovation"]
  },
  {
    id: 6,
    title: "Remote Work Culture: Building Teams That Thrive",
    slug: "remote-work-culture-building-teams",
    excerpt: "Essential strategies for creating a productive and engaging remote work environment in 2024.",
    thumbnail: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=400&fit=crop",
    author: "TrendWise AI",
    publishedAt: "2024-01-10",
    readTime: "6 min read",
    views: 1920,
    tags: ["Remote Work", "Team Building", "Productivity"]
  },
  {
    id: 7,
    title: "Sustainable Tech: Green Solutions for Digital World",
    slug: "sustainable-tech-green-solutions",
    excerpt: "How technology companies are reducing their carbon footprint and building sustainable digital solutions.",
    thumbnail: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=400&fit=crop",
    author: "TrendWise AI",
    publishedAt: "2024-01-09",
    readTime: "7 min read",
    views: 1750,
    tags: ["Sustainability", "Technology", "Environment"]
  },
  {
    id: 8,
    title: "Cybersecurity Threats and Protection Strategies",
    slug: "cybersecurity-threats-protection-strategies",
    excerpt: "Stay ahead of cyber threats with comprehensive security strategies for individuals and businesses.",
    thumbnail: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=400&fit=crop",
    author: "TrendWise AI",
    publishedAt: "2024-01-08",
    readTime: "8 min read",
    views: 2890,
    tags: ["Cybersecurity", "Privacy", "Technology"]
  },
  {
    id: 9,
    title: "The Metaverse: Virtual Reality's Next Evolution",
    slug: "metaverse-virtual-reality-evolution",
    excerpt: "Exploring the potential of virtual worlds and how they're reshaping social interaction and commerce.",
    thumbnail: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=800&h=400&fit=crop",
    author: "TrendWise AI",
    publishedAt: "2024-01-07",
    readTime: "10 min read",
    views: 3240,
    tags: ["Metaverse", "VR", "Future Tech"]
  }
];

const Index = () => {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredArticles, setFilteredArticles] = useState(mockArticles);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim() === '') {
      setFilteredArticles(mockArticles);
    } else {
      const filtered = mockArticles.filter(article =>
        article.title.toLowerCase().includes(query.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(query.toLowerCase()) ||
        article.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
      );
      setFilteredArticles(filtered);
    }
  };

  const handleAuthToggle = () => {
    setIsLoggedIn(!isLoggedIn);
    setShowAuthModal(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Header */}
      <header className="bg-black/50 backdrop-blur-md border-b border-violet-500/20 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-violet-500 to-purple-600 p-2 rounded-xl">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">TrendWise</span>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-white hover:text-violet-400 transition-colors">
                Home
              </Link>
              <Link to="/trending" className="text-gray-300 hover:text-violet-400 transition-colors">
                Trending
              </Link>
            </nav>

            {/* Auth Button */}
            {isLoggedIn ? (
              <Link
                to="/profile"
                className="flex items-center space-x-2 bg-gradient-to-r from-violet-600 to-purple-600 text-white px-4 py-2 rounded-xl hover:from-violet-700 hover:to-purple-700 transition-all duration-200"
              >
                <User className="h-4 w-4" />
                <span>Profile</span>
              </Link>
            ) : (
              <button
                onClick={() => setShowAuthModal(true)}
                className="flex items-center space-x-2 bg-gradient-to-r from-violet-600 to-purple-600 text-white px-4 py-2 rounded-xl hover:from-violet-700 hover:to-purple-700 transition-all duration-200"
              >
                <User className="h-4 w-4" />
                <span>Sign In</span>
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Stay Ahead with{' '}
            <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
              AI-Powered
            </span>{' '}
            Insights
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Discover trending topics, SEO-optimized articles, and cutting-edge insights 
            generated by advanced AI to keep you informed and ahead of the curve.
          </p>
          
          {/* Search Bar */}
          <SearchBar onSearch={handleSearch} />
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-white">Latest Articles</h2>
            <div className="flex items-center space-x-4">
              <span className="text-gray-400">
                {filteredArticles.length} articles found
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map(article => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Auth Modal */}
      {showAuthModal && (
        <AuthModal onClose={() => setShowAuthModal(false)} onAuthSuccess={handleAuthToggle} />
      )}
    </div>
  );
};

export default Index;
