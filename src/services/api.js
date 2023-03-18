import axios from "axios";

export const api = axios.create({
    baseURL: "https://rocketnotes-backendapi.onrender.com"
});