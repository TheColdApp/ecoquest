import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="p-10 max-w-4xl mx-auto text-center">
      <h1 className="text-6xl font-extrabold text-green-800 mb-6 drop-shadow-lg">
        🌍 Welcome to <span className="text-green-600">EcoQuest</span>!
      </h1>
      <p className="text-xl text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed">
        Dive into the wonders of ecology with exciting games, mind-blowing facts, interactive quizzes, and insightful charts.
        Let’s explore how we can protect our planet — and have fun doing it!
      </p>
      <div className="flex flex-wrap justify-center gap-6">
        <Link
          to="/facts"
          className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg transform hover:scale-105 transition"
          aria-label="Explore Fun Ecology Facts"
        >
          🌿 Fun Facts
        </Link>
        <Link
          to="/games"
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg transform hover:scale-105 transition"
          aria-label="Play Ecology Games"
        >
          🎮 Games
        </Link>
        <Link
          to="/quizzes"
          className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg transform hover:scale-105 transition"
          aria-label="Take Ecology Quizzes"
        >
          🧠 Quizzes
        </Link>
      </div>
      <p className="mt-12 italic text-gray-600">Let's make a difference, one step at a time! 🌱</p>
    </div>
  )
}
