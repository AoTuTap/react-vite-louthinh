import axios from "./axios.customize";

const createUerApi = (fullName, email, password, phone) => {
    const URL_BACKEND = "/api/v1/user";
    const data = {
        fullName: fullName,
        email: email,
        password: password,
        phone: phone
    }
    return axios.post(URL_BACKEND, data);
}

const updateUerApi = (_id, fullName, phone) => {
    const URL_BACKEND = "/api/v1/user";
    const data = {
        _id:_id, 
        fullName:fullName, 
        phone:phone
    }
    return axios.put(URL_BACKEND,data);
}

const fetchAllUserApi = () => {
    const URL_BACKEND = "/api/v1/user";
    return axios.get(URL_BACKEND);
}
export {createUerApi, updateUerApi, fetchAllUserApi}