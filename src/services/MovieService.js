import axios from "axios";

const api = axios.create({
    baseURL: "https://671959c87fc4c5ff8f4d4379.mockapi.io/movies",
    timeout: 1000,
    headers: {
        "Content-Type": "application/json",
    },
});
