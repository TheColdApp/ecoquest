import React, { useState } from 'react'

const quizQuestions = [
  {
    question: "Which gas is the main cause of global warming?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    answer: "Carbon Dioxide",
  },
  {
    question: "Which of these is a renewable energy source?",
    options: ["Coal", "Natural Gas", "Solar", "Oil"],
    answer: "Solar",
  },
  {
    question: "What percentage of the Earth's surface is covered by water?",
    options: ["50%", "60%", "70%", "80%"],
    answer: "70%",
  },
  {
    question: "What do bees help to pollinate?",
    options: ["Animals", "Plants", "Rocks", "Water"],
    answer: "Plants",
  },
]

export default function Quizzes() {
  const [currentQ, setCurrentQ] = useState(0)
  const [score, setScore] = useState(0)
  const [showScore, setShowScore] = useState(false)

  function handleAnswer(option) {
    if (option === quizQuestions[currentQ].answer) {
      setScore(score + 1)
    }
    const nextQ = currentQ + 1
    if (nextQ < quizQuestions.length) {
      setCurrentQ(nextQ)
    } else {
      setShowScore(true)
    }
  }

  return (
    <div className="p-8 max-w-xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6 text-green-700">🧠 Eco Quiz</h2>

      {!showScore ? (
        <>
          <div className="mb-4 text-lg font-semibold">{quizQuestions[currentQ].question}</div>
          <div className="flex flex-col gap-4">
            {quizQuestions[currentQ].options.map((opt) => (
              <button
                key={opt}
                onClick={() => handleAnswer(opt)}
                className="bg-green-600 hover:bg-green-700 text-white rounded-lg py-2 font-semibold"
              >
                {opt}
              </button>
            ))}
          </div>
          <div className="mt-6">Question {currentQ + 1} of {quizQuestions.length}</div>
        </>
      ) : (
        <div className="text-xl font-semibold">
          You scored {score} out of {quizQuestions.length}! 🎉
        </div>
      )}
    </div>
  )
}
