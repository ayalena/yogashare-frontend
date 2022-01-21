// provides functions to create File

import axios from "axios";

const token = localStorage.getItem("token")

export default axios.create({
    baseURL: "http://localhost:8080/api/file",
    headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`
    }
});