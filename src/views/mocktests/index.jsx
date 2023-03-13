import { useEffect } from 'react';
import { useStoreActions, useStoreState } from 'easy-peasy';
import MocktestCard from '../../components/mocktests/MocktestCard';

const Mocktests = () => {
    const mocktests = useStoreState(state => state.mocktest.mocktests);
    const getMocktests = useStoreActions(actions => actions.mocktest.getMocktests);

    useEffect(() => {
        getMocktests();
    }, [getMocktests]);

    return <div className='container'>
        <div className="py-4">
            <div className="row">
                {mocktests.map(mocktest => (
                    <div key={mocktest.id} className="col-md-3">
                        <MocktestCard mocktest={mocktest} />
                    </div>
                ))}
            </div>
        </div>
    </div >
}


export default Mocktests;