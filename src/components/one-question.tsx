import { useMemo, useState } from 'react'
import type { Question } from '../types/types'

interface Props {
    question: Question   
}

const OneQuestion = ({question}: Props) => {
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    
    const allAnswers = useMemo(() => {
        return [...question.incorrect_answers, question.correct_answer].sort(() => Math.random() - 0.5);
    }, [question]);

    const getDifficultyColor = () => {
        switch (question.difficulty) {
            case 'easy':
                return 'text-green-600 bg-green-100';
            case 'medium':
                return 'text-yellow-600 bg-yellow-100';
            case 'hard':
                return 'text-red-600 bg-red-100';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    const getAnswerClass = (answer: string) => {
        if (!selectedAnswer) {
            return 'bg-neutral-700 hover:bg-neutral-600 border-primary-700 text-gray-100';
        }
    
        if (answer === question.correct_answer) {
            return 'bg-green-600 text-white border-green-600';
        }
    
        if (answer === selectedAnswer && answer !== question.correct_answer) {
            return 'bg-red-600 text-white border-red-600';
        }
    
        return 'bg-neutral-800 border-primary-700 text-neutral-content-600';
    };

    const handleAnswerClick = (answer: string) => {
        setSelectedAnswer(answer);
    };

    return (
        <div className='w-full mx-auto p-3 sm:p-4 bg-neutral-800 rounded-lg shadow-xl border border-primary-700 mt-5'>
            <div className="mb-2 flex items-center justify-between flex-wrap gap-1">
                <span className="text-xs text-gray-400">
                    Category: {question.category}
                </span>
                <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${getDifficultyColor()}`}>
                    {question.difficulty}
                </span>
            </div>
            
            <h2 className="text-sm sm:text-base font-semibold mb-3 text-gray-100">
                {question.question}
            </h2>

            <div className={`grid ${allAnswers.length === 2 ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'} gap-2`}>
                {allAnswers.map((answer, index) => (
                    <button 
                        key={index}
                        className={`w-full px-2 sm:px-3 py-2 text-xs sm:text-sm text-center border-2 rounded transition-all ${getAnswerClass(answer)} ${selectedAnswer === null ? 'cursor-pointer' : 'cursor-not-allowed'}`}
                        onClick={() => handleAnswerClick(answer)}
                        disabled={selectedAnswer !== null}
                    >
                        {answer}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default OneQuestion