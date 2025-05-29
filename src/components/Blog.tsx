import React, { useState } from 'react';
import { Calendar, Clock, ArrowRight, Search } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  category: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Mastering Jetpack Compose: Building Modern UIs in Android",
    excerpt: "Learn how to leverage Jetpack Compose to create beautiful, dynamic user interfaces for your Android applications with less code and more flexibility.",
    image: "https://images.pexels.com/photos/4382894/pexels-photo-4382894.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "May 15, 2023",
    readTime: "8 min read",
    category: "Development"
  },
  {
    id: 2,
    title: "The Power of Kotlin Coroutines in Android Development",
    excerpt: "Discover how Kotlin Coroutines can simplify asynchronous programming and improve your app's performance and responsiveness.",
    image: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "Apr 28, 2023",
    readTime: "6 min read",
    category: "Programming"
  },
  {
    id: 3,
    title: "Optimizing Android App Performance: Best Practices",
    excerpt: "Learn essential strategies for improving your Android app's performance, from memory management to efficient layouts and background processing.",
    image: "https://images.pexels.com/photos/325111/pexels-photo-325111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "Mar 12, 2023",
    readTime: "10 min read",
    category: "Optimization"
  },
];

const Blog: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredPosts = blogPosts.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.category.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <section id="blog" className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Latest Insights
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Thoughts, insights, and tutorials on Android development, mobile UX design, and tech trends.
            </p>
          </div>
          
          {/* Search */}
          <div className="mb-12 max-w-md mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full p-4 pl-12 pr-10 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-full border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            </div>
          </div>
          
          {/* Blog Posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 text-xs font-semibold bg-purple-600/90 text-white rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                      <span className="flex items-center">
                        <Calendar size={14} className="mr-1" />
                        {post.date}
                      </span>
                      <span className="mx-2">•</span>
                      <span className="flex items-center">
                        <Clock size={14} className="mr-1" />
                        {post.readTime}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <a 
                      href="#" 
                      className="inline-flex items-center text-purple-600 dark:text-purple-400 font-medium hover:text-purple-700 dark:hover:text-purple-300"
                    >
                      Read More
                      <ArrowRight size={16} className="ml-1 transform group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </article>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-600 dark:text-gray-400 text-lg">No articles found matching "{searchTerm}"</p>
                <button 
                  onClick={() => setSearchTerm('')}
                  className="mt-4 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
                >
                  Clear Search
                </button>
              </div>
            )}
          </div>
          
          {/* View All Button */}
          {filteredPosts.length > 0 && (
            <div className="text-center mt-12">
              <a 
                href="#" 
                className="inline-flex items-center px-6 py-3 border-2 border-purple-600 dark:border-purple-400 text-purple-600 dark:text-purple-400 hover:bg-purple-600 hover:text-white dark:hover:bg-purple-400 dark:hover:text-gray-900 rounded-full font-medium transition-colors"
              >
                View All Articles
                <ArrowRight size={18} className="ml-2" />
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Blog;