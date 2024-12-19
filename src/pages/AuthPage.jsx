import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { authService } from '../services/authService';
import { useAuth } from '../contexts/AuthContext';
import loginBannerImg from '../assets/images/loginBannerImg.svg';
import Logo from '../assets/images/logo.svg';
import letter from '../assets/icons/letter.svg';
import key from '../assets/icons/key.svg';
import arrowRight from '../assets/icons/arrowRight.svg';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value.trim()
    }));
  };

  const validateForm = () => {
    if (!formData.username || (!isLogin && !formData.email) || !formData.password) {
      toast.error('All fields are required');
      return false;
    }

    if (!isLogin) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        toast.error('Please enter a valid email address');
        return false;
      }
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsLoading(true);

    try {
      const response = isLogin 
        ? await authService.login(formData)
        : await authService.register(formData);
      
      login(response);
      toast.success(`${isLogin ? 'Login' : 'Registration'} successful!`);
      navigate('/myaccount');
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-12">
      <div className="max-w-6xl w-full bg-white rounded-3xl overflow-hidden shadow-lg">
        <div className="flex">
          {/* Left Side - Form */}
          <div className="w-1/2 p-12">
            <div className="mb-4 flex justify-center flex-col items-center">
              <img src={Logo} alt="Listbnb" className="h-8 mb-4" />
              <p className="text-gray-600 mt-2 text-sm max-w-[25em] text-center">
                a Largest Classified Listing Marketplace offers perfect Ads classifieds...
              </p>
            </div>

            <div className="mb-8 flex w-full justify-center">
              <h2 className="text-2xl font-semibold text-gray-900 text-center max-w-[10em]">
                {isLogin ? 'Login To Your Account' : 'Create New Account'}
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Username <span className="text-pink-600">*</span>
                </label>
                <div className="mt-1 relative">
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    placeholder="Type here"
                    className="appearance-none block w-full px-3 py-3 border border-gray-200 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-pink-500 focus:border-pink-500"
                    disabled={isLoading}
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                    <img src={letter} alt="letter" className="h-4" />
                  </div>
                </div>
              </div>

              {!isLogin && (
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email <span className="text-pink-600">*</span>
                  </label>
                  <div className="mt-1 relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Type here"
                      className="appearance-none block w-full px-3 py-3 border border-gray-200 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-pink-500 focus:border-pink-500"
                      disabled={isLoading}
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                      <img src={letter} alt="letter" className="h-4" />
                    </div>
                  </div>
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Password <span className="text-pink-600">*</span>
                </label>
                <div className="mt-1 relative">
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Type here"
                    className="appearance-none block w-full px-3 py-3 border border-gray-200 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-pink-500 focus:border-pink-500"
                    disabled={isLoading}
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                    <img src={key} alt="key" className="h-4" />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex justify-center items-center py-4 px-4 border border-transparent rounded-full shadow-sm text-md font-medium text-white bg-[#F50963] hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
              >
                {isLoading ? 'Please wait...' : (isLogin ? 'Login' : 'Create Account')}
                <img src={arrowRight} alt="arrowRight" className="h-3 px-2" />
              </button>
            </form>
          </div>

          {/* Right Side - Banner */}
          <div className="w-1/2 bg-pink-50 p-12 flex flex-col justify-center items-center">
            <img src={loginBannerImg} alt="Login Banner" className="w-96" />
            <div className="text-center mt-8">
              <h3 className="text-xl font-semibold text-gray-900">
                {isLogin ? "Don't Have an Account?" : "Already Have an Account?"}
              </h3>
              <p className="mt-2 text-gray-600">
                {isLogin 
                  ? "To connect with us please register for a new account if you are not having one already."
                  : "Login to access your account and continue where you left off."}
              </p>
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="mt-6 inline-flex items-center px-6 py-3 border border-transparent text-sm font-medium rounded-full text-white bg-[#F50963] hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
              >
                {isLogin ? 'Register' : 'Login'}
                <img src={arrowRight} alt="arrowRight" className="h-3 px-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;