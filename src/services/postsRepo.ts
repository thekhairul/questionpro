import apiClient from "@/services/apiClient";
import type { Comment } from "@/types/comments";
import type { Post } from "@/types/posts";

const postsRepo = {
    getPosts: async () => {
        const response = await apiClient.get<Post[]>("/posts");
        return response.data;
    },
    getPostsByUserId: async (userId: number) => {
        const response = await apiClient.get<Post[]>(`/posts?userId=${userId}`);
        return response.data;
    },
    getPostComments: async (postId: number) => {
        const response = await apiClient.get<Comment[]>(`/posts/${postId}/comments`);
        return response.data;
    }
};

export default postsRepo;