import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Questions from './pages/Questions'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/questions" element={<Questions/>} />
          <Route path="/categories" element={<p>Categories</p>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
