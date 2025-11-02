export interface APIResponse {
    response_code: number;
    results: Question[];
}

export interface Question {
    type: "multiple" | "boolean";
    difficulty: "easy" | "medium" | "hard";
    category: string;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
}