import React, { useState } from 'react'
import { getAllCategories } from '../utilities/questions-processing';
import type { Question } from '../types/types';

interface Props {
    categories: string[] | null,
    handleQuestionFetch: (amount: number) => void
}

const FetchDataForm = ({categories, handleQuestionFetch}: Props) => {
    const [amount, setAmount] = useState(0);
    const [isDisabled, setIsDisabled] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        handleQuestionFetch(amount);

        setIsDisabled(true);
        setTimeout(() => {
            setIsDisabled(false);
        }, 5000);
    }

    return (
        <div className='flex justify-between items-center mt-20'>
            <select defaultValue="Server location" className="select select-neutral">
                <option disabled={true}>All categories</option>
                {categories && categories.map((category, index) => (
                    <option key={index}>{category}</option>
                ))}
            </select>

            <form onSubmit={handleSubmit}className='flex w-1/2 justify-end items-center '>
                <input 
                    className='input input-neutral'
                    type='number'
                    onChange={(e) => setAmount(parseInt(e.target.value))}
                    placeholder="Number of questions to fetch"
                    required
                    min={1}
                    max={50}
                />
                
                <button type='submit' className='btn btn-neutral ml-2' disabled={isDisabled}>Refetch</button>
            </form>
        </div>
        
        
    )
}

export default FetchDataForm