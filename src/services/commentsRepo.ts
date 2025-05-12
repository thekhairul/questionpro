import apiClient from "./apiClient";

const commentsRepo = {
    getComments: async () => {
        const response = await apiClient.get("/comments");
        return response.data;
    },
};

export default commentsRepo;