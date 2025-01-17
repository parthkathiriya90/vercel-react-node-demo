import { fetchWrapper } from "../helpers/fetch-wrapper";

const orderFormDetails = async (payload) => {
    return fetchWrapper.postWithoutToken('/api/order/form-detail', payload).then((result) => {
        return result;
    });
}

const generateOrder = async (payload) => {
    return fetchWrapper.post('/api/order', payload).then((result) => {
        return result;
    });
}


export const orderServices = {
    orderFormDetails,
    generateOrder
};