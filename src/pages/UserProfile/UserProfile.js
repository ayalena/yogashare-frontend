import React, {useContext, useEffect, useState} from "react";
import './UserProfile.css';
import {Link, useHistory} from "react-router-dom";
import logo from "../../assets/ohm.png";
import PageHeader from "../../components/PageHeader/PageHeader";
import Footer from "../../components/Footer/Footer";
import {AuthContext} from "../../context/AuthContext";
import axios from "axios";
import {useParams} from "react-router-dom";
import Button from "../../components/Button/Button";

function UserProfile() {
    // const { id } = useParams();
    const history = useHistory()
    const {user, logOut, isAdmin} = useContext(AuthContext)

    const [profileData, setProfileData] = useState({});

    const token = localStorage.getItem("token")

    useEffect(() => {
        const source = axios.CancelToken.source();

        //get page content (mounting)
        async function fetchProfileData() {
            //get token to prove authorisation
            const token = localStorage.getItem('token');

            try {
                //get request to backend to get user file (doesn't exist yet)
                const result = await axios.get('http://localhost:3000/660/private-content', {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                    cancelToken: source.token,
                });

                setProfileData(result.data);
            } catch (e) {
                console.error(e);
            }
        }

        fetchProfileData();

        return function cleanup() {
            source.cancel();
        }
    }, [])

    function handleClick() {
        history.push("/update-info")
    }



    return (
        <>
            <PageHeader icon={logo} title="Profile Page"/>
            {/*<p>Page for user profile {id}</p>*/}
            <div className="profile-container">
                <section>
                    <h2>Info</h2>
                    <p><strong>Username: </strong> {user.username} </p>
                    <p><strong>Email:</strong> {user.email}</p>
                </section>

                <Button
                    className="update-button"
                    type="button"
                    onClick={() => handleClick()}
                    text="Update info"
                >
                </Button>

                {/*{Object.keys(profileData).length > 0 &&*/}
                {/*<section>*/}
                {/*    <h2>Strikt geheime profiel-content</h2>*/}
                {/*    <h3>{profileData.title}</h3>*/}
                {/*    <p>{profileData.content}</p>*/}
                {/*</section>*/}
                {/*}*/}

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

export default UserProfile;