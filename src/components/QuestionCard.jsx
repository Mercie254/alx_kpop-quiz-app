import React from 'react';

const QuestionCard = ({ question, selectedAnswer, onAnswerSelect, questionNumber, totalQuestions }) => {
  const answerLabels = ['A', 'B', 'C', 'D'];
  const answerColors = [
    'from-purple-400 to-pink-400',
    'from-blue-400 to-purple-400', 
    'from-pink-400 to-red-400',
    'from-yellow-400 to-orange-400'
  ];
  const answerEmojis = ['🎵', '🎤', '⭐', '💜'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-purple-200 to-pink-300 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Question Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800">Question {questionNumber} of {totalQuestions}</h2>
          <div className="w-full bg-white/30 rounded-full h-2 mt-4">
            <div 
              className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(questionNumber / totalQuestions) * 100}%` }}
            />
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 mb-8 shadow-xl">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Current Question</h3>
          
          <div className="flex items-center space-x-6">
            {question.image && (
              <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl flex-shrink-0 overflow-hidden">
                <img 
                  src={question.image} 
                  alt="Question visual"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = '<div class="w-full h-full flex items-center justify-center text-white font-bold">🎵</div>';
                  }}
                />
              </div>
            )}
            <div className="flex-1">
              <p className="text-xl text-gray-800">{question.question}</p>
              <span className="inline-block mt-2 px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                {question.category}
              </span>
            </div>
          </div>
        </div>

        {/* Answer Options */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 mb-8 shadow-xl">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Select Your Answer</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => onAnswerSelect(index)}
                className={`p-6 rounded-2xl border-2 transition-all duration-200 transform hover:scale-105 ${
                  selectedAnswer === index
                    ? 'border-purple-500 bg-purple-100 shadow-lg scale-105'
                    : 'border-gray-200 bg-white/50 hover:border-purple-300 hover:bg-purple-50'
                }`}
              >
                <div className="flex flex-col items-center space-y-4">
                  <div className={`w-16 h-16 bg-gradient-to-br ${answerColors[index]} rounded-full flex items-center justify-center shadow-lg`}>
                    <span className="text-white font-bold text-xl">{answerEmojis[index]}</span>
                  </div>
                  <div className="text-center">
                    <p className="font-semibold text-gray-800">Answer {answerLabels[index]}</p>
                    <p className="text-gray-600 text-sm mt-1">{option}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Answer Status */}
        <div className="text-center">
          <p className="text-gray-600 mb-4">
            {selectedAnswer !== null ? '✅ Answer selected' : '❓ Please select an answer'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
