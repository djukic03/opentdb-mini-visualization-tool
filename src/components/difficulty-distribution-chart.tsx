import React from 'react'
import { useQuestions } from '../contexts/questions-context'
import { groupQuestionsByDifficulty } from '../utilities/questions-processing';
import { Bar, BarChart, CartesianGrid, Cell, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { ChartColumnBig } from 'lucide-react';

const COLORS = {Easy: '#10B981', Medium: '#F59E0B', Hard: '#EF4444'};

const DifficultyDistributionChart = ({ isAnimationActive = true }) => {
    const { questions } = useQuestions();
    const barChartData = groupQuestionsByDifficulty(questions);
    
    return (
        <div className="flex-1 bg-neutral/50 p-8 rounded-2xl shadow-2xl border border-neutral-700 hover:border-primary transition-colors place-content-center">
            <div className='flex items-center gap-4 mb-6'>
                <ChartColumnBig className="w-8 h-8"/>
                <h2 className="text-2xl font-bold text-gray-100">Difficulty Distribution</h2>
            </div>
            <ResponsiveContainer width="100%" height={350}>
                <BarChart data={barChartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="difficulty" />
                    <YAxis width="auto" />
                    <Tooltip 
                        contentStyle={{ 
                            backgroundColor: '#1b1618', 
                            border: '1px solid #404040', 
                            borderRadius: '8px',
                            padding: '10px'
                        }}
                        labelStyle={{ color: '#f3f4f6', fontWeight: 'bold' }}
                        cursor={{ fill: 'rgba(255, 255, 255, 0.05)' }}
                    />
                    <Bar dataKey="count" radius={[8, 8, 0, 0]} fill='#ffffff' isAnimationActive={isAnimationActive}>
                        {barChartData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[entry.difficulty as keyof typeof COLORS]}/>
                        ))}
                    </Bar>
                    
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default DifficultyDistributionChart