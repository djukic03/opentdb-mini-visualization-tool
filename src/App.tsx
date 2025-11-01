import { useEffect, useState } from 'react'
import './App.css'
import type { Question } from './types/types'
import { fetchQuestions } from './services/opentdbAPI'
import { groupQuestionsByCategory, groupQuestionsByDifficulty } from './utilities/questions-processing'

function App() {
  const [questions, setQuestions] = useState<Question[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchQuestions()
      .then(questions => {
        console.log('Fetched:', questions.length);
        setQuestions(questions);
      })
      .catch(error => {
        console.error('Error:', error.message);
        setError(error.message);
      })
      .finally(() => setLoading(false));
  }, []);


  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {questions && (
        questions.map((question, index) => (
          <div key={index} style={{ display: 'flex', justifyContent: 'space-between'}}>
            <p>{question.question}</p>
            <p>{question.category}</p>
            <p>{question.difficulty}</p>
            <p>{question.correct_answer}</p>
          </div>
        ))
      )}
      {(
        console.log( groupQuestionsByDifficulty(questions || [])),
        console.log( groupQuestionsByCategory(questions || []))
      )}
    </>
  )
}

export default App
