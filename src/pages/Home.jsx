import { Link } from '@tanstack/react-router';
import { posts } from '../data/posts';
import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-5xl font-bold mb-6 text-center">DevFeed</h1>

        <div className="space-y-6">
        {posts.map((post) => (
  <div key={post.id} className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all p-4 border border-gray-100">
    <div className="relative overflow-hidden rounded-xl mb-4">
      <img src={post.urlToImage} className="w-full h-48 object-cover group-hover:scale-105 transition-transform" />
      <span className="absolute top-3 left-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-blue-600">
        {post.category}
      </span>
    </div>
    <h2 className="text-xl font-bold text-gray-900 mb-2">{post.title}</h2>
    <p className="text-gray-500 text-sm mb-4 line-clamp-2">{post.description}</p>
    <div className="flex items-center justify-between">
      <span className="text-xs text-gray-400">{post.readTime} read</span>
      <Link to="/post/$postId" params={{ postId: post.id }} className="text-blue-600 font-semibold text-sm">
        Read Story →
      </Link>
    </div>
  </div>
))}
        </div>
      </div>
    </div>
  );
}
