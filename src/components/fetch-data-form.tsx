import React, { useState } from 'react'
import { getAllCategories } from '../utilities/questions-processing';
import type { Question } from '../types/types';

interface Props {
    categories: string[] | null,
    handleQuestionFetch: (amount: number) => void,
    handleCategorySelect: (category: string) => void
}

const FetchDataForm = ({categories, handleQuestionFetch, handleCategorySelect}: Props) => {
    const [amount, setAmount] = useState('');
    const [isDisabled, setIsDisabled] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('All categories');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        handleQuestionFetch(parseInt(amount));

        setIsDisabled(true);
        setTimeout(() => {
            setIsDisabled(false);
        }, 5000);

        setSelectedCategory('All categories');

        setAmount('');
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value !== null ) {
            setAmount(e.target.value);
        }
    }

    const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedCategory(e.target.value);
        handleCategorySelect(e.target.value);
    }

    return (
        <div className='flex justify-between items-center w-full'>
            <select value={selectedCategory} className="select select-neutral" onChange={handleSelect}>
                <option>All categories</option>
                {categories && categories.map((category, index) => (
                    <option key={index}>{category}</option>
                ))}
            </select>

            <form onSubmit={handleSubmit}className='flex w-1/2 justify-end items-center '>
                <input 
                    className='input input-neutral'
                    type='number'
                    value={amount}
                    onChange={handleChange}
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