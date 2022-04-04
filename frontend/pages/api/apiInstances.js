import axios from "axios";

const url = 'http://localhost:5001/api';

const apiInstance = axios.create({
    baseURL: url,
});
const authHeader = ()=>{
    const token = localStorage.getItem("token")
    if (token) {
        return { "x-auth-token": token };
      } else {
        return {};
      }
}

// confire axios instance
apiInstance.interceptors.request.use(
    async function (config) {
        config.baseURL = url;
        config.headers = authHeader();
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

//export apiInstance
export default apiInstance;