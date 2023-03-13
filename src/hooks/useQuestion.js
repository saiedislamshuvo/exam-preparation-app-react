import { useState } from 'react';
import { useStoreActions, useStoreState } from 'easy-peasy';
import { useParams, useNavigate } from 'react-router-dom';

const useQuestion = () => {
    const { mocktestid } = useParams();

    const navigate = useNavigate();

    const [storeQuestions, getMocktestQuestions] = useStoreActions((actions) => [
        actions.question.storeQuestions,
        actions.question.getQuestions
    ]);
    const mocktestQuestions = useStoreState((state) => state.question.questions);

    const [questionText, setQuestionText] = useState('');

    const [questions, setQuestions] = useState([]);

    const handleQuestionTextSubmit = (e) => {
        e.preventDefault();

        const temp = questionText.split("\n");
        const splitedQuestions = temp.filter(item => item != '');

        const questionList = [];
        let currentQuestion = null;

        const handleCorrectOption = (currentQuestion) => {
            currentQuestion.options = currentQuestion.options.map((option, index) => {
                option.correct = isRightOption({
                    index,
                    answer: currentQuestion.answer
                });
                return option;
            });
        };

        for (const item of splitedQuestions) {
            if (/^[a-z]\.\s/i.test(item)) {
                currentQuestion.options.push({
                    option: item.replace(/^[a-z]\.\s/i, ""),
                    correct: false,
                });
            } else if (/^answer:\s/i.test(item)) {
                currentQuestion.answer = item.replace(/^answer:\s/i, "");
            } else if (/^explanation:\s/i.test(item)) {
                currentQuestion.explanation = item.replace(/^explanation:\s/i, "");
            } else {
                if (currentQuestion) {
                    handleCorrectOption(currentQuestion);
                    questionList.push(currentQuestion);
                }
                currentQuestion = {
                    question: item,
                    options: [],
                    answer: null,
                    explanation: null
                };
            }
        }
        if (currentQuestion) {
            handleCorrectOption(currentQuestion);
            questionList.push(currentQuestion);
        }

        setQuestions(questionList);
    };

    const isRightOption = ({ index, answer, correct }) => {
        if (correct) {
            return correct;
        }
        return String.fromCharCode(65 + index) == (answer && answer.toUpperCase());
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        storeQuestions({
            mocktest_id: mocktestid,
            questions,
        }).then(() => {
            navigate(`/questions/${mocktestid}`);
        });
    };

    return {
        mocktestid,
        questionText,
        setQuestionText,
        handleQuestionTextSubmit,
        questions,
        setQuestions,
        handleSubmit,
        isRightOption,
        mocktestQuestions,
        getMocktestQuestions,
    };
};

export default useQuestion;