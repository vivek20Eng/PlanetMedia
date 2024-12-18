// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Pages
import HomePage from './pages/HomePage';
import AuthPage from './pages/AuthPage';
import DashboardPage from './pages/Dashboard';
import ProfilePage from './pages/ProfilePage';

// Components
import Header from './components/Common/Header';
import ProtectedRoute from './components/Common/ProtectedRoute';
import Footer from './components/Common/Footer';
import NotFound from './components/Common/NotFound';

// Context
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-100">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route 
              path="/dashboard" 
              element={
                <ProtectedRoute>
                  <DashboardPage />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/profile" 
              element={
                <ProtectedRoute>
                  <ProfilePage />
                </ProtectedRoute>
              } 
            />
            {/* Route for 404 */}
            <Route path="*" element={<NotFound />} /> {/* Render NotFound component */}
          </Routes>
          <ToastContainer />
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
