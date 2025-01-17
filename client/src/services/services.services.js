import { fetchWrapper } from "../helpers/fetch-wrapper";

const getServices = async (payload) => {
    return fetchWrapper.get('api/services', payload).then((result) => {
        return result;
    });
}

const getServicesBySlug = async (slug) => {
    return fetchWrapper.get(`api/services/${slug}`).then((result) => {
        return result;
    });
}

export const services = {
    getServices,
    getServicesBySlug
};