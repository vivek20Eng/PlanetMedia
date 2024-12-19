// utils/storage.js
export const getToken = () => localStorage.getItem('token');
export const setToken = (token) => localStorage.setItem('token', token);
export const getApiKey = () => import.meta.env.VITE_API_KEY;

export const getUser = () => {
  try {
    const userStr = localStorage.getItem('user');
    return userStr ? JSON.parse(userStr) : null;
  } catch (error) {
    console.error('Error parsing user from localStorage:', error);
    return null;
  }
};

export const setUser = (user) => {
  try {
    localStorage.setItem('user', JSON.stringify(user));
  } catch (error) {
    console.error('Error storing user in localStorage:', error);
  }
};

export const clearStorage = () => {
  try {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  } catch (error) {
    console.error('Error clearing localStorage:', error);
  }
};

