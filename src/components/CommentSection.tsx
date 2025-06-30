
import React, { useState } from 'react';
import { MessageCircle, Heart, Reply } from 'lucide-react';

interface Comment {
  id: number;
  author: string;
  avatar: string;
  content: string;
  timestamp: string;
  likes: number;
  isLiked: boolean;
}

interface CommentSectionProps {
  articleId: number;
}

const mockComments: Comment[] = [
  {
    id: 1,
    author: 'Sarah Chen',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b5c5?w=40&h=40&fit=crop&crop=face',
    content: 'This is such an insightful article! The section about multimodal AI really opened my eyes to the possibilities ahead.',
    timestamp: '2 hours ago',
    likes: 12,
    isLiked: false,
  },
  {
    id: 2,
    author: 'Marcus Rodriguez',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
    content: 'Great breakdown of the current AI landscape. I\'m curious about the ethical implications of AI-generated content at scale.',
    timestamp: '4 hours ago',
    likes: 8,
    isLiked: true,
  },
];

const CommentSection: React.FC<CommentSectionProps> = ({ articleId }) => {
  const [comments, setComments] = useState(mockComments);
  const [newComment, setNewComment] = useState('');

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      const comment: Comment = {
        id: comments.length + 1,
        author: 'You',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
        content: newComment,
        timestamp: 'Just now',
        likes: 0,
        isLiked: false,
      };
      setComments([comment, ...comments]);
      setNewComment('');
    }
  };

  const toggleLike = (commentId: number) => {
    setComments(comments.map(comment => 
      comment.id === commentId 
        ? { 
            ...comment, 
            isLiked: !comment.isLiked,
            likes: comment.isLiked ? comment.likes - 1 : comment.likes + 1
          }
        : comment
    ));
  };

  return (
    <section className="border-t border-gray-800 pt-12">
      <div className="flex items-center space-x-2 mb-8">
        <MessageCircle className="h-6 w-6 text-violet-400" />
        <h3 className="text-2xl font-bold text-white">
          Comments ({comments.length})
        </h3>
      </div>

      {/* Comment Form */}
      <form onSubmit={handleSubmitComment} className="mb-12">
        <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Share your thoughts..."
            rows={4}
            className="w-full bg-transparent text-white placeholder-gray-400 resize-none focus:outline-none"
          />
          <div className="flex justify-end mt-4">
            <button
              type="submit"
              disabled={!newComment.trim()}
              className="bg-gradient-to-r from-violet-600 to-purple-600 text-white px-6 py-2 rounded-xl hover:from-violet-700 hover:to-purple-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Post Comment
            </button>
          </div>
        </div>
      </form>

      {/* Comments List */}
      <div className="space-y-6">
        {comments.map((comment) => (
          <div key={comment.id} className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-6">
            <div className="flex items-start space-x-4">
              <img
                src={comment.avatar}
                alt={comment.author}
                className="w-10 h-10 rounded-full"
              />
              
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <h4 className="font-semibold text-white">{comment.author}</h4>
                  <span className="text-sm text-gray-400">{comment.timestamp}</span>
                </div>
                
                <p className="text-gray-300 mb-4">{comment.content}</p>
                
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => toggleLike(comment.id)}
                    className={`flex items-center space-x-2 text-sm transition-colors ${
                      comment.isLiked 
                        ? 'text-red-400 hover:text-red-300' 
                        : 'text-gray-400 hover:text-red-400'
                    }`}
                  >
                    <Heart className={`h-4 w-4 ${comment.isLiked ? 'fill-current' : ''}`} />
                    <span>{comment.likes}</span>
                  </button>
                  
                  <button className="flex items-center space-x-2 text-sm text-gray-400 hover:text-violet-400 transition-colors">
                    <Reply className="h-4 w-4" />
                    <span>Reply</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CommentSection;
