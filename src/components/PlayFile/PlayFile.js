import ReactPlayer from "react-player/lazy";
import axios from "axios";
import {useEffect, useState} from "react";

function PlayFile({ fileId }) {
    const [urlLink, setUrlLink] = useState(null)
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
        const token = localStorage.getItem("token")

        async function getFile() {
            setUrlLink(null)
            try {
                // je mag niet await gebruiken en daarna een .catch chainen, dan gebruik je twee methodes door elkaar
                await axios(`http://localhost:8080/api/file/${fileId}`, {
                    responseType: 'arraybuffer',
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    }
                }).then((response) => {
                    const url = window.URL.createObjectURL(new Blob([response.data]));
                    setUrlLink(url);
                })
                    .catch((error) => console.log(error));
                // Welke catch wil je?
            } catch (e) {
                console.log(e)
            }
        }
        if (fileId) {
            getFile()
        }

        return () => { setIsMounted(false)}
    }, [])

    return (
        <>
            {console.log(urlLink)}
            {urlLink !== null &&
            <ReactPlayer url={urlLink} width="695px" height="400px" controls={true}/>
            }
        </>
    )
}

export default PlayFile