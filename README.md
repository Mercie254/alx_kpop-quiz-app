# K-pop Quiz App (ALX Capstone Project)

ALX Capstone Project – This project is the culmination of the ALX Frontend Development program. It demonstrates proficiency in React, JavaScript, and Tailwind CSS, showcasing the ability to build a fully functional, interactive web application from scratch.

The K-pop Quiz App is a dynamic, category-based trivia game that allows users to test their knowledge of K-pop groups, songs, idols, and fandoms.

---

## Features

- Dynamic Quiz: Questions are loaded from a `questions.js` file in the `data/` folder.
- Category Filtering: Users can select categories such as General, Songs, Idols, Fandoms, History, Dance, and Fun. Only questions from the selected category are displayed.
- Score Tracking: Tracks user answers and displays the score at the end of the quiz.
- Interactive UI: Buttons highlight when selected, and responsive design ensures usability across devices.
- Styled with Tailwind CSS: Utility-first styling for a modern and responsive interface.
- Images Support: Optional images can accompany questions, enhancing user engagement.

---

## Technologies Used

- React – Component-based UI development.
- JavaScript – Application logic and state management.
- Tailwind CSS – Utility-first styling framework for modern UI.
- Git & GitHub – Version control and project management.

---

## Folder Structure

src/
├── components/ # Reusable UI components
│ ├── CategorySection.jsx
│ ├── CategoryFilter.jsx
│ ├── Header.jsx
│ ├── Quiz.jsx
│ ├── QuestionCard.jsx
│ └── ScoreBoard.jsx
├── data/ # Quiz questions data
│ └── questions.js
├── images/ # Images for questions and UI
├── App.js # Main component, state management
├── index.js # App entry point
├── index.css # Global styles


## How to Run Locally

1. Clone the repository  

git clone https://github.com/yourusername/kpop-quiz-app.git
cd kpop-quiz-app
Install dependencies

npm install
Start the development server

npm start
Open http://localhost:3000 in your browser to view the app.

Additional Notes
This project serves as a capstone demonstration of frontend development skills, including component-based architecture, state management, and responsive design.

Future enhancements may include timed quizzes, leaderboard integration, and more advanced animations for improved user engagement.

Images in the images/ folder can be used to enhance questions visually.


Author
Mercy Mwangi – ALX Frontend Student

