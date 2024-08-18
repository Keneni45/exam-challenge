import React, { useState, useEffect } from "react";

const MultipleChoiceExam = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [totalTime, setTotalTime] = useState(0);

  const questions = [
    {
      question: "What is the capital of France?",
      image: "https://example.com/eiffel-tower.jpg",
      answers: ["A. Paris", "B. London", "C. Berlin", "D. Madrid"],
      correctAnswer: 0,
    },
    {
      question: "What is the largest ocean on Earth?",
      image: "https://example.com/pacific-ocean.jpg",
      answers: [
        "A. Atlantic Ocean",
        "B. Indian Ocean",
        "C. Arctic Ocean",
        "D. Pacific Ocean",
      ],
      correctAnswer: 3,
    },
  ];
  const MathQuestion = [
    {
      image1: "🍌",
      image2: "🍉",
      image3: "🍇",
      image4: "🍊",
      image5: "🥭",
      operation: "+",
      operation: "-",
      answers: ["A. 1000", "B. 800", "C. 400", "D. 200"],
    },
  ];

  useEffect(() => {
    setStartTime(new Date().getTime());
  }, []);

  const handleAnswerSelect = (answerIndex) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNextQuestion = () => {
    setEndTime(new Date().getTime());
    const timeTaken = (endTime - startTime) / 1000; // Calculate time taken in seconds
    setTotalTime((prevTotalTime) => prevTotalTime + timeTaken);
    console.log(
      `Time taken for question ${currentQuestion + 1}: ${timeTaken} seconds`
    );
    setSelectedAnswer(null);
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    setStartTime(new Date().getTime());
  };

  if (currentQuestion >= questions.length) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold mb-4">Exam Completed</h1>
        <p>Total time taken: {totalTime.toFixed(2)} seconds</p>
        <p>Thank you for taking the exam!</p>
      </div>
    );
  }

  const currentQuestionData = questions[currentQuestion];

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">
        {currentQuestionData.question}
      </h1>
      <img
        src={currentQuestionData.image}
        alt={`Question ${currentQuestion + 1}`}
        className="mb-4 max-w-md"
      />
      <div className="flex grid grid-cols-2 gap-4 mb-4">
        {currentQuestionData.answers.map((answer, index) => (
          <button
            key={index}
            className={`bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-md ${
              selectedAnswer === index ? "bg-gray-300" : ""
            }`}
            onClick={() => handleAnswerSelect(index)}>
            {answer}
          </button>
        ))}
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
        onClick={handleNextQuestion}>
        Next Question
      </button>
    </div>
  );
};

export default MultipleChoiceExam;
