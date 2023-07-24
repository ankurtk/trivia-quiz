// src/components/Quiz.tsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_ENDPOINT, TOTAL_QUESTIONS } from "../config";

interface Question {
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

interface QuizProps {
  onQuizComplete: (finalScore: number) => void;
}

const Quiz: React.FC<QuizProps> = ({ onQuizComplete }) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [questionsAnswered, setQuestionsAnswered] = useState<number>(0);

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      const response = await axios.get(API_ENDPOINT, {
        params: {
          amount: TOTAL_QUESTIONS,
          type: "multiple",
        },
      });
      setQuestions(response.data.results);
      console.log(setQuestions);
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
  };

  const handleAnswerSelect = (answer: string) => {
    if (!selectedAnswer) {
      setSelectedAnswer(answer);
      if (answer === questions[currentQuestion].correct_answer) {
        setScore((prevScore) => prevScore + 1);
      }
      setQuestionsAnswered(
        (prevQuestionsAnswered) => prevQuestionsAnswered + 1
      );
    }
  };

  const handleNextQuestion = () => {
    setSelectedAnswer(null);
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
  };

  useEffect(() => {
    if (questionsAnswered === TOTAL_QUESTIONS) {
      onQuizComplete(score);
      setShowResult(true);
    }
  }, [questionsAnswered, score, onQuizComplete]);

  if (showResult) {
    return <div>Quiz completed! Final score: {score}/10</div>;
  }

  if (questions.length === 0) {
    return <div>Loading...</div>;
  }

  const currentQuestionData = questions[currentQuestion];
  const allAnswers = [
    ...currentQuestionData.incorrect_answers,
    currentQuestionData.correct_answer,
  ];
  const shuffledAnswers = shuffleArray(allAnswers);

  return (
    <div>
      <h1>Question {currentQuestion + 1}</h1>
      <p>{currentQuestionData.question}</p>
      {shuffledAnswers.map((answer) => {
        const isCorrect = answer === currentQuestionData.correct_answer;
        const isSelected = answer === selectedAnswer;
        return (
          <button
            key={answer}
            onClick={() => handleAnswerSelect(answer)}
            className={`answer-button ${
              isSelected
                ? isCorrect
                  ? "selected-correct"
                  : "selected-incorrect"
                : ""
            }`}
            disabled={selectedAnswer !== null}
          >
            {answer}
          </button>
        );
      })}
      {selectedAnswer && (
        <div>
          {selectedAnswer === currentQuestionData.correct_answer ? (
            <p className="answer-feedback correct">Correct!</p>
          ) : (
            <p className="answer-feedback incorrect">
              Incorrect! The correct answer is{" "}
              {currentQuestionData.correct_answer}.
            </p>
          )}
          <button onClick={handleNextQuestion} className="next-question-button">
            Next Question
          </button>
        </div>
      )}
    </div>
  );
};

const shuffleArray = (array: string[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export default Quiz;
