import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'
import { useQuestions } from '../contexts/questions-context';
import { groupQuestionsByCategory } from '../utilities/questions-processing';
import { ChartPie } from 'lucide-react';
import CustomLegend from './custom-legend';

const CategoryDistributionChart = ({ isAnimationActive = true }: { isAnimationActive?: boolean }) => {
    const { questions } = useQuestions();
    const pieChartData = groupQuestionsByCategory(questions);

    return (
        <div className="bg-neutral/50 p-8 rounded-2xl shadow-2xl border border-neutral-700 hover:border-primary transition-colors place-content-center">
            <div className='flex items-center gap-4 mb-6'>
                <ChartPie className="w-8 h-8"/>
                <h2 className="text-2xl font-bold text-gray-100">Category Distribution</h2>
            </div>
            <ResponsiveContainer width="100%" height={450}>
                <PieChart>
                    <Pie
                        data={pieChartData}
                        dataKey="count"
                        nameKey="category"
                        cx="50%"
                        cy="50%"
                        outerRadius="70%"
                        label={( props: any ) => `${(props.percent * 100).toFixed(0)}%` }
                        labelLine={false}
                        isAnimationActive={isAnimationActive}
                    >
                        {pieChartData.map((index) => (
                            <Cell key={`cell-${index}`} fill={`#${Math.floor(Math.random() * 16777215).toString(16)}`}/>
                        ))}
                    </Pie>
                    <Tooltip 
                        contentStyle={{ 
                            backgroundColor: '#1b1618', 
                            border: '1px solid #404040', 
                            borderRadius: '8px',
                            padding: '10px'
                        }}
                        itemStyle={{color: "#ffff"}}
                    />
                    <Legend
                        verticalAlign="bottom"
                        align="center"
                        iconType='circle'
                        wrapperStyle={{ paddingTop: '20px' }}
                        content={<CustomLegend/>}
                    />
                </PieChart>
            </ResponsiveContainer>
        </div>
        
    )
}

export default CategoryDistributionChart