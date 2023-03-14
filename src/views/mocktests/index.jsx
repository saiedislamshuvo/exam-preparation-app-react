import { useEffect } from 'react';
import { useStoreActions, useStoreState } from 'easy-peasy';
import MocktestCard from '../../components/mocktests/MocktestCard';
import NoItem from '../../components/shared/NoItem';

const Mocktests = () => {
    const mocktests = useStoreState(state => state.mocktest.mocktests);
    const getMocktests = useStoreActions(actions => actions.mocktest.getMocktests);

    useEffect(() => {
        getMocktests();
    }, [getMocktests]);

    return <div className='container'>
        <div className="py-4">
            <div className="row">
                {mocktests.length > 0 ? mocktests.map(mocktest => (
                    <div key={mocktest.id} className="col-md-3">
                        <MocktestCard mocktest={mocktest} />
                    </div>
                )) : <NoItem />}
            </div>
        </div>
    </div >
}


export default Mocktests;