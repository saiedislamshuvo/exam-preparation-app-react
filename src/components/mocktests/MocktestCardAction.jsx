import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import MocktestCard from "./MocktestCard";
import useMocktest from '../../hooks/useMocktest';

const MocktestCardAction = ({ mocktest, handleEditMocktest, handleMocktestQuestions }) => {
    const { handleDeleteMocktest } = useMocktest();

    return <div style={{ position: 'relative' }}>
        <MocktestCard mocktest={mocktest} />
        <div className="mocktest-overlay">
            <div className="d-flex">
                <button onClick={() => handleMocktestQuestions(mocktest)} className="btn btn-sm btn-success me-2">
                    <FontAwesomeIcon icon={faPlus} />
                </button>
                <button onClick={() => handleEditMocktest(mocktest)} className="btn btn-sm btn-warning me-2">
                    <FontAwesomeIcon icon={faEdit} />
                </button>
                <button onClick={() => handleDeleteMocktest(mocktest.id)} className="btn btn-sm btn-danger">
                    <FontAwesomeIcon icon={faTrash} />
                </button>
            </div>
        </div>
    </div>
}

export default MocktestCardAction;