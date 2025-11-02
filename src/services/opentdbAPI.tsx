import axios from "axios";
import he from "he";
import type { APIResponse, Question } from "../types/types";

const triviaAPI = axios.create({
    baseURL: "https://opentdb.com/api.php",
    timeout: 5000
});

export const fetchQuestions = async (amountOfQuestions: number): Promise<Question[]> => {
    try{
        const response = await triviaAPI.get<APIResponse>("/", {
            params: {
                amount: amountOfQuestions
            }
        });

        if(response.data.response_code !== 0){
            handleAPIError(response.data.response_code);
        }

        const decodedQuestions = response.data.results.map(question => ({
            ...question,
            question: he.decode(question.question),
            correct_answer: he.decode(question.correct_answer),
            incorrect_answers: question.incorrect_answers.map(answer => he.decode(answer)),
            category: he.decode(question.category),
        }))

        return decodedQuestions;
    } catch(error){
        throw error;
    }
}

const handleAPIError = (code: number) => {
    switch(code){
        case 1:
            throw new Error("Not enough questions");
        case 2:
            throw new Error("Invalid parameters");
        default:
            throw new Error("Unknown error");
    }
}