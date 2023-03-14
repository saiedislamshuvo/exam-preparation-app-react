import Api from "./api.js";

const ACCESS_TOKEN_KEY = 'token';
const USER_KEY = 'user';

export default {
    async login(credentials) {
        const response = await Api.post('/login', credentials);
        if (response.status === 200) {
            const { token, user } = response.data;
            this.setToken(token);
            this.setUser(user);
        }
        return response;
    },

    async register(userData) {
        const response = await Api.post('/register', userData);
        if (response.status === 201) {
            const { token, user } = response.data;
            this.setToken(token);
            this.setUser(user);
        }
        return response;
    },

    async logout() {
        await Api.get('/logout');
        this.removeToken();
        this.removeUser();
    },

    async changePassword(password) {
        return Api.post('/change-password', password);
    },

    async forgotPassword(data) {
        return Api.post('/forgot-password', data);
    },

    getToken() {
        return localStorage.getItem(ACCESS_TOKEN_KEY);
    },

    setToken(token) {
        Api.defaults.headers['Authorization'] = `Bearer ${token}`;
        localStorage.setItem(ACCESS_TOKEN_KEY, token);
    },

    hasToken() {
        return !!localStorage.getItem(ACCESS_TOKEN_KEY);
    },

    removeToken() {
        Api.defaults.headers['Authorization'] = '';
        localStorage.removeItem(ACCESS_TOKEN_KEY);
    },

    getUser() {
        const userJson = localStorage.getItem(USER_KEY);
        return userJson ? JSON.parse(userJson) : null;
    },

    setUser(user) {
        localStorage.setItem(USER_KEY, JSON.stringify(user));
    },

    removeUser() {
        localStorage.removeItem(USER_KEY);
    },
};
