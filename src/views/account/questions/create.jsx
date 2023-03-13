import Breadcrumb from '../../../components/shared/Breadcrumb.jsx';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useStoreActions } from 'easy-peasy';

const CreateQuestions = () => {
    const { mocktestid } = useParams();

    const storeQuestions = useStoreActions((actions) => actions.question.storeQuestions);

    const [questionText, setQuestionText] = useState('');

    const [questions, setQuestions] = useState([]);

    const handleQuestionTextSubmit = (e) => {
        e.preventDefault();

        const temp = questionText.split("\n");
        const splitedQuestions = temp.filter(item => item != '');

        const questionList = [];
        let currentQuestion = null;

        for (const item of splitedQuestions) {
            if (/^[a-z]\.\s/i.test(item)) {
                currentQuestion.options.push(item.replace(/^[a-z]\.\s/i, ""));
            } else if (/^answer:\s/i.test(item)) {
                currentQuestion.answer = item.replace(/^answer:\s/i, "");
            } else if (/^explanation:\s/i.test(item)) {
                currentQuestion.explanation = item.replace(/^explanation:\s/i, "");
            } else {
                if (currentQuestion) {
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
            questionList.push(currentQuestion);
        }

        setQuestions(questionList);

    };

    const isRightOption = ({ index, answer }) => {
        return String.fromCharCode(65 + index) == answer.toUpperCase();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        storeQuestions({
            mocktest_id: mocktestid,
            questions,
        });
    };

    return <div className="app-layout">
        <Breadcrumb title={"Questions"} subtitle={"make question paper."} />
        <div className='container'>
            <div className="mocktest-exam">
                <form onSubmit={handleQuestionTextSubmit}>
                    <div className="card mocktest-card my-5">
                        <div className="card-header py-2 py-md-4 px-4">
                            <div className="d-flex justify-content-between align-items-center">
                                <h5 className="text-body1 mb-0">Paste Questions</h5>
                            </div>
                        </div>
                        <div className="card-body h-min-40 mb-5 mb-md-0">
                            <div className="form-group">
                                <textarea
                                    className="form-control"
                                    rows="10"
                                    placeholder="Paste Questions Text"
                                    name="questionText"
                                    value={questionText}
                                    onChange={(e) => setQuestionText(e.target.value)}
                                ></textarea>
                            </div>
                        </div>
                        <div className="card-footer py-4">
                            <div className="d-flex justify-content-end align-items-center">
                                <button type="submit" className="btn btn-primary px-4 mx-3">
                                    {"Make Questions >>"}
                                </button>
                            </div>
                        </div>
                    </div >
                </form>
                <form onSubmit={handleSubmit}>
                    <div className="card mocktest-card">
                        <div className="card-header py-2 py-md-4 px-4 sticky-sm">
                            <div className="d-flex justify-content-between align-items-center">
                                <h5 className="text-body1 mb-0">Create Questions</h5>
                            </div>
                        </div>
                        <div className="card-body h-min-40 mb-5 mb-md-0">
                            {questions.length > 0 ? <div >
                                {
                                    questions.map((question, index) => (
                                        <div key={index} className="mx-2 mx-md-3 my-3 my-md-5">
                                            <div>
                                                {/* <div
                                            className="input-group"
                                        >
                                            <input
                                                type="text"
                                                className="form-control"
                                            />
                                        </div> */}
                                                <div >
                                                    <h6 className="text-body2">
                                                        {index + 1}. {question.question || ''}
                                                        <button
                                                            v-if="editMode"
                                                            className="btn btn-sm"

                                                        >
                                                            <i className="fas fa-pen"></i>
                                                        </button>
                                                    </h6>
                                                </div>
                                                <div className="row mt-3 mt-md-5">
                                                    {
                                                        question.options.map((option, opindex) => (
                                                            <div
                                                                key={opindex}
                                                                className="col-md-6"
                                                            >
                                                                {/* <div className="my-3">
                                                            <input
                                                                type="text"
                                                                className="form-control mb-0"
                                                            />
                                                        </div> */}
                                                                <div
                                                                    className={`card mocktest-option-item my-3 ${isRightOption({
                                                                        index: opindex,
                                                                        answer: question.answer,
                                                                    }) && 'mocktest-option-item-selected'}`}
                                                                >
                                                                    <div className="card-body">
                                                                        <div className="d-flex align-items-center justify-content-between">
                                                                            <div className="d-flex">
                                                                                <button
                                                                                    className="btn btn-sm me-2"
                                                                                    title="option-edit-btn"
                                                                                >
                                                                                    <i className="fas fa-pen" title="option-edit-btn"></i>
                                                                                </button>
                                                                                <h6 className="text-body2 me-4 mb-0">
                                                                                    {String.fromCharCode(65 + opindex)}
                                                                                </h6>
                                                                                <p className="option-text mb-0">
                                                                                    {option || ''}
                                                                                </p>
                                                                            </div>
                                                                            <div className="form-check">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="radio"
                                                                                    defaultChecked={isRightOption({
                                                                                        index: opindex,
                                                                                        answer: question.answer,
                                                                                    })}
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))
                                                    }

                                                </div>
                                                <div>
                                                    {/* <div
                                                        className="my-3"
                                                    >
                                                        <input
                                                            type="text"
                                                            className="form-control mb-0"
                                                        />
                                                    </div> */}
                                                    <div >
                                                        <p className="text-p">
                                                            {question.explanation || ''}
                                                            <button
                                                                v-if="editMode"
                                                                className="btn btn-sm"
                                                            >
                                                                <i className="fas fa-pen"></i>
                                                            </button>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div >
                                        </div >
                                    ))
                                }
                            </div > : <div className="mx-5 my-5">
                                <h6 className="text-body2">No Questions Yet!</h6>
                            </div>}
                        </div >
                        {
                            questions.length > 0 && <div className="card-footer py-4">
                                <div className="d-flex justify-content-end align-items-center">
                                    <button type="submit" className="btn btn-primary px-4 mx-3">
                                        Save
                                    </button>
                                </div>
                            </div>
                        }
                    </div >
                </form >
            </div >
        </div >
    </div>;
};

export default CreateQuestions;