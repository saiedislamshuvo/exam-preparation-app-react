import Api from "./api.js";

export default {
    all: async () => await Api.get('/mocktests'),

    index: async () => await Api.get('/account/mocktests'),
};
