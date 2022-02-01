import React, {useContext} from "react";
import './UserProfilePage.css';
import {Link, useHistory} from "react-router-dom";
import logo from "../../assets/ohm.png";
import PageHeader from "../../components/PageHeader/PageHeader";
import Footer from "../../components/Footer/Footer";
import {AuthContext} from "../../context/AuthContext";
import Button from "../../components/Button/Button";
import UserInfo from "../../components/UserInfo/UserInfo";
import {UserProfileContext} from "../../context/UserProfileContext";

function UserProfilePage() {
    const {user, logOut, isAdmin} = useContext(AuthContext)
    const {userProfile, loading} = useContext(UserProfileContext)
    const history = useHistory()

    function handleClick() {
        if (userProfile.firstName === undefined) {
            history.push("/add-info")
        } else {
            history.push("/update-info")
        }
    }

    return (
        <>
            <PageHeader icon={logo} title="Profile Page"/>
            <div className="profile-container">
                {loading && <span>Loading...</span>}

                <h2>Info</h2>
                <div className="main-info">
                    <p><strong>Username: </strong> {user.username} </p>
                    <p><strong>Email:</strong> {user.email}</p>
                </div>

                <h3>Additional info:</h3>
                <div className="extra-info">
                    {userProfile &&
                    <UserInfo
                        userFirstName={userProfile.firstName}
                        userLastName={userProfile.lastName}
                        userAddress={userProfile.address}
                        userCountry={userProfile.country}
                        userAge={userProfile.age}
                    />
                    }
                </div>

                {!loading &&
                <Button
                    className="update-button"
                    type="button"
                    onClick={() => handleClick()}
                    text="Update info"
                >
                </Button>
                }

                {!isAdmin &&
                <p>To watch media content, click <Link to="/media"> <b> here! </b> </Link></p>
                }
                {isAdmin &&
                <p>To post a video, click <Link to="/fileupload"> <b> here! </b> </Link></p>
                }

                <Button
                    type="button"
                    onClick={logOut}
                    className="round-button"
                    text="Log out"
                >
                </Button>
            </div>
            <Footer/>
        </>
    );
}

export default UserProfilePage;