import { Link } from '@tanstack/react-router';
import { posts } from '../data/posts';

export default function Home() {
  return (
    <div>
      <h1>Blog Home</h1>

      {posts.map(post => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.excerpt}</p>

          <Link to="/post/$postId" params={{ postId: post.id }}>
            Read More →
          </Link>
        </div>
      ))}
    </div>
  );
}
