import axios from "axios";

export default axios.create({
        // адрес сервера
        baseURL: "http://31.129.102.70:8080/api/",

        // заголовки запросов
        headers: {
            'Access-Control-Allow-Origin': '*',
            "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
            'Access-Control-Allow-Headers': "Content-Type, Authorization, X-Requested-With",
            "Content-type": "application/json"}
        }
);