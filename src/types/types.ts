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



export interface APIResponseCategories {
    trivia_categories: Category[];
}

export interface Category {
    id: number;
    name: string;
}



export interface APIResponseCategoryCount {
    category_id: number;
    category_question_count: CategoryQuestionCount;
}

export interface CategoryQuestionCount {
    total_question_count: number;
    total_easy_question_count: number;
    total_medium_question_count: number;
    total_hard_question_count: number;
}