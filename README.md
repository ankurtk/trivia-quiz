<h1>Mini Quiz Application</h1>

This is a single-page mini quiz application built using React.js and the Open Trivia Database API. The application displays random quiz questions, allows users to select answers, provides feedback on correctness, and shows the final score at the end

<h3>Thought Process</h3>

<b>Project Setup<b>: I started by setting up the project using Create React App to quickly scaffold a React application with TypeScript support. I installed the necessary dependencies, such as Axios for API calls and Tailwind CSS for styling.

<b>Quiz Component</b>: I created the Quiz component, which is the main part of the application responsible for fetching quiz questions from the API and displaying them to the user.

<b>API Integration</b>: I utilized Axios to fetch questions from the Open Trivia Database API. I implemented the fetchQuestions function to make a GET request and retrieve a set of quiz questions.

<b>State Management</b>: I used React hooks, such as useState, to manage the application's state. The state variables questions, currentQuestion, score, selectedAnswer, showResult, and questionsAnswered were used to track the progress of the quiz.

<b>Quiz Logic</b>: I implemented the logic for handling user answers. When the user selects an answer, the application checks whether it is correct or incorrect and provides appropriate feedback. The user's score is updated accordingly.

<b>Next Question and Quiz Completion</b>: I added functionality to move to the next question after the user answers a question. When all 10 questions are answered, the quiz is completed, and the final score is displayed.

<b>Styling</b>: I used CSS to create a clean desgin for the quiz application. The styling was kept minimal to focus on the core functionality.

<h3>Challenges Faced and Solutions</h3>

<b>API Fetching and Data Structure</b>: One of the challenges was fetching quiz questions from the API and managing the data structure. I used TypeScript interfaces to define the structure of quiz questions, making it easier to handle the data.

<b>Correct Answer Validation</b>: Implementing correct answer validation and displaying feedback required careful handling of state and conditional rendering. I used state variables like selectedAnswer and conditional rendering to show feedback based on user actions.

<b>Limiting the Quiz to 10 Questions</b>: I needed to ensure that the quiz stops after the user answers 10 questions. I used the questionsAnswered state variable to track the number of questions answered and conditionally display the final score.
