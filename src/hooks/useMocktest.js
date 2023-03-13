import { useEffect, useState } from 'react';
import { useStoreActions, useStoreState } from 'easy-peasy';

const useMocktest = () => {
    const mocktests = useStoreState(state => state.mocktest.myMocktests);
    const [
        getMocktests,
        storeMocktest,
        updateMocktest,
        deleteMocktest,
    ] = useStoreActions(actions => [
        actions.mocktest.getMyMocktests,
        actions.mocktest.storeMocktest,
        actions.mocktest.updateMocktest,
        actions.mocktest.deleteMocktest,
    ]);

    const [mocktestid, setMocktestid] = useState(null);
    const [title, setTitle] = useState('');

    useEffect(() => {
        getMocktests();
    }, [getMocktests]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (mocktestid || false) {
            handleUpdate();
        } else {
            handleStore();
        }
    };

    const handleStore = () => {
        if (title.trim() !== '') {
            storeMocktest({ title }).then(() => setTitle(''));
        }
    }

    const handleUpdate = () => {
        if (title.trim() !== '') {
            updateMocktest({ id: mocktestid, data: { title } })
                .then(() => {
                    setTitle('')
                    setMocktestid(null);
                });
        }
    }

    const handleDeleteMocktest = (id) => {
        if (confirm('Are you sure?')) {
            deleteMocktest(id);
        }
    }

    return {
        title,
        setTitle,
        mocktestid,
        setMocktestid,
        mocktests,
        handleSubmit,
        handleDeleteMocktest,
    };
};

export default useMocktest;