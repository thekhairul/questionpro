import Card from '@/components/Card';
import $api from '@/services';
import type { Comment } from '@/types/comments';
import { useQuery } from '@tanstack/react-query';
import { useMemo, useState } from 'react';
import Select from 'react-select';

type SelectOption = { value: number | null; label: string } | null;

function Comments() {
  const { data: posts } = useQuery({
    queryKey: ['posts', 'all'],
    queryFn: () => $api.posts.getPosts(),
    staleTime: Infinity,
  });

  const [selectedPost, setSelectedPost] = useState<number | null>(null);

  const selectOptions = useMemo(() => {
    const defaultOption = { value: null, label: 'All' };
    if (!posts) return [defaultOption];
    return [
      defaultOption,
      ...posts.map((post) => ({
        value: post.id,
        label: post.title,
      })),
    ];
  }, [posts]);

  const onSelect = (option: SelectOption) => {
    setSelectedPost(option?.value ?? null);
  };

  return (
    <div>
      <div className="flex justify-between items-center gap-4 mb-4">
        <h1 className="text-2xl font-bold">Comments</h1>
        <Select
          options={selectOptions}
          onChange={(newValue) => onSelect(newValue as SelectOption)}
          placeholder="Select a post"
          defaultValue={selectOptions[0]}
          className="w-1/3"
        />
      </div>
      <CommentsList selectedUser={selectedPost} />
    </div>
  );
}

function CommentsList({ selectedUser }: { selectedUser: number | null }) {
  const { data, isLoading, error } = useQuery({
    queryKey: ['comments', selectedUser],
    queryFn: () => $api.comments.getComments(selectedUser),
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <ul>
      {data!.map((comment: Comment) => (
        <li key={comment.id} className="mb-4">
          <Card title={comment.name} description={comment.body} />
        </li>
      ))}
    </ul>
  );
}

export default Comments;
