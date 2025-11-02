import React, { useEffect, useState } from 'react'
import type { Question } from '../types/types';
import FetchDataForm from '../components/fetch-data-form';
import { fetchQuestions } from '../services/opentdbAPI';
import OneQuestion from '../components/one-question';
import { getAllCategories } from '../utilities/questions-processing';

const Questions = () => {
    const [questions, setQuestions] = useState<Question[] | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const [categories, setCategories] = useState<string[]>([]);

    const handleQuestionFetch = (amount: number) => {
        setLoading(true);
        setError(null);
        fetchQuestions(amount)
            .then(questions => {
                setQuestions(questions);
            })
            .catch(error => {
                console.error('Error:', error.message);
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
                
            });
        getCategories();
    };

    useEffect(() => {
        handleQuestionFetch(50);
    }, []);

    const getCategories = () => {
        if (questions) {
            console.log(questions.length);
            setCategories(getAllCategories(questions));
        } else {
            console.log("No questions");
            setCategories([]);
        }
    };

    return (
        <div>
            <FetchDataForm categories={categories} handleQuestionFetch={handleQuestionFetch}/>
            {loading && <span className="loading loading-dots loading-md mt-10"></span>}
            {error && 
                <div role="alert" className="alert alert-error fixed bottom-5 left-1/2 -translate-x-1/2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Error! {error}</span>
                </div>
            }
            {questions && !loading && !error && 
                questions.map((question, index) => (
                    <OneQuestion key={index} question={question} />
                ))
            }
        </div>
    )
}

export default Questions