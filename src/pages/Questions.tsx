import React, { useEffect, useState } from 'react'
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
            {displayedQuestions && !loading && !error && 
                displayedQuestions.map((question) => (
                    <OneQuestion key={question.question} question={question} />
                ))
            }
        </motion.div>
    )
}

export default Questions