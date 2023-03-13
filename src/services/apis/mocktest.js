import Api from "./api.js";

export default {
    all: async () => await Api.get('/mocktests'),

    index: async () => await Api.get('/account/mocktests'),

    store: async (data) => await Api.post('/account/mocktests', data),

    update: async ({ id, data }) => await Api.put('/account/mocktests/' + id, data),

    delete: async (id) => await Api.delete('/account/mocktests/' + id),

};
