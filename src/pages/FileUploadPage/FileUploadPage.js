import React from "react";
import './FileUploadPage.css';
import VideoFileUpload from "../../components/VideoFileUpload/VideoFileUpload";
import PageHeader from "../../components/PageHeader/PageHeader";
import Footer from "../../components/Footer/Footer";
import logo from "../../assets/ohm.png";
import AudioFileUpload from "../../components/AudioFileUpload/AudioFileUpload";
import ImageFileUpload from "../../components/ImageFileUpload/ImageFileUpload";

function FileUploadPage() {

    return (
        <>
            <PageHeader icon={logo} title="Upload files:"/>
            <div className="upload-form-container">
                <VideoFileUpload/>
                {/*<AudioFileUpload/>*/}
                {/*<ImageFileUpload/>*/}
            </div>
            <Footer/>
        </>
    );
}

export default FileUploadPage;