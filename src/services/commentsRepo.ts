import apiClient from "./apiClient";

const commentsRepo = {
  getComments: async (postId?: number | null) => {
    const url = postId ? `/posts/${postId}/comments` : '/comments';
    const response = await apiClient.get(url);
    return response.data;
  },
};

export default commentsRepo;