import React from 'react';

const CategoryFilter = ({ categories, selectedCategory, onCategoryChange }) => {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 mb-6 shadow-lg">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Filter by Category</h3>

      <div className="flex flex-wrap gap-2 overflow-x-auto">
        <button
          onClick={() => onCategoryChange('All')}
          aria-pressed={selectedCategory === 'All'}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
            selectedCategory === 'All'
              ? 'bg-purple-600 text-white shadow-md'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          All
        </button>

        {categories?.length > 0 &&
          categories.map((category) => (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              aria-pressed={selectedCategory === category}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-purple-600 text-white shadow-md'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
