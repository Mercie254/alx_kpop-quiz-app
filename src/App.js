import React, { useState } from 'react';
import Header from './components/Header';
import CategorySection from './components/CategorySection';
import AboutPage from './components/AboutPage';
import Quiz from './components/Quiz';
import ScoreBoard from './components/ScoreBoard';
import questions from './data/questions';


const convertQuestionsToArray = (questionsObj) => {
  const questionsArray = [];
  let id = 1;
  
  Object.entries(questionsObj).forEach(([category, categoryQuestions]) => {
    categoryQuestions.forEach(q => {

      const correctIndex = q.options.findIndex(option => option === q.answer);
      
      questionsArray.push({
        id: id++,
        category,
        question: q.question,
        options: q.options,
        correct: correctIndex,
        image: getImageForCategory(category)
      });
    });
  });
  
  return questionsArray;
};

const getImageForCategory = (category) => {
  const imageMap = {
    'General': 'images/bts.webp',
    'Songs': 'images/BlackPink.webp',
    'Idols': 'images/newjeans.webp',
    'Fandoms': 'images/twice.png',
    'History': 'images/exo.jpg',
    'Dance': 'images/straykids.png',
    'Fun': 'images/SVT.webp'
  };
  return imageMap[category] || null;
};

// Home Screen Component
const HomeScreen = ({ onStartQuiz }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-purple-200 to-pink-300 flex flex-col items-center justify-center p-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">K-Quiz: Test Your K-pop Knowledge!</h1>
        <p className="text-xl text-gray-700 mb-8">Are you a true fan? Let's find out!</p>
        <button
          onClick={onStartQuiz}
          className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
        >
          Start Quiz
        </button>
      </div>
    </div>
  );
};

// Main App Component
const App = () => {
  const [currentScreen, setCurrentScreen] = useState('home'); // 'home', 'about', 'categories', 'quiz', 'score'
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [quizData, setQuizData] = useState(null);
  const [scoreData, setScoreData] = useState(null);

  // Convert questions and get categories
  const questionsArray = convertQuestionsToArray(questions);
  const categories = Object.keys(questions);

  const handleNavigate = (screen) => {
    setCurrentScreen(screen);
  };

  const handleStartQuiz = () => {
    setCurrentScreen('categories');
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleStartCategoryQuiz = (category) => {
    const filteredQuestions = category === 'All' 
      ? questionsArray 
      : questionsArray.filter(q => q.category === category);
    
    setQuizData(filteredQuestions);
    setCurrentScreen('quiz');
  };

  const handleQuizComplete = (results) => {
    setScoreData(results);
    setCurrentScreen('score');
  };

  const handlePlayAgain = () => {
    setCurrentScreen('categories');
    setQuizData(null);
    setScoreData(null);
  };

  const handleGoHome = () => {
    setCurrentScreen('home');
    setQuizData(null);
    setScoreData(null);
    setSelectedCategory('All');
  };

  const handleGoBack = () => {
    setCurrentScreen('categories');
    setQuizData(null);
  };

  return (
    <div className="min-h-screen">
      <Header onNavigate={handleNavigate} currentScreen={currentScreen} />
      
      {currentScreen === 'home' && (
        <HomeScreen onStartQuiz={handleStartQuiz} />
      )}

      {currentScreen === 'about' && (
        <AboutPage onGoHome={handleGoHome} onNavigate={handleNavigate} />
      )}
      
      {currentScreen === 'categories' && (
        <CategorySection
          categories={categories}
          selectedCategory={selectedCategory}
          onCategorySelect={handleCategorySelect}
          onStartCategoryQuiz={handleStartCategoryQuiz}
        />
      )}

      {currentScreen === 'quiz' && quizData && (
        <Quiz 
          questions={quizData} 
          onComplete={handleQuizComplete}
          onGoBack={handleGoBack}
        />
      )}

      {currentScreen === 'score' && scoreData && (
        <ScoreBoard 
          score={scoreData.score} 
          total={scoreData.total}
          results={scoreData.results}
          onPlayAgain={handlePlayAgain}
          onGoHome={handleGoHome}
        />
      )}
    </div>
  );
};

export default App;
