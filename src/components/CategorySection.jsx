import React from 'react';

const CategorySection = ({ categories, selectedCategory, onCategorySelect, onStartCategoryQuiz }) => {
  const categoryIcons = {
    "General": "🎵",
    "Songs": "🎤", 
    "Idols": "⭐",
    "Fandoms": "💜",
    "History": "📚",
    "Dance": "💃",
    "Fun": "🎉"
  };

  const categoryDescriptions = {
    "General": "General K-pop knowledge",
    "Songs": "Pop music questions", 
    "Idols": "Questions about your favorite idols",
    "Fandoms": "Test your fandom knowledge!",
    "History": "Questions about K-pop history",
    "Dance": "Test your dance knowledge!",
    "Fun": "Fun facts and trivia"
  };

  const categoryColors = {
    "General": "from-purple-400 to-pink-400",
    "Songs": "from-blue-400 to-purple-400",
    "Idols": "from-pink-400 to-red-400", 
    "Fandoms": "from-purple-500 to-pink-500",
    "History": "from-yellow-400 to-orange-400",
    "Dance": "from-green-400 to-blue-400",
    "Fun": "from-red-400 to-pink-400"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-purple-200 to-pink-300 p-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Choose Your Category</h2>
            <p className="text-gray-600">Select a quiz category:</p>
          </div>
          
          <div className="space-y-4">

            <button
              onClick={() => onStartCategoryQuiz('All')}
              className={`w-full p-6 rounded-2xl border-2 transition-all duration-200 flex items-center space-x-4 ${
                selectedCategory === 'All'
                  ? 'border-purple-500 bg-purple-50 shadow-lg transform scale-105'
                  : 'border-gray-200 bg-white/50 hover:border-purple-300 hover:bg-purple-50 hover:scale-102'
              }`}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center text-2xl">
                🌟
              </div>
              <div className="text-left flex-1">
                <h3 className="text-xl font-semibold text-gray-800">All Categories</h3>
                <p className="text-gray-600">Mix of all question types</p>
              </div>
            </button>

            {categories.map(category => (
              <button
                key={category}
                onClick={() => onStartCategoryQuiz(category)}
                className={`w-full p-6 rounded-2xl border-2 transition-all duration-200 flex items-center space-x-4 ${
                  selectedCategory === category
                    ? 'border-purple-500 bg-purple-50 shadow-lg transform scale-105'
                    : 'border-gray-200 bg-white/50 hover:border-purple-300 hover:bg-purple-50 hover:scale-102'
                }`}
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${categoryColors[category] || 'from-purple-400 to-pink-400'} rounded-xl flex items-center justify-center text-2xl`}>
                  {categoryIcons[category] || "📝"}
                </div>
                <div className="text-left flex-1">
                  <h3 className="text-xl font-semibold text-gray-800">{category}</h3>
                  <p className="text-gray-600">{categoryDescriptions[category] || "Test your knowledge!"}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-6">
          <p className="text-gray-600">Made with ❤️ for K-pop fans</p>
        </div>
      </div>
    </div>
  );
};

export default CategorySection;