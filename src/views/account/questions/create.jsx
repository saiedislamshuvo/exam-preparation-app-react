import Breadcrumb from '../../../components/shared/Breadcrumb.jsx';
import QuestionItem from '../../../components/questions/QuestionItem.jsx';
import useQuestion from '../../../hooks/useQuestion.js';

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

export default CreateQuestions;