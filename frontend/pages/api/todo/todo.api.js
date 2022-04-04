import apiInstance from "../apiInstances";

const todoAPI = {

    addTodo: async (todo) => {
        try {
            const response = await apiInstance.post("/todo", todo);
            return response.data;
        } catch (error) {
            throw JSON.stringify(error);
        }
    },

    getTodoList: async () => {
        try {
            const response = await apiInstance.get("/todo");
            return response.data;
        } catch (error) {
            throw JSON.stringify(error);
        }
    },
    getTodoById: async (todo) => {
        try {
            const response = await apiInstance.get(`/todo/${id}`);
            return response.data;
        } catch (error) {
            throw JSON.stringify(error);
        }
    },

    updateTodoStatus: async (id, todo) => {
        try {
            const response = await apiInstance.put(`/todo/${id}`, todo);
            return response.data;
        } catch (error) {
            throw JSON.stringify(error);
        }
    },

    deleteTodo: async (id) => {
        try {
            const response = await apiInstance.delete(`/todo/${id}`);
            return response.data;
        } catch (error) {
            throw JSON.stringify(error);
        }
    }
}





export default todoAPI;