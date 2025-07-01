import { Routes, Route, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import Facts from './pages/Facts'
import MoreFacts from './pages/MoreFacts'
import Games from './pages/Games'
import Quizzes from './pages/Quizzes'
import Charts from './pages/Charts'
import Actions from './pages/Actions'
import About from './pages/About'

export default function App() {
  return (
    <div className="min-h-screen bg-green-50 text-gray-900">
      <nav className="bg-green-700 text-white p-4 flex flex-wrap justify-center gap-4 sticky top-0 z-10">
        <NavLink to="/" className={({ isActive }) => isActive ? "underline" : ""}>Home</NavLink>
        <NavLink to="/facts" className={({ isActive }) => isActive ? "underline" : ""}>Facts</NavLink>
        <NavLink to="/more-facts" className={({ isActive }) => isActive ? "underline" : ""}>More Facts</NavLink>
        <NavLink to="/games" className={({ isActive }) => isActive ? "underline" : ""}>Games</NavLink>
        <NavLink to="/quizzes" className={({ isActive }) => isActive ? "underline" : ""}>Quizzes</NavLink>
        <NavLink to="/charts" className={({ isActive }) => isActive ? "underline" : ""}>Charts</NavLink>
        <NavLink to="/actions" className={({ isActive }) => isActive ? "underline" : ""}>Actions</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "underline" : ""}>About</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/facts" element={<Facts />} />
        <Route path="/more-facts" element={<MoreFacts />} />
        <Route path="/games" element={<Games />} />
        <Route path="/quizzes" element={<Quizzes />} />
        <Route path="/charts" element={<Charts />} />
        <Route path="/actions" element={<Actions />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}
