import { createStore, action, persist } from 'easy-peasy';
import auth from './auth/index';

const store = createStore({
    auth,
});

export default store;
