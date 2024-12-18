import api from '../utils/api';
import { setToken, setUser } from '../utils/storage';

export const authService = {
  async register(userData) {
    try {
      const response = await api.post('/api/auth/local/register', userData);
      const { jwt, user } = response.data;
      
      setToken(jwt);
      setUser(user);
      
      return user;
    } catch (error) {
      throw error.response ? error.response.data : new Error('Registration failed');
    }
  },

  async login(credentials) {
    try {
      const response = await api.post('/api/auth/local', {
        identifier: credentials.username,
        password: credentials.password
      });

      const { jwt, user } = response.data;
      
      setToken(jwt);
      setUser(user);
      
      return user;
    } catch (error) {
      throw error.response ? error.response.data : new Error('Login failed');
    }
  },

  async getProfile() {
    try {
      const response = await api.get('/api/profile');
      return response.data;
    } catch (error) {
      throw error.response ? error.response.data : new Error('Failed to fetch profile');
    }
  }
};