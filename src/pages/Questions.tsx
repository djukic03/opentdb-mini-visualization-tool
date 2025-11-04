import { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import type { Question } from '../types/types';
import FetchDataForm from '../components/fetch-data-form';
import OneQuestion from '../components/one-question';
import { filterQuestionsByCategory, getAllCategories } from '../utilities/questions-processing';
import NavBar from '../components/nav-bar';
import { useQuestions } from '../contexts/questions-context';

const Questions = () => {
    const { questions, loading, error, refetch } = useQuestions();
    const [displayedQuestions, setDisplayedQuestions] = useState<Question[]>(questions);
    const [categories, setCategories] = useState<string[]>([]);

    useEffect(() => {
        setDisplayedQuestions(questions);

        setCategories(getAllCategories(questions));
    }, [questions]);

    const selectCategory = (category: string) => {
        if (questions) {
            if (category === "All categories") {
                setDisplayedQuestions(questions);
                return;
            }
            const filteredQuestions = filterQuestionsByCategory(questions, category);
            setDisplayedQuestions(filteredQuestions);
        }
    };

    return (
        <motion.div className='w-5/6 mx-auto' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }}>
            <NavBar/>

            <div className='text center my-15'>
                <h1 className="text-5xl font-bold mb-3 bg-gradient-to-r from-base-content to-primary bg-clip-text text-transparent">Play Trivia</h1>
                <p className='text-gray-400 text-lg'>A little extra fun feature</p>
            </div>

            <FetchDataForm categories={categories} handleQuestionFetch={refetch} handleCategorySelect={selectCategory}/>
            
            {loading && <span className="loading loading-dots loading-md mt-10"></span>}
            {error && 
                <div role="alert" className="alert alert-error fixed bottom-5 left-1/2 -translate-x-1/2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Error! {error}! Try again in a few seconds</span>
                </div>
            }
            {displayedQuestions && !loading && !error && (
                <div className='pb-10'>
                    <div className='flex items-center justify-between mb-6'>
                        <h2 className='text-2xl font-bold text-base-content flex items-center'>
                            <svg className='w-6 h-6 mr-2 text-blue-400' fill='none' stroke='green' viewBox='0 0 24 24'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' />
                            </svg>
                            Questions
                        </h2>
                        <span className='text-sm text-gray-400 bg-neutral-800 px-4 py-2 rounded-full border border-neutral-700'>
                            Showing {displayedQuestions.length} of {questions.length}
                        </span>
                    </div>
                    <div className='space-y-4'>
                        {displayedQuestions.map((question) => (
                            <OneQuestion key={question.question} question={question} />
                        ))}
                    </div>
                </div>
            )}
        </motion.div>
    )
}

export default Questions