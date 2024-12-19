// src/utils/api.js
import axios from 'axios';
import { getToken } from './storage';

const api = axios.create({
  baseURL: import.meta.env?.VITE_API_BASE_URL || 'https://ads.planetmedia.app',
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': import.meta.env?.VITE_API_KEY || 'a6a76927-6234-4bfe-98c1-c81b9e5f9f44'
  }
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    // Log outgoing requests for debugging
    console.log('API Request:', {
      method: config.method,
      url: config.url,
      headers: { ...config.headers, Authorization: '[REDACTED]' },
      data: config.data ? { ...config.data, password: '[REDACTED]' } : undefined
    });
    return config;
  },
  (error) => {
    console.error('Request interceptor error:', error);
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => {
    console.log('API Response:', {
      status: response.status,
      data: response.data
    });
    return response;
  },
  (error) => {
    console.error('API Error:', {
      status: error.response?.status,
      data: error.response?.data,
      message: error.message
    });
    return Promise.reject(error);
  }
);

export default api;