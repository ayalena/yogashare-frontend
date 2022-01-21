import {useState} from "react";
import Dropzone from "react-dropzone";
import "./VideoFileUpload.css"
import {uploadFile} from "../../services/FileUploadService";
import {useHistory} from "react-router-dom";
import videoUpload from "../../assets/videofile.png";
import {MdOutlineFileUpload} from "react-icons/md"

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

    const upload = () => {
        let currentFile = selectedFiles[0];
        setProgress(0);
        setCurrentFile(currentFile);
        uploadFile(currentFile, (event) => {
            setProgress(Math.round((100 * event.loaded) / event.total));
            setMessage("File upload successful")
        })
            .catch(() => {
                setProgress(0);
                setMessage("Could not upload the file");
                setCurrentFile(undefined);
            });
        setSelectedFiles(undefined);
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
                                <div className="video-upload-text"> Drag and drop file here, <br/>
                                    <MdOutlineFileUpload className="video-upload-icon"/> or click to upload file
                                    <p className="file-upload-small-text">(Only *.mp4 videos will be accepted, with a maximum of 150 000 kilobytes)</p>
                                </div>
                            )}
                            </div>

                            <aside className="selected-file-wrapper">
                                <button
                                    className="file-upload-button"
                                    disabled={!selectedFiles}
                                    onClick={() => upload()}
                                >
                                    Upload
                                </button>
                            </aside>
                    </section>
                )}
            </Dropzone>

            <div>
                <div className="alert-light" role="alert">
                    {message}
                </div>

                {progress === 100 &&
                <button
                    className="media-button"
                    onClick={() => history.push("/media")}
                >
                    Click here to go to the media page
                </button>
                }
            </div>

        </div>
    )
}

export default VideoFileUpload