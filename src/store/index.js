import { createStore } from 'easy-peasy';
import auth from './auth/index';
import mocktest from './mocktest/index';

const store = createStore({
    auth, mocktest
});

export default store;
