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

function Media() {
    const {handleSubmit} = useForm({mode: 'onChange'})
    const {isAdmin } = useContext(AuthContext);


    const [error, toggleError] = useState(false)
    const [loading, toggleLoading] = useState(false)
    const [fileLoading, toggleFileLoading] = useState(false)
    const [isMounted, setIsMounted] = useState(false)

    // to download file
    const [fileInfoForDownload, setFileInfoForDownload] = useState([])
    // to display video or download video
    const [currentFileInfo, setCurrentFileInfo] = useState([])
    // to select video from certain teacher
    const fileInfoMapped = fileInfoForDownload.map(({id, name, username}) => ({id, name, username}))

    const token = localStorage.getItem("token")

    function onFormSubmit(data) {
    }

    //get the file data
    useEffect(() => {
        setIsMounted(true)

        async function getFileData() {
            toggleFileLoading(true)
            try {
                const result = await axios("http://localhost:8080/api/file/files", {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    }
                })
                setFileInfoForDownload(result.data)
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
        const fileIdAndName = currentFileInfo.split(" ")
        await axios(`http://localhost:8080/api/file/${fileIdAndName[0]}`, {
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
                link.setAttribute('download', `${fileIdAndName[1]}`);
                document.body.appendChild(link);
                link.click();
            })
            .catch((error) => console.log(error));
    }

    async function deleteFile() {
        const fileIdAndName = currentFileInfo.split(" ")
        const answer = window.confirm("Are you sure you want to delete this video?")
        if (answer) {
            try {
                const result = await axios.delete(`http://localhost:8080/api/file/${fileIdAndName[0]}`, {
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


    return (
        <>
            <PageHeader icon={logo}/>
            <div className="media-container">
                <p>Video and audio files will be here for students to watch or download </p>
                {loading && <span>Loading...</span>}
                {error && <span>Something went wrong loading data</span>}

                {!fileLoading ?
                    <div className="video-container">

                        {fileInfoForDownload.length > 0 &&
                        <p className="video-paragraph">Choose a video from your preferred teacher:</p>
                        }

                        <div>
                            {fileInfoForDownload.length > 0 &&
                            <form
                                className="select-box-container"
                                onSubmit={handleSubmit(onFormSubmit)}>
                                <select
                                    className="select-box"
                                    onChange={e => setCurrentFileInfo(e.target.value)}>
                                    <option disabled>Video file name: Uploaded by user:</option>
                                    {fileInfoMapped.map(fileId => {
                                        return <option
                                            key={fileId.id}
                                            value={fileId.id.name}
                                        >
                                            {fileId.id} {fileId.name} {fileId.username}
                                        </option>
                                    })}
                                    ></select>
                            </form>
                            }
                        </div>

                        <div className="video">
                            {currentFileInfo.length > 0 &&
                            <PlayFile
                                key={currentFileInfo.split(" ")[0]}
                                fileId={currentFileInfo.split(" ")[0]}
                            />
                            }
                        </div>

                        <div className="download-container">

                            {currentFileInfo.length > 0 &&
                            <p>If the video does not load, download it using the download button below</p>
                            }

                            {currentFileInfo.length > 0 &&
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
                            {currentFileInfo.length > 0 &&
                            <p>If you want to delete the video, please click the button below</p>
                            }

                            {currentFileInfo.length > 0 &&
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