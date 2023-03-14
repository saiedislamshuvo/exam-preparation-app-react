import { useEffect } from 'react';
import { Link } from "react-router-dom";
import Breadcrumb from '../../../components/shared/Breadcrumb.jsx';
import QuestionItem from '../../../components/questions/QuestionItem.jsx';
import useQuestion from '../../../hooks/useQuestion.js';

const Questions = () => {

    const {
        mocktestid,
        isRightOption,
        mocktestQuestions,
        getMocktestQuestions,
        handleQuestionDelete,
    } = useQuestion();

    const fetchQuestions = () => {
        getMocktestQuestions(mocktestid);
    };

    useEffect(() => {
        fetchQuestions();
    }, []);

    return <div className=''>
        <div className="mocktest-exam app-layout">
            <Breadcrumb title={"Questions"} subtitle={"make question paper."} />
            <div className="container my-md-5">
                <form>
                    <div className="card mocktest-card">
                        <div className="card-header py-2 py-md-4 px-4 sticky-sm">
                            <div
                                className="d-flex justify-content-between align-items-center"
                            >
                                <h5 className="text-body1 mb-0"> Questions</h5>
                                <div className="d-flex align-items-center">
                                    <Link
                                        to={`/questions/${mocktestid}/create`}
                                        className="btn btn-primary"
                                    >
                                        Add Questions
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="card-body h-min-40 mb-5 mb-md-0">
                            {mocktestQuestions.length > 0 ? <div >
                                {
                                    mocktestQuestions.map((question, index) => (
                                        <div key={index}>
                                            <QuestionItem
                                                question={question}
                                                index={index}
                                                isRightOption={isRightOption}
                                                mocktestid={mocktestid}
                                                questions={mocktestQuestions}
                                                handleQuestionDelete={handleQuestionDelete}
                                            />
                                        </div>
                                    ))
                                }
                            </div > : <div className="mx-5 my-5">
                                <h6 className="text-body2">No Questions Yet!</h6>
                            </div>}
                        </div >
                    </div >
                </form >
            </div >
        </div >
    </div >;
};

export default Questions;