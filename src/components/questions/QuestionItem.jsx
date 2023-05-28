import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';


const QuestionItem = ({ question, index, isRightOption, mocktestid, questions, handleQuestionDelete }) => {
    return <div className="mx-2 mx-md-3 my-3 my-md-5">
        <div>
            <QuestionTextEditable
                question={question}
                index={index}
                mocktestid={mocktestid}
                questions={questions}
                handleQuestionDelete={handleQuestionDelete}
            />
            <div className="row mt-3 mt-md-5">
                {
                    question.options.length > 0 &&
                    question.options.map((option, opindex) => (
                        <div key={opindex} className="col-md-6">
                            <QuestionOptionEditable
                                question={question}
                                option={option}
                                opindex={opindex}
                                isRightOption={isRightOption}
                            />
                        </div>
                    ))
                }
            </div>
            <ExplanationTextEditable question={question} />
        </div >
    </div >;
};

const QuestionTextEditable = ({ question, index, mocktestid, questions, handleQuestionDelete }) => {
    const [isQuestionEditing, setIsQuestionEditing] = useState(false);
    const [questionText, setQuestionText] = useState(question.question || '');

    const handleQuestionEdit = (e) => {
        if (e.key == 'Enter') {
            e.preventDefault();
            setIsQuestionEditing(false);
        }
    }

    return <div>
        {
            isQuestionEditing ? <div
                className="input-group"
            >
                <input
                    type="text"
                    className="form-control"
                    value={questionText}
                    onChange={(e) => setQuestionText(e.target.value)}
                    onKeyDown={handleQuestionEdit}
                />
            </div> : <div >
                <h6 className="text-body2">
                    {index + 1}. {questionText}
                    <button type='button' onClick={(e) => handleQuestionDelete(e, question.id, mocktestid, index, questions)} className="btn btn-sm">
                        <FontAwesomeIcon icon={faTrash} />
                    </button>
                    <button type='button' onClick={(e) => { setIsQuestionEditing(!isQuestionEditing) }} className="btn btn-sm">
                        <FontAwesomeIcon icon={faEdit} />
                    </button>
                </h6>
            </div>
        }
    </div>
};

const QuestionOptionEditable = ({ question, option, opindex, isRightOption }) => {
    const [isOptionEditing, setIsOptionEditing] = useState(false);
    const [optionText, setOptionText] = useState(option.option || '');

    const handleOptionEdit = (e) => {
        if (e.key == 'Enter') {
            e.preventDefault();
            setIsOptionEditing(false);
        }
    }

    return <div>
        {
            isOptionEditing ? <div
                className="input-group"
            >
                <input
                    type="text"
                    className="form-control my-3"
                    value={optionText}
                    onChange={(e) => setOptionText(e.target.value)}
                    onKeyDown={handleOptionEdit}
                />
            </div> : <div
                className={`card mocktest-option-item my-3 ${isRightOption({
                    index: opindex,
                    answer: question.answer,
                    correct: option.correct || false,
                }) && 'mocktest-option-item-selected'}`}
            >
                <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex">
                            <button type='button' onClick={(e) => { setIsOptionEditing(!isOptionEditing) }} className="btn btn-sm">
                                <FontAwesomeIcon icon={faEdit} />
                            </button>
                            <h6 className="text-body2 me-4 mb-0">
                                {String.fromCharCode(65 + opindex)}
                            </h6>
                            <p className="option-text mb-0">
                                {optionText}
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
        }


    </div>;
}

const ExplanationTextEditable = ({ question }) => {
    const [isExplanationEditing, setIsExplanationEditing] = useState(false);
    const [explanationText, setExplanationText] = useState(question.explanation || '');

    const handleExplanationEdit = (e) => {
        if (e.key == 'Enter') {
            e.preventDefault();
            setIsExplanationEditing(false);
        }
    }

    return <div>
        {
            isExplanationEditing ? <div
                className="input-group"
            >
                <input
                    type="text"
                    className="form-control"
                    value={explanationText}
                    onChange={(e) => setExplanationText(e.target.value)}
                    onKeyDown={handleExplanationEdit}
                />
            </div> : <div >
                <p className="text-p">
                    {explanationText}
                    <button type='button' onClick={(e) => { setIsExplanationEditing(!isExplanationEditing) }} className="btn btn-sm">
                        <FontAwesomeIcon icon={faEdit} />
                    </button>
                </p>
            </div>
        }
    </div>

};

export default QuestionItem;