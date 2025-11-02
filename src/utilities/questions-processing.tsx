import type { Question } from "../types/types";

export function filterQuestionsByCategory(questions: Question[], category: string) {
    return questions.filter((question) => question.category === category);
}

export function filterQuestionsByDifficulty(questions: Question[], difficulty: string) {
    return questions.filter((question) => question.difficulty === difficulty);
}

export function filterQuestionsByType(questions: Question[], type: string) {
    return questions.filter((question) => question.type === type);
}

export function groupQuestionsByCategory(questions: Question[]) {
    const counts: Record<string, number> = {};
    
    for (const question of questions) {
        counts[question.category] = (counts[question.category] || 0) + 1;
    }

    return Object.entries(counts).map(([category, count]) => ({
        category,
        count
    }));
}

export function groupQuestionsByDifficulty(questions: Question[]) {
    const counts = [
        { difficulty: 'Easy', count: questions.filter(q => q.difficulty === 'easy').length },
        { difficulty: 'Medium', count: questions.filter(q => q.difficulty === 'medium').length },
        { difficulty: 'Hard', count: questions.filter(q => q.difficulty === 'hard').length }
    ];

    return counts;
}

export function getAllCategories(questions: Question[]) {
    const categories: string[] = [];
    for (const question of questions) {
        if (!categories.includes(question.category)) {
            categories.push(question.category);
        }
    }
    return categories;
}
