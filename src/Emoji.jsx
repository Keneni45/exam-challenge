import React, { useState, useEffect } from "react";

const MultipleChoiceExam = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [totalTime, setTotalTime] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      question: "What is the capital of France?",
      image: "https://example.com/eiffel-tower.jpg",
      answers: ["A. Paris", "B. London", "C. Berlin", "D. Madrid"],
      correctAnswer: 0,
    },
    {
      question: "What is the capital of Ethiopia?",
      image: "https://example.com/eiffel-tower.jpg",
      answers: ["A. Paris", "B. London", "C. Addis Ababa", "D. Madrid"],
      correctAnswer: 2,
    },
    {
      question: "What is the capital of Kenya?",
      image: "https://example.com/eiffel-tower.jpg",
      answers: ["A. Paris", "B. Nairobi", "C. Berlin", "D. Madrid"],
      correctAnswer: 1,
    },
    {
      question: "What is the capital of Uganda?",
      image: "https://example.com/eiffel-tower.jpg",
      answers: ["A. Kampala", "B. London", "C. Berlin", "D. Madrid"],
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
    {
      type: "math",
      image1: "🍌",
      image2: "🍉",
      image3: "🍇",
      image4: "🍊",
      image5: "🥭",
      operation1: "+",
      operation2: "-",
      answers: ["A. 1200", "B. 1300", "C. 1400", "D. 1500"],
      correctAnswer: 3,
    },
    {
      type: "math",
      image1: "🍌",
      image2: "🍉",
      image3: "🍇",
      image4: "🍊",
      image5: "🥭",
      operation1: "+",
      operation2: "-",
      answers: ["A. 1200", "B. 1300", "C. 1400", "D. 1500"],
      correctAnswer: 3,
    },
    {
      type: "math",
      image1: "🍌",
      image2: "🍉",
      image3: "🍇",
      image4: "🍊",
      image5: "🥭",
      operation1: "+",
      operation2: "-",
      operation3: "=",
      answers: ["A. 1200", "B. 1300", "C. 1400", "D. 1500"],
      correctAnswer: 3,
    },
  ];

  useEffect(() => {
    setStartTime(new Date().getTime());
  }, []);

  const handleAnswerSelect = (answerIndex) => {
    setSelectedAnswer(answerIndex);
  };
  const handleBack = () => {
    window.history.back();
  };
  const handleNextQuestion = () => {
    setEndTime(new Date().getTime());
    const timeTaken = (endTime - startTime) / 1000; // Calculate time taken in seconds
    setTotalTime((prevTotalTime) => prevTotalTime + timeTaken);

    // Check if the answer is correct

    const currentQuestionData = questions[currentQuestion];
    if (
      selectedAnswer === currentQuestionData.correctAnswer ||
      (currentQuestionData.type === "math" &&
        parseInt(currentQuestionData.answers[selectedAnswer].slice(2)) ===
          currentQuestionData.result)
    ) {
      setScore((prevScore) => prevScore + 1);
    }

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
        <p>
          Your score: {score} / {questions.length}
        </p>
        <p>Thank you for taking the exam!</p>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md mt-4"
          onClick={handleBack}>
          Back to Previous Page
        </button>
      </div>
    );
  }

  const currentQuestionData = questions[currentQuestion];

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="bg-white shadow-md rounded-lg p-6 mb-8 w-full max-w-md">
        <h1 className="text-4xl font-bold mb-4">
          {currentQuestionData.question}
        </h1>
        {currentQuestionData.type !== "math" && (
          <div className="flex justify-center mb-4">
            <img
              src={currentQuestionData.image}
              alt={`Question ${currentQuestion + 1}`}
              className="max-w-full h-auto rounded-md"
            />
          </div>
        )}
        {currentQuestionData.type === "math" && (
          <div class="card">
            <div class="flex items-center justify-center ">
              <div class="card w-800 bg-base-100 shadow-xl">
                <span class="text-2xl mr-1">{currentQuestionData.image3}</span>
                <span class="text-2xl mr-1">
                  {currentQuestionData.operation1}
                </span>
                <span class="text-2xl mr-1">
                  {currentQuestionData.image3}
                  <span class="text-2xl mr-1">
                    {currentQuestionData.operation1}
                  </span>
                </span>
                <span class="text-2xl mr-1">
                  {currentQuestionData.image3}
                  <span class="text-2xl mr-1">
                    {currentQuestionData.operation1}
                  </span>
                </span>
                <span class="text-2xl mr-1">
                  {currentQuestionData.image3}
                  <span class="text-2xl mr-1">
                    {currentQuestionData.operation3}
                  </span>
                </span>
                <span class="text-4xl mr-1">= </span>
                {/* <span class="text-4xl mr-2">{currentQuestionData.image2}</span> */}
                <span class="text-4xl mr-1">1000</span>
              </div>
            </div>

            <div class="flex items-center justify-center ">
              <div class="card w-800 bg-base-100 shadow-xl">
                <span class="text-2xl mr-1">{currentQuestionData.image1}</span>
                <span class="text-2xl mr-1">
                  {currentQuestionData.operation1}
                </span>
                <span class="text-2xl mr-1">
                  {currentQuestionData.image3}
                  <span class="text-2xl mr-1">
                    {currentQuestionData.operation1}
                  </span>
                </span>
                <span class="text-2xl mr-1">{currentQuestionData.image3}</span>
                <span class="text-4xl mr-1">= </span>

                <span class="text-4xl mr-1">500</span>
              </div>
            </div>
            <div class="flex items-center justify-center ">
              <div class="card w-800 bg-base-100 shadow-xl">
                <span class="text-2xl mr-1">{currentQuestionData.image2}</span>
                <span class="text-2xl mr-1">
                  {currentQuestionData.operation1}
                </span>
                <span class="text-2xl mr-1">
                  {currentQuestionData.image3}
                  <span class="text-2xl mr-1">
                    {currentQuestionData.operation1}
                  </span>
                </span>
                <span class="text-2xl mr-1">{currentQuestionData.image3}</span>
                <span class="text-4xl mr-1">= </span>

                <span class="text-4xl mr-1">500</span>
              </div>
            </div>
            <div class="flex items-center justify-center ">
              <div class="card w-800 bg-base-100 shadow-xl">
                <span class="text-2xl mr-1">{currentQuestionData.image3}</span>
                <span class="text-2xl mr-1">
                  {currentQuestionData.operation1}
                </span>
                <span class="text-2xl mr-1">
                  {currentQuestionData.image3}
                  <span class="text-2xl mr-1">
                    {currentQuestionData.operation1}
                  </span>
                </span>
                <span class="text-2xl mr-1">
                  {currentQuestionData.image3}
                  <span class="text-2xl mr-1">
                    {currentQuestionData.operation1}
                  </span>
                </span>
                <span class="text-2xl mr-1">
                  {currentQuestionData.image3}
                  <span class="text-2xl mr-1">
                    {currentQuestionData.operation3}
                  </span>
                </span>
                <span class="text-4xl mr-1">= </span>
                {/* <span class="text-4xl mr-2">{currentQuestionData.image2}</span> */}
                <span class="text-4xl mr-1">?</span>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4 w-full max-w-md">
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
