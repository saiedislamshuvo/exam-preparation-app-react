import { action, thunk } from 'easy-peasy';
import questionService from './../../services/apis/question';
import { notify } from '../../services/helper/utils';

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
            notify({
                message: 'Questions Created Successfully',
                status: true,
            });
            actions.getQuestions();
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

export default questionModel;
