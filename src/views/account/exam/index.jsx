import { useEffect, useState } from 'react';
import Breadcrumb from '../../../components/shared/Breadcrumb.jsx';
import ExamQuestion from '../../../components/questions/ExamQuestion.jsx';
import useQuestion from '../../../hooks/useQuestion.js';
import useExam from '../../../hooks/useExam.js';

const ExamView = () => {

    const {
        mocktestid,
        mocktestQuestions,
        getMocktestQuestions,
    } = useQuestion();

    const {
        selectedOptions,
        setSelectedOptions,
        handleOptionSelect,
        handleExamSubmit,
    } = useExam();

    const fetchQuestions = () => {
        getMocktestQuestions(mocktestid);
    };

    useEffect(() => {
        fetchQuestions();
    }, []);

    return <div className=''>
        <div className="mocktest-exam app-layout">
            <Breadcrumb title={"Exam View"} subtitle={"hard work make success."} />
            <div className="container my-md-5">
                <form onSubmit={handleExamSubmit}>
                    <div className="card mocktest-card">
                        <div className="card-header py-2 py-md-4 px-4 sticky-sm">
                            <div
                                className="d-flex justify-content-between align-items-center"
                            >
                                <h5 className="text-body1 mb-0">Questions</h5>
                            </div>
                        </div>
                        <div className="card-body h-min-40 mb-5 mb-md-0">
                            {mocktestQuestions.length > 0 ? <div >
                                {
                                    mocktestQuestions.map((question, index) => (
                                        <div key={index}>
                                            <ExamQuestion
                                                question={question}
                                                index={index}
                                                selectedOptionIndex={
                                                    selectedOptions.find((option) => option.questionId === question.id)?.optionId
                                                }
                                                onOptionSelect={handleOptionSelect}
                                            />
                                        </div>
                                    ))
                                }
                            </div > : <div className="mx-5 my-5">
                                <h6 className="text-body2">No Questions Yet!</h6>
                            </div>}
                        </div >
                        <div className="card-footer py-4">
                            <div className="d-flex justify-content-end align-items-center">
                                <button type="submit" className="btn btn-primary px-4 mx-3">
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div >
                </form >
            </div >
        </div >
    </div >;
};

export default ExamView;