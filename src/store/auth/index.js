import { action, thunk } from 'easy-peasy';
import authService from './../../services/apis/auth';
import { notify } from '../../services/helper/utils';

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
                notify({
                    message: 'Login Successful',
                    status: true,
                });
            }
            return response;
        } catch (error) {
            notify({
                message: 'Login failed',
                status: false,
            });
            return error.response;
        }
    }),

    register: thunk(async (actions, userData) => {
        try {
            const response = await authService.register(userData);
            if (response.status === 201) {
                actions.setToken(response.data.token);
                actions.setUser(response.data.user);
                notify({
                    message: 'Registration Successful',
                    status: true,
                });
            }
            return response;
        } catch (error) {
            notify({
                message: 'Registration failed',
                status: false,
            });
            return error.response;
        }
    }),

    logout: thunk(async (actions) => {
        try {
            actions.removeToken();
            actions.removeUser();
            notify({
                message: 'Logged Out',
                status: true,
            });
            await authService.logout();
        } catch (error) {
            notify({
                message: 'Something Went Wrong',
                status: false,
            });
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
            notify({
                message: 'Password Change Successfully',
                status: true,
            });
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

export default authModel;
