import axios from "axios";

const {VITE_API_URL} =import.meta.env;

export const api = axios.create({
    baseURL: `https://jornadasmetalurgia2026-back.onrender.com/api`,
    headers: {
        "Content-Type": "application/json"
    },
    withCredentials: true
})