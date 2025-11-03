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
        <div className='bg-neutral-800 p-6 rounded-2xl shadow-2xl border border-neutral-700 mb-8'>
            <div className='flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4'>
                
                <div className='flex-1 w-full lg:w-auto'>
                    <label className='block text-sm font-medium text-gray-300 mb-2'>
                        <span className='flex items-center'>
                            <svg className='w-4 h-4 mr-2' fill='none' stroke='green' viewBox='0 0 24 24'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z' />
                            </svg>
                            Filter by Category
                        </span>
                    </label>
                    <select 
                        value={selectedCategory} 
                        className='select select-neutral w-full bg-neutral-700'
                        onChange={handleSelect}
                    >
                        <option>All categories</option>
                        {categories && categories.map((category, index) => (
                            <option key={index}>{category}</option>
                        ))}
                    </select>
                </div>

                <form onSubmit={handleSubmit} className='flex-1 w-full lg:w-auto'>
                    <label className='block text-sm font-medium text-gray-300 mb-2'>
                        <span className='flex items-center'>
                            <svg className='w-4 h-4 mr-2' fill='none' stroke='green' viewBox='0 0 24 24'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15' />
                            </svg>
                            Fetch New Set of Questions
                        </span>
                    </label>
                    <div className='flex gap-2'>
                        <input 
                            className='input input-neutral flex-1 bg-neutral-700'
                            type='number'
                            value={amount}
                            onChange={handleChange}
                            placeholder='Amount (1-50)'
                            required
                            min={1}
                            max={50}
                        />
                        <button 
                            type='submit' 
                            className='btn btn-neutral font-semibold px-6'
                            disabled={isDisabled}
                        >
                            {isDisabled ? (
                                <span className='flex items-center gap-2'>
                                    <span className='loading loading-spinner loading-sm'></span>
                                    Wait
                                </span>
                            ) : (
                                <span className='flex items-center gap-2'>
                                    <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15' />
                                    </svg>
                                    Refetch
                                </span>
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default FetchDataForm