import React from 'react'
import { useQuestions } from '../contexts/questions-context'
import { groupQuestionsByDifficulty } from '../utilities/questions-processing';
import { Bar, BarChart, CartesianGrid, Cell, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const COLORS = {Easy: '#10B981', Medium: '#F59E0B', Hard: '#EF4444'};

const DifficultyDistributionChart = ({ isAnimationActive = true }) => {
    const { questions } = useQuestions();
    const barChartData = groupQuestionsByDifficulty(questions);
    
    return (
        <ResponsiveContainer width="100%" height={400}>
            <BarChart data={barChartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="difficulty" />
                <YAxis width="auto" />
                <Tooltip />
                <Legend />
                <Bar dataKey="count" fill="#8884d8" isAnimationActive={isAnimationActive}>
                    {barChartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[entry.difficulty as keyof typeof COLORS]}/>
                    ))}
                </Bar>
            </BarChart>
        </ResponsiveContainer>
    )
}

export default DifficultyDistributionChart