import React from "react";
import './UserInfo.css';

function UserInfo({ userFirstName, userLastName, userAge, userAddress, userPostalCode, userCountry }) {

    return (
        <>
            <div className="userinfo-container">
                <section className="user-info">
                    <p><strong>First name: </strong> {userFirstName} </p>
                    <p><strong>Last name: </strong> {userLastName} </p>
                    <p><strong>Age: </strong> {userAge} </p>
                    <p><strong>Address: </strong> {userAddress} </p>
                    <p><strong>Postal code: </strong> {userPostalCode} </p>
                    <p><strong>Country: </strong> {userCountry} </p>
                </section>
            </div>
        </>
    );
}

export default UserInfo;