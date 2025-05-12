import Card from '@/components/Card';
import $api from '@/services';
import type { Comment } from '@/types/comments';
import { useQuery } from '@tanstack/react-query';

function Comments() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['comments'],
    queryFn: () => $api.comments.getComments(),
  });
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Comments</h1>
      <ul>
        {data!.map((comment: Comment) => (
          <li key={comment.id} className="mb-4">
            <Card title={comment.name} description={comment.body} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Comments;
