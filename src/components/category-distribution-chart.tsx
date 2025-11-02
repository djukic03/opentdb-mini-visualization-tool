import React, { useEffect, useState } from 'react'
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'
import { useQuestions } from '../contexts/questions-context';
import { groupQuestionsByCategory } from '../utilities/questions-processing';

const CategoryDistributionChart = ({ isAnimationActive = true }: { isAnimationActive?: boolean }) => {
    const { questions } = useQuestions();
    const pieChartData = groupQuestionsByCategory(questions);

    return (
        <ResponsiveContainer width="100%" height={500}>
            <PieChart>
                <Pie
                    data={pieChartData}
                    dataKey="count"
                    nameKey="category"
                    cx="50%"
                    cy="50%"
                    outerRadius={180}
                    label={({ category, count}) => `${category}: ${count}`}
                    isAnimationActive={isAnimationActive}
                >
                    {pieChartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={`#${Math.floor(Math.random() * 16777215).toString(16)}`}/>
                    ))}
                </Pie>
                <Tooltip/>
                <Legend/>
            </PieChart>
        </ResponsiveContainer>
    )
}

export default CategoryDistributionChart