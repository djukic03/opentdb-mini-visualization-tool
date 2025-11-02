import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Questions from './pages/Questions'
import Charts from './pages/Charts'
import { QuestionsProvider } from './contexts/questions-context'

function App() {
  return (
    <QuestionsProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/questions" element={<Questions/>} />
          <Route path="/charts" element={<Charts/>} />
        </Routes>
      </BrowserRouter>
    </QuestionsProvider>
  )
}

export default App
