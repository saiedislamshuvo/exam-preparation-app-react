import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import MocktestCard from "./MocktestCard";
import useMocktest from '../../hooks/useMocktest';

const MocktestCardAction = ({ mocktest, handleEditMocktest }) => {
    const { handleDeleteMocktest } = useMocktest();

    return <div style={{ position: 'relative' }}>
        <MocktestCard mocktest={mocktest} />
        <div className="mocktest-overlay">
            <div className="d-flex">
                <button onClick={() => handleEditMocktest(mocktest)} className="btn btn-sm btn-success mx-2">
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