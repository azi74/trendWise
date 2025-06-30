
import React from 'react';
import { User, Mail, LogOut, MessageCircle, Calendar, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

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
    views: 1250
  },
  {
    id: 2,
    title: "10 SEO Strategies That Actually Work in 2024",
    slug: "seo-strategies-2024",
    commentDate: "2024-01-14",
    comment: "These SEO tips are gold! Already implementing some of these strategies.",
    views: 2100
  },
  {
    id: 3,
    title: "Social Media Trends Reshaping Digital Marketing",
    slug: "social-media-trends-digital-marketing",
    commentDate: "2024-01-13",
    comment: "The TikTok marketing section was particularly interesting. Thanks for sharing!",
    views: 1800
  }
];

const Profile = () => {
  const handleLogout = () => {
    // Handle logout logic here
    console.log('Logging out...');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Profile Header */}
        <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-r from-violet-500 to-purple-600 p-4 rounded-full">
                <User className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white">{userData.name}</h1>
                <div className="flex items-center space-x-2 text-gray-400 mt-1">
                  <Mail className="h-4 w-4" />
                  <span>{userData.email}</span>
                </div>
              </div>
            </div>
            
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-xl transition-colors duration-200"
            >
              <LogOut className="h-4 w-4" />
              <span>Logout</span>
            </button>
          </div>

          {/* Profile Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
        <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Your Comments</h2>
          
          {commentedArticles.length === 0 ? (
            <div className="text-center py-8">
              <MessageCircle className="h-12 w-12 text-gray-500 mx-auto mb-4" />
              <p className="text-gray-400">No comments yet. Start engaging with articles!</p>
            </div>
          ) : (
            <div className="space-y-6">
              {commentedArticles.map(article => (
                <div key={article.id} className="bg-gray-800/50 rounded-xl p-6 hover:bg-gray-800/70 transition-colors">
                  <div className="flex items-start justify-between mb-4">
                    <Link 
                      to={`/article/${article.slug}`}
                      className="text-lg font-semibold text-white hover:text-violet-400 transition-colors line-clamp-2"
                    >
                      {article.title}
                    </Link>
                    <div className="flex items-center space-x-2 text-sm text-gray-500 ml-4">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(article.commentDate).toLocaleDateString()}</span>
                    </div>
                  </div>
                  
                  <div className="bg-gray-700/50 rounded-lg p-4 mb-4">
                    <p className="text-gray-300 italic">"{article.comment}"</p>
                  </div>
                  
                  <div className="flex items-center justify-between">
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
    </div>
  );
};

export default Profile;
