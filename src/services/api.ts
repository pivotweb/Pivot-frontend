// src/api.ts
import axios from "axios";

export const API_BASE_URL = "https://pivot-9x7i.onrender.com";

export const api = axios.create({
        baseURL: API_BASE_URL,
        headers: {
            "Content-Type": "application/json",
        },
});
