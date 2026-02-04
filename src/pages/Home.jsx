import { Link } from '@tanstack/react-router';
import { posts } from '../data/posts';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">📝 Blog</h1>

        <div className="space-y-6">
          {posts.map(post => (
            <div
              key={post.id}
              className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">
                {post.title}
              </h3>
              <p className="text-gray-600 mb-3">
                {post.excerpt}
              </p>

              <Link
                to="/post/$postId"
                params={{ postId: post.id }}
                className="text-blue-600 font-medium hover:underline"
              >
                Read more →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
