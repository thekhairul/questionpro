import Card from '@/components/Card';
import $api from '@/services';
import type { Post } from '@/types/posts';
import { useQuery } from '@tanstack/react-query';

function Posts() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['posts'],
    queryFn: () => $api.posts.getPosts(),
  });
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Posts</h1>
      <ul>
        {data!.map((post: Post) => (
          <li key={post.id} className="mb-4">
            <Card title={post.title} description={post.body} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Posts;
