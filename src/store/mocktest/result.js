import { action, thunk } from 'easy-peasy';
import resultService from './../../services/apis/result';

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
            actions.getResults();
            return response;
        } catch (error) {
            return error.response;
        }
    }),

};

export default resultModel;
