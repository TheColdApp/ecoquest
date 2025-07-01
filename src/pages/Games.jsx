import React, { useState } from 'react'

const items = [
  { name: 'Plastic Bottle', type: 'Recycle' },
  { name: 'Banana Peel', type: 'Compost' },
  { name: 'Glass Jar', type: 'Recycle' },
  { name: 'Apple Core', type: 'Compost' },
  { name: 'Aluminum Can', type: 'Recycle' },
  { name: 'Eggshell', type: 'Compost' },
]

export default function Games() {
  const [score, setScore] = useState(0)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [message, setMessage] = useState('Sort the item! Choose Compost or Recycle.')

  function handleChoice(choice) {
    const currentItem = items[currentIndex]
    if (choice === currentItem.type) {
      setScore(score + 1)
      setMessage('Correct! 🎉')
    } else {
      setMessage(`Oops! The correct answer is ${currentItem.type}.`)
    }
    setTimeout(() => {
      setMessage('Sort the item! Choose Compost or Recycle.')
      setCurrentIndex((currentIndex + 1) % items.length)
    }, 1500)
  }

  return (
    <div className="p-8 max-w-md mx-auto text-center">
      <h2 className="text-3xl font-bold text-green-700 mb-4">♻️ Recycle Sorter Game</h2>
      <p className="mb-6 text-lg">Drag and drop to sort items correctly into Compost or Recycle bins.</p>

      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-xl font-semibold mb-4">Item to sort:</h3>
        <div className="text-2xl font-bold mb-6">{items[currentIndex].name}</div>

        <div className="flex justify-center gap-8 mb-4">
          <button
            onClick={() => handleChoice('Compost')}
            className="bg-yellow-400 hover:bg-yellow-500 text-white px-6 py-3 rounded-lg font-semibold transition"
          >
            Compost
          </button>
          <button
            onClick={() => handleChoice('Recycle')}
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition"
          >
            Recycle
          </button>
        </div>
        <p className="min-h-[2rem] font-semibold">{message}</p>
        <p className="mt-6 font-bold text-lg">Score: {score}</p>
      </div>
    </div>
  )
}
