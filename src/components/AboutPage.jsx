import React from 'react';

const AboutPage = ({ onGoHome, onNavigate }) => {
  const features = [
    {
      icon: "🎵",
      title: "Multiple Categories",
      description: "Test your knowledge across 7 different K-pop categories"
    },
    {
      icon: "⭐",
      title: "Idol Knowledge",
      description: "Learn about your favorite K-pop stars and their achievements"
    },
    {
      icon: "🎤",
      title: "Song Recognition",
      description: "Test how well you know K-pop hits and classics"
    },
    {
      icon: "💜",
      title: "Fandom Culture",
      description: "Show off your knowledge of K-pop fandoms and community"
    },
    {
      icon: "📚",
      title: "K-pop History",
      description: "Discover the evolution and milestones of Korean pop music"
    },
    {
      icon: "💃",
      title: "Dance & Choreography",
      description: "Test your knowledge of iconic K-pop choreography"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-purple-200 to-pink-300 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">About K-Quiz</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              The ultimate K-pop knowledge testing platform for true fans! 
              Challenge yourself and discover how much you really know about the world of Korean pop music.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/60 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105">
                <div className="text-4xl mb-3">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* How to Play */}
          <div className="bg-purple-50 rounded-2xl p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">How to Play</h2>
            <div className="space-y-3 text-gray-700">
              <div className="flex items-center space-x-3">
                <span className="bg-purple-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">1</span>
                <p>Choose your preferred category or select "All Categories" for a mix</p>
              </div>
              <div className="flex items-center space-x-3">
                <span className="bg-purple-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">2</span>
                <p>Answer multiple choice questions by clicking on your preferred option</p>
              </div>
              <div className="flex items-center space-x-3">
                <span className="bg-purple-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">3</span>
                <p>Navigate through questions using Previous/Next buttons</p>
              </div>
              <div className="flex items-center space-x-3">
                <span className="bg-purple-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">4</span>
                <p>Get your final score and see how you rank as a K-pop fan!</p>
              </div>
            </div>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center bg-white/60 p-6 rounded-2xl">
              <div className="text-3xl font-bold text-purple-600">35+</div>
              <div className="text-gray-600">Questions</div>
            </div>
            <div className="text-center bg-white/60 p-6 rounded-2xl">
              <div className="text-3xl font-bold text-purple-600">7</div>
              <div className="text-gray-600">Categories</div>
            </div>
            <div className="text-center bg-white/60 p-6 rounded-2xl">
              <div className="text-3xl font-bold text-purple-600">∞</div>
              <div className="text-gray-600">Fun</div>
            </div>
          </div>

          {/* Project Info */}
          <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-6 mb-6">
            <h2 className="text-xl font-bold text-gray-800 mb-3">Project Information</h2>
            <p className="text-gray-700 mb-2">
              <strong>Created by:</strong> Mercy Mwangi - ALX Capstone Project
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Technology Stack:</strong> React, JavaScript, Tailwind CSS
            </p>
            <p className="text-gray-700">
              <strong>Theme:</strong> K-pop culture and music knowledge testing
            </p>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <button
              onClick={() => onNavigate('categories')}
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-all duration-200 transform hover:scale-105 shadow-lg mr-4"
            >
              Start Quiz Now!
            </button>
            <button
              onClick={onGoHome}
              className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Go Home
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-6">
          <p className="text-gray-600">Made with ❤️ for K-pop fans worldwide</p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;