const ExamQuestion = ({ question, index, selectedOptionIndex, onOptionSelect }) => {

    return <div className="mx-2 mx-md-3 my-3 my-md-5">
        <div>
            <h6 className="text-body2">
                {index + 1}. {question.question || ''}
            </h6>
            <div className="row mt-3 mt-md-5">
                {
                    question.options.length > 0 &&
                    question.options.map((option, opindex) => (
                        <div
                            key={option.id}
                            className="col-md-6"
                            onClick={() => onOptionSelect(question.id, option.id)}
                        >
                            <div className={`card mocktest-option-item my-3 ${selectedOptionIndex === option.id && 'mocktest-option-item-selected'}`} >
                                <div className="card-body">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex">
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
                                                checked={selectedOptionIndex === option.id}
                                                onChange={() => { }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div >
    </div >;
};

export default ExamQuestion;