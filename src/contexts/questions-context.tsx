import { createContext, useContext, useState, useEffect } from 'react'
import type { Question } from '../types/types';
import { fetchQuestions } from '../services/opentdbAPI';

interface QuestionsContextType {
    questions: Question[];
    loading: boolean;
    error: string | null;
    refetch: (amount?: number) => void;
    clearCache: () => void;
}

const QuestionsContext = createContext<QuestionsContextType | undefined>(undefined);

const CACHE_KEY = 'questions';

export const QuestionsProvider = ({children}: {children: React.ReactNode}) => {
    const [questions, setQuestions] = useState<Question[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const cachedQuestions = localStorage.getItem(CACHE_KEY);
        if (cachedQuestions) {
            setQuestions(JSON.parse(cachedQuestions));
        } else {
            loadQuestions();
        }
    }, []);

    const loadQuestions = async (amount: number = 50) => {
        setLoading(true);
        setError(null);
        try {
            const questions = await fetchQuestions(amount);
            setQuestions(questions);
            localStorage.setItem(CACHE_KEY, JSON.stringify(questions));
        } catch (error) {
            setError((error as Error).message);
        } finally {
            setLoading(false);
        }
    };

    const clearCache = () => {
        localStorage.removeItem(CACHE_KEY);
        setQuestions([]);
    };

    return (
        <QuestionsContext.Provider
            value={{
                questions,
                loading,
                error,
                refetch: loadQuestions,
                clearCache
            }}
        >
            {children}
        </QuestionsContext.Provider>
    )
}

export const useQuestions = () => {
    const context = useContext(QuestionsContext)
    if (!context) {
        throw new Error('useQuestions must be used within a QuestionsProvider')
    }
    return context;
};