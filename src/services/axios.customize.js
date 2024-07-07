import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:8080"
})

instance.interceptors.response.use(function(config) {
    return config
}, function(error) {
    return Promise.reject(error)
});


instance.interceptors.response.use(function(response) {
    if(response.data && response.data.data) return response.data;
    return response;
}, function(error) {
    return Promise.reject(error)
});

export default instance;