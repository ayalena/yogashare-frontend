import React, {useContext, useEffect, useState} from "react";
import './Media.css';
import axios from "axios";
import {useForm} from "react-hook-form";
import PlayFile from "../../components/PlayFile/PlayFile";
import PageHeader from "../../components/PageHeader/PageHeader";
import logo from "../../assets/ohm.png"
import Footer from "../../components/Footer/Footer";
import {AuthContext} from "../../context/AuthContext";
import Button from "../../components/Button/Button";
import {Link} from "react-router-dom";

function Media() {
    const {handleSubmit} = useForm({mode: 'onChange'})
    const {isAdmin } = useContext(AuthContext);

    const [error, toggleError] = useState(false)
    const [loading, toggleLoading] = useState(false)
    const [fileLoading, toggleFileLoading] = useState(false)
    const [isMounted, setIsMounted] = useState(false)

    // to display all files in list
    const [fileInfo, setFileInfo] = useState([])
    // to display video or download video (id)
    const [currentFileInfo, setCurrentFileInfo] = useState([])

    const token = localStorage.getItem("token")

    function onFormSubmit(data) {
    }

    //get the file data
    useEffect(() => {
        setIsMounted(true)
        async function getFileData() {
            toggleFileLoading(true)
            try {
                const result = await axios("http://localhost:8081/api/file/files", {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    }
                })
                setFileInfo(result.data);
                setCurrentFileInfo(result.data[0]);
            } catch (e) {
                console.error(e)
            }
            toggleFileLoading(false)
        }
        getFileData()
        return () => {
            setIsMounted(false)
        }
    }, [])

    async function downloadFile() {
        const fileId = currentFileInfo
        const fileNames = fileInfo.map(fileName => {
            return fileName.name;
        })

        await axios(`http://localhost:8081/api/file/${fileId}`, {
            responseType: 'arraybuffer',
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        })
            .then((response) => {
                const url = window.URL.createObjectURL(new Blob([response.data]));
                const link = document.createElement('a');
                link.href = url;
                // value becomes name of file
                link.setAttribute('download', `${fileNames[0]}`);
                document.body.appendChild(link);
                link.click();
            })
            .catch((error) => console.log(error));
    }

    async function deleteFile() {
        const fileId = currentFileInfo;
        const answer = window.confirm("Are you sure you want to delete this video?")
        if (answer) {
            try {
                const result = await axios.delete(`http://localhost:8081/api/file/${fileId}`, {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    }
                })
                if (result.status === 200) {
                    window.location.reload(true)
                }
            } catch (e) {
                console.error(e)
            }
        }
    }

    function handleChange(e) {
        setCurrentFileInfo(e.target.value);
    }

    return (
        <>
            <PageHeader icon={logo}/>
            <div className="media-container">
                <p>Video and audio files will be here for students to watch </p>
                {loading && <span>Loading...</span>}
                {error && <span>Something went wrong loading data</span>}

                {!fileLoading ?
                    <div className="video-container">

                        <p className="video-text">Choose a video from your preferred teacher:</p>

                        <div>
                            <form
                                className="select-box-container"
                                onSubmit={handleSubmit(onFormSubmit)}>
                                <select
                                    className="select-box"
                                    onChange={handleChange}

                                >
                                    <option disabled>Title: Teacher:</option>
                                    {fileInfo.map(fileId => {
                                        return <option
                                            key={fileId.id}
                                            value={fileId.id}
                                        >
                                            {fileId.name} - {fileId.username}
                                        </option>
                                    })}
                                    ></select>
                            </form>
                        </div>

                        <div className="video">
                            < PlayFile
                                key={currentFileInfo}
                                fileId={currentFileInfo}
                                />
                        </div>

                        {!isAdmin && fileInfo.length < 1 &&
                                <p>No video's yet! Check the <Link to="/"> <b> homepage </b> </Link> to see when a new video will be aired.</p>
                        }

                        <div className="download-container">
                            {fileInfo.length > 0 &&
                            <p>If the video does not load, download it using the download button below</p>
                            }
                            {fileInfo.length > 0 &&
                            <Button
                                className="download-button"
                                onClick={() => downloadFile()}
                                text="Download!"
                            >
                            </Button>
                            }
                        </div>

                        {isAdmin &&
                        <div className="delete-container">
                            {fileInfo.length < 1 &&
                            <p>No video's yet! To upload a video, click <Link to="/fileupload"> <b> here! </b> </Link></p>
                            }
                            {fileInfo.length > 0 &&
                            <p>If you want to delete the video, please click the button below</p>
                            }
                            {fileInfo.length > 0 &&
                            <Button
                                className="delete-button"
                                onClick={() => deleteFile()}
                                text="Delete"
                            >
                            </Button>
                            }
                        </div>
                        }
                    </div> : <p>Loading...</p>}
            </div>
            <Footer/>
        </>
    );
}

export default Media;