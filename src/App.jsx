import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

// Pages
import HomePage from './pages/HomePage';
import AuthPage from './pages/AuthPage';
import ProfilePage from './pages/ProfileForm';
import MyAccount from './pages/MyAccount';
import AdsPage from './pages/AdsPage';
import PostAdPage from './pages/PostAdPage';
import AdDetailPage from './pages/AdDetailPage';

// Components
import Header from './components/Common/Header';
import ProtectedRoute from './components/Common/ProtectedRoute';
import DashboardLayout from './pages/Dashboard';
import NotFound from './components/Common/NotFound';

// Context
import { AuthProvider } from './contexts/AuthContext';
import Footer from './components/Common/Footer';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-100">
          <Header />
          <SkeletonTheme baseColor="#ebebeb" highlightColor="#f5f5f5">
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<HomePage />} />
              <Route path="/auth" element={<AuthPage />} />
              <Route path="/ad/:id" element={<AdDetailPage />} />

              {/* Protected Routes with Dashboard Layout */}
              <Route
                path="/myaccount"
                element={
                  <ProtectedRoute>
                    <DashboardLayout>
                      <MyAccount />
                    </DashboardLayout>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <DashboardLayout>
                      <ProfilePage />
                    </DashboardLayout>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/ads"
                element={
                  <ProtectedRoute>
                    <DashboardLayout>
                      <AdsPage />
                    </DashboardLayout>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/post-ad"
                element={
                  <ProtectedRoute>
                    <DashboardLayout>
                      <PostAdPage />
                    </DashboardLayout>
                  </ProtectedRoute>
                }
              />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </SkeletonTheme>
          <ToastContainer />
          <Footer/>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;