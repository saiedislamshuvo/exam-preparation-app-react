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

    myMocktests: [],
    setMyMocktests: action((state, mocktests) => {
        state.myMocktests = mocktests;
    }),
    getMyMocktests: thunk(async (actions) => {
        try {
            const response = await mocktestService.index();
            actions.setMyMocktests(response.data);
            return response.data;
        } catch (error) {
            return error.response;
        }
    }),

    storeMocktest: thunk(async (actions, data) => {
        try {
            const response = await mocktestService.store(data);
            actions.getMyMocktests();
            return response;
        } catch (error) {
            return error.response;
        }
    }),

    updateMocktest: thunk(async (actions, data) => {
        try {
            const response = await mocktestService.update(data);
            actions.getMyMocktests();
            return response;
        } catch (error) {
            return error.response;
        }
    }),

    deleteMocktest: thunk(async (actions, data) => {
        try {
            const response = await mocktestService.delete(data);
            actions.getMyMocktests();
            return response;
        } catch (error) {
            return error.response;
        }
    }),
};

export default mocktestModel;
