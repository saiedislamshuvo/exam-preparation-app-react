import AccountLayout from "../components/AccountLayout";
import MocktestCardAction from '../../../components/mocktests/MocktestCardAction';
import MocktestForm from "../../../components/mocktests/MocktestForm";
import NoItem from "../../../components/shared/NoItem";
import useMocktest from "../../../hooks/useMocktest";
import { useNavigate } from "react-router-dom";

const Account = () => {
    const {
        title,
        setTitle,
        mocktestid,
        setMocktestid,
        mocktests,
        handleSubmit,
    } = useMocktest();

    const navigate = useNavigate();

    const handleEditMocktest = (mocktest) => {
        setTitle(mocktest.title);
        setMocktestid(mocktest.id);
    }

    const handleMocktestQuestions = (mocktest) => {
        setMocktestid(mocktest.id);
        navigate(`/questions/${mocktest.id}`);
    }

    return <AccountLayout>
        <MocktestForm
            mocktestid={mocktestid}
            title={title}
            setTitle={setTitle}
            handleSubmit={handleSubmit}
        />
        <div className="d-flex justify-content-between mt-4">
            <h1>My Mocktests</h1>
        </div>
        <div className="row">
            {mocktests.length > 0 ? mocktests.map(mocktest => (
                <div key={mocktest.id} className="col-md-4 my-2">
                    <MocktestCardAction
                        mocktest={mocktest}
                        handleEditMocktest={handleEditMocktest}
                        handleMocktestQuestions={handleMocktestQuestions}
                    />
                </div>
            )) : <NoItem />}
        </div>
    </AccountLayout >
}

export default Account;