import {useState} from "react";
import Dropzone from "react-dropzone";
import "./FileUpload.css"
import {uploadFile} from "../../services/FileUploadService";
import {useHistory} from "react-router-dom";
import videoUpload from "../../assets/videofile.png";
import audioUpload from "../../assets/audiofile.png";
import imageUpload from "../../assets/imagefile.png";
import {MdOutlineFileUpload} from "react-icons/md"

function FileUpload() {
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

            <Dropzone accept="video/mp4" onDrop={onDrop} multiple={true}>
                {({getRootProps, getInputProps}) => (
                    <section>
                        <div className="dropzone" {...getRootProps()}>
                            <img
                                className="video-upload-logo"
                                src={videoUpload}
                                alt="video-upload-image"
                            />
                            <label htmlFor="video-upload">Upload a video: </label>
                            <input {...getInputProps()} />
                            {selectedFiles && selectedFiles[0].name ? (
                                <div className="selected-video-file">
                                    {selectedFiles && selectedFiles[0].name}
                                </div>
                            ) : (
                                <div className="video-upload-text"> Upload <br/>
                                    <MdOutlineFileUpload className="video-upload-icon"/>
                                </div>
                            )}
                            <button
                                className="upload-button"
                                disabled={!selectedFiles}
                                onClick={() => upload()}
                            >
                                Upload
                            </button>
                        </div>
                    </section>
                )}
            </Dropzone>

            <Dropzone accept="audio/mp3" onDrop={onDrop} multiple={true}>
                {({getRootProps, getInputProps}) => (
                    <section>
                        <div className="dropzone" {...getRootProps()}>
                            <img
                                className="audio-upload-logo"
                                src={audioUpload}
                                alt="audio-upload-image"
                            />
                            <label htmlFor="audio-upload">Upload an audio-file: </label>
                            <input {...getInputProps()} />
                            {selectedFiles && selectedFiles[0].name ? (
                                <div className="selected-audio-file">
                                    {selectedFiles && selectedFiles[0].name}
                                </div>
                            ) : (
                                <div className="audio-upload-text"> Upload <br/>
                                    <MdOutlineFileUpload className="audio-upload-icon"/>
                                </div>
                            )}
                            <button
                                className="upload-button"
                                disabled={!selectedFiles}
                                onClick={() => upload()}
                            >
                                Upload
                            </button>
                        </div>
                    </section>
                )}
            </Dropzone>

            <Dropzone accept="image/jpeg, image/png" onDrop={onDrop} multiple={true}>
                {({getRootProps, getInputProps}) => (
                    <section>
                        <div className="dropzone" {...getRootProps()}>
                            <img
                                className="image-upload-logo"
                                src={imageUpload}
                                alt="image-upload-image"
                            />
                            <label htmlFor="image-upload">Upload an image: </label>
                            <input {...getInputProps()} />
                            {selectedFiles && selectedFiles[0].name ? (
                                <div className="selected-image-file">
                                    {selectedFiles && selectedFiles[0].name}
                                </div>
                            ) : (
                                <div className="image-upload-text"> Upload <br/>
                                    <MdOutlineFileUpload className="image-upload-icon"/>
                                </div>
                            )}
                            <button
                                className="upload-button"
                                disabled={!selectedFiles}
                                onClick={() => upload()}
                            >
                                Upload
                            </button>
                        </div>
                    </section>
                )}
            </Dropzone>
        </div>
    )
}

export default FileUpload