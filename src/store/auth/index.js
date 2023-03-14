import { action, thunk } from 'easy-peasy';
import authService from './../../services/apis/auth';

const authModel = {
    token: authService.getToken(),
    setToken: action((state, payload) => {
        authService.setToken(payload);
        state.token = payload;
    }),

    user: authService.getUser(),
    setUser: action((state, user) => {
        state.user = user;
        authService.setUser(user);
    }),

    login: thunk(async (actions, credentials) => {
        try {
            const response = await authService.login(credentials);
            if (response.status === 200) {
                actions.setToken(response.data.token);
                actions.setUser(response.data.user);
            }
            return response;
        } catch (error) {
            return error.response;
        }
    }),

    register: thunk(async (actions, userData) => {
        try {
            const response = await authService.register(userData);
            if (response.status === 201) {
                actions.setToken(response.data.token);
                actions.setUser(response.data.user);
            }
            return response;
        } catch (error) {
            return error.response;
        }
    }),

    logout: thunk(async (actions) => {
        try {
            await authService.logout();
            actions.removeToken();
            actions.removeUser();
        } catch (error) {
            console.log(error);
        }
    }),

    removeToken: action((state) => {
        state.token = null;
    }),

    removeUser: action((state) => {
        state.user = null;
    }),

    changePassword: thunk(async (actions, data) => {
        try {
            const response = await authService.changePassword(data);
            return response;
        } catch (error) {
            return error.response;
        }
    }),
};

export default authModel;
