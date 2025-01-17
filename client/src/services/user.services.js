import { fetchWrapper } from "../helpers/fetch-wrapper";

const getProfile = async (payload) => {
    return fetchWrapper.get('api/profile', payload).then((result) => {
        return result;
    });
}

const updateProfile = async (payload) => {
    return fetchWrapper.post('api/profile', payload).then((result) => {
        return result;
    });
}

const changePassword = async (payload) => {
    return fetchWrapper.post('api/auth/change-password', payload).then((result) => {
        return result;
    });
}

export const userServices = {
    getProfile,
    updateProfile,
    changePassword
};