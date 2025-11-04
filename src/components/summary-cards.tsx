import { useQuestions } from '../contexts/questions-context';
import { groupQuestionsByCategory, groupQuestionsByDifficulty } from '../utilities/questions-processing';

const SummaryCards = () => {
    const { questions } = useQuestions();

    const categoryData = groupQuestionsByCategory(questions);
    const difficultyData = groupQuestionsByDifficulty(questions);

    const mostCommonDifficulty = difficultyData.reduce((max, item) => 
        item.count > max.count ? item : max, difficultyData[0]
    );

    const mostCommonCategory = categoryData.length > 0 
        ? categoryData.reduce((max, item) => item.count > max.count ? item : max, categoryData[0])
        : null;

    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="place-content-center bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform">
                <div className="flex items-center justify-between gap-4">
                    <div className="flex-1 min-w-0">
                        <p className="text-blue-100 text-sm font-medium mb-1">Total Questions</p>
                        <p className="text-4xl font-bold text-white">{questions.length}</p>
                    </div>
                </div>
            </div>

            <div className="place-content-center bg-gradient-to-br from-purple-500 to-purple-600 p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform">
                <div className="flex items-center justify-between gap-4">
                    <div className="flex-1 min-w-0">
                        <p className="text-purple-100 text-sm font-medium mb-1">Categories</p>
                        <p className="text-4xl font-bold text-white">{categoryData.length}</p>
                    </div>
                </div>
            </div>

            <div className={`bg-gradient-to-br ${
                mostCommonDifficulty.difficulty === 'Easy' ? 'from-green-500 to-green-600' :
                mostCommonDifficulty.difficulty === 'Medium' ? 'from-yellow-500 to-yellow-600' :
                'from-red-500 to-red-600'
                } place-content-center p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform`}>
                    <div className="flex items-center justify-between gap-4">
                        <div className="flex-1 min-w-0">
                            <p className="text-white text-opacity-90 text-sm font-medium mb-1">Top Difficulty</p>
                            <p className="text-3xl font-bold text-white">{mostCommonDifficulty.difficulty}</p>
                        </div>
                    </div>
            </div>

            <div className="place-content-center bg-gradient-to-br from-indigo-500 to-indigo-600 p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform">
                <div className="flex items-center justify-between gap-4">
                    <div className="flex-1 min-w-0">
                        <p className="text-indigo-100 text-sm font-medium mb-1">Top Category</p>
                        <p className="text-2xl font-bold text-white break-words">{mostCommonCategory?.category || 'N/A'}</p>
                        <p className="text-indigo-200 text-sm">{mostCommonCategory?.count || 0} questions</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SummaryCards