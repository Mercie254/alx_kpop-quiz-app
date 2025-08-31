import React from 'react';

const ScoreBoard = ({ score, total, onPlayAgain, onGoHome }) => {
  const percentage = Math.round((score / total) * 100);
  
  const getScoreMessage = () => {
    if (percentage >= 90) return { 
      text: "You're a true Kpopper! 🎉", 
      emoji: "🎉",
      bgColor: "from-green-200 via-blue-200 to-green-300"
    };
    if (percentage >= 70) return { 
      text: "Not bad, trainee! Practice your fan chants! 📚", 
      emoji: "📚",
      bgColor: "from-blue-200 via-purple-200 to-blue-300"
    };
    if (percentage >= 50) return { 
      text: "Oof, 😬 Do you even K-pop?", 
      emoji: "😬",
      bgColor: "from-yellow-200 via-orange-200 to-yellow-300"
    };
    return { 
      text: "Do you even K-pop? 😅", 
      emoji: "😅",
      bgColor: "from-red-200 via-pink-200 to-red-300"
    };
  };

  const scoreMessage = getScoreMessage();

  const getGrade = () => {
    if (percentage >= 90) return "A+";
    if (percentage >= 80) return "A";
    if (percentage >= 70) return "B";
    if (percentage >= 60) return "C";
    return "D";
  };

  const getTrophy = () => {
    if (percentage >= 90) return "🏆";
    if (percentage >= 70) return "🥈";
    if (percentage >= 50) return "🥉";
    return "💪";
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br ${scoreMessage.bgColor} flex items-center justify-center p-8`}>
      <div className="max-w-lg mx-auto">
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 text-center shadow-xl">
          {/* Score Header */}
          <div className="mb-8">
            <div className="text-8xl mb-4">{getTrophy()}</div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Your Score: {score}/{total}
            </h2>
            <div className="flex items-center justify-center space-x-4">
              <span className="text-6xl font-bold text-purple-600">{percentage}%</span>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-700">Grade</div>
                <div className="text-3xl font-bold text-purple-600">{getGrade()}</div>
              </div>
            </div>
          </div>

          <div className="mb-8 flex justify-center">
            <div className="relative w-32 h-32">
              <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">

                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="#e5e7eb"
                  strokeWidth="8"
                  fill="none"
                />

                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="url(#gradient)"
                  strokeWidth="8"
                  fill="none"
                  strokeLinecap="round"
                  strokeDasharray={`${(percentage / 100) * 251.2} 251.2`}
                  className="transition-all duration-1000 ease-out"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#8b5cf6" />
                    <stop offset="100%" stopColor="#ec4899" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-bold text-gray-800">{percentage}%</span>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <div className="text-6xl mb-4">{scoreMessage.emoji}</div>
            <p className="text-lg text-gray-700 font-medium">{scoreMessage.text}</p>
          </div>

          <div className="mb-8 p-4 bg-gray-50 rounded-xl">
            <h3 className="font-bold text-gray-800 mb-3">Quiz Stats</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="text-center">
                <div className="font-bold text-green-600">{score}</div>
                <div className="text-gray-600">Correct</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-red-600">{total - score}</div>
                <div className="text-gray-600">Wrong</div>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <button
              onClick={onGoHome}
              className="w-full bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Go Home
            </button>
            <button
              onClick={onPlayAgain}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Play Again
            </button>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-3">Share your K-pop knowledge!</p>
            <div className="flex justify-center space-x-3">
              <button className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors">
                📱
              </button>
              <button className="p-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors">
                📲
              </button>
              <button className="p-2 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition-colors">
                🔗
              </button>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-6">
          <p className="text-gray-600">
            {percentage < 70 ? "Keep studying your K-pop! 💪" : "You're a true K-pop stan! 🌟"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ScoreBoard;