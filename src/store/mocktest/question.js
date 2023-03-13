import { action, thunk } from 'easy-peasy';
import questionService from './../../services/apis/question';

const questionModel = {

    storeQuestions: thunk(async (actions, data) => {
        try {
            const response = await questionService.store(data);
            // actions.getMyMocktests();
            return response;
        } catch (error) {
            return error.response;
        }
    }),

};

export default questionModel;
