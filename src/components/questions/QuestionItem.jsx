import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


const QuestionItem = ({ question, index, isRightOption, mocktestid, questions, handleQuestionDelete }) => {

    return <div className="mx-2 mx-md-3 my-3 my-md-5">
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
                    <button type='button' onClick={(e) => handleQuestionDelete(e, question.id, mocktestid, index, questions)} className="btn btn-sm">
                        <FontAwesomeIcon icon={faTrash} />
                    </button>
                </h6>
            </div>
            <div className="row mt-3 mt-md-5">
                {
                    question.options.length > 0 &&
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
                                    correct: option.correct || false,
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
                                                {option.option || ''}
                                            </p>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                defaultChecked={isRightOption({
                                                    index: opindex,
                                                    answer: question.answer,
                                                    correct: option.correct || false,
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
    </div >;
};

export default QuestionItem;