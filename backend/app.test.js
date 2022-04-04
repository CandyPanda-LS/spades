const axios = require("axios");

describe("Testing the Todo  API", () => {
    const todoMock = {
        _id: "624abac99ad73693a869fae1",
        title: "Take out the trash"
    };
    const url = 'http://localhost:5001/api';

    const apiInstance = axios.create({
        baseURL: url,
    });
    const authHeader = () => {
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjQ0ZTBkNThhNzNhZWFmY2ZlODE1NDQiLCJpYXQiOjE2NDkwNjQ3MTgsImV4cCI6MTY0OTQyNDcxOH0.XA1F3oU25Irqcj_CWSejarnKtpO9bRQ7YTh8cHCphW8"
        if (token) {
            return { authToken: token };
        } else {
            return {};
        }
    }
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
    // confire axios instance
    it("GET/Todo -> get an array of todo", async () => {
        const response = await apiInstance.get(
            "/todo");
        expect(response.status).toBe(200);
    });
    it("GET/Todo/id -> get a specific todo by id", async () => {
        const response = await apiInstance.get(
            "/todo/624abac99ad73693a869fae1"
        );
        expect(response.status).toBe(200);
        expect(response.data._id).toBe(todoMock._id);
        expect(response.data.title).toBe(todoMock.title);
    });
    it("POST/Todo/ -> add a todo", async () => {
        const response = await apiInstance.post(
            "/todo",
            {
                title: "take out the trash"
            }
        );
        expect(response.status).toBe(200);
        expect(response.data.title).toBe("take out the trash");
    });
});