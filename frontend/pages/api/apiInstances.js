import axios from "axios";

const url = 'http://localhost:5001/api';

const apiInstance = axios.create({
    baseURL: url,
});

// confire axios instance
apiInstance.interceptors.request.use(
    async function (config) {
        config.baseURL = url;
        config.headers = {
            Authorization: "Bearer " + localStorage.getItem("token"),
        };
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

//export apiInstance
export default apiInstance;