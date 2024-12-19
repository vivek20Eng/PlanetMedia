// src/services/authService.js
import api from '../utils/api';

export const authService = {
  async register(userData) {
    try {
      const response = await api.post('/api/auth/local/register', {
        username: userData.username,
        email: userData.email,
        password: userData.password
      });
      
      return response.data;
    } catch (error) {
      console.error('Registration error:', error.response || error);
      const message = error.response?.data?.error?.message || 'Registration failed';
      throw new Error(message);
    }
  },

  async login(credentials) {
    try {
      const response = await api.post('/api/auth/local', {
        identifier: credentials.email,
        password: credentials.password
      });
      
      return response.data;
    } catch (error) {
      console.error('Login error:', error.response || error);
      const message = error.response?.data?.error?.message || 'Login failed';
      throw new Error(message);
    }
  }
};