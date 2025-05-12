import apiClient from '@/services/apiClient';
import type { Post } from '@/types/posts';

const postsRepo = {
  getPosts: async (userId?: number) => {
    const response = await apiClient.get<Post[]>('/posts', {
      params: {
        userId,
      },
    });
    return response.data;
  },
};

export default postsRepo;
