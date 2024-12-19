// contexts/AuthContext.jsx
import { createContext, useContext, useState, useEffect } from 'react';
import { getUser, setToken, setUser, clearStorage } from '../utils/storage';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUserState] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const initialUser = getUser();
      setUserState(initialUser);
    } catch (error) {
      console.error('Error initializing auth context:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const login = ({ jwt, user }) => {
    try {
      setToken(jwt);
      setUser(user);
      setUserState(user);
    } catch (error) {
      console.error('Error during login:', error);
      throw error;
    }
  };

  const logout = () => {
    try {
      clearStorage();
      setUserState(null);
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  const isAuthenticated = Boolean(user);

  if (isLoading) {
    return null; 
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};