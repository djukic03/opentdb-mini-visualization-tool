import { useQuestions } from '../contexts/questions-context';
import { getCategoryDifficultyData } from '../utilities/questions-processing';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { ChartBar } from 'lucide-react';

const DifficultiesByCategoryChart = () => {
    const { questions } = useQuestions();

    const barChartData = getCategoryDifficultyData(questions);

    return (
        <div className="bg-neutral/50 p-8 rounded-2xl shadow-2xl border border-neutral-700 hover:border-primary transition-colors place-content-center">
            <div className="flex items-center gap-4 mb-6">
                <ChartBar className="w-8 h-8"/>
                <h2 className="text-2xl font-bold text-gray-100">Category Difficulty Analysis</h2>
            </div>
            <ResponsiveContainer width="100%" height={400}>
                <BarChart data={barChartData} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis 
                        type="number"
                        stroke="#9ca3af"
                        style={{ fontSize: '12px' }}
                    />
                    <YAxis 
                        type="category"
                        dataKey="category" 
                        stroke="#9ca3af"
                        style={{ fontSize: '12px' }}
                        width={150}
                    />
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
                    <Legend />
                    <Bar dataKey="easy" stackId="a" fill="#10B981" name="Easy" />
                    <Bar dataKey="medium" stackId="a" fill="#F59E0B" name="Medium" />
                    <Bar dataKey="hard" stackId="a" fill="#EF4444" name="Hard" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default DifficultiesByCategoryChart