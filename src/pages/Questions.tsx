import React, { useEffect, useState } from 'react'
import type { Question } from '../types/types';
import FetchDataForm from '../components/fetch-data-form';
import { fetchQuestions } from '../services/opentdbAPI';
import OneQuestion from '../components/one-question';
import { filterQuestionsByCategory, getAllCategories } from '../utilities/questions-processing';

const Questions = () => {
    const [questions, setQuestions] = useState<Question[] | null>(null);
    const [displayedQuestions, setDisplayedQuestions] = useState<Question[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const [categories, setCategories] = useState<string[]>([]);

    const handleQuestionFetch = (amount: number) => {
        setLoading(true);
        setError(null);
        fetchQuestions(amount)
            .then(questions => {
                setQuestions(questions);
                setDisplayedQuestions(questions);
            })
            .catch(error => {
                console.error('Error:', error.message);
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    useEffect(() => {
        handleQuestionFetch(50);
    }, []);

    useEffect(() => {
        getCategories();
    }, [questions]);

    const getCategories = () => {
        if (questions) {
            setCategories(getAllCategories(questions));
        } else {
            setCategories([]);
        }
    };

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
        <div className='w-5/6 mx-auto mt-20'>
            <FetchDataForm categories={categories} handleQuestionFetch={handleQuestionFetch} handleCategorySelect={selectCategory}/>
            {loading && <span className="loading loading-dots loading-md mt-10"></span>}
            {error && 
                <div role="alert" className="alert alert-error fixed bottom-5 left-1/2 -translate-x-1/2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Error! {error}</span>
                </div>
            }
            {displayedQuestions && !loading && !error && 
                displayedQuestions.map((question) => (
                    <OneQuestion key={question.question} question={question} />
                ))
            }
        </div>
    )
}

export default Questions