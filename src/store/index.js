import { createStore } from 'easy-peasy';
import auth from './auth/index';
import mocktest from './mocktest/index';
import question from './mocktest/question.js';

const store = createStore({
    auth, mocktest, question
});

export default store;
