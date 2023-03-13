import { action, thunk } from 'easy-peasy';
import questionService from './../../services/apis/question';

const questionModel = {
    questions: [],
    setQuestions: action((state, questions) => {
        state.questions = questions;
    }),
    getQuestions: thunk(async (actions, mocktestid) => {
        try {
            const response = await questionService.index(mocktestid);
            actions.setQuestions(response.data);
            return response.data;
        } catch (error) {
            return error.response;
        }
    }),

    storeQuestions: thunk(async (actions, data) => {
        try {
            const response = await questionService.store(data);
            actions.getQuestions();
            return response;
        } catch (error) {
            return error.response;
        }
    }),

};

export default questionModel;
