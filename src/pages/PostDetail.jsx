import { useParams, useNavigate } from '@tanstack/react-router';
import { posts } from '../data/posts';

export default function PostDetail() {
  const { postId } = useParams({ strict: false });
  const navigate = useNavigate();

  const post = posts.find(p => p.id === postId);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-xl font-semibold">Post not found</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-3xl mx-auto p-6">
        <article className="bg-white p-6 rounded-xl shadow">
          <h1 className="text-3xl font-bold mb-4">
            {post.title}
          </h1>

          <p className="text-gray-700 leading-relaxed mb-6">
            {post.content}
          </p>

          <div className="flex gap-4">
            <button
              onClick={() => navigate({ to: '/' })}
              className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
            >
              Home
            </button>

            <button
              onClick={() => navigate({ to: '..' })}
              className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
            >
              Back
            </button>
          </div>
        </article>
      </div>
    </div>
  );
}
