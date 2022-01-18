import React from "react";
import './UserProfile.css';
import {useParams} from "react-router-dom";

function UserProfile() {
    const { id } = useParams();
    return (
        <>
        <p>Page for user profile {id}</p>
        </>
    );
}

export default UserProfile;