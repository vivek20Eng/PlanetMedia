import React, { useState } from 'react';
import { Grid, List, MapPin, Clock, Eye } from 'lucide-react';

const products = [
  {
    id: 1,
    title: 'Tv9 Pro Smart Tv Box 8/128gb Best Price: Urgent',
    location: 'Paris',
    timeAgo: '1 day ago',
    price: 499,
    image: 'https://picsum.photos/300',
    isEditAd: false
  },
  {
    id: 2,
    title: 'HP Envy x360 Laptop - Core i7, 16GB RAM, 512GB SSD',
    location: 'Paris',
    timeAgo: '1 day ago',
    price: 499,
    image: 'https://picsum.photos/300',
    isEditAd: true
  },
  {
    id: 3,
    title: 'Sony 55" 4K Smart LED TV - Excellent Picture Quality',
    location: 'Paris',
    timeAgo: '1 day ago',
    price: 499,
    image: 'https://picsum.photos/300',
    isEditAd: false
  },
  {
    id: 4,
    title: 'Sony 55" 4K Smart LED TV - Excellent Picture Quality',
    location: 'Paris',
    timeAgo: '1 day ago',
    price: 499,
    image: 'https://picsum.photos/300',
    isEditAd: false
  }
];

const ProductCard = ({ product, isListView }) => {
  const cardClass = isListView
    ? "flex gap-6 bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
    : "bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow";

  const imageClass = isListView
    ? "w-48 h-48 object-cover flex-shrink-0"
    : "w-full h-48 object-cover";

  return (
    <div className={cardClass}>
      <div className="relative">
        <img
          src={product.image}
          alt={product.title}
          className={imageClass}
        />
        {product.isEditAd && (
          <span className="absolute top-3 right-3 bg-pink-500 text-white text-xs px-2 py-1 rounded-full">
            EDIT AD
          </span>
        )}
      </div>

      <div className="p-4 flex-grow">
        <div className="flex items-center text-sm text-gray-500 mb-2 gap-2">
          <MapPin size={16} className="text-gray-400" />
          <span>{product.location}</span>
          <span>•</span>
          <Clock size={16} className="text-gray-400" />
          <span>{product.timeAgo}</span>
        </div>

        <h3 className="font-medium text-gray-900 mb-2 line-clamp-2">
          {product.title}
        </h3>

        <div className="flex justify-between items-center">
          <span className="text-pink-500 font-semibold">
            ${product.price}
          </span>
          <button className="text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100">
            <span className="sr-only">More options</span>
            <Eye size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

const FreshRecommendations = () => {
  const [isGridView, setIsGridView] = useState(true);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <span className="text-pink-500 text-sm font-medium uppercase tracking-wider">
          WHAT'S NEW
        </span>
        <h2 className="text-3xl font-bold mt-2">
          Fresh Recommendations
        </h2>
      </div>

      <div className="flex justify-between items-center mb-6">
        <div className="text-gray-600">
          <span className="text-pink-500 font-medium">{products.length}</span> Items
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setIsGridView(true)}
            className={`p-2 rounded-lg transition-colors ${
              isGridView ? 'bg-pink-50 text-pink-500' : 'text-gray-500 hover:bg-gray-100'
            }`}
          >
            <Grid size={20} />
          </button>
          <button
            onClick={() => setIsGridView(false)}
            className={`p-2 rounded-lg transition-colors ${
              !isGridView ? 'bg-pink-50 text-pink-500' : 'text-gray-500 hover:bg-gray-100'
            }`}
          >
            <List size={20} />
          </button>
        </div>
      </div>

      <div
        className={`grid gap-6 ${
          isGridView ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4' : 'grid-cols-1'
        }`}
      >
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            isListView={!isGridView}
          />
        ))}
      </div>
    </div>
  );
};

export default FreshRecommendations;