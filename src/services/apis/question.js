import Api from "./api.js";

export default {

    index: async (id) => await Api.get('/account/questions/' + id),

    store: async (data) => await Api.post('/account/questions', data),

    update: async ({ id, data }) => await Api.put('/account/questions/' + id, data),

    delete: async (id) => await Api.delete('/account/questions/' + id),

};
