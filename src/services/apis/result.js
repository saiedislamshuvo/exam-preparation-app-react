import Api from "./api.js";

export default {

    index: async () => await Api.get('/account/results'),

    store: async (data) => await Api.post('/account/results', data),

};
