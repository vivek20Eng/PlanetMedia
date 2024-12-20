import React, { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const PostAdPage = () => {
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    adTitle: '',
    price: '',
    description: '',
    photo: ''
  });

  //  data fetching
  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 1500));
        setFormData({
          adTitle: '',
          price: '',
          description: '',
          photo: ''
        });
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission
  };

  if (loading) {
    return (
      <div className="max-w-2xl mx-auto p-6">
        <div className="space-y-6">
          {/* Skeleton for Ad Title */}
          <div>
            <Skeleton height={20} width={80} className="mb-1" />
            <Skeleton height={40} className="rounded-lg" />
          </div>

          {/* Skeleton for Price */}
          <div>
            <Skeleton height={20} width={60} className="mb-1" />
            <Skeleton height={40} className="rounded-lg" />
          </div>

          {/* Skeleton for Description */}
          <div>
            <Skeleton height={20} width={100} className="mb-1" />
            <Skeleton height={120} className="rounded-lg" />
          </div>

          {/* Skeleton for Photo */}
          <div>
            <Skeleton height={20} width={70} className="mb-1" />
            <Skeleton height={40} className="rounded-lg" />
          </div>

          {/* Skeleton for Submit Button */}
          <Skeleton height={48} className="rounded-full" />
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Ad Title */}
        <div>
          <label htmlFor="adTitle" className="block text-sm text-gray-600 mb-1">
            Ad Title<span className="text-pink-500">*</span>
          </label>
          <input
            type="text"
            id="adTitle"
            name="adTitle"
            placeholder="Type here"
            value={formData.adTitle}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-pink-500"
            required
          />
        </div>

        {/* Price */}
        <div>
          <label htmlFor="price" className="block text-sm text-gray-600 mb-1">
            Price<span className="text-pink-500">*</span>
          </label>
          <input
            type="text"
            id="price"
            name="price"
            placeholder="Type here"
            value={formData.price}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-pink-500"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label htmlFor="description" className="block text-sm text-gray-600 mb-1">
            Description<span className="text-pink-500">*</span>
          </label>
          <textarea
            id="description"
            name="description"
            placeholder="Type Here"
            value={formData.description}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-pink-500 resize-none"
            required
          />
        </div>

        {/* Photo */}
        <div>
          <label htmlFor="photo" className="block text-sm text-gray-600 mb-1">
            Photo<span className="text-pink-500">*</span>
          </label>
          <input
            type="text"
            id="photo"
            name="photo"
            placeholder="Image url"
            value={formData.photo}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-pink-500"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#F50963] text-white py-3 rounded-full hover:bg-pink-600 transition-colors font-medium"
        >
          Post
        </button>
      </form>
    </div>
  );
};

export default PostAdPage;