import React from 'react'
import { useQuestions } from '../contexts/questions-context';

const QuestionsTable = () => {
    const { questions } = useQuestions();
    
    return (
        <div className='bg-neutral/50 border border-neutral rounded-lg backdrop-blur-sm overflow-hidden flex-1 min-h-0 hover:border-primary'>
            <div className='overflow-x-auto max-h-[600px] overflow-y-auto'>
                <table className='w-full'>
                    <thead className='sticky top-0 bg-neutral/90 backdrop-blur-sm'>
                        <tr className='border-b border-slate-700'>
                            <th className='text-left text-slate-400 font-medium text-sm p-4 whitespace-nowrap'>#</th>
                            <th className='text-left text-slate-400 font-medium text-sm p-4 whitespace-nowrap'>Category</th>
                            <th className='text-left text-slate-400 font-medium text-sm p-4 whitespace-nowrap'>Type</th>
                            <th className='text-left text-slate-400 font-medium text-sm p-4 whitespace-nowrap'>Difficulty</th>
                            <th className='text-left text-slate-400 font-medium text-sm p-4 whitespace-nowrap'>Question</th>
                        </tr>
                    </thead>
                    <tbody>
                        {questions.map((question, index) => (
                            <tr key={index} className='border-b border-slate-700/50 hover:bg-slate-700/30 transition-colors'>
                                <td className='text-slate-300 text-sm p-4 whitespace-nowrap'>{index + 1}</td>
                                <td className='text-slate-300 text-sm p-4 '>{question.category}</td>
                                <td className='text-slate-300 text-sm p-4 whitespace-nowrap'>{question.type}</td>
                                <td className='text-slate-300 text-sm p-4 whitespace-nowrap'>{question.difficulty}</td>
                                <td className='text-slate-300 text-sm p-4'>{question.question}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default QuestionsTable