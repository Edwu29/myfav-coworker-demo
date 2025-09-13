import axios from 'axios';
import { User, Stats } from '../types';

const API_BASE_URL = 'http://localhost:8000';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const apiService = {
  // User endpoints
  async getUsers(): Promise<User[]> {
    const response = await api.get<User[]>('/api/users');
    return response.data;
  },

  async createUser(user: Omit<User, 'id'>): Promise<User> {
    const response = await api.post<User>('/api/users', user);
    return response.data;
  },

  async getUser(id: number): Promise<User> {
    const response = await api.get<User>(`/api/users/${id}`);
    return response.data;
  },

  async deleteUser(id: number): Promise<void> {
    await api.delete(`/api/users/${id}`);
  },

  // Stats endpoint
  async getStats(): Promise<Stats> {
    const response = await api.get<Stats>('/api/stats');
    return response.data;
  },

  // GitHub repos endpoint
  async getTrendingRepos(): Promise<{ repositories: any[] }> {
    const response = await api.get<{ repositories: any[] }>('/api/github/trending');
    return response.data;
  },
};
