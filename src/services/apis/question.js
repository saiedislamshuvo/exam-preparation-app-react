import Api from "./api.js";

export default {

    store: async (data) => await Api.post('/account/questions', data),

    update: async ({ id, data }) => await Api.put('/account/questions/' + id, data),

    delete: async (id) => await Api.delete('/account/questions/' + id),

};
