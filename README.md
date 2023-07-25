<h1>Mini Quiz Application</h1>

This is a single-page mini quiz application built using React.js and the Open Trivia Database API. The application displays random quiz questions, allows users to select answers, provides feedback on correctness, and shows the final score at the end

<h3>Thought Process</h3>

Project Setup: I started by setting up the project using Create React App to quickly scaffold a React application with TypeScript support. I installed the necessary dependencies, such as Axios for API calls and Tailwind CSS for styling.

Quiz Component: I created the Quiz component, which is the main part of the application responsible for fetching quiz questions from the API and displaying them to the user.

API Integration: I utilized Axios to fetch questions from the Open Trivia Database API. I implemented the fetchQuestions function to make a GET request and retrieve a set of quiz questions.

State Management: I used React hooks, such as useState, to manage the application's state. The state variables questions, currentQuestion, score, selectedAnswer, showResult, and questionsAnswered were used to track the progress of the quiz.

Quiz Logic: I implemented the logic for handling user answers. When the user selects an answer, the application checks whether it is correct or incorrect and provides appropriate feedback. The user's score is updated accordingly.

Next Question and Quiz Completion: I added functionality to move to the next question after the user answers a question. When all 10 questions are answered, the quiz is completed, and the final score is displayed.

Styling: I used Tailwind CSS to create a clean and responsive interface for the quiz application. The styling was kept minimal to focus on the core functionality.
