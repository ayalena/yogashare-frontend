import http from "../http-common"

export const uploadFile = (file, onUploadProgress) => {
    let formData = new FormData();

    formData.append("file", file);

    return http.post("/upload", formData, {
        headers: {
            "Content-Type": "form-data",
        },
        onUploadProgress,
    });
};