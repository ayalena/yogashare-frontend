// import {useState} from "react";
// import Dropzone from "react-dropzone";
// import {uploadFile} from "../../services/FileUploadService";
// import {useHistory} from "react-router-dom";
// import imageUpload from "../../assets/imagefile.png";
// import {MdOutlineFileUpload} from "react-icons/md"
//
// function ImageFileUpload() {
//     const [selectedImageFiles, setSelectedImageFiles] = useState(undefined);
//     const [currentAudioFile, setCurrentAudioFile] = useState(undefined);
//     const [progress, setProgress] = useState(0);
//     const [message, setMessage] = useState("");
//
//
//     const history = useHistory()
//     const onDrop = (files) => {
//         if (files.length > 0) {
//             setSelectedImageFiles(files);
//         }
//     };
//
//     const upload = () => {
//         let currentAudioFile = selectedImageFiles[0];
//
//         setProgress(0);
//         setCurrentAudioFile(currentAudioFile);
//
//         uploadFile(currentAudioFile, (event) => {
//             setProgress(Math.round((100 * event.loaded) / event.total));
//             setMessage("File upload successful")
//         })
//             .catch(() => {
//                 setProgress(0);
//                 setMessage("Could not upload the file");
//                 setCurrentAudioFile(undefined);
//             });
//         setSelectedImageFiles(undefined);
//     };
//
//     return (
//         <div className="file-upload-container">
//
//             <Dropzone accept="image/jpeg, image/png" onDrop={onDrop} multiple={true}>
//                 {({getRootProps, getInputProps}) => (
//                     <section>
//                         <div className="dropzone" {...getRootProps()}>
//                             <img
//                                 className="image-upload-logo"
//                                 src={imageUpload}
//                                 alt="image-upload-image"
//                             />
//                             <label htmlFor="image-upload">Upload an image: </label>
//                             <input {...getInputProps()} />
//                             {selectedImageFiles && selectedImageFiles[0].name ? (
//                                 <div className="selected-image-file">
//                                     {selectedImageFiles && selectedImageFiles[0].name}
//                                 </div>
//                             ) : (
//                                 <div className="image-upload-text"> Only *.jpg or *.png images are accepted <br/>
//                                     <MdOutlineFileUpload className="image-upload-icon"/>
//                                 </div>
//                             )}
//                             <button
//                                 className="upload-button"
//                                 disabled={!selectedImageFiles}
//                                 onClick={() => upload()}
//                             >
//                                 Upload
//                             </button>
//                         </div>
//                     </section>
//                 )}
//             </Dropzone>
//         </div>
//     )
// }
//
// export default ImageFileUpload