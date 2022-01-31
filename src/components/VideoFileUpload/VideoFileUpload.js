import {useState} from "react";
import Dropzone from "react-dropzone";
import "./VideoFileUpload.css"
import {uploadFile} from "../../services/FileUploadService";
import {useHistory} from "react-router-dom";
import videoUpload from "../../assets/videofile.png";
import {MdOutlineFileUpload} from "react-icons/md"
import Button from "../Button/Button";
import calculateProgress from "../../Helper/CalculateProgress";
import axios from "axios";

function VideoFileUpload() {
    const [selectedFiles, setSelectedFiles] = useState(undefined);
    const [currentFile, setCurrentFile] = useState(undefined);
    const [progress, setProgress] = useState(0);
    const [message, setMessage] = useState("");

    const history = useHistory()
    const onDrop = (files) => {
        if (files.length > 0) {
            setSelectedFiles(files);
        }
    };

    async function upload() {
        let currentFile = selectedFiles[0];
        setProgress(0);
        setCurrentFile(currentFile);
        try {
            const token = localStorage.getItem("token");
            console.log(token);
            let formData = new FormData();
            formData.append("file", currentFile);
            const result = await axios.post("http://localhost:8081/api/file/upload", formData, {
                headers: {
                    "Content-Type": "form-data",
                    Authorization: `Bearer ${token}`
                }
            });
            setProgress(100);
            setMessage("File upload successful");
        } catch (e) {
            console.error(e);
            setProgress(0);
            setMessage("Could not upload the file");
            setCurrentFile(null);
        }
        //
        // uploadFile(currentFile, (event) => {
        //     console.log(event);
        //     setProgress(calculateProgress(event));
        //     setMessage("File upload successful")
        // })
        //     .catch((error) => {
        //         setProgress(0);
        //         console.log(error.response);
        //         console.log(error);
        //         setMessage("Could not upload the file");
        //         setCurrentFile(undefined);
        //     });
        // setSelectedFiles(undefined);
    };

    return (
        <div className="file-upload-container">

            <Dropzone accept="video/mp4" onDrop={onDrop} multiple={false}>
                {({getRootProps, getInputProps}) => (
                    <section>
                        <div className="dropzone" {...getRootProps()}>
                            <img
                                className="video-upload-logo"
                                src={videoUpload}
                                alt="video-upload-image"
                            />
                            {/*<label htmlFor="video-upload">Upload a video: </label>*/}
                            <input {...getInputProps()} />
                            {selectedFiles && selectedFiles[0].name ? (
                                <div className="selected-video-file">
                                    {selectedFiles && selectedFiles[0].name}
                                </div>
                            ) : (
                                <div className="video-upload-text"> Drag and drop <br/>
                                    <MdOutlineFileUpload className="video-upload-icon"/> or click to upload file
                                    <p className="file-upload-small-text">(Only *.mp4 videos with a maximum of 150MB
                                        will be accepted)</p>
                                </div>
                            )}
                        </div>

                        <aside className="selected-file-wrapper">
                            <Button
                                className="upload-button"
                                disabled={!selectedFiles}
                                onClick={() => upload()}
                                text="Upload"
                            >

                            </Button>
                        </aside>
                    </section>
                )}
            </Dropzone>

            <div>
                <div className="alert-light" role="alert">
                    {message}
                </div>

                {progress === 100 &&
                <Button
                    className="media-button"
                    onClick={() => history.push("/media")}
                    text="To Media"
                >
                </Button>
                }
            </div>

        </div>
    )
}

export default VideoFileUpload