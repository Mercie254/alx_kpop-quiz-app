import React, { useState, useEffect } from 'react';
import QuestionCard from './QuestionCard';
import ScoreBoard from './ScoreBoard';

const Quiz = ({ questions, onGoBack, onGoHome }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [quizComplete, setQuizComplete] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    setSelectedAnswer(answers[currentQuestion] || null);
  }, [currentQuestion, answers]);

  const handleAnswerSelect = (answerIndex) => {
    setSelectedAnswer(answerIndex);
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion]: answerIndex,
    }));
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      // Quiz completed
      const finalScore = questions.reduce((total, question, index) => {
        return total + (answers[index] === question.correct ? 1 : 0);
      }, 0);
      setScore(finalScore);
      setQuizComplete(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  };

  if (quizComplete) {
    return (
      <ScoreBoard
        score={score}
        total={questions.length}
        onPlayAgain={() => {
          setAnswers({});
          setCurrentQuestion(0);
          setScore(0);
          setQuizComplete(false);
        }}
        onGoHome={onGoHome}
      />
    );
  }

  if (questions.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-200 via-purple-200 to-pink-300 flex items-center justify-center p-8">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 text-center shadow-xl">
          <p className="text-xl text-gray-700 mb-4">No questions available for this category.</p>
          <button
            onClick={onGoBack}
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-lg transition-all duration-200"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      <QuestionCard
        question={questions[currentQuestion]}
        selectedAnswer={selectedAnswer}
        onAnswerSelect={handleAnswerSelect}
        questionNumber={currentQuestion + 1}
        totalQuestions={questions.length}
      />

      <div className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm border-t border-gray-200 p-4">
        <div className="max-w-4xl mx-auto flex justify-between items-center">

          <button
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
              currentQuestion === 0
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-gray-500 text-white hover:bg-gray-600 hover:shadow-md transform hover:scale-105'
            }`}
          >
            Previous
          </button>

          <div className="text-center">
            <p className="text-gray-600 font-medium">
              {Object.keys(answers).length} / {questions.length} answered
            </p>
            <p className="text-sm text-gray-500">
              {Math.round(((currentQuestion + 1) / questions.length) * 100)}% Complete
            </p>
          </div>

          <button
            onClick={handleNext}
            disabled={selectedAnswer === null}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-lg ${
              selectedAnswer !== null
                ? 'bg-purple-600 hover:bg-purple-700 text-white'
                : 'bg-gray-400 text-gray-200 cursor-not-allowed'
            }`}
          >
            {currentQuestion === questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
          </button>
        </div>
      </div>

      {/* Back to Categories */}
      <button
        onClick={onGoBack}
        className="fixed top-4 left-4 bg-white/80 hover:bg-white text-gray-700 font-medium py-2 px-4 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
      >
        ← Back to Categories
      </button>
    </div>
  );
};

export default Quiz;
