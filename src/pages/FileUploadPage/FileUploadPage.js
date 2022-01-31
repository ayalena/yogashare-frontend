import React from "react";
import './FileUploadPage.css';
import VideoFileUpload from "../../components/VideoFileUpload/VideoFileUpload";
import PageHeader from "../../components/PageHeader/PageHeader";
import Footer from "../../components/Footer/Footer";
import logo from "../../assets/ohm.png";

function FileUploadPage() {

    return (
        <>
            <PageHeader icon={logo} title="Upload files:"/>
            <div className="upload-form-container">
                <VideoFileUpload/>
            </div>
            <Footer/>
        </>
    );
}

export default FileUploadPage;