import React from "react";
import './FileUploadPage.css';
import FileUpload from "../../components/FileUpload/FileUpload";
import PageHeader from "../../components/PageHeader/PageHeader";
import Footer from "../../components/Footer/Footer";
import logo from "../../assets/ohm.png";

function FileUploadPage() {

    return (
        <>
            <PageHeader icon={logo} title="Upload files:"/>
            <FileUpload/>
            <Footer/>
        </>
    );
}

export default FileUploadPage;