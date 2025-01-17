import { fetchWrapper } from "../helpers/fetch-wrapper";

const isUserLoggedIn = () => {
  const accessToken = localStorage.getItem("accessToken");
  if (accessToken && accessToken !== "") return true;
  return false;
};

const login = async (payload) => {
    return fetchWrapper.postWithoutToken('api/auth/login', payload).then((result) => {
        return result;
    });
}

const forgotPwd = async (payload) => {
    return fetchWrapper.postWithoutToken('api/auth/forgot-password', payload).then((result) => {
        return result;
    });
};

const verifyOTP = async (payload) => {
    return fetchWrapper.postWithoutToken('api/auth/verify-otp', payload).then((result) => {
        return result;
    });
}

const resetPassword = async (payload) => {
    return fetchWrapper.postWithoutToken('api/auth/reset-password', payload).then((result) => {
        return result;
    });
}

const register = async (payload) => {
  return fetchWrapper
  .post("api/auth/register", payload)
  .then((result) => {
    return result;
  });
};

const logout = async () => {
 return fetchWrapper.get('api/auth/logout').then((result)=>{
    return result;
 });
}

const resendOTP = async (payload) => {
    return fetchWrapper.post('/api/auth/resend',payload).then((result)=>{
        return result;
    });
}

const orderHistory = async () => {
    return fetchWrapper.get('/api/order').then((result) => {
        return result;
    });
};


export const authServices = {
    isUserLoggedIn,
    login,
    forgotPwd,
    verifyOTP,
    resetPassword,
    register,
    logout,
    resendOTP,
    orderHistory
};
