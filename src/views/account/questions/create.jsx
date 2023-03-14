import Breadcrumb from '../../../components/shared/Breadcrumb.jsx';
import QuestionItem from '../../../components/questions/QuestionItem.jsx';
import useQuestion from '../../../hooks/useQuestion.js';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const CreateQuestions = () => {

    const {
        questionText,
        setQuestionText,
        handleQuestionTextSubmit,
        questions,
        handleSubmit,
        isRightOption,
        handleQuestionDelete,
    } = useQuestion();

    return <div className="app-layout">
        <Breadcrumb title={"Questions"} subtitle={"make question paper."}  >
            <ShowHint />
        </Breadcrumb>
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
                                        <div key={index}>
                                            <QuestionItem
                                                question={question}
                                                index={index}
                                                isRightOption={isRightOption}
                                                questions={questions}
                                                handleQuestionDelete={handleQuestionDelete}
                                            />
                                        </div>
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

const ShowHint = () => {
    const [show, setShow] = useState(false);

    return <div>
        <button className='d-flex btn btn-text' onClick={() => setShow(!show)}>
            <div>
                {show ? <FontAwesomeIcon icon={faMinus} /> : <FontAwesomeIcon icon={faPlus} />}
            </div>
            <p className="mb-0 card-title">
                Hint
            </p>
        </button>
        {show && <div>
            What is the purpose of version control software? <br />
            a. To track changes to code over time<br />
            b. To optimize database performance<br />
            c. To automate software testing<br />
            d. To manage software licenses<br />
            answer: a<br />
            explanation: To track changes to code over time. Version control software like Git allows developers to track changes made to their code over time, collaborate with other developers, and easily revert changes if necessary.<br />

            What is the difference between a compiler and an interpreter?<br />
            a. A compiler translates code into machine language, while an interpreter executes code directly<br />
            b. A compiler executes code directly, while an interpreter translates code into machine language<br />
            c. A compiler is used for scripting languages, while an interpreter is used for compiled languages<br />
            d. A compiler and an interpreter are the same thing<br />
            answer: a<br />
            explanation: A compiler translates code into machine language, while an interpreter executes code directly. A compiler takes the entire source code and translates it into machine language all at once, whereas an interpreter executes the code line-by-line.<br />
        </div>}

    </div >
}

export default CreateQuestions;