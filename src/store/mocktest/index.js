import { action, thunk } from 'easy-peasy';
import mocktestService from './../../services/apis/mocktest';

const mocktestModel = {
    mocktests: [],
    setMocktests: action((state, mocktests) => {
        state.mocktests = mocktests;
    }),
    getMocktests: thunk(async (actions) => {
        try {
            const response = await mocktestService.all();
            actions.setMocktests(response.data);
            return response.data;
        } catch (error) {
            return error.response;
        }
    }),
};

export default mocktestModel;
