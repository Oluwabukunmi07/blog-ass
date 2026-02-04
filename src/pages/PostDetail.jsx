import { useParams, useNavigate } from '@tanstack/react-router';
import { posts } from '../data/posts';

export default function PostDetail() {
  const { postId } = useParams({ strict: false });
  const navigate = useNavigate();

  const post = posts.find(p => p.id === postId);

  if (!post) {
    return <h2>Post not found</h2>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>

      <button onClick={() => navigate({ to: '/' })}>← Home</button>
      <button onClick={() => navigate({ to: '..' })}>← Back</button>
    </div>
  );
}
