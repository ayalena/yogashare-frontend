// import {useState} from "react";
// import Dropzone from "react-dropzone";
// import {uploadFile} from "../../services/FileUploadService";
// import {useHistory} from "react-router-dom";
// import audioUpload from "../../assets/audiofile.png";
// import {MdOutlineFileUpload} from "react-icons/md"
//
// function AudioFileUpload() {
//     const [selectedAudioFiles, setSelectedAudioFiles] = useState(undefined);
//     const [currentAudioFile, setCurrentFile] = useState(undefined);
//     const [progress, setProgress] = useState(0);
//     const [message, setMessage] = useState("");
//
//
//     const history = useHistory()
//     const onDrop = (files) => {
//         if (files.length > 0) {
//             setSelectedAudioFiles(files);
//         }
//     };
//
//     const uploadAudio = () => {
//         let currentAudioFile = selectedAudioFiles[0];
//
//         setProgress(0);
//         setCurrentFile(currentAudioFile);
//
//         uploadFile(currentAudioFile, (event) => {
//             setProgress(Math.round((100 * event.loaded) / event.total));
//             setMessage("File upload successful")
//         })
//             .catch(() => {
//                 setProgress(0);
//                 setMessage("Could not upload the file");
//                 setCurrentFile(undefined);
//             });
//         setSelectedAudioFiles(undefined);
//     };
//
//     return (
//         <div className="file-upload-container">
//
//             <Dropzone accept="audio/mp3" onDrop={onDrop} multiple={true}>
//                 {({getRootProps, getInputProps}) => (
//                     <section>
//                         <div className="dropzone" {...getRootProps()}>
//                             <img
//                                 className="audio-upload-logo"
//                                 src={audioUpload}
//                                 alt="audio-upload-image"
//                             />
//                             <label htmlFor="audio-upload">Upload an audio-file: </label>
//                             <input {...getInputProps()} />
//                             {selectedAudioFiles && selectedAudioFiles[0].name ? (
//                                 <div className="selected-audio-file">
//                                     {selectedAudioFiles && selectedAudioFiles[0].name}
//                                 </div>
//                             ) : (
//                                 <div className="audio-upload-text"> Only *.mp3 audio files are accepted <br/>
//                                     <MdOutlineFileUpload className="audio-upload-icon"/>
//                                 </div>
//                             )}
//                             <button
//                                 className="upload-button"
//                                 disabled={!selectedAudioFiles}
//                                 onClick={() => uploadAudio()}
//                             >
//                                 Upload
//                             </button>
//                         </div>
//                     </section>
//                 )}
//             </Dropzone>
//
//         </div>
//     )
// }
//
// export default AudioFileUpload