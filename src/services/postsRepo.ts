import type { Post } from '@/types/posts';
import apiClient from './apiClient';

const postsRepo = {
  getPosts: async (userId?: number | null) => {
    const response = await apiClient.get<Post[]>('/posts', {
      params: {
        userId: userId ?? undefined,
      },
    });
    return response.data;
  },
};

export default postsRepo;
