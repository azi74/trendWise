
import React, { useState } from 'react';
import { Mail, LogOut, MessageCircle, Calendar, Eye, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Mock user data and commented articles
const userData = {
  name: "John Doe",
  email: "john.doe@example.com",
  joinedDate: "2024-01-10",
  totalComments: 15
};

const commentedArticles = [
  {
    id: 1,
    title: "The Future of AI in Content Creation: What 2024 Holds",
    slug: "future-ai-content-creation-2024",
    commentDate: "2024-01-15",
    comment: "Great insights about AI's impact on content creation. Really helpful for understanding the trends.",
    views: 1250,
    genre: "Technology"
  },
  {
    id: 2,
    title: "10 SEO Strategies That Actually Work in 2024",
    slug: "seo-strategies-2024",
    commentDate: "2024-01-14",
    comment: "These SEO tips are gold! Already implementing some of these strategies.",
    views: 2100,
    genre: "Marketing"
  },
  {
    id: 3,
    title: "Social Media Trends Reshaping Digital Marketing",
    slug: "social-media-trends-digital-marketing",
    commentDate: "2024-01-13",
    comment: "The TikTok marketing section was particularly interesting. Thanks for sharing!",
    views: 1800,
    genre: "Marketing"
  },
  {
    id: 4,
    title: "Breaking: New AI Model Surpasses GPT-4 in Benchmark Tests",
    slug: "new-ai-model-surpasses-gpt4",
    commentDate: "2024-01-12",
    comment: "Incredible breakthrough! This will change everything in the AI landscape.",
    views: 8500,
    genre: "Technology"
  },
  {
    id: 5,
    title: "Climate Change Summit Reaches Historic Agreement",
    slug: "climate-summit-historic-agreement",
    commentDate: "2024-01-11",
    comment: "Finally some positive news on climate action. Hope this leads to real change.",
    views: 9800,
    genre: "Environment"
  }
];

const Profile = () => {
  const [selectedGenre, setSelectedGenre] = useState('All');
  
  const handleLogout = () => {
    console.log('Logging out...');
  };

  const genres = ['All', ...Array.from(new Set(commentedArticles.map(article => article.genre)))];
  
  const filteredArticles = selectedGenre === 'All' 
    ? commentedArticles 
    : commentedArticles.filter(article => article.genre === selectedGenre);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
        {/* Profile Header */}
        <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-4 sm:p-8 mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-white">{userData.name}</h1>
              <div className="flex items-center space-x-2 text-gray-400 mt-1">
                <Mail className="h-4 w-4" />
                <span className="text-sm sm:text-base">{userData.email}</span>
              </div>
            </div>
            
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-xl transition-colors duration-200 w-full sm:w-auto justify-center"
            >
              <LogOut className="h-4 w-4" />
              <span>Logout</span>
            </button>
          </div>

          {/* Profile Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-gray-800/50 rounded-xl p-4">
              <div className="flex items-center space-x-3">
                <Calendar className="h-6 w-6 text-violet-400" />
                <div>
                  <p className="text-sm text-gray-400">Member Since</p>
                  <p className="text-white font-semibold">{new Date(userData.joinedDate).toLocaleDateString()}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800/50 rounded-xl p-4">
              <div className="flex items-center space-x-3">
                <MessageCircle className="h-6 w-6 text-violet-400" />
                <div>
                  <p className="text-sm text-gray-400">Total Comments</p>
                  <p className="text-white font-semibold">{userData.totalComments}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800/50 rounded-xl p-4">
              <div className="flex items-center space-x-3">
                <Eye className="h-6 w-6 text-violet-400" />
                <div>
                  <p className="text-sm text-gray-400">Articles Read</p>
                  <p className="text-white font-semibold">{commentedArticles.length}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Commented Articles */}
        <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-4 sm:p-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white">Your Comments</h2>
            
            {/* Genre Filter */}
            <div className="flex items-center space-x-2 w-full sm:w-auto">
              <Filter className="h-4 w-4 text-gray-400" />
              <select
                value={selectedGenre}
                onChange={(e) => setSelectedGenre(e.target.value)}
                className="bg-gray-800 border border-gray-700 text-white px-3 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 w-full sm:w-auto"
              >
                {genres.map(genre => (
                  <option key={genre} value={genre}>{genre}</option>
                ))}
              </select>
            </div>
          </div>
          
          {filteredArticles.length === 0 ? (
            <div className="text-center py-8">
              <MessageCircle className="h-12 w-12 text-gray-500 mx-auto mb-4" />
              <p className="text-gray-400">No comments found for the selected genre.</p>
            </div>
          ) : (
            <div className="space-y-6">
              {filteredArticles.map(article => (
                <div key={article.id} className="bg-gray-800/50 rounded-xl p-4 sm:p-6 hover:bg-gray-800/70 transition-colors">
                  <div className="flex items-start justify-between mb-4 gap-4">
                    <Link 
                      to={`/article/${article.slug}`}
                      className="text-base sm:text-lg font-semibold text-white hover:text-violet-400 transition-colors line-clamp-2 flex-1"
                    >
                      {article.title}
                    </Link>
                    <div className="flex items-center space-x-2 text-sm text-gray-500 shrink-0">
                      <Calendar className="h-4 w-4" />
                      <span className="hidden sm:inline">{new Date(article.commentDate).toLocaleDateString()}</span>
                      <span className="sm:hidden">{new Date(article.commentDate).toLocaleDateString('en', { month: 'short', day: 'numeric' })}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-violet-600/20 text-violet-300 px-2 py-1 rounded-full text-xs font-medium">
                      {article.genre}
                    </span>
                  </div>
                  
                  <div className="bg-gray-700/50 rounded-lg p-4 mb-4">
                    <p className="text-gray-300 italic text-sm sm:text-base">"{article.comment}"</p>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                    <Link 
                      to={`/article/${article.slug}`}
                      className="text-violet-400 hover:text-violet-300 text-sm font-medium transition-colors"
                    >
                      Read Article →
                    </Link>
                    <div className="flex items-center space-x-1 text-sm text-gray-500">
                      <Eye className="h-4 w-4" />
                      <span>{article.views.toLocaleString()} views</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Profile;
