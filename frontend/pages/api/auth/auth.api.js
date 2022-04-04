import apiInstance from "../apiInstances";

const authAPI = {

    authReg: async (reg) => {
        try {
            const response = await apiInstance.post("/auth/register", reg);
            return response.data;
        } catch (error) {
            throw JSON.stringify(error);
        }
    },

    authLogin: async (user) => {
        try {
            const response = await apiInstance.post("/auth/login",user);
            return response.data;
        } catch (error) {
            throw JSON.stringify(error);
        }
    },
    
}





export default authAPI;