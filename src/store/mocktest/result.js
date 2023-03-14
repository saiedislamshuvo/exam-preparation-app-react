import { action, thunk } from 'easy-peasy';
import resultService from './../../services/apis/result';
import { notify } from '../../services/helper/utils';

const resultModel = {
    results: [],
    setResults: action((state, results) => {
        state.results = results;
    }),
    getResults: thunk(async (actions, mocktestid) => {
        try {
            const response = await resultService.index(mocktestid);
            actions.setResults(response.data);
            return response.data;
        } catch (error) {
            return error.response;
        }
    }),

    storeResult: thunk(async (actions, data) => {
        try {
            const response = await resultService.store(data);
            notify({
                message: 'Successfully Done',
                status: true,
            });
            actions.getResults();
            return response;
        } catch (error) {
            notify({
                message: 'Something Went Wrong',
                status: false,
            });
            return error.response;
        }
    }),

};

export default resultModel;
