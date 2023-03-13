import { useState } from 'react';
import { useStoreActions } from 'easy-peasy';
import { useParams, useNavigate } from 'react-router-dom';

const useExam = () => {
    const { mocktestid } = useParams();

    const navigate = useNavigate();

    const [storeResult] = useStoreActions((actions) => [
        actions.result.storeResult
    ]);

    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleOptionSelect = (questionId, optionId) => {
        const newSelectedOptions = [...selectedOptions];
        const existingOptionIndex = newSelectedOptions.findIndex(
            (option) => option.questionId === questionId
        );
        if (existingOptionIndex !== -1) {
            newSelectedOptions[existingOptionIndex] = { questionId, optionId };
        } else {
            newSelectedOptions.push({ questionId, optionId });
        }
        setSelectedOptions(newSelectedOptions);
    };


    const handleExamSubmit = (e) => {
        e.preventDefault();
        storeResult({
            mocktest_id: mocktestid,
            answer_paper: selectedOptions,
        }).then(() => {
            navigate(`/results`);
        });
    };

    return {
        selectedOptions,
        setSelectedOptions,
        handleOptionSelect,
        handleExamSubmit,
    };
};

export default useExam;