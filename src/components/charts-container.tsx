import React from 'react'
import CategoryDistributionChart from './category-distribution-chart'
import DifficultyDistributionChart from './difficulty-distribution-chart'

const ChartsContainer = () => {
    return (
        <div className='flex flex-col w-full items-center justify-between gap-10'>
            <div className='w-full'>
                <CategoryDistributionChart/>
            </div>
            <div className='w-full'>
                <DifficultyDistributionChart/>
            </div>
            
        </div>
    )
}

export default ChartsContainer