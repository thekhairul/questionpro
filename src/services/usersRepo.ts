import type { User } from '@/types/users';
import apiClient from './apiClient';

const usersRepo = {
  getUsers: async () => {
    const response = await apiClient.get<User[]>('/users');
    return response.data;
  },
};

export default usersRepo;
