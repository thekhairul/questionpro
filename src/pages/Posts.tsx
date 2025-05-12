import Card from '@/components/Card';
import $api from '@/services';
import type { Post } from '@/types/posts';
import { useQuery } from '@tanstack/react-query';
import { useMemo, useState } from 'react';
import Select from 'react-select';

type SelectOption = { value: number | null; label: string } | null;

function Posts() {
  const { data: users } = useQuery({
    queryKey: ['users'],
    queryFn: $api.users.getUsers,
    staleTime: Infinity,
  });

  const [selectedUser, setSelectedUser] = useState<number | null>(null);

  const selectOptions = useMemo(() => {
    const defaultOption = { value: null, label: 'All' };
    if (!users) return [defaultOption];
    return [
      defaultOption,
      ...users.map((user) => ({
        value: user.id,
        label: user.name,
      })),
    ];
  }, [users]);

  const onSelect = (option: SelectOption) => {
    setSelectedUser(option?.value ?? null);
  };

  return (
    <div>
      <div className="flex justify-between items-center gap-4 mb-4">
        <h1 className="text-2xl font-bold">Posts</h1>
        <Select
          options={selectOptions}
          onChange={(newValue) => onSelect(newValue as SelectOption)}
          placeholder="Select a user"
          defaultValue={selectOptions[0]}
          className="w-1/3"
        />
      </div>
      <PostsList selectedUser={selectedUser} />
    </div>
  );
}

function PostsList({ selectedUser }: { selectedUser: number | null }) {
  const { data, isLoading, error } = useQuery({
    queryKey: ['posts', selectedUser],
    queryFn: () => $api.posts.getPosts(selectedUser),
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <ul>
      {data!.map((post: Post) => (
        <li key={post.id} className="mb-4">
          <Card title={post.title} description={post.body} />
        </li>
      ))}
    </ul>
  );
}

export default Posts;
