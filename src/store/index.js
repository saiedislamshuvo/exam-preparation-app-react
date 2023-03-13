import { createStore } from 'easy-peasy';
import auth from './auth/index';
import mocktest from './mocktest/index';
import question from './mocktest/question.js';
import result from './mocktest/result.js';

const store = createStore({
    auth, mocktest, question, result
});

export default store;
