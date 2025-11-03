import React from 'react'
import CategoryDistributionChart from './category-distribution-chart'
import DifficultyDistributionChart from './difficulty-distribution-chart'
import SummaryCards from './summary-cards'
import QuestionsTable from './questions-table'
import DifficultiesByCategoryChart from './difficulties-by-catogory-chart'

const ChartsLayout = () => {
    return (
        <div>
            <SummaryCards/>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch'>

                <div className='lg:col-span-2 flex flex-col gap-6'>
                    <QuestionsTable/>
                    <DifficultiesByCategoryChart/>
                </div>
                
                <div className='lg:col-span-1 flex flex-col gap-6'>
                    <CategoryDistributionChart/>
                    <DifficultyDistributionChart/>
                </div>
                
            </div>
        </div>
        
    )
}

export default ChartsLayout