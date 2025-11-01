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
    return counts;
}

export function groupQuestionsByDifficulty(questions: Question[]) {
    const counts: Record<string, number> = {};
    for (const question of questions) {
        counts[question.difficulty] = (counts[question.difficulty] || 0) + 1;
    }
    return counts;
}

