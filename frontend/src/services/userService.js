import axios from "axios";

const API_URL = "https://placement-preparation-portal-api.onrender.com/api/auth";

export const getProfile = async () => {

    const token = localStorage.getItem("token");

    const response = await axios.get(`${API_URL}/profile`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    return response.data;
};