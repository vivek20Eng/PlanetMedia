import React, { useState } from 'react';

const ProfileForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    photo: '',
    location: '',
    contactNumber: ''
  });

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

  return (
    <div className="max-w-xl mx-auto p-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* First Name */}
        <div>
          <label htmlFor="firstName" className="block text-sm text-gray-600 mb-1">
            First Name<span className="text-pink-500">*</span>
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="Type here"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-pink-500"
            required
          />
        </div>

        {/* Last Name */}
        <div>
          <label htmlFor="lastName" className="block text-sm text-gray-600 mb-1">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Type here"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-pink-500"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm text-gray-600 mb-1">
            Email<span className="text-pink-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Type here"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-pink-500"
            required
          />
        </div>

        {/* Username */}
        <div>
          <label htmlFor="username" className="block text-sm text-gray-600 mb-1">
            Username<span className="text-pink-500">*</span>
          </label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Type here"
            value={formData.username}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-pink-500"
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

        {/* Location */}
        <div>
          <label htmlFor="location" className="block text-sm text-gray-600 mb-1">
            Location<span className="text-pink-500">*</span>
          </label>
          <input
            type="text"
            id="location"
            name="location"
            placeholder="Type here"
            value={formData.location}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-pink-500"
            required
          />
        </div>

        {/* Contact Number */}
        <div>
          <label htmlFor="contactNumber" className="block text-sm text-gray-600 mb-1">
            Contact Number<span className="text-pink-500">*</span>
          </label>
          <input
            type="tel"
            id="contactNumber"
            name="contactNumber"
            placeholder="Type here"
            value={formData.contactNumber}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-pink-500"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#F50963] text-white py-3 rounded-full hover:bg-pink-600 transition-colors"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default ProfileForm;