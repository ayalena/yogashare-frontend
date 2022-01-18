// provides functions to save File and get Files using Axios. initializes Axios with HTTP base Url and headers

import axios from "axios";

const token = localStorage.getItem("token")

export default axios.create({
    baseURL: "http://localhost:8080/api/file",
    headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`
    }
});