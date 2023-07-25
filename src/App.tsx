import React, { useState } from "react";
import Quiz from "./components/Quiz";
import "./App.css";

function App() {
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const handleQuizComplete = (finalScore: number) => {
    setShowResults(true);
    setScore(finalScore);
  };

  return (
    <div className="container">
      {!showResults ? (
        <Quiz onQuizComplete={handleQuizComplete} />
      ) : (
        <div className="Final">Quiz completed! Final score: {score}/10</div>
      )}
    </div>
  );
}

export default App;
