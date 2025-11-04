import './App.css'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Questions from './pages/Questions'
import Charts from './pages/Charts'
import { QuestionsProvider } from './contexts/questions-context'

function App() {
  return (
    <QuestionsProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/play-trivia" element={<Questions/>} />
          <Route path="/charts" element={<Charts/>} />
        </Routes>
      </HashRouter>
    </QuestionsProvider>
  )
}

export default App
